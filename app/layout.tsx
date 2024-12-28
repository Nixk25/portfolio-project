import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Melda | Creative developer",
  description:
    "Creative frontend developer focused on web apps, UI/UX design, and graphic design. Check out my projects and let's create something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
