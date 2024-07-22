import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'


const LoadingSkeleton = () => {
  return (
    <Card >
      <Skeleton height={'200px'}/>
      <CardBody width='100px'>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default LoadingSkeleton