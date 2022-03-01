import './/css/CharacterStatus.css';
import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';

export default function CharacterStatus(props) {
    return (
        <div className="character_status">
            <DesktopBreakpoint>{props.status} / {props.class_type}</DesktopBreakpoint>
            <TabletBreakpoint>{props.status} / {props.class_type}</TabletBreakpoint>
            <PhoneBreakpoint>
                {props.status} <br /> {props.class_type}
            </PhoneBreakpoint>
            
        </div>
    )
};