"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed w-full bg-gray-900 shadow-lg z-50">
			<nav className="container mx-auto px-4 h-[70px] flex items-center justify-between">
				<a href="/" className="text-2xl font-bold text-blue-500">
					Portfolio
				</a>
				<button
					type="button"
					className="md:hidden text-white"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<div className="hidden md:flex items-center space-x-8">
					<a
						href="#home"
						className="text-gray-300 hover:text-blue-500 hover:underline"
					>
						ホーム
					</a>
					<a
						href="#projects"
						className="text-gray-300 hover:text-blue-500 hover:underline"
					>
						プロジェクト
					</a>
					<a
						href="#skills"
						className="text-gray-300 hover:text-blue-500 hover:underline"
					>
						スキル
					</a>
					<a
						href="#contact"
						className="text-gray-300 hover:text-blue-500 hover:underline"
					>
						連絡先
					</a>
					<button
						type="button"
						className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
					>
						お問い合わせ
					</button>
				</div>

				{isMenuOpen && (
					<div className="absolute top-[70px] left-0 w-full bg-gray-900 shadow-lg md:hidden">
						<div className="flex flex-col p-4 space-y-4">
							<a href="#home" className="text-gray-300 hover:text-blue-500">
								ホーム
							</a>
							<a href="#projects" className="text-gray-300 hover:text-blue-500">
								プロジェクト
							</a>
							<a href="#skills" className="text-gray-300 hover:text-blue-500">
								スキル
							</a>
							<a href="#contact" className="text-gray-300 hover:text-blue-500">
								連絡先
							</a>
							<button
								type="button"
								className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors"
							>
								お問い合わせ
							</button>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
};
