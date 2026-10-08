export function pageLanguage(pathname: string) {
  if (pathname.split("?")[0] === "/privacy-policy/ms") return "ms";
  return pathname.startsWith("/zh") || pathname === "/services/china-malaysia-desk/zh" ? "zh-Hans" : "en";
}
