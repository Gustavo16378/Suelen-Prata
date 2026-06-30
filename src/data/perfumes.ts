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

// Nomes/marcas IDENTIFICADOS lendo o rótulo de cada foto (Lattafa, Al Wataniah,
// Armaf, Brand Collection, etc.).
// ⚠️ TODO: revisar com a Suelen — confirmar volumes (ml), preços e as
// "inspirações" dos contratipos. As notas olfativas são uma referência.
const raw: Array<Omit<Perfume, 'img' | 'href'> & { file: string }> = [
  // ── Árabes (Lattafa · Al Wataniah · Maison Alhambra) ─────────────
  // Destaque (1º = card grande "Destaque da curadoria")
  { file: 'perfume-yara-rosa-dourado-1.webp', name: 'Yara Candy', type: 'Lattafa · Eau de Parfum 100ml', cap: 'perfume árabe', family: 'Gourmand frutado', group: 'Árabes', notes: 'Versão pink da Yara: frutas vermelhas, baunilha e toque tropical' },
  { file: 'perfume-arabe-dourado-1.webp', name: 'Tharwah Gold', type: 'Lattafa Pride · Eau de Parfum', cap: 'perfume árabe', family: 'Âmbar amadeirado', group: 'Árabes', notes: 'Dourado e marcante, âmbar com fundo doce' },
  { file: 'perfume-arabe-dourado-2.webp', name: 'Fakhar Rose', type: 'Lattafa · Eau de Parfum', cap: 'perfume árabe', family: 'Floral frutado', group: 'Árabes', notes: 'O "perfume da sereia": floral frutado elegante' },
  { file: 'perfume-dalal-lattafa-dourado-1.webp', name: 'Dalal', type: 'Lattafa · Eau de Parfum 100ml', cap: 'perfume árabe', family: 'Floral oriental', group: 'Árabes', notes: 'Feminino sofisticado, floral com fundo cremoso' },
  { file: 'perfume-lattafa-asad-bourbon-1.webp', name: 'Asad Bourbon', type: 'Lattafa · Eau de Parfum 100ml', cap: 'perfume árabe', family: 'Amadeirado gourmand', group: 'Árabes', notes: 'Masculino intenso: bourbon, baunilha e madeiras' },
  { file: 'frasco-perfume-dourado-ornamentado-1.webp', name: 'Afeef', type: 'Lattafa · Eau de Parfum', cap: 'perfume árabe', family: 'Floral frutado', group: 'Árabes', notes: 'O "perfume do pavão": pêssego suculento, tuberosa e âmbar' },
  { file: 'perfume-arabe-rosa-1.webp', name: 'Sabah Al Ward', type: 'Al Wataniah · Eau de Parfum', cap: 'perfume árabe', family: 'Floral adocicado', group: 'Árabes', notes: 'Rosas e doçura árabe, feminino marcante' },
  { file: 'perfume-arabe-roxo-1.webp', name: 'Sabah Al Ward Delilah', type: 'Al Wataniah · Eau de Parfum', cap: 'perfume árabe', family: 'Floral gourmand', group: 'Árabes', notes: 'Versão roxa: floral doce com baunilha' },
  { file: 'perfume-sabah-al-ward-rosa-1.webp', name: 'Sabah Al Ward Sugar', type: 'Al Wataniah · Eau de Parfum', cap: 'perfume árabe', family: 'Floral doce', group: 'Árabes', notes: 'Versão Sugar: rosas e açúcar, delicado e feminino' },
  { file: 'perfume-arabic-collection-dania-1.webp', name: 'Arabic Collection Nº A040 · Dania', type: 'Eau de Parfum · 25ml', cap: 'perfume árabe', family: 'Floral frutado', group: 'Árabes', notes: 'Contratipo árabe feminino, frutado e doce' },
  { file: 'perfume-floral-rosa-1.webp', name: 'Layaan', type: 'Lattafa · Eau de Parfum', cap: 'perfume árabe', family: 'Floral frutado', group: 'Árabes', notes: 'Floral frutado feminino, leve e romântico' },
  { file: 'perfume-pink-eclipse-feminino-1.webp', name: 'Pink Eclipse', type: 'Maison Alhambra · Eau de Parfum 100ml', cap: 'perfume árabe', family: 'Floral adocicado', group: 'Árabes', notes: 'Feminino floral e adocicado, elegante e marcante' },

  // ── Club de Nuit (Armaf) ─────────────────────────────────────────
  // (a foto da caixa no fundo branco foi removida — mantida só a lifestyle)
  { file: 'perfume-club-de-nuit-feminino-1.webp', name: 'Club de Nuit Woman', type: 'Armaf · Eau de Parfum 105ml', cap: 'perfume', family: 'Chipre frutado', group: 'Club de Nuit · Armaf', notes: 'Feminino elegante, frutado e amadeirado' },
  { file: 'perfume-club-de-nuit-masculino-1.webp', name: 'Club de Nuit Intense Man', type: 'Armaf · Eau de Toilette 105ml', cap: 'perfume', family: 'Amadeirado frutado', group: 'Club de Nuit · Armaf', notes: 'Masculino marcante: abacaxi, bétula e baunilha' },
  { file: 'perfumes-coloridos-enfileirados-1.webp', name: 'Club de Nuit · Coleção', type: 'Armaf · Coleção', cap: 'coleção Armaf', family: 'Amadeirados', group: 'Club de Nuit · Armaf', notes: 'Vários: Intense, Impériale e edições Armaf' },

  // ── Brand Collection (contratipos · 25ml) ────────────────────────
  { file: 'perfume-inspiracao-good-girl-1.webp', name: 'Brand Collection Nº 126', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Gourmand floral', group: 'Brand Collection', notes: 'Inspiração Good Girl (Carolina Herrera)' },
  { file: 'perfume-brand-collection-salto-alto-1.webp', name: 'Brand Collection Nº 173', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Floral amadeirado', group: 'Brand Collection', notes: 'Inspiração Good Girl Légère (Carolina Herrera)' },
  { file: 'perfume-glam-rosa-colecao-1.webp', name: 'Brand Collection Nº 332 · Glam', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Floral frutado', group: 'Brand Collection', notes: 'Salto rosa glitter · inspiração Good Girl Glam' },
  { file: 'perfume-brand-collection-givenchy-1.webp', name: 'Brand Collection Nº 382', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Floral amadeirado', group: 'Brand Collection', notes: "Inspiração L'Interdit (Givenchy)" },
  { file: 'perfume-brand-collection-1.webp', name: 'Brand Collection Nº 303', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Gourmand floral', group: 'Brand Collection', notes: 'Inspiração Devotion (Dolce & Gabbana)' },
  { file: 'perfume-brand-collection-rosa-1.webp', name: 'Brand Collection Nº 017', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Floral frutado', group: 'Brand Collection', notes: 'Inspiração Nina (Nina Ricci)' },
  { file: 'perfume-roxo-feminino-1.webp', name: 'Dream Brand Collection Nº 043 · Ange A', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Âmbar amadeirado', group: 'Brand Collection', notes: 'Inspiração Alien (Thierry Mugler)' },
  { file: 'perfume-vermelho-brand-collection-1.webp', name: 'Brand Collection Nº 027', type: 'Contratipo · 25ml', cap: 'contratipo', family: 'Oriental baunilha', group: 'Brand Collection', notes: 'Inspiração Hypnotic Poison (Dior)' },

  // ── Kits & Combos ────────────────────────────────────────────────
  { file: 'combo-perfume-hidratante-1.webp', name: 'Combo Sabah Al Ward', type: 'Combo · perfume + creme corporal', cap: 'combo perfumaria', family: 'Kit', group: 'Kits & Combos', notes: 'Perfume Sabah Al Ward + creme corporal, o combo perfeito' },
  { file: 'kit-corporal-miss-rose-1.webp', name: 'Kit Miss Rosé · Daydream', type: 'Kit corporal · perfume + hidratante', cap: 'kit corporal', family: 'Beleza', group: 'Kits & Combos', notes: 'Cuidados corporais com toque floral e aveludado' },

  // ── Coleções (vários frascos por foto) ───────────────────────────
  { file: 'perfumes-arabes-coloridos-1.webp', name: 'Sabah Al Ward · Coleção', type: 'Coleção · árabe', cap: 'coleção árabe', family: 'Florais', group: 'Coleções', notes: 'Sabah Al Ward nas cores: Sugar, Delilah e vermelho' },
  { file: 'perfumes-luxuosos-dourados-1.webp', name: 'Fakhar Lattafa · Coleção', type: 'Coleção · árabe', cap: 'coleção árabe', family: 'Orientais', group: 'Coleções', notes: 'Trio Fakhar: Gold, Rose e Black' },
  { file: 'perfumes-arabic-collection-1.webp', name: 'Arabic Collection · Linha', type: 'Coleção · árabe', cap: 'coleção árabe', family: 'Orientais', group: 'Coleções', notes: 'Vários: Asad Brown, Majestade, Rosa e Minha Essência' },
  { file: 'trio-perfumes-arabic-1.webp', name: 'Arabic Collection · Trio', type: 'Kit · 3 fragrâncias', cap: 'trio de perfumes', family: 'Orientais', group: 'Coleções', notes: 'Trio Arabic Collection (A024, A026, A040)' },
  { file: 'colecao-de-perfumes-brand-1.webp', name: 'Body Splash Brand Collection', type: 'Coleção · body splash 200ml', cap: 'coleção body splash', family: 'Body splash', group: 'Coleções', notes: 'Vários contratipos: Only Love, Beauty Girl, Pure...' },
  { file: 'perfumes-e-cremes-hidratantes-1.webp', name: 'Hidratantes Brand Collection', type: 'Coleção · body lotion 200ml', cap: 'linha corporal', family: 'Corporais', group: 'Coleções', notes: 'Loções perfumadas: Meu Anjo, Only Love, Rose Lady...' },
]

/** Vitrine de perfumaria — todos os itens do catálogo. */
export const perfumes: Perfume[] = raw.map(({ file, ...p }) => ({
  ...p,
  img: img(file, 460, 575),
  href: waInterest(p.name),
}))

// Ordem das fileiras da perfumaria (cada grupo vira uma linha com carrossel).
const PERFUME_ORDER = ['Árabes', 'Club de Nuit · Armaf', 'Brand Collection', 'Kits & Combos', 'Coleções']

/** Perfumaria agrupada por categoria, na ordem das fileiras (grupos vazios saem). */
export const perfumeGroups = PERFUME_ORDER
  .map((label) => ({ label, items: perfumes.filter((p) => p.group === label) }))
  .filter((g) => g.items.length > 0)
