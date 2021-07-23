import { genericControllers } from '../../utils/crud'
import db from '../../utils/db'

export default genericControllers(db.applications)
