import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Rithika Velmurugan. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
