import './Backdrop.css';

/** Site-wide atmosphere: neon strips, red glow, light rays, grain, vignette. Rendered once in Layout. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <div className="backdrop__glow" />
      <div className="backdrop__rays" />
      <div className="backdrop__neon backdrop__neon--l" />
      <div className="backdrop__neon backdrop__neon--r" />
      <svg className="backdrop__grain" width="100%" height="100%">
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" /><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 0" /></filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div className="backdrop__vignette" />
    </div>
  );
}
