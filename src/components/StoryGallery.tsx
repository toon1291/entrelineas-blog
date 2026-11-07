import type { Illustration } from '@/data/blog';

interface StoryGalleryProps {
  images: Illustration[];
}

export default function StoryGallery({ images }: StoryGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="story-gallery" aria-label="Galería del cuento">
      <div className="story-gallery-grid">
        {images.map((image, index) => (
          <figure className="gallery-card" key={image.src}>
            <a
              className="gallery-image-link"
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ilustración: ${image.caption}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={1024}
                height={1536}
              />

              <span className="gallery-open">
                Ver completa ↗
              </span>
            </a>

            <figcaption>
              <span className="gallery-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span>{image.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="gallery-credit">
        Ilustraciones inspiradas en el relato.
      </p>
    </section>
  );
}