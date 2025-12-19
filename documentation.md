# BlackVideo Centric Site – Developer Documentation

This document provides technical documentation for developers and contributors working on the **BlackVideo Official Hub (Codename: Zephyra)**. It covers the project stack, setup instructions, architecture overview, and contribution guidelines.

---

## 📦 Repository

**GitHub Repository:**

```
https://github.com/BlackBlazent/BlackVideo-Centric-Site.git
```

This repository powers the **official distribution and documentation website** for the BlackVideo ecosystem.

---

## 🧱 Tech Stack

The BlackVideo Centric Site is built using a modern, production-grade web stack:

* **Framework:** React (with Vite)
* **Language:** TypeScript
* **Package Manager:** pnpm
* **Backend / Services:** Supabase
* **AI Integration:** Google Gemini API
* **Deployment:** Render (or compatible static hosting)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/BlackBlazent/BlackVideo-Centric-Site.git
cd BlackVideo-Centric-Site
```

---

### 2️⃣ Install Dependencies

This project uses **pnpm**. Make sure it is installed globally.

```bash
pnpm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file at the project root and configure the following:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ Never commit `.env` files to the repository.

---

### 4️⃣ Run the Development Server

```bash
pnpm dev / pnpm run dev --host
```

The app will be available at:

```
http://localhost:5173
```

---

## 🗂️ Site Pages & Components

The BlackVideo Centric Site is organized into multiple core pages, each serving a specific role in the BlackVideo ecosystem.

### 🏠 Home

* Landing page introducing **BlackVideo (Zephyra)**
* Highlights core features, philosophy, and latest announcements
* Entry point to downloads, documentation, and community

### 📦 Products

* Overview of BlackVideo products and tools
* Details about the **BlackVideo Player**, Zephyra Engine, and related utilities
* Roadmap previews and upcoming releases

### ⬇️ Download

* Official and verified download page
* Platform-specific availability (Android, Windows, Linux, etc.)
* Security notices and integrity guidance

### 🛒 Marketplace

* Extension and plugin marketplace for BlackVideo
* Collaboration hub for developers, extension authors, and teams
* Future support for extension publishing, versioning, and reviews

### 💰 Pricing

* Displays licensing tiers
* Free, community, and future premium offerings
* Clear usage boundaries and feature comparisons

### 🧾 Documentation

* Official documentation for the BlackVideo app and Zephyra engine
* User guides, setup instructions, and technical references
* Developer-focused guides for extensions and integrations

### 🧑‍💬 Community

* Community forum and discussion space
* User feedback, feature requests, and announcements
* Links to Discord and other official communication channels

### 🛠️ Support

* Help and support resources
* Frequently Asked Questions (FAQ)
* Contact options for technical issues and reports

---

## 🧠 Application Architecture

### Frontend

* Built with **React + TypeScript** for maintainability and type safety
* Uses **Vite** for fast builds and hot module replacement
* Modular component structure for scalability

### Backend (Supabase)

* Authentication (if enabled)
* Secure database storage
* API access for content and configuration

### AI Integration (Gemini)

* Used for chatbot and intelligent assistance features
* API access is restricted and managed via environment variables

---

## 🤖 Chatbot System

The BlackVideo site includes an AI-powered chatbot powered by **Gemini API**.

### Purpose

* User assistance
* Documentation guidance
* Platform navigation help

### Notes

* All AI requests are handled client-side with secure API abstraction
* No sensitive user data is stored without consent

---

## 🔐 API Access & Collaboration Requests

Developers or contributors who wish to:

* Request **Supabase access**
* Request **Gemini API integration permissions**
* Collaborate on features or modules

📩 **Contact Email:**

```
blackblazent.dev@gmail.com
```

Please include:

* Your GitHub profile
* Purpose of access
* Intended contribution scope

---

## 🤝 Contribution Guidelines

Contributions are welcome but **controlled** to ensure security and quality.

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Commit clear, descriptive messages
4. Open a pull request

All pull requests are reviewed before merging.

---

## ⚖️ License & Usage

This project is part of the **BlackVideo (Zephyra) ecosystem** and follows the licensing terms stated in the main repository.

Unauthorized redistribution, modification, or commercial use is prohibited unless explicitly permitted.

---

## 📬 Support

For technical concerns or questions:

* **Developer Contact:** [blackblazent.dev@gmail.com](mailto:blackblazent.dev@gmail.com)
* **Community:** Discord (via official BlackBlazent links)

---

© 2025 BlackBlazent. All rights reserved.
