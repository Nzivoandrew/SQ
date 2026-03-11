import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "Rugby Squad Manager",
  description: "Manage rugby match squads, player appearances, and statistics."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

