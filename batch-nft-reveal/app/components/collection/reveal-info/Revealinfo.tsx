import { Container, Heading } from '@chakra-ui/react'
import { useContractCall } from '../../../hooks/useContractCall'
import { useNextRevealAmount } from '../../../hooks/useNextRevealAmount'
import { useNextRevealTime } from '../../../hooks/useNextRevealTime'
import { AddressProp } from '../../../types/AddressProp'
import { NextReveal } from '../reveal-info/NextReveal'

export const RevealInfo = (props: AddressProp): JSX.Element => {
  const { contractAddress } = props

  const nextRevealBatchSize = useNextRevealAmount(contractAddress)
  const nextRevealTime = useNextRevealTime(contractAddress)
  const revealedCount: number = useContractCall(
    'revealedCount',
    [],
    contractAddress
  )
  const batchSize: number = useContractCall('batchSize', [], contractAddress)
  const revealedInterval: number = useContractCall(
    'revealedInterval',
    [],
    contractAddress
  )
  const lastRevealed: number = useContractCall(
    'lastRevealed',
    [],
    contractAddress
  )
  const totalSupply: number = useContractCall(
    'totalSupply',
    [],
    contractAddress
  )
  return (
    <Container maxWidth="100%" textAlign="center">
      {isPending(
        revealedCount,
        totalSupply,
        batchSize,
        lastRevealed,
        revealedInterval
      ) ? (
        <Heading>Pending batch reveal</Heading>
      ) : (
        <>
          <Heading>Next reveal after</Heading>
          <NextReveal
            nextRevealInterval={nextRevealTime}
            nextRevealBatchSize={nextRevealBatchSize}
          ></NextReveal>
        </>
      )}
    </Container>
  )
}

function isPending(
  revealedCount: number,
  totalSupply: number,
  revealBatchsize: number,
  lastRevealed: number,
  revealInterval: number
) {
  let unrevealedCount = totalSupply - revealedCount
  if (unrevealedCount == 0) {
    return false
  }
  let batchSizeCriteria = false
  if (revealBatchsize > 0 && unrevealedCount >= revealBatchsize) {
    batchSizeCriteria = true
  }
  let intervalCriteria = false
  if (revealInterval > 0 && Date.now() - lastRevealed > revealInterval) {
    intervalCriteria = true
  }
  return batchSizeCriteria || intervalCriteria
}
