import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const{logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,
        educational_requirements,experiences,id
    }=job;
    return (
        <div className="card card-compact bg-base-100 shadow-lg shadow-cyan-500/50 ... mt-10">
        <figure>
          <img
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="">
            <button className="border-2 border-sky-500  py-2 px-5 mr-4 text-blue-400">{remote_or_onsite}</button>
            <button className="border-2 border-sky-500 py-2 px-5 mr-4 text-blue-400">{job_type}</button>
          </div>
          <div className="flex ">
            <h2 className="flex "><IoLocationOutline className="text-2xl"></IoLocationOutline> {location}</h2>
            <h2 className="flex ml-14">Salary :<CiDollar className="text-2xl"></CiDollar> {salary}</h2>
         
          </div>
          <div className="card-actions ">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">view details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;