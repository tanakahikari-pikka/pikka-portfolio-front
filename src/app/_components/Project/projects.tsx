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
import { getTechnologyIcon } from "./extract";
import { ProjectCard } from "./projectCard";
import { allCategories, allTechnologies, projectsData } from "./projectData";

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
										{/* {(() => {
											const icon = getTechnologyIcon(tech);
											return icon ? icon({ size: 16 }) : null;
										})()}
										{tech} */}
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
