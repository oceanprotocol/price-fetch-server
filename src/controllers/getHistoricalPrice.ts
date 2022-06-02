import { Request, Response } from 'express'
import fetch from 'cross-fetch'
import cache from 'memory-cache'

async function historicalPrice(tokenId: string, timestamp: number) {
  try {
    const date = new Date(timestamp * 1000)
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateString = `${day}-${month}-${year}`
    const url = `https://api.coingecko.com/api/v3/coins/${tokenId}/history?date=${dateString}`
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
      price = await historicalPrice(tokenId, parseInt(date))
    }
    res.send(price)
  } catch (error) {
    console.error('ERROR:', error)
    res.send(error)
  }
}

export default getHistoricalPrice
