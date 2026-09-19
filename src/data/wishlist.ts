const key = 'aurella-wishlist'

export const getWishlist = (): string[] => {
  try { return JSON.parse(localStorage.getItem(key) ?? '[]') as string[] } catch { return [] }
}

export const isWishlisted = (id: string) => getWishlist().includes(id)

export const toggleWishlist = (id: string) => {
  const current = getWishlist()
  const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  localStorage.setItem(key, JSON.stringify(next))
  return next.includes(id)
}

export const removeFromWishlist = (id: string) => localStorage.setItem(key, JSON.stringify(getWishlist().filter((item) => item !== id)))
