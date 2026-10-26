import { useState, useEffect, useRef } from 'react';
import { fireConfetti } from '../utils/confetti';

export function NameEntryModal({ isOpen, initialName, onSave, onClose }) {
  const [name, setName] = useState(initialName || '');
  const [error, setError] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const inputRef = useRef(null);

  // Sync state during render when modal opens (official React pattern)
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setName(initialName || '');
      setError('');
      setIsClosing(false);
    }
  }

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      setError('Vui lòng nhập tên của bạn để tiếp tục nhé!');
      inputRef.current?.focus();
      return;
    }

    if (trimmed.length < 2) {
      setError('Tên của bạn hơi ngắn, vui lòng nhập ít nhất 2 ký tự nhé!');
      inputRef.current?.focus();
      return;
    }

    // Trigger closing animation first, then save
    setIsClosing(true);
    fireConfetti();
    setTimeout(() => {
      onSave(trimmed);
      setIsClosing(false);
    }, 380);
  };

  const handleClose = () => {
    if (initialName) {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  };

  return (
    <div
      className={`modal-overlay ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-invitation-title"
      onClick={(e) => {
        // Close if clicking outside and an initial name already exists
        if (e.target === e.currentTarget && initialName) {
          handleClose();
        }
      }}
    >
      <div className={`modal-poster ${isClosing ? 'closing' : ''}`}>
        <div className="modal-decorative-stripe" />
        <div className="modal-watermark" aria-hidden="true">
          FPT
        </div>

        {/* Close button only available if user already has an active guest name */}
        {initialName && (
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleClose}
            aria-label="Đóng cửa sổ"
          >
            ✕
          </button>
        )}

        <div className="modal-header">
          <div className="section-badge badge-orange-light">
            <span>★</span> A SPECIAL INVITATION
          </div>
          <h2 id="modal-invitation-title" className="modal-title">
            Có một lời mời <br />
            <span className="highlight-orange">dành riêng cho bạn.</span>
          </h2>
          <p className="modal-subtitle">
            Nhập tên của bạn để mở tấm thiệp tốt nghiệp này nhé!
          </p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="guest-name-input" className="input-label">
              Tên hoặc biệt danh của bạn
            </label>
            <input
              id="guest-name-input"
              ref={inputRef}
              type="text"
              className={`name-input ${error ? 'has-error' : ''}`}
              placeholder="Ví dụ: Nguyễn Minh Anh"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError('');
              }}
              autoComplete="name"
              maxLength={40}
              aria-invalid={!!error}
              aria-describedby={error ? 'name-input-error' : undefined}
            />
            {error && (
              <p id="name-input-error" className="error-message" role="alert">
                <span>⚠️</span> {error}
              </p>
            )}
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            <span>{initialName ? 'LƯU TÊN MỚI' : 'MỞ THƯ MỜI'}</span>
            <span className="btn-arrow">↗</span>
          </button>
        </form>

        <p className="modal-footer-note">
          {initialName
            ? 'Thay đổi này sẽ cập nhật ngay lập tức trên toàn bộ thư mời.'
            : 'Tấm thiệp sẽ được cá nhân hóa riêng với tên của bạn.'}
        </p>
      </div>
    </div>
  );
}
