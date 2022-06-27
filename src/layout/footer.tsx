import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const externalLinks = [
  {
    href: "https://github.com/progmatic-99/Sparkize",
    name: "GitHub",
  },
  { href: "/", name: "Blog" },
];

const Footer: NextPage = () => {
  return (
    <footer className="footer p-10 text-neutral-content bg-black">
      <div>
        <span className="footer-title">Support</span>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Community</span>
        <a
          href="https://github.com/progmatic-99/Sparkize"
          target="_blank"
          className="link link-hover"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="/"
          target="_blank"
          className="link link-hover"
          rel="noopener noreferrer"
        >
          Blog
        </a>
      </div>
      <div className="h-300 w-300">
        <Image
          src="/logo.svg"
          width="200px"
          height="254px"
          alt="Sparkize logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
