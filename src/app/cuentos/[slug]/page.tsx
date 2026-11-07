import StoryGallery from '@/components/StoryGallery';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { stories, members, dateLabel } from '@/data/blog';
import {
  ArrowLeft,
  ArrowUpRight,
  Headphones,
} from 'lucide-react';

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StoryPage({
  params,
}: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const member = members.find(
    (item) => item.id === story.authorId,
  );

  if (!member) {
    notFound();
  }

  return (
    <main id="main" className="article section">
      <Link href="/#biblioteca" className="text-link">
        <ArrowLeft size={16} />
        Volver a la biblioteca
      </Link>

      <header className="article-header">
        <div className="eyebrow purple">
          {story.collection} ·{' '}
          {story.status === 'draft' ? 'BORRADOR' : 'PUBLICACIÓN'}
        </div>

        <h1>{story.title}</h1>

        <p className="lead">{story.excerpt}</p>

        <Link href={`/integrantes/${member.id}`}>
          {member.name}
        </Link>

        <p className="muted">
          {story.publishedAt
            ? `Publicado: ${dateLabel(story.publishedAt)}`
            : `Sin publicar · Fecha prevista: ${dateLabel(
                story.plannedDate,
              )}`}
        </p>
      </header>

      <div className="article-grid">
        <div>
          <section className="reading">
            <h2>La historia detrás del cuento</h2>

            <p>
              <b>Autor literario:</b> {story.literaryAuthor}
            </p>

            <p>
              <b>Nombre original:</b> {story.originalTitle}
            </p>

            <p>
              <b>Colección:</b> {story.collection}
            </p>

            <p>
              <b>Año de escritura:</b> {story.written}
            </p>

            <h2>El relato, en pocas palabras</h2>

            {story.summary.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <h2>Quiénes habitan esta historia</h2>

            {story.characters.map((character) => (
              <p key={character.name}>
                <b>{character.name}.</b>{' '}
                {character.description}
              </p>
            ))}

            <h2>Tres ideas que nos llevamos</h2>

            <p className="muted">
              Interpretaciones del equipo a partir de la lectura.
            </p>

            {story.lessons.map((lesson, index) => (
              <div className="lesson" key={index}>
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{lesson}</p>
              </div>
            ))}

            <h2>Ilustraciones de la obra</h2>

            {story.illustrations &&
            story.illustrations.length > 0 ? (
              <StoryGallery images={story.illustrations} />
            ) : story.illustration ? (
              <figure>
                <img
                  className="story-image"
                  src={story.illustration}
                  alt={story.illustrationAlt}
                  loading="lazy"
                />

                <figcaption>
                  {story.illustrationAlt}
                </figcaption>
              </figure>
            ) : (
              <p className="notice">
                Las ilustraciones de este cuento estarán
                disponibles próximamente.
              </p>
            )}

            <h2>Fuentes y lectura</h2>

            <ul>
              {story.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label} ↗
                  </a>
                </li>
              ))}
            </ul>

            <p className="notice">
              Nota de contenido: el relato aborda infidelidad,
              violencia y abuso de poder. Se presenta sin detalles
              gráficos y con una lectura crítica de sus prejuicios.
            </p>
          </section>
        </div>

        <aside>
          <div className="audio-panel">
            <Headphones size={27} />

            <h3>Escucha la historia</h3>

            <p>La misma información, solo con voz.</p>

            {story.audio ? (
              <audio
                controls
                preload="metadata"
                src={story.audio}
              >
                Tu navegador no admite audio.
              </audio>
            ) : (
              <span className="pill">
                Grabación pendiente
              </span>
            )}

            <p className="muted">
              Sin música, sin video. Una voz y un relato.
            </p>
          </div>

          <div className="audio-panel">
            <h3>Un lugar en tu biblioteca</h3>

            <p>
              Encuentra la obra en Librerías El Sótano.
              Revisa edición y disponibilidad en su catálogo.
            </p>

            <a
              href={story.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Consultar libro
              <ArrowUpRight size={17} />
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}