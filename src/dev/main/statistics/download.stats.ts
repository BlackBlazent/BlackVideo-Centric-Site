// TypeScript interfaces
interface DownloadStats {
    windows: number;
    mac: number;
    linux: number;
    android: number;
    ios: number;
    total: number;
    lastUpdated: string;
}

// Download statistics JSON data store - Reset to 0 for non-production
let downloadStats: DownloadStats = {
    windows: 0,
    mac: 0,
    linux: 0,
    android: 0,
    ios: 0,
    total: 0,
    lastUpdated: new Date().toISOString()
};

// Persistent storage for actual downloads (separate from simulated stats)
let persistentDownloads: DownloadStats = {
    windows: 0,
    mac: 0,
    linux: 0,
    android: 0,
    ios: 0,
    total: 0,
    lastUpdated: new Date().toISOString()
};

// Real-time stats manager
class DownloadStatsManager {
    private stats: DownloadStats;
    private persistent: DownloadStats;
    private updateInterval: NodeJS.Timeout | null = null;
    private listeners: Array<(stats: DownloadStats) => void> = [];
    private autoIncrementEnabled: boolean = false; // Added flag to control auto-increment

    constructor(initialStats: DownloadStats, persistentStats: DownloadStats) {
        this.stats = { ...initialStats };
        this.persistent = { ...persistentStats };
        this.calculateTotal();
    }

    // Add a listener for stats updates
    addListener(callback: (stats: DownloadStats) => void): void {
        this.listeners.push(callback);
    }

    // Notify all listeners of updates
    private notifyListeners(): void {
        const combinedStats = this.getCombinedStats();
        this.listeners.forEach(callback => callback({ ...combinedStats }));
    }

    // Calculate total downloads for both stats and persistent
    private calculateTotal(): void {
        this.stats.total = this.stats.windows + this.stats.mac + 
                         this.stats.linux + this.stats.android + this.stats.ios;
        this.stats.lastUpdated = new Date().toISOString();

        this.persistent.total = this.persistent.windows + this.persistent.mac + 
                              this.persistent.linux + this.persistent.android + this.persistent.ios;
        this.persistent.lastUpdated = new Date().toISOString();
    }

    // Get combined stats (simulated + persistent)
    private getCombinedStats(): DownloadStats {
        return {
            windows: this.stats.windows + this.persistent.windows,
            mac: this.stats.mac + this.persistent.mac,
            linux: this.stats.linux + this.persistent.linux,
            android: this.stats.android + this.persistent.android,
            ios: this.stats.ios + this.persistent.ios,
            total: this.stats.total + this.persistent.total,
            lastUpdated: new Date().toISOString()
        };
    }

    // Increment download count for a platform (PERSISTENT - for actual downloads)
    incrementDownload(platform: keyof Omit<DownloadStats, 'total' | 'lastUpdated'>): void {
        this.persistent[platform]++;
        this.calculateTotal();
        this.notifyListeners();
        this.animateCountUpdate(platform);
        
        // Log persistent download
        console.log(`Persistent download recorded for ${platform}:`, this.persistent[platform]);
    }

    // Simulate random downloads (TEMPORARY - resets on refresh) - NOW ONLY RUNS IF ENABLED
    simulateDownload(): void {
        if (!this.autoIncrementEnabled) {
            return; // Exit early if auto-increment is disabled
        }

        const platforms: Array<keyof Omit<DownloadStats, 'total' | 'lastUpdated'>> = 
            ['windows', 'mac', 'linux', 'android', 'ios'];
        const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
        const incrementAmount = Math.floor(Math.random() * 3) + 1; // 1-3 downloads

        for (let i = 0; i < incrementAmount; i++) {
            this.stats[randomPlatform]++;
        }
        
        this.calculateTotal();
        this.notifyListeners();
        this.animateCountUpdate(randomPlatform);
    }

    // Enable or disable auto-increment
    setAutoIncrement(enabled: boolean): void {
        this.autoIncrementEnabled = enabled;
        console.log(`Auto-increment ${enabled ? 'enabled' : 'disabled'}`);
    }

    // Check if auto-increment is enabled
    isAutoIncrementEnabled(): boolean {
        return this.autoIncrementEnabled;
    }

    // Start real-time simulation (but only if auto-increment is enabled)
    startRealTimeUpdates(intervalMs: number = 5000): void {
        if (this.updateInterval) {
            clearTimeout(this.updateInterval);
        }
        
        const updateLoop = () => {
            this.simulateDownload(); // This will only run if autoIncrementEnabled is true
            this.updateInterval = setTimeout(updateLoop, intervalMs);
        };
        
        this.updateInterval = setTimeout(updateLoop, intervalMs);
    }

    // Stop real-time updates
    stopRealTimeUpdates(): void {
        if (this.updateInterval) {
            clearTimeout(this.updateInterval);
            this.updateInterval = null;
        }
    }

    // Get current combined stats
    getStats(): DownloadStats {
        return { ...this.getCombinedStats() };
    }

    // Get only persistent stats
    getPersistentStats(): DownloadStats {
        return { ...this.persistent };
    }

    // Get only simulated stats
    getSimulatedStats(): DownloadStats {
        return { ...this.stats };
    }

    // Reset simulated stats to 0 (keep persistent)
    resetSimulatedStats(): void {
        this.stats = {
            windows: 0,
            mac: 0,
            linux: 0,
            android: 0,
            ios: 0,
            total: 0,
            lastUpdated: new Date().toISOString()
        };
        this.calculateTotal();
        this.notifyListeners();
    }

    // Animate count update
    private animateCountUpdate(platform: keyof Omit<DownloadStats, 'total' | 'lastUpdated'>): void {
        if (typeof document !== 'undefined') {
            const countElement = document.getElementById(`count-${platform}`);
            const totalElement = document.getElementById('total-downloads');
            
            if (countElement) {
                countElement.classList.add('count-update');
                setTimeout(() => countElement.classList.remove('count-update'), 500);
            }
            
            if (totalElement) {
                totalElement.classList.add('count-update');
                setTimeout(() => totalElement.classList.remove('count-update'), 500);
            }
        }
    }

    // Export stats as JSON
    exportJSON(): string {
        return JSON.stringify({
            combined: this.getCombinedStats(),
            persistent: this.persistent,
            simulated: this.stats
        }, null, 2);
    }

    // Load persistent stats from JSON
    loadFromJSON(jsonString: string): boolean {
        try {
            const data = JSON.parse(jsonString);
            if (data.persistent) {
                this.persistent = { ...data.persistent };
            }
            if (data.simulated) {
                this.stats = { ...data.simulated };
            }
            this.calculateTotal();
            this.notifyListeners();
            return true;
        } catch (error) {
            console.error('Error loading stats from JSON:', error);
            return false;
        }
    }
}

// Initialize the stats manager
const statsManager = new DownloadStatsManager(downloadStats, persistentDownloads);

// Export functions for external use
export function incrementDownload(platform: 'windows' | 'mac' | 'linux' | 'android' | 'ios'): void {
    statsManager.incrementDownload(platform);
}

export function fetchDownloadStats(): DownloadStats {
    return statsManager.getStats();
}

export function fetchPersistentDownloadStats(): DownloadStats {
    return statsManager.getPersistentStats();
}

export function fetchSimulatedDownloadStats(): DownloadStats {
    return statsManager.getSimulatedStats();
}

export function startRealTimeUpdates(intervalMs?: number): void {
    statsManager.startRealTimeUpdates(intervalMs);
}

export function stopRealTimeUpdates(): void {
    statsManager.stopRealTimeUpdates();
}

export function resetSimulatedStats(): void {
    statsManager.resetSimulatedStats();
}

export function addStatsListener(callback: (stats: DownloadStats) => void): void {
    statsManager.addListener(callback);
}

export function exportStatsJSON(): string {
    return statsManager.exportJSON();
}

export function loadStatsFromJSON(jsonString: string): boolean {
    return statsManager.loadFromJSON(jsonString);
}

// NEW: Export functions to control auto-increment
export function enableAutoIncrement(): void {
    statsManager.setAutoIncrement(true);
}

export function disableAutoIncrement(): void {
    statsManager.setAutoIncrement(false);
}

export function isAutoIncrementEnabled(): boolean {
    return statsManager.isAutoIncrementEnabled();
}

// Export the manager instance for direct access
export { statsManager };

// Export types
export type { DownloadStats };

// Update UI function (for browser environments)
function updateUI(stats: DownloadStats): void {
    if (typeof document === 'undefined') return;
    
    // Update individual platform counts
    const platforms: Array<keyof Omit<DownloadStats, 'total' | 'lastUpdated'>> = 
        ['windows', 'mac', 'linux', 'android', 'ios'];
    
    platforms.forEach(platform => {
        const element = document.getElementById(`count-${platform}`);
        if (element) {
            element.textContent = stats[platform].toLocaleString();
        }
    });

    // Update total count
    const totalElement = document.getElementById('total-downloads');
    if (totalElement) {
        totalElement.textContent = stats.total.toLocaleString();
    }

    // Update debug panel
    const debugElement = document.getElementById('debug-json');
    if (debugElement) {
        debugElement.textContent = statsManager.exportJSON();
    }
}

// Add download button event listeners (for browser environments)
function initializeDownloadButtons(): void {
    if (typeof document === 'undefined') return;
    
    const platforms: Array<keyof Omit<DownloadStats, 'total' | 'lastUpdated'>> = 
        ['windows', 'mac', 'linux', 'android', 'ios'];
    
    platforms.forEach(platform => {
        const button = document.getElementById(`download-stats-${platform}`);
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                incrementDownload(platform);
                
                // Visual feedback
                const buttonElement = button as HTMLElement;
                const originalText = buttonElement.textContent;
                buttonElement.textContent = 'Downloaded!';
                buttonElement.classList.add('bg-green-600');
                buttonElement.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                
                setTimeout(() => {
                    buttonElement.textContent = originalText || 'Download';
                    buttonElement.classList.remove('bg-green-600');
                    buttonElement.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
                }, 1000);
            });
        }
    });
}

// Initialize the application (for browser environments)
function init(): void {
    if (typeof document === 'undefined') return;
    
    // Add UI update listener
    addStatsListener(updateUI);
    
    // Initialize download buttons
    initializeDownloadButtons();
    
    // Initial UI update
    updateUI(fetchDownloadStats());
    
    // REMOVED: Auto-start of real-time updates
    // startRealTimeUpdates(5000); // This line was causing auto-increment
    
    console.log('Download Stats Manager initialized');
    console.log('Initial stats:', exportStatsJSON());
    console.log('NOTE: Auto-increment is DISABLED by default');
    console.log('Only user clicks will increment download counts');
    console.log('To enable auto-increment, call enableAutoIncrement() and startRealTimeUpdates()');
}

// Auto-initialize if in browser environment
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// Expose to global scope for debugging (browser only)
if (typeof window !== 'undefined') {
    (window as any).downloadStatsManager = statsManager;
    (window as any).downloadStatsAPI = {
        incrementDownload,
        fetchDownloadStats,
        fetchPersistentDownloadStats,
        fetchSimulatedDownloadStats,
        startRealTimeUpdates,
        stopRealTimeUpdates,
        resetSimulatedStats,
        exportStatsJSON,
        loadStatsFromJSON,
        enableAutoIncrement,    // NEW
        disableAutoIncrement,   // NEW
        isAutoIncrementEnabled  // NEW
    };
}