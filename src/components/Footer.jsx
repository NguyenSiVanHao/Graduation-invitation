export function Footer({ config, guestName, onOpenNameModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-title">
              FPT UNIVERSITY · GRADUATION {config.graduationYear}
            </div>
            <div className="footer-brand-tagline">
              Được tạo nên để lưu giữ một cột mốc thanh xuân đáng nhớ.
            </div>
          </div>

          <div className="footer-actions">
            <button
              type="button"
              className="footer-btn"
              onClick={onOpenNameModal}
              title="Đổi tên người nhận trên thư mời"
            >
              <span>Đổi tên người nhận</span>
            </button>

            <button
              type="button"
              className="footer-btn"
              onClick={scrollToTop}
              title="Cuộn lên đầu trang"
            >
              <span>Lên đầu trang</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-guest-indicator">
            <span className="guest-indicator-dot" aria-hidden="true" />
            <span>
              Thư mời đang hiển thị dành cho:{' '}
              <strong style={{ color: 'var(--color-white)' }}>
                {guestName || 'Khách quý'}
              </strong>
            </span>
          </div>

          <div className="footer-credits">
            <span>{config.studentName} — {config.batch}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
