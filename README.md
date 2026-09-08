# 👨‍💻 Mehraj Sayyad — Developer Portfolio

Source code for my **Personal Developer Portfolio** — a fast, animated, single-page site showcasing my projects, skills, resume, and LeetCode activity.

Built with Next.js 16, React 19, Tailwind CSS v4, Motion and GSAP, this portfolio is designed to be sleek, fast, highly customizable, and expressive.

Live: your deployed URL

---

## ✨ Features

- Smooth-scroll, animated single-page layout with a sliding hero, about, skills, and work sections
- Static, hand-curated project cards — no external API dependency for content
- Live LeetCode stats widget (total solved, acceptance rate, difficulty breakdown, ranking) powered by a self-hosted API route that talks directly to LeetCode's GraphQL endpoint — no third-party wrapper service involved
- Interactive PDF resume viewer with download support
- Fully responsive, dark-themed UI with WebGL shader backgrounds
- SEO-optimized: OpenGraph metadata, JSON-LD structured data, sitemap, and robots config

---

## 🛠️ Tech Stack

| Category          | Technology                                                                                      | Description                                  |
| :---------------- | :---------------------------------------------------------------------------------------------- | :------------------------------------------- |
| **Framework**     | [Next.js 16](https://nextjs.org/)                                                               | App Router, Server Actions, Dynamic Metadata |
| **Core Library**  | [React 19](https://react.dev/)                                                                  | UI rendering & component architecture        |
| **Language**      | [TypeScript 5](https://www.typescriptlang.org/)                                                 | Strict type checking and autocompletion      |
| **Styling**       | [Tailwind CSS v4](https://tailwindcss.com/)                                                     | Modern utility-first CSS styling             |
| **Animations**    | [Motion](https://motion.dev/) / [GSAP](https://gsap.com/)                                       | Fluid layout animations & micro-interactions |
| **Shaders**       | [@paper-design/shaders-react](https://paper.design/)                                            | WebGL shader visual effects                  |
| **UI Components** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Iconography                                  |                  |

---

## 🚀 Quick Start (Run Locally)

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites

Make sure you have **Node.js 18+** installed. You can check with `node -v`.

### 2. Clone the Repository

```bash
git clone https://github.com/SayyadMehraj/ms.git
cd ms
```

### 3. Install Dependencies

```bash
npm install
# or
pnpm install
# or
bun install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your local site!

---

## 📁 Project Structure

```text
portfolio/
├── app/                         # Pages and routes (Next.js App Router)
│   ├── (main)/                  # Home page — assembles all sections
│   ├── api/leetcode/            # Self-hosted LeetCode stats API
│   ├── projects/                # Projects page
│   └── resume/                  # Resume viewer page
│
├── components/                  # UI building blocks
│   ├── sections/                # Hero, About, Skills, Work, Contact
│   ├── common/                  # Navbar, footer, shared layout
│   └── ui/                      # Small reusable UI primitives
│
├── constant/                    # Personalization & site configuration
│   ├── profile.ts               # Name, bio, education
│   ├── projects.ts              # Your projects
│   ├── skills.ts                # Your skills
│   ├── social.ts                # Social links
│   └── seo.ts                   # Site metadata
│
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
└── public/                      # Static assets (images, resume PDF)
```
---

### ✨ Personalization

Most of the personalization happens inside the **`constant/`** directory.

You can customize the portfolio by updating the files in this folder without modifying the component code:

* **`profile.ts`** — Update your name, bio, education, and personal information.
* **`projects.ts`** — Add or modify your projects.
* **`skills.ts`** — Update your technical skills.
* **`social.ts`** — Add your social media and professional profile links.
* **`seo.ts`** — Customize your site's metadata and SEO information.

> 💡 **Tip:** To personalize the portfolio, start by updating the files inside `constant/`. This allows you to make the site your own while keeping the underlying components unchanged.

---

### 💚 What You CAN Do

- **Clone & Fork**: Feel free to clone or fork this repository for your own personal use.
- **Customize**: Modify the content, styling, components, or layout to create your personal portfolio or personal blog.
- **Deploy**: Host your customized version anywhere (Vercel, Netlify, Cloudflare Pages, custom domain).