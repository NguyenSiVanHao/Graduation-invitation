import { useEffect, useRef } from 'react';

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const closeBtnRef = useRef(null);

  const currentImage = images[currentIndex];

  useEffect(() => {
    // Focus close button on mount
    closeBtnRef.current?.focus();

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!currentImage) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="lightbox-content">
        {/* Nút đóng */}
        <button
          ref={closeBtnRef}
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Đóng xem ảnh"
        >
          ✕
        </button>

        {/* Nút lùi */}
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Ảnh trước"
          >
            ‹
          </button>
        )}

        {/* Khung ảnh */}
        <div className="lightbox-img-wrapper">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="lightbox-img"
          />
        </div>

        {/* Nút tiến */}
        {images.length > 1 && (
          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Ảnh kế tiếp"
          >
            ›
          </button>
        )}

        {/* Chú thích & Bộ đếm */}
        <div className="lightbox-caption-box">
          <p className="lightbox-caption-text">{currentImage.caption}</p>
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
