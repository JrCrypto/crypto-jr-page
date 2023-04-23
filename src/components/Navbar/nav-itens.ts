export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "SOBRE NÓS",
    href: "#",
  },
  {
    label: "ARTIGOS",
    href: "#",
  },
  {
    label: "SERVIÇOS",
    href: "#",
  },
  {
    label: "MEMBROS",
    href: "#",
  },
  {
    label: "FAQ",
    href: "#",
  },
];
