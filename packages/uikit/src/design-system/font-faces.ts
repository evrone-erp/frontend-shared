type FontFaceParams = {
  url: string;
  family: string;
  format: string;
  italic?: boolean;
  weight?: number;
};
function createFontFace(opts: FontFaceParams) {
  return `
@font-face {
  font-family: "${opts.family}";
  font-style: ${opts.italic ? "italic" : "normal"};
  font-weight: ${opts.weight ?? 400};
  src: url("${opts.url}") format("${opts.format}");
  font-display: swap;
};
`;
}

export const fontFaces = [
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Black.otf",
    family: "SuisseIntl",
    weight: 900,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-BlackItalic.otf",
    family: "SuisseIntl",
    weight: 900,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Bold.otf",
    family: "SuisseIntl",
    weight: 700,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-BoldItalic.otf",
    family: "SuisseIntl",
    weight: 700,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-SemiBold.otf",
    family: "SuisseIntl",
    weight: 600,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-SemiBoldItalic.otf",
    family: "SuisseIntl",
    weight: 600,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Medium.otf",
    family: "SuisseIntl",
    weight: 500,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-MediumItalic.otf",
    family: "SuisseIntl",
    weight: 500,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Regular.otf",
    family: "SuisseIntl",
    weight: 400,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-RegularItalic.otf",
    family: "SuisseIntl",
    weight: 400,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Light.otf",
    family: "SuisseIntl",
    weight: 300,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-LightItalic.otf",
    family: "SuisseIntl",
    weight: 300,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Ultralight.otf",
    family: "SuisseIntl",
    weight: 200,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-UltralightItalic.otf",
    family: "SuisseIntl",
    weight: 200,
  },
  {
    format: "opentype",
    url: "/fonts/SuisseIntl-Thin.otf",
    family: "SuisseIntl",
    weight: 100,
  },
  {
    format: "opentype",
    italic: true,
    url: "/fonts/SuisseIntl-ThinItalic.otf",
    family: "SuisseIntl",
    weight: 100,
  },
]
  .map(createFontFace)
  .join("");
