import React from "react";
import FilterTag from "../components/FilterTag";

const Filter = (props)=>{

    const filterOnClass = props.filterStatus ? "filter-on" : "";
    const filterTags = props.filterList.map((entry, ind)=>{
        return(
            <FilterTag key={ind + 1} value={entry}/>
        )
    })
    return(
        <div className={`filter-container ${filterOnClass}`} onClick={props.handleClick}>
            <div className="filter-tags-container">
                {filterTags}
            </div>
            <button className="clear-btn" onClick={props.clearClick}>Clear</button>
        </div>
    )
}

export default Filter;