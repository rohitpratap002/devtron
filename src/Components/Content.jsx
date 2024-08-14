import React,{useState} from 'react'
import '../Styles/Content.css'


const RenderData = ({contentData})=>{
    
    return(
        <>
            {contentData.map((el,index)=>{
                return <div className="datacard" key={index}>{el}</div>
            })}
        </>
    )
};

const Content = () => {
    const [activeIndex,setActiveIndex]=useState(0);
    const handleClick=(pr)=>{
        setActiveIndex(pr)
    }
    const headingList = [
        'Compliance',
        "Policy Management",
        'Deploy Time App Debuggability',
        'Environment Management',
        'GitOps Platform',
        'Software Delivery Workflow',
        'Operation Insights',
        'Cost Management',
    ]
    const contentData= [
        [
            'Fine grained access control; control who can edit configuration and who can deploy.',
            'Audit log to know who did what and when',
            'History of all CI and CD events',
            'Kubernetes events impacting application',
            'Relevant cloud events and their impact on applications'
        ],
        [
            'Multi level security policy at global, cluster, environment and application for efficient hierarchical policy management',
            'Advanced workflow policies like blackout window, branch environment relationship to secure build and deployment pipelines',
            'Define policies and exception for kubernetes resources',
            'Define policies for events for faster resolution',
            'Behavior driven security policy'
        ],
        [
            'One place for all historical kubernetes events',
            'Access all manifests securely for eg secret obfuscation',
            'Auto identify new and old pods',
            'Auto issue identification',
            'Intelligent correlation between events, logs for faster triangulation of issue',
            'Application metrics for cpu, ram, http status code and latency with comparison between new and old',
            'Advanced logging functionality with grep and json search',
        ],
        [
            'Define blackout windows to avoid deployment during high critical periods',
            'Reconcile and compare configuration of applications across environment',
            'Compare environments and all artifacts deployed on environments',
            'Easily manage and share helm charts within and across teams',
            'Environment override to selectively override configuration for environment',
            'Lock environment so that others cannot make any changes without your consent, for eg during testing',
            'Hibernate unused application to save resources',
        ],
        [
            'Enforce finer access control than git',
            'Gitops backed by postgres for easier analysis',
            'Gitops exposed through API and UI so that you dont have to interact with git cli',
        ],
        [
            'Workflow which understands the domain of kubernetes and testing so that you dont have to write scripts to handle it',
            'Reusable and composable components so that workflows are easy to contruct and reason through',
        ],
        [
            "Audit log to understand the failure causes",
            "Monitor changes across deployments and revert easily ",
            "Deployment metrics to measure success of agile process. It captures mttr, change failure rate, deployment frequency, deployment size out of the box.",
        ],
        [
            "Automatic resource optimization even with HPA",
            "Unused resource management to rightsize cluster",
            "Advanced pod placement strategies for instance and spot selection",
            "Complete visibility into cost of the cluster, environment and applications",
        ],
    ]



  return (
    <div className="content">
        <div className="left">
        {headingList.map((pr,index) =>{
            return <h4 key={index} className={index === activeIndex ? 'active' : ''} onClick={() => handleClick(index)}>{pr}</h4>
        }) 
        }
        </div>
        <div className="right">
            <RenderData contentData={contentData[activeIndex]}/>
        </div>
    </div>

  )
}

export default Content