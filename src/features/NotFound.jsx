import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="page container">
      <h1>Timeline not found</h1>
      <p style={{ margin: 'var(--s-4) 0 var(--s-5)' }}>This branch does not exist. Go back to the main timeline.</p>
      <Button to="/">Back home</Button>
    </div>
  );
}
