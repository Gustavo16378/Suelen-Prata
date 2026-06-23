import { waInterest } from './site'
import { IMG, img } from './images'

export interface Product {
  name: string
  tag: string
  price: string
  stars: string
  reviews: string
  cap: string
  img: string
  href: string
  /** Descrição curta da peça (linha sob o nome). */
  notes: string
}

const raw: Array<Omit<Product, 'img' | 'href'> & { base: string }> = [
  { name: 'Colar Cordão Cubano', tag: 'Colar', price: 'R$ 229', stars: '★★★★★', reviews: '(214)', cap: 'corrente de prata', base: IMG.chain, notes: 'Corrente cubana maciça, brilho intenso' },
  { name: 'Anel Aparador Prata', tag: 'Anel', price: 'R$ 159', stars: '★★★★★', reviews: '(187)', cap: 'anel de prata', base: IMG.ring, notes: 'Aro aparador com acabamento espelhado' },
  { name: 'Pulseira Prata 925', tag: 'Pulseira', price: 'R$ 169', stars: '★★★★☆', reviews: '(132)', cap: 'pulseira de prata', base: IMG.bracelet, notes: 'Elos delicados com fecho seguro' },
  { name: 'Corrente Veneziana', tag: 'Colar', price: 'R$ 199', stars: '★★★★★', reviews: '(98)', cap: 'corrente · produto', base: IMG.chainP, notes: 'Trançado veneziano de caimento fluido' },
]

export const bestSellers: Product[] = raw.map(({ base, ...p }) => ({
  ...p,
  img: img(base, 460, 575),
  href: waInterest(p.name),
}))
