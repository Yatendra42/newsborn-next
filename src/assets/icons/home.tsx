import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const HomeIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    role="img"
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M1 6v9h5v-4a2 2 0 1 1 4 0v4h5V6L8 0 1 6Z" />
  </svg>
);

export default HomeIcon;