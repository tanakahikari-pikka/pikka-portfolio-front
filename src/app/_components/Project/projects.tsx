import { type MotionProps, motion } from "framer-motion";
import {
	Code,
	Cpu,
	Database,
	ExternalLink,
	Filter,
	Github,
	Globe,
	Library,
	Server,
	Tag,
} from "lucide-react";
import { useEffect, useState } from "react";

const projectsData = [
	{
		id: 1,
		title: "AIチャットボットプラットフォーム",
		description:
			"自然言語処理技術を活用したカスタマーサポート向けチャットボット。企業のサポート業務を効率化し、顧客満足度の向上に貢献。",
		image:
			"https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=500&q=80",
		technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "AWS"],
		category: "AI",
		github: "https://github.com/yourusername/ai-chatbot",
		demo: "https://ai-chatbot-demo.vercel.app/",
		featured: true,
	},
	{
		id: 2,
		title: "フィットネストラッカーアプリ",
		description:
			"パーソナライズされたワークアウト計画と進捗追跡機能を提供するモバイルアプリ。ユーザーの目標に合わせた最適な運動メニューを提案。",
		image:
			"https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80",
		technologies: ["React Native", "Firebase", "Redux", "GraphQL", "Expo"],
		category: "モバイル",
		github: "https://github.com/yourusername/fitness-tracker",
		demo: null,
		featured: true,
	},
	{
		id: 3,
		title: "ポートフォリオウェブサイト",
		description:
			"個人の作品やスキルを効果的に展示するための洗練されたポートフォリオサイト。モダンなデザインとパフォーマンス最適化を実現。",
		image:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
		technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
		category: "ウェブ",
		github: "https://github.com/yourusername/portfolio",
		demo: "https://portfolio-demo.vercel.app/",
		featured: false,
	},
	{
		id: 4,
		title: "データ分析ダッシュボード",
		description:
			"大規模データセットを視覚化し、ビジネスインサイトを提供するインタラクティブなダッシュボード。複雑なデータを理解しやすく表示。",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
		technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
		category: "データ",
		github: "https://github.com/yourusername/data-dashboard",
		demo: "https://data-dashboard-demo.vercel.app/",
		featured: true,
	},
	{
		id: 5,
		title: "Eコマースプラットフォーム",
		description:
			"多店舗対応のEコマースプラットフォーム。複雑な在庫管理システムと決済統合を実装し、スケーラブルなアーキテクチャを設計。",
		image:
			"https://images.unsplash.com/photo-1565799454278-06c2f7ed19c8?auto=format&fit=crop&w=500&q=80",
		technologies: ["Next.js", "Strapi CMS", "Stripe", "PostgreSQL", "Docker"],
		category: "ウェブ",
		github: "https://github.com/yourusername/ecommerce",
		demo: "https://ecommerce-demo.vercel.app/",
		featured: false,
	},
	{
		id: 6,
		title: "AR家具プレビューアプリ",
		description:
			"拡張現実を用いて家具を実際の部屋に配置してプレビューできるモバイルアプリ。ユーザーがアイテムを購入前に視覚化することを支援。",
		image:
			"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80",
		technologies: ["React Native", "ARKit", "ARCore", "Three.js", "Firebase"],
		category: "AR/VR",
		github: "https://github.com/yourusername/ar-furniture",
		demo: null,
		featured: false,
	},
];

// 全カテゴリーを抽出
const allCategories = [
	"すべて",
	...new Set(projectsData.map((project) => project.category)),
];

// 全技術を抽出
const allTechnologies = [
	...new Set(projectsData.flatMap((project) => project.technologies)),
];

// テクノロジーアイコンマッピング
const getTechnologyIcon = (tech: string) => {
	const iconProps = { size: 16, className: "mr-1" };

	switch (tech.toLowerCase()) {
		case "react":
		case "react native":
		case "next.js":
			return <Code {...iconProps} />;
		case "node.js":
		case "python":
		case "fastapi":
			return <Server {...iconProps} />;
		case "mongodb":
		case "postgresql":
		case "firebase":
			return <Database {...iconProps} />;
		case "tensorflow":
		case "d3.js":
		case "redux":
			return <Library {...iconProps} />;
		case "aws":
		case "docker":
		case "vercel":
			return <Cpu {...iconProps} />;
		default:
			return <Globe {...iconProps} />;
	}
};

const ProjectCard = ({
	project,
	variants,
}: {
	project: (typeof projectsData)[0];
	variants: MotionProps["variants"];
}) => {
	return (
		<motion.div
			variants={variants}
			className="group relative bg-gradient-to-br from-indigo-950/50 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300"
		>
			<div className="relative h-48 overflow-hidden">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>

				{project.featured && (
					<div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
						注目プロジェクト
					</div>
				)}

				<div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-80" />

				<div className="absolute bottom-3 left-3">
					<span className="bg-black/50 backdrop-blur-sm text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20">
						{project.category}
					</span>
				</div>
			</div>

			<div className="p-5">
				<h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
					{project.title}
				</h3>

				<p className="text-indigo-200 text-sm mb-4 line-clamp-3">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.slice(0, 4).map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full"
						>
							{getTechnologyIcon(tech)} {tech}
						</span>
					))}
					{project.technologies.length > 4 && (
						<span className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full">
							+{project.technologies.length - 4}
						</span>
					)}
				</div>

				<div className="flex gap-3">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
						>
							<Github size={16} />
							コード
						</a>
					)}

					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
						>
							<ExternalLink size={16} />
							デモを見る
						</a>
					)}
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
		</motion.div>
	);
};

export const Projects = () => {
	const [activeCategory, setActiveCategory] = useState("すべて");
	const [activeTech, setActiveTech] = useState<string[]>([]);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [filteredProjects, setFilteredProjects] = useState(projectsData);

	// 技術フィルタートグル
	const toggleTechFilter = (tech: string) => {
		if (activeTech.includes(tech)) {
			setActiveTech(activeTech.filter((t) => t !== tech));
		} else {
			setActiveTech([...activeTech, tech]);
		}
	};

	// フィルタリングロジック
	useEffect(() => {
		let filtered = projectsData;

		if (activeCategory !== "すべて") {
			filtered = filtered.filter(
				(project) => project.category === activeCategory,
			);
		}

		if (activeTech.length > 0) {
			filtered = filtered.filter((project) =>
				activeTech.every((tech) => project.technologies.includes(tech)),
			);
		}

		setFilteredProjects(filtered);
	}, [activeCategory, activeTech]);

	// アニメーション設定
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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
			id="projects"
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
						制作実績
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
					>
						最近のプロジェクト
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="max-w-2xl mx-auto text-indigo-200 text-lg"
					>
						最近取り組んだプロジェクトの一部をご紹介します。
						各プロジェクトでは、課題解決のために最適な技術スタックを選定し、
						ユーザー体験を最優先に考えた設計・実装を行いました。
					</motion.p>
				</div>

				{/* フィルターコントロール */}
				<div className="mb-12">
					<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
						<div className="flex flex-wrap gap-2">
							{allCategories.map((category) => (
								<button
									type="button"
									key={category}
									onClick={() => setActiveCategory(category)}
									className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                    ${
											activeCategory === category
												? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
												: "bg-black/30 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-900/20"
										}`}
								>
									{category}
								</button>
							))}
						</div>

						<button
							type="button"
							onClick={() => setIsFilterVisible(!isFilterVisible)}
							className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-black/30 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-900/20 transition-all duration-200"
						>
							<Filter size={16} />
							技術でフィルター{" "}
							{activeTech.length > 0 && `(${activeTech.length})`}
						</button>
					</div>

					{/* 技術フィルター */}
					{isFilterVisible && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="bg-black/40 border border-indigo-500/20 rounded-lg p-4 mb-8"
						>
							<div className="mb-2 text-indigo-300 flex items-center gap-2">
								<Tag size={16} />
								<span>技術で絞り込む</span>
							</div>
							<div className="flex flex-wrap gap-2">
								{allTechnologies.map((tech) => (
									<button
										type="button"
										key={tech}
										onClick={() => toggleTechFilter(tech)}
										className={`flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 
                      ${
												activeTech.includes(tech)
													? "bg-blue-600 text-white"
													: "bg-black/20 border border-blue-500/20 text-blue-300 hover:bg-blue-900/20"
											}`}
									>
										{getTechnologyIcon(tech)} {tech}
									</button>
								))}
							</div>

							{activeTech.length > 0 && (
								<div className="mt-4 flex justify-end">
									<button
										type="button"
										onClick={() => setActiveTech([])}
										className="text-xs text-indigo-400 hover:text-indigo-300"
									>
										フィルターをクリア
									</button>
								</div>
							)}
						</motion.div>
					)}
				</div>

				{/* プロジェクトグリッド */}
				{filteredProjects.length > 0 ? (
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{filteredProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								variants={itemVariants}
							/>
						))}
					</motion.div>
				) : (
					<div className="text-center py-12 text-indigo-300">
						<p className="text-xl mb-4">一致するプロジェクトがありません</p>
						<button
							type="button"
							onClick={() => {
								setActiveCategory("すべて");
								setActiveTech([]);
							}}
							className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							フィルターをリセット
						</button>
					</div>
				)}
			</div>
		</section>
	);
};
