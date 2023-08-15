import Link from "next/link";
import React from "react";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  var currentYear = new Date().getFullYear();
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-orange-600 md:flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        Pizzaria
      </Link>
      <p>
        © {currentYear}&nbsp;
        <ExternalLink
          className="font-semibold"
          href="https://www.linkedin.com/in/azminsara17/"
          target="_blank"
        >
          Sara Azmin
        </ExternalLink>
        &nbsp;| All rights Reserved
      </p>
    </div>
  );
};

export default Footer;
