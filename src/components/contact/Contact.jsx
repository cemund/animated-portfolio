import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";

export default function Contact() {
  const form = useRef();
  const service_id = "service_sinab2a";
  const template_id = "template_kpwoecl";
  const public_key = "g5LoQNxQ3kFN4T4jI";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setBody("");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <section class="contact" id="contact">
      <form ref={form} class="grid form" onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Name"
          class="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          name="from_name"
        />
        <input
          type="email"
          placeholder="Email"
          class="input-email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          name="from_email"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          class="message"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
        ></textarea>
        <div class="send-message">
          <button type="submit" class="btn">
            Send Message
          </button>
        </div>
        <h1 class="contact-me">Contact Me</h1>
        <div class="email">
          <img
            src="./gmail-light.svg"
            alt="gmail icon"
            height="32px"
            class="email-icon"
          />
          <p>cemund36@gmail.com</p>
        </div>
        <div class="address">
          <img
            src="./flag-philippines.svg"
            alt="philippine flag"
            height="32"
            class="address-icon"
          />
          <p class="inline">Bulacan, Philippines</p>
        </div>
      </form>
    </section>
  );
}
