import {
  BrainCircuit,
  Blocks,
  LineChart,
  Database,
  BarChart3,
  ServerCog,
  LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: "ml",
    title: "Machine Learning Solutions",
    description:
      "Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.",
    points: [
      "Deep learning model development",
      "Neural network architecture design",
      "Computer vision solutions",
      "Natural language processing",
      "Model optimization & scaling",
    ],
    icon: BrainCircuit,
  },
  {
    id: "blockchain",
    title: "Blockchain Development",
    description:
      "End-to-end blockchain solutions from smart contract development to decentralized application architecture.",
    points: [
      "Smart contract development",
      "Blockchain integration",
      "DeFi protocol design",
      "Web3 development",
    ],
    icon: Blocks,
  },
  {
    id: "trading",
    title: "Algorithmic Trading",
    description:
      "Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.",
    points: [
      "Trading strategy development",
      "High-frequency trading systems",
      "Market analysis algorithms",
      "Performance optimization",
    ],
    icon: LineChart,
  },
  {
    id: "data",
    title: "Data Engineering",
    description:
      "Build robust data infrastructure that scales with your business needs using modern data engineering practices.",
    points: [
      "Data pipeline development",
      "Big data processing",
      "Data warehouse architecture",
      "ETL workflow design",
    ],
    icon: Database,
  },
  {
    id: "analytics",
    title: "Predictive Analytics",
    description:
      "Transform your data into actionable insights with advanced predictive modeling and forecasting solutions.",
    points: [
      "Time series analysis",
      "Predictive modeling",
      "Business intelligence",
      "Statistical analysis",
    ],
    icon: BarChart3,
  },
  {
    id: "mlops",
    title: "MLOps & Infrastructure",
    description:
      "Enterprise-grade infrastructure for deploying and managing ML models in production environments.",
    points: [
      "CI/CD pipeline setup",
      "Model deployment automation",
      "Performance monitoring",
      "Infrastructure scaling",
    ],
    icon: ServerCog,
  },
];
