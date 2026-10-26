import { useState, useEffect } from 'react';

export function EventDetails({ config }) {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
    isValid: false,
  });

  useEffect(() => {
    if (!config.eventDateTimeISO) return;

    const targetDate = new Date(config.eventDateTimeISO).getTime();
    if (isNaN(targetDate)) return;

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
          isValid: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
        isValid: true,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [config.eventDateTimeISO]);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Lễ Tốt Nghiệp FPT University — ${config.studentName}`);
    const details = encodeURIComponent(
      `Lễ tốt nghiệp của ${config.studentName} (${config.major}) tại Đại học FPT.\nChụp ảnh kỷ niệm: ${config.photoSessionTime}`
    );
    const location = encodeURIComponent(`${config.venue}, ${config.address}`);

    // Convert ISO to Google Calendar format: 20261115T010000Z
    try {
      const start = new Date(config.eventDateTimeISO);
      const end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // +4 hours
      const formatTime = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatTime(start)}/${formatTime(end)}&details=${details}&location=${location}`;
    } catch {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    }
  };

  return (
    <section className="event-section" id="event-details" aria-label="Thông tin buổi lễ tốt nghiệp">
      <div className="event-bg-pattern" aria-hidden="true" />
      <div className="section-container">
        <div className="event-grid">
          {/* Cột trái: Tiêu đề, Ngày lớn & Countdown Timer */}
          <div className="event-left">
            <div className="section-badge badge-white-translucent">
              02 / THÔNG TIN SỰ KIỆN
            </div>

            <h2 className="section-title-huge section-title-white">
              Hẹn gặp bạn <br />
              <span>tại ngày đặc biệt.</span>
            </h2>

            {/* Khối hiển thị ngày nổi bật */}
            <div className="event-date-hero">
              <div className="date-hero-number">{config.eventDay}</div>
              <div className="date-hero-meta">
                <span className="date-meta-month">THÁNG {config.eventMonth}</span>
                <span className="date-meta-day">{config.eventDayOfWeek}</span>
                <span className="date-meta-year">NĂM {config.eventYear}</span>
              </div>
            </div>

            {/* Countdown Timer */}
            {timeLeft.isValid && (
              <div className="countdown-wrapper">
                <div className="countdown-label">
                  {timeLeft.isExpired ? 'CỘT MỐC ĐÃ DIỄN RA' : 'ĐẾM NGƯỢC ĐẾN BUỔI LỄ'}
                </div>
                {timeLeft.isExpired ? (
                  <div className="countdown-expired">
                    🎉 Buổi lễ đã diễn ra trọn vẹn! Cảm ơn bạn đã luôn đồng hành.
                  </div>
                ) : (
                  <div className="countdown-grid">
                    <div className="countdown-box">
                      <div className="countdown-value">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="countdown-unit">NGÀY</div>
                    </div>
                    <div className="countdown-box">
                      <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="countdown-unit">GIỜ</div>
                    </div>
                    <div className="countdown-box">
                      <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="countdown-unit">PHÚT</div>
                    </div>
                    <div className="countdown-box">
                      <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="countdown-unit">GIÂY</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cột phải: Các thẻ chi tiết địa điểm, thời gian & CTAs */}
          <div className="event-info-cards">
            {/* Card Thời Gian */}
            <div className="event-card-item">
              <div className="event-card-content">
                <span className="event-card-heading">THỜI GIAN TỔ CHỨC</span>
                <span className="event-card-main">{config.eventTime}</span>
                <span className="event-card-sub">{config.eventDateFormatted}</span>
              </div>
            </div>

            {/* Card Địa Điểm */}
            <div className="event-card-item">
              <div className="event-card-content">
                <span className="event-card-heading">ĐỊA ĐIỂM CHÍNH</span>
                <span className="event-card-main">{config.venue}</span>
                <span className="event-card-sub">{config.campus}</span>
                <span className="event-card-sub">{config.address}</span>
              </div>
            </div>

            {/* Card Dresscode */}
            {config.dressCode && (
              <div className="event-card-item">
                <div className="event-card-content">
                  <span className="event-card-heading">TRANG PHỤC GỢI Ý</span>
                  <span className="event-card-sub">{config.dressCode}</span>
                </div>
              </div>
            )}

            {/* Contact */}
            {config.contactPhone && (
              <div className="event-card-item">
                <div className="event-card-content">
                  <span className="event-card-heading">LIÊN HỆ</span>
                  <span className="event-card-sub">{config.contactPhone}</span>
                  <a href={config.facebookUrl} target="_blank" rel="noopener noreferrer">
                    Bấm <strong><ins>tại đây</ins></strong> để liên hệ qua facebook
                  </a>
                </div>
              </div>
            )}

            {/* Nút hành động */}
            <div className="event-action-buttons">
              {config.mapUrl && (
                <a
                  href={config.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white"
                >
                  <span>MỞ BẢN ĐỒ</span>
                  <span className="btn-arrow">↗</span>
                </a>
              )}

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white-outline"
              >
                <span>THÊM VÀO LỊCH</span>
                <span className="btn-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
