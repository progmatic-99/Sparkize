import { NextPage } from "next";
import Image from "next/image";
import React, { useId } from "react";

const externalLinks = [
  {
    href: "https://github.com/progmatic-99/Sparkize",
    name: "GitHub",
  },
  { href: "/", name: "Blog" },
];

const Footer: NextPage = () => {
  const id = useId();

  return (
    <footer className="footer p-10 text-lg bg-black border-t border-slate-700">
      <div>
        <span className="footer-title">Support</span>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Book your parking slot!
        </a>
        <a href="/" className="link link-hover">
          Lease your parking space!
        </a>
      </div>
      <div>
        <span className="footer-title">Community</span>
        {externalLinks.map((link, index) => {
          return (
            <a
              key={`${index}-${id}`}
              href={link.href}
              target="_blank"
              className="link link-hover"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          );
        })}
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
