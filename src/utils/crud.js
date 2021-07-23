import { toNumber } from '../utils/helpers'

export const getSomeOrAll = (model) => async (req, res) => {
  try {
    const docs = await model.findAll({
      limit: toNumber(req.query.limit || 40),
      offset: toNumber(req.query.offset || 0)
    })

    res.status(200).json({ data: docs })
  } catch (err) {
    console.error(err)
    res.status(400).end()
  }
}

export const genericControllers = (model) => ({
  getSomeOrAll: getSomeOrAll(model)
})
