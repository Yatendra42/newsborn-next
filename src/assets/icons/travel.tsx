
import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const TravelIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
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
 <path fill="currentColor" d="m3.65 15.4 1.05-1.05 2.5.35 3.9-3.9-7.8-4.25 1.4-1.4 9.55 2.45 3.9-3.85q.425-.425 1.05-.425t1.05.425q.425.425.425 1.05t-.425 1.05l-3.85 3.9 2.45 9.55-1.4 1.4-4.25-7.8-3.9 3.9.35 2.5-1.05 1.05-1.75-3.2-3.2-1.75Z"/>
</svg>
);

export default TravelIcon;