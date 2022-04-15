import { expect } from 'chai'
import request from 'supertest'
import app from '../src/app'

describe('Price Request Tests', () => {
  it('Starts the server', async () => {
    request(app)
      .get(
        '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/ocean-protocol'
      )
      .expect('Content-Type', /json/)
      .expect(200)
  })
  it('Gets the current price of OCEAN', async () => {
    const response = await request(app)
      .get(
        '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/ocean-protocol'
      )
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body.usd).to.be.within(0.1, 100)
  })
  it('Gets the current price of USDT', async () => {
    const response = await request(app)
      .get('/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/tether')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body.usd).to.be.within(0.9, 1.1)
  })
  it('Gets the historical price of OCEAN', async () => {
    const response = await request(app)
      .get(
        '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/ocean-protocol/30-12-2021'
      )
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body.usd).to.equal(0.8320073253954497)
  })
  it('Gets the historical price of Bitcoin', async () => {
    const response = await request(app)
      .get(
        '/ipfs/QmTkzDwWqPbnAh5YiV5VwcTLnGdwSNsNTn2aDxdXBFca7D/bitcoin/30-12-2017'
      )
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body.usd).to.equal(13620.3618741461)
  })
})
