import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import MobileBar from "@/components/mobilebar/MobileBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luxury Apartments & Villas in Gurugram | Premium Real Estate Homes",
 description:
    "Explore premium residential projects offering 2, 3 & 4 BHK luxury apartments in Gurugram. Get best price deals, floor plans, site visits and investment opportunities in prime locations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <MobileBar />
      </body>
    </html>
  );
}
