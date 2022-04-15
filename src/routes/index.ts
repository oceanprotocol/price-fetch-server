import { Request, Response } from 'express'
import express from 'express'
import requestPrice from '../controllers/requestPrice'

const router = express.Router()

/* GET Current Token Price. */
router.get(
  '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/:tokenId',
  function (req: Request, res: Response) {
    requestPrice(req, res)
  }
)

export default router
