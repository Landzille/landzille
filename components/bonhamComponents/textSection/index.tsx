import React from "react";
import styles from "./styles.module.css";

const BonhamTexts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.textBox}>
          <h5>Amenities and Lifestyle</h5>
          <p>
            From a vibrant downtown filled with shops, restaurants, and historic
            landmarks, to natural escapes like Bonham State Park, Lake Bonham,
            and the brand-new Bois d’Arc Lake, the city offers both quality of
            life and recreation. Residents enjoy small-town warmth with easy
            access to modern conveniences, cultural attractions, and outdoor
            adventure.
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>Legacy Ridge: A Landmark Development</h5>
          <p>
            At the heart of Bonham’s growth is the Legacy Ridge project, a
            436-home community set on nearly 274 acres, anchored by the Legacy
            Ridge Country Club and its 18-hole championship golf course. With
            homesites ranging from cozy 40-foot lots to sprawling 100-foot
            estate lots, Legacy Ridge blends lifestyle luxury with long-term
            investment value. Groundbreaking begins in 2025, with builder lots
            expected to be available by 2026, positioning investors to capture
            appreciation in one of Bonham’s premier residential projects.
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>The Future of Bonham</h5>
          <p>
            The Bonham Renaissance is more than revitalization; it’s a movement
            where history and modern growth converge. If you’re seeking a
            lifestyle rooted in heritage, a smart land investment, or
            opportunities in housing and commercial development, Bonham offers
            the perfect balance of charm and potential. Be part of the city’s
            transformation. Discover the Bonham Renaissance today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonhamTexts;
