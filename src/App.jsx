import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Home,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Utensils,
  XCircle,
} from "lucide-react";
import { getTracking } from "./tracking-config.js";

const heroImage = "/wellness-hero.png";

const phoneNotice = [
  "La siguiente pagina puede solicitar un numero de telefono valido.",
  "Un operador puede llamar para confirmar disponibilidad, precio y entrega.",
  "Continua solo si puedes recibir una llamada.",
  "No uses numeros falsos o incorrectos.",
];

const variants = {
  a: {
    navLabel: "Auto revision",
    title: "Revision rapida de bienestar antes de consultar disponibilidad",
    eyebrow: "Auto revision en 60 segundos",
    subtitle:
      "Responde unas preguntas practicas sobre tu rutina. No es una prueba medica: solo ayuda a decidir si vale la pena revisar precio, condiciones y llamada de confirmacion.",
    primaryCta: "Consultar disponibilidad",
    secondaryCta: "Hacer revision",
    documentTitle: "Revision rapida de bienestar digestivo",
    heroAlt: "Persona revisando una lista de bienestar en casa con agua y una libreta",
    proofPoints: [
      { icon: ClipboardCheck, text: "Preguntas simples, sin diagnosticos" },
      { icon: PhoneCall, text: "Telefono real para confirmar pedido" },
      { icon: ShieldCheck, text: "Sin promesas medicas ni urgencia falsa" },
    ],
    intro: {
      eyebrow: "Revision guiada",
      title: "Marca mentalmente lo que aplica a tu rutina esta semana",
      text:
        "Si varias respuestas encajan contigo y puedes recibir una llamada, continua para revisar la oferta. Si solo tienes curiosidad o no quieres dejar telefono, es mejor detenerse aqui.",
    },
    cards: [
      {
        icon: Sparkles,
        title: "Rutina digestiva irregular",
        text:
          "Has notado dias en los que tu digestion, apetito o sensacion de ligereza cambia sin una razon clara de rutina.",
        tone: "fern",
      },
      {
        icon: Utensils,
        title: "Comidas fuera de casa",
        text:
          "Comes con frecuencia en la calle, en el trabajo o fuera de casa y quieres revisar una opcion de bienestar general.",
        tone: "amber",
      },
      {
        icon: Clock3,
        title: "Quieres revisar condiciones",
        text:
          "Te interesa ver precio, disponibilidad y forma de entrega antes de decidir si completas un formulario.",
        tone: "clay",
      },
      {
        icon: PhoneCall,
        title: "Puedes contestar una llamada",
        text:
          "Tienes un numero propio, activo y disponible para una posible llamada de confirmacion.",
        tone: "fern",
      },
    ],
    checklistTitle: "Continua solo si cumples estos puntos",
    checks: [
      "Entiendes que esto no confirma ni diagnostica una condicion de salud.",
      "Quieres revisar una oferta comercial relacionada con bienestar digestivo.",
      "Puedes escribir un numero real y recibir una posible llamada.",
      "Vas a revisar precio y condiciones en la pagina siguiente antes de decidir.",
    ],
    cautions: [
      "No continues si necesitas atencion medica o tienes sintomas fuertes.",
      "No uses un numero falso, de otra persona o que no puedas contestar.",
      "No esperes una promesa de resultado garantizado desde esta pagina.",
    ],
    faq: [
      {
        title: "Esta revision dice si tengo un problema?",
        text:
          "No. Es solo un filtro de intencion antes de una oferta comercial. Para dudas de salud, consulta a un profesional.",
      },
      {
        title: "Por que se menciona la llamada?",
        text:
          "En ofertas con entrega, un operador puede confirmar datos, precio y disponibilidad antes del envio.",
      },
      {
        title: "Puedo continuar sin telefono?",
        text:
          "No es recomendable. Si la pagina siguiente pide telefono, debe ser real y estar disponible.",
      },
    ],
  },
  b: {
    navLabel: "Rutina en casa",
    title: "Habitos diarios que conviene revisar antes de comprar",
    eyebrow: "Guia practica para Mexico",
    subtitle:
      "Comer fuera, compartir cocina o convivir con mascotas puede cambiar tu rutina de bienestar. Revisa esta guia corta antes de consultar disponibilidad.",
    primaryCta: "Ver precio y condiciones",
    secondaryCta: "Leer guia",
    documentTitle: "Guia de rutina y bienestar digestivo",
    heroAlt: "Mesa de cocina con fruta, agua y notas para revisar una rutina familiar",
    proofPoints: [
      { icon: Utensils, text: "Enfoque en habitos cotidianos" },
      { icon: Home, text: "Pensado para rutinas de casa" },
      { icon: PhoneCall, text: "Filtra usuarios que pueden recibir llamada" },
    ],
    intro: {
      eyebrow: "Contexto cotidiano",
      title: "La decision deberia empezar por tu rutina, no por curiosidad",
      text:
        "Esta pagina resume escenarios comunes de higiene y alimentacion. No genera alarma ni diagnostica: solo ayuda a revisar si la oferta tiene sentido para ti.",
    },
    cards: [
      {
        icon: Utensils,
        title: "Comida preparada fuera",
        text:
          "Cuando comes en puestos, fondas o entregas a domicilio, es normal querer cuidar mejor tu rutina digestiva general.",
        tone: "amber",
      },
      {
        icon: Home,
        title: "Cocina compartida",
        text:
          "En hogares con varias personas, utensilios y alimentos pasan por muchas manos. Mantener habitos claros ayuda a decidir con calma.",
        tone: "fern",
      },
      {
        icon: Sparkles,
        title: "Bienestar sin promesas",
        text:
          "Una oferta de suplemento no debe prometer curas. La pagina siguiente debe mostrar precio y condiciones antes de ordenar.",
        tone: "clay",
      },
      {
        icon: ShoppingBag,
        title: "Pedido con confirmacion",
        text:
          "Si decides seguir, usa datos reales para que el operador pueda confirmar disponibilidad y entrega.",
        tone: "fern",
      },
    ],
    checklistTitle: "Antes de ir a la pagina de pedido",
    checks: [
      "Quieres revisar una opcion de bienestar, no buscar una consulta medica.",
      "Aceptas leer precio, condiciones y entrega antes de completar datos.",
      "Tienes telefono disponible para una posible llamada de confirmacion.",
      "Entiendes que la disponibilidad puede variar por zona y operador.",
    ],
    cautions: [
      "No continues si esperas diagnostico, tratamiento o resultado garantizado.",
      "No completes formularios con datos falsos o incompletos.",
      "No uses esta oferta para reemplazar orientacion medica.",
    ],
    faq: [
      {
        title: "Por que hablar de comida y casa?",
        text:
          "Porque la mayoria de decisiones de bienestar empiezan por habitos diarios. El objetivo es dar contexto, no crear miedo.",
      },
      {
        title: "La entrega queda confirmada aqui?",
        text:
          "No. La disponibilidad y condiciones se revisan en la pagina siguiente o durante la llamada del operador.",
      },
      {
        title: "Que pasa si no contesto?",
        text:
          "El pedido puede no avanzar. Por eso filtramos antes de enviar usuarios a la pagina de oferta.",
      },
    ],
  },
};

function currentRoute() {
  const segments = window.location.pathname.toLowerCase().split("/").filter(Boolean);
  const device = segments[0] === "mobile" ? "mobile" : "mobile";
  const requestedVariant = segments[1];
  const variant = requestedVariant === "b" ? "b" : "a";
  return { device, variant };
}

function appendTrackingMarkup(markup) {
  if (!markup) return;

  const template = document.createElement("template");
  template.innerHTML = markup.trim();

  Array.from(template.content.childNodes).forEach((node) => {
    if (node.nodeName.toLowerCase() === "script") {
      const script = document.createElement("script");
      Array.from(node.attributes || []).forEach((attr) => {
        script.setAttribute(attr.name, attr.value);
      });
      script.text = node.textContent;
      document.head.appendChild(script);
      return;
    }

    document.head.appendChild(node.cloneNode(true));
  });
}

function CtaButton({ href, children, secondary = false, fullWidth = false }) {
  const isTrackedClick = !href.startsWith("#");

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-center text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-fern-700 focus:ring-offset-2 ${
        fullWidth ? "w-full" : ""
      } ${
        secondary
          ? "border border-white/45 bg-white/10 text-white hover:bg-white/18"
          : "bg-fern-700 text-white shadow-soft hover:bg-fern-800"
      }`}
      href={href}
      rel={isTrackedClick ? "nofollow sponsored" : undefined}
    >
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-fern-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-ink md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-650">{text}</p>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, tone = "fern" }) {
  const toneClass =
    tone === "amber"
      ? "bg-amber-50 text-amber-700"
      : tone === "clay"
        ? "bg-orange-50 text-clay"
        : "bg-fern-50 text-fern-800";

  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md ${toneClass}`}>
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold leading-7 text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-650">{children}</p>
    </article>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-0.5 shrink-0 text-fern-700" size={18} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

function CautionItem({ children }) {
  return (
    <li className="flex gap-3">
      <XCircle className="mt-0.5 shrink-0 text-clay" size={18} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export function App() {
  const route = useMemo(currentRoute, []);
  const variant = variants[route.variant];
  const tracking = useMemo(() => getTracking(route.device, route.variant), [route.device, route.variant]);
  const ctaHref = tracking.isPlaceholder ? "#confirmacion" : tracking.ctaHref;
  const [showMobileSticky, setShowMobileSticky] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "es-MX";
    document.title = variant.documentTitle;

    appendTrackingMarkup(tracking.metaTag);
    appendTrackingMarkup(tracking.lpPixel);
  }, [tracking, variant.documentTitle]);

  useEffect(() => {
    const updateStickyState = () => {
      setShowMobileSticky(window.scrollY > 390);
    };

    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    return () => window.removeEventListener("scroll", updateStickyState);
  }, []);

  return (
    <main className="min-h-screen bg-white pb-24 text-ink md:pb-0">
      <header className="border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="flex items-center gap-2 font-semibold text-ink" href="/mobile/a/">
            <ShieldCheck className="text-fern-700" size={22} aria-hidden="true" />
            <span>{variant.navLabel}</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a className="hover:text-fern-800" href="#revision">
              Revision
            </a>
            <a className="hover:text-fern-800" href="#confirmacion">
              Telefono
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink text-white">
        <img
          alt={variant.heroAlt}
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[62%_center]"
          decoding="async"
          fetchPriority="high"
          src={heroImage}
        />
        <div className="hero-readable-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[610px] max-w-6xl items-center px-5 py-14 md:min-h-[660px] md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md bg-white/14 px-3 py-1 text-sm font-medium text-fern-100 ring-1 ring-white/25">
              {variant.eyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              {variant.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">{variant.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={ctaHref}>{variant.primaryCta}</CtaButton>
              <CtaButton href="#revision" secondary>
                {variant.secondaryCta}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 md:grid-cols-3">
          {variant.proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div className="flex items-center gap-3 text-sm text-slate-700" key={point.text}>
                <Icon className="shrink-0 text-fern-700" size={20} aria-hidden="true" />
                {point.text}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white" id="revision">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <SectionIntro
            eyebrow={variant.intro.eyebrow}
            title={variant.intro.title}
            text={variant.intro.text}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {variant.cards.map((card) => (
              <InfoCard icon={card.icon} key={card.title} title={card.title} tone={card.tone}>
                {card.text}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream" id="confirmacion">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1fr_1fr] md:items-start">
          <SectionIntro
            eyebrow="Confirmacion telefonica"
            title="Continua solo si puedes dejar un numero valido"
            text="La calidad del dato importa. Si no puedes recibir una llamada o prefieres no dejar telefono, es mejor no continuar al formulario."
          />
          <div className="rounded-md border border-fern-100 bg-white p-6 shadow-sm">
            <ul className="space-y-4 text-sm leading-6 text-slate-700">
              {phoneNotice.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <div className="mt-6">
              <CtaButton href={ctaHref} fullWidth>
                Continuar si puedo recibir una llamada
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" id="comparar">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-ink">{variant.checklistTitle}</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              {variant.checks.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight text-ink">No continues en estos casos</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              {variant.cautions.map((item) => (
                <CautionItem key={item}>{item}</CautionItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-fern-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-fern-100">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              Respuestas antes de ir al formulario
            </h2>
          </div>
          <div className="grid gap-4">
            {variant.faq.map((item, index) => {
              const icons = [MessageCircle, PhoneCall, ShieldCheck];
              return (
                <InfoCard icon={icons[index] || MessageCircle} key={item.title} title={item.title} tone="fern">
                  {item.text}
                </InfoCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-fern-700">Paso siguiente</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-ink">
              Si puedes recibir una llamada, consulta disponibilidad
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-650">
              Revisa la pagina siguiente con calma. No completes el formulario si no puedes usar un
              numero valido o si no deseas una posible llamada de confirmacion.
            </p>
          </div>
          <CtaButton href={ctaHref}>{variant.primaryCta}</CtaButton>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-8 text-xs leading-6 text-slate-600">
          <p>
            Divulgacion publicitaria: esta pagina puede dirigir a una oferta comercial de terceros.
            La informacion es general y no sustituye orientacion de un profesional de salud.
          </p>
          <p className="mt-3">
            No usamos diagnosticos automaticos, resultados garantizados ni urgencias falsas. Para
            consultas sobre esta pagina:{" "}
            <a className="font-semibold text-fern-800" href="mailto:contacto@zebrabz.com">
              contacto@zebrabz.com
            </a>
          </p>
          <p className="mt-3">
            *This Advertorial is based on fiction and any similarity to real people, places, or
            events are purely coincidental.
          </p>
          <p className="mt-3">
            *The product advertised is a dietary supplement. Dietary supplements are products
            intended to supplement the diet. They are not medicines and are not intended to treat,
            diagnose, mitigate, prevent, or cure diseases.
          </p>
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/96 px-4 py-3 shadow-[0_-12px_28px_rgba(15,23,42,0.12)] backdrop-blur transition md:hidden ${
          showMobileSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <CtaButton href={ctaHref} fullWidth>
          {variant.primaryCta}
        </CtaButton>
      </div>
    </main>
  );
}
