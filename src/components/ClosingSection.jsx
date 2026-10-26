import { fireConfetti } from '../utils/confetti';

export function ClosingSection({ guestName, config }) {
  const handleCelebrateClick = () => {
    fireConfetti();
    const eventSection = document.getElementById('event-details');
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="closing-section"
      id="closing"
      aria-label="Lời nhắn kết thúc thư mời"
    >
      <div className="closing-particles" aria-hidden="true" />
      <div className="section-container">
        <div className="closing-content">
          <div className="section-badge badge-white-translucent">
            04 / SEE YOU THERE
          </div>

          <h2 className="closing-title">
            Ngày ấy sẽ vui hơn <br />
            <span>khi có bạn.</span>
          </h2>

          <div className="closing-personal-box">
            <p className="closing-personal-text">
              <strong>{guestName || 'Bạn'}</strong> ơi, {config.studentName} rất mong
              được gặp bạn và cùng lưu giữ những bức ảnh kỷ niệm thanh xuân rực rỡ
              trong ngày lễ tốt nghiệp!
            </p>
          </div>

          <button
            type="button"
            className="btn-white closing-celebrate-btn"
            onClick={handleCelebrateClick}
          >
            <span>HẸN GẶP BẠN NHÉ!</span>
            <span className="btn-arrow">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
