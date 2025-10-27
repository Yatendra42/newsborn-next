

import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const PoliticsIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
  <svg
  viewBox="0 0 14 14"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    role="img"
    {...props}
  >
    {title ? <title>{title}</title> : null}
  <path d="M8.75 1.75C8.75 2.87 8.12 3.5 7 3.5s-1.75-.63-1.75-1.75S5.88 0 7 0s1.75.63 1.75 1.75M4.608 6.498c-.365 0-.6-.379-.376-.667C4.86 5.021 5.847 4.5 7 4.5s2.138.52 2.767 1.331c.224.288-.011.667-.376.667zm7.202 2a.75.75 0 0 1-.75.75h-.48c-.05 1.103-.357 2.336-.673 3.252h.273a.75.75 0 1 1 0 1.5H3.82a.75.75 0 0 1 0-1.5h.273c-.316-.916-.622-2.15-.673-3.252h-.47a.75.75 0 0 1 0-1.5h8.11a.75.75 0 0 1 .75.75" />
</svg>


);

export default PoliticsIcon;