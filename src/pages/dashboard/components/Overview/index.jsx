import React, { useState } from 'react'
import EthImg from '../../../../assets/images/eth.png'
import ReceiptAddImg from '../../../../assets/images/receipt-add.svg'
import BtcImg from '../../../../assets/images/btc.png'
import AaveImg from '../../../../assets/images/aave-token.png'
import CompImg from '../../../../assets/images/comp.png'
import ClaimModal from './ClaimModal'

const Overview = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card px-[40px] py-[32px]">
      <div className="flex items-center">
        <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
        Collaterals supply:
      </div>

      <div className="grid grid-cols-4 gap-4 mt-[12px]">
        <div>
          <div className="flex items-center">
            <img src={EthImg} alt="ETH" className="w-[20px] h-[20px]" />
            <div className="font-unbounded ml-[8px]">ETH</div>
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            24.890043
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <img src={BtcImg} alt="ETH" className="w-[20px] h-[20px]" />
            <div className="font-unbounded ml-[8px]">WBTC</div>
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            1.08398912
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <img src={AaveImg} alt="ETH" className="w-[20px] h-[20px]" />
            <div className="font-unbounded ml-[8px]">AAVE</div>
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            468.0682
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <img src={CompImg} alt="ETH" className="w-[20px] h-[20px]" />
            <div className="font-unbounded ml-[8px]">COMP</div>
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            1,024.7318
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-[24px]">
        <div>
          <div className="flex items-center">
            <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
            Total borrow amount:
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            $ 45,738.78
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
            Total repay amount:
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            $ 104,621.92
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
            Total settlements:
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            12
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <div className="w-[9px] h-[9px] rounded-full mr-2 bg-green-400"></div>{' '}
            Total liquidations amount:
          </div>

          <div className="font-unbounded text-[24px] font-medium leading-[36px]">
            $ 529,005.13
          </div>
        </div>
      </div>

      <div className="mt-[36px]">
        <button
          className="bg-[#63DF95] text-[#1B132F] py-2 px-4 rounded-[4px] font-bold hover:bg-[#52c07a] flex items-center"
          onClick={() => setIsOpen(true)}
        >
          <img src={ReceiptAddImg} className="w-[24px] h-[24px] mr-[8px]" />{' '}
          Claim The Proof
        </button>

        <ClaimModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  )
}

export default Overview
