import CrtPanel from './CrtPanel';

/** Temporary page body. Each owner replaces it with the real page. */
export default function Placeholder({ title, owner, todo = [] }) {
  return (
    <div className="page container">
      <CrtPanel>
        <p className="mono" style={{ color: 'var(--c-red-300)' }}>&gt; OWNER: {owner}</p>
        <h1 style={{ margin: 'var(--s-3) 0' }}>{title}</h1>
        <ul className="mono" style={{ color: 'var(--c-red-300)', paddingLeft: 'var(--s-5)' }}>
          {todo.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </CrtPanel>
    </div>
  );
}
