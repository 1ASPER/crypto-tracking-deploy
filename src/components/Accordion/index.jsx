import "./index.css";
import { useState } from "react";

export function Accordion({ className, title = "Bababoi", defaultOpen, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => { setIsOpen(!isOpen) };

  const classes = `${className} my-accordion my-accordion--${defaultOpen ? "open" : "closed"}}`;

  return (
    <div className={classes}>
      <div className="my-accordion__header" onClick={toggleAccordion}>
        <div className="my-accordion__title">{title}</div>
        <div className="my-accordion__icon">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="my-accordion__content">{children}</div>}
    </div>
  );
}