import { Request, Response } from 'express'
import express from 'express'
import getCurrentPrice from '../controllers/getCurrentPrice'
import getHistoricalPrice from '../controllers/getHistoricalPrice'

const router = express.Router()

/* GET Current Token Price. */
router.get(
  '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/:tokenId',
  function (req: Request, res: Response) {
    getCurrentPrice(req, res)
  }
)

/* GET Historical Token Price. */
router.get(
  '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/:tokenId/:date',
  function (req: Request, res: Response) {
    getHistoricalPrice(req, res)
  }
)

export default router
