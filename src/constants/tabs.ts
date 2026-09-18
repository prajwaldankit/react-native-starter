import type { ImageSourcePropType } from "react-native";

type AppTab = {
  /** Route file name inside `src/app`. */
  name: string;
  href: "/" | "/explore";
  label: string;
  icon: ImageSourcePropType;
};

export const TABS: readonly AppTab[] = [
  {
    name: "index",
    href: "/",
    label: "Home",
    icon: require("@/assets/images/tabIcons/home.png"),
  },
  {
    name: "explore",
    href: "/explore",
    label: "Explore",
    icon: require("@/assets/images/tabIcons/explore.png"),
  },
];
