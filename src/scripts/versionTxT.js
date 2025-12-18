// BlackVideo (Codename: Zephyra) - UI Animation Engine
// Handles version decoding and intelligent marquee cycling

// --- Configuration ---
const CONFIG = {
    targetVersion: "v1.1.01.001.0001",
    loadingChar: '#',
    animationDelay: 100,      // Speed of character reveal
    cycleInterval: 6000,      // Time between message swaps
    scrollSpeed: 30,          // Pixels per second
    scrollMessages: [
        "v1.1.01.001.0001",
        "Build: 2025.12.15 (Stable)",
        "Next Release: Q1 2026",
        "SHA-256 Verified",
        "System: Zephyra Engine"
    ]
};

/**
 * Inject dynamic CSS for the marquee effect based on text width
 */
function injectMarqueeStyles(element, containerWidth) {
    const scrollDistance = element.scrollWidth - containerWidth;
    const duration = scrollDistance / CONFIG.scrollSpeed;
    const keyframeName = `marquee-${Math.random().toString(36).substr(2, 9)}`;

    let styleSheet = document.getElementById('blackvideo-marquee-styles');
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'blackvideo-marquee-styles';
        document.head.appendChild(styleSheet);
    }

    styleSheet.textContent += `
        @keyframes ${keyframeName} {
            0% { transform: translateX(0); }
            25% { transform: translateX(-${scrollDistance}px); }
            75% { transform: translateX(-${scrollDistance}px); }
            100% { transform: translateX(0); }
        }
    `;

    element.style.animation = `${keyframeName} ${duration}s ease-in-out infinite alternate`;
}

/**
 * Cycles through the message array and handles overflow scrolling
 */
function startMarqueeScroll(element) {
    const parent = element.parentElement;
    if (!parent) return;

    // Clear any existing interval to prevent memory leaks
    if (element.dataset.timerId) {
        clearInterval(parseInt(element.dataset.timerId));
    }

    let index = 0;

    const updateCycle = () => {
        const nextMessage = CONFIG.scrollMessages[index];
        index = (index + 1) % CONFIG.scrollMessages.length;

        element.style.animation = 'none';
        element.textContent = nextMessage;

        // Allow DOM to update before measuring width
        setTimeout(() => {
            const containerWidth = parent.offsetWidth;
            if (element.scrollWidth > containerWidth) {
                injectMarqueeStyles(element, containerWidth);
            }
        }, 50);
    };

    const timerId = setInterval(updateCycle, CONFIG.cycleInterval);
    element.dataset.timerId = timerId;
    updateCycle();
}

/**
 * Initial 'Decoding' effect
 */
function runDecodingEffect(element) {
    let iteration = 0;
    const length = CONFIG.targetVersion.length;

    const interval = setInterval(() => {
        element.textContent = CONFIG.targetVersion
            .split("")
            .map((char, i) => {
                if (i < iteration) return CONFIG.targetVersion[i];
                return CONFIG.loadingChar;
            })
            .join("");

        if (iteration >= length) {
            clearInterval(interval);
            startMarqueeScroll(element);
        }
        iteration++;
    }, CONFIG.animationDelay);
}

/**
 * Finds all targets and initializes them exactly once
 */
function initializeEngine() {
    const targets = document.querySelectorAll('.version-animated-text');

    targets.forEach((el) => {
        if (el.dataset.initialized === "true") return;
        
        el.dataset.initialized = "true";
        el.style.whiteSpace = 'nowrap';
        el.style.display = 'inline-block';
        
        runDecodingEffect(el);
    });
}

// --- Lifecycle Listeners ---

// 1. Initial Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEngine);
} else {
    initializeEngine();
}

// 2. Back-Forward Cache (Fixes the "Back Button" issue)
window.addEventListener('pageshow', (event) => {
    // If user navigated back, force re-initialization
    initializeEngine();
});

// 3. Dynamic Content Watcher (Fixes SPA navigation issues)
const observer = new MutationObserver(() => {
    if (document.querySelector('.version-animated-text:not([data-initialized="true"])')) {
        initializeEngine();
    }
});

observer.observe(document.body, { childList: true, subtree: true });