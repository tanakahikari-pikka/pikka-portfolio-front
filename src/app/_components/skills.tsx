import { motion } from "framer-motion";
import {
	BookOpen,
	Cloud,
	Code,
	Code2,
	Cpu,
	Database,
	Eye,
	FileCode,
	FileType,
	GitBranch,
	GraduationCap,
	Layers,
	Network,
	Palette,
	Users,
} from "lucide-react";
import { useState } from "react";

export const Skills = () => {
	const [activeCategory, setActiveCategory] = useState<
		"all" | "frontend" | "backend" | "database" | "devops" | "design"
	>("all");

	// スキルデータ
	const skillsData = {
		frontend: [
			{
				name: "React / Next.js",
				level: 92,
				years: 5,
				projects: 24,
				icon: "react",
			},
			{
				name: "TypeScript",
				level: 88,
				years: 4,
				projects: 20,
				icon: "typescript",
			},
			{
				name: "JavaScript",
				level: 95,
				years: 6,
				projects: 30,
				icon: "javascript",
			},
			{
				name: "HTML5 / CSS3",
				level: 90,
				years: 6,
				projects: 30,
				icon: "html5",
			},
			{
				name: "Tailwind CSS",
				level: 85,
				years: 3,
				projects: 15,
				icon: "tailwind",
			},
			{ name: "Vue.js", level: 75, years: 2, projects: 8, icon: "vue" },
		],
		backend: [
			{ name: "Node.js", level: 85, years: 4, projects: 18, icon: "nodejs" },
			{
				name: "Python / Django",
				level: 78,
				years: 3,
				projects: 12,
				icon: "python",
			},
			{ name: "GraphQL", level: 80, years: 3, projects: 10, icon: "graphql" },
			{ name: "REST API設計", level: 88, years: 5, projects: 22, icon: "api" },
			{
				name: "Express.js",
				level: 82,
				years: 4,
				projects: 16,
				icon: "express",
			},
		],
		database: [
			{ name: "MongoDB", level: 80, years: 3, projects: 14, icon: "mongodb" },
			{
				name: "PostgreSQL",
				level: 75,
				years: 4,
				projects: 16,
				icon: "postgresql",
			},
			{ name: "MySQL", level: 82, years: 5, projects: 18, icon: "mysql" },
			{ name: "Redis", level: 70, years: 2, projects: 8, icon: "redis" },
		],
		devops: [
			{ name: "Git / GitHub", level: 90, years: 6, projects: 30, icon: "git" },
			{ name: "Docker", level: 78, years: 3, projects: 12, icon: "docker" },
			{ name: "AWS", level: 75, years: 3, projects: 10, icon: "aws" },
			{ name: "CI/CD", level: 80, years: 3, projects: 14, icon: "cicd" },
			{
				name: "Vercel / Netlify",
				level: 85,
				years: 3,
				projects: 18,
				icon: "vercel",
			},
		],
		design: [
			{ name: "Figma", level: 70, years: 2, projects: 8, icon: "figma" },
			{ name: "UI/UX設計", level: 75, years: 3, projects: 14, icon: "uiux" },
			{
				name: "アクセシビリティ",
				level: 80,
				years: 2,
				projects: 10,
				icon: "accessibility",
			},
		],
	};

	// 表示するスキルをフィルタリング
	const getFilteredSkills = () => {
		if (activeCategory === "all") {
			return Object.entries(skillsData).flatMap(([_, skills]) => skills);
		}
		return skillsData[activeCategory as keyof typeof skillsData] || [];
	};

	// アイコン取得
	const getSkillIcon = (iconName: string) => {
		const iconProps = { size: 20, className: "mr-2" };

		switch (iconName) {
			case "react":
				return <Code {...iconProps} />;
			case "typescript":
			case "javascript":
				return <FileCode {...iconProps} />;
			case "html5":
				return <FileType {...iconProps} />;
			case "nodejs":
			case "python":
			case "express":
				return <FileCode {...iconProps} />;
			case "mongodb":
			case "postgresql":
			case "mysql":
			case "redis":
				return <Database {...iconProps} />;
			case "git":
			case "github":
				return <GitBranch {...iconProps} />;
			case "docker":
			case "aws":
			case "cicd":
			case "vercel":
				return <Cloud {...iconProps} />;
			case "figma":
			case "uiux":
				return <Palette {...iconProps} />;
			case "graphql":
			case "api":
				return <Network {...iconProps} />;
			case "accessibility":
				return <Eye {...iconProps} />;
			case "tailwind":
			case "vue":
				return <Layers {...iconProps} />;
			default:
				return <Cpu {...iconProps} />;
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.4 },
		},
	};

	return (
		<section
			id="skills"
			className="py-24 bg-gradient-to-b from-black to-indigo-950"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<motion.span
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-block bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 px-4 py-1 rounded-full font-medium mb-4 border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10"
					>
						技術スタック
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
					>
						スキルと専門知識
					</motion.h2>
					{/* <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-indigo-200 text-lg"
          >
            5年以上の経験を通して培った技術スキルです。
            常に最新技術のキャッチアップを行い、
            プロジェクトに最適なソリューションを提供しています。
          </motion.p> */}
				</div>

				{/* カテゴリタブ */}
				<div className="flex justify-center mb-12">
					<div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-black/30 backdrop-blur-sm rounded-lg border border-indigo-500/20">
						<button
							type="button"
							onClick={() => setActiveCategory("all")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeCategory === "all"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							すべて
						</button>
						<button
							type="button"
							onClick={() => setActiveCategory("frontend")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeCategory === "frontend"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							フロントエンド
						</button>
						<button
							type="button"
							onClick={() => setActiveCategory("backend")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeCategory === "backend"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							バックエンド
						</button>
						<button
							type="button"
							onClick={() => setActiveCategory("backend")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeCategory === "database"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							データベース
						</button>
						<button
							type="button"
							onClick={() => setActiveCategory("devops")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeCategory === "devops"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							DevOps
						</button>
						<button
							type="button"
							onClick={() => setActiveCategory("design")}
							className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeCategory === "design"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							デザイン
						</button>
					</div>
				</div>

				{/* スキルグリッド */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
				>
					{getFilteredSkills().map((skill, index) => {
						// const levelInfo = getSkillLevelInfo(skill.level);
						return (
							<motion.div
								key={`${activeCategory}-${skill.name}-${index}`}
								variants={itemVariants}
								className="bg-gradient-to-br from-indigo-950/50 to-black/70 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300 p-6"
							>
								{/* スキル名とアイコン */}
								<div className="flex items-center mb-4">
									{getSkillIcon(skill.icon)}
									<h3 className="text-lg font-bold text-white">{skill.name}</h3>
								</div>

								{/* 追加情報 */}
								<div className="grid grid-cols-2 gap-4 mt-5">
									<div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-indigo-500/10">
										<div className="text-xs text-indigo-400 mb-1">経験年数</div>
										<div className="text-lg font-semibold text-indigo-200">
											{skill.years}年
										</div>
									</div>
									<div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-indigo-500/10">
										<div className="text-xs text-indigo-400 mb-1">
											プロジェクト数
										</div>
										<div className="text-lg font-semibold text-indigo-200">
											{skill.projects}件
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* スキル統計情報 */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6"
				>
					<div className="bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center">
						<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
							6+
						</div>
						<div className="text-indigo-300 text-sm">開発経験年数</div>
					</div>
					<div className="bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center">
						<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
							30+
						</div>
						<div className="text-indigo-300 text-sm">完了プロジェクト</div>
					</div>
					<div className="bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center">
						<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
							15+
						</div>
						<div className="text-indigo-300 text-sm">習得技術</div>
					</div>
					<div className="bg-black/40 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center">
						<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
							500+
						</div>
						<div className="text-indigo-300 text-sm">GitHub貢献</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mt-16 max-w-4xl mx-auto text-center"
				>
					<h3 className="text-2xl font-bold text-indigo-300 mb-6">
						継続的なスキル向上
					</h3>
					<div className="flex flex-wrap justify-center gap-4">
						<div className="bg-black/30 backdrop-blur-sm px-5 py-3 rounded-lg border border-indigo-500/20 flex items-center">
							<BookOpen className="text-purple-400 mr-2" size={20} />
							<span className="text-indigo-200">技術書籍 / 勉強会</span>
						</div>
						<div className="bg-black/30 backdrop-blur-sm px-5 py-3 rounded-lg border border-indigo-500/20 flex items-center">
							<GraduationCap className="text-purple-400 mr-2" size={20} />
							<span className="text-indigo-200">オンラインコース</span>
						</div>
						<div className="bg-black/30 backdrop-blur-sm px-5 py-3 rounded-lg border border-indigo-500/20 flex items-center">
							<Code2 className="text-purple-400 mr-2" size={20} />
							<span className="text-indigo-200">個人プロジェクト</span>
						</div>
						<div className="bg-black/30 backdrop-blur-sm px-5 py-3 rounded-lg border border-indigo-500/20 flex items-center">
							<Users className="text-purple-400 mr-2" size={20} />
							<span className="text-indigo-200">コミュニティ参加</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
