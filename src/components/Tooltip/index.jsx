import './index.css';

export function Tooltip(props) {
  const { text, position = 'top', children } = props;

  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip-text tooltip-text--${position}`}>{text}</span>
    </div>
  );
}
