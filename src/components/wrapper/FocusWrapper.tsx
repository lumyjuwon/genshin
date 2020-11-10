import React, { useImperativeHandle, useRef, useEffect } from 'react';

interface Props {
  children: JSX.Element;
  visible: boolean;
  setVisible: Function;
}

export const FocusWrapper = React.forwardRef<HTMLDivElement, Props>((props: Props, forwardedRef) => {
  const focusRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(forwardedRef, () => focusRef.current as HTMLDivElement);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (props.visible && !focusRef.current?.contains(event.target as Node)) {
        props.setVisible(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [props]);

  if (props.visible) {
    console.log('render');
    return <div ref={forwardedRef}>{props.children}</div>;
  } else {
    console.log('else');
    return null;
  }
});
