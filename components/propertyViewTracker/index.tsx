"use client";
import { useEffect } from "react";

interface Props {
  propertyName: string;
}

const PropertyViewTracker: React.FC<Props> = ({ propertyName }) => {
  useEffect(() => {
    window.gtag?.("event", "property_view", { property_name: propertyName });
  }, [propertyName]);

  return null;
};

export default PropertyViewTracker;
