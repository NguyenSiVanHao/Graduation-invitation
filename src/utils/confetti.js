/**
 * Helper to dispatch confetti trigger event
 */
export function fireConfetti(x, y) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('trigger-confetti', { detail: { x, y } }));
  }
}
