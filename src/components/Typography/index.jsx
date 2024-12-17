import './index.css';

export function Typography(props) {
  const { textSize = 'md', className = '', children } = props;
  const typographyClasses = `typography typography--${textSize} ${className}`;

  return (
    <p className={typographyClasses}>
      {children}
    </p>
  );
}