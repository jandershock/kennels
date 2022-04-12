import { useEffect, useState } from "react"
import * as ReactDOM from "react-dom";

export const Portal = ({children, className = "modal-root", el = 'div'}) => {
    const [container] = useState(() => {
        return document.createElement(el);
    });

    useEffect(() => {
        container.classList.add(className);
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return ReactDOM.createPortal(children, container);
}