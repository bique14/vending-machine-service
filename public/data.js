const siam = {
  slug: 'siam',
  name: 'BTS Siam',
  items: [
    {
      slug: 'item-in-siam',
      name: 'item-name-siam-1',
      image: 'item-image',
      price: '59',
      quantity: {
        total: 100,
        remaining: 53
      }
    }
  ]
}

const payathai = {
  slug: 'payathai',
  name: 'BTS payathai',
  items: [
    {
      slug: 'item-in-payathai',
      name: 'item-name-payathai-1',
      image: 'item-image',
      price: '59',
      quantity: {
        total: 100,
        remaining: 53
      }
    }
  ]
}

const locations = [siam, payathai]

module.exports = locations
