export const projectsData = [
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
export const allCategories = [
	"すべて",
	...new Set(projectsData.map((project) => project.category)),
];

// 全技術を抽出
export const allTechnologies = [
	...new Set(projectsData.flatMap((project) => project.technologies)),
];
