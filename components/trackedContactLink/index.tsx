"use client";

interface Props {
  href: string;
  eventName: "phone_click" | "email_click";
  value: string;
  location: string;
  className?: string;
  children: React.ReactNode;
}

const TrackedContactLink: React.FC<Props> = ({
  href,
  eventName,
  value,
  location,
  className,
  children,
}) => {
  const handleClick = () => {
    const paramKey = eventName === "phone_click" ? "phone_number" : "email";
    window.gtag?.("event", eventName, { location, [paramKey]: value });
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default TrackedContactLink;
