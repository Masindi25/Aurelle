import type { Product } from './products'

export type CartLine = { productId: string; quantity: number; size: string }
const key = 'aurella-cart'

export const getCart = (): CartLine[] => {
  try { return JSON.parse(localStorage.getItem(key) ?? '[]') as CartLine[] } catch { return [] }
}
export const saveCart = (cart: CartLine[]) => localStorage.setItem(key, JSON.stringify(cart))
export const addToCart = (product: Product, size = product.sizes[0], quantity = 1) => {
  const cart = getCart()
  const line = cart.find((item) => item.productId === product.id && item.size === size)
  if (line) line.quantity += quantity
  else cart.push({ productId: product.id, quantity, size })
  saveCart(cart)
}
export const updateCartLine = (index: number, quantity: number) => {
  const cart = getCart()
  if (quantity <= 0) cart.splice(index, 1)
  else if (cart[index]) cart[index].quantity = quantity
  saveCart(cart)
}
export const cartCount = () => getCart().reduce((total, line) => total + line.quantity, 0)
export const cartLinesWithProducts = () => getCart().map((line) => ({ ...line, product: productsById.get(line.productId) })).filter((line) => line.product) as (CartLine & { product: Product })[]
import { products } from './products'
const productsById = new Map(products.map((product) => [product.id, product]))
