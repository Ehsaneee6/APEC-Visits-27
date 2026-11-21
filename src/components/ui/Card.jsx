import './Card.css';

/** tone: 'default' | 'highlight' (gold, the optimal branch) | 'dim' (pruned branch). */
export default function Card({ tone = 'default', as: Tag = 'div', className = '', children, ...rest }) {
  return <Tag className={`card card--${tone} ${className}`.trim()} {...rest}>{children}</Tag>;
}
