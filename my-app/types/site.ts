export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  nav: NavItem[];
}
