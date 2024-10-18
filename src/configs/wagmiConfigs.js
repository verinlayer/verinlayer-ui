import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { sepolia } from "viem/chains"

import { WALLETCONNECT_PROJECT_ID } from "../utils/setup"

export const wagmiConfig = getDefaultConfig({
  appName: 'Verin Layer',
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: [sepolia],
  ssr: false,
})