import request from 'superagent'

import { start } from '../server'

const baseURL = 'http://localhost:5000'

describe('Test endpoints...', () => {
  beforeAll(async () => {
    await start()
  })

  describe('Test /api endpoint', () => {
    it('gets the proper response status code, 200, for /api', async () => {
      const response = await request.get(`${baseURL}/api`)

      expect(response.status).toBe(200)
    })

    it('gets the proper response body message for /api', async () => {
      const response = await request.get(`${baseURL}/api`)

      expect(response.body.message).toBe('Node.js, Express, and PostgreSQL API!')
    })
  })

  describe('Test /api/users endpoint', () => {
    it('gets the proper response status code, 200, for api/users', async () => {
      const response = await request.get(`${baseURL}/api/users`)

      expect(response.status).toBe(200)
    })

    it('has the property data on the payload for api/users', async () => {
      const response = await request.get(`${baseURL}/api/users`)

      expect(response.body.data).toBeTruthy()
    })
  })
})
