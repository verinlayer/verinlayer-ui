import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <Header />
        <main className="main">
          <div className="font-unbounded text-[52px] leading-[72pxp]">
            <h1>
              Seamlessly unify <br />
              all blockchain activities
            </h1>
            <h1>In ONE platform</h1>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
