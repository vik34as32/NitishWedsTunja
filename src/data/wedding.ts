export const assets = {
  palaceBackdrop: "/images/palace-backdrop.svg",
  couplePortrait: "/images/couple-portrait.svg",
  tilakBackdrop: "/images/tilak-backdrop.svg",
  mehndiBackdrop: "/images/mehndi-backdrop.svg",
  haldiBackdrop: "/images/haldi-backdrop.svg",
  mandapBackdrop: "/images/mandap-backdrop.svg",
  nightSky: "/images/night-sky.svg",
  /**
   * Drop a royalty-free instrumental here to replace the ceremonial drone.
   * The player falls back gracefully when this file is missing.
   */
  music: "/music/wedding-instrumental.mp3",
  /** Optional cinematic loop. Rendered only if you wire a player to this path. */
  video: "/videos/wedding-reel.mp4",
} as const;

export const wedding = {
  groom: {
    name: "Nitish",
    father: "Sh. Arun Singh",
  },
  bride: {
    name: "Tanuja",
    father: "Sh. Narendra Singh",
  },
  /** Baraat hour, India Standard Time. The countdown ticks toward this moment. */
  dateTime: "2026-11-21T14:00:00+05:30",
  weddingDay: "Saturday, 21 November 2026",
  /** Large, high-contrast date line used on the invitation card. */
  dateLine: "21 November 2026",
  dateWhen: "Saturday · Baraat 2:00 PM",
  blessing: "|| Shree Ganeshaya Namah ||",
  quote: "Two Hearts, One Beautiful Journey",
  thankYou: "Your Presence Will Make Our Celebration More Special",
  closing: "With Love & Blessings – Singh Family",
  hostsLead: "Cordially Invited By",
  hosts: [
    "Prabhunath Singh",
    "Dhananjay Singh",
    "Surender Singh",
    "Gupteshwar Singh",
    "Sashi Bushan Singh",
    "Deepak Singh",
    "Sachin Singh",
    "Sekhar Singh",
    "Aashish Singh",
  ],
  familyLine: "And the entire Singh Family.",
  wellWishers: {
    heading: "Darshanbhilashi (Well-Wishers)",
    name: "Sh. Arun Singh",
    village: "Nadiyaw",
    post: "Nadiyaw",
    district: "Siwan, Bihar",
    contact: "9991643177",
    tel: "+919991643177",
  },
  brideFamily: {
    heading: "Bride's Family",
    label: "Father's Name",
    name: "Sh. Narendra Singh",
    village: "Lalahata",
    post: "Jamo Bazaar",
    district: "Siwan",
    contact: "7050108600",
    tel: "+917050108600",
  },
  events: [
    {
      id: "tilak",
      title: "Shubh Tilak",
      weekday: "Monday",
      date: "16 November 2026",
      time: "8:00 PM",
      summary:
        "A traditional Bihar tilak, as the groom is blessed and the alliance is sealed with love.",
    },
    {
      id: "mehndi",
      title: "Mehndi Rasam",
      weekday: "Friday",
      date: "20 November 2026",
      time: "6:00 PM",
      summary:
        "Ladke ki mehndi — henna is applied on the groom's hand, among marigolds, music, and joy.",
    },
    {
      id: "haldi",
      title: "Haldi & Matkod",
      weekday: "Saturday",
      date: "21 November 2026",
      time: "6:00 AM",
      summary:
        "A golden morning of haldi and matkod, with turmeric, kalash, and the warmth of family.",
    },
    {
      id: "vivah",
      title: "Vivah",
      weekday: "Saturday",
      date: "21 November 2026",
      time: "Baraat 2:00 PM",
      summary: "The baraat arrives, varmalas are exchanged, and forever begins together.",
    },
  ],
  visual: {
    /** Set to false to let replacement photography fill each scene on its own. */
    illustratedScenes: true,
  },
  assets,
} as const;

export type CeremonyId = (typeof wedding.events)[number]["id"];

export function splitDate(date: string) {
  const [day = "", month = "", year = ""] = date.split(" ");
  return {
    day,
    month,
    year,
    shortMonth: month.slice(0, 3),
    monthYear: [month, year].filter(Boolean).join(" "),
  };
}

export function eventById(id: CeremonyId) {
  const event = wedding.events.find((item) => item.id === id);
  if (!event) {
    throw new Error(`Unknown ceremony: ${id}`);
  }
  return event;
}

export function shareMessage(url: string) {
  return [
    "Shubh Vivah",
    "Nitish & Tanuja",
    wedding.weddingDay,
    "",
    "You are cordially invited to our wedding celebrations.",
    "",
    "Tilak · 16 November 2026 · 8:00 PM",
    "Mehndi Rasam · 20 November 2026 · 6:00 PM",
    "Haldi & Matkod · 21 November 2026 · 6:00 AM",
    "Vivah · 21 November 2026 · Baraat 2:00 PM",
    "",
    url,
  ].join("\n");
}
