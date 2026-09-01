import Link from "next/link";
import styles from "./styles.module.css";
import Arrow from "@/svg/arrow";

interface Persona {
  title: string;
  description: string;
  cta: string;
  href: string;
}

const SproutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21V11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M12 11C12 6.5 8.5 4 4 4C4 8.5 7.5 11 12 11Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M12 8C12 5 14.5 3 18 3C18 6 15.5 8 12 8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const personas: Persona[] = [
  {
    title: "I'm new to land investment",
    description: "Show me the basics before I spend a dollar.",
    cta: "See the basics",
    href: "#stage-1",
  },
  {
    title: "I'm researching",
    description: "Teach me how to spot opportunity before it's priced in.",
    cta: "Spot the opportunity",
    href: "#stage-2",
  },
  {
    title: "I'm looking at locations",
    description: "Teach me how to spot opportunity before it's priced in.",
    cta: "Spot the opportunity",
    href: "#stage-3",
  },
  {
    title: "I'm ready to buy",
    description: "Teach me how to spot opportunity before it's priced in.",
    cta: "Spot the opportunity",
    href: "#stage-4",
  },
  {
    title: "I already own land",
    description: "Teach me how to spot opportunity before it's priced in.",
    cta: "Spot the opportunity",
    href: "#stage-5",
  },
  {
    title: "I'm an experienced investor",
    description: "Teach me how to spot opportunity before it's priced in.",
    cta: "Spot the opportunity",
    href: "#stage-6",
  },
];

const StartingPoint: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Choose your starting point</h1>
        <p className={styles.subtitle}>
          Six kinds of investor, six different paths. Pick the one that
          sounds like you.
        </p>

        <div className={styles.grid}>
          {personas.map((persona) => (
            <Link
              key={persona.title}
              href={persona.href}
              className={styles.card}
            >
              <span className={styles.iconBox}>
                <SproutIcon />
              </span>
              <h3 className={styles.cardTitle}>{persona.title}</h3>
              <p className={styles.cardDescription}>{persona.description}</p>
              <span className={styles.cta}>
                {persona.cta}
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartingPoint;
