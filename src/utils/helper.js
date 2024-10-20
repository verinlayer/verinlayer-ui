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

  return `${parsed.substring(0, chars + 2)}...${parsed.substring(parsed?.length - chars)}`
}

export function shortTx(tx, chars = 4) {
  return `${tx.substring(0, chars + 2)}...${tx.substring(tx?.length - chars)}`
}