
import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
};

const CryptoIcon: React.FC<Props> = ({ size = 16, title, ...props }) => (
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
  <path d="M8.5 23a9.044 9.044 0 0 0 3.506-.682A7 7 0 1 0 15 9V5.333C15 2.9 12.145 1 8.5 1S2 2.9 2 5.333v13.334C2 21.1 4.855 23 8.5 23ZM15 11a5 5 0 1 1-5 5 5.006 5.006 0 0 1 5-5ZM8.5 3C11.152 3 13 4.23 13 5.333s-1.848 2.334-4.5 2.334S4 6.437 4 5.333 5.848 3 8.5 3ZM4 8.482a8.466 8.466 0 0 0 4.5 1.185A8.466 8.466 0 0 0 13 8.482V9.3a7.024 7.024 0 0 0-3.781 2.76c-.239.021-.476.051-.719.051-2.652 0-4.5-1.23-4.5-2.333Zm0 4.445A8.383 8.383 0 0 0 8.268 14.1 6.981 6.981 0 0 0 8 16c0 .178.014.353.027.528C5.636 16.39 4 15.257 4 14.222Zm0 4.444a8.462 8.462 0 0 0 4.49 1.184 7.01 7.01 0 0 0 1.479 2.3A7.835 7.835 0 0 1 8.5 21C5.848 21 4 19.77 4 18.667Z"/>
</svg>
);

export default CryptoIcon;