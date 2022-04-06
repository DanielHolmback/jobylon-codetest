import { useEffect, useState } from "react"
import AnimateHeight from "react-animate-height"
import { getJobs } from "../fetching/fetching"
import './style.scss'

export const JobView = () => {
    const [jobs, setJobs] = useState<JobylonJob[]>([])

    useEffect(() => {
        const fetchJobs = async() => {
            const jobylonJobsJSON = await getJobs() as JobylonJob[]
            console.log("test", jobylonJobsJSON)
            setJobs(jobylonJobsJSON)
        }

        fetchJobs()

    }, [])

    return (
        <div>
            <h3>Welcome to the worlds best jobs</h3>
            {
                jobs.map((job, i) => {
                    return <JobBlock key={i} job={job} />
                })
            }
        </div>
    )
}


interface JobBlockProps {
    job: JobylonJob
}

const JobBlock = ({job}:JobBlockProps) => {
    const [expanded, setExpanded] = useState<boolean>(false)
    const [height, setHeight] = useState<string|number>(0)

    useEffect(() => {
        setHeight(expanded ? 'auto' : 0)
    }, [setHeight, expanded])

    return (
        <div className={'job-block-container'}>
            <div className='title-container row' onClick={() => { setExpanded(!expanded) }}>
                <div>
                    {job.title}
                    <i className={'arrow ' + (expanded ? 'down' : 'right')}/>
                </div>
                <div className="title-company">
                    {job.company.name}
                    <img src={job.company.logo} alt={''} className={'company-logo'} />
                </div>
            </div>
            <AnimateHeight duration={500} height={height} className={'job-block-inner-container'}>
                <div className='line' />
                <div className='bullet-facts'> 
                    <Bullet title={'Industry:'} desc={job.company.industry} />
                    <Bullet title={'Category:'} desc={job.function} />
                    <Bullet title={'Experience:'} desc={job.experience} />
                    <Bullet title={'Employment type:'} desc={job.employment_type} />
                </div>
                <div className='job-description' dangerouslySetInnerHTML={{__html: job.descr}} />
                <div className='subheader'>{'Required skills'}</div>
                <div className='skills' dangerouslySetInnerHTML={{__html: job.skills}} />
                <div className='opportunity-container'>
                    <div className='subheader'>{'Want to join our wonderful team?'}</div>
                    <a href={job.urls.ad} target="_blank">Read more about our opportunity at Jobylon</a>
                </div>
                <div className={'company-container'}>
                    <div className='subheader'>{'About the company'}</div>
                    <div className='company-description' dangerouslySetInnerHTML={{__html: job.company.descr}}></div>
                </div>
            </AnimateHeight>
        </div>
    )
}

const Bullet = ({title, desc}:{title:string, desc:string}) => {

    return (
        <div className='bullet row'> 
            <div className='bullet-question'>{title}</div>
            <div className='bullet-answer'>{desc}</div>
        </div>)
}