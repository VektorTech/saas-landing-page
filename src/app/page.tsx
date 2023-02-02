import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Related from "@/components/Related";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import GDPRFeature from "@/components/GDPRFeature";
import ValuePropositions from "@/components/ValuePropositions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Related />
      <Content />
      <Feature />
      <GDPRFeature />
      <ValuePropositions />
      <Footer />
    </>
  )
}
