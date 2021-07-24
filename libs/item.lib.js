const check = (items) =>
  items
    .map((i) => {
      const f = i.items
        .filter((i) => i.quantity.remaining < 10)
        .map((i) => i.name)
      return { location: i.name, nearlyOutOfStock: f }
    })
    .filter((i) => i.nearlyOutOfStock.length !== 0)

module.exports = check
