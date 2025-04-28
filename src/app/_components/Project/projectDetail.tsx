// ProjectDetailModal.tsx
import { Tooltip } from "@geist-ui/core";
import { motion } from "framer-motion";
import {
	ExternalLink,
	FileText,
	Github,
	Info,
	Lightbulb,
	TrendingUp,
	Zap,
} from "lucide-react";
import type React from "react";
import type { RefObject } from "react";

type ProjectDetailModalProps = {
	showDetails: boolean;
	selectedProject: number | null;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	projectsData: any[];
	modalRef: RefObject<HTMLDivElement>;
	setShowDetails: (show: boolean) => void;
	scrollToExperience: (experienceId: number) => void;
};

export const ProjectDetailModal = ({
	showDetails,
	selectedProject,
	projectsData,
	modalRef,
	setShowDetails,
	scrollToExperience,
}: ProjectDetailModalProps) => {
	if (!showDetails || selectedProject === null) return null;

	const project = projectsData.find((p) => p.id === selectedProject);
	if (!project) return null;

	return (
		<div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
			<motion.div
				ref={modalRef}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				className="bg-gradient-to-br from-indigo-950/90 to-black/90 backdrop-blur-sm rounded-xl border border-indigo-500/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
			>
				{/* ヘッダー画像 */}
				<div className="relative h-48 sm:h-64 overflow-hidden rounded-t-xl">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/90" />

					{/* カテゴリーとプロジェクト期間 */}
					<div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
						<span className="bg-black/60 backdrop-blur-sm text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-500/30">
							{project.category}
						</span>
						<span className="bg-black/60 backdrop-blur-sm text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-500/30">
							{project.duration}
						</span>
					</div>

					{/* 閉じるボタン */}
					<button
						type="button"
						onClick={() => setShowDetails(false)}
						className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/80 transition-colors"
					>
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</button>
				</div>

				<div className="p-6">
					{/* プロジェクトタイトルと説明 */}
					<h3 className="text-2xl font-bold mb-2 text-white">
						{project.title}
					</h3>
					<p className="text-indigo-200 mb-6">{project.detailedDescription}</p>

					{/* 2カラムレイアウト */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						{/* 技術的課題 */}
						<div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-indigo-500/10">
							<h4 className="text-white font-medium mb-3 flex items-center">
								<Lightbulb size={18} className="mr-2 text-yellow-400" />
								技術的課題
							</h4>
							<ul className="space-y-2">
								{project.technicalChallenges.map(
									(
										challenge:
											| string
											| number
											| bigint
											| boolean
											| React.ReactElement<
													// biome-ignore lint/suspicious/noExplicitAny: <explanation>
													any,
													// biome-ignore lint/suspicious/noExplicitAny: <explanation>
													string | React.JSXElementConstructor<any>
											  >
											| Iterable<React.ReactNode>
											| React.ReactPortal
											| Promise<React.AwaitedReactNode>
											| null
											| undefined,
										idx: React.Key | null | undefined,
									) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<li key={idx} className="flex items-start">
											<span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2" />
											<span className="text-indigo-200 text-sm">
												{challenge}
											</span>
										</li>
									),
								)}
							</ul>
						</div>

						{/* プロジェクト成果 */}
						<div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 border border-indigo-500/10">
							<h4 className="text-white font-medium mb-3 flex items-center">
								<TrendingUp size={18} className="mr-2 text-green-400" />
								プロジェクト成果
							</h4>
							<ul className="space-y-2">
								{project.metrics.map(
									(
										metric:
											| string
											| number
											| bigint
											| boolean
											| React.ReactElement<
													// biome-ignore lint/suspicious/noExplicitAny: <explanation>
													any,
													// biome-ignore lint/suspicious/noExplicitAny: <explanation>
													string | React.JSXElementConstructor<any>
											  >
											| Iterable<React.ReactNode>
											| React.ReactPortal
											| Promise<React.AwaitedReactNode>
											| null
											| undefined,
										idx: React.Key | null | undefined,
									) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<li key={idx} className="flex items-start">
											<span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2" />
											<span className="text-indigo-200 text-sm">{metric}</span>
										</li>
									),
								)}
							</ul>
						</div>
					</div>
					{/* 技術的解決策 */}
					<div className="mb-6">
						<h4 className="text-white font-medium mb-3 flex items-center">
							<Info size={18} className="mr-2 text-blue-400" />
							技術的解決策
						</h4>
						<p className="text-indigo-200 text-sm bg-black/20 p-4 rounded-lg border border-indigo-500/10">
							{project.technicalSolution}
						</p>
					</div>

					{/* 個人的貢献 */}
					<div className="mb-6">
						<h4 className="text-white font-medium mb-3 flex items-center">
							<Zap size={18} className="mr-2 text-purple-400" />
							個人的貢献
						</h4>
						<p className="text-indigo-200 text-sm bg-black/20 p-4 rounded-lg border border-purple-500/10">
							{project.personalContribution}
						</p>
					</div>

					{/* 主要な学び */}
					<div className="mb-6">
						<h4 className="text-white font-medium mb-3 flex items-center">
							<FileText size={18} className="mr-2 text-indigo-400" />
							主要な学び
						</h4>
						<p className="text-indigo-200 text-sm bg-black/20 p-4 rounded-lg border border-indigo-500/10">
							{project.keyLearnings}
						</p>
					</div>
					{/* 技術詳細 */}
					<div className="mb-6">
						<h4 className="text-white font-medium mb-3">技術詳細</h4>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
							{Object.entries(project.technicalDetails).map(([key, value]) => (
								<div
									key={key}
									className="bg-black/20 p-3 rounded-lg border border-indigo-500/10"
								>
									<div className="text-xs text-indigo-400 mb-1 capitalize">
										{key.replace(/_/g, " ")}
									</div>
									<div className="text-sm text-indigo-200">{String(value)}</div>
								</div>
							))}
						</div>
					</div>
					{/* 関連職歴とリンク */}
					<div className="flex flex-wrap justify-between items-center pt-4 border-t border-indigo-500/20">
						{project.relatedExperience && (
							<button
								type="button"
								onClick={() => {
									scrollToExperience(project.relatedExperience as number);
									setShowDetails(false);
								}}
								className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
							>
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="mr-1"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
								関連する職歴を見る
							</button>
						)}

						<div className="flex gap-4">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
								>
									<Github size={16} className="mr-1" />
									GitHubリポジトリ
								</a>
							)}

							{project.demo && (
								<a
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center"
								>
									<ExternalLink size={16} className="mr-1" />
									デモを見る
								</a>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
