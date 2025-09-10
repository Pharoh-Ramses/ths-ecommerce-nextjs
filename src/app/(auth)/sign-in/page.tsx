"use client";

import Link from "next/link";
import AuthForm from "../../../components/AuthForm";
import SocialProviders from "../../../components/SocialProviders";

interface FormData {
	email: string;
	password: string;
}

export default function SignInPage() {
	const handleFormSubmit = (data: FormData) => {
		console.log("Sign in data:", data);
		// TODO: Implement actual sign-in logic
	};

	const handleGoogleSignIn = () => {
		console.log("Google sign in clicked");
		// TODO: Implement Google OAuth
	};

	const handleMicrosoftSignIn = () => {
		console.log("Microsoft sign in clicked");
		// TODO: Implement Microsoft OAuth
	};

	return (
		<div className="space-y-8">
			{/* Header */}
			<div className="text-right">
				<p className="text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-dark-500">
					Don&apos;t have an account?{" "}
					<Link 
						href="/sign-up" 
						className="text-dark-900 font-[var(--text-caption--font-weight)] hover:underline"
					>
						Sign Up
					</Link>
				</p>
			</div>

			{/* Main content */}
			<div className="space-y-6">
				<div className="space-y-2">
					<h1 className="text-[var(--text-heading-3)] leading-[var(--text-heading-3--line-height)] font-[var(--text-heading-3--font-weight)] text-dark-900">
						Welcome Back!
					</h1>
					<p className="text-[var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)] text-dark-500">
						Sign in to access your Total Health Supply account
					</p>
				</div>

				{/* Social providers */}
				<SocialProviders
					onGoogleClick={handleGoogleSignIn}
					onMicrosoftClick={handleMicrosoftSignIn}
					dividerText="Or sign in with"
				/>

				{/* Auth form */}
				<AuthForm type="signin" onSubmit={handleFormSubmit} />

				{/* Forgot password */}
				<div className="text-center">
					<Link 
						href="/forgot-password" 
						className="text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-dark-500 hover:text-dark-900 hover:underline"
					>
						Forgot your password?
					</Link>
				</div>
			</div>
		</div>
	);
}