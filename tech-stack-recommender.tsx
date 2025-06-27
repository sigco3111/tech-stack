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
      options: ['웹 애플리케이션', '모바일 앱', '데스크톱 앱', '게임', 'API/백엔드 서비스', '데이터 분석', '기타']
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

  const generateRecommendation = async (input) => {
    setIsLoading(true);
    
    // 실제 구현에서는 Claude API 활용
    const mockRecommendation = {
      mainStack: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express', 'PostgreSQL'],
        mobile: ['React Native'],
        cloud: ['AWS', 'Docker', 'GitHub Actions']
      },
      reasoning: [
        'React는 컴포넌트 기반 아키텍처로 확장성이 뛰어납니다',
        'TypeScript로 타입 안정성을 확보할 수 있습니다',
        'PostgreSQL은 복잡한 데이터 관계를 효율적으로 처리합니다',
        'AWS는 안정적인 클라우드 인프라를 제공합니다'
      ],
      timeline: '3-4개월',
      difficulty: 'intermediate',
      estimatedCost: '$2,000-5,000',
      alternatives: [
        { name: 'Vue.js + Laravel', reason: '더 쉬운 학습 곡선' },
        { name: 'Flutter + Firebase', reason: '더 빠른 개발 속도' }
      ]
    };

    // 2초 지연으로 로딩 시뮬레이션
    setTimeout(() => {
      setRecommendation(mockRecommendation);
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