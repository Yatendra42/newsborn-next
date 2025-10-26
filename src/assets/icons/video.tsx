import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const VideoIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
  <svg
   viewBox="-4 0 32 32"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    role="img"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="m15.5 13.219 6.844-3.938C23.25 8.75 24 9.125 24 10.219v11.625c0 1.063-.75 1.5-1.656.969L15.5 18.844v2.938a1.96 1.96 0 0 1-1.969 1.969H1.906C.843 23.751 0 22.876 0 21.782V10.188C0 9.094.844 8.25 1.906 8.25h11.625c1.094 0 1.969.844 1.969 1.938v3.031z"/>
  </svg>
);

export default VideoIcon;