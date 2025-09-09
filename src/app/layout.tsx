import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata: Metadata = {
	title: "Total Health Supply",
	description:
		"As a medical supply wholesaler, we prioritize our customers’ needs and offer tailored solutions to ensure their business’ success. We are dedicated to providing a comprehensive range of quality products, cost-effective solutions, and customer satisfaction. Backed by broad industry experience, we provide essential supplies and equipment to healthcare facilities and medical practices. Allow us to help you enhance your patient care with our trusted products.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${jost.className} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
