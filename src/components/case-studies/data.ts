import {
  Bot,
  CircuitBoard,
  Database,
  LineChart,
  Network,
  Server,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  summary: string;
  bullets: string[];
  tags: string[];
  icon: LucideIcon;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ml-automation",
    title: "MachineLearningProject",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    summary:
      "AI-powered automation delivering predictive maintenance and intelligent forecasting across critical operations.",
    bullets: [
      "Intelligent anomaly detection",
      "Predictive failure analytics",
      "Automated reporting pipelines",
      "Real-time monitoring dashboards",
    ],
    tags: ["Machine Learning", "Automation"],
    icon: Bot,
    accent: "from-[#4CC9F0] to-[#4361EE]",
  },
  {
    id: "blockchain-security",
    title: "ProjectLoremIpsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    summary:
      "Secure blockchain integration to streamline asset tokenization and cross-network interoperability.",
    bullets: [
      "Smart contract auditing",
      "Cross-chain communication",
      "Regulatory compliance checks",
      "Automated settlement workflows",
    ],
    tags: ["Blockchain", "Security"],
    icon: Network,
    accent: "from-[#FF7B54] to-[#FF5C8A]",
  },
  {
    id: "quant-platform",
    title: "ProjectLoremIpsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    summary:
      "Quantitative trading platform delivering sub-second executions with deep market intelligence.",
    bullets: [
      "High-frequency data ingestion",
      "Strategy backtesting engine",
      "Risk-adjusted optimization",
      "Regulatory reporting suite",
    ],
    tags: ["Algorithmic Trading", "Finance"],
    icon: LineChart,
    accent: "from-[#43E97B] to-[#38F9D7]",
  },
  {
    id: "data-modernization",
    title: "ProjectLoremIpsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    summary:
      "Cloud-native data platforms enabling fast, reliable, and governed insights at enterprise scale.",
    bullets: [
      "Streaming ETL pipelines",
      "Unified data catalog",
      "Quality and lineage automation",
      "Self-service analytics layer",
    ],
    tags: ["Data Engineering", "Cloud"],
    icon: Database,
    accent: "from-[#5A60FF] to-[#6A9CFF]",
  },
  {
    id: "predictive-analytics",
    title: "ProjectLoremIpsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    summary:
      "Predictive analytics suite forecasting demand, churn, and supply constraints for rapid decision-making.",
    bullets: [
      "Demand prediction models",
      "Customer churn scoring",
      "Scenario simulation tools",
      "Executive KPI dashboards",
    ],
    tags: ["Predictive Analytics", "Insights"],
    icon: CircuitBoard,
    accent: "from-[#FFD166] to-[#F4A261]",
  },
  {
    id: "mlops-infra",
    title: "ProjectLoremIpsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    summary:
      "Enterprise MLOps platform automating deployment, monitoring, and compliance for AI initiatives.",
    bullets: [
      "Unified model registry",
      "Continuous deployment pipelines",
      "Performance drift monitoring",
      "Audit-ready governance",
    ],
    tags: ["MLOps", "Infrastructure"],
    icon: Server,
    accent: "from-[#9A8CFF] to-[#6C63FF]",
  },
];

