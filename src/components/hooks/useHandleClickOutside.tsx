import React, { useEffect } from 'react';

export function useHandleClickOutside(ref: React.RefObject<HTMLElement>, className: string, node: any = ref) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (node.classList?.contains(className) && !ref.current?.contains(event.target as Node)) {
        node.classList.remove(className);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, className, node.classList]);
}
