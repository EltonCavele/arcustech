import { Mail, Phone, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
};

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "contact@catalystanalytics.io",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: "(469) 712-4672",
    icon: Phone,
  },
  {
    id: "office",
    label: "Office",
    value: "5511 Parkcrest Dr, Suite 103\nAustin, TX 78731\nUnited States",
    icon: MapPin,
  },
];

