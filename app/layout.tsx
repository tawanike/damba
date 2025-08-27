import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* ProductIQ widget - loads after page is interactive */}
        <Script id="productiq-widget" strategy="afterInteractive">
          {`(function() {
            var script = document.createElement('script');
            script.src = 'https://www.productiq.tech/widget.js?api_key=pk_live_PR570MTISEENtUPL7jLVjgzyDe9I2eaN';
            script.async = true;
            document.head.appendChild(script);
          })();`}
        </Script>
      </body>
    </html>
  );
}
