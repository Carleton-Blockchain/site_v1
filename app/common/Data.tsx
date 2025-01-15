"use client";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/carleton-blockchain/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/carletonbchain",
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 20 22" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "X",
  },
  {
    href: "https://www.instagram.com/carletonblockchain/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://discord.gg/9FgYbBfhK2",
    icon: FaDiscord,
    label: "Discord",
  },
];
