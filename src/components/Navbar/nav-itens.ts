export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "SOBRE NÓS",
    href: "#about-us",
  },
  {
    label: "ARTIGOS",
    href: "/artigos",
  },
  {
    label: "SERVIÇOS",
    href: "#",
  },
  {
    label: "MEMBROS",
    href: "#membros",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];
