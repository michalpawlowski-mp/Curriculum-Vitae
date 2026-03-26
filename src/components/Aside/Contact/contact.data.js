import Email from "../../../assets/icons/email.svg";
import Phone from "../../../assets/icons/phone.svg";
import Website from "../../../assets/icons/web.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Github from "../../../assets/icons/github.svg";

export const contactData = [
  {
    href: "mailto:kontakt@michalpawlowski.pl",
    icon: Email,
    alt: "Email icon",
    label: "kontakt@michalpawlowski.pl",
    iconClass: "me-1",
  },
  {
    href: "tel:+48728117024",
    icon: Phone,
    alt: "Phone icon",
    label: "+48 728 117 024",
    iconClass: "me-1",
  },
  {
    href: "https://michalpawlowski.pl/",
    icon: Website,
    alt: "Website icon",
    label: "michalpawlowski.pl",
    iconClass: "invert me-1",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/michalpawlowski-mp/",
    icon: Linkedin,
    alt: "LinkedIn icon",
    iconClass: "me-1",
    external: true,
    labelPrefix: "linkedin.com/in",
    label: "/michalpawlowski-mp",
  },
  {
    href: "https://github.com/michalpawlowski-mp",
    icon: Github,
    alt: "GitHub icon",
    iconClass: "me-1",
    external: true,
    labelPrefix: "github.com",
    label: "/michalpawlowski-mp",
  },
];
