import mistImage from '../assets/body mist place holder.jpg'
import mistTwoImage from '../assets/body mist2 place holder.jpg'
import mistThreeImage from '../assets/body mist3 place holder.jpg'
import oilImage from '../assets/body oil place holder.jpg'
import scrubImage from '../assets/body scub dummy.jpg'
import perfumeImage from '../assets/perfume place holder.jpg'
import perfumeTwoImage from '../assets/perfume place holder2.jpg'
import giftOneImage from '../assets/gift sets place holder.jpg'
import giftTwoImage from '../assets/giving sets dummy.jpg'

export type Product = {
  id: string
  name: string
  type: string
  price: number
  category: string
  image: string
  note: string
  description: string
  notes: string[]
  sizes: string[]
  rating: number
  popularity: number
  newest: number
  layerWith: string[]
}

export const products: Product[] = [
  { id: 'petal-kiss', name: 'Petal Kiss', type: 'Body Mist', price: 520, category: 'Mists', image: mistImage, note: 'Soft floral', description: 'A light, pretty veil of petals for mornings that deserve a little more sweetness.', notes: ['Rosewater', 'Peony', 'Vanilla musk'], sizes: ['100 ml', '150 ml'], rating: 4.9, popularity: 98, newest: 9, layerWith: ['Blush Hour', 'Sugar Cloud'] },
  { id: 'sugar-cloud', name: 'Sugar Cloud', type: 'Body Scrub', price: 445, category: 'Scrubs', image: scrubImage, note: 'Sweet cream', description: 'A creamy, softening body scrub that turns your shower into a small ritual.', notes: ['Coconut cream', 'Brown sugar', 'Almond'], sizes: ['200 g', '350 g'], rating: 4.8, popularity: 91, newest: 8, layerWith: ['Petal Kiss', 'Blush Hour'] },
  { id: 'blush-hour', name: 'Blush Hour', type: 'Body Oil', price: 595, category: 'Oils', image: oilImage, note: 'Warm glow', description: 'A silky body oil for luminous skin and a softly scented after-shower glow.', notes: ['Apricot', 'Rose bloom', 'Cashmere'], sizes: ['100 ml', '200 ml'], rating: 4.9, popularity: 96, newest: 10, layerWith: ['Petal Kiss', 'After Hours'] },
  { id: 'after-hours', name: 'After Hours', type: 'Perfume', price: 780, category: 'Perfumes', image: perfumeImage, note: 'Rose and amber', description: 'A warm, feminine fragrance with enough mystery to stay close after sunset.', notes: ['Bergamot', 'Damask rose', 'Amber woods'], sizes: ['30 ml', '50 ml'], rating: 4.7, popularity: 88, newest: 7, layerWith: ['Blush Hour', 'Sugar Cloud'] },
  { id: 'rosewater-veil', name: 'Rosewater Veil', type: 'Body Mist', price: 520, category: 'Mists', image: mistImage, note: 'Fresh petals', description: 'Fresh, airy and effortless. Your everyday layer for a just-bloomed feeling.', notes: ['Rosewater', 'Lily', 'White musk'], sizes: ['100 ml', '150 ml'], rating: 4.6, popularity: 84, newest: 6, layerWith: ['Velvet Bloom', 'Blush Hour'] },
  { id: 'velvet-bloom', name: 'Velvet Bloom', type: 'Perfume', price: 850, category: 'Perfumes', image: perfumeImage, note: 'Deep rose', description: 'A richer rose fragrance with a velvet finish for evenings and occasions.', notes: ['Blackcurrant', 'Velvet rose', 'Sandalwood'], sizes: ['30 ml', '50 ml'], rating: 4.8, popularity: 90, newest: 5, layerWith: ['Rosewater Veil', 'Blush Hour'] },
  { id: 'petal-haze', name: 'Petal Haze', type: 'Body Mist', price: 540, category: 'Mists', image: mistTwoImage, note: 'Fresh and airy', description: 'A barely-there mist with a clean floral lift and a soft, pretty finish.', notes: ['Neroli', 'Peony', 'Soft musk'], sizes: ['100 ml', '150 ml'], rating: 4.7, popularity: 79, newest: 11, layerWith: ['Sugar Cloud', 'Blush Hour'] },
  { id: 'blush-bloom', name: 'Blush Bloom', type: 'Body Mist', price: 560, category: 'Mists', image: mistThreeImage, note: 'Soft pink florals', description: 'A rosy, youthful mist made for a fresh start and a little confidence.', notes: ['Pink pepper', 'Rose petals', 'Vanilla'], sizes: ['100 ml', '150 ml'], rating: 4.8, popularity: 86, newest: 12, layerWith: ['After Hours', 'Sugar Cloud'] },
  { id: 'midnight-rose', name: 'Midnight Rose', type: 'Perfume', price: 895, category: 'Perfumes', image: perfumeTwoImage, note: 'Velvet rose', description: 'A luminous rose perfume with a deep, modern trail made for memorable nights.', notes: ['Plum', 'Midnight rose', 'Dark amber'], sizes: ['30 ml', '50 ml'], rating: 4.9, popularity: 93, newest: 13, layerWith: ['Blush Hour', 'Rosewater Veil'] },
  { id: 'pretty-pair', name: 'The Pretty Pair', type: 'Gift Set', price: 890, category: 'Gifting', image: giftOneImage, note: 'Mist and glow', description: 'A ready-to-give pairing for someone who deserves a little everyday luxury.', notes: ['Petal Kiss', 'Blush Hour', 'Gift wrap'], sizes: ['Curated set'], rating: 4.9, popularity: 94, newest: 14, layerWith: ['Petal Kiss', 'Blush Hour'] },
  { id: 'ritual-box', name: 'Aurella Ritual Box', type: 'Gift Set', price: 1250, category: 'Gifting', image: giftTwoImage, note: 'A little of everything', description: 'The complete Aurella ritual, beautifully gathered for gifting or keeping close.', notes: ['Body care', 'Fragrance', 'Gift wrap'], sizes: ['Curated set'], rating: 5, popularity: 97, newest: 15, layerWith: ['Midnight Rose', 'Sugar Cloud'] },
]

export const formatPrice = (price: number) => `R${price.toLocaleString('en-ZA')}.00`
export const findProduct = (id: string | null) => products.find((product) => product.id === id) ?? products[0]
