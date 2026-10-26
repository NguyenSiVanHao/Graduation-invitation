export function InvitationSection({ config, guestName }) {
  const salutation = config.invitationLetter.salutation(guestName || 'Bạn');

  return (
    <section
      className="invitation-section"
      id="invitation-letter"
      aria-label="Thư mời chi tiết"
    >
      <div className="section-container">
        <div className="editorial-container">
          <div className="invitation-header">
            <div className="section-badge badge-orange-light">
              01 / LỜI MỜI
            </div>
            <h2 className="section-title-huge">
              Một ngày đặc biệt. <br />
              <span className="highlight-orange">Mình muốn có bạn ở đó.</span>
            </h2>
          </div>

          <div className="invitation-card">
            <div className="quote-decor" aria-hidden="true">
              “
            </div>

            <div className="invitation-body">
              <p className="invitation-salutation">{salutation}</p>

              <p>{config.invitationLetter.p1}</p>

              <p className="invitation-highlight">
                {config.invitationLetter.p2}{' '}
                <span>{config.invitationLetter.p3}</span>
              </p>

              <p>{config.invitationLetter.p4}</p>
            </div>

            <div className="invitation-closing">
              <div className="invitation-signature-block">
                <div className="invitation-sign-off">
                  {config.invitationLetter.closing}
                </div>
                <div className="invitation-sign-name">
                  {config.studentName}
                </div>
                <div className="invitation-sign-degree">
                  {config.major}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
