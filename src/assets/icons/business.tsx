

import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const BusinessIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
  <svg
 viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    role="img"
    {...props}
  >
    {title ? <title>{title}</title> : null}
  <path d="M22.505 15.503v7.002h-1v1H3.5v-1h-1v-7.002h7.002v2h6.001v-2z"/>
  <path d="M14.503 15.503h-4v1h4zm0-2h-4v1h4z"/>
  <path d="M22.505 5.5v-1h-6.002v-2h-1v-1H9.502v1h-1v2H2.5v1h-1v8.003h1v1h7.002v-2h6.001v2h7.002v-1h1V5.5zm-12.003-2h4.001v1h-4.001z"/>
</svg>


);

export default BusinessIcon;

BusinessIcon 