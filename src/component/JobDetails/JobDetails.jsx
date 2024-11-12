import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/Utility";
const JobDetails = () => {
    const jobs=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id)
    const job =jobs.find(job=>job.id===idInt)
    console.log(job);


    const handelApplyJob=()=>{
        saveJobApplication(idInt)
        toast("you have applied successfully")
    }
    return (
        <div>
            <h2 className="text-5xl mb-5 text-center"> Job Details</h2> 
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-4"> 
                 
                 <h2 className="text-xl text-white text-justify block "> <span className="font-semibold  text-cyan-300">job_description:</span>{job.job_description}</h2> 
                 <h2 className="mt-5 text-xl text-white text-justify block"><span className="font-semibold  text-cyan-300">Job Responsibilit :</span>{job.job_responsibility}</h2>
                 

                 
                    <span className="font-semibold text-cyan-300 text-xl mt-5">Educational Requirements :</span>
                    <h2 className="mt-5 text-xl text-white">{job.educational_requirements}</h2>

                    <span className="font-semibold text-cyan-300 text-xl mt-5">Experiences:</span>
                    <h2 className="mt-5 text-xl text-white">{job.experiences}</h2>
                    
                 
                </div>
                    <div className="border ">
                        <h2 className="text-2xl">side things</h2> 
                        <button onClick={handelApplyJob} className="btn btn-primary w-full">apply now</button>
                    </div>
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;