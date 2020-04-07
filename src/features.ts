export interface Feature {
  code: string,
  name: string,
  family_code?: string,
  family_name?: string,
  description: string,
  fonts: string[],
  texts: string[],
  related: string[],
  references: string[],
  type: "digit" | "letter" | "ligature" | "position",
  default?: boolean,
  required?: string,
};

export const featureMap: { [code: string]: Feature | undefined } = {
  tnum: {
    code: "tnum",
    name: "Tabular Figures",
    description: "displays numerical digits (0–9) in the same width, like in monospace typefaces. For example, the digit 1 would take the same space as 2, 3, 4 or 0, so the number 1111 would take the same space as 2340.\n\nTabular figures are useful in aligned columns, like in tables or price lists, as they allow users to easily compare values vertically.",
    fonts: ["Inter", "Rasa"],
    texts: ["11,150,110", "11110000"],
    related: ["pnum", "onum", "lnum"],
    references: [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures",
    ],
    type: "digit",
  },
  pnum: {
    code: "pnum",
    name: "Proportional Figures",
    description: "displays numerical digits (0–9) in varying widths, similar to letters. For example, the digit 1 would likely take less space than others, so the number 1111 would take a smaller space than 2340.\n\nProportional figures look good in horizontal text, like in an address, as they maintain the balance and produce a consistent appearance with the rest of the alphabet.",
    fonts: ["Lato", "Source Sans Pro", "Roboto", "Open Sans"],
    texts: ["11,150,110", "11110000"],
    related: ["tnum", "onum", "lnum"],
    references: [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures",
    ],
    type: "digit",
  },
  onum: {
    code: "onum",
    name: "Oldstyle Figures",
    description: "displays numbers in varying heights and alignments. These numbers blend in with lowercase leters, as they share the same x-height, and also have ascenders (usually 6 and 8) and descenders (3, 4, 5, 7 and 9).\n\nOldstyle figures are often considered more pleasing and less intrusive than lining figures. They are preferred in running text and also pair nicely with small caps.",
    fonts: ["EB Garamond", "Lato", "Source Sans Pro", "Roboto", "Open Sans"],
    texts: ["10Broad36", "123456789"],
    related: ["lnum", "tnum", "pnum"],
    references: [
      "https://en.wikipedia.org/wiki/Text_figures",
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/oldstyle-figures",
      "https://practicaltypography.com/alternate-figures.html#oldstyle-figures"
    ],
    type: "digit",
  },
  lnum: {
    code: "lnum",
    name: "Lining Figures",
    description: "displays numbers in a uniform height, which usually aligned with uppercase letters (baseline and cap height).\n\nLining figures is the default style in most fonts. In all-cap settings, they are almost always preferred over oldstyle ones.",
    fonts: ["Merriweather", "Raleway"],
    texts: ["10Broad36", "123456789"],
    related: ["onum", "tnum", "pnum"],
    references: [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/lining-figures",
    ],
    type: "digit",
  },
  ordn: {
    code: "ordn",
    name: "Ordinals",
    description: "set the letters following a number superscripted, to denote that number is an ordinal one (represent position in a sequential order), like 1st or 2nd.",
    fonts: ["Source Sans Pro", "Lato"],
    texts: ["1st  2nd  3rd", "1o  1a", "Nº  No"],
    related: ["subs", "sups"],
    references: [
      "https://en.wikipedia.org/wiki/Ordinal_indicator",
      "https://practicaltypography.com/ordinals.html",
    ],
    type: "digit",
  },
  frac: {
    code: "frac",
    name: "Fractions",
    description: "applies the diagonal (slashed) fraction style to numbers separated by a slash, as in 1/2 or 3/4. These are called fractions and are usually used in dimensions, recipes and mathematics.\n\nThe diagonal style is not the only way to represent fractions, but usually considered the most common one. They look natural, use space effectively and are easier to read.",
    fonts: ["Roboto", "Inter", "Rasa", "Source Sans Pro", "Lato"],
    texts: ["1/2  1/4  3/4", "123/45678"],
    related: ["subs", "sups"],
    references: [
      "https://www.fonts.com/content/learning/fontology/level-3/numbers/fractions",
    ],
    type: "digit",
  },
  zero: {
    code: "zero",
    name: "Slashed Zero",
    description: "adds a diagonal slash to the zero digit to make it more distinguishable from the capital O.",
    fonts: ["IBM Plex Sans", "Inter", "Source Sans Pro"],
    texts: ["0O", "ZERO0"],
    related: [],
    references: [],
    type: "digit",
  },
  liga: {
    code: "liga",
    name: "Standard Ligatures",
    description: "combines two (or sometimes three) characters into a single character to prevent character collision, like the one between the hook of “f” and the dot of “i”.\n\nStandard Ligatures is enabled by default. It usually has ligatures for “f-” pairs, such as “fi”, “fl”, “ff” or “ffi”. Others ligatures might be found via “dlig”.",
    fonts: ["Lato", "EB Garamond", "Roboto"],
    texts: ["clifftop", "flying fish"],
    related: ["calt", "dlig", "hlig"],
    references: [
      "https://en.wikipedia.org/wiki/Orthographic_ligature",
      "https://www.fonts.com/content/learning/fontology/level-3/signs-and-symbols/ligatures-1",
    ],
    type: "ligature",
    default: true,
  },
  calt: {
    code: "calt",
    name: "Contextual Alternates",
    description: "uses alternate forms when some specific characters are used together. This usually improves the spacing and/or connection between these characters.\n\nContextual Alternates is enabled by default. It can be disabled if separated, distinct characters is preferred. In some typefaces designed for code, this is also referred as \"programming ligatures\".",
    fonts: ["Fira Code", "Inter"],
    texts: ["<- -> <->", "1*2  3×4"],
    related: ["cwsh", "liga"],
    references: [],
    type: "ligature",
    default: true,
  },
  hist: {
    code: "hist",
    name: "Historical Forms",
    description: "replaces some letters with their archaic alternatives, such as the long form “s”. This is meant to create a historical effect.\n\nHistorical Forms only deals with single characters. For completeness, consider applying the historical ligatures via “hlig”.",
    fonts: ["EB Garamond"],
    texts: ["sinfulness", "blissful"],
    related: ["hlig"],
    references: [
      "https://en.wikipedia.org/wiki/Long_s",
    ],
    type: "letter",
  },
  hlig: {
    code: "hlig",
    name: "Historical Ligatures",
    description: "also combines characters like Standard Ligatures but work on historical ones, like a pair of 2 long form “s”. It requires Historical Forms to be enabled.",
    fonts: ["EB Garamond"],
    texts: ["sinfulness", "blissful"],
    related: ["liga", "hist"],
    references: [],
    type: "ligature",
    required: '"hist"'
  },
  dlig: {
    code: "dlig",
    name: "Discretionary Ligatures",
    description: "– sometimes called Rare Ligatures – also combines characters like Standard Ligatures but work on not-so-common ones, like “ct”, “st” or “Th”.\n\nDiscretionary Ligatures are usually more decorative in nature than Standard Ligatures, and should be used at one's discretion, thus the name.",
    fonts: ["EB Garamond"],
    texts: ["extract", "chest", "Thedore"],
    related: ["liga", "hlig"],
    references: [
      "https://www.fonts.com/content/learning/fontology/level-3/signs-and-symbols/ligatures-2"
    ],
    type: "ligature",
  },
  salt: {
    code: "salt",
    name: "Stylistic Alternates",
    description: "replaces some characters with their stylistic alternates. For example, the single-story  “g” and “a” could be replaced with their double-story forms, and vice versa.\n\nStylistic Alternates are used mostly for their aesthetic effect. However, sometimes they can also help improve readability as in the case of the finial of lowercase “l” and the serif of uppercase “I”.",
    fonts: ["Inter", "Source Sans Pro", "Open Sans"],
    texts: ["Illustrating", "Illegal"],
    related: ["swsh", "hist"],
    references: [
      "https://en.wikipedia.org/wiki/G#Typographic_variants",
      "https://en.wikipedia.org/wiki/A#Typographic_variants",
      "https://en.wikipedia.org/wiki/A#Typographic_variants",
      "https://en.wikipedia.org/wiki/I#Forms_and_variants",
    ],
    type: "letter",
  },
  /* TODO
    Small caps (smcp)
    Swashes (swsh)
    Contextual Swash
    Stylistic alternates (salt)
    Kerning (kern)
    Titling Alternates (titl)
    Randomize (rand)
    Superscript (sups)
    Subscript (subs)
  */
};

export const featureArr: Feature[] = [
  "liga", "hlig", "dlig", "calt", // ligatures
  "onum", "lnum", "tnum", "pnum", "ordn", "frac", "zero", // digits
  "hist", "salt", "swsh", "smcp", "cswh", "rand", // letters
  "kern", "sups", "subs", // position
]
  .map(key => featureMap[key])
  // https://codereview.stackexchange.com/a/138289
  .filter(a => a !== undefined) as Feature[];

export const featureGroups = [
  { label: "Numbers", type: "digit" },
  { label: "Letters", type: "letter" },
  { label: "Ligatures", type: "ligature" },
  { label: "Position", type: "position" },
];
