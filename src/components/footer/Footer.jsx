import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section class="footer">
      <div
        class="back-to-top flex-col-center"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-double-up back-to-top"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
          />
        </svg>
        <p class="back-to-top">BACK TO TOP</p>
      </div>

      <p>Site designed and coded with {"<"}3</p>
    </section>
  );
}
