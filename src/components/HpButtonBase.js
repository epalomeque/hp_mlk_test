import React from 'react';

export const HpButtonBase = ({ onClick, msg, icon_component, classes, extra_classes }) => {
  return (
    <button className={`${classes} ${extra_classes}`} onClick={ onClick }>
        {msg} { icon_component }
    </button>
  )
};

export default HpButtonBase;
