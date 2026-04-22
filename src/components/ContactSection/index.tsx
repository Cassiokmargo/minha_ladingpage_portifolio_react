import { type FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { IoIosSend } from "react-icons/io";
import styles from "./ContactSection.module.scss";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Função que cria o schema com as mensagens traduzidas
const getContactSchema = (t: (key: string) => string) => {
  return z.object({
    name: z.string().trim().min(4, t("form.validation.name_min")).max(32),
    email: z.string().trim().email(t("form.validation.email_invalid")),
    subject: z.string().trim().min(4, t("form.validation.subject_min")).max(32),
    message: z
      .string()
      .trim()
      .min(6, t("form.validation.message_min"))
      .max(300),
  });
};

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!toast && !error) {
      return;
    }
    const timer = window.setTimeout(() => {
      setToast(null);
      setError(null);
    }, 4500);

    return () => window.clearTimeout(timer);
  }, [toast, error]);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((pre) => ({ ...pre, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Criar o schema com as mensagens traduzidas
    const contactSchema = getContactSchema(t);

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues.map((issue) => issue.message).join(" "));
      return;
    }

    const validatedData = parsed.data;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Configuração do EmailJS incompleta. Defina VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY.",
      );
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: validatedData.name,
          email: validatedData.email,
          subject: `[Contato via Portfólio] ${validatedData.subject}`,
          message: validatedData.message,
        },
        publicKey,
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setToast("Mensagem enviada!\n\nEm breve entrarei em contato com você.");
    } catch (err: unknown) {
      console.error("Erro no envio do email EmailJS:", err);
      setError(
        "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contato">
      <motion.div id="contact" className={styles.contactTitle}>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          {t("contact.title")}
        </motion.h2>
        <motion.p
          className={styles.subTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          {t("contact.subtitle")}
        </motion.p>
        <motion.p
          className={styles.supportText}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          {t("contact.description")}
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.contactContent}
        initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "none" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          scale: {
            type: "spring",
            visualDuration: 0.7,
            bounce: 0.4,
            ease: "easeInOut",
          },
        }}
      >
        <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
          <motion.label className={styles.label}>
            {t("form.name")}
            <input
              className={styles.input}
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder={t("form.placeholder")}
              aria-label={t("form.ariaLabel")}
              required
            />
          </motion.label>

          <label className={styles.label}>
            {t("form.email")}
            <input
              className={styles.input}
              type="email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder={t("form.emailPlaceholder")}
              aria-label={t("form.ariaLabelEmail")}
              required
            />
          </label>

          <label className={styles.label}>
            {t("form.subject")}
            <input
              className={styles.input}
              type="text"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder={t("form.subjectPlaceholder")}
              aria-label={t("form.ariaLabelSubject")}
              required
            />
          </label>

          <label className={styles.label}>
            {t("form.message")}
            <textarea
              className={styles.textarea}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder={t("form.messagePlaceholder")}
              aria-label={t("form.ariaLabelMessage")}
              rows={6}
              required
            />
          </label>

          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("form.sending") : t("form.button")}{" "}
            <IoIosSend size={16} />
          </button>
        </form>

        {error && <div className={styles.toastError}>{error}</div>}
        {toast && (
          <div className={styles.toastSuccess}>
            {toast.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;
