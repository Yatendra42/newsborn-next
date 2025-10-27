
import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const ScienceIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
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
  <path fill="currentColor" d="M5 21q-1.275 0-1.813-1.137t.263-2.113L9 11V5H8q-.425 0-.713-.288T7 4q0-.425.288-.713T8 3h8q.425 0 .713.288T17 4q0 .425-.288.713T16 5h-1v6l5.55 6.75q.8.975.263 2.113T19 21H5Z"/>
</svg>


);

export default ScienceIcon;