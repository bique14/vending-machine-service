const { Location } = require('../models')

const getAllLocation = async () => {
  return Location.find({}, (error, result) => {
    if (error) return console.error(error)
    return result
  })
}

const getItemsByLocation = async (locationSlug) => {
  return Location.find({ slug: locationSlug }, (error, result) => {
    if (error) return console.error(error)
    return result
  })
}

const buyItem = async (data) => {
  const { body } = data.request

  const locationSelected = await Location.findOne(
    { slug: body.location },
    (error, result) => {
      if (error) return console.error(error)

      return result
    }
  )
  if (locationSelected === null)
    return { status: 404, message: 'location not found' }

  const itemSelected = locationSelected.items.find((i) => i.slug === body.item)

  if (itemSelected === undefined)
    return { status: 404, message: 'item not found' }

  if (itemSelected.quantity.remaining <= 0)
    return { status: 404, message: 'item out of stock' }

  Location.updateOne(
    { slug: body.location, 'items.slug': itemSelected.slug },
    {
      $set: {
        'items.$.quantity.remaining': itemSelected.quantity.remaining - 1
      }
    },
    (error, result) => {
      if (error) return console.error(error)
      return result
    }
  )

  return {
    status: 200,
    location: body.location,
    item: {
      ...itemSelected,
      quantity: {
        ...itemSelected.quantity,
        remaining: itemSelected.quantity.remaining - 1
      }
    }
  }
}

module.exports = {
  getAllLocation,
  getItemsByLocation,
  buyItem
}
