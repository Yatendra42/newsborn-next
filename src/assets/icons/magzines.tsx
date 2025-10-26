import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const MagazineIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
  <svg
  viewBox="0 0 513.38 513.38"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden={title ? undefined : true}
    role="img"
    {...props}
  >
    {title ? <title>{title}</title> : null}
     <path d="M462.045 394.095V513.38H51.335V155.524l110.1-.624 261.71 239.206 38.9-.011zM164.319 131.598l-44.121.248V0h323.281v370.795l-17.449.012-261.711-239.209zm135.664-43.929h110.514V31.614H299.983v56.055zM102.059 0h-29.69v132.118l29.69-.163V0z"/>
</svg>
);

export default MagazineIcon;