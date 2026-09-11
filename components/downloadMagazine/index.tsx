import Image from "next/image";
import styles from "./styles.module.css";
import { slugify } from "@/utils/readableResources";
import ResourceDownloadButton from "@/components/resourceDownload/ResourceDownloadButton";

const MAGAZINE_TITLE = "I am Land - Vol 17";
const MAGAZINE_URL = "/downloads/magazines/LANDZILLE_ E-Magazine-18.0.pdf";

const DownloadMagazine: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <Image
          src="/assets/magazines/I-am-land-18.jpeg"
          width={646}
          height={762}
          alt="download"
        />
      </div>
      <div className={styles.colTwo}>
        <h2>Download Landzille&apos;s e - Magazine (September Edition)</h2>
        <ResourceDownloadButton
          resourceId={slugify(MAGAZINE_TITLE)}
          resourceType="magazine"
          title={MAGAZINE_TITLE}
          fileUrl={MAGAZINE_URL}
          className={styles.submitButton}
        >
          Download Magazine
        </ResourceDownloadButton>
      </div>
    </div>
  );
};

export default DownloadMagazine;
