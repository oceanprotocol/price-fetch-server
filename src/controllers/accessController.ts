import { Response } from 'express'

async function accessController(
  tokenSymbol: string,
  timestamp: string,
  res: Response
) {
  console.log('tokenSymbol', tokenSymbol)
  console.log('timestamp', timestamp)
  let price
  // request price
  price = 100
  res.send(price)
}

export default accessController
