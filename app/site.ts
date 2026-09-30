/**
 * Practice details already published on the site. Booking still opens the
 * existing scheduler until a replacement URL is provided.
 */
export const site = {
  name: "Olive Lane Aesthetics",
  url: "https://olivelaneaesthetics.com",

  phone: "(909) 287-3888",
  phoneHref: "tel:+19092873888",

  email: "info@olivelaneaesthetics.com",

  address: {
    line1: "1202 E 20th St Unit E",
    line2: "Upland, CA 91784",
    mapEmbed:
      "https://www.google.com/maps?q=1202+E+20th+St+Unit+E,+Upland,+CA+91784&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1202+E+20th+St+Unit+E,+Upland,+CA+91784",
  },

  hours: "Every day, 9:00 AM – 9:00 PM",

  bookingUrl: "https://zipclinical.com/book/medcove",

  instagram: "",
} as const;
