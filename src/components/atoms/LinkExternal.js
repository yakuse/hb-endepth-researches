import React from 'react';

function LinkExternal({ children, href, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener nofollow" className="underline" {...props}>
      {children || href}
    </a>
  );
}

export default LinkExternal;
