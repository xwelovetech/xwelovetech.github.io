import { Cover } from "@/components/Cover";
import { Transition } from "@/components/Transition/Transition";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WeLoveTech",
  description: "Digital Business",
};

export default function Home() {
  return (
    <main className="bg-[#393A47] h-[100vh]">
      <Transition />
      <Cover />
    </main>
  );
}
