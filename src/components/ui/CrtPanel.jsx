import './CrtPanel.css';

/** The framed retro-monitor screen with scanlines. Wrap any content (timeline, form, terminal text). */
export default function CrtPanel({ className = '', children, ...rest }) {
  return (
    <div className={`crt ${className}`.trim()} {...rest}>
      <div className="crt__scan" aria-hidden="true" />
      <div className="crt__body">{children}</div>
    </div>
  );
}
