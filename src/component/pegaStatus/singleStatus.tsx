import React from 'react'
import { Progress } from 'semantic-ui-react'

interface SingleStatus {
    className? : string
    value  : number
    totalProgress : number
    progressType? : boolean | 'ratio' | 'value' | 'percent'
}


const SingleStatusComponent = ({value, totalProgress, className = '', progressType = false} : SingleStatus) => {
  return (
    <Progress  progress={progressType} value={value} className={className} total={totalProgress}/>
  )
}

export default SingleStatusComponent