
const getStoredJobApplication=()=>{
    const saveStroedJob=localStorage.getItem("job-application")
    if(saveStroedJob){
        return JSON.parse(saveStroedJob)
    }
    return []
}

const saveJobApplication =(id)=>{
    const saveJobApplication=getStoredJobApplication()
    const exist=saveJobApplication.find(jobId=>jobId===id)
    if(!exist){
        saveJobApplication.push(id)
        localStorage.setItem("job-application",JSON.stringify(saveJobApplication))
        
    }


}
export{saveJobApplication ,getStoredJobApplication}