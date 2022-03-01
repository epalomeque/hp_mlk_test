import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { staffToggle, studentsToggle } from '..//redux/Actions';
import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';
import HpButtonBase from "./HpButtonBase";

const selecttoggleStudents = state => state.hp_reducer.toggleStudents;
const selecttoggleStaff = state => state.hp_reducer.toggleStaff;

const FilterButtons = () => {
    const dispatch = useDispatch();
    const toggleStudents = useSelector(selecttoggleStudents);
    const toggleStaff = useSelector(selecttoggleStaff);

    return (
    <div className="filter_buttons">
        <div className="header-splitter-col select_text">
        Selecciona tu filtro
        </div>
        
        <DesktopBreakpoint>
        <div className="header-splitter-col">
            <HpButtonBase 
                classes='hp_button'
                onClick={ () => { dispatch(studentsToggle()) }  }
                msg='Estudiantes'
                icon_component={null}
                extra_classes={ toggleStudents ? '' : "btn_actived" }
            ></HpButtonBase>
            <HpButtonBase 
                classes='hp_button'
                onClick={ () => { dispatch(staffToggle()) }  }
                msg='Staff'
                icon_component={null}
                extra_classes={ toggleStaff ? '' : "btn_actived" }
            ></HpButtonBase>
        </div>
        </DesktopBreakpoint>
        <TabletBreakpoint>
        <div className="header-splitter-col">
            <HpButtonBase 
                classes='hp_button'
                onClick={ () => { dispatch(studentsToggle()) }  }
                msg='Estudiantes'
                icon_component={null}
                extra_classes={ toggleStudents ? '' : "btn_actived" }
            ></HpButtonBase>
            <HpButtonBase 
                classes='hp_button'
                onClick={ () => { dispatch(staffToggle()) }  }
                msg='Staff'
                icon_component={null}
                extra_classes={ toggleStaff ? '' : "btn_actived" }
            ></HpButtonBase>
        </div>
        </TabletBreakpoint>
        <PhoneBreakpoint>
        <div className="header-splitter">
            <HpButtonBase 
                classes='Phone hp_button'
                onClick={ () => { dispatch(studentsToggle()) }  }
                msg='Estudiantes'
                icon_component={null}
                extra_classes={ toggleStudents ? '' : "btn_actived" }
            ></HpButtonBase>
            <HpButtonBase 
                classes='Phone hp_button'
                onClick={ () => { dispatch(staffToggle()) }  }
                msg='Staff'
                icon_component={null}
                extra_classes={ toggleStaff ? '' : "btn_actived" }
            ></HpButtonBase>
        </div>
        </PhoneBreakpoint>

    </div>
    )
};

export default FilterButtons;
