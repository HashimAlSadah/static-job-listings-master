import React from "react";

const Job = (props)=>{
    
    const borderStyle = props.isFeatured ? " left-border-deco" : "";

    const tags = props.skills.map((skill, ind) =>{
        return( <p key={ind + 1} className="tag">{skill}</p> )
    })

    return(
        <div className={"job" + borderStyle} onClick={props.handleClick}>
            <img src={props.img} className="company-icon"></img>

            <div className="job__info">
                <div className="job__top">
                    <p className="company">{props.companyName}</p>
                    {props.isNew ? <p className="new">New!</p> : null}
                    {props.isFeatured ? <p className="featured">Featured</p> : null}
                </div>

                <p className="job__position">{props.position}</p>

                <div className="job__bottom">
                    <p className="post-date">{props.date}</p>
                    <span className="dot">&bull;</span>
                    <p className="job__contract">{props.contract}</p>
                    <span className="dot">&bull;</span>
                    <p className="location">{props.location}</p>
                </div>
            </div>

            <hr className="mobile"></hr>

            <div className="jobs-requirements">
                {tags}
            </div>

        </div>
    )
}

export default Job;