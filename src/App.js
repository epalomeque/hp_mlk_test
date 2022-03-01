import React from 'react';
import background from './/assets/hp_background.png';
import HpHeader from './components/HpHeader';
import Content from './/components/Content';
import DesktopBreakpoint from './/components/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/components/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/components/responsive_utils/phone_breakpoint';
import './App.css';
import './/components/css/hp_buttons.css';

class App extends React.Component {

  render() {
    const divStyle = {
        backgroundImage: `url(${background})`,
        opacity: 0.70
    };
    const divNoImgStyle = {
      backgroundColor: `#000`,
  };

  return (
    <div>
    <DesktopBreakpoint>
      <div className="App" style={divStyle}>
          <HpHeader></HpHeader>
          <Content></Content>
      </div>
    </DesktopBreakpoint>
    
    <TabletBreakpoint>
      <div className="App" style={divStyle}>
          <HpHeader></HpHeader>
          <Content></Content>
      </div>
    </TabletBreakpoint>
    
    <PhoneBreakpoint>
      <div className="App" style={divNoImgStyle}>
          <HpHeader></HpHeader>
          <Content></Content>
      </div>
    </PhoneBreakpoint>
    
    </div>
   )
  }
};

export default App;
