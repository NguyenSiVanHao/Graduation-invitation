import { useState, useCallback } from 'react';

const STORAGE_KEY = 'fpt_graduation_guest_name';

function getInitialGuestName() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const item = window.localStorage.getItem(STORAGE_KEY);
      if (item && item.trim()) {
        return item.trim();
      }
    }
  } catch (error) {
    console.warn('LocalStorage không khả dụng hoặc bị chặn:', error);
  }
  return '';
}

/**
 * Custom hook quản lý tên khách mời và trạng thái NameEntryModal
 */
export function useGuestName() {
  const [guestName, setGuestName] = useState(getInitialGuestName);
  const [isModalOpen, setIsModalOpen] = useState(() => !getInitialGuestName());

  // Lưu tên mới (hoặc chỉnh sửa tên)
  const saveGuestName = useCallback((newName) => {
    const trimmed = (newName || '').trim();
    if (!trimmed) {
      return { success: false, error: 'Vui lòng nhập tên của bạn nhé!' };
    }

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, trimmed);
      }
    } catch (error) {
      console.warn('Không thể lưu vào LocalStorage:', error);
    }

    setGuestName(trimmed);
    setIsModalOpen(false);
    return { success: true };
  }, []);

  // Mở modal (khi nhấn "Đổi tên người nhận")
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  // Đóng modal (chỉ đóng được nếu đã có tên hợp lệ)
  const closeModal = useCallback(() => {
    if (guestName && guestName.trim()) {
      setIsModalOpen(false);
      return true;
    }
    return false;
  }, [guestName]);

  return {
    guestName,
    isModalOpen,
    saveGuestName,
    openModal,
    closeModal,
  };
}
