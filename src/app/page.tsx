import Hero from "@/components/Hero";
import Related from "@/components/Related";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import GDPRFeature from "@/components/GDPRFeature";
import ValuePropositions from "@/components/ValuePropositions";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Related />
      <Content />
      <Feature />
      <GDPRFeature />
      <ValuePropositions />
      <Blog />
    </>
  );
}
