export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Slide {
  id: number;
  image: string;
  location: string;
  heading: string;
}

export interface HeroProps {
  slides?: Slide[];
  autoPlayInterval?: number;
}

export interface HeaderProps {
  transparent?: boolean;
}
