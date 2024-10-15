import React from 'react'
import { Tab } from 'rizzui'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <Header />
        <main className="main">
          <div className="font-unbounded text-[52px] leading-[72pxp] font-bold">
            <h1>Dashboard</h1>
          </div>

          <div>
            <Tab>
              <Tab.List>
                <Tab.ListItem>Overview</Tab.ListItem>
                <Tab.ListItem>Aave Transactions</Tab.ListItem>
                <Tab.ListItem>Proofs List</Tab.ListItem>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>Recent panel</Tab.Panel>
                <Tab.Panel>Popular panel</Tab.Panel>
                <Tab.Panel>Trending panel</Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
