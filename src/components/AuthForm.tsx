"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthFormProps {
	type: "signin" | "signup";
	onSubmit: (data: FormData) => void;
}

interface FormData {
	email: string;
	password: string;
	fullName?: string;
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
	const [formData, setFormData] = useState<FormData>({
		email: "",
		password: "",
		fullName: type === "signup" ? "" : undefined,
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{type === "signup" && (
				<div>
					<label
						htmlFor="fullName"
						className="block text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-dark-900 mb-2"
					>
						Full Name
					</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={formData.fullName || ""}
						onChange={handleChange}
						placeholder="Enter your full name"
						className="w-full px-4 py-3 border border-light-400 rounded-lg focus:outline-none focus:border-dark-900 text-[var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)]"
						required
					/>
				</div>
			)}

			<div>
				<label
					htmlFor="email"
					className="block text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-dark-900 mb-2"
				>
					Email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="johndoe@gmail.com"
					className="w-full px-4 py-3 border border-light-400 rounded-lg focus:outline-none focus:border-dark-900 text-[var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)]"
					required
				/>
			</div>

			<div>
				<label
					htmlFor="password"
					className="block text-[var(--text-caption)] leading-[var(--text-caption--line-height)] font-[var(--text-caption--font-weight)] text-dark-900 mb-2"
				>
					Password
				</label>
				<div className="relative">
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="minimum 8 characters"
						className="w-full px-4 py-3 border border-light-400 rounded-lg focus:outline-none focus:border-dark-900 text-[var(--text-body)] leading-[var(--text-body--line-height)] font-[var(--text-body--font-weight)] pr-12"
						minLength={8}
						required
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-900"
						aria-label={showPassword ? "Hide password" : "Show password"}
					>
						{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				</div>
			</div>

			<button
				type="submit"
				className="w-full bg-dark-900 text-light-100 py-3 px-6 rounded-lg font-[var(--text-body-medium--font-weight)] text-[var(--text-body-medium)] leading-[var(--text-body-medium--line-height)] hover:bg-dark-700 transition-colors focus:outline-none focus:ring-2 focus:ring-dark-900 focus:ring-offset-2"
			>
				{type === "signup" ? "Sign Up" : "Sign In"}
			</button>

			{type === "signup" && (
				<p className="text-[var(--text-footnote)] leading-[var(--text-footnote--line-height)] font-[var(--text-footnote--font-weight)] text-dark-500 text-center">
					By signing up, you agree to our{" "}
					<a href="/terms" className="text-dark-900 hover:underline">
						Terms of Service
					</a>{" "}
					and{" "}
					<a href="/privacy" className="text-dark-900 hover:underline">
						Privacy Policy
					</a>
				</p>
			)}
		</form>
	);
}