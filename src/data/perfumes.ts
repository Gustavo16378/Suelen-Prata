import { waInterest } from './site'
import { img } from './images'

export interface PerfumeFamily {
  name: string
  note: string
}

// Famílias olfativas que aparecem no catálogo (reflete as fotos da loja).
export const perfumeFamilies: PerfumeFamily[] = [
  { name: 'Árabes & Orientais', note: 'Intensos e marcantes, alta fixação' },
  { name: 'Florais', note: 'Delicado e feminino, para o dia' },
  { name: 'Amadeirados', note: 'Quente e sofisticado, para a noite' },
  { name: 'Gourmand', note: 'Doce e envolvente, assinatura' },
  { name: 'Inspirações', note: 'As grandes grifes, do seu jeito' },
  { name: 'Corporais & Kits', note: 'Hidratantes, body splash e combos' },
]

export interface Perfume {
  name: string
  type: string
  cap: string
  img: string
  href: string
  /** Família olfativa / linha — pílula exibida no card. */
  family: string
  /** Notas / descrição curta da fragrância. */
  notes: string
  /** Categoria/fileira na vitrine (ex.: "Árabes"). */
  group: string
}

// ⚠️ TODO: revisar com a Suelen — nomes, tipos, famílias e descrições foram
// gerados por IA a partir do NOME DO ARQUIVO das fotos. Confirmar marcas,
// volumes (ml) e famílias olfativas com a loja.
const raw: Array<Omit<Perfume, 'img' | 'href'> & { file: string }> = [
  // ── Destaque (1º = card grande "Destaque da curadoria") ──────────
  { file: 'perfume-yara-rosa-dourado-1.webp', name: 'Lattafa Yara', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Gourmand floral', group: 'Árabes', notes: 'Cremoso, com heliotrópio, baunilha e notas frutadas' },

  // ── Árabes ───────────────────────────────────────────────────────
  { file: 'perfume-arabe-dourado-1.webp', name: 'Perfume Árabe Gold', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Amadeirado árabe', group: 'Árabes', notes: 'Dourado, intenso e de longa fixação' },
  { file: 'perfume-arabe-dourado-2.webp', name: 'Perfume Árabe Imperial', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Oriental amadeirado', group: 'Árabes', notes: 'Notas quentes e especiarias, presença marcante' },
  { file: 'perfume-arabe-rosa-1.webp', name: 'Perfume Árabe Rosé', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Floral oriental', group: 'Árabes', notes: 'Floral em tom rosado, doce e envolvente' },
  { file: 'perfume-arabe-roxo-1.webp', name: 'Perfume Árabe Violeta', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Oriental adocicado', group: 'Árabes', notes: 'Frutado e amadeirado, sofisticação noturna' },
  { file: 'perfume-arabic-collection-dania-1.webp', name: 'Dania · Arabic Collection', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Floral almiscarado', group: 'Árabes', notes: 'Da linha Arabic Collection, doçura elegante' },
  { file: 'perfume-dalal-lattafa-feminino-1.webp', name: 'Lattafa Dalal', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Floral oriental', group: 'Árabes', notes: 'Feminino floral e adocicado, da Lattafa' },
  { file: 'perfume-lattafa-asad-bourbon-1.webp', name: 'Lattafa Asad Bourbon', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Amadeirado gourmand', group: 'Árabes', notes: 'Intenso, com baunilha e madeiras nobres' },
  { file: 'perfume-sabah-al-ward-rosa-1.webp', name: 'Sabah Al Ward Rosé', type: 'Eau de Parfum · árabe', cap: 'perfume árabe', family: 'Floral rosa', group: 'Árabes', notes: 'Rosas e doçura árabe, delicado e marcante' },

  // ── Brand Collection & inspirações ───────────────────────────────
  { file: 'perfume-brand-collection-1.webp', name: 'Brand Collection', type: 'Eau de Parfum · inspiração', cap: 'perfume', family: 'Inspirações', group: 'Brand Collection & Inspirações', notes: 'Fragrância inspirada nas grandes grifes' },
  { file: 'perfume-brand-collection-givenchy-1.webp', name: 'Brand Collection · Inspiração Givenchy', type: 'Eau de Parfum · inspiração', cap: 'perfume', family: 'Floral amadeirado', group: 'Brand Collection & Inspirações', notes: 'Inspiração na assinatura Givenchy' },
  { file: 'perfume-brand-collection-rosa-1.webp', name: 'Brand Collection Rosé', type: 'Eau de Parfum · inspiração', cap: 'perfume', family: 'Floral frutado', group: 'Brand Collection & Inspirações', notes: 'Inspiração feminina em tom rosado' },
  { file: 'perfume-brand-collection-salto-alto-1.webp', name: 'Brand Collection · Salto Alto', type: 'Eau de Parfum · inspiração', cap: 'perfume', family: 'Floral chipre', group: 'Brand Collection & Inspirações', notes: 'Inspiração feminina sofisticada e marcante' },
  { file: 'perfume-inspiracao-good-girl-1.webp', name: 'Inspiração Good Girl', type: 'Eau de Parfum · inspiração', cap: 'perfume', family: 'Gourmand floral', group: 'Brand Collection & Inspirações', notes: 'Inspiração no ícone feminino, doce e marcante' },
  { file: 'perfume-armaf-club-de-nuit-1.webp', name: 'Armaf Club de Nuit', type: 'Eau de Parfum', cap: 'perfume', family: 'Amadeirado aromático', group: 'Brand Collection & Inspirações', notes: 'Clássico marcante, frutado e amadeirado' },
  { file: 'perfume-club-de-nuit-feminino-1.webp', name: 'Club de Nuit Feminino', type: 'Eau de Parfum', cap: 'perfume', family: 'Floral frutado', group: 'Brand Collection & Inspirações', notes: 'Versão feminina, frutada e envolvente' },
  { file: 'perfume-club-de-nuit-masculino-1.webp', name: 'Club de Nuit Masculino', type: 'Eau de Parfum', cap: 'perfume', family: 'Amadeirado', group: 'Brand Collection & Inspirações', notes: 'Versão masculina, intensa e amadeirada' },

  // ── Femininos / florais ──────────────────────────────────────────
  { file: 'perfume-floral-rosa-1.webp', name: 'Floral Rosé', type: 'Eau de Parfum', cap: 'perfume', family: 'Floral', group: 'Femininos', notes: 'Buquê floral leve em tom rosado' },
  { file: 'perfume-glam-rosa-colecao-1.webp', name: 'Glam Rosé', type: 'Eau de Parfum', cap: 'perfume', family: 'Floral glam', group: 'Femininos', notes: 'Fragrância glamourosa com brilho rosé' },
  { file: 'perfume-pink-eclipse-feminino-1.webp', name: 'Pink Eclipse', type: 'Eau de Parfum', cap: 'perfume', family: 'Floral frutado', group: 'Femininos', notes: 'Feminino frutado com fundo adocicado' },
  { file: 'perfume-roxo-feminino-1.webp', name: 'Violeta Noir', type: 'Eau de Parfum', cap: 'perfume', family: 'Oriental floral', group: 'Femininos', notes: 'Feminino roxo, misterioso e envolvente' },
  { file: 'frasco-perfume-dourado-ornamentado-1.webp', name: 'Perfume Ornamental Dourado', type: 'Eau de Parfum', cap: 'frasco dourado', family: 'Oriental', group: 'Femininos', notes: 'Frasco ornamentado dourado, fragrância marcante' },

  // ── Kits & combos ────────────────────────────────────────────────
  { file: 'combo-perfume-hidratante-1.webp', name: 'Combo Perfume + Hidratante', type: 'Kit · perfume + hidratante', cap: 'combo perfumaria', family: 'Kit', group: 'Kits & Combos', notes: 'Fragrância e hidratante para um ritual completo' },
  { file: 'kit-corporal-miss-rose-1.webp', name: 'Kit Corporal Miss Rosé', type: 'Kit corporal', cap: 'kit corporal', family: 'Beleza', group: 'Kits & Combos', notes: 'Cuidados corporais com toque floral e aveludado' },
  { file: 'perfumes-e-cremes-hidratantes-1.webp', name: 'Perfumes & Hidratantes', type: 'Linha corporal', cap: 'linha corporal', family: 'Kit', group: 'Kits & Combos', notes: 'Combinação de perfumes e cremes hidratantes' },

  // ── Coleções (várias fragrâncias) ────────────────────────────────
  { file: 'colecao-de-perfumes-brand-1.webp', name: 'Coleção Brand Collection', type: 'Coleção · inspirações', cap: 'coleção de perfumes', family: 'Inspirações', group: 'Coleções', notes: 'Seleção de fragrâncias inspiradas nas grifes' },
  { file: 'perfumes-arabes-coloridos-1.webp', name: 'Perfumes Árabes · Coleção', type: 'Coleção · árabe', cap: 'coleção árabe', family: 'Orientais', group: 'Coleções', notes: 'Variedade de fragrâncias árabes coloridas' },
  { file: 'perfumes-arabic-collection-1.webp', name: 'Arabic Collection', type: 'Coleção · árabe', cap: 'coleção árabe', family: 'Orientais', group: 'Coleções', notes: 'Linha Arabic Collection completa' },
  { file: 'perfumes-luxuosos-dourados-1.webp', name: 'Perfumes Luxo Gold', type: 'Coleção premium', cap: 'coleção premium', family: 'Orientais', group: 'Coleções', notes: 'Seleção de fragrâncias dourados de luxo' },
  { file: 'trio-perfumes-arabic-1.webp', name: 'Trio Árabe', type: 'Kit · 3 fragrâncias', cap: 'trio de perfumes', family: 'Orientais', group: 'Coleções', notes: 'Trio de fragrâncias árabes para experimentar' },
]

/** Vitrine de perfumaria — todos os itens do catálogo. */
export const perfumes: Perfume[] = raw.map(({ file, ...p }) => ({
  ...p,
  img: img(file, 460, 575),
  href: waInterest(p.name),
}))

// Ordem das fileiras da perfumaria (cada grupo vira uma linha com carrossel).
const PERFUME_ORDER = ['Árabes', 'Brand Collection & Inspirações', 'Femininos', 'Kits & Combos', 'Coleções']

/** Perfumaria agrupada por categoria, na ordem das fileiras (grupos vazios saem). */
export const perfumeGroups = PERFUME_ORDER
  .map((label) => ({ label, items: perfumes.filter((p) => p.group === label) }))
  .filter((g) => g.items.length > 0)
