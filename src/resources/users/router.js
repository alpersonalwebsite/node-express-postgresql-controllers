import { Router } from 'express'

import controllers from './controllers'

const router = Router()

// equals to /api/users
router.route('/').get(controllers.getSomeOrAll)

export default router
