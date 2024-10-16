import React from 'react'

import AaveImg from '../../../../assets/images/aave-token.png'
import SendImg from '../../../../assets/images/send.svg'
import CompImg from '../../../../assets/images/comp.png'

const ProofsList = () => {
  return (
    <div className="card px-[40px] py-[32px]">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent">
          <thead>
            <tr>
              <th className="py-[20px] border-b text-left text-heading">
                De-Fi Platform 1
              </th>
              <th className="py-[20px] border-b text-left text-heading">
                Source chain
              </th>
              <th className="py-[20px] border-b text-left text-heading">
                Date
              </th>
              <th className="py-[20px] border-b text-left text-heading">
                Transaction Hash
              </th>
              <th className="py-[20px] border-b text-right text-heading"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b last:border-b-0">
              <td className="py-[20px] text-white font-semibold flex items-center">
                <img src={AaveImg} alt="ETH" className="w-[24px] h-[24px]" />
                <div className="font-unbounded ml-[8px]">AAVE</div>
              </td>
              <td className="py-[20px] text-white font-semibold">
                Ethereum (ERC20)
              </td>
              <td className="py-[20px] text-body">Jun 20, 2024 - 08:07 AM</td>
              <td className="py-[20px] text-body">0x768JR...23BP92</td>
              <td className="py-[20px] flex justify-end">
                <button className="bg-[#FEFDFF] text-[#1B132F] py-3 px-6 rounded mr-2 font-bold text-sm hover:bg-slate-200 flex items-center">
                  <div className="font-unbounded mr-[8px]">View</div>
                  <img src={SendImg} alt="ETH" className="w-[20px] h-[20px]" />
                </button>
              </td>
            </tr>

            <tr className="border-b last:border-b-0">
              <td className="py-[20px] text-white font-semibold flex items-center">
              <img src={CompImg} alt="ETH" className="w-[24px] h-[24px]" />
                <div className="font-unbounded ml-[8px]">Compound</div>
              </td>
              <td className="py-[20px] text-white font-semibold">
                Ethereum (ERC20)
              </td>
              <td className="py-[20px] text-body">Jun 20, 2024 - 08:07 AM</td>
              <td className="py-[20px] text-body">0x768JR...23BP92</td>
              <td className="py-[20px] flex justify-end">
                <button className="bg-[#FEFDFF] text-[#1B132F] py-3 px-6 rounded mr-2 font-bold text-sm hover:bg-slate-200 flex items-center">
                  <div className="font-unbounded mr-[8px]">View</div>
                  <img src={SendImg} alt="ETH" className="w-[20px] h-[20px]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProofsList
