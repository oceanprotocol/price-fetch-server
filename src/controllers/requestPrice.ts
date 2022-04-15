import { Request, Response } from 'express'
import fetch from 'cross-fetch'

async function accessController(req: Request, res: Response) {
  try {
    const { tokenId } = req.params
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`
    const response = await fetch(url)
    const body = await response.json()
    res.send(body[tokenId])
  } catch (error) {
    console.error('ERROR:', error)
    res.send(error)
  }
}

export default accessController
