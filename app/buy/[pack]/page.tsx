"use client";

import PackDetail from "@/Components/Pricing/PagePackDetail";
import { useParams } from "next/navigation";

type PackKey = "silver-pack" | "platinum-pack" | "gold-pack";

interface PackData {
  name: string;
  price: string;
  cards: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const allPacks: Record<PackKey, PackData> = {
  "silver-pack": {
    name: "Silver Pack",
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
  "platinum-pack": {
    name: "Platinum Pack",
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
  "gold-pack": {
    name: "Gold Pack",
    price: "$999",
    cards: "300K Credit Cards",
    description: "Exclusive premium pack with maximum reliability and golden support.",
    features: [
      "300,000 verified cards",
      "VIP secure delivery",
      "Dedicated account manager",
      "Extended golden protection",
      "Exclusive priority updates",
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
