/**
 * The "Aesthetic Services" banner. The Divi export contains this section
 * twice — once above the intro and once below it — so the page renders it
 * twice too.
 */
export default function HeroBanner({
  asHeading = false,
}: {
  /** The first instance is the page's H1; the repeat is decorative. */
  asHeading?: boolean;
}) {
  const Title = asHeading ? "h1" : "p";

  return (
    <section
      className="flex min-h-[350px] items-center bg-cover bg-center py-20"
      style={{ backgroundImage: "url(/images/hero-bg.avif)" }}
      aria-hidden={asHeading ? undefined : true}
    >
      <div className="mx-auto w-full max-w-[860px] px-6">
        <Title className="border border-sand bg-white px-6 py-8 text-center font-serif text-[35px] tracking-[1px] text-black sm:px-20 sm:py-10 sm:text-[50px] lg:text-[60px]">
          Aesthetic Services
        </Title>
      </div>
    </section>
  );
}
