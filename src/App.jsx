import { useGuestName } from './hooks/useGuestName';
import { invitationConfig } from './data/invitationConfig';
import { galleryData } from './data/galleryData';

import { ConfettiCanvas } from './components/ConfettiCanvas';
import { NameEntryModal } from './components/NameEntryModal';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { EventDetails } from './components/EventDetails';
import { GraduationGallery } from './components/GraduationGallery';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';

function App() {
  const {
    guestName,
    isModalOpen,
    saveGuestName,
    openModal,
    closeModal,
  } = useGuestName();

  return (
    <div className="app-container">
      {/* Pháo giấy kỷ niệm (Confetti Canvas) */}
      <ConfettiCanvas />

      {/* Popup nhập tên khách mời */}
      <NameEntryModal
        isOpen={isModalOpen}
        initialName={guestName}
        onSave={saveGuestName}
        onClose={closeModal}
      />

      {/* Nội dung chính của thư mời */}
      <main id="main-content" className="site-main">
        {/* Hero Section — The Next Chapter */}
        <HeroSection config={invitationConfig} guestName={guestName} />

        {/* Section 01 — Lời mời dành cho bạn */}
        <InvitationSection config={invitationConfig} guestName={guestName} />

        {/* Section 02 — The Big Day (Thông tin sự kiện & Countdown) */}
        <EventDetails config={invitationConfig} />

        {/* Section 03 — Graduation Gallery (Những khoảnh khắc & Lightbox) */}
        <GraduationGallery images={galleryData} />

        {/* Section 04 — Lời nhắn cuối & Kêu gọi hội ngộ */}
        <ClosingSection guestName={guestName} config={invitationConfig} />
      </main>

      {/* Footer */}
      <Footer
        config={invitationConfig}
        guestName={guestName}
        onOpenNameModal={openModal}
      />
    </div>
  );
}

export default App;
