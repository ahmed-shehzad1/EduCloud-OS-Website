export interface NavItem {
  path: string;
  label: string;
}

export const NAV_LINKS: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/how-to', label: 'How To' },
];