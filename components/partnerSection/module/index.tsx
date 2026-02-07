import Image from "next/image";
import styles from "./styles.module.css";

interface PartnerLogoProps {
  name: string;
  logo: string;
  url?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo, url }) => {
  const content = (
    <div className={styles.logoWrapper}>
      <Image
        src={logo}
        alt={`${name} logo`}
        width={180}
        height={60}
        className={styles.logo}
        loading="lazy"
      />
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logoLink}
        aria-label={`Visit ${name} website`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default PartnerLogo;
