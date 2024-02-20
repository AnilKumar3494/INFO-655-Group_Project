import React from "react";
import "./contact.css";
import { MdAttachEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  //data for contact / get in touch part
  const contactOption = [
    {
      icon: <MdAttachEmail />,
      title: "e-mail",
      href: "mailto: our email",
      message: "Send a message",
    },
    {
      icon: <FaGithubSquare />,
      title: "GitHub",
      href: "our GitHub URL",
      message: "Check my profile",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      href: "our linkedin url",
      message: "Know more!",
    },
  ];

  //Data for form
  const formOptions = [
    {
      type: "text",
      name: "name",
      placeholder: "Your Good Name",
    },
    {
      type: "email",
      name: "email",
      placeholder: "e-mail: example@domain.com",
    },
  ];

  //Front end
  return (
    <section id="contact" className="contact_container">
      <h4>Get in Touch</h4>
      <h2>Contact Me</h2>
      <div id="contact_options" className="contact_section_main">
        {/* Get in touch part Start */}
        <div className="contact_options">
          {contactOption.map((option, index) => (
            <article className="contact_option" key={index}>
              <div className="website">
                <a className="icon" href="">
                  {option.icon}
                </a>
              </div>

              <a href={option.href}>
                {index === 0 ? option.href.split(":")[1] : option.href}
              </a>
              <br />

              <a href={option.href}>{option.message}</a>
            </article>
          ))}
        </div>

        {/* Get in touch part END*/}

        {/* Form Start */}
        <form action="">
          {formOptions.map((formOption, index) => (
            <div className="inputs_container">
              <input
                key={index}
                type={formOption.type}
                placeholder={formOption.placeholder}
                required
              />
            </div>
          ))}
          <textarea
            name="message"
            rows="7"
            placeholder="Leave your thoughts"
          ></textarea>
          <button type="submit" className="btn btn_primary">
            Click to Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
