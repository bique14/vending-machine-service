interface Item {
  _id: string
  slug: string
  name: string
  image: string
  price: string
  quantity: {
    total: number
    remaining: number
  }
}

interface Location {
  _id: string
  slug: string
  items: Item[]
}
