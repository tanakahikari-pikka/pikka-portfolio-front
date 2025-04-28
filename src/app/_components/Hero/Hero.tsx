import { motion } from "framer-motion";
import {
	ArrowDown,
	Code,
	Github,
	Linkedin,
	MonitorIcon,
	ServerIcon,
	Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { GalaxyBackGround } from "./GalaxyBackGround";

export const Hero = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-purple-900" />
			<GalaxyBackGround />
			<div className="container mx-auto px-4 py-16 z-10">
				<motion.div
					className="flex flex-col lg:flex-row items-center justify-between gap-12"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="lg:w-3/5">
						<motion.div variants={itemVariants} className="mb-2">
							<span className="inline-block bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 px-4 py-1 rounded-full font-medium mb-4 border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10">
								ソフトウェアエンジニア
							</span>
						</motion.div>
						<motion.h1
							variants={itemVariants}
							className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
						>
							田中 光
						</motion.h1>
						<motion.p
							variants={itemVariants}
							className="text-gray-300 mb-8 text-lg max-w-2xl leading-relaxed"
						>
							モダンな技術スタックを活用し、スケーラブルなWebアプリケーション開発に5年以上の経験を持つエンジニアです。ユーザー体験を最優先に考えた設計と実装が得意です。
						</motion.p>

						<motion.div variants={itemVariants} className="flex space-x-5 mt-8">
							<a
								href="https://github.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="GitHub"
							>
								<Github size={24} />
							</a>
							<a
								href="https://twitter.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
								aria-label="Twitter"
							>
								<Twitter size={24} />
							</a>
						</motion.div>
					</div>
					<motion.div variants={itemVariants} className="lg:w-2/5 relative">
						<div className="relative z-10">
							<div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-800 p-1 shadow-xl shadow-blue-500/30">
								<img
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
									alt="プロフィール写真"
									className="rounded-full object-cover w-full h-full"
								/>
							</div>

							<div className="absolute -bottom-4 -right-6 w-24 h-24 bg-purple-600 rounded-full opacity-60 blur-xl" />
							<div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-40 blur-xl" />
							<div className="absolute -right-16 top-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 opacity-80 shadow-lg shadow-orange-500/20 animate-orbit-slow" />
							<div className="absolute -left-12 top-2/3 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-70 shadow-lg shadow-blue-500/20 animate-orbit" />
						</div>
						<div className="absolute top-12 -left-4 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-float">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
								alt="React"
								width="30"
								height="30"
								className="animate-slow-spin"
							/>
						</div>
						<div className="absolute bottom-16 -right-6 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-float-delay">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
								alt="TypeScript"
								width="30"
								height="30"
							/>
						</div>
						<div className="absolute top-3/4 -left-8 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-float-slow">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
								alt="Node.js"
								width="30"
								height="30"
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.5, duration: 0.5 }}
			>
				<a
					href="#about"
					className="flex flex-col items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
					aria-label="次のセクションへスクロール"
				>
					<span className="text-sm mb-2">詳細を見る</span>
					<ArrowDown size={20} className="animate-bounce" />
				</a>
			</motion.div>

			<style jsx>{`
				@keyframes float {
					0% {
						transform: translateY(0px);
					}
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-delay {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes orbit-slow {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(45deg);
          }
          10%, 15% {
            opacity: 1;
          }
          30% {
            opacity: 0;
            transform: translate(-200px, 200px) rotate(45deg);
          }
          100% {
            opacity: 0;
            transform: translate(-200px, 200px) rotate(45deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        .animate-orbit-slow {
          animation: orbit-slow 30s linear infinite;
        }
        
        .animate-slow-spin {
          animation: slow-spin 10s linear infinite;
        }
      `}</style>
		</section>
	);
};
