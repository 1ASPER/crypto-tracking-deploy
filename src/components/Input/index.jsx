import './index.css';

export function Input(props) {
  const {
    type = "text",
    placeholder = "",
    value,
    onChange,
    disabled = false,
    label = "",
    danger = false,
  } = props;

  const inputClasses = `my-input ${danger ? 'my-input--danger' : ''}`;
  const labelClasses = `my-input-label ${danger ? 'my-input-label--danger' : ''}`;

  return (
    <div className="my-input-container">
      {label && <label className={labelClasses}>{label}</label>}

      <input
        className={inputClasses}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled} />
    </div>
  );
}