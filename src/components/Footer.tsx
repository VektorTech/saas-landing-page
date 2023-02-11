import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-10 md:pt-20 mt-20 md:mt-40">
      <section className="container mb-24 text-center">
        <h2 className="text-3xl md:text-5xl !font-normal leading-[3.6rem] md:leading-[4.5rem] !tracking-normal">
          Join millions of <br />
          creative people with Crypto Fin
        </h2>
        <Button
          className="mt-6 text-[#121313] font-extrabold"
          rounded="rounded-md"
          bgColor="orange"
          href="#"
        >
          Join the Waitlist &nbsp; <span className="text-2xl font-black pb-[2px]">&rarr;</span>
        </Button>
      </section>
      <hr className="bg-[#404444] h-[0.0625rem] border-none" />
      <nav
        aria-label="footer navigation"
        className="container flex flex-col md:flex-row justify-between gap-x-10 gap-y-20 md:gap-y-0 text-center md:text-left pt-10 pb-28"
      >
        <article className="basis-[45%]">
          <h3 className="text-xl uppercase font-bold">Crypto Fin</h3>
          <p className="text-[#ffffff66] text-base mt-9 max-w-lg">
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment.
          </p>
        </article>
        <div>
          <h3 className="text-xl capitalize font-semibold">Company</h3>
          <ul className="mt-9 text-base font-light space-y-5">
            <li>
              <Link href="/" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl capitalize font-semibold">Product</h3>
          <ul className="mt-9 text-base font-light space-y-5">
            <li>
              <Link href="/" className="hover:underline">
                Invoicing Platform
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Accounting Platform
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Create Proposal
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Contracts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl capitalize font-semibold">Resources</h3>
          <ul className="mt-9 text-base font-light space-y-5">
            <li>
              <Link href="/" className="hover:underline">
                Proposal Template
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Invoice Template
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Tutorial
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                How to write a contract
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="bg-[#404444] h-[0.0625rem] border-none" />
      <section className="container py-10 flex flex-col lg:flex-row text-center justify-between">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Crypto Fin. All rights reserved.
          &mdash;{" "}
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          &bull;{" "}
          <Link href="/" className="hover:underline">
            Terms of Services
          </Link>
        </p>
        <p className="text-xs mt-2 lg:mt-0 font-normal">
          Supported by <strong>Microsoft Startup</strong>
        </p>
      </section>
    </footer>
  );
}
