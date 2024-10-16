import { Tab } from "rizzui";

import AaveTransactions from "./components/AaveTransactions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Overview from "./components/Overview";
import ProofsList from "./components/ProofsList";

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
              <Tab.List className="border-b-0">
                <Tab.ListItem className="font-unbounded font-medium text-[18px] before:h-[4px]">
                  Overview
                </Tab.ListItem>
                <Tab.ListItem className="font-unbounded font-medium text-[18px] before:h-[4px]">
                  Aave Transactions
                </Tab.ListItem>
                <Tab.ListItem className="font-unbounded font-medium text-[18px] before:h-[4px]">
                  Proofs List
                </Tab.ListItem>
              </Tab.List>
              <Tab.Panels className="pt-0 mt-0">
                <Tab.Panel>
                  <Overview />
                </Tab.Panel>
                <Tab.Panel>
                  <AaveTransactions />
                </Tab.Panel>
                <Tab.Panel>
                  <ProofsList />
                </Tab.Panel>
              </Tab.Panels>
            </Tab>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;