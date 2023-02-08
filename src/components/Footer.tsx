import Link from "next/link";
import Button from "./shared/Button";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-10 md:pt-20 mt-20 md:mt-40">
      <section className="container mb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-medium leading-[3.6rem] md:leading-[4.5rem] tracking-normal">
          Join millions of <br />
          creative people with Crypto Fin
        </h2>
        <Button
          className="mt-6 text-[#121313] font-extrabold"
          rounded="rounded-md"
          bgColor="orange"
          href="#"
        >
          Join the Waitlist &nbsp; &rarr;
        </Button>
      </section>
      <hr className="bg-[#404444] h-[0.0625rem] border-none" />
      <section className="container flex flex-col md:flex-row justify-between gap-y-20 md:gap-y-0 text-center md:text-left gap-x-16 pt-10 pb-28">
        <article className="grow">
          <h3 className="text-xl uppercase font-extrabold">Crypto Fin</h3>
          <p className="text-[#ffffff66] text-base mt-9 max-w-lg">
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </article>
        <nav>
          <h3 className="text-xl capitalize font-extrabold">Company</h3>
          <ul className="mt-9 space-y-5">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Pricing</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="text-xl capitalize font-extrabold">Product</h3>
          <ul className="mt-9 space-y-5">
            <li>
              <Link href="/">Invoicing Platform</Link>
            </li>
            <li>
              <Link href="/">Accounting Platform</Link>
            </li>
            <li>
              <Link href="/">Create Proposal</Link>
            </li>
            <li>
              <Link href="/">Contracts</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="text-xl capitalize font-extrabold">Resources</h3>
          <ul className="mt-9 space-y-5">
            <li>
              <Link href="/">Proposal Template</Link>
            </li>
            <li>
              <Link href="/">Invoice Template</Link>
            </li>
            <li>
              <Link href="/">Tutorial</Link>
            </li>
            <li>
              <Link href="/">How to write a contract</Link>
            </li>
          </ul>
        </nav>
      </section>
      <hr className="bg-[#404444] h-[0.0625rem] border-none" />
      <section className="container py-10 flex flex-col lg:flex-row text-center justify-between">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Crypto Fin. All rights reserved.
          &mdash; Privacy Policy &bull; Terms of Services
        </p>
        <p className="text-xs mt-2 lg:mt-0">
          Supported by <strong>Microsoft Startup</strong>
        </p>
      </section>
    </footer>
  );
}
