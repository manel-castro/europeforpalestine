import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";

// Use Vite's import.meta.env when available; fallback to process.env for other setups.
const API_BASE =
  ((typeof (import.meta as any) !== "undefined" &&
    (import.meta as any).env &&
    (import.meta as any).env.VITE_NEWSLETTER_API) as string) ||
  (typeof process !== "undefined" &&
    (process as any).env &&
    (process as any).env.REACT_APP_NEWSLETTER_API) ||
  "http://localhost:4200";

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (res.ok) {
        setStatus("ok");
        setEmail("");
        setName("");
      } else {
        const body = await res.json().catch(() => null);
        setStatus((body && body.error) || "error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div style={{ padding: "2rem", textAlign: "center", borderRadius: 8 }}>
        <Text variant="title-h3" style={{ color: "#fff" }}>
          {t("landing.newsletterTitle")}
        </Text>
        <Text variant="description" style={{ color: "#ddd" }}>
          {t("landing.newsletterDescription")}
        </Text>

        <form
          onSubmit={submit}
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <input
            aria-label={t("landing.newsletterPlaceholderName")}
            placeholder={t("landing.newsletterPlaceholderName")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "0.5rem",
              minWidth: 200,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#2a2a2a",
              color: "#fff",
            }}
          />
          <input
            aria-label={t("landing.newsletterPlaceholderEmail")}
            placeholder={t("landing.newsletterPlaceholderEmail")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "0.5rem",
              minWidth: 260,
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#2a2a2a",
              color: "#fff",
            }}
          />
          <Button type="submit" variant="primary" color="palestine">
            {t("buttons.subscribeNow")}
          </Button>
        </form>

        <div style={{ marginTop: 12 }}>
          {status === "loading" && <Text>{t("landing.newsletterSending")}</Text>}
          {status === "ok" && <Text>{t("landing.newsletterThankYou")}</Text>}
          {status === "error" && (
            <Text>{t("landing.newsletterError")}</Text>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NewsletterSubscribe;
