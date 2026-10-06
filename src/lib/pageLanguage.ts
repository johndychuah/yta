// Keep page language accurate for Chinese service copy and the Malay privacy notice.
const zhPages = new Set(["/services/china-malaysia-desk/zh"]);

export function pageLanguage(pathname: string) {
  if (pathname === "/privacy-policy/ms") return "ms";
  return zhPages.has(pathname) ? "zh-Hans" : "en";
}
