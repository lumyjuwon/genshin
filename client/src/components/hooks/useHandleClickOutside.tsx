import React, { useEffect } from 'react';

export function useHandleClickOutside(ref: React.RefObject<HTMLElement>, visible: boolean, onOutsideClick: Function) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (visible && !ref.current?.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, visible, onOutsideClick]);
}
