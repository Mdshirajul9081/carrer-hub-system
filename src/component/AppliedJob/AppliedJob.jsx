import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Utility/Utility';
import { list } from 'postcss';

const AppliedJob = () => {
    const jobs=useLoaderData()
    const [appliedJob,setAppliedJob]=useState([])
    useEffect(()=>{
        const storedjobIds=getStoredJobApplication()
        if(jobs.length>0){
            // const jobApplied =jobs.filter(job=>storedjobId.includes(job.id))
            const jobApplied=[];
            for(const id of storedjobIds){
                const job=jobs.find(job=>job.id===id)
                if(job){
                    jobApplied.push(job)
                }
            }
            // console.log(jobApplied);
            setAppliedJob(jobApplied)
        }
    },[])
    return (
        <div>
            <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                 <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>all</a></li>
                    <li><a>remote</a></li>
                    <li><a>onsite</a></li>
                </ul>
            </div>
            <h2 className='test-2xl'> applied jobs:{appliedJob.length} </h2>
           <ul>
            {
                appliedJob.map(job=> <li key={job.id}> <span>{job.job_title} : {job.remote_or_onsite} </span>
                
                
                
                </li>)
            }
           </ul>
              
        </div>
    );
};

export default AppliedJob;