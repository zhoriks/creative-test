import React, { useState } from "react";
import DependentOnCheckboxElement from "../dependentOnCheckboxElement/DependentOnCheckboxElement";

import './checkbox.css';


function Checkbox() {
    const [selectedStates, setSelectedStates] = useState(true);

    const toggleAllCheckboxesState = () => {
        setSelectedStates(!selectedStates)
    };

    return (
        <section className="checkbox">
        <input className="checkbox__input" type="checkbox" value={selectedStates} onChange={toggleAllCheckboxesState} id="checkbox__input"/>
        <label className="checkbox__label">вкл/откл все</label>
        <DependentOnCheckboxElement selectedStates={selectedStates} id={'blue'}>
          <div className="checkbox__element checkbox__element_blue">Blue</div>
        </DependentOnCheckboxElement>
        <DependentOnCheckboxElement selectedStates={selectedStates} id={'red'}>
          <div className="checkbox__element checkbox__element_red">Red</div>
        </DependentOnCheckboxElement>
      </section>
    );
}

export default Checkbox;