import React, { useEffect, useState } from "react";
import HeaderBg from "../components/Heade_bg"; 
import Job from "../components/Job";
import Filter from "../components/Filter";
import data from "../data";

const filterJobs = (jobsList, filter)=>{
    const newJobs = jobsList.filter(job=>{
        const jobSkills = [job.role].concat(job.level, job.languages, job.tools)
        if (filter.every(element => jobSkills.includes(element))){
            return job;
        }
    })
    return newJobs;
}

const App = ()=>{

    const [jobs, setJobs] = useState(()=> data)
    const [filter, setFilter] = useState(()=> [])
    let isFilterOn = filter.length > 0 ? true : false;

    const addToFilter = (event)=>{
        const target = event.target;
        if(target.classList.contains("tag") && !filter.includes(target.innerText)){
            setFilter((prevState)=>{
                return prevState.concat(target.innerText)
            })
        }
    }

    const removeFromFilter = (event) =>{
        const target = event.target;
        if(target.classList.contains("close-btn")){
            const tagValue = target.previousSibling.innerText;
            const tagIndex = filter.indexOf(tagValue);
            setFilter(prevState=>{
                return prevState.slice(0, tagIndex)
                .concat(prevState.slice(tagIndex + 1))
            })
        }
    }

    const clearFilter = ()=>{
        setFilter([]);
    }

    useEffect(()=>{
        setJobs(()=>{
            return filterJobs(data, filter)
        })
    }, [filter])
    
    const jobsEelement = jobs.map((job)=>{
        return(
            <Job 
                key={job.id}
                img={job.logo}
                companyName={job.company}
                isNew={job.new}
                isFeatured={job.featured}
                position={job.position}
                date={job.postedAt}
                contract={job.contract}
                location={job.location}
                skills={[job.role].concat(job.level, job.languages, job.tools)}
                handleClick={(event)=>addToFilter(event)}
            /> 
        )
    })
    return(
        <div>
            <HeaderBg/>
            <Filter filterStatus={isFilterOn}
                    filterList = {filter}
                    handleClick= {(event)=>removeFromFilter(event)}
                    clearClick = {clearFilter}
            />
            <div className={"jobs-container " + (isFilterOn ? "filter-on" : "")}>
                {jobsEelement}
            </div>
        </div>
    )
}



export default App;