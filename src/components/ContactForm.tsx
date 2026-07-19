"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Our team will respond within one business day.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.row}>
        <label>
          Full name
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          Work email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          Company
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label>
          I am
          <select name="audience" defaultValue="employer">
            <option value="employer">An employer hiring talent</option>
            <option value="candidate">A candidate seeking roles</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <label>
        How can we help?
        <textarea name="message" rows={5} required />
      </label>

      <button
        type="submit"
        className="btn btn--gold"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {message ? (
        <p
          className={
            status === "success" ? styles.success : styles.error
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
