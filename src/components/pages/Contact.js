import React from "react";
import "../styles/style.css";
import "../styles/reset.css";

const styles = {
  ContactStyles: {
    background: "orange",
  },
};

export default function Contact() {
  return (
    <div style={styles.sectionStyles} className="contact">
      <h1>Contact Page</h1>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter name here "
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <footer>
        <ul>
          <li>
            <a href="tel:9094955391">909-495-5391 </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/markell-drake-b0957b21a/">Linkedin</a>
          </li>
          <li>
            
            <a href="https://github.com/MarkellDrake?tab=repositories">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/senryaku22">twitter</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
