# 3옥타브장인 보컬학원 — 디자인 구현 프롬프트

## 프로젝트 컨텍스트

보컬 트레이닝 학원 "3옥타브장인"의 웹사이트를 구현한다. Next.js 16 + Tailwind CSS 4 + TypeScript 프로젝트가 이미 세팅되어 있고, 모든 라우트의 page.tsx 파일이 placeholder 상태로 존재한다. 브랜드 아이덴티티 가이드(design-guides/)와 로고 에셋(design-assets/)이 제공되며, 콘텐츠 데이터는 site-data/site.json에 구조화되어 있다.

**너의 역할**: site.json의 데이터와 아래 디자인 시스템을 기반으로, 각 page.tsx에 실제 UI를 구현한다. 공통 컴포넌트(Header, Footer 등)는 src/components/에 만들고 layout.tsx에서 사용한다.

---

## 기술 스택 제약

- Next.js 16 App Router (서버 컴포넌트 우선, 'use client'는 필요한 경우에만)
- Tailwind CSS 4 (인라인 스타일 금지)
- TypeScript strict mode
- 이미지: next/image 필수, width/height 명시
- 링크: next/link 필수 (`<a>` 직접 사용 금지)
- 외부 링크: target="_blank" rel="noopener noreferrer nofollow"
- 시맨틱 HTML: header, nav, main, section, article, footer 사용
- 페이지당 h1 정확히 1개, heading 순서 h1→h2→h3 순차적
- CSS 변수는 globals.css에 이미 세팅됨:
  - --color-primary: #000000
  - --color-secondary: #ffffff
  - --color-accent: #e6204d
  - --color-text: #ffffff
  - --color-text-on-light: #212121
  - --color-text-muted: #999999

---

## 브랜드 디자인 시스템

### 컬러
| 용도 | 값 | 설명 |
|------|-----|------|
| Primary | #000000 | 배경 기본색 (다크 테마) |
| Secondary | #FFFFFF | 교차 섹션 배경, 텍스트 |
| Accent | #E6204D | 핫핑크/마젠타 — CTA, 포인트 장식 |
| Text | #FFFFFF | 다크 배경 위 텍스트 |
| Text on Light | #212121 | 화이트 배경 위 텍스트 |
| Text Muted | #999999 | 보조 텍스트 |

### 타이포그래피
브랜드 가이드 지정 폰트가 웹폰트로 제공되지 않으므로, 유사한 Google Fonts로 대체한다:
- **제목(ENG)**: 브랜드 원본은 "FuturaPress Press" (굵은 기하학적 산세리프). → Google Fonts에서 **Bebas Neue** 또는 **Oswald** (weight 700) 사용
- **본문(ENG)**: 브랜드 원본은 "Acumin Variable Concept". → Google Fonts에서 **Inter** 또는 **DM Sans** 사용
- **한글**: 브랜드 원본은 "Sandoll 격동고딕" (굵은 고딕). → Google Fonts에서 **Noto Sans KR** (weight 700~900 제목, 400 본문) 사용
- **필기체**: "Exceed your range" 태그라인용. → Google Fonts에서 **Dancing Script** 또는 **Great Vibes** 사용

next/font/google로 로드한다. CDN 로드 금지.

### 디자인 톤
- **다크 모던**: 블랙 배경이 기본. 화이트 배경과 교차 사용
- **Bold & Geometric**: 굵고 기하학적인 타이포. 대문자(uppercase) 영문 헤딩
- **핫핑크 포인트**: #E6204D를 CTA 버튼, 장식 요소, 호버 효과에 사용
- **Sharp**: 라운드 없음 (rounded-none). 직각 모서리 기본
- **High Contrast**: 블랙/화이트 대비, 핫핑크 악센트

### 장식 요소 (브랜드 가이드에서 추출)
1. **오선지 라인**: 가느다란 흰색 가로선 2줄을 섹션 구분이나 네비게이션 아래 장식으로 사용. `border-t border-white/20` 스타일, 2줄을 간격 4px로 배치
2. **핫핑크 꺾쇠**: `<` `>` 모양의 작은 장식 요소. 텍스트 블록 위아래에 accent 컬러로 배치
3. **계단식 레이아웃**: CHALLENGE→PATIENCE→DREAM 3단계를 계단처럼 오른쪽으로 올라가며 배치 (3옥타브 상승 모티브)
4. **심볼 오버레이**: 히어로 이미지 위에 브랜드 3B 심볼을 반투명하게 오버레이

---

## 공통 컴포넌트

### Header (src/components/Header.tsx)
- 고정(sticky) 헤더, 블랙 배경
- 좌측: 로고 (public/images/logo-white.png — design-assets/Asset 2.png를 복사해서 사용)
- 중앙~우측: 네비게이션 메뉴 (ABOUT, VOCAL CLASS, COMMUNITY, CONTACT)
  - 영문 대문자, bold, 균일 간격
  - ABOUT, VOCAL CLASS, COMMUNITY에는 드롭다운 서브메뉴
  - 호버 시 accent 컬러 (#E6204D)
- 하단 장식: 오선지 라인 2줄 (얇은 흰색 가로선)
- 모바일: 햄버거 메뉴 (이건 'use client' 필요)

네비게이션 데이터:
```
ABOUT → /about (서브: 대표 철학 /about/philosophy, 차별점 /about/difference, 지점 찾기 /about/locations)
VOCAL CLASS → /program (서브: 기본 교육과정 /program/basic, 심화 교육과정 /program/advanced)
COMMUNITY → /community (서브: 수강생 후기 /community/reviews, 발성 꿀팁 /community/tips)
CONTACT → /contact (서브 없음)
```

### Footer (src/components/Footer.tsx)
- 블랙 배경, 화이트 텍스트
- 상단: 로고 + 소셜 미디어 아이콘 링크 (YouTube, Instagram, 네이버 블로그, SoundCloud)
- 중간: 3단 컬럼 (교육과정 / 소개 / 커뮤니티) 링크 목록
- 하단: 사업자 정보
  - 3옥타브장인보컬학원 주식회사 | 대표: 김윤민 | 사업자등록번호: 202-85-35932
  - 서울시 서초구 서초대로78길 36, 강남지웰타워 5층 501호 | 02-566-2848
  - © 2026 3옥타브장인 보컬학원. All rights reserved.

---

## 페이지별 디자인 명세

### 1. 홈페이지 (src/app/page.tsx) — `/`

**섹션 1: Hero**
- 전체 너비, 높이 100vh (또는 최소 80vh)
- 2단 레이아웃: 좌측(55%) + 우측(45%)
- 좌측: 어두운 공연장/마이크 플레이스홀더 이미지 + 반투명 다크 오버레이
  - 이미지 위에 "Exceed your range" 필기체 텍스트 (흰색, 하단 배치)
  - 이미지 아직 없으니 bg-zinc-900 플레이스홀더 + 텍스트
- 우측: 블랙 배경
  - 핫핑크 꺾쇠 장식 (`>` 모양, 우상단)
  - "3 OCTAVE MASTER" — h1, 굵은 대문자 헤딩
  - "대한민국 프로페셔널 발성전문 보컬 트레이닝 학원" — 본문
  - CTA 버튼: "무료 상담 신청" → /contact (핫핑크 배경, 화이트 텍스트, hover 시 약간 밝아짐)
  - 핫핑크 꺾쇠 장식 (`<` 모양, 좌하단)

**섹션 2: 통계**
- 블랙 배경, 가로 3등분
- 각 항목 중앙 정렬:
  - "7,000+" 큰 숫자 (accent 컬러 또는 화이트) + "누적 수강생" 라벨
  - "110,000+" + "YouTube 구독자"
  - "3개" + "지점 (서울/인천/부산)"
- 숫자는 매우 큰 사이즈 (text-5xl 이상), 라벨은 text-sm text-muted

**섹션 3: 핵심 가치 (계단식)**
- 블랙 배경
- 3개 카드를 계단식으로 배치 (왼쪽 아래→오른쪽 위로 상승):
  - Step 01: CHALLENGE — "기초 발성부터 체계적으로"
  - Step 02: PATIENCE — "끈기 있는 단계별 트레이닝"
  - Step 03: DREAM — "한계를 넘어 꿈의 보컬 실현"
- 각 카드: 번호는 accent 컬러, 제목은 큰 대문자, 설명은 작은 텍스트
- 카드 사이에 오선지 라인 장식
- 계단식 = 각 카드에 점점 큰 ml (margin-left) 또는 translate-x 적용

**섹션 4: CTA 배너**
- 핫핑크 (#E6204D) 배경, 전체 너비
- "지금 시작하세요" — 큰 흰색 텍스트
- "단 10분, 첫 레슨만으로도 변화를 경험하세요" — 부제
- "무료 상담 예약" 버튼 (화이트 배경, 블랙 텍스트, hover 시 반전)

---

### 2. 소개 랜딩 (src/app/about/page.tsx) — `/about`

- 히어로: 블랙 배경, "ABOUT" h1 (대문자, 매우 크게), "Exceed Your Range" 서브
- 하단: 3개 카드 링크 → philosophy, difference, locations
  - 각 카드: 제목 + 짧은 설명 + 화살표 링크
  - 호버 시 accent 컬러 보더 또는 배경 변화

### 3. 대표 철학 (src/app/about/philosophy/page.tsx) — `/about/philosophy`

- 히어로: 다크 이미지 배경(플레이스홀더), "대표 철학" h1
- 김윤민 원장 섹션: 블랙 배경, 2단 레이아웃
  - 좌: 인물 사진 플레이스홀더 (bg-zinc-800 원형 또는 사각)
  - 우: "김윤민 원장" h2, "원리만 알면 누구나 노래 잘 부를 수 있다" 서브, 본문 텍스트
  - 자격사항 리스트 (명지대 교수, 모범기업인 대상 등)
- 교육 철학 섹션: 화이트 배경, 3카드 (맞춤형 피드백 / 실전 적용 / 지속 가능한 방법)
- 강사 관리 시스템: 블랙 배경, 본문 텍스트
- 사회공헌: 화이트 배경, 본문 텍스트

### 4. 차별점 (src/app/about/difference/page.tsx) — `/about/difference`

- 히어로: 다크 배경, "차별점" h1, "Why 3 Octave Master?" 서브
- 8개 차별점 그리드 (2열 × 4행 또는 모바일 1열):
  - 검증된 교육 효과 / 단 10분, 첫 레슨의 변화 / 정직원 전문 강사진 / 과학적 접근 / 엄격한 커리큘럼 / 대표 원장 직접 피드백 / 동일 수강료 / 해외에서도 방문
  - 각 카드: 번호 + 제목(bold) + 설명
  - 블랙 배경, 카드 간 오선지 라인 구분
- 하단 CTA: 무료 상담 예약

### 5. 지점 찾기 (src/app/about/locations/page.tsx) — `/about/locations`

- 히어로: 블랙, "지점 찾기" h1
- 3개 지점 카드 (가로 배치, 모바일 세로):
  - 서울점: 강남지웰타워 5층, 강남역 5번출구 100m, 02-566-2848, 강사 7명
  - 인천점: 부평구 경원대로, 부평역 7번출구 250m, 0507-1319-1769
  - 부산점: 부산진구 서전로, 서면역 8번출구 100m, 0507-1351-9158, 강사 3명
  - 카카오톡 상담 링크 버튼 (있는 지점만)
  - 지도 플레이스홀더 영역 (bg-zinc-800, "지도 영역" 텍스트)
- 운영시간: 블랙 배경, 표 형태 (평일 13:00~22:00, 주말 12:00~19:00, 목 휴무)

### 6. 교육과정 랜딩 (src/app/program/page.tsx) — `/program`

- 히어로: 다크 배경, "VOCAL CLASS" h1
- 3-Step Curriculum: 계단식 배치
  - Step 1: 기초 과정 — 발성 기본기, 호흡, 공명, 성대 컨트롤
  - Step 2: 심화 과정 — 노래 적용, 음역대 확장, 곡 해석 & 감정 표현
  - Step 3: 프로페셔널 과정 — 완성도 높은 보컬 테크닉, 장르 스타일링
- 하단: 기본/심화 교육과정 상세 페이지 링크 카드
- CTA: 무료 상담 예약

### 7. 기본 교육과정 (src/app/program/basic/page.tsx) — `/program/basic`

- 히어로: "기본 교육과정" h1, "Basic Vocal Training" 서브
- 4개 커리큘럼 카드: 호흡 / 공명 / 성대 컨트롤 / 피치
- 교육 결과 섹션: 화이트 배경
- CTA: 무료 상담 예약

### 8. 심화 교육과정 (src/app/program/advanced/page.tsx) — `/program/advanced`

- 히어로: "심화 교육과정" h1, "Advanced Vocal Training" 서브
- 4개 커리큘럼 카드: 노래 적용 / 음역대 확장 / 곡 해석 & 감정 표현 / 장르 스타일링
- CTA: 무료 상담 예약

### 9. 커뮤니티 랜딩 (src/app/community/page.tsx) — `/community`

- 히어로: "COMMUNITY" h1
- 2개 카드 링크: 수강생 후기, 발성 꿀팁

### 10. 수강생 후기 (src/app/community/reviews/page.tsx) — `/community/reviews`

- 히어로: "수강생 후기" h1
- 후기 카드 그리드 (플레이스홀더):
  - 3~6개 더미 후기 카드 (이름, 수강 기간, 한줄 후기, 별점)
  - "실제 후기가 들어갈 자리입니다" 노트
- YouTube 비포애프터 영상 임베드 플레이스홀더 영역

### 11. 발성 꿀팁 (src/app/community/tips/page.tsx) — `/community/tips`

- 히어로: "발성 꿀팁" h1
- 블로그/팁 카드 그리드 (플레이스홀더):
  - 4~6개 더미 팁 카드 (썸네일 플레이스홀더, 제목, 짧은 설명)

### 12. 상담 예약 (src/app/contact/page.tsx) — `/contact`

- 히어로: "CONTACT" h1, "무료 상담 예약" 서브
- 2단 레이아웃:
  - 좌: 상담 폼 (화이트 배경, 다크 텍스트)
    - 지점 선택 (select: 서울점/인천점/부산점)
    - 이름 (text input)
    - 전화번호 (tel input)
    - 희망 상담 일시 (datetime input)
    - 문의 내용 (textarea)
    - "상담 예약하기" 버튼 (accent 배경)
    - 폼은 아직 동작 안 해도 됨 (UI만)
  - 우: 상담 안내 (블랙 배경)
    - 운영시간, 휴무일
    - 지점별 전화번호
    - 카카오톡 상담 버튼 (서울/부산)

---

## 파일 구조

```
src/
├── app/
│   ├── layout.tsx          ← Header, Footer 적용
│   ├── globals.css         ← 이미 세팅됨
│   ├── page.tsx            ← 홈
│   ├── about/
│   │   ├── page.tsx
│   │   ├── philosophy/page.tsx
│   │   ├── difference/page.tsx
│   │   └── locations/page.tsx
│   ├── program/
│   │   ├── page.tsx
│   │   ├── basic/page.tsx
│   │   └── advanced/page.tsx
│   ├── community/
│   │   ├── page.tsx
│   │   ├── reviews/page.tsx
│   │   └── tips/page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MobileMenu.tsx      ← 'use client' (햄버거 메뉴)
│   └── (필요한 공통 컴포넌트)
└── (필요시 lib/, types/ 등)
```

---

## 이미지 처리

- 로고: design-assets/ 에서 필요한 PNG를 public/images/에 복사하여 사용
  - 헤더/푸터: Asset 2.png → public/images/logo-white.png (영문 가로형 화이트)
  - 파비콘: 별도 처리
- 히어로/콘텐츠 이미지: 아직 없음. Tailwind 배경색(bg-zinc-900, bg-zinc-800)으로 플레이스홀더 처리. "이미지 영역" 텍스트 표시
- 모든 이미지에 next/image 사용, width/height 명시, alt 텍스트 필수

---

## 주의사항

1. 서버 컴포넌트 우선. 'use client'는 상호작용이 필요한 컴포넌트(MobileMenu, ContactForm 등)에만
2. 각 page.tsx에 이미 세팅된 generateMetadata는 유지
3. 시맨틱 HTML 준수: main, section, article 등
4. 반응형 필수: 모바일(기본) → 태블릿(md:) → 데스크톱(lg:)
5. 불필요한 useEffect 금지
6. 외부 라이브러리 최소화 (아이콘 필요하면 lucide-react 정도만)
7. 오버엔지니어링 금지 — 지금은 정적 UI 구현. 데이터 fetching/CMS 연동은 나중에
