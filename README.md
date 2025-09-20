# Omar's Portfolio

This is a **Next.js 15** project, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It features a fully interactive portfolio with **Hero**, **Navbar**, **Floating Navbar**, and **Footer** components, fully tested using **Jest** and **React Testing Library**.

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/OneOmar/portfolio.git
cd portfolio
npm install
```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
The page auto-updates as you edit files.

Start editing pages in the `app/` directory (e.g., `app/page.tsx`).

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** for UI tests.

Run tests locally:

```bash
npm test
```

All components have **smoke tests** to ensure they render and behave correctly.
The CI/CD workflow is set up to automatically run tests on every push or pull request.

---

## 🎨 Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load the **Geist** font family from Vercel.

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) – interactive Next.js tutorial.
* [Next.js GitHub Repository](https://github.com/vercel/next.js) – your feedback and contributions are welcome.

---

## 🚀 Deployment

Deploy your app easily with **Vercel**:

* [Deploy on Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
* [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

## 🔧 Branch Protection & CI/CD

* All commits to `main` must go through a **pull request**.
* Status checks run the **Run Tests** workflow automatically.
* Branch cannot be merged unless tests pass, ensuring a **stable portfolio**.
