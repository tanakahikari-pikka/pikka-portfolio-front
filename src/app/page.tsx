'use client';
import { Experience } from '@/components/Experience';
import { motion } from 'framer-motion';
import { X, Menu, Github, Mail, Linkedin, ArrowDown, Code, Monitor, Twitter, Cpu, Database, ExternalLink, Filter, Globe, Library, Tag } from 'lucide-react';
import React from 'react';

import { useState, useEffect } from 'react';

export default function Home() {
  const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <header className="fixed w-full bg-gray-900 shadow-lg z-50">
        <nav className="container mx-auto px-4 h-[70px] flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-blue-500">
            Portfolio
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-500 hover:underline">ホーム</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-500 hover:underline">プロジェクト</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-500 hover:underline">スキル</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 hover:underline">連絡先</a>
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors">
              お問い合わせ
            </button>
          </div>
  
          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="absolute top-[70px] left-0 w-full bg-gray-900 shadow-lg md:hidden">
              <div className="flex flex-col p-4 space-y-4">
                <a href="#home" className="text-gray-300 hover:text-blue-500">ホーム</a>
                <a href="#projects" className="text-gray-300 hover:text-blue-500">プロジェクト</a>
                <a href="#skills" className="text-gray-300 hover:text-blue-500">スキル</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-500">連絡先</a>
                <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors">
                  お問い合わせ
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  };

  const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          staggerChildren: 0.1,
          delayChildren: 0.3
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
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* 宇宙背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950 to-purple-900" />
        
        {/* 星空効果 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 小さな星 */}
          {[...Array(100)].map((_, i) => (
            <div 
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4 + Math.random() * 0.6,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
          
          {/* 中型の星 */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={`mid-star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5 + Math.random() * 0.5,
                animation: `twinkle ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
          
          {/* 星雲/銀河効果 */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={`nebula-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, rgba(79, 70, 229, 0) 70%)' 
                  : i % 3 === 1 
                    ? 'radial-gradient(circle, rgba(219, 39, 119, 0.15) 0%, rgba(219, 39, 119, 0) 70%)'
                    : 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)',
                width: `${Math.random() * 600 + 300}px`,
                height: `${Math.random() * 600 + 300}px`,
                top: `${Math.random() * 120 - 10}%`,
                left: `${Math.random() * 120 - 10}%`,
                transform: `rotate(${Math.random() * 360}deg) translateY(${scrollY * (Math.random() * 0.05)}px)`,
                opacity: 0.4,
              }}
            />
          ))}
          
          {/* 流れ星効果 */}
          {[...Array(3)].map((_, i) => (
            <div 
              key={`shooting-star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: '2px',
                height: '80px',
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
                transform: 'rotate(45deg)',
                boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.5)',
                animation: `shootingStar ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 15}s`
              }}
            />
          ))}
        </div>
        
        {/* コンテンツ */}
        <div className="container mx-auto px-4 py-16 z-10">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* テキストコンテンツ */}
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
                山田 太郎
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-purple-300 font-medium mb-4"
              >
                フルスタック開発者
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 mb-8 text-lg max-w-2xl leading-relaxed"
              >
                モダンな技術スタックを活用し、スケーラブルなWebアプリケーション開発に5年以上の経験を持つエンジニアです。ユーザー体験を最優先に考えた設計と実装が得意です。
              </motion.p>
              
              {/* スキルハイライト */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="flex items-center space-x-2 bg-black/20 border border-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-purple-900/20 transition-colors">
                  <Code className="text-purple-400 size-5" />
                  <span className="text-indigo-200">フロントエンド</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/20 border border-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                  <Server className="text-blue-400 size-5" />
                  <span className="text-indigo-200">バックエンド</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/20 border border-indigo-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-indigo-900/20 transition-colors">
                  <Monitor className="text-indigo-400 size-5" />
                  <span className="text-indigo-200">UI/UX設計</span>
                </div>
              </motion.div>
              
              {/* ボタン */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105 transform duration-200 shadow-lg shadow-purple-500/20 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                >
                  お問い合わせ
                </a>
                <a 
                  href="#projects" 
                  className="border border-indigo-500/30 text-indigo-300 bg-black/30 backdrop-blur-sm px-8 py-3 rounded-lg font-medium hover:bg-indigo-900/20 transition-colors focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                >
                  プロジェクトを見る
                </a>
              </motion.div>
              
              {/* SNSリンク */}
              <motion.div 
                variants={itemVariants}
                className="flex space-x-5 mt-8"
              >
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
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
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
            
            {/* プロフィール画像 - 宇宙飛行士風 */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/5 relative"
            >
              <div className="relative z-10">
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-800 p-1 shadow-xl shadow-blue-500/30">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
                    alt="プロフィール写真" 
                    className="rounded-full object-cover w-full h-full"
                  />
                  
                  {/* 宇宙飛行士ヘルメット効果 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/10 to-transparent border border-white/20"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-1/4 bg-white/10 rounded-full blur-sm transform rotate-45"></div>
                </div>
                
                {/* 宇宙テーマの装飾的な要素 */}
                <div className="absolute -bottom-4 -right-6 w-24 h-24 bg-purple-600 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-40 blur-xl"></div>
                
                {/* 惑星風の装飾 */}
                <div className="absolute -right-16 top-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 opacity-80 shadow-lg shadow-orange-500/20 animate-orbit-slow"></div>
                <div className="absolute -left-12 top-2/3 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-70 shadow-lg shadow-blue-500/20 animate-orbit"></div>
              </div>
              
              {/* 技術アイコン装飾 - 宇宙船/衛星風 */}
              <div className="absolute top-12 -left-4 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-float">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="30" height="30" className="animate-slow-spin"/>
              </div>
              <div className="absolute bottom-16 -right-6 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-float-delay">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="30" height="30" />
              </div>
              <div className="absolute top-3/4 -left-8 bg-black/50 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg animate-float-slow">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="30" height="30" />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* スクロールダウンボタン */}
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
        
        {/* カスタムCSSアニメーション */}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px); }
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
  
  const Skills = () => {
    const skills = [
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'React/Next.js', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python/Django', level: 75 },
      { name: 'AWS', level: 70 },
    ];

    return (
      <section id="skills" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">スキル</h2>
          <div className="max-w-3xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded">
                  <div 
                    className="h-full bg-blue-600 rounded"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const projectsData = [
    {
      id: 1,
      title: 'AIチャットボットプラットフォーム',
      description: '自然言語処理技術を活用したカスタマーサポート向けチャットボット。企業のサポート業務を効率化し、顧客満足度の向上に貢献。',
      image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=500&q=80',
      technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
      category: 'AI',
      github: 'https://github.com/yourusername/ai-chatbot',
      demo: 'https://ai-chatbot-demo.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'フィットネストラッカーアプリ',
      description: 'パーソナライズされたワークアウト計画と進捗追跡機能を提供するモバイルアプリ。ユーザーの目標に合わせた最適な運動メニューを提案。',
      image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=500&q=80',
      technologies: ['React Native', 'Firebase', 'Redux', 'GraphQL', 'Expo'],
      category: 'モバイル',
      github: 'https://github.com/yourusername/fitness-tracker',
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'ポートフォリオウェブサイト',
      description: '個人の作品やスキルを効果的に展示するための洗練されたポートフォリオサイト。モダンなデザインとパフォーマンス最適化を実現。',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'ウェブ',
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://portfolio-demo.vercel.app/',
      featured: false
    },
    {
      id: 4,
      title: 'データ分析ダッシュボード',
      description: '大規模データセットを視覚化し、ビジネスインサイトを提供するインタラクティブなダッシュボード。複雑なデータを理解しやすく表示。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      category: 'データ',
      github: 'https://github.com/yourusername/data-dashboard',
      demo: 'https://data-dashboard-demo.vercel.app/',
      featured: true
    },
    {
      id: 5,
      title: 'Eコマースプラットフォーム',
      description: '多店舗対応のEコマースプラットフォーム。複雑な在庫管理システムと決済統合を実装し、スケーラブルなアーキテクチャを設計。',
      image: 'https://images.unsplash.com/photo-1565799454278-06c2f7ed19c8?auto=format&fit=crop&w=500&q=80',
      technologies: ['Next.js', 'Strapi CMS', 'Stripe', 'PostgreSQL', 'Docker'],
      category: 'ウェブ',
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.vercel.app/',
      featured: false
    },
    {
      id: 6,
      title: 'AR家具プレビューアプリ',
      description: '拡張現実を用いて家具を実際の部屋に配置してプレビューできるモバイルアプリ。ユーザーがアイテムを購入前に視覚化することを支援。',
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=80',
      technologies: ['React Native', 'ARKit', 'ARCore', 'Three.js', 'Firebase'],
      category: 'AR/VR',
      github: 'https://github.com/yourusername/ar-furniture',
      demo: null,
      featured: false
    }
  ];
  
  // 全カテゴリーを抽出
  const allCategories = ['すべて', ...new Set(projectsData.map(project => project.category))];
  
  // 全技術を抽出
  const allTechnologies = [...new Set(projectsData.flatMap(project => project.technologies))];
  
  // テクノロジーアイコンマッピング
  const getTechnologyIcon = (tech: string) => {
    const iconProps = { size: 16, className: "mr-1" };
    
    switch(tech.toLowerCase()) {
      case 'react':
      case 'react native':
      case 'next.js':
        return <Code {...iconProps} />;
      case 'node.js':
      case 'python':
      case 'fastapi':
        return <Server {...iconProps} />;
      case 'mongodb':
      case 'postgresql':
      case 'firebase':
        return <Database {...iconProps} />;
      case 'tensorflow':
      case 'd3.js':
      case 'redux':
        return <Library {...iconProps} />;
      case 'aws':
      case 'docker':
      case 'vercel':
        return <Cpu {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };
  
  const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('すべて');
    const [activeTech, setActiveTech] = useState<string[]>([]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    
    // 技術フィルタートグル
    const toggleTechFilter = (tech: string) => {
      if (activeTech.includes(tech)) {
        setActiveTech(activeTech.filter(t => t !== tech));
      } else {
        setActiveTech([...activeTech, tech]);
      }
    };
    
    // フィルタリングロジック
    useEffect(() => {
      let filtered = projectsData;
      
      if (activeCategory !== 'すべて') {
        filtered = filtered.filter(project => project.category === activeCategory);
      }
      
      if (activeTech.length > 0) {
        filtered = filtered.filter(project => 
          activeTech.every(tech => project.technologies.includes(tech))
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
      <section id="projects" className="py-24 bg-gradient-to-b from-black to-indigo-950">
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
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                      ${activeCategory === category 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20' 
                        : 'bg-black/30 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-900/20'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setIsFilterVisible(!isFilterVisible)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-black/30 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-900/20 transition-all duration-200"
              >
                <Filter size={16} />
                技術でフィルター {activeTech.length > 0 && `(${activeTech.length})`}
              </button>
            </div>
            
            {/* 技術フィルター */}
            {isFilterVisible && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-black/40 border border-indigo-500/20 rounded-lg p-4 mb-8"
              >
                <div className="mb-2 text-indigo-300 flex items-center gap-2">
                  <Tag size={16} />
                  <span>技術で絞り込む</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {allTechnologies.map(tech => (
                    <button
                      key={tech}
                      onClick={() => toggleTechFilter(tech)}
                      className={`flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 
                        ${activeTech.includes(tech) 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-black/20 border border-blue-500/20 text-blue-300 hover:bg-blue-900/20'}`}
                    >
                      {getTechnologyIcon(tech)} {tech}
                    </button>
                  ))}
                </div>
                
                {activeTech.length > 0 && (
                  <div className="mt-4 flex justify-end">
                    <button
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
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} variants={itemVariants} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12 text-indigo-300">
              <p className="text-xl mb-4">一致するプロジェクトがありません</p>
              <button
                onClick={() => {
                  setActiveCategory('すべて');
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
  
  // プロジェクトカードコンポーネント
  const ProjectCard = ({ project, variants }: { project: typeof projectsData[0], variants: any }) => {
    return (
      <motion.div 
        variants={variants} 
        className="group relative bg-gradient-to-br from-indigo-950/50 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300"
      >
        {/* プロジェクト画像 */}
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
          
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-80"></div>
          
          {/* カテゴリータグ */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-black/50 backdrop-blur-sm text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20">
              {project.category}
            </span>
          </div>
        </div>
        
        {/* プロジェクト情報 */}
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-indigo-200 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          
          {/* 使用技術タグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map(tech => (
              <span key={tech} className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full">
                {getTechnologyIcon(tech)} {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          
          {/* リンク */}
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
        
        {/* ホバーエフェクト用オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>
    );
  };
  
  // 内部で使用する Server コンポーネント
  const Server = (props: { size?: number; className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6" y1="6" y2="6" />
      <line x1="6" x2="6" y1="18" y2="18" />
    </svg>
  );
  

  const Contact = () => (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">お問い合わせ</h2>
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
  
  const Footer = () => (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2024 Portfolio. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Last updated: March 2024</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

