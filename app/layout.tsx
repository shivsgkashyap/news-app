import "./globals.css";
import Header from "./Header";
import type { Metadata } from "next";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "The Daily Insight",
  description: "Built with Next.js, React.js, TypeScript, Tailwind and GraphQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Providers>
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
