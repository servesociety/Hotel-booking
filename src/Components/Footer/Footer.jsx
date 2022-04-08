import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2> Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> testing.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/manikandan-ayyasamy-csm%C2%AE-1a30076/"
        >
          Manikandan A
        </a>
      </p>
    </footer>
  );
}
