import React from "react";
import Text from "../../ui/Text";
import { useGetPadding } from "../../../utils/useGetPadding";
import ProfileCard from "./ProfileCard";
import ProfileCardsContainer from "./ProfileCardsContainer";

const TeamRoles: React.FC = () => {
  const padding = useGetPadding();

  const developers = [
    {
      name: "Alice Johnson",
      title: "Frontend Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    },
    {
      name: "Mohamed Ali",
      title: "Backend Engineer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    },
    {
      name: "Sara Lee",
      title: "Fullstack Engineer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    },
  ];

  const designers = [
    {
      name: "Lina Gomez",
      title: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
    },
    {
      name: "Tom Becker",
      title: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&q=80",
    },
  ];

  const social = [
    {
      name: "Nadia Rahman",
      title: "Social Media Manager",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&q=80",
    },
    {
      name: "Jason Kim",
      title: "Content Creator",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        // reduce top padding so the Developers section sits closer to the "Meet the team" title
        paddingTop: "2rem",
        paddingBottom: "4rem",
        ...padding,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
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
              Developers
            </Text>
            <ProfileCardsContainer>
              {developers.map((d) => (
                <ProfileCard
                  key={d.name}
                  imageUrl={d.image}
                  name={d.name}
                  title={d.title}
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
              Designers
            </Text>
            <ProfileCardsContainer>
              {designers.map((d) => (
                <ProfileCard
                  key={d.name}
                  imageUrl={d.image}
                  name={d.name}
                  title={d.title}
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
              Social media
            </Text>
            <ProfileCardsContainer>
              {social.map((d) => (
                <ProfileCard
                  key={d.name}
                  imageUrl={d.image}
                  name={d.name}
                  title={d.title}
                />
              ))}
            </ProfileCardsContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamRoles;
