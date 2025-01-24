// components/CTASection.tsx
import React from "react";
import Image from "next/image";
import H2 from "@/components/ui/H2";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-background py-16 px-6">
      <Container>
        <Column>
          <Image
            src="/image.png"
            alt="Team enjoying the beach"
            className="rounded-lg shadow-lg"
            width={500}
            height={500}
          />
        </Column>
        <Column>
          <H2>Rejoignez nous</H2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            magnam voluptatem cupiditate veritatis in accusamus quisquam.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-gray-200 mb-6">
            <li className="flex items-center">
              <Svg />
              Réactivité
            </li>
            <li className="flex items-center">
              <Svg />
              Fléxibilité
            </li>
            <li className="flex items-center">
              <Svg />
              Transparence
            </li>
            <li className="flex items-center">
              <Svg />
              Prix compétitifs
            </li>
            <li className="flex items-center">
              <Svg />
              Polyvalent
            </li>
          </ul>
          <Button variant={"cta"}>
            Contactez-nous
          </Button>
        </Column>
      </Container>
    </section>
  );
};

const Svg = () => {
  return (
    <svg
      className="w-5 h-5 text-accent mr-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
      {children}
    </div>
  )
}
const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-1/2">
      {children}
    </div>
  )
}

export default CTASection;
