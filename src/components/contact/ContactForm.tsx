"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, ChevronDown, X } from "lucide-react";

const branchOptions = [
  "서울점 (강남역 5번 출구 100m)",
  "인천점 (부평역 7번출구 250m)",
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
  "매우만족",
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

interface DiagnosisData {
  source: "basic" | "advanced";
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

  const [diagnosis, setDiagnosis] = useState<DiagnosisData | null>(null);
  const [showOptional, setShowOptional] = useState(false);
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

  // sessionStorage에서 사전 진단 결과 읽기
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("vocalDiagnosis");
      if (stored) {
        const data = JSON.parse(stored) as DiagnosisData;
        if (data.items && data.items.length > 0) {
          setDiagnosis(data);
        }
        sessionStorage.removeItem("vocalDiagnosis");
      }
    } catch {
      // 무시
    }
  }, []);

  function removeDiagnosisItem(index: number) {
    setDiagnosis((prev) => {
      if (!prev) return null;
      const next = prev.items.filter((_, i) => i !== index);
      return next.length > 0 ? { ...prev, items: next } : null;
    });
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요.";
    } else if (!/^[\d-]{9,}$/.test(formData.phone.trim())) {
      newErrors.phone = "올바른 연락처를 입력해주세요.";
    }
    if (!formData.gender) newErrors.gender = "성별을 선택해주세요.";
    if (!formData.consultationType)
      newErrors.consultationType = "상담 유형을 선택해주세요.";
    if (!formData.branch) newErrors.branch = "지점을 선택해주세요.";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: 백엔드 연결 (Airtable / API)
      console.log("Form submitted:", {
        ...formData,
        diagnosis: diagnosis ? diagnosis.items : [],
      });
      setSubmitted(true);
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
  const diagnosisLabel =
    diagnosis?.source === "basic" ? "기본과정 자가진단" : "심화과정 자가진단";

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
      {/* 사전 진단 결과 */}
      {diagnosis && (
        <div className="bg-accent/5 border border-accent/20 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-accent text-xs font-bold tracking-wider uppercase">
              {diagnosisLabel}
            </span>
            <span className="text-text-on-light/40 text-xs">
              ({diagnosis.items.length}개 항목)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {diagnosis.items.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-white border border-accent/20 text-text-on-light/70 text-xs px-3 py-1.5"
              >
                {item}
                <button
                  type="button"
                  onClick={() => removeDiagnosisItem(i)}
                  className="text-text-on-light/30 hover:text-accent transition-colors"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

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
              className={`flex-1 py-3 text-base font-medium border transition-colors duration-200 ${
                formData.gender === g
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
              className={`w-full text-left p-4 border transition-colors duration-200 ${
                formData.consultationType === ct.value
                  ? "border-accent bg-accent/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p className={`font-bold text-sm md:text-base ${
                formData.consultationType === ct.value ? "text-accent" : "text-text-on-light"
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
                      className={`flex-1 py-3 text-base font-medium border transition-colors duration-200 ${
                        formData.hasExperience === v
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
                          className={`px-4 py-2 text-sm border transition-colors duration-200 ${
                            formData.experienceSatisfaction === s
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
        className="inline-flex items-center gap-2 bg-accent text-white rounded-full px-8 py-4 font-bold text-base hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        <Send size={18} />
        예약하고 변화 경험하기
      </button>
    </motion.form>
  );
}
