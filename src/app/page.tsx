'use client';
import { X, Menu, Maximize2, Grid, ChevronLeft, ChevronRight, Github, Mail, Linkedin } from 'lucide-react';
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

  const Hero = () => (
    <section id="home" className="pt-[70px] min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">山田 太郎</h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-4">ソフトウェアエンジニア</h2>
            <p className="text-gray-300 mb-6">
              フルスタック開発者として5年以上の経験を持ち、モダンな技術スタックを用いた
              スケーラブルなWebアプリケーション開発を得意としています。
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                お問い合わせ
              </a>
              <a href="#projects" className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded hover:bg-blue-900/30 transition-colors">
                プロジェクトを見る
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" 
              alt="プロフィール写真" 
              className="rounded-full w-64 h-64 object-cover shadow-lg ring-4 ring-blue-500/50"
            />
          </div>
        </div>
      </div>
    </section>
  );

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

  const Projects = () => {
    const projects = [
      {
        title: 'ECサイトプラットフォーム',
        description: 'Next.js と Stripe を使用したモダンなECサイトプラットフォーム。複数の店舗が独自のECサイトを簡単に構築できるマルチテナント対応のプラットフォームです。決済処理、在庫管理、注文管理など、ECサイトに必要な機能を全て実装しています。',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
        github: '#',
        demo: '#',
        tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS']
      },
      {
        title: '予約管理システム',
        description: 'React と GraphQL を使用した予約管理システム。美容院、レストラン、医療機関など、様々な業種で利用可能な予約システムです。リアルタイムの空き状況確認、自動リマインダー送信、スタッフのシフト管理機能を備えています。',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
        github: '#',
        demo: '#',
        tags: ['React', 'GraphQL', 'Node.js', 'PostgreSQL']
      },
      {
        title: 'AIチャットボット',
        description: 'Python と機械学習を使用したカスタマーサポート向けチャットボット。自然言語処理を活用して顧客の問い合わせを理解し、適切な回答を提供します。会話履歴の分析による継続的な学習機能も実装しています。',
        image: 'https://images.unsplash.com/photo-1557426272-3d6b3978d208?auto=format&fit=crop&w=800&q=80',
        github: '#',
        demo: '#',
        tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker']
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isGridView, setIsGridView] = useState(true);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
    const nextProject = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
    };
  
    const prevProject = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
    };
  
    useEffect(() => {
      if (isTransitioning) {
        const timer = setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    }, [isTransitioning]);
  
    const toggleView = (index?: number) => {
      if (index !== undefined) {
        setCurrentIndex(index);
        setSelectedProject(index);
        setIsGridView(false);
      } else {
        setIsGridView(!isGridView);
        setSelectedProject(null);
      }
    };
  
    return (
      <section id="projects" className="py-20 bg-gray-800 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">プロジェクト</h2>
            <button
              onClick={() => toggleView()}
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              aria-label={isGridView ? "Switch to detail view" : "Switch to grid view"}
            >
              {isGridView ? <Maximize2 size={24} /> : <Grid size={24} />}
              <span>{isGridView ? "詳細表示" : "一覧表示"}</span>
            </button>
          </div>
          
          {isGridView ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:border-blue-500 transition-colors cursor-pointer"
                  onClick={() => toggleView(index)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 line-clamp-3 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative max-w-6xl mx-auto">
              <button 
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors z-10"
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors z-10"
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
  
              <div 
                className={`flex flex-col lg:flex-row items-center gap-8 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 transition-opacity duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold text-white">{projects[currentIndex].title}</h3>
                  <p className="text-gray-300 leading-relaxed">{projects[currentIndex].description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-blue-900/50 text-blue-300 px-4 py-1.5 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-6 pt-4">
                    <a 
                      href={projects[currentIndex].github}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <Github size={24} className="mr-2" />
                      GitHub
                    </a>
                    <a 
                      href={projects[currentIndex].demo}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      デモを見る
                    </a>
                  </div>
                </div>
              </div>
  
              <div className="flex justify-center space-x-2 mt-8">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-blue-400'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

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
          <Projects />
          <Skills />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

