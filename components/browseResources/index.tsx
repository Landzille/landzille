"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { allResources, Resource, InvestorStage, ResourceType, ResourceTag } from "@/utils/resources";
import { allMagazines } from "@/utils/e-magazines";
import Arrow from "@/svg/arrow";

const ITEMS_PER_PAGE = 9;

const FILTER_TAGS: ResourceTag[] = [
  "DFW Growth",
  "Infrastructure",
  "Chisholm Trail",
  "Land Empires",
  "Community Builders",
];

const INVESTOR_STAGES: InvestorStage[] = [
  "New Investor",
  "Land IQ",
  "Spot the Growth",
  "Unlock Land Value",
];

const RESOURCE_TYPES: ResourceType[] = ["Magazine", "Report", "Guide", "Handbook"];

const combinedResources: Resource[] = [
  ...allResources,
  ...allMagazines.map(
    (magazine): Resource => ({
      id: magazine.id,
      title: magazine.title,
      subtitle: magazine.subtitle,
      image: magazine.image,
      downloadUrl: magazine.downloadUrl,
      resourceType: "Magazine",
    })
  ),
];

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M18 18l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path
      d="M5 7.5l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrowseResources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<ResourceTag[]>([]);
  const [investorStage, setInvestorStage] = useState<InvestorStage | "All">("All");
  const [resourceType, setResourceType] = useState<ResourceType | "All">("All");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleTag = (tag: ResourceTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return combinedResources.filter((resource) => {
      const matchesQuery =
        !query ||
        resource.title.toLowerCase().includes(query) ||
        (resource.subtitle ?? "").toLowerCase().includes(query);

      const matchesStage =
        investorStage === "All" || resource.investorStage === investorStage;

      const matchesType =
        resourceType === "All" || resource.resourceType === resourceType;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => resource.tags?.includes(tag));

      return matchesQuery && matchesStage && matchesType && matchesTags;
    });
  }, [searchQuery, selectedTags, investorStage, resourceType]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTags, investorStage, resourceType]);

  const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentResources = filteredResources.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };

  return (
    <section className={styles.browseSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Browse all resources</h1>
        <p className={styles.subtitle}>
          Access all our resources whether you&apos;re new to investing or
          already own land, find the ones that fit your needs.
        </p>

        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="What do you want to learn about?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.filterRow}>
          <div className={styles.pills}>
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`${styles.pill} ${
                  selectedTags.includes(tag) ? styles.pillActive : ""
                }`}
                onClick={() => toggleTag(tag)}
                aria-pressed={selectedTags.includes(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className={styles.dropdowns}>
            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={investorStage}
                onChange={(e) =>
                  setInvestorStage(e.target.value as InvestorStage | "All")
                }
                aria-label="Filter by investor stage"
              >
                <option value="All">Investor Stage: All</option>
                {INVESTOR_STAGES.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
              <span className={styles.selectChevron}>
                <ChevronIcon />
              </span>
            </div>

            <div className={styles.selectWrapper}>
              <select
                className={styles.select}
                value={resourceType}
                onChange={(e) =>
                  setResourceType(e.target.value as ResourceType | "All")
                }
                aria-label="Filter by resource type"
              >
                <option value="All">Resource Type: All</option>
                {RESOURCE_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <span className={styles.selectChevron}>
                <ChevronIcon />
              </span>
            </div>
          </div>
        </div>

        {currentResources.length === 0 ? (
          <p className={styles.emptyState}>
            No resources match your filters yet. Try clearing a filter or
            searching a different term.
          </p>
        ) : (
          <div className={styles.grid}>
            {currentResources.map((resource) => (
              <div
                key={`${resource.resourceType}-${resource.title}`}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <span className={styles.typeBadge}>
                    {resource.resourceType}
                  </span>
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
                    <p className={styles.cardSubtitle}>{resource.subtitle}</p>
                  )}
                </div>
                <Link
                  href={resource.downloadUrl}
                  className={styles.downloadLink}
                  target="_blank"
                  download
                >
                  Download Now
                  <Arrow />
                </Link>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
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
              onClick={() => handlePageChange(currentPage + 1)}
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

export default BrowseResources;
