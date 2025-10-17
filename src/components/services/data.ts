import {
  BrainCircuit,
  Blocks,
  LineChart,
  Database,
  BarChart3,
  ServerCog,
  LucideIcon,
  Cloud,
  Globe,
  Smartphone,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

// Services — trimmed to only our core offerings: SaaS, Web, and Mobile
export const services: Service[] = [
  {
    id: "saas",
    title: "SaaS Platforms",
    description:
      "Secure, cloud-native subscription software that streamlines operations, surfaces insights, and scales reliably.",
    points: [
      "User management, billing, and roles",
      "Multi-tenant architecture and provisioning",
      "Analytics dashboards and automation",
      "API-first integrations with existing tools",
      "Compliance, governance, and security",
    ],
    icon: Cloud,
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Fast, accessible, resilient web applications with robust backends, clean architectures, and CI/CD.",
    points: [
      "Responsive UI and accessibility",
      "API design and backend services",
      "Performance optimization and caching",
      "Testing, monitoring, and observability",
      "SEO-friendly routing and metadata",
    ],
    icon: Globe,
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "High-performance native and cross-platform apps with intuitive UX and offline-first capabilities.",
    points: [
      "iOS and Android (native or cross-platform)",
      "Offline sync and local caching",
      "Push notifications and deep linking",
      "Performance and battery optimization",
      "App store deployment and maintenance",
    ],
    icon: Smartphone,
  },
];
