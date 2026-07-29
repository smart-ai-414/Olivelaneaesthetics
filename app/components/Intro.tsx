import Image from "next/image";
import { site } from "../site";

export default function Intro() {
  return (
    <section id="about" className="bg-blush py-[10px]">
      <div className="mx-auto grid max-w-[1080px] gap-8 px-6 py-8 lg:grid-cols-2 lg:gap-12">
        {/*
          From `lg` up the frame stretches to the height of the copy beside it
          (grid `align-items: stretch` + `h-auto`), so the band's padding above
          and below the photo is equal by construction rather than by a hand
          -tuned height. It also crops the 4:3 source less than a fixed 335px
          box did.
        */}
        <div className="relative h-[280px] w-full border-[10px] border-clay sm:h-[360px] lg:h-auto">
          <Image
            src="/images/treatment-room.jpeg"
            alt={`Treatment room at ${site.name} in Upland, California`}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
            priority
          />
        </div>

        <div className="rich-text text-[15px] leading-[1.5] text-body-muted">
          <p>
            <strong>
              At {site.name}, we specialize in injectable treatments focused on
              natural, refined results.
            </strong>
          </p>
          <p>
            We offer neurotoxins (Botox, Dysport, and similar) and dermal
            fillers to smooth wrinkles and restore volume without an overdone
            look.
          </p>
          <p>
            We are known for our <strong>lip enhancement</strong>, delivering
            clean, natural-looking lips. We also perform full-face filler
            treatments, including cheeks, jawline, and under-eyes.
          </p>
          <p>
            <strong>Our neurotoxin treatments include:</strong>
          </p>
          <ul>
            <li>Wrinkle reduction and lip flip</li>
            <li>Excessive sweating (hyperhidrosis)</li>
            <li>Chronic migraine relief</li>
          </ul>
          <p>
            Treatments are quick, minimally invasive, and performed with a
            medical, safety-first approach.
          </p>
          <p>
            <strong>
              Our goal is simple: natural-looking results, every time.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
