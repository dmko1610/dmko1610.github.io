import { useState } from "react";
import { useTranslation } from "react-i18next";

import Title from "./Title";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: { target: { name: string; value: string; } }) => {
    setFormData({ ...formData, [e.target.name]: e?.target.value })
  }

  const validateForm = () => {
    let newErrors: Errors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)

      return
    }

    setErrors({})
    e.currentTarget.submit()
  }

  return (
    <div className="flex flex-col justify-center items-center mb-10 mx-auto">
      <form
        action="https://getform.io/f/a4ae8ff1-2adf-4dd7-8f96-2de82dc21bf6"
        method="POST"
        className="flex flex-col w-full md:w-7/12"
        onSubmit={handleSubmit}
      >
        <Title>{t("contact")}</Title>
        <input
          type="text"
          name="name"
          placeholder={t("name")}
          className="p-2 bg-transparent placeholder-gray-500 border-2 border-stone-800 dark:border-stone-300 rounded-md focus:outline-hidden" />
        {errors.name && <p className="mt-1 ml-1 text-red-500 text-sm">{errors.name}</p>}
        <input
          type="text"
          name="email"
          placeholder={t("email")}
          className="p-2 my-2 bg-transparent placeholder-gray-500 border-2 border-stone-800 dark:border-stone-300 rounded-md focus:outline-hidden" />
        {errors.email && <p className="mb-2 ml-1 text-red-500 text-sm">{errors.email}</p>}
        <textarea
          name="message"
          placeholder={t("message")}
          rows={10}
          className="p-2 mb-1 bg-transparent placeholder-gray-500 border-2 border-stone-800 dark:border-stone-300 rounded-md focus:outline-hidden" />
        {errors.message && <p className="mb-6 ml-1 text-red-500 text-sm">{errors.message}</p>}
        <button
          type="submit"
          className="text-center inline-block px-8 py-3 w-max text-base rounded-md bg-stone-900 dark:bg-orange-300 drop-shadow-md text-stone-300 dark:text-stone-900 hover:stroke-white">
          {t("work_with_me")}
        </button>
      </form>
    </div>
  );
}