import { waInterest } from './site'
import { img } from './images'

export interface Product {
  name: string
  tag: string
  stars: string
  reviews: string
  cap: string
  img: string
  href: string
  /** Descrição curta da peça (linha sob o nome). */
  notes: string
}

// ⚠️ TODO: revisar com a Suelen — nomes, descrições, tags e avaliações foram
// gerados por IA a partir do NOME DO ARQUIVO das fotos. As avaliações
// (estrelas e quantidade de reviews) são FICTÍCIAS e servem só de rascunho.
const raw: Array<Omit<Product, 'img' | 'href'> & { file: string }> = [
  // ── Colares & correntes ──────────────────────────────────────────
  { file: 'colar-coracao-verde-prata-1.webp', name: 'Colar Coração Esmeralda', tag: 'Colar', cap: 'colar de prata', stars: '★★★★★', reviews: '(142)', notes: 'Pingente coração com cristal verde e brilho intenso' },
  { file: 'colar-cordao-rosa-coracao-1.webp', name: 'Colar Cordão Coração Rosé', tag: 'Colar', cap: 'colar de prata', stars: '★★★★★', reviews: '(118)', notes: 'Cordão delicado com pingente coração em tom rosado' },
  { file: 'colares-coracao-cristal-colorido-1.webp', name: 'Colares Coração Cristal', tag: 'Colar', cap: 'colares sortidos', stars: '★★★★★', reviews: '(96)', notes: 'Corações cravejados em cristais coloridos' },
  { file: 'colares-coracao-prata-coloridos-1.webp', name: 'Coleção Corações Coloridos', tag: 'Colar', cap: 'colares sortidos', stars: '★★★★☆', reviews: '(74)', notes: 'Variedade de corações em prata com cristais vibrantes' },
  { file: 'colares-cordao-coloridos-pingentes-cristal-1.webp', name: 'Cordões com Pingentes de Cristal', tag: 'Colar', cap: 'colares sortidos', stars: '★★★★★', reviews: '(88)', notes: 'Cordões finos com pingentes de cristal colorido' },
  { file: 'colar-olho-grego-prata-1.webp', name: 'Colar Olho Grego', tag: 'Colar', cap: 'colar de prata', stars: '★★★★★', reviews: '(167)', notes: 'Amuleto olho grego em prata — proteção com charme' },
  { file: 'colar-prata-borboleta-ametista-1.webp', name: 'Colar Borboleta Ametista', tag: 'Colar', cap: 'colar de prata', stars: '★★★★★', reviews: '(133)', notes: 'Borboleta cravejada com cristal ametista lilás' },
  { file: 'colar-prata-meus-filhos-1.webp', name: 'Mandala Meus Filhos', tag: 'Colar', cap: 'colar de prata', stars: '★★★★★', reviews: '(209)', notes: 'Mandala personalizável para homenagear quem você ama' },
  { file: 'colar-prata-pingentes-chave-1.webp', name: 'Colar Chave do Coração', tag: 'Colar', cap: 'colar de prata', stars: '★★★★☆', reviews: '(81)', notes: 'Pingentes de chave em prata, simbolismo delicado' },
  { file: 'corrente-prata-groumet-1.webp', name: 'Corrente Grumet', tag: 'Corrente', cap: 'corrente de prata', stars: '★★★★★', reviews: '(214)', notes: 'Elos grumet maciços, brilho intenso e caimento firme' },
  { file: 'correntes-prata-expostas-1.webp', name: 'Correntes Clássicas', tag: 'Corrente', cap: 'correntes sortidas', stars: '★★★★★', reviews: '(151)', notes: 'Modelos atemporais em prata 925 legítima' },
  { file: 'correntes-prata-religiosas-1.webp', name: 'Correntes Religiosas', tag: 'Corrente', cap: 'correntes sortidas', stars: '★★★★★', reviews: '(128)', notes: 'Peças de fé com pingentes sacros em prata' },

  // ── Conjuntos ────────────────────────────────────────────────────
  { file: 'conjunto-coracao-prata-onix-1.webp', name: 'Conjunto Coração Ônix', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(97)', notes: 'Colar e brincos com coração em cristal ônix' },
  { file: 'conjunto-joia-azul-presente-1.webp', name: 'Conjunto Safira', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(112)', notes: 'Conjunto em tom azul safira, pronto para presentear' },
  { file: 'conjunto-joias-prata-coracao-rosa-1.webp', name: 'Conjunto Coração Rosé', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(103)', notes: 'Colar e brincos coração em cristal rosado' },
  { file: 'conjunto-prata-coracao-azul-1.webp', name: 'Conjunto Coração Azul', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★☆', reviews: '(76)', notes: 'Cristais azuis em formato de coração, conjunto completo' },
  { file: 'conjunto-prata-coracao-preto-1.webp', name: 'Conjunto Coração Black', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(89)', notes: 'Corações em cristal negro, elegância sóbria' },
  { file: 'conjunto-prata-coracao-rosa-1.webp', name: 'Conjunto Coração Rosa Cristal', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(94)', notes: 'Corações em cristal rosa, conjunto delicado' },
  { file: 'conjunto-prata-esmeralda-coracao-1.webp', name: 'Conjunto Coração Esmeralda', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(108)', notes: 'Verde esmeralda em coração, conjunto sofisticado' },
  { file: 'conjunto-prata-trevo-azul-1.webp', name: 'Conjunto Trevo Azul', tag: 'Conjunto', cap: 'conjunto de prata', stars: '★★★★★', reviews: '(85)', notes: 'Trevo da sorte com cristal azul, colar e brincos' },
  { file: 'conjuntos-coracao-prata-coloridos-1.webp', name: 'Conjuntos Corações Coloridos', tag: 'Conjunto', cap: 'conjuntos sortidos', stars: '★★★★☆', reviews: '(67)', notes: 'Variedade de conjuntos coração em cristais coloridos' },

  // ── Pulseiras & pingentes ────────────────────────────────────────
  { file: 'pulseira-pandora-prata-coracao-1.webp', name: 'Pulseira de Charms', tag: 'Pulseira', cap: 'pulseira de prata', stars: '★★★★★', reviews: '(176)', notes: 'Estilo charm com pingente de coração' },
  { file: 'pulseira-prata-gravada-bebe-1.webp', name: 'Pulseira Bebê Gravada', tag: 'Pulseira', cap: 'pulseira de prata', stars: '★★★★★', reviews: '(121)', notes: 'Pulseira infantil em prata, personalizável com o nome' },
  { file: 'pulseira-prata-manicure-1.webp', name: 'Pulseira Manicure', tag: 'Pulseira', cap: 'pulseira de prata', stars: '★★★★★', reviews: '(58)', notes: 'Pingentes temáticos para as profissionais da beleza' },
  { file: 'pulseiras-prata-empilhadas-1.webp', name: 'Pulseiras Empilháveis', tag: 'Pulseira', cap: 'pulseiras sortidas', stars: '★★★★★', reviews: '(92)', notes: 'Mix de pulseiras finas em prata para sobrepor' },
  { file: 'pulseiras-prata-rosas-florais-1.webp', name: 'Pulseira Floral', tag: 'Pulseira', cap: 'pulseira de prata', stars: '★★★★☆', reviews: '(63)', notes: 'Detalhes florais com toque rosé delicado' },
  { file: 'pulseira-trevo-coracoes-rose-1.webp', name: 'Pulseira Trevo & Corações', tag: 'Pulseira', cap: 'pulseira de prata', stars: '★★★★★', reviews: '(110)', notes: 'Trevo da sorte e corações em tom rosé' },
  { file: 'pingentes-letras-prata-cravejadas-1.webp', name: 'Pingentes de Letras', tag: 'Pingente', cap: 'pingentes de prata', stars: '★★★★★', reviews: '(134)', notes: 'Iniciais cravejadas para montar o seu nome' },

  // ── Relógios & smartwatch ────────────────────────────────────────
  { file: 'relogio-casio-rosa-prata-1.webp', name: 'Relógio Casio Rosé', tag: 'Relógio', cap: 'relógio', stars: '★★★★★', reviews: '(147)', notes: 'Casio clássico com pulseira em tom rosé' },
  { file: 'relogio-dourado-orient-1.webp', name: 'Relógio Orient Dourado', tag: 'Relógio', cap: 'relógio', stars: '★★★★★', reviews: '(119)', notes: 'Orient dourado — presença e precisão no pulso' },
  { file: 'relogio-masculino-prata-1.webp', name: 'Relógio Masculino Prata', tag: 'Relógio', cap: 'relógio', stars: '★★★★★', reviews: '(101)', notes: 'Modelo masculino prateado, visual marcante' },
  { file: 'relogio-orient-prata-1.webp', name: 'Relógio Orient Prata', tag: 'Relógio', cap: 'relógio', stars: '★★★★★', reviews: '(126)', notes: 'Orient prateado, sofisticação atemporal' },
  { file: 'relogio-orient-prata-azul-1.webp', name: 'Relógio Orient Azul', tag: 'Relógio', cap: 'relógio', stars: '★★★★☆', reviews: '(72)', notes: 'Mostrador azul com pulseira prateada' },
  { file: 'relogio-oval-prateado-dourado-1.webp', name: 'Relógio Oval Bicolor', tag: 'Relógio', cap: 'relógio', stars: '★★★★★', reviews: '(84)', notes: 'Caixa oval em prata e dourado, design elegante' },
  { file: 'relogios-dourados-atlantis-1.webp', name: 'Relógios Atlantis Dourados', tag: 'Relógio', cap: 'relógios sortidos', stars: '★★★★★', reviews: '(90)', notes: 'Linha Atlantis dourada, vários modelos' },
  { file: 'relogios-dourados-femininos-1.webp', name: 'Relógios Femininos Dourados', tag: 'Relógio', cap: 'relógios sortidos', stars: '★★★★★', reviews: '(95)', notes: 'Modelos femininos dourados, delicados e elegantes' },
  { file: 'dois-smartwatches-pulseira-1.webp', name: 'Smartwatch', tag: 'Smartwatch', cap: 'smartwatch', stars: '★★★★☆', reviews: '(69)', notes: 'Relógio inteligente com pulseiras intercambiáveis' },
]

/** Vitrine de joias (e acessórios) — todas as peças do catálogo. */
export const joias: Product[] = raw.map(({ file, ...p }) => ({
  ...p,
  img: img(file, 460, 575),
  href: waInterest(p.name),
}))

// Fileiras da vitrine: cada grupo vira uma linha com seu próprio carrossel,
// na ordem abaixo. Tags pequenas são agrupadas para não virar fileira solitária.
const JOIAS_GROUPS: { label: string; tags: string[] }[] = [
  { label: 'Colares', tags: ['Colar'] },
  { label: 'Correntes', tags: ['Corrente'] },
  { label: 'Conjuntos', tags: ['Conjunto'] },
  { label: 'Pulseiras & Pingentes', tags: ['Pulseira', 'Pingente'] },
  { label: 'Relógios', tags: ['Relógio', 'Smartwatch'] },
]

/** Joias agrupadas por categoria, na ordem das fileiras (grupos vazios saem). */
export const joiasGroups = JOIAS_GROUPS
  .map((g) => ({ label: g.label, items: joias.filter((p) => g.tags.includes(p.tag)) }))
  .filter((g) => g.items.length > 0)
