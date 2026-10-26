export function HeroSection({ config, guestName }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="Phần mở đầu thư mời tốt nghiệp">
      <div className="section-container">
        <div className="hero-grid">
          {/* Cột trái: Typography & Nội dung cá nhân hóa */}
          <div className="hero-content">
            <div className="hero-top-ticker">
              <span className="ticker-tag">FPT UNIVERSITY</span>
              <span className="ticker-bullet" aria-hidden="true">•</span>
              <span className="ticker-year">GRADUATION {config.graduationYear}</span>
            </div>

            <h1 className="hero-headline">
              <span className="headline-row">CHƯƠNG MỚI</span>
              <span className="headline-row highlight-orange">BẮT ĐẦU.</span>
            </h1>

            <p className="hero-tagline">{config.tagline}</p>

            <div className="hero-personal-card">
              <div className="hero-salutation">
                <span>Gửi</span>
                <span className="guest-name-badge">
                  {guestName || 'Người bạn trân quý'}
                </span>
                <span>,</span>
              </div>
              <p className="hero-intro-text">
                Ngày mình chính thức khép lại một chặng đường thanh xuân tại{' '}
                <strong>Đại học FPT</strong> đang đến gần. Và mình muốn chia sẻ khoảnh
                khắc đặc biệt ấy cùng những người đã làm cho hành trình này trở nên ý
                nghĩa. Nên mời mấy ní iu đến tham gia với tui nghen.
              </p>
            </div>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollTo('invitation-letter')}
              >
                <span>KHÁM PHÁ THƯ MỜI</span>
                <span className="btn-arrow">↓</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => scrollTo('event-details')}
              >
                <span>THÔNG TIN BUỔI LỄ</span>
                <span className="btn-arrow">↗</span>
              </button>
            </div>
          </div>

          {/* Cột phải: Khung ảnh poster tốt nghiệp với góc xoay nghệ thuật */}
          <div className="hero-visual">
            <div className="hero-poster-frame">
              {/* Mảng nền cam nghiêng tạo chiều sâu */}
              <div className="hero-backdrop-block" aria-hidden="true" />

              {/* Con dấu tròn kỷ niệm Orange Energy */}
              <div className="hero-stamp" aria-hidden="true">
                <span className="hero-stamp-text">ORANGE ENERGY</span>
                <span className="hero-stamp-year">{config.graduationYear}</span>
              </div>

              {/* Khung ảnh chính */}
              <div className="hero-img-container">
                <img
                  src="/images/hero-graduate.PNG"
                  alt={`Tân cử nhân ${config.studentName} tốt nghiệp Đại học FPT`}
                  className="hero-img"
                  loading="eager"
                />
              </div>

              {/* Badge nổi góc dưới */}
              <div className="hero-floating-badge">
                <span className="badge-dot" aria-hidden="true" />
                <span className="floating-badge-text">A DAY TO REMEMBER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
