"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

const branchOptions = ["서울점", "인천점", "부산점"] as const;

interface FormData {
  name: string;
  phone: string;
  branch: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  branch?: string;
  message?: string;
}

export default function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    branch: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요.";
    } else if (!/^[\d-]{9,}$/.test(formData.phone.trim())) {
      newErrors.phone = "올바른 연락처를 입력해주세요.";
    }
    if (!formData.branch) newErrors.branch = "지점을 선택해주세요.";
    if (!formData.message.trim()) newErrors.message = "문의 내용을 입력해주세요.";
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: 백엔드 연결 (Airtable / API)
      console.log("Form submitted:", formData);
      setSubmitted(true);
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
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
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
          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
          className={inputBase}
        />
        {errors.phone && <p className="text-accent text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* 지점 선택 */}
      <div>
        <label htmlFor="contact-branch" className="block text-sm font-medium text-text-on-light mb-1.5">
          지점 선택 <span className="text-accent">*</span>
        </label>
        <select
          id="contact-branch"
          value={formData.branch}
          onChange={(e) => setFormData((prev) => ({ ...prev, branch: e.target.value }))}
          className={`${inputBase} ${!formData.branch ? "text-gray-400" : ""}`}
        >
          <option value="" disabled>
            지점을 선택해주세요
          </option>
          {branchOptions.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {errors.branch && <p className="text-accent text-sm mt-1">{errors.branch}</p>}
      </div>

      {/* 문의 내용 */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-on-light mb-1.5">
          문의 내용 <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="궁금한 점이나 원하시는 상담 내용을 자유롭게 작성해주세요."
          value={formData.message}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
          className={`${inputBase} resize-none`}
        />
        {errors.message && <p className="text-accent text-sm mt-1">{errors.message}</p>}
      </div>

      {/* 제출 */}
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-accent text-white rounded-r-full px-8 py-4 font-bold text-base hover:bg-accent/90 transition-colors duration-300"
      >
        <Send size={18} />
        상담 신청하기
      </button>
    </motion.form>
  );
}
