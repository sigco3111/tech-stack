
# TechStack AI 🚀

AI 기반 기술스택 추천 시스템입니다. 사용자의 아이디어와 요구사항을 분석하여 최적의 기술스택을 제안합니다.

## 📋 프로젝트 소개

TechStack AI는 개발자들이 새로운 프로젝트를 시작할 때 적절한 기술스택을 선택할 수 있도록 도와주는 인공지능 기반 추천 시스템입니다. 자유로운 텍스트 입력 또는 구조화된 질문을 통해 프로젝트 요구사항을 분석하고, 최적의 기술조합을 제안합니다.

실행 주소 : https://dev-canvas-pi.vercel.app/

## ✨ 주요 기능

### 🎯 스마트 분석
- **자유 텍스트 분석**: 자연어로 작성된 아이디어를 AI가 분석
- **구조화된 질문**: 단계별 질문을 통한 정확한 요구사항 파악
- **다양한 분야 지원**: 웹, 모바일, 데스크톱, 게임, AI/ML 등

### 📊 상세한 추천 결과
- **기술스택 조합**: 프론트엔드, 백엔드, 모바일, 클라우드 기술 추천
- **추천 근거**: 각 기술을 선택한 이유 설명
- **프로젝트 정보**: 예상 개발 기간, 비용, 난이도 제공
- **대안 제시**: 다른 선택지와 장단점 비교

### 🎨 사용자 경험
- **현대적인 UI**: 그라데이션과 글래스모피즘 디자인
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **직관적인 인터페이스**: 단계별 안내로 쉬운 사용

## 🛠️ 기술 스택

### Frontend
- **React 18**: 컴포넌트 기반 UI 라이브러리
- **TypeScript**: 타입 안정성 보장
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **Lucide React**: 아이콘 라이브러리

### 주요 의존성
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "lucide-react": "^0.400.0"
}
```

## 🚀 시작하기

### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/your-username/tech-stack-ai.git
cd tech-stack-ai
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📖 사용법

### 1. 자유 텍스트 입력 방식
1. 홈페이지에서 "자유 텍스트" 옵션 선택
2. 아이디어를 자연어로 상세히 설명
3. "기술스택 추천받기" 버튼 클릭
4. AI 분석 결과 확인

**예시 입력:**
```
음식 배달 앱을 만들고 싶어요. 사용자가 주변 음식점을 찾고 주문할 수 있어야 하고, 
실시간 배달 추적 기능도 필요해요. 결제 시스템과 리뷰 기능도 포함하고 싶습니다.
```

### 2. 구조화된 질문 방식
1. 홈페이지에서 "구조화된 질문" 옵션 선택
2. 5가지 카테고리의 질문에 답변:
   - 프로젝트 종류
   - 예상 사용자 규모
   - 예산 범위
   - 개발 기간
   - 개발 경험 수준
3. 최소 3개 이상 답변 후 추천 요청

## 🎯 지원 분야

- **웹 개발**: React, Vue, Angular 등
- **모바일 앱**: React Native, Flutter, Native 개발
- **데스크톱**: Electron, Tauri 등
- **백엔드**: Node.js, Python, Java, Go 등
- **데이터베이스**: SQL, NoSQL, 클라우드 DB
- **클라우드**: AWS, Azure, GCP
- **게임 개발**: Unity, Unreal Engine 등
- **AI/ML**: TensorFlow, PyTorch 등

## 📁 프로젝트 구조

```
tech-stack-ai/
├── src/
│   ├── components/
│   │   └── TechStackRecommender.tsx    # 메인 컴포넌트
│   ├── hooks/                          # 커스텀 훅 (예정)
│   ├── services/                       # API 서비스 (예정)
│   ├── types/                          # 타입 정의 (예정)
│   └── utils/                          # 유틸리티 함수 (예정)
├── public/                             # 정적 파일
├── README.md                           # 프로젝트 문서
└── package.json                        # 의존성 정보
```

## 🔮 향후 계획

### Phase 1 (현재)
- [x] 기본 UI/UX 구현
- [x] 입력 방식 선택 기능
- [x] 목업 데이터 기반 추천 시스템

### Phase 2 (개발 예정)
- [ ] 실제 AI API 연동 (Claude, GPT 등)
- [ ] 사용자 맞춤 추천 알고리즘 개선
- [ ] 추천 결과 저장 및 히스토리 관리

### Phase 3 (향후)
- [ ] 사용자 계정 시스템
- [ ] 커뮤니티 기능 (추천 공유, 리뷰)
- [ ] 실시간 기술 트렌드 반영
- [ ] 모바일 앱 버전 출시

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. **Fork** 저장소
2. **Feature Branch** 생성 (`git checkout -b feature/amazing-feature`)
3. **Commit** 변경사항 (`git commit -m 'Add amazing feature'`)
4. **Push** 브랜치 (`git push origin feature/amazing-feature`)
5. **Pull Request** 생성

### 개발 가이드라인

- **코드 스타일**: Prettier + ESLint 설정 준수
- **커밋 메시지**: Conventional Commits 형식 사용
- **타입스크립트**: 엄격한 타입 검사 활용
- **테스트**: 새로운 기능에 대한 테스트 코드 작성

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의 및 지원

- **이슈 신고**: [GitHub Issues](https://github.com/your-username/tech-stack-ai/issues)
- **기능 제안**: [GitHub Discussions](https://github.com/your-username/tech-stack-ai/discussions)
- **이메일**: your-email@example.com

## 🙏 감사의 말

- [Lucide](https://lucide.dev/): 아름다운 아이콘 제공
- [Tailwind CSS](https://tailwindcss.com/): 뛰어난 CSS 프레임워크
- [React](https://reactjs.org/): 강력한 UI 라이브러리

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요! 