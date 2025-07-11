import { useParams } from 'next/navigation';

export default function ProjectDetail() {
  const params = useParams();
  const { slug } = params;

  return (
    <div style={{ padding: '3rem 6vw' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>
      <p>This is a placeholder for the {slug} project details page.</p>
    </div>
  );
} 