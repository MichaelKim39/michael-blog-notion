import { NavItemProps } from "components/Navbar/NavItem";

// NEEDS UPDATING BASED ON PAGES GENERATED
export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  JOURNAL: "/journal",
  TECH: "/tech",
  RESOURCES: "/resources",
  PHOTOS: "/photos",
};

export const NAVBAR_ITEMS: NavItemProps[] = [
  {
    href: PATHS.HOME,
    label: "Home",
  },
  {
    href: PATHS.ABOUT,
    label: "About",
  },
  {
    href: PATHS.BLOG,
    label: "Blog",
  },
  {
    href: PATHS.JOURNAL,
    label: "Journal",
  },
  {
    href: PATHS.PHOTOS,
    label: "Photos",
  },
];

export const NO_FOOTER_PATHS = [PATHS.PHOTOS];
