"use client";

import { useState, useEffect, useRef, useCallback, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, Check } from "lucide-react";

const branchOptions = [
  "서울점 (강남역 5번 출구 100m)",
  "인천점 (부평역 7번 출구 250m)",
  "부산점 (서면역 8번 출구 100m)",
] as const;

const ageOptions = ["10대", "20대", "30대", "40대", "50대 이상"] as const;
const sourceOptions = [
  "유튜브",
  "네이버 검색",
  "구글 검색",
  "기타 SNS",
  "지인 추천",
  "기타",
] as const;
const durationOptions = [
  "1개월 미만",
  "1~3개월",
  "4~6개월",
  "7~12개월",
  "1년 이상",
] as const;
const satisfactionOptions = [
  "매우 만족",
  "만족",
  "보통",
  "불만족",
  "매우 불만족",
] as const;
const consultationTypes = [
  {
    value: "general",
    label: "[무료] 일반 상담",
    description: "내 상태 확인, 수강료, 커리큘럼, 등록 절차 등 빠른 안내",
  },
  {
    value: "deep",
    label: "[유료] 심층 보컬 진단 & 솔루션",
    description:
      "내 발성의 문제점을 심도있게 진단, 맞춤 솔루션 제공 / 진단지 및 연습파일&녹음파일 등 제공",
  },
] as const;

const basicDiagnosisItems = [
  "1~2곡만 불러도 목이 금방 쉬거나 칼칼해진다.",
  "노래를 배워본 적이 없거나 배워봤는데도 개선이 되지 않았다.",
  "고음 파트에서 삑사리(음이탈)나 갈라지는 목소리가 자주 나온다.",
  "시원하게 지르지 못하고 억지로 생목을 쥐어짜서 부르는 느낌이 든다.",
  "숨이 모자라서 끝음이 바들바들 떨리거나 흐지부지 끝난다.",
  "남들이 다 부르는 평범한 노래도 원키로 부를 엄두가 나지 않는다.",
  "내 목소리가 너무 얇고 힘이 없다고 느껴지거나 마음에 들지 않는다.",
  "컨디션에 따라 내 노래 실력이 너무 심하게 차이가 난다.",
  "음역대 개선이 되지 않는다.",
  "내 문제를 해결하려면 어떻게 해야되는지 잘 모르겠다.",
];

const advancedDiagnosisItems = [
  "기본 발성법을 알지만, 노래에 적용이 잘 안되는 것 같아요.",
  "고음은 올라가는데 주변에서 '노래 잘한다'는 칭찬은 못 들어본 것 같아요.",
  "가수처럼 바이브레이션이나 기교를 멋지게 넣어보고 싶은데 내가 하면 뭔가 어색해요.",
  "가수처럼 '잘' 부르려면 어떻게 해야 될지 잘 모르겠어요.",
  "프로 가수들이 쓰는 테크닉과 스킬을 배우고 싶어요.",
  "좋아하는 가수의 노래를 불러도 뭔가 밋밋하고 이상한 것 같아요.",
  "내 노래를 녹음해서 들어보면 아마추어 티가 나는 것 같아요.",
  "내 보컬 스타일이 어떤 건지 잘 모르겠어요.",
];

type DiagnosisTab = "basic" | "advanced";

interface DiagnosisData {
  source: DiagnosisTab;
  items: string[];
}

interface FormData {
  name: string;
  phone: string;
  gender: string;
  age: string;
  source: string;
  hasExperience: string;
  experienceDuration: string;
  experienceSatisfaction: string;
  consultationType: string;
  branch: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  gender?: string;
  consultationType?: string;
  branch?: string;
}

export default function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const searchParams = useSearchParams();

  // URL 파라미터에서 자가진단 결과 읽기 (?source=basic&items=0,2,5)
  const paramSource = searchParams.get("source") as DiagnosisTab | null;
  const paramItems = searchParams.get("items");
  const hasPrecheck = paramSource !== null && paramItems !== null;
  const precheckedIndices = hasPrecheck
    ? new Set(paramItems!.split(",").map(Number).filter((n) => !isNaN(n)))
    : new Set<number>();

  const [diagnosis, setDiagnosis] = useState<DiagnosisData | null>(null);
  const [diagnosisTab, setDiagnosisTab] = useState<DiagnosisTab>(paramSource ?? "basic");
  const [checked, setChecked] = useState<Set<number>>(precheckedIndices);
  const [showOptional, setShowOptional] = useState(hasPrecheck);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    gender: "",
    age: "",
    source: "",
    hasExperience: "",
    experienceDuration: "",
    experienceSatisfaction: "",
    consultationType: "",
    branch: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentItems = diagnosisTab === "basic" ? basicDiagnosisItems : advancedDiagnosisItems;

  const toggleCheck = useCallback((index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  // 탭 전환 시 체크 초기화
  function handleTabChange(tab: DiagnosisTab) {
    setDiagnosisTab(tab);
    setChecked(new Set());
  }

  // 진단에서 넘어온 경우 폼 섹션으로 스크롤
  useEffect(() => {
    if (hasPrecheck) {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 인라인 체크리스트에서 선택한 항목을 diagnosis에 동기화
  useEffect(() => {
    if (checked.size > 0) {
      const selectedItems = currentItems.filter((_, i) => checked.has(i));
      setDiagnosis({ source: diagnosisTab, items: selectedItems });
    } else {
      setDiagnosis(null);
    }
  }, [checked, diagnosisTab, currentItems]);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요.";
    } else if (!/^0\d{2}-\d{3,4}-\d{4}$/.test(formData.phone.trim())) {
      newErrors.phone = "올바른 전화번호를 입력해주세요. (예: 010-1234-5678)";
    }
    if (!formData.gender) newErrors.gender = "성별을 선택해주세요.";
    if (!formData.consultationType)
      newErrors.consultationType = "상담 유형을 선택해주세요.";
    if (!formData.branch) newErrors.branch = "지점을 선택해주세요.";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // 자가진단 기본/심화 분리
      const basicItems = diagnosis?.source === "basic" ? diagnosis.items.join(" , ") : "";
      const advancedItems = diagnosis?.source === "advanced" ? diagnosis.items.join(" , ") : "";

      const consultationLabel = formData.consultationType === "general"
        ? "[무료] 일반 상담"
        : "[유료] 심층 보컬 진단 & 솔루션";

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            gender: formData.gender,
            consultationType: consultationLabel,
            branch: formData.branch,
            diagnosisBasic: basicItems,
            diagnosisAdvanced: advancedItems,
            age: formData.age,
            source: formData.source,
            hasExperience: formData.hasExperience === "예" ? true : formData.hasExperience === "아니오" ? false : "",
            experienceDuration: formData.experienceDuration,
            experienceSatisfaction: formData.experienceSatisfaction,
            message: formData.message,
          }),
        });
        if (!res.ok) throw new Error("전송 실패");
        setSubmitted(true);
      } catch {
        alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  function updateField(field: keyof FormData, value: string) {
    if (field === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
          <Send size={24} className="text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-text-on-light mb-3">
          상담 신청이 완료되었습니다
        </h3>
        <p className="text-text-on-light/60 max-w-sm">
          빠른 시일 내에 담당자가 연락드리겠습니다.
          <br />
          감사합니다.
        </p>
      </motion.div>
    );
  }

  const inputBase =
    "w-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 text-base text-text-on-light transition-colors duration-200";
  return (
    <motion.form
      ref={ref}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="space-y-5"
      noValidate
    >
      {/* ── 필수 정보 ── */}

      {/* 이름 */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-text-on-light mb-1.5">
          이름 <span className="text-accent">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="홍길동"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={inputBase}
        />
        {errors.name && <p className="text-accent text-sm mt-1">{errors.name}</p>}
      </div>

      {/* 연락처 */}
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-text-on-light mb-1.5">
          연락처 <span className="text-accent">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          inputMode="numeric"
          maxLength={13}
          placeholder="010-1234-5678"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className={inputBase}
        />
        {errors.phone && <p className="text-accent text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* 성별 */}
      <div>
        <label className="block text-sm font-medium text-text-on-light mb-1.5">
          성별 <span className="text-accent">*</span>
        </label>
        <div className="flex gap-4">
          {["남", "여"].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => updateField("gender", g)}
              className={`flex-1 py-3 text-base font-medium border transition-colors duration-200 ${formData.gender === g
                ? "border-accent bg-accent/5 text-accent"
                : "border-gray-200 text-text-on-light/60 hover:border-gray-300"
                }`}
            >
              {g}
            </button>
          ))}
        </div>
        {errors.gender && <p className="text-accent text-sm mt-1">{errors.gender}</p>}
      </div>

      {/* 상담 유형 */}
      <div>
        <label className="block text-sm font-medium text-text-on-light mb-1.5">
          상담 유형 <span className="text-accent">*</span>
        </label>
        <div className="space-y-3">
          {consultationTypes.map((ct) => (
            <button
              key={ct.value}
              type="button"
              onClick={() => updateField("consultationType", ct.value)}
              className={`w-full text-left p-4 border transition-colors duration-200 ${formData.consultationType === ct.value
                ? "border-accent bg-accent/5"
                : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <p className={`font-bold text-sm md:text-base ${formData.consultationType === ct.value ? "text-accent" : "text-text-on-light"
                }`}>
                {ct.label}
              </p>
              <p className="text-text-on-light/50 text-xs md:text-sm mt-1">{ct.description}</p>
            </button>
          ))}
        </div>
        <p className="text-text-on-light/40 text-xs mt-2">
          * 심층 진단&amp;솔루션 비용은 정규과정 당일 등록 시 전액 할인됩니다.
        </p>
        {errors.consultationType && (
          <p className="text-accent text-sm mt-1">{errors.consultationType}</p>
        )}
      </div>

      {/* 지점 선택 */}
      <div>
        <label htmlFor="contact-branch" className="block text-sm font-medium text-text-on-light mb-1.5">
          지점 선택 <span className="text-accent">*</span>
        </label>
        <select
          id="contact-branch"
          value={formData.branch}
          onChange={(e) => updateField("branch", e.target.value)}
          className={`${inputBase} ${!formData.branch ? "text-gray-400" : ""}`}
        >
          <option value="" disabled>지점을 선택해주세요</option>
          {branchOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        {errors.branch && <p className="text-accent text-sm mt-1">{errors.branch}</p>}
      </div>

      {/* ── 선택 정보 토글 ── */}
      <div className="pt-2">
        <button
          type="button"
          onClick={() => setShowOptional(!showOptional)}
          className="flex items-center gap-2 text-text-on-light/50 hover:text-text-on-light text-sm font-medium transition-colors group"
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${showOptional ? "rotate-180" : ""}`}
          />
          더 자세한 정보 입력하기 (선택사항)
        </button>
      </div>

      <AnimatePresence>
        {showOptional && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-5 pt-2 border-t border-gray-100">
              {/* 자가진단 체크리스트 */}
              <div className="border border-gray-200 p-5">
                <p className="text-sm font-medium text-text-on-light mb-1">
                  자가진단
                </p>
                <p className="text-xs text-text-on-light/50 mb-4">
                  해당하는 항목을 체크하시면 더 정확한 상담이 가능합니다.
                </p>

                {/* 탭 */}
                <div className="flex gap-2 mb-4">
                  {([
                    { key: "basic" as DiagnosisTab, label: "기본과정" },
                    { key: "advanced" as DiagnosisTab, label: "심화과정" },
                  ]).map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => handleTabChange(tab.key)}
                      className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${diagnosisTab === tab.key
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-gray-200 text-text-on-light/50 hover:border-gray-300"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* 체크리스트 */}
                <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                  {currentItems.map((item, index) => {
                    const isChecked = checked.has(index);
                    return (
                      <button
                        key={`${diagnosisTab}-${index}`}
                        type="button"
                        onClick={() => toggleCheck(index)}
                        className={`flex items-center gap-3 p-3 text-left transition-all duration-200 border ${isChecked
                          ? "border-accent bg-accent/5"
                          : "border-gray-100 hover:border-gray-200"
                          }`}
                      >
                        <div
                          className={`w-4 h-4 shrink-0 flex items-center justify-center transition-all duration-200 ${isChecked ? "bg-accent" : "border border-gray-300"
                            }`}
                        >
                          {isChecked && <Check size={10} className="text-white" />}
                        </div>
                        <span
                          className={`text-sm transition-colors duration-200 ${isChecked ? "text-text-on-light" : "text-text-on-light/60"
                            }`}
                        >
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {checked.size > 0 && (
                  <p className="text-accent text-xs font-medium mt-3">
                    {checked.size}개 항목 선택됨
                  </p>
                )}
              </div>

              {/* 연령대 */}
              <div>
                <label htmlFor="contact-age" className="block text-sm font-medium text-text-on-light mb-1.5">
                  연령대
                </label>
                <select
                  id="contact-age"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  className={`${inputBase} ${!formData.age ? "text-gray-400" : ""}`}
                >
                  <option value="" disabled>연령대를 선택해주세요</option>
                  {ageOptions.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* 유입 경로 */}
              <div>
                <label htmlFor="contact-source" className="block text-sm font-medium text-text-on-light mb-1.5">
                  어떤 경로로 3옥타브장인을 알게 되셨나요?
                </label>
                <select
                  id="contact-source"
                  value={formData.source}
                  onChange={(e) => updateField("source", e.target.value)}
                  className={`${inputBase} ${!formData.source ? "text-gray-400" : ""}`}
                >
                  <option value="" disabled>유입 경로를 선택해주세요</option>
                  {sourceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* 보컬 레슨 경험 */}
              <div>
                <label className="block text-sm font-medium text-text-on-light mb-1.5">
                  보컬 레슨을 받아본 적이 있나요?
                </label>
                <div className="flex gap-4">
                  {["예", "아니오"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => {
                        updateField("hasExperience", v);
                        if (v === "아니오") {
                          updateField("experienceDuration", "");
                          updateField("experienceSatisfaction", "");
                        }
                      }}
                      className={`flex-1 py-3 text-base font-medium border transition-colors duration-200 ${formData.hasExperience === v
                        ? "border-accent bg-accent/5 text-accent"
                        : "border-gray-200 text-text-on-light/60 hover:border-gray-300"
                        }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* 조건부: 레슨 기간 + 만족도 */}
              {formData.hasExperience === "예" && (
                <div className="pl-4 border-l-2 border-accent/30 space-y-5">
                  <div>
                    <label htmlFor="contact-duration" className="block text-sm font-medium text-text-on-light mb-1.5">
                      레슨 기간
                    </label>
                    <select
                      id="contact-duration"
                      value={formData.experienceDuration}
                      onChange={(e) => updateField("experienceDuration", e.target.value)}
                      className={`${inputBase} ${!formData.experienceDuration ? "text-gray-400" : ""}`}
                    >
                      <option value="" disabled>기간을 선택해주세요</option>
                      {durationOptions.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-on-light mb-1.5">
                      이전 레슨 만족도
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {satisfactionOptions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => updateField("experienceSatisfaction", s)}
                          className={`px-4 py-2 text-sm border transition-colors duration-200 ${formData.experienceSatisfaction === s
                            ? "border-accent bg-accent/5 text-accent"
                            : "border-gray-200 text-text-on-light/60 hover:border-gray-300"
                            }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 추가 문의 */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-text-on-light mb-1.5">
                  추가 문의
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="그 외에 저희가 미리 알면 좋은 점이나 궁금한 내용을 자유롭게 적어주세요. (예: 축가 준비 / 목 조임 해결하고 싶어요 등)"
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={`${inputBase} resize-none`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 제출 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-8 py-4 font-bold text-base hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <Send size={18} />
        {isSubmitting ? "전송 중..." : "예약하고 변화 경험하기"}
      </button>
    </motion.form>
  );
}
