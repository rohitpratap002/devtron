import React ,{useState, useEffect,useRef} from 'react'
import '../Styles/review.css'


import arrowLeft from '../Assets/icons/arrowleft.png'
import arrowRight from '../Assets/icons/arrowright.png'

import person1 from '../Assets/person1.png'
import person2 from '../Assets/person2.png'
import person3 from '../Assets/person3.png'
import person4 from '../Assets/person4.png'
import person5 from '../Assets/person5.png'

const RenderReview = ({personList,nxtPerson,nxtReviewHandler})=>{
    return <>
        <div className="review">
            <img src={personList.img} alt="person" />
            <div className="dataDiv">
                <p>{personList.content}</p>
                <div>
                    <h1>{personList.name}</h1>
                    <h4>{personList.post}</h4>
                </div>
            </div>
        </div>
        <div onClick={nxtReviewHandler} className="nxtReview">
            <img src={nxtPerson} alt="person" />
        </div>
    </>
}

const Review = () => {
    const [review, setReview]= useState(0)
    const [nxper, setNxper]= useState(person2)
    const personList = [
        {
            img:person1,
            content: "Devtron enables us to deploy any number of applications with a shared codebase and helps to debug applications, check events and config in one screen without switching to cloudwatch.",
            name:"Piyush Verma",
            post:"Technical Lead, Delhivery"
        },
        {
            img:person2,
            content: "Devtron sits on top of some of the greatest tools such as ArgoCD, Grafana, Clair. It is also user-friendly and intuitive",
            name:"Viktor Farcic",
            post:"Tech Reviewer, The DevOps Toolkit"
        },
        {
            img:person3,
            content: "Devtron helped in migrating nearly 80% of applications to Kubernetes helping in quick adoption.",
            name:"Ravi Ranjan",
            post:"Principal Engineer, Livspace"
        },
        {
            img:person4,
            content: "Using Devtron’s Automated deployments has never been a hassle. Deployment metrics also helped us measure our deployment frequencies",
            name:"Vaibhav Khulbe",
            post:"Senior Software Engineer, Delhivery"
        },
        {
            img:person5,
            content: "This may be by far the best possible feature. You got a UI! We created and tested a basic CI/CD pipeline without writing a single line of code. All through a few button clicks!",
            name:"Arun Kutty",
            post:"Senior Cloud Architect, Deloitte"
        },
    ]


    const nxtReviewHandler =()=>{
        if(review<personList.length-1){
            setReview(()=>review+1)
        }
        else{
            setReview(0)
            setNxper(()=>personList[0].img)
        }
    }
    const prvsReviewHandler =()=>{
        if(review>0){
            setReview(()=>review-1)
        }
        else{
            setReview(personList.length-1)
        }
    }
    useEffect(()=>{
        setReview(0);
        setNxper(person2)
    },[])
    useEffect(()=>{
        if(review===4){
            setNxper(()=>personList[0].img)
        }
        else{
            setNxper(()=>personList[review+1].img)
        }

    },[review])

    
  return (
    <div className='reviewSec'>
        <div className="upper">
            <h1>Engineering Teams That Love Us</h1>
            <div className="btns">
                <p>{review+1}/{personList.length}</p>
                <button onClick={prvsReviewHandler}><img src={arrowLeft} alt="<" /></button>
                <button onClick={nxtReviewHandler}><img src={arrowRight} alt=">" /></button>
            </div>
        </div>
        <div className="lower" >
            <RenderReview nxtReviewHandler={nxtReviewHandler} personList={personList[review]} nxtPerson={nxper}/>
        </div>
    </div>
  )
}

export default Review