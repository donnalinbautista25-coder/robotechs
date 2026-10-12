"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export type InquiryField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "select" | "file" | "checkbox";
  required?: boolean;
  half?: boolean;
  options?: readonly string[];
  accept?: string;
  placeholder?: string;
};

type InquiryFormProps = {
  intent: "contact" | "partner" | "talent" | "careers";
  fields: readonly InquiryField[];
  submitLabel: string;
  successMessage?: string;
};

export default function InquiryForm({
  intent,
  fields,
  submitLabel,
  successMessage = "Thank you. A confirmation has been sent to your email, and our team will respond within one business day.",
}: InquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("intent", intent);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
      setMessage(successMessage);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  }

  const rows: InquiryField[][] = [];
  for (let index = 0; index < fields.length; index += 1) {
    const field = fields[index];
    const next = fields[index + 1];
    if (field.half && next?.half) {
      rows.push([field, next]);
      index += 1;
    } else {
      rows.push([field]);
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {rows.map((row) => (
        <div key={row.map((field) => field.name).join("-")} className={row.length > 1 ? styles.row : undefined}>
          {row.map((field) => {
            const type = field.type ?? "text";
            const controlId = `${intent}-${field.name}`;

            if (type === "checkbox") {
              return (
                <label key={field.name} className={styles.check}>
                  <input
                    id={controlId}
                    name={field.name}
                    type="checkbox"
                    value="yes"
                  />
                  <span>{field.label}</span>
                </label>
              );
            }

            return (
              <label key={field.name}>
                {field.label}
                {type === "textarea" ? (
                  <textarea
                    id={controlId}
                    name={field.name}
                    rows={5}
                    required={field.required}
                    maxLength={5000}
                  />
                ) : type === "select" ? (
                  <select
                    id={controlId}
                    name={field.name}
                    required={field.required}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={controlId}
                    name={field.name}
                    type={type}
                    required={field.required}
                    autoComplete={
                      type === "email"
                        ? "email"
                        : type === "tel"
                          ? "tel"
                          : field.name === "name"
                            ? "name"
                            : undefined
                    }
                    accept={field.accept}
                    placeholder={field.placeholder}
                    maxLength={type === "file" ? undefined : 300}
                  />
                )}
              </label>
            );
          })}
        </div>
      ))}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>

      {message ? (
        <p
          className={status === "success" ? styles.success : styles.error}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
