import { useState } from 'react';
import { Lightbox } from './Lightbox';

export function GraduationGallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Helper classes for editorial collage layout
  const getCardLayoutClass = (index) => {
    switch (index) {
      case 0:
        return 'featured-large';
      case 1:
        return 'featured-tall';
      case 2:
        return 'item-small-left';
      case 3:
        return 'item-small-right';
      default:
        return 'featured-large';
    }
  };

  return (
    <section
      className="gallery-section"
      id="gallery"
      aria-label="Thư viện ảnh kỷ niệm tốt nghiệp"
    >
      <div className="section-container">
        <div className="gallery-header">
          <div className="section-badge badge-orange-light">
            03 / NHỮNG KHOẢNH KHẮC
          </div>
          <h2 className="section-title-huge">
            Thanh xuân <br />
            <span className="highlight-orange">đã có những ngày như thế.</span>
          </h2>
          <p className="gallery-subtitle">
            Một vài mảnh ghép làm nên hành trình của mình.
          </p>
        </div>

        {/* Editorial Collage Grid */}
        <div className="gallery-editorial-grid">
          {images.map((item, index) => (
            <div
              key={item.id || index}
              className={`gallery-card ${getCardLayoutClass(index)}`}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Xem ảnh: ${item.caption || item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
              />

              <div className="gallery-card-overlay">
                <span className="gallery-overlay-tag">{item.tag}</span>
                <div>
                  <p className="gallery-overlay-caption">{item.caption}</p>
                  <span className="gallery-zoom-hint">
                    <span>Phóng to</span> ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
