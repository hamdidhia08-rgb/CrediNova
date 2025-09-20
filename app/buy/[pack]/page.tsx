"use client";

import PackDetail from "@/Components/Pricing/PagePackDetail";
import { useParams } from "next/navigation";

type PackKey = "starter-pack" | "pro-pack" | "enterprise-pack";

interface PackData {
  name: string;
  price: string;
  cards: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const allPacks: Record<PackKey, PackData> = {
  "starter-pack": {
    name: "Starter Pack",
    price: "$250",
    cards: "30K Credit Cards",
    description: "Perfect for individuals who want to start small and test the waters.",
    features: [
      "30,000 verified cards",
      "Instant secure delivery",
      "Basic customer support",
    ],
    imageUrl: "/images/choose-card.png",
  },
  "pro-pack": {
    name: "Pro Pack",
    price: "$499",
    cards: "120K Credit Cards",
    description: "Best choice for professionals who need reliable, verified packs.",
    features: [
      "120,000 verified cards",
      "Priority secure delivery",
      "24/7 customer support",
      "Daily updates included",
    ],
    imageUrl: "/images/choose-card.png",
  },
  "enterprise-pack": {
    name: "Enterprise Pack",
    price: "$999",
    cards: "300K Credit Cards",
    description: "For agencies or large-scale needs, with premium reliability.",
    features: [
      "300,000 verified cards",
      "Premium secure delivery",
      "Dedicated account manager",
      "Extended data protection",
    ],
    imageUrl: "/images/choose-card.png",
  },
};

export default function PackPage() {
  const params = useParams();
  const pack = params.pack as PackKey;

  if (!pack || !allPacks[pack]) {
    return <p className="text-center text-gray-400 mt-20">Pack not found.</p>;
  }

  const packData = allPacks[pack];

  return <PackDetail {...packData} />;
}
