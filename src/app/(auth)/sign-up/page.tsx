"use client";

import Link from "next/link";
import AuthForm from "../../../components/AuthForm";
import SocialProviders from "../../../components/SocialProviders";

interface FormData {
	email: string;
	password: string;
	fullName?: string;
}

export default function SignUpPage() {
	const handleFormSubmit = (data: FormData) => {
		console.log("Sign up data:", data);
		// TODO: Implement actual sign-up logic
	};

	const handleGoogleSignUp = () => {
		console.log("Google sign up clicked");
		// TODO: Implement Google OAuth
	};

	const handleMicrosoftSignUp = () => {
		console.log("Microsoft sign up clicked");
		// TODO: Implement Microsoft OAuth
	};

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="text-right">
				<p className="text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-dark-500">
					Already have an account?{" "}
					<Link 
						href="/sign-in" 
						className="text-dark-900 font-[var(--text-caption--font-weight)] hover:underline"
					>
						Sign In
					</Link>
				</p>
			</div>

			{/* Main content */}
			<div className="space-y-6">
				<div className="space-y-2">
					<h1 className="text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] text-dark-900">
						Join Total Health Supply Today!
					</h1>
					<p className="text-[var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)] text-dark-500">
						Create your account to start your healthcare journey
					</p>
				</div>

				{/* Social providers */}
				<SocialProviders
					onGoogleClick={handleGoogleSignUp}
					onMicrosoftClick={handleMicrosoftSignUp}
				/>

				{/* Auth form */}
				<AuthForm type="signup" onSubmit={handleFormSubmit} />
			</div>
		</div>
	);
}