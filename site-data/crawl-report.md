# Crawl Report — 3옥타브장인 보컬학원

## 사이트 정보
- URL: https://3octavevocal.com
- 플랫폼: imweb (아임웹) — SPA 기반
- 총 페이지 수: 12개 (활성) + 12개 (비활성 shop_view)
- 크롤 일시: 2026-02-11
- 디자인 에이전시: de.blur (draw.best)

## 플랫폼 식별 근거
- robots.txt: `site_join`, `login.cm`, `shop_cart` 패턴
- SPA 렌더링: 정적 HTML에 콘텐츠 없음 (JS 렌더링 후 DOM 생성)
- URL 패턴: `/shop_view/`, 쿼리 파라미터 기반 모드 전환

## 페이지 목록
| # | 경로 | 제목 | 상태 | 발견 소스 | Depth |
|---|------|------|------|----------|-------|
| 1 | /main | 홈 | 200 | sitemap | 0 |
| 2 | /about | 소개 (랜딩) | 200 | sitemap | 1 |
| 3 | /about01 | 대표 철학 | 200 | sitemap | 2 |
| 4 | /about02 | 차별점 | 200 | sitemap | 2 |
| 5 | /about03 | 지점 찾기 | 200 | sitemap | 2 |
| 6 | /program | 교육과정 (랜딩) | 200 | sitemap | 1 |
| 7 | /program01 | 기본 교육과정 | 200 | sitemap | 2 |
| 8 | /program02 | 심화 교육과정 | 200 | sitemap | 2 |
| 9 | /community | 커뮤니티 (랜딩) | 200 | sitemap | 1 |
| 10 | /community01 | 수강생 후기 | 200 | sitemap | 2 |
| 11 | /community02 | 발성 꿀팁 | 200 | sitemap | 2 |
| 12 | /34 | 상담 예약 | 200 | sitemap | 1 |
| 13-24 | /shop_view/1~16 | 상품 페이지 | 비활성 | sitemap | — |

## 네비게이션 구조

### 현재 사이트 (imweb)
- 소개
  - 대표 철학 (/about01)
  - 차별점 (/about02)
  - 지점 찾기 (/about03)
- 교육과정
  - 기본 교육과정 (/program01)
  - 심화 교육과정 (/program02)
- 커뮤니티
  - 수강생 후기 (/community01)
  - 발성 꿀팁 (/community02)
- 상담 예약 (/34)

### 디자인 가이드 기준 (Artboard 38 — 웹 목업)
- ABOUT
- VOCAL CLASS
- COMMUNITY
- CONTACT

## 디자인 추출

### 브랜드 가이드 기준 (de.blur 제작)
- Primary: #000000 (Black)
- Secondary: #FFFFFF (White)
- Accent: #E6204D (Hot Pink/Magenta, R230 G32 B77)
- Heading Font (ENG): FuturaPress Press :ver.1.15
- Body Font (ENG): Acumin Variable Concept (Medium~Black, Italic)
- Korean Font: Sandoll 격동고딕
- Script/Tagline: 필기체 (Exceed your range 용)

### 현재 사이트 CSS 기준
- Brand Accent: #e6204d
- CTA Blue: #001AFF
- Text: #212121
- Light Text: #999999
- Background: #ffffff
- Font: Spoqa Han Sans, Arial

### 브랜드 톤
- 다크 테마 기반 (블랙 배경, 화이트 텍스트)
- 핫핑크 포인트 컬러
- 음악 오선지 라인을 장식 요소로 활용
- 계단식 배치 레이아웃 (3옥타브 상승 모티브)
- Bold, geometric, modern 타이포그래피

## 연락처
- 대표: 김윤민
- 법인명: 3옥타브장인보컬학원 주식회사
- 사업자등록번호: 202-85-35932
- 설립일: 2022년 9월 1일

### 지점별 연락처
| 지점 | 주소 | 전화 |
|------|------|------|
| 서울점 | 서울시 서초구 서초대로78길 36, 강남지웰타워 5층 501호 | 02-566-2848 / 0507-1406-2849 |
| 인천점 | 인천 부평구 경원대로 1414, 2층 | 0507-1319-1769 |
| 부산점 | 부산 부산진구 서전로 17, 3층 (진성빌딩) | 0507-1351-9158 |

### 소셜 미디어
- YouTube: https://www.youtube.com/@3octave
- Instagram: https://www.instagram.com/3octave_official/
- Naver Blog: https://blog.naver.com/3octave1
- Naver Cafe: http://cafe.naver.com/cloud9ent
- Kakao 서울: https://pf.kakao.com/_VwYHd
- Kakao 부산: https://pf.kakao.com/_gUMxbs
- SoundCloud: https://soundcloud.com/user-208871057

### 운영시간
- 평일: 13:00~22:00
- 주말: 12:00~19:00
- 휴무: 목요일

## 리다이렉트 필요 URL
| 기존 URL | 새 URL(후보) | 비고 |
|----------|-------------|------|
| /main | / | 홈페이지 |
| /about | /about | 소개 랜딩 |
| /about01 | /about/philosophy | 대표 철학 |
| /about02 | /about/difference | 차별점 |
| /about03 | /about/locations | 지점 찾기 |
| /program | /program | 교육과정 랜딩 |
| /program01 | /program/basic | 기본 교육과정 |
| /program02 | /program/advanced | 심화 교육과정 |
| /community | /community | 커뮤니티 랜딩 |
| /community01 | /community/reviews | 수강생 후기 |
| /community02 | /community/tips | 발성 꿀팁 |
| /34 | /contact | 상담 예약 |
| /shop_view/* | — | 비활성 상품 페이지, 리다이렉트 불필요 |

## 특이사항
- **SPA 한계**: 아임웹 SPA 특성상 정적 크롤링으로 실제 렌더링 콘텐츠 추출 불가. 3자 소스(학원비알리미, 런즈, 뉴스 기사 등)에서 보완 수집
- **디자인 가이드 보유**: 클라이언트가 브랜드 아이덴티티 가이드(41페이지)와 로고 에셋(54개+추가4개)을 보유 — 디자인 가이드 기준으로 신규 사이트 구축
- **다지점 운영**: 서울/인천/부산 3개 지점 운영 중
- **shop_view 페이지**: 12개의 상품 페이지가 sitemap에 있으나 모두 비활성 상태 — 마이그레이션에서 제외
- **YouTube 구독자 ~11만명**: 콘텐츠 마케팅 핵심 채널, 사이트에 유튜브 임베드 필요
