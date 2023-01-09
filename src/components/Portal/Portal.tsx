import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import { PortalInterface } from "./iPortal";

const Portal = ({ children, inlineStyles }: PortalInterface) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    if (inlineStyles) {
      inlineStyles.forEach(style => {
        container.style.setProperty(style.property, style.value);
      });
    }

    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};


export default Portal;
