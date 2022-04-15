import { Request, Response } from 'express'
import fetch from 'cross-fetch'

async function historicalPrice(req: Request, res: Response) {
  try {
    const { tokenId, date } = req.params
    const url = `https://api.coingecko.com/api/v3/coins/${tokenId}/history?date=${date}`
    const response = await fetch(url)
    const body = await response.json()
    res.send({ usd: body.market_data.current_price.usd })
  } catch (error) {
    console.error('ERROR:', error)
    res.send(error)
  }
}

export default historicalPrice
