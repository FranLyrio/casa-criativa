import React, { AnchorHTMLAttributes } from 'react';

import { AnchorStyle } from './style';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const Anchor: React.FC<AnchorProps> = ({ children, ...rest }) => {
  return (
    <AnchorStyle href="/" {...rest}>
      {children}
    </AnchorStyle>
  );
};

export default Anchor;
