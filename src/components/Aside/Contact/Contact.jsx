import Email from "../../../assets/icons/email.svg";
import Phone from "../../../assets/icons/phone.svg";
import Website from "../../../assets/icons/web.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Github from "../../../assets/icons/github.svg";

const Contact = () => {
  return (
    <address>
      <ul className="d-flex flex-column m-0 p-0 list-unstyled  ">
        <li>
          <a
            href="mailto:kontakt@pawlowskimichal.pl"
            className="border-bottom m-1 pb-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex"
          >
            <img src={Email} alt="Email icon" />
            <span className="ms-1">kontakt@pawlowskimichal.pl</span>
          </a>
        </li>
        <li>
          <a
            href="tel:+48728117024"
            className="border-bottom m-1 pb-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex"
          >
            <img src={Phone} alt="Phone icon" />
            <span className="ms-1">+48 728 117 024</span>
          </a>
        </li>
        <li>
          <a
            href="https://pawlowskimichal.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-bottom m-1 pb-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex"
          >
            <img src={Website} alt="Website icon" className="invert" />
            <span className="ms-1">pawlowskimichal.pl</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michalpawlowski-mp/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-bottom m-1 pb-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex"
          >
            <img src={Linkedin} alt="LinkedIn icon" className="me-1" />
            <span className="web">linkedin.com/in</span>
            <span>/michalpawlowski-mp</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/michalpawlowski-mp"
            target="_blank"
            rel="noopener noreferrer"
            className="border-bottom m-1 pb-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex"
          >
            <img src={Github} alt="GitHub icon" className="me-1" />
            <span className="web">github.com</span>
            <span>/michalpawlowski-mp</span>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Contact;
