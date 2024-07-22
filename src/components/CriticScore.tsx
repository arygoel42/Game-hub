import React from 'react'
import { Badge } from '@chakra-ui/react'

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge colorScheme={score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'}>{score}</Badge>
  )
}

export default CriticScore