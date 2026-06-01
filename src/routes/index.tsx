import { createFileRoute } from "@tanstack/react-router";
import heroBurger from "@/assets/hero-burger.jpg";
import productBaconYan from "@/assets/product-bacon-yan.jpg";
import productAlitas from "@/assets/product-alitas.jpg";
import productHotdog from "@/assets/product-hotdog.jpg";
import productPapas from "@/assets/product-papas.jpg";
import productDoble from "@/assets/product-doble.jpg";
import productCombo from "@/assets/product-combo.jpg";
import combo from "@/assets/combo.jpg";

// TODO: reemplazar con el número real del local
const WHATSAPP = "593999999999";
const MAPS_URL = "https://maps.google.com/?q=Av.+26+Manta+Ecuador";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ya Sabes Donde! | Hamburguesas, Alitas y Hot Dogs en Manta" },
      {
        name: "description",
        content:
          "Las mejores hamburguesas artesanales en Manta. Pide por WhatsApp, ven al local en la Av. 26 o pide delivery. Sabor brutal, precios justos.",
      },
      { property: "og:title", content: "Ya Sabes Donde! — Hamburguesas en Manta" },
      {
        property: "og:description",
        content:
          "Hamburguesas, alitas y hot dogs con actitud callejera en Manta. Pide por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroBurger },
      { name: "twitter:image", content: heroBurger },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Ya Sabes Donde!",
          servesCuisine: ["Hamburguesas", "Alitas", "Hot Dogs", "Comida rápida"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. 26",
            addressLocality: "Manta",
            addressCountry: "EC",
          },
          priceRange: "$",
          telephone: `+${WHATSAPP}`,
        }),
      },
    ],
  }),
  component: Home,
});

type Product = {
  name: string;
  price: string;
  desc: string;
  img: string;
  tag?: "Top" | "Nuevo" | "Picante" | "Combo";
};

const products: Product[] = [
  {
    name: "Bacon Yan",
    price: "$9.00",
    desc: "Carne 200g, tocino crocante, extra cheddar y salsa secreta de la casa.",
    img: productBaconYan,
    tag: "Top",
  },
  {
    name: "Alitas Fuego",
    price: "$7.50",
    desc: "12 piezas bañadas en salsa búfalo artesanal con dip de blue cheese.",
    img: productAlitas,
    tag: "Picante",
  },
  {
    name: "Callejero XL",
    price: "$5.00",
    desc: "Salchicha alemana, cebolla caramelizada, lluvia de papitas y triple salsa.",
    img: productHotdog,
  },
  {
    name: "Papas Cargadas",
    price: "$6.00",
    desc: "Papas crocantes con queso fundido, tocino y cebollín fresco.",
    img: productPapas,
  },
  {
    name: "La Doble Queso",
    price: "$10.00",
    desc: "Doble carne, doble cheddar, pickles y pan sésamo brioche.",
    img: productDoble,
    tag: "Top",
  },
  {
    name: "Combo Nocturno",
    price: "$8.50",
    desc: "Burger + papas + bebida. Solo después de las 8:00 PM.",
    img: productCombo,
    tag: "Combo",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <TopNav />
      <Hero />
      <Marquee />
      <Products />
      <Promo />
      <WhyUs />
      <Reviews />
      <Location />
      <Footer />
      <MobileBar />
    </div>
  );
}

/* ---------- Sections ---------- */

function TopNav() {
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center bg-primary text-primary-foreground font-display text-xl">
            Y
          </span>
          <span className="font-display text-lg uppercase tracking-tight">
            Ya Sabes Donde!
          </span>
        </a>
        <div className="hidden items-center gap-8 text-xs font-black uppercase tracking-widest md:flex">
          <a href="#menu" className="hover:text-primary transition-colors">Menú</a>
          <a href="#promos" className="hover:text-primary transition-colors">Promos</a>
          <a href="#ubicacion" className="hover:text-primary transition-colors">Ubicación</a>
          <a href="#resenas" className="hover:text-primary transition-colors">Reseñas</a>
          <a
            href={waLink("Hola! Quiero hacer un pedido.")}
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-4 py-2 text-primary-foreground hover:bg-foreground transition-colors"
          >
            Pedir ahora
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#2a2a2a,transparent_70%)] opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-1/3 size-80 rounded-full bg-secondary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 size-80 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span className="font-mono mb-6 inline-block text-[10px] uppercase tracking-[0.4em] text-primary">
          ● Manta, Ecuador • Abierto hasta las 3 AM
        </span>
        <h1 className="font-display text-[18vw] leading-[0.82] uppercase md:text-[10rem]">
          <span className="block animate-neon text-primary">Ya Sabes</span>
          <span className="block text-stroke">Donde!</span>
        </h1>

        <div className="animate-sticker relative mx-auto my-10 w-full max-w-2xl">
          <div className="relative rotate-2 overflow-hidden border-4 border-foreground shadow-[14px_14px_0_0_oklch(0.84_0.17_88/0.45)]">
            <img
              src={heroBurger}
              alt="La hamburguesa insignia de Ya Sabes Donde con tocino y queso derretido"
              width={1280}
              height={960}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 -rotate-12 bg-secondary px-5 py-2 font-display text-2xl text-secondary-foreground shadow-xl md:-right-6">
            DESDE $5
          </div>
          <div className="absolute -top-5 -left-3 rotate-[-8deg] bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-xl">
            ★ La burger de Manta
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
          Hamburguesas, alitas y hot dogs con actitud callejera. Sabor fuerte, precios
          justos y pedidos directos por WhatsApp.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href={waLink("Hola! Quiero pedir 🍔")}
            target="_blank"
            rel="noreferrer"
            className="w-full bg-primary px-8 py-5 text-center font-black uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-press md:w-auto"
          >
            Pedir por WhatsApp
          </a>
          <a
            href="#menu"
            className="w-full border-2 border-foreground px-8 py-5 text-center font-black uppercase tracking-wider transition-all hover:bg-foreground hover:text-background md:w-auto"
          >
            Ver el Menú
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full px-4 py-5 text-center font-black uppercase tracking-wider text-white/70 underline underline-offset-8 transition-colors hover:text-primary md:w-auto"
          >
            Cómo llegar →
          </a>
        </div>
      </div>
    </header>
  );
}

function Marquee() {
  const phrases = [
    "Sabor Brutal",
    "★",
    "Manta de noche",
    "★",
    "Pide y come",
    "★",
    "Bacon Yan",
    "★",
    "Av. 26",
    "★",
    "Combos que matan el hambre",
    "★",
  ];
  const row = [...phrases, ...phrases];
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-primary py-4 text-primary-foreground">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl uppercase">
        {row.map((p, i) => (
          <span key={i}>{p}</span>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display border-l-8 border-primary pl-6 text-5xl uppercase md:text-6xl">
          Lo más brutal
        </h2>
        <p className="font-mono max-w-sm text-xs uppercase tracking-widest text-white/50">
          Selección de la casa. Pide cualquiera con un clic en WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const msg = `Hola! Quiero pedir un(a) ${product.name} (${product.price}).`;
  return (
    <article className="group relative border border-white/10 bg-muted p-4 transition-all hover:border-primary/60 hover:-translate-y-1 hover:shadow-press-yellow">
      {product.tag && (
        <span className="font-mono absolute right-3 top-3 z-10 rotate-3 bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-secondary-foreground">
          {product.tag}
        </span>
      )}
      <div className="mb-6 aspect-square overflow-hidden bg-black/40">
        <img
          src={product.img}
          alt={product.name}
          width={768}
          height={768}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="mb-2 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl uppercase">{product.name}</h3>
        <span className="font-mono shrink-0 text-primary">{product.price}</span>
      </div>
      <p className="mb-6 text-sm text-white/60">{product.desc}</p>
      <a
        href={waLink(msg)}
        target="_blank"
        rel="noreferrer"
        className="block w-full bg-white/5 py-3 text-center text-xs font-black uppercase tracking-widest transition-all hover:bg-primary hover:text-primary-foreground"
      >
        Pedir ahora
      </a>
    </article>
  );
}

function Promo() {
  return (
    <section id="promos" className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap">
        <span className="font-display select-none text-[15rem] uppercase leading-none text-black/5">
          YA SABES DONDE YA SABES DONDE
        </span>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="flex-1">
          <span className="font-mono text-xs uppercase tracking-[0.3em]">
            ● Promo limitada
          </span>
          <h2 className="font-display mt-4 text-6xl uppercase leading-none md:text-7xl">
            Combo<br />Universitario
          </h2>
          <p className="mt-6 max-w-md text-lg font-bold">
            Burger simple + papas + soda por solo{" "}
            <span className="bg-black px-2 py-1 text-white">$6.99</span>. Lunes a
            Jueves.
          </p>
          <a
            href={waLink("Hola! Quiero el Combo Universitario ($6.99).")}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-black px-10 py-4 font-black uppercase text-white transition-colors hover:bg-secondary"
          >
            Quiero esta promo
          </a>
        </div>
        <div className="flex-1">
          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-8 border-black/10 shadow-2xl">
            <img
              src={combo}
              alt="Combo universitario con burger, papas y bebida"
              width={1024}
              height={1024}
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      n: "01",
      title: "Sabor Brutal",
      text: "Recetas con combinaciones potentes y salsas secretas hechas en casa cada noche.",
    },
    {
      n: "02",
      title: "Rápido y Directo",
      text: "Sin protocolos. Pides por WhatsApp y la comida sale caliente, lista en minutos.",
    },
    {
      n: "03",
      title: "Favorito en Manta",
      text: "4.5★ en Google. La parada obligatoria de la noche en la Av. 26.",
    },
  ];
  return (
    <section className="bg-muted/30 px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.n} className="text-center md:text-left">
            <div className="font-display mb-4 text-6xl text-primary">{it.n}</div>
            <h3 className="font-display mb-4 text-2xl uppercase">{it.title}</h3>
            <p className="text-sm text-white/60">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      q: "Las mejores hamburguesas de Manta. De lejos.",
      a: "Andrés P.",
      meta: "Google · 5★",
    },
    {
      q: "Muy buen producto, buena calidad y el precio justo.",
      a: "María L.",
      meta: "Google · 5★",
    },
    {
      q: "Buena comida, atención rápida y excelente precio.",
      a: "Diego R.",
      meta: "Google · 4★",
    },
  ];
  return (
    <section id="resenas" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 flex items-end justify-between">
        <h2 className="font-display border-l-8 border-secondary pl-6 text-5xl uppercase md:text-6xl">
          La gente habla
        </h2>
        <span className="font-mono hidden text-xs uppercase tracking-widest text-white/40 md:block">
          4.5★ en Google Maps
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <blockquote
            key={i}
            className="relative border border-white/10 bg-muted p-8 transition-all hover:border-primary/60"
          >
            <div className="font-display absolute -top-6 left-6 text-7xl text-primary">
              "
            </div>
            <p className="font-display mb-6 mt-4 text-xl uppercase leading-tight">
              {r.q}
            </p>
            <footer className="font-mono text-xs uppercase tracking-widest text-white/50">
              — {r.a} · {r.meta}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="ubicacion" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col gap-12 md:flex-row">
        <div className="flex-1">
          <h2 className="font-display border-l-8 border-primary pl-6 text-5xl uppercase md:text-6xl">
            Encuéntranos
          </h2>
          <div className="mt-10 space-y-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Dirección
              </div>
              <p className="mt-2 text-2xl">Av. 26, Manta, Ecuador</p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Horarios
              </div>
              <p className="mt-2 text-white/70">
                Lun – Jue: 18:00 – 01:00
                <br />
                Vie – Sáb: 18:00 – 03:00
                <br />
                Dom: 18:00 – 00:00
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-primary px-6 py-4 font-black uppercase text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-press"
              >
                Abrir en Maps
              </a>
              <a
                href={waLink("Hola! Quiero hacer un pedido.")}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-foreground px-6 py-4 font-black uppercase transition-all hover:bg-foreground hover:text-background"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="flex-[1.4]">
          <div className="aspect-video w-full overflow-hidden border-2 border-white/10 bg-muted md:aspect-square">
            <iframe
              title="Ubicación Ya Sabes Donde en Manta"
              src="https://www.google.com/maps?q=Av.+26+Manta+Ecuador&output=embed"
              className="size-full grayscale-[40%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mb-24 border-t border-white/10 bg-black px-6 py-16 md:mb-0">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div>
          <h2 className="font-display text-5xl uppercase">
            Ya Sabes <span className="text-primary">Donde!</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm text-white/40">
            La burger que te arregla la noche. Hamburguesas, alitas y hot dogs con
            actitud callejera en Manta.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          <a
            href="https://instagram.com/yasabesdonde.ec"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-white/60 hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="#"
            className="font-mono text-sm uppercase tracking-widest text-white/60 hover:text-primary"
          >
            TikTok
          </a>
          <a
            href="#"
            className="font-mono text-sm uppercase tracking-widest text-white/60 hover:text-primary"
          >
            Facebook
          </a>
          <a
            href={waLink("Hola!")}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-white/60 hover:text-primary"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="font-mono mx-auto mt-12 max-w-7xl border-t border-white/5 pt-8 text-[10px] uppercase tracking-widest text-white/30">
        © {new Date().getFullYear()} Ya Sabes Donde! · Manta, Ecuador · Sabor con
        actitud
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 md:hidden">
      <div className="flex items-center justify-between gap-1 rounded-full border border-white/15 bg-black/85 p-2 shadow-2xl backdrop-blur-xl">
        <a
          href={waLink("Hola! Quiero pedir.")}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-primary py-3 text-center text-[11px] font-black uppercase tracking-widest text-primary-foreground"
        >
          WhatsApp
        </a>
        <a
          href="#menu"
          className="flex-1 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white/80"
        >
          Menú
        </a>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-3 text-center text-[11px] font-black uppercase tracking-widest text-white/80"
        >
          Mapa
        </a>
      </div>
    </nav>
  );
}
