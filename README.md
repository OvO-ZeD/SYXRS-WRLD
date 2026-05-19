This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SYXRS WRLD: Quick 3D Model Swap Workflow

You can now swap products and 3D models without editing core UI code.

### 1) Add your `.glb` model
- Put model files in `public/models/`
- Example: `public/models/drop-001-shirt-01.glb`

### 2) Register the product
- Open `app/data/products.ts`
- Add or edit a product in `dropProducts`
- Update these fields:
  - `name`, `category`, `color`, `price`, `fit`, `tags`
  - `modelPath` (ex: `/models/drop-001-shirt-01.glb`)
  - `previewImage`, `previewTitle`, `previewDescription`

### 3) Save and run
```bash
npm run dev
```

The product buttons, preview image, and 3D viewer are now data-driven from `dropProducts`.

## Auto Push on Save (Aggressive)

You asked for automatic updates to both GitHub and Vercel as changes are made.

Run:

```bash
npm run auto:ship
```

What it does:
- Watches `app/`, `public/`, `README.md`, `next.config.ts`, `package.json`
- On change, it auto-runs:
  - `git add -A`
  - `git commit -m "chore(auto-ship): update ..."`
  - `git push origin main`
- Vercel auto-deploys after each push.

Use with care: this is intentionally aggressive and can create many commits quickly.
