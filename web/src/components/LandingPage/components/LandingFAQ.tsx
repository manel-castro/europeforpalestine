import React, { useState } from "react";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";
import Card from "../../ui/Card";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LandingFAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (i: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "left" }}>
        <Text
          variant="title-h2"
          style={{ color: "#fff", marginBottom: "0.5rem" }}
        >
          {t("landing.faq.title")}
        </Text>

        <Card color="transparent" padding="0">
          {FAQ_ITEMS.map((i, index) => {
            const isOpen = openItems.has(i);

            return (
              <div
                key={i}
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <div
                  onClick={() => toggleItem(i)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                  >
                    {t(`landing.faq.q${i}.question`)}
                  </Text>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ paddingTop: 12, color: "#ccc" }}>
                        {t(`landing.faq.q${i}.answer`)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default LandingFAQ;
