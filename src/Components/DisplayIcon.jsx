import React from 'react'

import '../Styles/DisplayIcon.css'

import rocketIcon from '../Assets/icons/rocket.png'
import computerIcon from '../Assets/icons/computer.png'
import tenxIcon from '../Assets/icons/10x.png'
import dollerIcon from '../Assets/icons/doller.png'
import extentionIcon from '../Assets/icons/extention.png'
import blendIcon from '../Assets/icons/blend.png'
import monitorIcon from '../Assets/icons/monitor.png'
import lightingboltIcon from '../Assets/icons/lightbolt.png'

const DisplayIcon = () => {
  return (
    <div className='displayIcon'>
        <div className="card">
            <img src={rocketIcon} alt="Icon" />
            <h1>Productionize k8s Quickly</h1>
        </div>
        <div className="card">
            <img src={computerIcon} alt="Icon" />
            <h1>Single Interface Build, Deploy, Debug</h1>
        </div>
        <div className="card">
            <img src={tenxIcon} alt="Icon" />
            <h1>DevOps Efficiency</h1>
        </div>
        <div className="card">
            <img src={dollerIcon} alt="Icon" />
            <h1>Optimize cost</h1>
        </div>
        <div className="card">
            <img src={extentionIcon} alt="Icon" />
            <h1>Add features as you Go</h1>
        </div>
        <div className="card">
            <img src={blendIcon} alt="Icon" />
            <h1>Migrate apps to k8s easily</h1>
        </div>
        <div className="card">
            <img src={monitorIcon} alt="Icon" />
            <h1>Application Health Alerts</h1>
        </div>
        <div className="card">
            <img src={lightingboltIcon} alt="Icon" />
            <h1>Quick Response Time</h1>
        </div>
    </div>
  )
}

export default DisplayIcon