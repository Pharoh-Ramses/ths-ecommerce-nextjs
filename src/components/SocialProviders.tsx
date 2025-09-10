"use client";

import Image from "next/image";

interface SocialProvidersProps {
	onGoogleClick: () => void;
	onMicrosoftClick: () => void;
	dividerText?: string;
}

export default function SocialProviders({
	onGoogleClick,
	onMicrosoftClick,
	dividerText = "Or sign up with",
}: SocialProvidersProps) {
	return (
		<div className="space-y-3">
			<button
				onClick={onGoogleClick}
				className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-light-400 rounded-lg hover:bg-light-200 transition-colors focus:outline-none focus:ring-2 focus:ring-dark-900 focus:ring-offset-2"
				type="button"
			>
				<Image
					src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google.svg"
					alt="Google"
					width={20}
					height={20}
					className="w-5 h-5"
				/>
				<span className="text-[var(--text-body-medium)] leading-[var(--text-body-medium--line-height)] font-[var(--text-body-medium--font-weight)] text-dark-900">
					Continue with Google
				</span>
			</button>

			<button
				onClick={onMicrosoftClick}
				className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-light-400 rounded-lg hover:bg-light-200 transition-colors focus:outline-none focus:ring-2 focus:ring-dark-900 focus:ring-offset-2"
				type="button"
			>
				<Image
					src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/microsoft.svg"
					alt="Microsoft"
					width={20}
					height={20}
					className="w-5 h-5"
				/>
				<span className="text-[var(--text-body-medium)] leading-[var(--text-body-medium--line-height)] font-[var(--text-body-medium--font-weight)] text-dark-900">
					Continue with Microsoft
				</span>
			</button>

			<div className="relative my-6">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-light-400"></div>
				</div>
				<div className="relative flex justify-center text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)]">
					<span className="bg-light-100 px-4 text-dark-500">
						{dividerText}
					</span>
				</div>
			</div>
		</div>
	);
}