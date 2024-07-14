import type { Metadata } from "next";
import { Inter, Gabriela } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

const gabriela = Gabriela({ weight: ['400'], subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: "Yogesh's Portfolio",
  description: "Modern and minimalist portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabriela.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
