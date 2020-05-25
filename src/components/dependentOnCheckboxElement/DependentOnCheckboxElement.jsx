import React, { useState, useEffect } from 'react'; 

function DependentOnCheckboxElement(props) {
	const { selectedStates } = props
  const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		setIsSelected(selectedStates)
  }, [setIsSelected, selectedStates])


  const handleChange = () => {
    setIsSelected(!isSelected)
  }

  return (
  	<div className="checkbox__input-elem">
      <input type="checkbox" className="checkbox__input" value={isSelected} checked={!isSelected} onChange={handleChange}/>
      <label className={"checkbox__label checkbox__label_"+props.id}>{props.id}</label>
			{!isSelected && props.children}
		</div>
  )
}

export default DependentOnCheckboxElement;
