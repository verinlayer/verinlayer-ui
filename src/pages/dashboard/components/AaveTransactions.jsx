/* eslint-disable react/prop-types */
import dayjs from 'dayjs'
import { formatUnits } from 'viem'

import borrowImg from '../../../assets/images/borrow.svg'
import repayImg from '../../../assets/images/repay.svg'
import { tokens } from '../../../utils/tokens'
import { formatAmount } from '../../../utils/helper'

const typeIcon = {
  Borrow: borrowImg,
  Repay: repayImg,
}

const AaveTransactions = ({ txs = [] }) => {
  return (
    <div className="card px-[40px] py-[32px]">
      <div className="flex">
        <div className="w-full space-y-[20px]">
          {txs.map((item, idx) => {
            const token = tokens[item?.asset]
            const amount = formatAmount(
              +formatUnits(item?.amount, token?.decimals),
              2
            )
            return (
              <div key={idx} className="item flex justify-between">
                <div className="w-[260px] flex">
                  <div className="w-[40px] h-[40px]">
                    <img
                      src={typeIcon[item?.action]}
                      alt="icon"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="ml-[20px]">
                    <h1 className="font-manrope text-[16px] font-bold">
                      {item?.action}
                    </h1>
                    <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                      {dayjs(item?.timestamp * 1000).format(
                        'DD/MM/YYYY hh:mm A'
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full ml-[20px]">
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-[22px] h-[22px]"
                      src={token?.logo}
                      alt="X"
                      style={{
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                    />
                    <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                      {amount}{' '}
                      <span className="text-primary">{token?.symbol}</span>
                    </h1>
                  </div>
                  <div>
                    <a
                      href={`https://optimistic.etherscan.io/tx/${item?.txHash}`}
                      target="_blank"
                      className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]"
                    >
                      <span className="font-manrope text-[14px] text-[#1b132f] font-extrabold leading-[22px]">
                        View
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <path
                          d="M12.6667 3.33334L3.33341 12.6667"
                          stroke="#1B132F"
                        />
                        <path
                          d="M12.6658 11.3333V3.33334H4.66577"
                          stroke="#1B132F"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AaveTransactions
