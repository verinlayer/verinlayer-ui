import { useQuery } from '@tanstack/react-query'

import pImg from '../../../assets/images/image.png'
import tranImg from '../../../assets/images/transaction2.png'
import apiService from '../../../utils/apiService'

async function fetchAaveTransaction() {
  const response = await apiService.get(
    'https://api.verinlayer.xyz/proof/aave/txs/0x39f130486283456AFeA838e1180627B05b39c796'
  )

  return response.data
}

const AaveTransactions = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['aaveTransactions'],
    queryFn: () => fetchAaveTransaction(),
    staleTime: 2000, // 2 seconds
  })

  console.log({ data, isError, error, isLoading })

  return (
    <div className="card px-[40px] py-[32px]">
      <div className="flex ">
        <div className="w-[316px] font-manrope text-[24px] font-bold">
          July 5, 2024
        </div>
        <div className="w-full">
          <div className="flex justify-between   pb-[20px]   border-b-[0.5px] border-b-[#8C81A3]">
            <div className="w-[260px] flex">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-green-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z"
                    fill="#1B132F"
                  />
                  <path
                    d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z"
                    fill="#1B132F"
                  />
                </svg>
              </div>
              <div className="ml-[20px]">
                <h1 className="font-manrope text-[16px] font-bold">Supply</h1>
                <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                  08:07 AM
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ml-[20px]">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[22px] h-[22px]"
                  src={pImg}
                  alt="X"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  + 1,672.68 OP
                </h1>
              </div>
              <div>
                <button className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]">
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
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-[20px] pb-[20px] mt-[20px]  border-b-[0.5px] border-b-[#8C81A3]  ">
            <div className="w-[260px] flex">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-green-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M18.8884 2.33334H9.11171C4.86504 2.33334 2.33337 4.86501 2.33337 9.11168V18.8767C2.33337 23.135 4.86504 25.6667 9.11171 25.6667H18.8767C23.1234 25.6667 25.655 23.135 25.655 18.8883V9.11168C25.6667 4.86501 23.135 2.33334 18.8884 2.33334ZM16.24 19.4017H10.5C10.0217 19.4017 9.62504 19.005 9.62504 18.5267C9.62504 18.0483 10.0217 17.6517 10.5 17.6517H16.24C17.7334 17.6517 18.9584 16.4383 18.9584 14.9333C18.9584 13.4283 17.745 12.215 16.24 12.215H10.325L10.6284 12.5183C10.9667 12.8567 10.9667 13.4167 10.6284 13.755C10.4534 13.93 10.2317 14.0117 10.01 14.0117C9.78837 14.0117 9.56671 13.93 9.39171 13.755L7.56004 11.9233C7.22171 11.585 7.22171 11.025 7.56004 10.6867L9.39171 8.85501C9.73004 8.51668 10.29 8.51668 10.6284 8.85501C10.9667 9.19334 10.9667 9.75334 10.6284 10.0917L10.2317 10.4767H16.24C18.7017 10.4767 20.7084 12.4833 20.7084 14.945C20.7084 17.4067 18.7017 19.4017 16.24 19.4017Z"
                    fill="#1B132F"
                  />
                </svg>
              </div>
              <div className="ml-[20px]">
                <h1 className="font-manrope text-[16px] font-bold">Repay</h1>
                <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                  10:05 PM
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ml-[20px]">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[22px] h-[22px]"
                  src={tranImg}
                  alt="X"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  + 537.72 USDT
                </h1>
              </div>
              <div>
                <button className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]">
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
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-[20px]">
            <div className="w-[260px] flex ">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#f6417a] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M24.6634 11.55H14.875V17.9433C14.875 18.4217 14.4784 18.8183 14 18.8183C13.5217 18.8183 13.125 18.4217 13.125 17.9433V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z"
                    fill="#1B132F"
                  />
                  <path
                    d="M14.875 6.76668L16.6951 8.58668C17.0334 8.92501 17.5934 8.92501 17.9317 8.58668C18.2701 8.24835 18.2701 7.68835 17.9317 7.35001L14.6067 4.03668C14.2684 3.69835 13.7084 3.69835 13.37 4.03668L10.0567 7.36168C9.89338 7.53668 9.80005 7.75835 9.80005 7.98001C9.80005 8.20168 9.88172 8.42335 10.0567 8.59834C10.395 8.93668 10.955 8.93668 11.2934 8.59834L13.1134 6.77834V11.55H14.8634V6.76668H14.875Z"
                    fill="#1B132F"
                  />
                </svg>
              </div>
              <div className="ml-[20px]">
                <h1 className="font-manrope text-[16px] font-bold">Borrow</h1>
                <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                  11:37 PM
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ml-[20px]">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[22px] h-[22px]"
                  src={tranImg}
                  alt="X"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  - 2,781.82 USDT
                </h1>
              </div>
              <div>
                <button className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-[20px]">
        <div className="w-[316px] font-manrope text-[24px] font-bold">
          February24, 2024
        </div>
        <div className="w-full">
          <div className="flex justify-between   pb-[20px]   border-b-[0.5px] border-b-[#8C81A3]">
            <div className="w-[260px] flex">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#fefdff] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M14 26.5417C9.33329 26.5417 5.54163 23.1934 5.54163 19.075V14.7584C5.54163 14.28 5.93829 13.8834 6.41663 13.8834C6.89496 13.8834 7.29163 14.28 7.29163 14.7584C7.29163 17.815 10.1733 20.125 14 20.125C17.8266 20.125 20.7083 17.815 20.7083 14.7584C20.7083 14.28 21.105 13.8834 21.5833 13.8834C22.0616 13.8834 22.4583 14.28 22.4583 14.7584V19.075C22.4583 23.1934 18.6666 26.5417 14 26.5417ZM7.29163 19.2034C7.37329 22.295 10.3483 24.7917 14 24.7917C17.6516 24.7917 20.6266 22.295 20.7083 19.2034C19.1916 20.8484 16.7883 21.875 14 21.875C11.2116 21.875 8.81996 20.8484 7.29163 19.2034Z"
                    fill="#1B132F"
                  />
                  <path
                    d="M14 16.0417C10.78 16.0417 7.88661 14.595 6.47495 12.2617C5.86828 11.27 5.54163 10.115 5.54163 8.925C5.54163 6.91833 6.43996 5.02833 8.06163 3.605C9.6483 2.21666 11.76 1.45833 14 1.45833C16.24 1.45833 18.34 2.21666 19.9383 3.59333C21.56 5.02833 22.4583 6.91833 22.4583 8.925C22.4583 10.115 22.1316 11.2583 21.525 12.2617C20.1133 14.595 17.22 16.0417 14 16.0417ZM14 3.20833C12.18 3.20833 10.4766 3.81499 9.20498 4.93499C7.96831 6.00833 7.29163 7.43166 7.29163 8.925C7.29163 9.8 7.52494 10.6167 7.96828 11.3517C9.07661 13.1717 11.3866 14.2917 14 14.2917C16.6133 14.2917 18.9233 13.16 20.0316 11.3517C20.4866 10.6167 20.7083 9.8 20.7083 8.925C20.7083 7.43166 20.0316 6.00833 18.7833 4.91166C17.5116 3.81499 15.82 3.20833 14 3.20833Z"
                    fill="#1B132F"
                  />
                  <path
                    d="M14 21.875C9.18163 21.875 5.54163 18.8183 5.54163 14.7583V8.925C5.54163 4.80666 9.33329 1.45833 14 1.45833C16.24 1.45833 18.34 2.21666 19.9383 3.59333C21.56 5.02833 22.4583 6.91833 22.4583 8.925V14.7583C22.4583 18.8183 18.8183 21.875 14 21.875ZM14 3.20833C10.3016 3.20833 7.29163 5.775 7.29163 8.925V10.0917C7.29163 13.1483 10.1733 15.4583 14 15.4583C17.8266 15.4583 20.7083 13.1483 20.7083 10.0917V8.925C20.7083 7.43166 20.0316 6.00833 18.7833 4.91166C17.5116 3.81499 15.82 3.20833 14 3.20833Z"
                    fill="#1B132F"
                  />
                </svg>
              </div>
              <div className="ml-[20px]">
                <h1 className="font-manrope text-[16px] font-bold">
                  Collateral usage
                </h1>
                <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                  05:52 AM
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ml-[20px]">
              <div className="flex items-center space-x-2">
                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  Collateralization disabled for
                </h1>
                <img
                  className="w-[22px] h-[22px]"
                  src={tranImg}
                  alt="X"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  USDT
                </h1>
              </div>
              <div>
                <button className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]">
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
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-[20px] pb-[20px] mt-[20px]  border-b-[0.5px] border-b-[#8C81A3]  ">
            <div className="w-[260px] flex">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#f6417a] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M24.6634 11.55H14.875V17.9433C14.875 18.4217 14.4784 18.8183 14 18.8183C13.5217 18.8183 13.125 18.4217 13.125 17.9433V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z"
                    fill="#1B132F"
                  />
                  <path
                    d="M14.875 6.76668L16.6951 8.58668C17.0334 8.92501 17.5934 8.92501 17.9317 8.58668C18.2701 8.24835 18.2701 7.68835 17.9317 7.35001L14.6067 4.03668C14.2684 3.69835 13.7084 3.69835 13.37 4.03668L10.0567 7.36168C9.89338 7.53668 9.80005 7.75835 9.80005 7.98001C9.80005 8.20168 9.88172 8.42335 10.0567 8.59834C10.395 8.93668 10.955 8.93668 11.2934 8.59834L13.1134 6.77834V11.55H14.8634V6.76668H14.875Z"
                    fill="#1B132F"
                  />
                </svg>
              </div>
              <div className="ml-[20px]">
                <h1 className="font-manrope text-[16px] font-bold">Withdraw</h1>
                <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                  07:48 PM
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ml-[20px]">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[22px] h-[22px]"
                  src={tranImg}
                  alt="X"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  - 523.91 USDT
                </h1>
              </div>
              <div>
                <button className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]">
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
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="w-[260px] flex ">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-green-400 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M18.8884 2.33334H9.11171C4.86504 2.33334 2.33337 4.86501 2.33337 9.11168V18.8767C2.33337 23.135 4.86504 25.6667 9.11171 25.6667H18.8767C23.1234 25.6667 25.655 23.135 25.655 18.8883V9.11168C25.6667 4.86501 23.135 2.33334 18.8884 2.33334ZM16.24 19.4017H10.5C10.0217 19.4017 9.62504 19.005 9.62504 18.5267C9.62504 18.0483 10.0217 17.6517 10.5 17.6517H16.24C17.7334 17.6517 18.9584 16.4383 18.9584 14.9333C18.9584 13.4283 17.745 12.215 16.24 12.215H10.325L10.6284 12.5183C10.9667 12.8567 10.9667 13.4167 10.6284 13.755C10.4534 13.93 10.2317 14.0117 10.01 14.0117C9.78837 14.0117 9.56671 13.93 9.39171 13.755L7.56004 11.9233C7.22171 11.585 7.22171 11.025 7.56004 10.6867L9.39171 8.85501C9.73004 8.51668 10.29 8.51668 10.6284 8.85501C10.9667 9.19334 10.9667 9.75334 10.6284 10.0917L10.2317 10.4767H16.24C18.7017 10.4767 20.7084 12.4833 20.7084 14.945C20.7084 17.4067 18.7017 19.4017 16.24 19.4017Z"
                    fill="#1B132F"
                  />
                </svg>
              </div>
              <div className="ml-[20px]">
                <h1 className="font-manrope text-[16px] font-bold">Repay</h1>
                <p className="font-medium leading-[22px] tracking-[0.28px] font-manrope text-[14px]  text-[#B3A9C9]">
                  10:05 PM
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full ml-[20px]">
              <div className="flex items-center space-x-2">
                <img
                  className="w-[22px] h-[22px]"
                  src={tranImg}
                  alt="X"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                />

                <h1 className="text-white font-unbounded text-[16px] font-medium leading-[24px]">
                  + 781.89 USDT
                </h1>
              </div>
              <div>
                <button className="flex items-center justify-center w-[85px] h-[32px] p-[12px_16px] rounded-[4px] bg-[#FEFDFF] gap-[4px]">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AaveTransactions
