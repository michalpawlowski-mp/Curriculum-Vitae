import Github from "/icons/github.svg";
import Email from "/icons/mail.svg";
import Phone from "/icons/phone.svg";
import Website from "/icons/website.svg";
import Linkedin from "/icons/linkedin.svg";

const Contact = () => {
  return (
    <address>
      <ul className="d-flex flex-column m-0 p-0 list-unstyled">
        <li>
          <a
            href="mailto:kontakt@pawlowskimichal.pl"
            className="border-bottom mx-1 py-2 px-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex align-items-center"
          >
            <img src={Email} width={16} height={16} alt="Email icon" />
            <span className="ms-1">kontakt@pawlowskimichal.pl</span>
          </a>
        </li>
        <li>
          <a
            href="tel:+48728117024"
            className="border-bottom mx-1 py-2 px-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex align-items-center"
          >
            <img src={Phone} width={16} height={16} alt="Phone icon" />
            <span className="ms-1">+48 728 117 024</span>
          </a>
        </li>
        <li>
          <a
            href="https://pawlowskimichal.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-bottom mx-1 py-2 px-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex align-items-center"
          >
            <img src={Website} width={16} height={16} alt="Website icon" className="invert" />
            <span className="ms-1">pawlowskimichal.pl</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michalpawlowski-mp/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-bottom mx-1 py-2 px-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex align-items-center"
          >
            <img src={Linkedin} width={16} height={16} alt="LinkedIn icon" />
            <span className="ms-1">/michalpawlowski-mp</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/michalpawlowski-mp"
            target="_blank"
            rel="noopener noreferrer"
            className="border-bottom mx-1 py-2 px-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex align-items-center"
          >
            <img src={Github} width={16} height={16} alt="GitHub icon" />
            <span className="ms-1">/michalpawlowski-mp</span>
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Contact;
