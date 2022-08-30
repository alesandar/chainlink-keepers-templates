import React, { useCallback, useState } from 'react'
import { useEthers } from '@usedapp/core'
import { Text, Heading } from '@chakra-ui/react'
import { Section } from '../components/layout'
import { CreateForm } from '../components/CreateForm'
import { SuccessDialog } from '../components/SuccessDialog'
import { Error } from '../components/Error'
import { deployNFTCollection } from '../lib/deploy'
import CreateFormValues from '../types//CreateFormValues'

interface DeployedContract {
  address: string
  txHash: string
}

function CreatePage(): JSX.Element {
  const { chainId, library } = useEthers()
  const [deployedContract, setDeployedContract] = useState<
    DeployedContract | undefined
  >()
  const [error, setError] = useState('')

  const onSubmit = useCallback(
    async (args: CreateFormValues) => {
      setError('')
      const { tx, error } = await deployNFTCollection(args, library?.getSigner(), chainId)
      if(error) {
        setError(error)
        return
      }
      setDeployedContract({
        address: tx.contractAddress,
        txHash: tx.transactionHash,
      })
    },
    [library, chainId]
  )

  return (
    <>
      <Heading as="h1" mb="8">
        Create NFT Collection
      </Heading>
      <Text fontSize="xl">
        Setup batch-revealed NFT collection from a pre-built standard contract.
      </Text>
      <Section>
        {error && <Error message={error} />}
        {deployedContract && (
          <SuccessDialog
            contractAddress={deployedContract.address}
            deployTxHash={deployedContract.txHash}
          />
        )}
        {!deployedContract && <CreateForm onSubmit={onSubmit} />}
      </Section>
    </>
  )
}

export default CreatePage
