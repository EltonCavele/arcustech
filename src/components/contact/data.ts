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
    value: "admin@arcustech.co.mz",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+840604377",
    icon: Phone,
  },
  {
    id: "office",
    label: "Office",
    value: "AV,JULIUS NYERERE MIRADOURO, N555",
    icon: MapPin,
  },
];
