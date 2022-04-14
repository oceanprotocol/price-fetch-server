import { Request, Response } from 'express'
import express from 'express'
import requestPrice from '../controllers/requestPrice'

const router = express.Router()

/* GET Access role premissions. */
router.get(
  ' /ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/',
  function (req: Request, res: Response) {
    // Request Price
    console.log('req', req)
    requestPrice('string', 'string 2', res)
  }
)

export default router
