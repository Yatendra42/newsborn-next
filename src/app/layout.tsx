import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NewsBorn - Your Source for Latest News",
  description: "Stay updated with the latest news and updates from around the world. Your trusted source for breaking news, politics, technology, sports, and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` ${inter.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    );
}
