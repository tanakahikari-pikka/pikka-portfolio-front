import { motion } from "framer-motion";
import {
	BookOpen,
	Code,
	ExternalLink,
	FileCode,
	FileType,
	Globe,
	Layers,
	Palette,
	Users,
} from "lucide-react";
import { useState } from "react";

// ブログ/メディア投稿一覧セクション
export const BlogPosts = () => {
	// タブ切り替えの状態管理
	const [activeFilter, setActiveFilter] = useState<
		"all" | "tech" | "design" | "career"
	>("all");

	// ブログ投稿データ
	const blogPostsData = [
		{
			id: 1,
			title: "React HooksとTypeScriptで型安全なカスタムフックを作成する方法",
			excerpt:
				"TypeScriptとReact Hooksを使った型安全な開発手法について解説します。適切な型定義により、バグを事前に防ぎ、コード品質を向上させる方法をご紹介。",
			date: "2024-03-15",
			category: "tech",
			tags: ["React", "TypeScript", "フロントエンド"],
			url: "https://myblog.com/react-hooks-typescript",
			platform: "個人ブログ",
			image:
				"https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=80",
		},
		{
			id: 2,
			title: "Next.jsとTailwind CSSで作るモダンなポートフォリオサイト",
			excerpt:
				"ポートフォリオサイト制作におけるNext.jsとTailwind CSSの活用方法について、実際のコード例を交えながら詳しく解説します。",
			date: "2024-02-20",
			category: "tech",
			tags: ["Next.js", "Tailwind CSS", "ポートフォリオ"],
			url: "https://zenn.dev/username/articles/nextjs-tailwind-portfolio",
			platform: "Zenn",
			image:
				"https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=500&q=80",
		},
		{
			id: 3,
			title: "UIデザインの基本原則：エンジニアのためのデザイン入門",
			excerpt:
				"エンジニア視点からUIデザインの基本原則を学ぶ記事。コントラスト、整列、繰り返し、近接の4原則を中心に、実装時のポイントを解説します。",
			date: "2024-01-10",
			category: "design",
			tags: ["UI/UX", "デザイン原則", "フロントエンド"],
			url: "https://note.com/username/n/design-principles-for-engineers",
			platform: "note",
			image:
				"https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?auto=format&fit=crop&w=500&q=80",
		},
		{
			id: 4,
			title: "GraphQLとREST APIの比較：プロジェクトに適した選択をするには",
			excerpt:
				"GraphQLとREST APIの特徴や違いを詳しく比較し、プロジェクトの要件に応じた最適な選択方法について解説します。",
			date: "2023-12-05",
			category: "tech",
			tags: ["GraphQL", "REST API", "バックエンド"],
			url: "https://qiita.com/username/items/graphql-vs-rest",
			platform: "Qiita",
			image:
				"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
		},
		{
			id: 5,
			title: "エンジニアのためのキャリアプランニング：専門性と市場価値の高め方",
			excerpt:
				"ソフトウェアエンジニアとしてのキャリア構築において重要な要素と、市場価値を高めるためのスキルセット獲得戦略について考察します。",
			date: "2023-11-15",
			category: "career",
			tags: ["キャリア", "スキルアップ", "転職"],
			url: "https://blog.service.com/username/engineer-career-planning",
			platform: "Tech Blog",
			image:
				"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
		},
		{
			id: 6,
			title:
				"モバイルファーストの実装アプローチ：レスポンシブデザインのベストプラクティス",
			excerpt:
				"モバイルファーストのアプローチを取り入れたレスポンシブデザインの実装方法とベストプラクティスについて解説します。",
			date: "2023-10-20",
			category: "design",
			tags: ["レスポンシブデザイン", "CSS", "モバイル"],
			url: "https://medium.com/@username/mobile-first-responsive-design",
			platform: "Medium",
			image:
				"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
		},
	];

	// 表示する投稿をフィルタリング
	const getFilteredPosts = () => {
		if (activeFilter === "all") {
			return blogPostsData;
		}
		return blogPostsData.filter((post) => post.category === activeFilter);
	};

	// 日付フォーマットの整形
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return `${year}年${month}月${day}日`;
	};

	// プラットフォームアイコンの取得
	const getPlatformIcon = (platform: string) => {
		const iconProps = { size: 16, className: "mr-1" };

		switch (platform.toLowerCase()) {
			case "qiita":
				return <FileCode {...iconProps} />;
			case "zenn":
				return <Layers {...iconProps} />;
			case "note":
				return <BookOpen {...iconProps} />;
			case "medium":
				return <FileType {...iconProps} />;
			case "個人ブログ":
				return <Globe {...iconProps} />;
			case "tech blog":
				return <Code {...iconProps} />;
			default:
				return <Globe {...iconProps} />;
		}
	};

	// カテゴリーアイコンの取得
	const getCategoryIcon = (category: string) => {
		const iconProps = { size: 16, className: "mr-1" };

		switch (category.toLowerCase()) {
			case "tech":
				return <Code {...iconProps} />;
			case "design":
				return <Palette {...iconProps} />;
			case "career":
				return <Users {...iconProps} />;
			default:
				return <FileCode {...iconProps} />;
		}
	};

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
			transition: { duration: 0.4 },
		},
	};

	return (
		<section
			id="blog"
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
						メディア投稿
					</motion.span>
					<motion.h2
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
					>
						ブログ & Tech記事
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="max-w-2xl mx-auto text-indigo-200 text-lg"
					>
						技術的な知見や経験を共有した記事の一覧です。
						さまざまなプラットフォームで、フロントエンド開発や
						キャリア構築についての情報を発信しています。
					</motion.p>
				</div>

				{/* フィルタータブ */}
				<div className="flex justify-center mb-12">
					<div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-lg border border-indigo-500/20">
						<button
							type="button"
							onClick={() => setActiveFilter("all")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeFilter === "all"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							すべて
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("tech")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeFilter === "tech"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							技術
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("design")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeFilter === "design"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							デザイン
						</button>
						<button
							type="button"
							onClick={() => setActiveFilter("career")}
							className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
								activeFilter === "career"
									? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
									: "text-indigo-300 hover:bg-indigo-900/20"
							}`}
						>
							キャリア
						</button>
					</div>
				</div>

				{/* ブログ投稿グリッド */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
				>
					{getFilteredPosts().map((post) => (
						<motion.div
							key={post.id}
							variants={itemVariants}
							className="bg-gradient-to-br from-indigo-950/50 to-black/70 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300 group"
						>
							{/* ブログ投稿画像 */}
							<div className="relative h-48 overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-80" />

								{/* カテゴリータグ */}
								<div className="absolute bottom-3 left-3">
									<span className="flex items-center bg-black/50 backdrop-blur-sm text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20">
										{getCategoryIcon(post.category)}
										{post.category === "tech"
											? "技術"
											: post.category === "design"
												? "デザイン"
												: "キャリア"}
									</span>
								</div>

								{/* プラットフォーム */}
								<div className="absolute top-3 right-3">
									<span className="flex items-center bg-black/50 backdrop-blur-sm text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20">
										{getPlatformIcon(post.platform)}
										{post.platform}
									</span>
								</div>
							</div>

							{/* ブログ投稿情報 */}
							<div className="p-5">
								<div className="text-indigo-400 text-xs mb-2">
									{formatDate(post.date)}
								</div>
								<h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors line-clamp-2">
									{post.title}
								</h3>

								<p className="text-indigo-200 text-sm mb-4 line-clamp-3">
									{post.excerpt}
								</p>

								{/* タグ */}
								<div className="flex flex-wrap gap-2 mb-4">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>

								{/* リンク */}
								<a
									href={post.url}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
								>
									<ExternalLink size={16} />
									記事を読む
								</a>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* もっと見るボタン */}
				<div className="flex justify-center mt-12">
					<a
						href="https://blog.example.com" // 実際のブログURLに置き換え
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-sm px-8 py-3 rounded-lg font-medium hover:bg-indigo-900/20 transition-colors flex items-center gap-2"
					>
						<span>すべての記事を見る</span>
						<ExternalLink size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
