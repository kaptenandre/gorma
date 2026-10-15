// All content lives here. Swap a TBA for the real URL and redeploy.

/** A link that isn't live yet. Renders like the real thing but goes nowhere. */
export const TBA = "";

export type Link = { label: string; href: string };

export const site = {
  name: "Gorma",
  url: "https://www.gormaofficial.com",
  description:
    "Gorma. New single The Thicket out 30 October. Live at Riche Fenix, Stockholm, 28 October. New album Eat The Sky on LP 29 January.",
  ogImage: "/og.jpg",

  single: {
    title: "The Thicket",
    kind: "New single",
    dateLabel: "30 October",
    /** Midnight Stockholm time. Before this the button reads "Pre-save", after it "Listen". */
    outAt: "2026-10-29T23:00:00.000Z",
    /** Smart link: pre-save before release, streaming after. */
    link: TBA,
    /** Chorus, as printed on the gatefold. */
    lyric: ["We walk through the thicket", "one goal forward", "to the steady carved stone", "nobody knows"],
  },

  live: {
    title: "Live",
    venue: "Riche Fenix",
    address: "Götgatan 40",
    city: "Stockholm",
    date: "2026-10-28",
    dateLabel: "28 October",
    /** The row disappears from the page after this moment. */
    hideAfter: "2026-10-29T03:00:00.000Z",
    tickets: TBA,
    map: "https://www.google.com/maps/search/?api=1&query=Riche+Fenix+G%C3%B6tgatan+40+Stockholm",
  },

  album: {
    title: "Eat The Sky",
    kind: "New album",
    format: "LP",
    dateLabel: "29 January",
    dateLabelLong: "29 January 2027",
    outAt: "2027-01-28T23:00:00.000Z",
    catalog: "TNO053LP",
    preorder: TBA,
    presave: TBA,
    sides: [
      { name: "A-Side", tracks: ["Eat The Sky", "The Thicket", "Down By", "Stegen"] },
      { name: "B-Side", tracks: ["The Silence", "Silence Ever Walks", "They wait", "Lights out", "The Beyond"] },
    ],
  },

  links: [
    { label: "Bandcamp", href: "https://gorma.bandcamp.com" },
    { label: "Spotify", href: TBA },
    { label: "Apple Music", href: TBA },
    { label: "Instagram", href: TBA },
    { label: "YouTube", href: TBA },
  ] as Link[],

  /** Back cover credits, column by column, exactly as printed. */
  credits: [
    [
      "Written and produced by Nordmark",
      "All lyrics by Nordmark except Eat The Sky & The Beyond, written by Tomas Liljedahl",
      "All instruments played by Nordmark except bass on Stegen, played by Mattias Franzén",
      "Choirs on Stegen by Patrick Alvarsson",
    ],
    [
      "All drums recorded at Atlantis Studio except Stegen, recorded by Pelle Gunnerfeldt at RMV Studio, & The Thicket, recorded by Christoffer Roth at Studio Dubious",
      "Spoken word on The silence and They Wait by Amalia Holm",
      "Mixed by Frans Hägglund at Riddarborgen Studio",
      "Mastered by Magnus Lindberg. Art Direction by André Jofré",
    ],
  ],

  label: {
    name: "TNO Recordings",
    url: "https://tnor.se",
    copyright: "℗ & © 2026 Nordmark",
    license: "Under exclusive license to TNO Recordings",
  },
};
