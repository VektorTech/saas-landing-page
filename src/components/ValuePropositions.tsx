import Button from "./Button";

export default function ValuePropositions() {
  return (
    <section className="container flex flex-col lg:flex-row gap-8">
      <article
        className={[
          "text-center bg-white rounded-3xl py-10 px-5 md:px-14 overflow-hidden",
          "shadow-[0_141px_113px_0_#00000007,0_91px_66px_0_#00000005,0_55px_36px_0_#00000004,0_28px_18px_0_#00000004,0_12px_9px_0_#00000003,0_3px_4px_0_#00000002]",
        ].join(" ")}
      >
        <h2 className="font-extrabold tracking-tight text-3xl md:text-[calc(1.11rem_+_1.3vw)] leading-[2rem] md:leading-[3rem]">
          Outward clothes promise at gravity.
        </h2>
        <p className="mt-5 text-base font-normal text-[#64607D]">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>
        <Button className="mt-9" href="#" bgColor="purple">
          Read More
        </Button>
      </article>

      <article
        className={[
          "text-center bg-white rounded-3xl py-10 px-5 md:px-14 overflow-hidden",
          "shadow-[0_141px_113px_0_#00000007,0_91px_66px_0_#00000005,0_55px_36px_0_#00000004,0_28px_18px_0_#00000004,0_12px_9px_0_#00000003,0_3px_4px_0_#00000002]",
        ].join(" ")}
      >
        <h2 className="font-extrabold tracking-tight text-3xl md:text-[calc(1.11rem_+_1.3vw)] leading-[2rem] md:leading-[3rem]">
          Sufficient particular impossible.
        </h2>
        <p className="mt-5 text-base font-normal text-[#64607D]">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>
        <Button className="mt-9" href="#" bgColor="purple">
          Read More
        </Button>
      </article>
    </section>
  );
}
