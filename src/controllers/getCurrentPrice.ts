import { Request, Response } from 'express'
import fetch from 'cross-fetch'
import cache from 'memory-cache'

async function currentPrice(tokenId: string) {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`
    const response = await fetch(url)
    const body = await response.json()
    cache.put(tokenId, body[tokenId], 900000) // Priced cached for 15 mins
    return body[tokenId]
  } catch (error) {
    console.error('ERROR:', error)
  }
}
async function getCurrentPrice(req: Request, res: Response) {
  try {
    const { tokenId } = req.params
    let price = cache.get(tokenId)
    if (price === null) {
      price = await currentPrice(tokenId)
    }
    res.send(price)
  } catch (error) {
    console.error('ERROR:', error)
    res.send(error)
  }
}

export default getCurrentPrice
