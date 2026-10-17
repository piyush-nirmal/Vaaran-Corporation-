// Hook to detect the secret "Three Shift Click" admin activation
// Triggers on:
// 1. Shift key held + 3 clicks within 2.5 seconds
// 2. 3 consecutive presses of the Shift key within 1 second
// 3. Ctrl + Shift + A shortcut

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAdminShortcut() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Track shift key presses
  const shiftKeyTimes = useRef<number[]>([]);
  // Track shift + click events
  const shiftClickTimes = useRef<number[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Check for 3 consecutive Shift presses
      if (e.key === 'Shift') {
        const now = Date.now();
        shiftKeyTimes.current = [...shiftKeyTimes.current.filter((t) => now - t < 1200), now];

        if (shiftKeyTimes.current.length >= 3) {
          shiftKeyTimes.current = [];
          triggerAdminAccess();
        }
      }

      // 2. Direct shortcut Ctrl + Shift + A
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        triggerAdminAccess();
      }
    };

    const handleClick = (e: MouseEvent) => {
      // 3. Three Shift-Clicks: user holds Shift and clicks 3 times
      if (e.shiftKey) {
        const now = Date.now();
        shiftClickTimes.current = [...shiftClickTimes.current.filter((t) => now - t < 2000), now];

        if (shiftClickTimes.current.length >= 3) {
          shiftClickTimes.current = [];
          triggerAdminAccess();
        }
      }
    };

    const triggerAdminAccess = () => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        navigate('/admin');
      }, 700);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return { showToast };
}
