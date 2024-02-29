import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"

// globalImport({
//   url: 'url(https://fonts.googleapis.com/css2?family=Inter&display=swap)'
// });

globalStyle("body", {
  margin: 0,
  fontFamily: theme.fonts.text,
  color: theme.colors.text,
  backgroundColor: theme.colors.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})

globalStyle("*", {
  boxSizing: "border-box",
})

globalStyle(".color-header", {
    gap: "20px",
    display: "flex",
    flexWrap: "wrap",
})

globalStyle(".color-column", {
  display: "flex",
  flexDirection: "column",
  lineHeight: "normal",
  marginLeft: "0px",
})

globalStyle(".color-box", {
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
})

globalStyle(".color", {
  color: "#000",
  font: "400 18px Buenos Aires, -apple-system, Roboto, Helvetica, sans-serif",
})

globalStyle(".color-0068FF", {
  backgroundColor: "#0068ff",
  display: "flex",
  marginTop: "18px",
  height: "113px",
  width: "113px",
  flexDirection: "column",
})

globalStyle(".color-1E1E1E", {
  backgroundColor: "#1E1E1E",
  display: "flex",
  marginTop: "18px",
  height: "113px",
  width: "113px",
  flexDirection: "column",
})

globalStyle(".color-E2E2E2", {
  backgroundColor: "#E2E2E2",
  display: "flex",
  marginTop: "18px",
  width: "113px",
  height: "113px",
  flexDirection: "column",
})

globalStyle(".color-CCB4FB", {
  backgroundColor: "#CCB4FB",
  display: "flex",
  marginTop: "18px",
  height: "113px",
  width: "113px",
  flexDirection: "column",
})

globalStyle(".color-C4F000", {
  backgroundColor: "#C4F000",
  display: "flex",
  marginTop: "18px",
  height: "113px",
  width: "113px",
  flexDirection: "column",
})

globalStyle(".wp-block-columns", {
  alignItems: "normal!important",
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
})

globalStyle(".wp-block-columns", {
  "@media": {
    "(min-width: 782px)": {
      flexWrap: "nowrap"
    }
  },
});

globalStyle(".wp-block-columns.are-vertically-aligned-top", {
  alignItems: "flex-start",
})

globalStyle(".wp-block-columns.are-vertically-aligned-center", {
  alignItems: "center",
})

globalStyle(".wp-block-columns.are-vertically-aligned-bottom", {
  alignItems: "flex-end",
})

globalStyle(".wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column", {
  "@media": {
    "(max-width: 781px)": {
      flexBasis: "100%",
    }
  }
})

globalStyle(".wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column", {
  "@media": {
    "(min-width: 782px)": {
      flexBasis: 0,
        flexGrow: 1,
    }
  }
})

globalStyle(".wp-block-columns:not(.is-not-stacked-on-mobile)>.wp-block-column[style*=flex-basis]", {
  flexGrow: 0,
})

globalStyle(".wp-block-columns.is-not-stacked-on-mobile", {
  flexWrap: "nowrap",
})

globalStyle(".wp-block-columns.is-not-stacked-on-mobile>.wp-block-column", {
  flexBasis: 0,
  flexGrow: 1,
})

globalStyle(".wp-block-columns.is-not-stacked-on-mobile>.wp-block-column[style*=flex-basis]", {
  flexGrow: 0,
})

globalStyle(":where(.wp-block-columns)", {
  marginBottom: "1.75em",
})

globalStyle(":where(.wp-block-columns.has-background)", {
  padding: "1.25em 2.375em",
})

globalStyle(".wp-block-column", {
  flexGrow: 1,
  minWidth: 0,
  overflowWrap: "break-word",
  wordBreak: "break-word",
})

globalStyle(".wp-block-column.is-vertically-aligned-top", {
  alignSelf: "flex-start",
})

globalStyle(".wp-block-column.is-vertically-aligned-center", {
  alignSelf: "center",
})

globalStyle(".wp-block-column.is-vertically-aligned-bottom", {
  alignSelf: "flex-end"
})

globalStyle(".wp-block-column.is-vertically-aligned-stretch", {
  alignSelf: "stretch",
})

globalStyle(".wp-block-column.is-vertically-aligned-bottom,.wp-block-column.is-vertically-aligned-center,.wp-block-column.is-vertically-aligned-top", {
  width: "100%",
})

globalKeyframes("zoomInUp", {
  "0%": {
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    transform: "scale(1), translateY(0) translateX(-50%)",
    visibility: "visible",
  },
})

globalKeyframes("zoomOutDown", {
  "0%": {
    transform: "scale(1) translateY(0) translateX(-50%)",
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
  },
})

globalKeyframes("fadeIn", {
  "0%": {
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    visibility: "visible",
  },
})

globalKeyframes("fadeOut", {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    visibility: "hidden",
  },
})
