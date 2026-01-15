import React from "react";
import { useTranslation } from "react-i18next";
import manelImage from "media/images/about-us-manel.png";
import iliasImage from "media/images/about-us-ilias.png";
import luciaImage from "media/images/about-us-lucia.png";
import fabianImage from "media/images/about-us-fabian.png";
import martinaImage from "media/images/about-us-martina.png";
import Text from "../../ui/Text";
import SectionWrapper from "./SectionWrapper";
import ProfileCard from "./ProfileCard";
import ProfileCardsContainer from "./ProfileCardsContainer";
import elenaImage from "media/images/about-us-elena.png";

const TeamRoles: React.FC = () => {
  const { t } = useTranslation();
  const developers = [
    {
      name: t("team.member1.name"),
      title: t("team.member1.title"),
      description: t("team.member1.description"),
      image: manelImage,
      linkedinUrl: "https://www.linkedin.com/in/manelcastro/",
    },
    {
      name: t("team.member2.name", "Ilias Otsman"),
      title: t("team.member2.title", "Full Stack Developer"),
      description: t("team.member2.description", ""),
      image: iliasImage,
      linkedinUrl: "https://www.linkedin.com/in/ilias-otsman/",
    },
  ];

  const designers = [
    {
      name: t("team.designer1.name", "Lucia Manca"),
      description: t(
        "team.designer1.description",
        "Lucia is part of Europe for Palestine driven by a strong commitment to human rights and the defence of human dignity. She contributes to the project through legal research, document analysis and support in legal initiatives, helping to ensure the initiative operates on responsible and rigorous foundations. Her work is guided by a compassionate outlook and the belief that the law can be a tool in service of people."
      ),
      title: t("team.designer1.title", "Legal Assistant"),
      image: luciaImage,
      linkedinUrl: t(
        "team.designer1.linkedin",
        "http://linkedin.com/in/lucia-manca"
      ),
    },
  ];

  const social = [
    {
      name: t("team.social1.name", "Nadia Rahman"),
      title: t("team.social1.title", "Social Media Manager"),
      description: t(
        "team.social1.description",
        ""
      ),
      image: elenaImage,
      linkedinUrl:
        "https://www.linkedin.com/in/elena-mart%C3%ADnez-de-cestafe-9308b596/",
    },
  ];

  const coordinators = [
    {
      name: t("team.coordinator1.name", "Coordinator One"),
      title: t("team.coordinator1.title", "Project Coordinator"),
      description: t("team.coordinator1.description", "Project Coordinator"),
      image: martinaImage,
      linkedinUrl: "http://linkedin.com/in/martina-aulicino",
    },
    {
      name: t("team.coordinator2.name", "Coordinator Two"),
      title: t("team.coordinator2.title", "Project Coordinator"),
      description: t("team.coordinator2.description", "Project Coordinator"),
      image: fabianImage,
    },
  ];

  return (
    <SectionWrapper paddingTop="2rem" paddingBottom="4rem">
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {/* Developers */}
        <div style={{ textAlign: "center" }}>
          <Text
            variant="title-h2"
            style={{
              margin: 0,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            {t("team.sections.developers")}
          </Text>
          <ProfileCardsContainer>
            {developers.map((d) => (
              <ProfileCard
                key={d.name}
                imageUrl={d.image}
                name={d.name}
                title={d.title}
                description={d.description}
                linkedinUrl={d.linkedinUrl}
                getLinkedinUrl={(n) =>
                  `https://www.linkedin.com/in/${encodeURIComponent(
                    n.toString().trim().replace(/\s+/g, "-").toLowerCase()
                  )}`
                }
              />
            ))}
          </ProfileCardsContainer>
        </div>

        {/* Project coordinator */}
        <div style={{ textAlign: "center" }}>
          <Text
            variant="title-h2"
            style={{
              margin: 0,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            {t("team.sections.projectCoordinator", "Project coordinator")}
          </Text>
          <ProfileCardsContainer>
            {coordinators.map((c) => (
              <ProfileCard
                key={c.name}
                imageUrl={c.image}
                description={c.description}
                name={c.name}
                title={c.title}
                linkedinUrl={c.linkedinUrl}
                getLinkedinUrl={(n) =>
                  `https://www.linkedin.com/in/${encodeURIComponent(
                    n.toString().trim().replace(/\s+/g, "-").toLowerCase()
                  )}`
                }
              />
            ))}
          </ProfileCardsContainer>
        </div>

        {/* Designers */}
        <div style={{ textAlign: "center" }}>
          <Text
            variant="title-h2"
            style={{
              margin: 0,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            {t("team.sections.designers")}
          </Text>
          <ProfileCardsContainer>
            {designers.map((d) => (
              <ProfileCard
                key={d.name}
                imageUrl={d.image}
                name={d.name}
                title={d.title}
                description={d.description}
                linkedinUrl={d.linkedinUrl}
                getLinkedinUrl={(n) =>
                  `https://www.linkedin.com/in/${encodeURIComponent(
                    n.toString().trim().replace(/\s+/g, "-").toLowerCase()
                  )}`
                }
              />
            ))}
          </ProfileCardsContainer>
        </div>

        {/* Social media */}
        <div style={{ textAlign: "center" }}>
          <Text
            variant="title-h2"
            style={{
              margin: 0,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            {t("team.sections.socialMedia")}
          </Text>
          <ProfileCardsContainer>
            {social.map((d) => (
              <ProfileCard
                key={d.name}
                imageUrl={d.image}
                name={d.name}
                title={d.title}
                description={d.description}
                linkedinUrl={d.linkedinUrl}
                getLinkedinUrl={(n) =>
                  `https://www.linkedin.com/in/${encodeURIComponent(
                    n.toString().trim().replace(/\s+/g, "-").toLowerCase()
                  )}`
                }
              />
            ))}
          </ProfileCardsContainer>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamRoles;
