import { Request, Response } from 'express'
import fetch from 'cross-fetch'
import cache from 'memory-cache'

async function historicalPrice(tokenId: string, date: string) {
  try {
    const url = `https://api.coingecko.com/api/v3/coins/${tokenId}/history?date=${date}`
    const response = await fetch(url)
    const body = await response.json()
    const price = { usd: body.market_data.current_price.usd }
    cache.put(`${tokenId}-${date}`, price)
    return price
  } catch (error) {
    console.error('ERROR:', error)
  }
}

async function getHistoricalPrice(req: Request, res: Response) {
  try {
    const { tokenId, date } = req.params
    let price = cache.get(`${tokenId}-${date}`)
    if (price === null) {
      price = await historicalPrice(tokenId, date)
    }
    res.send(price)
  } catch (error) {
    console.error('ERROR:', error)
    res.send(error)
  }
}

export default getHistoricalPrice
