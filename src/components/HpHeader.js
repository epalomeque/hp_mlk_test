import React from 'react';
import logo from '..//assets/hp_logo.png';
import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';

class HpHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <DesktopBreakpoint>
            <header className="App-header">
                <div className="header-splitter">
                <img src={logo} alt="Logo" className="App-logo" />
                </div>
            </header>
            </DesktopBreakpoint>
            <TabletBreakpoint>
            <header className="App-header">
                <div className="header-splitter">
                <img src={logo} alt="Logo" className="App-logo" />
                </div>
            </header>
            </TabletBreakpoint>
            <PhoneBreakpoint>
            <header className="Phone App-header">
                <div className="header-splitter">
                <img src={logo} alt="Logo" className="App-logo" />
                </div>
            </header>
            </PhoneBreakpoint>
            </div>

            )
        }
    };

export default HpHeader;