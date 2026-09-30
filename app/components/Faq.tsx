const faqs = [
  {
    question: "What treatments does Olive Lane Aesthetics offer?",
    answer:
      "Olive Lane offers injectable aesthetic treatments, including wrinkle relaxers and dermal fillers. Contact us to learn more about available treatments.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Our medical providers can discuss your goals, review your options, and help determine whether a treatment may be appropriate for you.",
  },
  {
    question: "How much do treatments cost?",
    answer:
      "Pricing varies by treatment and product. Our website lists current starting prices for select injectables and fillers. Your provider can explain the expected cost of your personalized treatment plan.",
  },
  {
    question: "How do I book an appointment?",
    answer: "Click the BOOK NOW button to access our appointment booking system.",
  },
  {
    question: "Where is Olive Lane Aesthetics located?",
    answer:
      "We are located in Upland, California. Visit the Contact section for our address and directions.",
  },
];

export default function Faq() {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-[760px]">
        <h2 id="faq-heading" className="text-4xl sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 border-t border-beige">
          {faqs.map((item) => (
            <details key={item.question} className="border-b border-beige">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5">
                <h3 className="font-sans text-[1.05rem] leading-snug font-semibold">
                  {item.question}
                </h3>
                <span className="faq-icon relative h-3.5 w-3.5 shrink-0 text-deep" aria-hidden="true">
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                  <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-[62ch] pb-6 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
