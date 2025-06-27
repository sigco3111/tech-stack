import React, { useState } from 'react';
import { Code, MessageSquare, ArrowRight, Zap, Globe, Smartphone, Monitor, Database, Server, Palette, BarChart3, Clock, DollarSign, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

const TechStackRecommender = () => {
  const [currentStep, setCurrentStep] = useState('home');
  const [inputMethod, setInputMethod] = useState('');
  const [freeTextInput, setFreeTextInput] = useState('');
  const [structuredAnswers, setStructuredAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const structuredQuestions = [
    {
      id: 'projectType',
      question: '어떤 종류의 프로젝트인가요?',
      options: ['웹 애플리케이션', '모바일 앱', '데스크톱 앱', '게임', 'API/백엔드 서비스', '데이터 분석', 'AI/ML', '블록체인', 'IoT', '기타']
    },
    {
      id: 'platform',
      question: '주요 플랫폼은?',
      options: ['iOS', 'Android', '크로스 플랫폼', '웹 브라우저', 'Windows', 'macOS', 'Linux', '임베디드 시스템']
    },
    {
      id: 'techPreference',
      question: '기술 선호도는?',
      options: ['최신 기술 (혁신적, 빠른 발전)', '안정화된 기술 (검증됨, 안정적)', '균형 (적절한 조합)', '상관없음']
    },
    {
      id: 'scale',
      question: '예상 사용자 규모는?',
      options: ['개인/소규모 (1-100명)', '중간 규모 (100-10,000명)', '대규모 (10,000명+)', '기업용']
    },
    {
      id: 'budget',
      question: '예산 범위는?',
      options: ['무료/오픈소스만', '소규모 ($0-1,000)', '중간 ($1,000-10,000)', '대규모 ($10,000+)']
    },
    {
      id: 'timeline',
      question: '개발 기간은?',
      options: ['1개월 이내', '1-3개월', '3-6개월', '6개월 이상']
    },
    {
      id: 'experience',
      question: '개발 경험 수준은?',
      options: ['초보자', '중급자', '고급자', '전문가']
    }
  ];

  const analyzeInput = (input) => {
    const inputText = typeof input === 'string' ? input.toLowerCase() : 
      Object.values(input).join(' ').toLowerCase();
    
    const keywords = {
      ios: ['ios', 'iphone', 'ipad', 'swift', 'apple', '아이폰', '아이패드'],
      android: ['android', 'google', '안드로이드'],
      web: ['web', '웹', 'website', '웹사이트', 'browser', '브라우저'],
      mobile: ['mobile', 'app', '모바일', '앱'],
      ai: ['ai', 'ml', 'machine learning', 'llm', 'chatbot', '인공지능', '머신러닝', '챗봇', '온디바이스'],
      game: ['game', '게임', 'unity', 'unreal'],
      blockchain: ['blockchain', 'crypto', '블록체인', '암호화폐'],
      data: ['data', 'analytics', '데이터', '분석'],
      api: ['api', 'backend', '백엔드', 'server', '서버'],
      desktop: ['desktop', '데스크톱', 'electron']
    };

    const detected = {};
    for (const [category, words] of Object.entries(keywords)) {
      detected[category] = words.some(word => inputText.includes(word));
    }

    return detected;
  };

  const getTechStack = (analysis, preferences = {}) => {
    const { techPreference = '균형', projectType, platform, experience } = preferences;
    const isLatest = techPreference.includes('최신');
    const isStable = techPreference.includes('안정화된');
    
    // iOS 온디바이스 LLM 특별 처리
    if (analysis.ios && analysis.ai && typeof preferences === 'object') {
      return {
        mainStack: {
          'Core AI': isLatest ? ['MLX', 'Core ML', 'ONNX Runtime'] : ['Core ML', 'TensorFlow Lite', 'PyTorch Mobile'],
          'iOS Development': isLatest ? ['SwiftUI', 'Swift 5.9+', 'Xcode 15+'] : ['UIKit', 'Swift 5.0+', 'Xcode 14'],
          'Model Management': ['Llama.cpp', 'Quantized Models', 'Metal Performance Shaders'],
          'Storage': ['SQLite', 'Core Data', 'Realm']
        },
        reasoning: [
          'MLX는 Apple Silicon에 최적화된 최신 머신러닝 프레임워크입니다',
          'Core ML을 통해 온디바이스에서 효율적인 추론이 가능합니다',
          'Llama.cpp는 모바일 환경에서 LLM 실행에 최적화되어 있습니다',
          'Metal Performance Shaders로 GPU 가속을 활용할 수 있습니다'
        ],
        timeline: '4-6개월',
        difficulty: 'advanced',
        estimatedCost: '$5,000-15,000'
      };
    }

    // 게임 개발
    if (analysis.game) {
      return {
        mainStack: {
          'Game Engine': isLatest ? ['Godot 4', 'Bevy', 'Defold'] : ['Unity', 'Unreal Engine', 'Godot'],
          'Programming': isLatest ? ['Rust', 'C#', 'GDScript'] : ['C#', 'C++', 'JavaScript'],
          'Graphics': ['Vulkan', 'Metal', 'DirectX'],
          'Audio': ['FMOD', 'Wwise', 'OpenAL']
        },
        reasoning: [
          isLatest ? 'Godot 4는 최신 렌더링 파이프라인을 제공합니다' : 'Unity는 가장 널리 사용되는 게임 엔진입니다',
          '크로스 플랫폼 배포가 용이합니다',
          '풍부한 에셋 스토어와 커뮤니티 지원이 있습니다'
        ],
        timeline: '6-12개월',
        difficulty: 'intermediate',
        estimatedCost: '$3,000-10,000'
      };
    }

    // 블록체인
    if (analysis.blockchain) {
      return {
        mainStack: {
          'Blockchain': isLatest ? ['Solana', 'Aptos', 'Sui'] : ['Ethereum', 'Polygon', 'BSC'],
          'Smart Contracts': isLatest ? ['Move', 'Rust', 'Cairo'] : ['Solidity', 'Vyper'],
          'Frontend': isLatest ? ['Next.js 14', 'Wagmi v2', 'Viem'] : ['React', 'Web3.js', 'Ethers.js'],
          'Tools': ['Hardhat', 'Foundry', 'IPFS']
        },
        reasoning: [
          isLatest ? 'Solana는 높은 처리량과 낮은 수수료를 제공합니다' : 'Ethereum은 가장 안정적인 스마트 컨트랙트 플랫폼입니다',
          '탈중앙화 애플리케이션 개발에 최적화되어 있습니다',
          '활발한 개발자 생태계를 가지고 있습니다'
        ],
        timeline: '3-5개월',
        difficulty: 'advanced',
        estimatedCost: '$5,000-20,000'
      };
    }

    // 데이터 분석
    if (analysis.data) {
      return {
        mainStack: {
          'Languages': isLatest ? ['Python 3.12', 'Polars', 'DuckDB'] : ['Python', 'Pandas', 'NumPy'],
          'Visualization': isLatest ? ['Plotly Dash', 'Streamlit', 'Observable'] : ['Matplotlib', 'Seaborn', 'Tableau'],
          'ML/AI': isLatest ? ['PyTorch 2.0', 'Hugging Face', 'LangChain'] : ['Scikit-learn', 'TensorFlow', 'Keras'],
          'Database': isLatest ? ['ClickHouse', 'TimescaleDB'] : ['PostgreSQL', 'MongoDB']
        },
        reasoning: [
          'Python은 데이터 분석 분야에서 가장 널리 사용됩니다',
          isLatest ? 'Polars는 Pandas보다 빠른 성능을 제공합니다' : 'Pandas는 검증된 데이터 처리 라이브러리입니다',
          '풍부한 머신러닝 라이브러리 생태계를 가지고 있습니다'
        ],
        timeline: '2-4개월',
        difficulty: 'intermediate',
        estimatedCost: '$1,000-5,000'
      };
    }

    // Android 앱
    if (analysis.android) {
      return {
        mainStack: {
          'Android Development': isLatest ? ['Jetpack Compose', 'Kotlin Multiplatform', 'Android 14'] : ['Android Views', 'Kotlin', 'Java'],
          'Architecture': isLatest ? ['MVVM', 'Clean Architecture', 'Hilt'] : ['MVP', 'Room', 'Retrofit'],
          'Backend': isLatest ? ['Ktor', 'Supabase', 'Firebase'] : ['Spring Boot', 'Node.js', 'Firebase'],
          'Database': ['Room', 'SQLite', 'Realm']
        },
        reasoning: [
          isLatest ? 'Jetpack Compose는 현대적인 UI 개발을 가능하게 합니다' : 'Android Views는 안정적이고 검증된 UI 시스템입니다',
          'Kotlin은 Google이 공식 추천하는 언어입니다',
          '풍부한 라이브러리와 도구들이 제공됩니다'
        ],
        timeline: '3-5개월',
        difficulty: 'intermediate',
        estimatedCost: '$2,000-8,000'
      };
    }

    // 웹 애플리케이션 (기본값)
    return {
      mainStack: {
        'Frontend': isLatest ? ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS'] : ['React', 'Vue.js', 'Bootstrap', 'JavaScript'],
        'Backend': isLatest ? ['Bun', 'Hono', 'tRPC', 'Prisma'] : ['Node.js', 'Express', 'REST API'],
        'Database': isLatest ? ['Turso', 'PlanetScale', 'Supabase'] : ['PostgreSQL', 'MongoDB', 'MySQL'],
        'Deployment': isLatest ? ['Vercel', 'Railway', 'Cloudflare'] : ['AWS', 'Heroku', 'DigitalOcean']
      },
      reasoning: [
        isLatest ? 'Next.js 14는 최신 React 기능과 성능 최적화를 제공합니다' : 'React는 가장 인기 있고 안정적인 프론트엔드 라이브러리입니다',
        isLatest ? 'Bun은 Node.js보다 빠른 런타임 성능을 제공합니다' : 'Node.js는 검증된 백엔드 런타임입니다',
        '큰 개발자 커뮤니티와 풍부한 리소스를 가지고 있습니다'
      ],
      timeline: '2-4개월',
      difficulty: 'intermediate',
      estimatedCost: '$1,500-6,000'
    };
  };

  const generateRecommendation = async (input) => {
    setIsLoading(true);
    
    const analysis = analyzeInput(input);
    const preferences = typeof input === 'object' ? input : {};
    const stack = getTechStack(analysis, preferences);
    
    const recommendation = {
      ...stack,
      alternatives: [
        { 
          name: preferences.techPreference?.includes('최신') ? '안정화된 스택' : '최신 기술 스택', 
          reason: preferences.techPreference?.includes('최신') ? '더 안정적이고 검증된 기술들' : '더 혁신적이고 빠른 개발'
        },
        { name: '하이브리드 접근', reason: '최신 기술과 안정화된 기술의 조합' }
      ]
    };

    // 2초 지연으로 로딩 시뮬레이션
    setTimeout(() => {
      setRecommendation(recommendation);
      setIsLoading(false);
      setCurrentStep('result');
    }, 2000);
  };

  const handleFreeTextSubmit = () => {
    if (freeTextInput.trim()) {
      generateRecommendation(freeTextInput);
    }
  };

  const handleStructuredSubmit = () => {
    if (Object.keys(structuredAnswers).length >= 3) {
      generateRecommendation(structuredAnswers);
    }
  };

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Code className="w-12 h-12 text-purple-300" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            TechStack AI
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            당신의 아이디어를 분석하고 최적의 기술스택을 추천해드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            onClick={() => {
              setInputMethod('freetext');
              setCurrentStep('input');
            }}
          >
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-purple-300 mr-4" />
              <h3 className="text-2xl font-bold">자유 텍스트</h3>
            </div>
            <p className="text-gray-300 mb-6">
              아이디어를 자유롭게 설명해주세요. AI가 자연어를 이해하고 분석합니다.
            </p>
            <div className="flex items-center text-purple-300 group-hover:text-purple-200">
              <span className="mr-2">시작하기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            onClick={() => {
              setInputMethod('structured');
              setCurrentStep('input');
            }}
          >
            <div className="flex items-center mb-6">
              <BarChart3 className="w-8 h-8 text-blue-300 mr-4" />
              <h3 className="text-2xl font-bold">구조화된 질문</h3>
            </div>
            <p className="text-gray-300 mb-6">
              단계별 질문에 답하여 더 정확한 추천을 받아보세요.
            </p>
            <div className="flex items-center text-blue-300 group-hover:text-blue-200">
              <span className="mr-2">시작하기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-300">지원하는 분야</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Globe, label: '웹 개발' },
              { icon: Smartphone, label: '모바일 앱' },
              { icon: Monitor, label: '데스크톱' },
              { icon: Database, label: '데이터베이스' },
              { icon: Server, label: '백엔드' },
              { icon: Palette, label: 'UI/UX' },
              { icon: Zap, label: '게임' },
              { icon: TrendingUp, label: 'AI/ML' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <item.icon className="w-8 h-8 text-purple-300 mb-2" />
                <span className="text-sm text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderInput = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => setCurrentStep('home')}
            className="mb-8 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            돌아가기
          </button>

          {inputMethod === 'freetext' ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">아이디어를 자유롭게 설명해주세요</h2>
              <textarea
                value={freeTextInput}
                onChange={(e) => setFreeTextInput(e.target.value)}
                placeholder="예시: 음식 배달 앱을 만들고 싶어요. 사용자가 주변 음식점을 찾고 주문할 수 있어야 하고, 실시간 배달 추적 기능도 필요해요. 결제 시스템과 리뷰 기능도 포함하고 싶습니다..."
                className="w-full h-64 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-purple-400"
              />
              <button
                onClick={handleFreeTextSubmit}
                disabled={!freeTextInput.trim()}
                className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                기술스택 추천받기
              </button>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-6">몇 가지 질문에 답해주세요</h2>
              <div className="space-y-8">
                {structuredQuestions.map((q, index) => (
                  <div key={q.id}>
                    <h3 className="text-xl font-semibold mb-4">{q.question}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => setStructuredAnswers({...structuredAnswers, [q.id]: option})}
                          className={`p-3 rounded-lg border transition-all text-left ${
                            structuredAnswers[q.id] === option 
                              ? 'bg-purple-600 border-purple-400' 
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleStructuredSubmit}
                disabled={Object.keys(structuredAnswers).length < 3}
                className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                기술스택 추천받기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-300 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold mb-2">AI가 분석 중입니다...</h2>
        <p className="text-gray-300">최적의 기술스택을 찾고 있어요</p>
      </div>
    </div>
  );

  const renderResult = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setCurrentStep('home')}
            className="mb-8 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            새로운 추천받기
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 메인 추천 */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                  추천 기술스택
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(recommendation.mainStack).map(([category, techs]) => (
                    <div key={category} className="bg-white/5 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-4 capitalize text-purple-300">
                        {category === 'frontend' ? '프론트엔드' : 
                         category === 'backend' ? '백엔드' :
                         category === 'mobile' ? '모바일' : 
                         category === 'cloud' ? '클라우드' : category}
                      </h3>
                      <div className="space-y-2">
                        {techs.map((tech) => (
                          <div key={tech} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 추천 이유 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">왜 이 기술들을 추천했을까요?</h3>
                <div className="space-y-4">
                  {recommendation.reasoning.map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 사이드바 정보 */}
            <div className="space-y-6">
              {/* 프로젝트 정보 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">프로젝트 정보</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">예상 개발 기간</p>
                      <p className="font-semibold">{recommendation.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">예상 비용</p>
                      <p className="font-semibold">{recommendation.estimatedCost}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">난이도</p>
                      <p className="font-semibold capitalize">
                        {recommendation.difficulty === 'intermediate' ? '중급' : recommendation.difficulty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 대안 스택 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                  대안 스택
                </h3>
                <div className="space-y-4">
                  {recommendation.alternatives.map((alt, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-300 mb-2">{alt.name}</h4>
                      <p className="text-sm text-gray-400">{alt.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) return renderLoading();
  if (currentStep === 'home') return renderHome();
  if (currentStep === 'input') return renderInput();
  if (currentStep === 'result') return renderResult();
};

export default TechStackRecommender;