import { useNavigate } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import AAVEImg from '../../assets/images/AAVE.png'
import compoundImg from '../../assets/images/compound.svg'
import uniswapImg from '../../assets/images/uniswap.png'
import eigenLayerImg from '../../assets/images/eigenlayer.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">
      <div className="container">
        <Header />
        <main className="main">
          <div className="font-unbounded text-[52px] leading-[72pxp]">
            <h1>
            Consolidate all blockchain history <br />
              {/* all blockchain history */}
            </h1>
            <h1 className="font-bold text-green-400">Create an universal credit scoring system .</h1>
          </div>

          <div className="mt-[56px] text-heading">
            Current supporting projects
          </div>
          <div className="mt-[20px] flex space-x-[24px]">
            <div
              className="card w-[440px] flex items-center cursor-pointer"
              onClick={() => navigate('/dashboard')}
            >
              <div>
                <img src={AAVEImg} alt="AAVE" />
              </div>

              <div className="ml-[24px]">
                <div className="text-[24px] font-bold font-unbounded">AAVE</div>
                <div className="font-medium text-sub-heading">
                  The world’s largest liquidity protocol. Supply, borrow, swap,
                  stake and more.
                </div>
              </div>
            </div>

            <div className="card w-[440px] flex items-center">
              <div>
                <img src={compoundImg} alt="AAVE" />
              </div>

              <div className="ml-[24px]">
                <div className="text-[24px] font-bold font-unbounded">
                  Compound
                </div>
                <div className="font-medium text-sub-heading">
                  Earn interest or borrow crypto via an automated lending
                  protocol.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[56px] text-heading">Coming soon</div>
          <div className="mt-[20px] flex space-x-[24px]">
            <div className="card w-[440px] flex items-center">
              <div>
                <img src={uniswapImg} alt="AAVE" />
              </div>

              <div className="ml-[24px]">
                <div className="text-[24px] font-bold font-unbounded">
                  UniSwap
                </div>
                <div className="font-medium text-sub-heading">
                  Swapping made simple. Access thousands of tokens on 11+
                  chains.
                </div>
              </div>
            </div>

            <div className="card w-[440px] flex items-center">
              <div>
                <img src={eigenLayerImg} alt="AAVE" />
              </div>

              <div className="ml-[24px]">
                <div className="text-[24px] font-bold font-unbounded">
                  EigenLayer
                </div>
                <div className="font-medium text-sub-heading">
                  Re-stake assets for added security across multiple services.
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
