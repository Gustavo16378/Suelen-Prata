import { waInterest } from './site'
import { IMG, img } from './images'

export interface PerfumeFamily {
  name: string
  note: string
  price: string
}

export const perfumeFamilies: PerfumeFamily[] = [
  { name: 'Florais', note: 'Delicado, feminino, para o dia', price: 'a partir de R$ 159' },
  { name: 'Amadeirados', note: 'Quente e marcante, para a noite', price: 'a partir de R$ 189' },
  { name: 'Cítricos', note: 'Leve e fresco, sempre versátil', price: 'a partir de R$ 149' },
  { name: 'Gourmand', note: 'Doce e envolvente, assinatura', price: 'a partir de R$ 199' },
]

export interface Perfume {
  name: string
  type: string
  price: string
  cap: string
  img: string
  href: string
  /** Família olfativa / linha (ex.: "Floral fresco"). */
  family: string
  /** Notas / descrição curta da fragrância. */
  notes: string
}

const raw: Array<Omit<Perfume, 'img' | 'href'> & { base: string }> = [
  { name: 'Brisa Eau de Toilette', type: 'Eau de Toilette · 75ml', price: 'R$ 179', cap: 'perfume claro', base: IMG.perfumeB, family: 'Floral fresco', notes: 'Bergamota, flor de laranjeira & almíscar branco' },
  { name: 'Verdejante', type: 'Eau de Parfum · 50ml', price: 'R$ 169', cap: 'perfume verde', base: IMG.perfumeC, family: 'Amadeirado verde', notes: 'Folhas verdes, gerânio & vetiver' },
  { name: 'Body Splash Algodão', type: 'Body splash · 200ml', price: 'R$ 89', cap: 'body splash', base: IMG.splash, family: 'Clean cotton', notes: 'Algodão macio, musk suave & cedro' },
  { name: 'Óleo Corporal Seda', type: 'Óleo corporal · 60ml', price: 'R$ 119', cap: 'óleo corporal', base: IMG.oil, family: 'Aveludado', notes: 'Toque de seda com brilho discreto na pele' },
  { name: 'Batom & Cosméticos', type: 'Cosméticos', price: 'R$ 69', cap: 'cosméticos', base: IMG.cosmetic, family: 'Beleza', notes: 'Cores autorais com acabamento aveludado' },
]

export const perfumes: Perfume[] = raw.map(({ base, ...p }) => ({
  ...p,
  img: img(base, 460, 575),
  href: waInterest(p.name),
}))
