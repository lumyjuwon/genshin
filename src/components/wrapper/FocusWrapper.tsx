import React from 'react';

interface Props {
  children: JSX.Element;
}

export const FocusWrapper = React.forwardRef<HTMLDivElement, Props>((props: Props, forwardedRef) => {
  return <div ref={forwardedRef}>{props.children}</div>;
});
