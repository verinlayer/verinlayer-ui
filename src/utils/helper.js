import { isAddress } from 'viem'

export function formatAmount(amount, maximumFractionDigits = 10) {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  })
}

export function shortAddress(address, chars = 4) {
  const parsed = isAddress(address)

  if (!parsed) {
    return `Invalid 'address' '${address}'`
  }

  return `${address.substring(0, chars + 2)}...${address.substring(address?.length - chars)}`
}

export function shortTx(tx, chars = 4) {
  return `${tx.substring(0, chars + 2)}...${tx.substring(tx?.length - chars)}`
}