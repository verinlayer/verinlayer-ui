import dayjs from 'dayjs'
import AaveImg from '../../../../assets/images/aave-token.png'
import SendImg from '../../../../assets/images/send.svg'
import { useProofsListState } from '../../../../store/proofsList/hooks'
import { EXPLORER_URL } from '../../../../utils/setup'
import { shortTx } from '../../../../utils/helper'

const ProofsList = () => {
  const { dataSource } = useProofsListState()

  const finalDataSource = dataSource || []

  return (
    <div className="card px-[40px] py-[32px]">
      {finalDataSource.length > 0 ? (
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
              {finalDataSource.map((item, idx) => (
                <tr className="border-b last:border-b-0" key={idx}>
                  <td className="py-[20px] text-white font-semibold flex items-center">
                    <img
                      src={AaveImg}
                      alt="ETH"
                      className="w-[24px] h-[24px]"
                    />
                    <div className="font-unbounded ml-[8px]">AAVE</div>
                  </td>
                  <td className="py-[20px] text-white font-semibold">
                    {item?.sourceChain}
                  </td>
                  <td className="py-[20px] text-body">
                    {item?.date
                      ? dayjs(item?.date).format('MMM D, YYYY - hh:mm A')
                      : ''}
                  </td>
                  <td className="py-[20px] text-body">
                    {item?.transactionHash
                      ? shortTx(item?.transactionHash)
                      : ''}
                  </td>
                  <td className="py-[20px] flex justify-end">
                    <a
                      href={`${EXPLORER_URL}/tx/${item?.txHash}`}
                      className="bg-[#FEFDFF] text-[#1B132F] py-3 px-6 rounded mr-2 font-bold text-sm hover:bg-slate-200 flex items-center"
                    >
                      <div className="font-unbounded mr-[8px]">View</div>
                      <img
                        src={SendImg}
                        alt="ETH"
                        className="w-[20px] h-[20px]"
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[200px] w-full flex justify-center items-center">
          <p className="text-[#B3A9C9]">No data found</p>
        </div>
      )}
    </div>
  )
}

export default ProofsList
