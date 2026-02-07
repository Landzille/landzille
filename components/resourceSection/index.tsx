"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { allResources } from "@/utils/resources";
import Arrow from "@/svg/arrow";

const ITEMS_PER_PAGE = 9;

const ResourcesSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allResources.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentResources = allResources.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of section
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <section className={styles.resourcesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Resources</h2>

        <div className={styles.grid}>
          {currentResources.map((resource) => (
            <div key={resource.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{resource.title}</h3>
                {resource.subtitle && (
                  <p className={styles.subtitle}>{resource.subtitle}</p>
                )}
              </div>
              <Link
                href={resource.downloadUrl}
                className={styles.downloadLink}
                target="_blank"
                download={true}
              >
                Download Now
                <Arrow />
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={styles.paginationArrow}
              aria-label="Previous page"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 15l-5-5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.paginationButton} ${
                  currentPage === page ? styles.active : ""
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={styles.paginationArrow}
              aria-label="Next page"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 15l5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourcesSection;
