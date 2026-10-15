/**
 * CENTRALIZED SITE CONFIG
 * -----------------------
 * Edit ONLY this file to wire up real blockchain / social URLs.
 * Every component reads from here, so placeholders stay consistent.
 *
 * Convention:
 * - Leave a value as "" or null when not yet available.
 * - UI will automatically show "COMING SOON" / disabled states.
 */

export const SITE = {
  name: "CHAOS HOOK",
  symbol: "$CHAOS",
  tokenName: "Chaos Hook",
  tagline: "HOOK INTO THE CHAOS.",
  description:
    "An experimental corner of Web3 where unpredictability meets onchain culture.",
  url: "https://chaoshook.example.com", // TODO: replace with production domain
} as const;

export const TOKEN = {
  symbol: "$CHAOS",
  name: "Chaos Hook",
  // e.g. "Ethereum" | "Base" | "Solana" — keep empty until confirmed
  blockchain: "" as string,
  // EVM 0x... or Solana base58 — keep empty until verified
  contractAddress: "" as string,
  totalSupply: "" as string,
  decimals: "" as string,
  // Set to real URLs when live. Empty = disabled + placeholder UI.
  explorerUrl: "" as string,
  chartUrl: "" as string,
  buyUrl: "" as string,
} as const;

export const SOCIALS = {
  xUrl: "" as string, // e.g. https://x.com/chaoshook
  telegramUrl: "" as string, // e.g. https://t.me/chaoshook
  communityUrl: "" as string, // e.g. Discord / forum / linktree
  docsUrl: "" as string,
  privacyUrl: "" as string,
} as const;

export const isConfigured = (v: string | undefined | null) =>
  typeof v === "string" && v.trim().length > 0 && !v.includes("example.com");

export const PLACEHOLDERS_NEEDED = [
  "Blockchain (TOKEN.blockchain)",
  "Contract address (TOKEN.contractAddress)",
  "Total supply (TOKEN.totalSupply)",
  "Explorer URL (TOKEN.explorerUrl)",
  "Chart URL (TOKEN.chartUrl)",
  "Buy URL (TOKEN.buyUrl)",
  "X URL (SOCIALS.xUrl)",
  "Telegram URL (SOCIALS.telegramUrl)",
  "Community URL (SOCIALS.communityUrl)",
  "Production domain (SITE.url)",
] as const;
