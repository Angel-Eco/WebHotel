import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAward,  
  IconCalendar,  
  IconTicket,  
  IconPackage,  
  IconShoppingCart,
  IconAperture, 
  IconChartHistogram, 
  IconCalculator,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: " ",
  },

  {
    id: uniqueId(),
    title: "Modern",
    icon: IconAperture,
    href: "/",
    chip: "New",
    chipColor: "secondary",
  }, 
  {
    id: uniqueId(),
    title: "Clientes",
    icon: IconPackage,
    chip: "2",
    chipColor: "secondary",
    href: "/apps/contacts",
  },  
  {
    id: uniqueId(),
    title: "Calendario",
    icon: IconCalendar,
    href: "/apps/calendar",
  },
  {
    id: uniqueId(),
    title: "Piezas",
    icon: IconTicket,
    href: "/apps/tickets",
  },   
  
  {
    navlabel: true,
    subheader: "Other",
  },  
  {
    id: uniqueId(),
    title: "Graficos",
    icon: IconChartHistogram,
    href: "",
    chip: "premium",
    variant: "outlined",
    disabled: true,
  },
  {
    id: uniqueId(),
    title: "Amigos",
    icon: IconAward,
    href: "",
    chip: "premium",
    variant: "outlined",
    disabled: true,
  },
  {
    id: uniqueId(),
    title: "Pronostico",
    icon: IconCalculator,
    href: "",
    chip: "premium",
    variant: "outlined",
    disabled: true,
  },
  
];

export default Menuitems;
