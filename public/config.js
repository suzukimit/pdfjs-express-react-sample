console.log("config working!");

// not work
// SelfServeWebFontsV2 Folder is download from https://pdftron.s3.amazonaws.com/downloads/SelfServeWebFontsV2.zip
// after download, archive and move to public folder
instance.Core.setCustomFontURL("/SelfServeWebFontsV2");

// not work
Core.setCustomFontURL("/SelfServeWebFontsV2");

// external URL (public s3 folder) is not work too
Core.setCustomFontURL("https://xxxxxx.s3.amazonaws.com/SelfServeWebFontsV2");
