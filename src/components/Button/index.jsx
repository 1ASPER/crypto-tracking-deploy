import "./index.css";

export function Button(props) {

    // size = "small" | "medium" | "large"
    // variant = "primary" | "bordered"

    const { children, variant = "primary", size = "medium" } = props;
    const className = `my-button my-button--${variant} my-button--${size}`;

    return (
        <button className={className}>{children}</button>
    );
}

