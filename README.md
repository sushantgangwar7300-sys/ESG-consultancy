# Kai Prakriti — ESG & Sustainability Assurance Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)

An enterprise-grade ESG, ISO, and Carbon Verification web platform engineered with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Designed for high-defensibility regulatory reporting (SEBI BRSR Core, ISO 14064, ISO 14001 / 45001 / 50001, and EU CSRD readiness).

---

## Key Features

- **Audit Readiness Diagnostic Tool**: Interactive 4-step wizard calculating real-time enterprise compliance readiness scores (0–100) and risk profiles.
- **Assurance Pillars Breakdown**: In-depth coverage of:
  - **ISO Management Systems**: ISO 14001, 45001, and 50001 Integrated Management System (IMS).
  - **GHG & Carbon Verification**: Scope 1, 2, and 3 accounting backed by ISO 14064-1/3 and GHG Protocol standards.
  - **BRSR / ESG Assurance**: SEBI BRSR Core reasonable assurance readiness and materiality indicator mapping.
- **Enterprise Case Studies**: Verified audit engagements across automotive manufacturing, renewable IPP power grids, and hyperscale data centers.
- **Regulatory Briefings & Insights**: Dynamic article reader covering SEBI compliance checklists and decarbonization methodologies.
- **Inbound Lead Generation Desk**: Multi-step scoping modals and direct contact forms feeding into `/api/lead` with automated reference tickets.
- **Auditor Operations Portal**: Internal `/admin/leads` dashboard to monitor, search, and filter inbound client scoping inquiries.

---

## Tech Stack & Architecture

- **Framework**: Next.js 14+ (Pages Router)
- **Styling**: Tailwind CSS with custom design tokens (`#0F3A2E` Forest, `#16A34A` Emerald, `#FAFAFA` Canvas)
- **Language**: TypeScript (strict type checking)
- **Runtime**: Node.js v24 LTS

---

## Getting Started

### Prerequisites
- Node.js 18+ or 20+ (Node v24 LTS recommended)
- npm or yarn

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone git@github.com:sushantgangwar7300-sys/ESG-consultancy.git
cd ESG-consultancy
npm install
```

### 2. Development Server
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. On Windows, you can also double-click `start-dev.bat`.

### 3. Production Build
Compile and validate static and dynamic pages:
```bash
npm run build
npm start
```

---

## License
Proprietary / All rights reserved © Kai Prakriti Private Limited.
