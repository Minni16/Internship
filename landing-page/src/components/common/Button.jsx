import { Link } from 'react-router-dom';
// so the button can act like a navigation link if needed.

const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-colors cursor-pointer';
const buttonClasses = `${baseClasses} bg-[#0A7D40] text-white hover:bg-[#086e39] px-4 py-2 text-sm`;

export default function Button({ children, to, onClick, type = 'button', fullWidth = false, className = '', ...props }) {
  const classes = [buttonClasses, fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}