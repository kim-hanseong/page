import Image from "next/image";
import React from "react";

export default function App() {
  const edgeCases = [
    {
      title: "1. SSR 환경에서의 하이드레이션 불일치(Hydration Mismatch) 해결",
      desc: "메인 화면과 모달 컴포넌트가 동일한 TanStack Query Key를 공유하는 상태에서 초기 SSR 데이터와 클라이언트 마운트 시점의 상태 엇갈림으로 인해 텍스트 불일치(예: Server '4' vs Client '3') 하이드레이션 에러 발생. 모달 내부의 데이터 패칭은 SSR 초기 데이터 의존성을 분리하고, 클라이언트 단에서 독립적인 쿼리 라이프사이클을 타도록 조정하여 하이드레이션 오류를 원천 차단함.",
      tags: ["SSR", "Hydration", "TanStack Query"],
    },
    {
      title: "2. 주문/장바구니 페이지 데이터 삭제 시 상태 동기화",
      desc: "장바구니 데이터를 기반으로 주문 페이지를 구성하고 삭제(Delete)를 수행할 때 소스가 다른 초기 SSR 데이터와 클라이언트 상태 간 불일치로 UI 왜곡 발생. 단일 진실 공급원(Single Source of Truth) 원칙에 따라 TanStack Query의 캐시 무효화(invalidateQueries)와 상태 업데이트 로직을 일관되게 연결하여 데이터 정합성 확보.",
      tags: ["State Sync", "Cache Invalidation"],
    },
    {
      title: "3. 외부 API 데이터 포맷 혼재에 따른 ISBN 매칭 엣지 케이스 방어",
      desc: "도서 상세 페이지에서 동명 이서적을 구분하기 위해 ISBN을 사용했으나, Kakao Book API에서 반환되는 ISBN 포맷이 복합 문자열과 단일 문자열로 혼재되어 파싱 에러 및 매칭 오링 발생. 문자열 파싱 유틸리티를 구축하여 포맷 차이를 정규화하고, URL 인코딩 및 단일/복합 포맷 예외 처리를 강화하여 안정적인 데이터 특정 완료.",
      tags: ["API Parsing", "ISBN Normalization"],
    },
    {
      title: "4. 컴포넌트 재사용성 기준 정립과 관심사 분리",
      desc: "기본 배송지 생성 및 토글 상태(isRecent) 처리 시 비즈니스 로직과 UI 컴포넌트가 강하게 결합되어 컴포넌트 비대화 발생. 로그인 검증(AuthButton), 장바구니 핸들러(useShopHandler), 모달 스택(useModalStack) 등 관심사를 커스텀 훅으로 분리하고 UI 컴포넌트는 순수 렌더링에만 집중하도록 설계.",
      tags: ["Custom Hooks", "Separation of Concerns"],
    },
    {
      title:
        "5. 확장 가능한 도메인 타입 설계와 타입 체이닝을 통한 타입 정합성 확보",
      desc: "프로젝트 고도화 과정에서 예상치 못한 API 응답 형태와 컴포넌트 Props 타입들이 늘어나며 타입 정의가 꼬이고 파편화되는 현상 발생. 공통 도메인 타입(Book 등)을 기반으로 유틸리티 타입과 교차(Intersection) 타입, 체이닝 방식을 적용해 확장성 있게 설계함으로써 타입 안정성을 높이고 유지보수성을 극대화함.",
      tags: ["TypeScript", "Type Chaining", "Architecture"],
    },
  ];

  const authFeatures = [
    {
      title:
        "1. 로그인 상태별 조건부 렌더링 & 보호된 라우터 (Protected Routes)",
      desc: "비로그인 사용자가 장바구니나 주문/결제 페이지에 접근할 때, Next.js Middleware와 클라이언트 Auth Context를 연동하여 무단 접근을 원천 차단하고 로그인 모달 또는 리다이렉션으로 안전하게 유도합니다.",
      tags: ["Next.js Middleware", "Auth Guard", "Session Validation"],
    },
    {
      title: "2. Supabase RLS 기반 사용자별 데이터 격리 UI 디자인",
      desc: "데이터베이스 레벨의 Row Level Security(RLS) 정책과 연동하여, 로그인된 유저의 고유 ID(UUID)에 해당하는 장바구니, 찜 목록, 주문 내역만 안전하게 렌더링되도록 상태와 UI를 분기 처리했습니다.",
      tags: ["Supabase RLS", "PostgreSQL", "Data Security"],
    },
    {
      title: "3. 유저 배송지 주소 관리 및 실시간 주문/구매 현황 조회 기능 구현",
      desc: "사용자가 마이페이지 및 주문 플로우 내에서 자신의 배송지 주소를 등록·관리하고, 현재 진행 중인 구매 현황과 상세 주문 내역을 실시간으로 확인하고 추적할 수 있도록 구현했습니다. Supabase 데이터베이스와 연동하여 개인화된 유저 정보 및 주문 상태를 정확하게 동기화하고 시각화했습니다.",
      tags: [
        "User Address",
        "Purchase Status",
        "Order Tracking",
        "Database Sync",
      ],
    },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-['Pretendard',sans-serif] pb-20 selection:bg-zinc-800 selection:text-zinc-100">
        {/* Top Header */}
        <nav className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4 flex justify-between items-center max-w-[210mm] mx-auto">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-widest text-zinc-300">
              KIM HAN-SEOUNG
            </span>
            <span className="hidden md:inline text-xs text-zinc-500 font-mono">
              / Frontend & AI Service Engineer
            </span>
          </div>
          <div className="text-xs font-mono text-zinc-400">
            PORTFOLIO ARCHIVE
          </div>
        </nav>

        {/* Main Container */}
        <main className="max-w-[210mm] mx-auto px-4 sm:px-0 pt-8 flex flex-col gap-12">
          {/* PAGE 01: Profile */}
          <section className="bg-[#121212] border border-zinc-800/80 rounded-xl p-8 sm:p-[18mm_20mm_14mm] flex flex-col justify-between shadow-2xl relative min-h-[297mm]">
            <div>
              <div className="flex justify-between font-mono text-[11px] text-zinc-500 uppercase tracking-widest pb-4 border-b border-zinc-800">
                <span>Frontend & AI Portfolio</span>
                <span>2026</span>
              </div>

              <div className="py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] items-end gap-6">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                    Profile
                  </span>
                  <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100 mt-2">
                    김한성
                  </h1>
                  <div className="text-lg font-medium text-zinc-400 mt-2">
                    Frontend & AI Service Engineer
                  </div>
                </div>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-sm font-light">
                  데이터 흐름과 렌더링 비용을 함께 고민하는 프론트엔드
                  개발자입니다. 서버·클라이언트 역할을 나누고, 재사용 가능한
                  컴포넌트로 일관된 UI를 만듭니다.
                </p>
              </div>

              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-4 py-5 border-t border-b border-zinc-800/80 items-center">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "TanStack Query",
                    "Supabase",
                    "CSS Modules",
                    "Python",
                    "Git · GitHub",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className={`font-mono text-xs px-3 py-1 rounded-full border ${i >= 6 ? "border-zinc-800 bg-zinc-900/50 text-zinc-400" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 items-start">
                <div>
                  <div className="font-mono text-xs text-zinc-500 tracking-wider">
                    PROJECT 01
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-100 mt-1">
                    THE ARCHIVE
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    취향이 다른 AI 큐레이터가 책을 골라 주고 리뷰해 주는 온라인
                    서점. 검색부터 장바구니·주문까지 전체 흐름을 구현했습니다.
                  </p>
                </div>
                <dl className="grid grid-cols-[48px_1fr] gap-y-2 text-xs font-mono">
                  <dt className="text-zinc-500">기간</dt>
                  <dd className="text-zinc-300">3주</dd>
                  <dt className="text-zinc-500">인원</dt>
                  <dd className="text-zinc-300">1인 (기획·개발)</dd>
                  <dt className="text-zinc-500">FE</dt>
                  <dd className="text-zinc-300">Next.js, TS</dd>
                  <dt className="text-zinc-500">BE</dt>
                  <dd className="text-zinc-300">Supabase (RLS)</dd>
                  <dt className="text-zinc-500">API</dt>
                  <dd className="text-zinc-300">Gemini, Kakao</dd>
                </dl>
              </div>

              <div className="mt-8 rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-center">
                <Image
                  src={"/리뷰어.png"}
                  width={600}
                  height={500}
                  alt="isbn"
                />
                <Image src={"/리뷰.png"} width={600} height={500} alt="isbn" />
                <p className="text-xs text-zinc-500">
                  FIG.01 — AI 리뷰어 선택 화면 개요
                </p>
              </div>
            </div>

            <div className="mt-12 pt-4 border-t border-zinc-800 flex justify-between font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>김한성 — Frontend Developer</span>
              <span>01 / 03</span>
            </div>
          </section>

          {/* PAGE 02: Features */}
          <section className="bg-[#121212] border border-zinc-800/80 rounded-xl p-8 sm:p-[18mm_20mm_14mm] flex flex-col justify-between shadow-2xl relative min-h-[297mm]">
            <div>
              <div className="flex justify-between font-mono text-[11px] text-zinc-500 uppercase tracking-widest pb-4 border-b border-zinc-800">
                <span>THE ARCHIVE</span>
                <span>Key Features</span>
              </div>

              <div className="pt-6">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                  02 — Features
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
                  주요 기능과 구현
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8 pt-6 border-t border-zinc-800">
                {[
                  {
                    n: "01",
                    title: "AI 리뷰어 선택 리뷰",
                    desc: "리뷰어 캐릭터를 골라 책 리뷰를 요청합니다. Gemini 응답을 Structured JSON으로 받아 평점과 본문을 안정적으로 렌더링합니다.",
                    tags: ["Gemini API", "JSON Schema"],
                  },
                  {
                    n: "02",
                    title: "Title + ISBN 복합 매칭",
                    desc: "도서 데이터를 가져올 때 제목만이 아니라 ISBN까지 비교해, 같은 제목의 다른 판본이 섞이지 않도록 정확히 매칭합니다.",
                    tags: ["Kakao Book API"],
                  },
                  {
                    n: "03",
                    title: "Supabase 인증 · 커머스",
                    desc: "카카오 소셜 로그인, 장바구니, 좋아요, 구매 목록, 배송지 등록을 구현하고 RLS로 사용자별 데이터 접근을 제한했습니다.",
                    tags: ["Auth", "PostgreSQL", "RLS"],
                  },
                  {
                    n: "04",
                    title: "낙관적 업데이트 · UI 상태 관리",
                    desc: "좋아요·장바구니는 응답 전에 UI를 먼저 바꾸고 실패하면 되돌립니다. loading·empty·error 상태를 쿼리 상태로 나눠 처리합니다.",
                    tags: ["TanStack Query", "onMutate"],
                  },
                  {
                    n: "05",
                    title: "Context 기반 다국어 전환",
                    desc: "언어 상태를 Context로 관리해, 페이지를 새로고침하지 않고 전체 UI 문구를 전환합니다.",
                    tags: ["React Context"],
                  },
                  {
                    n: "06",
                    title: "재사용 컴포넌트 · 타입 일치",
                    desc: "버튼·모달·카드를 공통 컴포넌트로 묶고, Book 등 도메인 타입을 공유해 Props와 API 데이터 형태를 일치시켰습니다.",
                    tags: ["TypeScript", "Modal Stack"],
                  },
                  {
                    n: "07",
                    title: "Middleware를 통한 라우터 제어",
                    desc: "Next.js Middleware를 활용해 요청 진입점에서 사용자 세션을 검증하고, 인증 상태에 따른 페이지 접근 제어 및 안전한 리다이렉션을 구현했습니다.",
                    tags: ["Next.js Middleware", "Auth Guard"],
                  },
                ].map((feat, idx) => (
                  <div
                    key={idx}
                    className="py-3 border-b border-zinc-800/60 grid grid-cols-[32px_1fr] gap-2 items-start"
                  >
                    <span className="font-mono text-xs text-zinc-500 pt-0.5">
                      {feat.n}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-200 tracking-tight">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed font-light">
                        {feat.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {feat.tags.map((t, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-4 border-t border-zinc-800 flex justify-between font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>김한성 — Frontend Developer</span>
              <span>02 / 03</span>
            </div>
          </section>

          {/* PAGE 03: Edge Case & Troubleshooting */}
          <section className="bg-[#121212] border border-zinc-800/80 rounded-xl p-8 sm:p-[18mm_20mm_14mm] flex flex-col justify-between shadow-2xl relative min-h-[297mm]">
            <div>
              <div className="flex justify-between font-mono text-[11px] text-zinc-500 uppercase tracking-widest pb-4 border-b border-zinc-800">
                <span>THE ARCHIVE</span>
                <span>Architecture & Edge Cases</span>
              </div>

              <div className="pt-6">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                  03 — Edge Case & Troubleshooting
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
                  기술적 난관과 엣지 케이스 해결 기록
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-8">
                {edgeCases.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-xs text-sky-400 font-semibold">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light mt-2">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-900">
                      {item.tags.map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[9px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {idx === 0 && (
                      <div className="mt-4 pt-3 border-t border-zinc-900">
                        <Image
                          src={"/서버.png"}
                          width={300}
                          height={500}
                          alt="isbn"
                        />
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="mt-4 pt-3 border-t border-zinc-900">
                        <Image
                          src={"/add.png"}
                          width={300}
                          height={500}
                          alt="isbn"
                        />
                      </div>
                    )}
                    {idx === 2 && (
                      <div className="mt-4 pt-3 border-t border-zinc-900">
                        <Image
                          src={"/isbn.png"}
                          width={300}
                          height={500}
                          alt="isbn"
                        />
                      </div>
                    )}
                    {idx === 3 && (
                      <div className="mt-4 pt-3 border-t border-zinc-900">
                        <Image
                          src={"/장바구니.png"}
                          width={300}
                          height={500}
                          alt="isbn"
                        />
                      </div>
                    )}
                    {idx === 4 && (
                      <div className="mt-4 pt-3 border-t border-zinc-900">
                        <Image
                          src={"/tss.png"}
                          width={300}
                          height={500}
                          alt="isbn"
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div></div>
              </div>
            </div>

            <div className="mt-12 pt-4 border-t border-zinc-800 flex justify-between font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>김한성 — Frontend Developer</span>
              <span>03 / 03</span>
            </div>
          </section>
          <section className="bg-[#121212] border border-zinc-800/80 rounded-xl p-8 sm:p-[18mm_20mm_14mm] flex flex-col justify-between shadow-2xl relative min-h-[297mm]">
            <div>
              {/* Runhead */}
              <div className="flex justify-between font-mono text-[11px] text-zinc-500 uppercase tracking-widest pb-4 border-b border-zinc-800">
                <span>THE ARCHIVE</span>
                <span>Authentication & Protected UI</span>
              </div>

              {/* Section Header */}
              <div className="pt-6">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                  04 — Auth & Protected UI Design
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
                  로그인 기반 보호된 화면 및 권한별 UI 디자인 설계
                </h2>
                <p className="text-xs text-zinc-400 mt-2 l  eading-relaxed font-light">
                  실제 서비스에서 필수적인 인증 상태별 UI 분기 처리와 보안
                  라우팅 아키텍처에 대한 설명입니다.
                </p>
              </div>

              {/* Content Cards Grid */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {authFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-zinc-950/80 border border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-xs text-sky-400 font-semibold">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-light mt-2">
                        {item.desc}
                      </p>
                      {idx === 0 && (
                        <div className="mt-4 pt-3 border-t border-zinc-900">
                          <Image
                            src={"/로그인 모달.png"}
                            alt="모달"
                            width={400}
                            height={500}
                          />
                          <Image
                            src={"/로그인인증 버튼.png"}
                            alt="모달"
                            width={400}
                            height={500}
                          />
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="mt-4 pt-3 border-t border-zinc-900">
                          <Image
                            src={"/ui.png"}
                            alt="모달"
                            width={400}
                            height={500}
                          />
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="mt-4 pt-3 border-t border-zinc-900">
                          <Image
                            src={"/주소.png"}
                            alt="모달"
                            width={400}
                            height={500}
                          />
                          <Image
                            src={"/주소추가.png"}
                            alt="모달"
                            width={400}
                            height={500}
                          />
                          <Image
                            src={"/구매현황.png"}
                            alt="모달"
                            width={400}
                            height={500}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-zinc-900">
                      {item.tags.map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[9px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-zinc-800 flex justify-between font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>김한성 — Frontend Developer</span>
              <span>04 / 04</span>
            </div>
          </section>
          <section className="bg-[#121212] border border-zinc-800/80 rounded-xl p-8 sm:p-[18mm_20mm_14mm] flex flex-col justify-between shadow-2xl relative min-h-[297mm]">
            <div>
              {/* Runhead */}
              <div className="flex justify-between font-mono text-[11px] text-zinc-500 uppercase tracking-widest pb-4 border-b border-zinc-800">
                <span>THE ARCHIVE</span>
                <span>Live Deployment & Link</span>
              </div>

              {/* Section Header */}
              <div className="pt-6">
                <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-zinc-500">
                  05 — Deployment
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
                  프로젝트 라이브 링크 및 소스 코드
                </h2>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
                  Vercel을 통해 배포된 실제 서비스 화면과 상세 소스 코드를
                  확인할 수 있는 링크입니다.
                </p>
              </div>

              {/* Link Cards */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://book-uk3v.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-sky-500/50 transition-all flex items-center justify-between block"
                >
                  <div>
                    <span className="font-mono text-[10px] text-sky-400 tracking-widest uppercase">
                      LIVE SERVICE URL
                    </span>
                    <div className="text-sm sm:text-base font-bold text-zinc-100 mt-1 group-hover:text-zinc-300 transition-colors break-all">
                      https://book-uk3v.vercel.app/
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      클릭하여 배포된 웹 서비스로 이동합니다.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-sky-400 transition-colors pl-4">
                    &rarr;
                  </span>
                </a>

                <a
                  href="https://github.com/kim-hanseong/Book"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all flex items-center justify-between block"
                >
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                      GITHUB REPOSITORY
                    </span>
                    <div className="text-sm sm:text-base font-bold text-zinc-100 mt-1 group-hover:text-sky-400 transition-colors break-all">
                      https://github.com/kim-hanseong/Book
                    </div>

                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      프로젝트 소스 코드, 아키텍처 구조 및 커밋 히스토리 확인
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors pl-4">
                    &rarr;
                  </span>
                </a>
                <a
                  href="https://github.com/kim-hanseong/code-test"
                  target="_blank"
                  rel="noreferrer"
                  className="group p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all flex items-center justify-between block"
                >
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                      GITHUB REPOSITORY
                    </span>
                    <div className="text-sm sm:text-base font-bold text-zinc-100 mt-1 group-hover:text-sky-400 transition-colors break-all">
                      https://github.com/kim-hanseong/code-test
                    </div>

                    <p className="text-xs text-zinc-400 mt-1 font-light">
                      코딩테스트
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors pl-4">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-zinc-800 flex justify-between font-mono text-[10px] text-zinc-500 tracking-wider">
              <span>김한성 — Frontend Developer</span>
              <span>05 / 05</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
