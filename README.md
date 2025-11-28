# BlackVideo Centric Official Website

<img src="https://github.com/user-attachments/assets/d3e63515-9fbb-4b7a-bc0a-0de93f489e80">

The **BlackVideo official website** serves as the central digital platform for the BlackVideo application — a modern, integrated, and user-friendly video player solution. It acts as the main hub for users, contributors, and partners, providing access to downloads, updates, documentation, and community support.

This site enables seamless interaction between the core BlackVideo app, its developer network, and the broader user base — all seeking a powerful and versatile video playback experience.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
---

## Diagram (In Repo)

```mermaid
flowchart TD
    %% Developer Environment
    subgraph "Developer Environment"
        DE1["Code Editor & Git"]:::codeBuild
        DE2["pnpm Scripts\n(package.json\npnpm-lock.yaml)"]:::codeBuild
    end

    %% CI/CD Pipeline
    subgraph "Build & CI/CD Pipeline"
        CI["CI/CD Pipeline"]:::codeBuild
        VB["Vite Build\n(pnpm build)"]:::codeBuild
    end

    %% Source Code
    subgraph "Source Code (src/)"
        SC1["main.ts"]:::codeBuild
        SC2["counter.ts"]:::codeBuild
        subgraph "Styles"
            ST1["global.css"]:::codeBuild
            ST2["index.css"]:::codeBuild
        end
        subgraph "Dev Utilities & Data"
            DU1["umami.service.js"]:::codeBuild
            DU2["download-stats.json"]:::codeBuild
            DU3["download.stats.ts"]:::codeBuild
            DU4["title_bar.js"]:::codeBuild
        end
    end

    %% Static Assets
    subgraph "Static Assets (public/)"
        PA1["assets/"]:::infra
        PA2["assets/others/"]:::infra
    end

    %% Root HTML Template
    RT["index.html"]:::codeBuild

    %% Build Output
    subgraph "Build Output (dist/)"
        BO1["dist/"]:::infra
        BO2["index.html"]:::infra
        BO3["assets/"]:::infra
    end

    %% Hosting & CDN
    HO["Static Host & CDN"]:::infra

    %% Browser Runtime
    BR["Browser (Client)"]:::runtime
    DS["Download Stats JSON"]:::runtime

    %% External Service
    UM["Umami Analytics API"]:::external

    %% Connections
    DE1 --> DE2
    DE2 --> CI
    CI --> VB
    VB --> BO1
    RT --> BO2
    PA1 --> BO3
    PA2 --> BO3
    BO1 --> HO
    HO --> BR
    BR -->|"GET HTML/CSS/JS"| BO2
    BR -->|"GET JSON"| DS
    DS --> BR
    BR -->|"POST analytics events"| UM

    %% Click Events
    click SC1 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/main.ts"
    click SC2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/counter.ts"
    click ST1 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/global.css"
    click ST2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/index.css"
    click DU1 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/dev/app/database/api/umami.service.js"
    click DU2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/dev/app/database/download-stats.json"
    click DU3 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/dev/main/statistics/download.stats.ts"
    click DU4 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/dev/global/title_bar.js"
    click PA1 "https://github.com/blackblazent/blackvideo-centric-site/tree/main/public/assets/"
    click PA2 "https://github.com/blackblazent/blackvideo-centric-site/tree/main/public/assets/others/"
    click BO1 "https://github.com/blackblazent/blackvideo-centric-site/tree/main/dist/"
    click RT "https://github.com/blackblazent/blackvideo-centric-site/blob/main/index.html"
    click DE2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/package.json"
    click DE2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/pnpm-lock.yaml"
    click DE2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/tsconfig.json"
    click DE2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/src/vite-env.d.ts"
    click BO2 "https://github.com/blackblazent/blackvideo-centric-site/blob/main/dist/index.html"
    click BO3 "https://github.com/blackblazent/blackvideo-centric-site/tree/main/dist/assets/"
    click documentation "https://github.com/blackblazent/blackvideo-centric-site/tree/main/docs/screenshots/"

    %% Styles
    classDef codeBuild fill:#bbdefb,stroke:#1e88e5,color:#0d47a1
    classDef infra fill:#c8e6c9,stroke:#388e3c,color:#1b5e20
    classDef runtime fill:#fff9c4,stroke:#fbc02d,color:#f57f17
    classDef external fill:#ffcdd2,stroke:#e53935,color:#b71c1c
```

## ⚖️ Status & Licensing

All content and source code in this repository are proprietary intellectual property of **BlackVideo**. Redistribution, modification, or commercial use without explicit prior written permission is strictly prohibited.

---

## 📬 Contact

For support, business inquiries, or developer collaboration:

- **Email**: blackblazent.dev@gmail.com  
- **Website**: [BlackBlazent](www-blackblazent-com.vercel.app)
