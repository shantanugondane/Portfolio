"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function ProjectDetail() {
  const params = useParams();
  const { slug } = params;

  return (
    <div style={{ padding: '3rem 6vw' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem' }}>
        {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>
      <p>It&apos;s a nice day!</p>
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
    </div>
  );
} 