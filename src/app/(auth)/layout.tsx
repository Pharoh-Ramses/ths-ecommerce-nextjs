import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Authentication | Total Health Supply",
	description: "Sign in or create an account to access Total Health Supply",
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen bg-light-200 flex">
			{/* Left side - Hero section */}
			<div className="hidden lg:flex lg:w-1/2 bg-dark-900 text-light-100 flex-col justify-between p-12">
				<div className="flex items-center">
					<div className="w-12 h-12 bg-light-100 rounded-lg flex items-center justify-center">
						<span className="text-dark-900 font-bold text-xl">THS</span>
					</div>
				</div>
				
				<div className="space-y-8">
					<div className="space-y-4">
						<h1 className="text-[var(--text-heading-1)] leading-[var(--text-heading-1--line-height)] font-[var(--text-heading-1--font-weight)] lg:text-6xl">
							Total Health Supply
						</h1>
						<h2 className="text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)]">
							Your Trusted Medical Supply Partner
						</h2>
					</div>
					<p className="text-[var(--text-lead)] leading-[var(--text-lead--line-height)] font-[var(--text-lead--font-weight)] text-dark-500">
						Join thousands of healthcare professionals who trust Total Health Supply for their medical equipment and supply needs.
					</p>
					<div className="flex space-x-2">
						<div className="w-2 h-2 bg-light-100 rounded-full"></div>
						<div className="w-2 h-2 bg-dark-500 rounded-full"></div>
						<div className="w-2 h-2 bg-dark-500 rounded-full"></div>
					</div>
				</div>

				<div className="text-[var(--text-footnote)] leading-[var(--text-footnote--line-height)] font-[var(--text-footnote--font-weight)] text-dark-500">
					© 2024 Total Health Supply. All rights reserved.
				</div>
			</div>

			{/* Right side - Form section */}
			<div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
				<div className="w-full max-w-md">
					{children}
				</div>
			</div>
		</div>
	);
}