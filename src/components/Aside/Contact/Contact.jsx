import { contactData } from "./contact.data";

const Contact = () => {
  return (
    <address>
      <ul className="d-flex flex-column m-0 p-0 list-unstyled">
        {contactData.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="border-bottom m-1 pb-1 link-offset-2 link-underline link-underline-opacity-0 text-black d-flex"
              {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <img src={item.icon} alt={item.alt} className={item.iconClass} />
              {item.labelPrefix && <span className="web">{item.labelPrefix}</span>}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

export default Contact;
