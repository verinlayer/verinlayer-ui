/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Modal } from 'rizzui'
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import closeIcon from '../../../../assets/images/close-square.svg'
import apiService from '../../../../utils/apiService'
import BrevisRequestAbi from '../../../../configs/abi/BrevisRequestAbi'
import { parseEther } from 'viem'

async function fetchClaimData(address) {
  const response = await apiService.post(
    `https://api.verinlayer.xyz/proof/aave/${address}`
  )

  return response.data
}

const ClaimModal = ({ isOpen, onClose }) => {
  const { data: hash, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    })

  const { address } = useAccount()
  const { data } = useQuery({
    queryKey: ['claimData', address, isOpen],
    queryFn: () => fetchClaimData(address),
    enabled: !!address && isOpen,
    refetchInterval: false,
  })

  const handleClaim = async () => {
    if (!data) return

    console.log('data', data)
    writeContract(
      {
        abi: BrevisRequestAbi,
        address: data?.brevisRequestContract,
        functionName: 'sendRequest',
        args: [
          data?.request?.proofId,
          data?.request?.nonce,
          address,
          {
            target: data?.verinContract,
            gas: 0,
          },
          0,
        ],
        value: data?.request?.fee,
      },
      {
        onError: (err) => {
          console.error(err.message)
        },
      }
    )
  }

  useEffect(() => {
    if (isConfirmed) {
      debugger
    }
  }, [isConfirmed])

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => {}}>
        <div className="m-auto px-7 pt-6 pb-8 text-white">
          <div className="mb-7 flex items-center justify-between ">
            <h3 className="text-base font-unbounded font-medium">
              Review the claim
            </h3>

            <div className="cursor-pointer" onClick={onClose}>
              <img src={closeIcon} alt="close" />
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-sub-heading">To address:</div>
                <div className="text-sm font-unbounded font-medium text-green-400">
                  Ox7882...DE9K73
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-sub-heading">Platform free:</div>
                <div className="text-sm font-unbounded font-medium ">
                  0.0001 ETH
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-sub-heading">Network fee:</div>
                <div className="text-sm font-unbounded font-medium ">
                  {`< $0.001`}
                </div>
              </div>
            </div>
          </div>

          <div className="gap-4 flex justify-between mt-[24px]">
            <div className="flex-1">
              <button
                onClick={onClose}
                className="bg-[#FEFDFF] text-[#1B132F] py-2 px-4 rounded mr-2 w-full font-bold text-sm hover:bg-slate-200"
              >
                Cancel
              </button>
            </div>

            <div className="flex-1">
              <button
                className="bg-[#63DF95] text-[#1B132F] py-2 px-4 rounded hover:bg-[#52c07a] w-full text-sm font-bold"
                onClick={handleClaim}
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ClaimModal
