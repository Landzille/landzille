"use client";

import { useState, ReactNode } from "react";
import styles from "./styles.module.css";

interface PopupProps {
  children: ReactNode;
}

export default function Popup({ children }: PopupProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay} onClick={handleClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.popupClose} onClick={handleClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
