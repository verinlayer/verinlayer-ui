import { useState } from 'react';  // Cần import useState
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import pImg from '../../assets/images/image.png'
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="dashboard">
      <div className="container">
        <Header />
        <main className="main">
          <div className=" text-white font-unbounded text-[52px] font-bold leading-[68px] mr-[100px]  ">
            <h1>
              Dashboard
            </h1>
          </div>


          {/* Tabs Navigation */}
          <div className="p-6">
            <div className="flex space-x-4  text-[var(--Green-400---Main)] font-manrope text-[20px] font-extrabold leading-[28px]">
              <button
                className={`pb-2 px-4 ${activeTab === "overview" ? "border-b-2 border-indigo-600" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`pb-2 px-4 ${activeTab === "Aave Transactions" ? "border-b-2 border-indigo-600" : ""}`}
                onClick={() => setActiveTab("Aave Transactions")}
              >
                Aave Transactions
              </button>
              <button
                className={`pb-2 px-4 ${activeTab === "prooflist" ? "border-b-2 border-indigo-600" : ""}`}
                onClick={() => setActiveTab("prooflist")}
              >
                Prooflist
              </button>

            </div>


          </div>
          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "overview" && <Overview />}
            {activeTab === "prooflist" && <Prooflist />}
            {activeTab === "Aave Transactions" && <AaveTransactions />}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const Overview = () => <div>Overview Content</div>;
const Prooflist = () => <div>Prooflist Content</div>;
const AaveTransactions = () => <div className="w-full h-[728px] flex-shrink-0 rounded-[8px] border border-[#B0A5C7] bg-[rgba(19,41,70,0.70)] backdrop-blur-[4px]">


  <div className="flex items-center justify-between p-6 space-x-4">
    {/* H1 - Logo - H1 */}
    <div className="flex  mt-[32px]">
      {/* First H1 */}
      <h1 className="text-[var(--Text-Heading)] font-manrope text-[24px] font-extrabold leading-[36px] ml-[40px]">
        July 5, 2024
      </h1>

      <div className="flex ml-[321px]">


        <div>
          <div className='flex'>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-[8px] bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z" fill="#1B132F" />
                  <path d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z" fill="#1B132F" />
                </svg>
              </div>
              <div>
                <h1>Supply</h1>
                <p>08:07 AM</p>
              </div>
            </div>

            <div className='flex ml-[200px]'>
              <div className="flex items-center space-x-4 ">
                <div>
                  <a href="#" target="_blank" style={{ border: 'none', outline: 'none' }}>
                    <img src={pImg} alt="X" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
                  </a>
                </div>
                <div>
                  <h1>+ 1,672,68 OP</h1>
                </div>
              </div>
            </div>

            <div className="flex ml-[350px] ">
              <button className="px-6 py-2 text-black bg-white rounded-lg">
                View
              </button>
            </div>
          </div>


          <div className='flex mt-9'>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-[8px] bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z" fill="#1B132F" />
                  <path d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z" fill="#1B132F" />
                </svg>
              </div>
              <div>
                <h1>Repay</h1>
                <p>10:05 PM</p>
              </div>
            </div>

            <div className='flex ml-[200px]'>
              <div className="flex items-center space-x-4 ">
                <div>
                  <a href="#" target="_blank" style={{ border: 'none', outline: 'none' }}>
                    <img src={pImg} alt="X" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
                  </a>
                </div>
                <div>
                  <h1>+ 537.72 USDT</h1>
                </div>
              </div>
            </div>

            <div className="flex ml-[400px] ">
              <button className="px-6 py-2 text-black bg-white rounded-lg">
                View
              </button>
            </div>
          </div>



          <div className='flex mt-9'>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-[8px] bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z" fill="#1B132F" />
                  <path d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z" fill="#1B132F" />
                </svg>
              </div>
              <div>
                <h1>Borrow</h1>
                <p>11:37 PM</p>
              </div>
            </div>

            <div className='flex ml-[200px]'>
              <div className="flex items-center space-x-4 ">
                <div>
                  <a href="#" target="_blank" style={{ border: 'none', outline: 'none' }}>
                    <img src={pImg} alt="X" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
                  </a>
                </div>
                <div>
                  <h1>- 2,781,82 USDT</h1>
                </div>
              </div>
            </div>

            <div className="flex ml-[400px] ">
              <button className="px-6 py-2 text-black bg-white rounded-lg">
                View
              </button>
            </div>
          </div>



        </div>



      </div>
    </div>
  </div>








  <div className="flex items-center justify-between p-6 space-x-4">
    {/* H1 - Logo - H1 */}
    <div className="flex  mt-[32px]">
      {/* First H1 */}
      <h1 className="text-[var(--Text-Heading)] font-manrope text-[24px] font-extrabold leading-[36px] ml-[40px]">
        February 24, 2024
      </h1>

      <div className="flex ml-[250px]">


        <div>
          <div className='flex'>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-[8px] bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z" fill="#1B132F" />
                  <path d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z" fill="#1B132F" />
                </svg>
              </div>
              <div>
                <h1>Collateral usage</h1>
                <p>05:52 AM</p>
              </div>
            </div>

            <div className='flex ml-[200px]'>
              <div className="flex items-center space-x-4 ">

                <a href="#" target="_blank" style={{ border: 'none', outline: 'none' }}>
                  <img src={pImg} alt="X" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
                </a>


                <h1> Collateralization disabled for</h1>

              </div>
            </div>

            <div className="flex ml-[200px] ">
              <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg">
                View
              </button>
            </div>
          </div>


          <div className='flex mt-9'>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-[8px] bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z" fill="#1B132F" />
                  <path d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z" fill="#1B132F" />
                </svg>
              </div>
              <div>
                <h1>Withdraw</h1>
                <p>07:48 PM</p>
              </div>
            </div>

            <div className='flex ml-[200px]'>
              <div className="flex items-center space-x-4 ">
                <div>
                  <a href="#" target="_blank" style={{ border: 'none', outline: 'none' }}>
                    <img src={pImg} alt="X" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
                  </a>
                </div>
                <div>
                  <h1>- 523,91 USDT</h1>
                </div>
              </div>
            </div>

            <div className="flex ml-[400px] ">
              <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg">
                View
              </button>
            </div>
          </div>



          <div className='flex mt-9'>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-[8px] bg-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M24.6634 11.55H14.7934V15.8317L16.625 14C16.9634 13.6617 17.5234 13.6617 17.8617 14C18.2 14.3383 18.2 14.8983 17.8617 15.2367L14.5367 18.55C14.1984 18.8883 13.6384 18.8883 13.3 18.55L9.97504 15.2367C9.80004 15.0617 9.71837 14.84 9.71837 14.6183C9.71837 14.3967 9.81171 14.175 9.98671 14C10.325 13.6617 10.885 13.6617 11.2234 14L13.0434 15.82V11.55H3.33671C2.77671 11.55 2.33337 11.9933 2.33337 12.5533C2.33337 19.425 7.12837 24.22 14 24.22C20.8717 24.22 25.6667 19.425 25.6667 12.5533C25.6667 11.9933 25.2234 11.55 24.6634 11.55Z" fill="#1B132F" />
                  <path d="M14.7933 4.655C14.7933 4.17667 14.3967 3.78 13.9183 3.78C13.44 3.78 13.0433 4.17667 13.0433 4.655V11.5383H14.7933V4.655Z" fill="#1B132F" />
                </svg>
              </div>
              <div>
                <h1>Repay</h1>
                <p>10:05 PM</p>
              </div>
            </div>

            <div className='flex ml-[100px]'>
              <div className="flex items-center space-x-4 ">
                <div>
                  <a href="#" target="_blank" style={{ border: 'none', outline: 'none' }}>
                    <img src={pImg} alt="X" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
                  </a>
                </div>
                <div>
                  <h1>+781.89 USDT</h1>
                </div>
              </div>
            </div>

            <div className="flex ml-[400px] ">
              <button className="px-6 py-2 text-white bg-indigo-600 rounded-lg">
                View
              </button>
            </div>
          </div>



        </div>



      </div>
    </div>
  </div>
</div>

export default Dashboard;
