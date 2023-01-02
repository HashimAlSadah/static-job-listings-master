import React from "react";

const FilterTag = (props)=>{
    return(
        <div className="filter__tag">
            <p>{props.value}</p>
            <div className="close-btn"></div>
        </div>
    )
}

export default FilterTag;