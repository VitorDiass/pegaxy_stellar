import React from 'react'
import { Progress } from 'semantic-ui-react'
import styled from 'styled-components'

interface SingleStatus {
    className? : string
    value  : number
    totalProgress : number
}

const StyledProgress = styled(Progress)`

`

const SingleStatusComponent = ({value, totalProgress, className = ''} : SingleStatus) => {
  return (
    <Progress value={value} className={className} total={totalProgress}/>
  )
}

export default SingleStatusComponent