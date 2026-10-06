// Pages written in Simplified Chinese; every other page is English.
const zhPages = new Set(["/services/china-malaysia-desk/zh"]);

export function pageLanguage(pathname: string) {
  return zhPages.has(pathname) ? "zh-Hans" : "en";
}
