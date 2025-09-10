"use client";

import Card from "@/components/Card";

export default function ComponentsDemo() {
	const sampleCards = [
		{
			title: "Digital Blood Pressure Monitor",
			description:
				"Accurate automatic blood pressure monitor with large LCD display and memory function for tracking readings over time.",
			image:
				"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
			price: "$79.99",
			originalPrice: "$99.99",
			rating: 4.5,
			reviewCount: 128,
			badge: "Best Seller",
			badgeVariant: "success" as const,
			buttonText: "Add to Cart",
		},
		{
			title: "Professional Stethoscope",
			description:
				"High-quality stethoscope with dual-head chest piece for clear auscultation of heart, lung, and bowel sounds.",
			image:
				"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop",
			price: "$149.99",
			rating: 4.8,
			reviewCount: 89,
			badge: "Featured",
			badgeVariant: "primary" as const,
			variant: "featured" as const,
			buttonText: "Add to Cart",
		},
		{
			title: "First Aid Kit Complete",
			description:
				"Comprehensive first aid kit with bandages, antiseptic, pain relievers, and emergency supplies.",
			image:
				"https://images.unsplash.com/photo-1603398938311-5ac4635d5662?w=500&h=500&fit=crop",
			price: "$34.99",
			rating: 4.2,
			reviewCount: 67,
			variant: "compact" as const,
			buttonText: "Add to Cart",
		},
	];

	return (
		<div className="min-h-screen flex flex-col bg-light-100">
			{/* Main Content */}
			<main className="flex-1 py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-4xl font-bold text-dark-900 mb-4">
							Component Showcase
						</h1>
						<p className="text-xl text-dark-700 max-w-3xl mx-auto">
							Demonstrating our responsive UI components - Navbar, Card, and
							Footer - built with TypeScript, Tailwind CSS, and following the
							THS design system.
						</p>
					</div>

					{/* Cards Grid */}
					<section className="mb-16">
						<h2 className="text-2xl font-bold text-dark-900 mb-8">
							Card Components
						</h2>

						{/* Different Card Variants */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
							{sampleCards.map((card, index) => (
								<Card
									key={index}
									{...card}
									onButtonClick={() =>
										console.log(`Added ${card.title} to cart`)
									}
								/>
							))}
						</div>

						{/* Horizontal Card Example */}
						<div className="mb-8">
							<h3 className="text-xl font-semibold text-dark-900 mb-4">
								Horizontal Layout
							</h3>
							<Card
								title="Pulse Oximeter Professional"
								description="Fingertip pulse oximeter for measuring oxygen saturation and pulse rate. Compact design with OLED display for healthcare professionals."
								image="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&h=500&fit=crop"
								price="$24.99"
								rating={4.6}
								reviewCount={234}
								orientation="horizontal"
								buttonText="Add to Cart"
								onButtonClick={() =>
									console.log("Added Pulse Oximeter to cart")
								}
							/>
						</div>

						{/* Card with Link */}
						<div className="mb-8">
							<h3 className="text-xl font-semibold text-dark-900 mb-4">
								Linked Card
							</h3>
							<div className="max-w-sm">
								<Card
									title="Compression Socks"
									description="Medical grade compression socks for improved circulation, reduced swelling, and leg fatigue relief."
									image="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500&h=500&fit=crop"
									price="$19.99"
									href="/products/compression-socks"
									badge="Popular"
									badgeVariant="warning"
								/>
							</div>
						</div>
					</section>

					{/* Component Features */}
					<section className="mb-16">
						<h2 className="text-2xl font-bold text-dark-900 mb-8">
							Component Features
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white p-6 rounded-lg shadow-sm border border-light-300">
								<div className="w-12 h-12 bg-blue text-white rounded-lg flex items-center justify-center mb-4">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-dark-900 mb-2">
									TypeScript Ready
								</h3>
								<p className="text-dark-700">
									All components are fully typed with comprehensive prop
									interfaces for better development experience.
								</p>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-sm border border-light-300">
								<div className="w-12 h-12 bg-green text-white rounded-lg flex items-center justify-center mb-4">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-dark-900 mb-2">
									Mobile First
								</h3>
								<p className="text-dark-700">
									Responsive design with mobile-first approach ensuring great
									experience across all devices.
								</p>
							</div>

							<div className="bg-white p-6 rounded-lg shadow-sm border border-light-300">
								<div className="w-12 h-12 bg-red text-white rounded-lg flex items-center justify-center mb-4">
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold text-dark-900 mb-2">
									Theme System
								</h3>
								<p className="text-dark-700">
									Components follow the established color palette and typography
									system for consistency.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
