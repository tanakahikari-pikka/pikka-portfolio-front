import { motion } from "framer-motion";
import { useState } from "react";

// 経歴セクションコンポーネント
export const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  
  // 職歴データ
  const workExperience = [
    {
      id: 1,
      position: 'シニアフロントエンド開発者',
      company: 'テックイノベーション株式会社',
      period: '2023年4月 - 現在',
      description: 'エンタープライズ向けSaaSプラットフォームのフロントエンド開発とアーキテクチャ設計を担当。',
      achievements: [
        'React/Next.jsを用いたマイクロフロントエンドアーキテクチャを設計・実装',
        'パフォーマンス最適化によりページロード時間を60%削減',
        'フロントエンドチーム（5名）のテックリードとして開発プロセスを改善'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Tailwind CSS']
    },
    {
      id: 2,
      position: 'フルスタック開発者',
      company: 'デジタルソリューションズ株式会社',
      period: '2020年7月 - 2023年3月',
      description: '複数のWebアプリケーションの設計から実装、運用までを担当。',
      achievements: [
        'ECサイトのリニューアルプロジェクトをリード（売上20%増加に貢献）',
        'CIパイプラインの構築によりデプロイ時間を75%短縮',
        'チーム内にコードレビュー文化を導入し、バグ発生率を40%削減'
      ],
      technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL', 'Docker']
    },
    {
      id: 3,
      position: 'Webアプリケーション開発者',
      company: 'クリエイティブウェブ株式会社',
      period: '2018年4月 - 2020年6月',
      description: '中小企業向けWebアプリケーションの開発を担当。',
      achievements: [
        '予約管理システムを独自に設計・開発し、複数のクライアントに導入',
        'レガシーシステムのモダン化プロジェクトに参画',
        'インターンへの技術指導を担当'
      ],
      technologies: ['JavaScript', 'PHP', 'Laravel', 'jQuery', 'Bootstrap']
    }
  ];
  
  // 学歴データ
  const educationExperience = [
    {
      id: 1,
      degree: '情報工学修士',
      institution: '東京工科大学大学院',
      period: '2016年4月 - 2018年3月',
      description: 'Web技術と人工知能の研究に従事。修士論文では自然言語処理を用いたWebコンテンツの自動分類システムを開発。',
      achievements: [
        '学会発表2件（うち1件は優秀発表賞を受賞）',
        '研究室のプロジェクトでWebアプリケーションのバックエンド開発を担当',
        'AIプログラミングコンテストで準優勝'
      ]
    },
    {
      id: 2,
      degree: '情報工学学士',
      institution: '東京工科大学',
      period: '2012年4月 - 2016年3月',
      description: 'コンピュータサイエンスを専攻し、特にWebアプリケーション開発とデータベース設計に注力。',
      achievements: [
        '卒業研究でSNS分析ツールを開発',
        'プログラミングサークルの副代表として活動',
        '学内ハッカソンで最優秀賞を受賞'
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-indigo-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 px-4 py-1 rounded-full font-medium mb-4 border border-purple-500/20 backdrop-blur-sm shadow-lg shadow-purple-500/10"
          >
            職務経歴
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
          >
            経験と実績
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-indigo-200 text-lg"
          >
            これまでのキャリアと教育背景をご紹介します。
            さまざまなプロジェクトや環境での経験を通じて、
            技術的なスキルと問題解決能力を磨いてきました。
          </motion.p>
        </div>
        
        {/* タブ切り替え */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-black/30 backdrop-blur-sm rounded-lg border border-indigo-500/20">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-indigo-300 hover:bg-indigo-900/20'
              }`}
            >
              職歴
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-indigo-300 hover:bg-indigo-900/20'
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
          {activeTab === 'work' ? (
            // 職歴タイムライン
            <div className="relative border-l-2 border-indigo-600/30 ml-4 md:ml-8 pl-8 pb-8">
              {workExperience.map((experience, index) => (
                <ExperienceCard 
                  key={experience.id}
                  data={experience}
                  isWork={true}
                  variants={itemVariants}
                  isLast={index === workExperience.length - 1}
                />
              ))}
            </div>
          ) : (
            // 学歴タイムライン
            <div className="relative border-l-2 border-indigo-600/30 ml-4 md:ml-8 pl-8 pb-8">
              {educationExperience.map((experience, index) => (
                <ExperienceCard 
                  key={experience.id}
                  data={experience}
                  isWork={false}
                  variants={itemVariants}
                  isLast={index === educationExperience.length - 1}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// 経歴カードコンポーネント
const ExperienceCard = ({ 
  data, 
  isWork, 
  variants,
  isLast
}: { 
  data: any;
  isWork: boolean;
  variants: any;
  isLast: boolean;
}) => {
  return (
    <motion.div 
      variants={variants}
      className="mb-12 relative"
    >
      {/* 円マーカー */}
      <div className="absolute w-5 h-5 rounded-full bg-indigo-600 left-[-2.55rem] border-4 border-black"></div>
      
      {/* 接続線 */}
      {!isLast && (
        <div className="absolute w-1 bg-indigo-600/10 h-full left-[-2.05rem] top-6"></div>
      )}
      
      {/* カード */}
      <div className="bg-gradient-to-br from-indigo-950/50 to-black/70 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300 p-6">
        {/* 期間 */}
        <div className="text-indigo-400 text-sm font-medium mb-2">
          {isWork ? data.period : data.period}
        </div>
        
        {/* タイトル */}
        <h3 className="text-xl font-bold mb-1 text-white">
          {isWork ? data.position : data.degree}
        </h3>
        
        {/* 会社/学校名 */}
        <h4 className="text-lg font-semibold mb-4 text-indigo-300">
          {isWork ? data.company : data.institution}
        </h4>
        
        {/* 説明 */}
        <p className="text-indigo-200 mb-4">
          {data.description}
        </p>
        
        {/* 成果 */}
        {data.achievements && (
          <div className="mt-4">
            <h5 className="text-white font-medium mb-2">主な成果:</h5>
            <ul className="space-y-2">
              {data.achievements.map((achievement: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2"></span>
                  <span className="text-indigo-200 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* 使用技術 (職歴のみ) */}
        {isWork && data.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {data.technologies.map((tech: string) => (
              <span key={tech} className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};