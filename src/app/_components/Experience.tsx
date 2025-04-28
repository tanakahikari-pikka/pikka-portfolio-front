import { motion } from "framer-motion";
import {
	BadgeCheckIcon,
	BookOpenIcon,
	BriefcaseIcon,
	TrendingUpIcon,
	UsersIcon,
} from "lucide-react";
import { useState } from "react";

// 職歴セクションコンポーネント
export const Experience = () => {
	const [activeTab, setActiveTab] = useState<"work" | "education">("work");

	// 職歴データ - より詳細なキャリア情報重視の構造に変更
	const workExperience = [
		{
			id: 3,
			position: "Webエンジニア",
			company: "株式会社トリドリ",
			period: "2024年4月 - 2024年4月",
			overview:
				"toridori baseを中心としたWebアプリケーション開発を担当し、サービス間連携とUI改善に貢献",
			responsibilities: [
				"フロントエンド・バックエンド両方の開発とメンテナンス",
				"ユーザーデータを一元化するAPIとデータベース設計",
				"開発チームのコードレビューとメンタリング",
			],
			keyAchievements: [
				"サービス間ユーザーデータ統合により登録率が20%向上",
				"検索UI改善によるユーザー滞在時間15%増加",
				"マイクロサービス間の連携強化によるシステム安定性向上",
			],
			learnings:
				"複数サービスを横断するシステム設計と大規模データ統合の経験を積む",
			teamSize: "6人チーム（フロントエンド3名、バックエンド3名）",
			coreSkills: ["Ruby on Rails", "React", "TypeScript", "API設計"],
			relatedProjects: [1, 3],
		},
		{
			id: 2,
			position: "toridori base アプリエンジニア",
			company: "株式会社トリドリ",
			period: "2023年6月 - 2024年3月",
			overview:
				"モバイルアプリの機能開発と改善を主導し、ユーザー体験の向上に注力",
			responsibilities: [
				"ジャンル機能とUI/UX改善の設計・実装",
				"バックエンドAPIの開発とパフォーマンス最適化",
				"レガシーコードのリファクタリングと技術負債の解消",
			],
			keyAchievements: [
				"アプリ評価が4.2から4.7へ向上（App Store）",
				"検索機能改善によるコンバージョン率30%向上",
				"アプリのクラッシュ率を5%から0.5%へ低減",
			],
			learnings:
				"ユーザー中心設計のアプローチと定量的な指標に基づく改善プロセスを習得",
			teamSize: "4人チーム（モバイル2名、バックエンド2名）",
			coreSkills: ["Flutter", "Next.js", "Ruby on Rails"],
			relatedProjects: [2, 4],
		},
		{
			id: 1,
			position: "Webエンジニア",
			company: "株式会社サイバーウェーブ",
			period: "2022/08 - 2023/05",
			overview:
				"Webアプリケーションの品質保証と改善に従事し、開発プロセス改善にも貢献",
			responsibilities: [
				"既存システムのQAプロセス整備と自動化",
				"バグ特定と修正の迅速化システムの構築",
				"テスト環境の整備とCI/CDパイプラインの最適化",
			],
			keyAchievements: [
				"QAプロセス改善により平均修正時間を60%短縮",
				"テスト自動化によるリリースサイクルを2週間から3日へ短縮",
				"重大バグの発生率を40%削減",
			],
			learnings:
				"システム全体を俯瞰する視点と効率的なQAプロセスの設計手法を習得",
			teamSize: "8人チーム（開発5名、QA3名）",
			coreSkills: ["JavaScript", "React", "Ruby on Rails", "自動テスト"],
			relatedProjects: [5],
		},
	];

	// 学歴データ - より学習成果と成長に焦点を当てた構造に
	const educationExperience = [
		{
			id: 1,
			degree: "情報工学修士",
			institution: "東京工科大学大学院",
			period: "2016年4月 - 2018年3月",
			fieldOfStudy: "Web技術と人工知能",
			thesis: "自然言語処理を用いたWebコンテンツの自動分類システムの開発と評価",
			achievements: [
				"学会発表2件（うち1件は優秀発表賞を受賞）",
				"研究室プロジェクトのリード（5名チーム）",
				"AIプログラミングコンテストで準優勝",
			],
			keyLearnings:
				"自然言語処理技術の理論と実装、研究手法、アカデミックライティング",
			relevantCourses: [
				"機械学習特論",
				"自然言語処理",
				"Web情報システム",
				"データマイニング",
			],
		},
		{
			id: 2,
			degree: "情報工学学士",
			institution: "東京工科大学",
			period: "2012年4月 - 2016年3月",
			fieldOfStudy: "コンピュータサイエンス",
			thesis: "SNSデータを活用したユーザー行動分析ツールの開発",
			achievements: [
				"卒業研究で学科内最優秀賞を受賞",
				"プログラミングサークルの副代表として活動（メンバー20名）",
				"学内ハッカソンで最優秀賞を受賞（チーム開発）",
			],
			keyLearnings:
				"プログラミング基礎、アルゴリズム設計、データベース設計、Web開発",
			relevantCourses: [
				"データ構造とアルゴリズム",
				"データベース設計",
				"ソフトウェア工学",
				"Webプログラミング",
			],
		},
	];

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

	// 関連プロジェクトへのスクロール関数
	const scrollToProject = (projectId: number) => {
		const projectElement = document.getElementById(`project-${projectId}`);
		if (projectElement) {
			const projectsSection = document.getElementById("projects");
			if (projectsSection) {
				projectsSection.scrollIntoView({ behavior: "smooth" });
				setTimeout(() => {
					projectElement.scrollIntoView({ behavior: "smooth" });
					projectElement.classList.add("highlight-project");
					setTimeout(() => {
						projectElement.classList.remove("highlight-project");
					}, 2000);
				}, 500);
			}
		}
	};

	return (
		<section
			id="experience"
			className="py-24 bg-gradient-to-b from-indigo-950 to-black"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<motion.span
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-block bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 px-4 py-1 rounded-full font-medium mb-4 border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10"
					>
						キャリア
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
					>
						職務経歴
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="max-w-2xl mx-auto text-indigo-200 text-lg"
					>
						これまでの経験から身につけたスキルと知識、そして各役割での成長と貢献について
					</motion.p>
				</div>

				{/* タブ切り替え */}
				<div className="flex justify-center mb-10">
					<div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-lg border border-indigo-500/20">
						<button
							type="button"
							onClick={() => setActiveTab("work")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeTab === "work"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							職歴
						</button>
						<button
							type="button"
							onClick={() => setActiveTab("education")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeTab === "education"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							学歴
						</button>
					</div>
				</div>

				{/* タイムライン */}
				<motion.div
					className="max-w-4xl mx-auto"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{activeTab === "work" ? (
						// 職歴タイムライン
						<div className="relative border-l-2 border-indigo-600/30 ml-4 md:ml-8 pl-8 pb-8">
							{workExperience.map((experience, index) => (
								<motion.div
									key={experience.id}
									variants={itemVariants}
									className="mb-12 relative"
								>
									<div className="absolute w-5 h-5 rounded-full bg-indigo-600 left-[-2.55rem] border-4 border-black" />
									{index < workExperience.length - 1 && (
										<div className="absolute w-1 bg-indigo-600/10 h-full left-[-2.05rem] top-6" />
									)}

									<div className="bg-gradient-to-br from-indigo-950/50 to-black/70 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300 p-6">
										{/* 期間 */}
										<div className="text-indigo-400 text-sm font-medium mb-2">
											{experience.period}
										</div>

										{/* タイトル */}
										<h3 className="text-xl font-bold mb-1 text-white flex items-center">
											<BriefcaseIcon
												size={20}
												className="mr-2 text-purple-400"
											/>
											{experience.position}
										</h3>

										{/* 会社名 */}
										<h4 className="text-lg font-semibold mb-4 text-indigo-300">
											{experience.company}
										</h4>

										{/* 概要 */}
										<p className="text-indigo-200 mb-6">
											{experience.overview}
										</p>

										{/* 2カラムレイアウト */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
											{/* 責任範囲 */}
											<div>
												<h5 className="text-white font-medium mb-2 flex items-center">
													<UsersIcon size={16} className="mr-2 text-blue-400" />
													責任範囲:
												</h5>
												<ul className="space-y-2">
													{experience.responsibilities.map((item, idx) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<li key={idx} className="flex items-start">
															<span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2" />
															<span className="text-indigo-200 text-sm">
																{item}
															</span>
														</li>
													))}
												</ul>
											</div>

											{/* 主な成果 */}
											<div>
												<h5 className="text-white font-medium mb-2 flex items-center">
													<TrendingUpIcon
														size={16}
														className="mr-2 text-green-400"
													/>
													主な成果:
												</h5>
												<ul className="space-y-2">
													{experience.keyAchievements.map(
														(achievement, idx) => (
															// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
															<li key={idx} className="flex items-start">
																<span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2" />
																<span className="text-indigo-200 text-sm">
																	{achievement}
																</span>
															</li>
														),
													)}
												</ul>
											</div>
										</div>

										{/* 学び・成長 */}
										<div className="mb-4">
											<h5 className="text-white font-medium mb-2 flex items-center">
												<BookOpenIcon
													size={16}
													className="mr-2 text-indigo-400"
												/>
												学びと成長:
											</h5>
											<p className="text-indigo-200 text-sm pl-6">
												{experience.learnings}
											</p>
										</div>

										{/* チーム規模 */}
										<div className="mb-4">
											<h5 className="text-white font-medium mb-2 flex items-center">
												<UsersIcon size={16} className="mr-2 text-yellow-400" />
												チーム構成:
											</h5>
											<p className="text-indigo-200 text-sm pl-6">
												{experience.teamSize}
											</p>
										</div>

										{/* 主要スキル */}
										<div className="flex flex-wrap gap-2 mt-4">
											{experience.coreSkills.map((skill) => (
												<span
													key={skill}
													className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full"
												>
													<BadgeCheckIcon size={12} className="mr-1" />
													{skill}
												</span>
											))}
										</div>

										{/* 関連プロジェクト */}
										{experience.relatedProjects &&
											experience.relatedProjects.length > 0 && (
												<div className="mt-5 pt-4 border-t border-indigo-500/20">
													<h5 className="text-white text-xs mb-2">
														関連プロジェクト:
													</h5>
													<div className="flex flex-wrap gap-2">
														{experience.relatedProjects.map((projId) => (
															<button
																type="button"
																key={projId}
																onClick={() => scrollToProject(projId)}
																className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/40 transition-colors"
															>
																プロジェクト #{projId}
															</button>
														))}
													</div>
												</div>
											)}
									</div>
								</motion.div>
							))}
						</div>
					) : (
						// 学歴タイムライン
						<div className="relative border-l-2 border-indigo-600/30 ml-4 md:ml-8 pl-8 pb-8">
							{educationExperience.map((education, index) => (
								<motion.div
									key={education.id}
									variants={itemVariants}
									className="mb-12 relative"
								>
									<div className="absolute w-5 h-5 rounded-full bg-indigo-600 left-[-2.55rem] border-4 border-black" />
									{index < educationExperience.length - 1 && (
										<div className="absolute w-1 bg-indigo-600/10 h-full left-[-2.05rem] top-6" />
									)}

									<div className="bg-gradient-to-br from-indigo-950/50 to-black/70 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300 p-6">
										{/* 期間 */}
										<div className="text-indigo-400 text-sm font-medium mb-2">
											{education.period}
										</div>

										{/* 学位 */}
										<h3 className="text-xl font-bold mb-1 text-white flex items-center">
											<BookOpenIcon
												size={20}
												className="mr-2 text-purple-400"
											/>
											{education.degree}
										</h3>

										{/* 学校名 */}
										<h4 className="text-lg font-semibold mb-2 text-indigo-300">
											{education.institution}
										</h4>

										{/* 専攻 */}
										<p className="text-indigo-200 mb-4">
											専攻: {education.fieldOfStudy}
										</p>

										{/* 論文テーマ */}
										<div className="mb-4">
											<h5 className="text-white font-medium mb-2">
												論文テーマ:
											</h5>
											<p className="text-indigo-200 text-sm pl-4">
												{education.thesis}
											</p>
										</div>

										{/* 主な成果 */}
										<div className="mb-4">
											<h5 className="text-white font-medium mb-2 flex items-center">
												<TrendingUpIcon
													size={16}
													className="mr-2 text-green-400"
												/>
												主な成果:
											</h5>
											<ul className="space-y-2">
												{education.achievements.map((achievement, idx) => (
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													<li key={idx} className="flex items-start">
														<span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2" />
														<span className="text-indigo-200 text-sm">
															{achievement}
														</span>
													</li>
												))}
											</ul>
										</div>

										{/* 主要な学び */}
										<div className="mb-4">
											<h5 className="text-white font-medium mb-2 flex items-center">
												<BookOpenIcon
													size={16}
													className="mr-2 text-indigo-400"
												/>
												主要な学び:
											</h5>
											<p className="text-indigo-200 text-sm pl-6">
												{education.keyLearnings}
											</p>
										</div>

										{/* 関連コース */}
										<div className="mt-4">
											<h5 className="text-white text-xs mb-2">主要履修科目:</h5>
											<div className="flex flex-wrap gap-2">
												{education.relevantCourses.map((course) => (
													<span
														key={course}
														className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300"
													>
														{course}
													</span>
												))}
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};
