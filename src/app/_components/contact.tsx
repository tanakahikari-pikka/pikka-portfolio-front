import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => (
	<section id="contact" className="py-20 bg-gray-900">
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-12 text-center text-white">
				お問い合わせ
			</h2>
			<div className="max-w-2xl mx-auto">
				<div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
					<a
						href="mailto:contact@example.com"
						className="flex items-center text-gray-300 hover:text-blue-400"
					>
						<Mail size={24} className="mr-2" />
						contact@example.com
					</a>
					<a
						href="https://github.com/yourusername"
						className="flex items-center text-gray-300 hover:text-blue-400"
					>
						<Github size={24} className="mr-2" />
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/yourusername"
						className="flex items-center text-gray-300 hover:text-blue-400"
					>
						<Linkedin size={24} className="mr-2" />
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	</section>
);
