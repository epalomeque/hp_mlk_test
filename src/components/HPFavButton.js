import React from 'react';
import { IconContext } from "react-icons";
import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';

export const HPFavButton = ({ onClick, msg, icon_component, extra_classes }) => {
  return (
    <div className='W50'>
      <IconContext.Provider value={{ color: "white" }}>
        <DesktopBreakpoint>
        <button className={`hp_btn ${extra_classes}`} onClick={onClick}>
            {msg} { icon_component }
        </button>
        </DesktopBreakpoint>
        <TabletBreakpoint>
        <button className={`hp_btn ${extra_classes}`} onClick={onClick}>
            {msg} { icon_component }
        </button>
        </TabletBreakpoint>
        <PhoneBreakpoint>
        <button className={`Phone hp_btn ${extra_classes}`} onClick={onClick}>
            {msg} { icon_component }
        </button>
        </PhoneBreakpoint>
        </IconContext.Provider>
    </div>
  )
};

export default HPFavButton;
