/**
 * Single place for the details most likely to change once the practice is
 * fully separated from MedCove Urgent Care. Everything here is currently
 * carried over from medcoveupland.com/aesthetics unless noted.
 */
export const site = {
  name: "Olive Lane Aesthetics",
  url: "https://olivelaneaesthetics.com",

  // TODO(confirm): still MedCove's front-desk line.
  phone: "(909) 287-3888",
  phoneHref: "tel:+19092873888",

  // Requested by the client for the new Google Workspace account.
  email: "info@olivelaneaesthetics.com",

  address: {
    line1: "1202 E 20th St Unit E",
    line2: "Upland, CA 91784",
    // Keyless Google Maps embed for the same suite.
    mapEmbed:
      "https://www.google.com/maps?q=1202+E+20th+St+Unit+E,+Upland,+CA+91784&output=embed",
  },

  hours: "Every Day 9:00am to 9:00pm",

  // TODO(confirm): still points at MedCove's ZipClinical booking page.
  bookingUrl: "https://zipclinical.com/book/medcove",

  social: {
    facebook: "",
    instagram: "",
  },

  promo: {
    eyebrow: "Summer Refresh Event",
    headline: "20% OFF",
    subject: "Injectables",
    condition: "when you spend $600 or more",
    expires: "Offer expires August 31, 2026",
    code: "SUMMER20",
  },
} as const;
