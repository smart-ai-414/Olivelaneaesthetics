import { site } from "../site";

export default function GetStarted() {
  return (
    <section className="bg-shell pt-[25px] pb-[40px]">
      <div className="mx-auto max-w-[1080px] px-6 text-center">
        <h2 className="text-[28px] leading-[1.7] sm:text-[36px]">
          Get Started Today!
        </h2>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-3 rounded-full bg-black py-[8px] pr-[70px] pl-[50px] text-[17px] tracking-[3px] text-white transition-opacity hover:opacity-85"
        >
          BOOK
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
