# VeriPharm Frontend

A modern, responsive web application for the VeriPharm pharmaceutical supply chain verification platform. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏥 About VeriPharm

VeriPharm is a comprehensive pharmaceutical supply chain verification API that provides pharmacy management systems with access to pre-verified medicines and complete supply chain transparency. This frontend application serves as the landing page and documentation portal for the VeriPharm platform.

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **TypeScript** - Full type safety and better developer experience
- **Component Library** - Built with shadcn/ui components
- **Performance Optimized** - Next.js 14 with App Router

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd veripharm-front
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📁 Project Structure

```
veripharm-front/
├── app/                    # Next.js App Router
│   ├── docs/              # Documentation pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   └── header.tsx         # Navigation header
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

The application uses a design system built with:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent component design
- **CSS Variables** for theming and customization

## 📱 Pages

- **Home** (`/`) - Main landing page with features, pricing, and CTAs
- **Documentation** (`/docs`) - API documentation and guides

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

### Other Platforms

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for deployment options.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email info@veripharm.com or visit our [documentation](https://docs.veripharm.com).

---

Built with ❤️ by the VeriPharm team
