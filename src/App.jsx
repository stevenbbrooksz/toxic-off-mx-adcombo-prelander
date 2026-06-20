import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  XCircle,
} from "lucide-react";
import { getTracking } from "./tracking-config.js";

const heroImage = "/wellness-hero.png";

function currentRoute() {
  const segments = window.location.pathname.toLowerCase().split("/").filter(Boolean);
  return { device: segments[0] === "mobile" ? "mobile" : "general" };
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

const phoneNotice = [
  "La siguiente pagina puede solicitar un numero de telefono valido.",
  "Un operador puede llamar para confirmar disponibilidad, precio y entrega.",
  "Continua solo si puedes recibir una llamada.",
  "No uses numeros falsos o incorrectos.",
];

export function App() {
  const route = useMemo(currentRoute, []);
  const tracking = useMemo(() => getTracking(route.device), [route.device]);
  const ctaHref = tracking.isPlaceholder ? "#confirmacion" : tracking.ctaHref;
  const [showMobileSticky, setShowMobileSticky] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "es-MX";
    document.title = "Revision de bienestar digestivo y disponibilidad";

    appendTrackingMarkup(tracking.metaTag);
    appendTrackingMarkup(tracking.lpPixel);
  }, [tracking]);

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
          <a className="flex items-center gap-2 font-semibold text-ink" href="/mobile/">
            <ShieldCheck className="text-fern-700" size={22} aria-hidden="true" />
            <span>Revision Bienestar MX</span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <a className="hover:text-fern-800" href="#checklist">
              Checklist
            </a>
            <a className="hover:text-fern-800" href="#confirmacion">
              Telefono
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-ink text-white">
        <img
          alt="Persona revisando una rutina de bienestar en casa con agua, fruta y una libreta"
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[62%_center]"
          decoding="async"
          fetchPriority="high"
          src={heroImage}
        />
        <div className="hero-readable-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-5 py-14 md:min-h-[680px] md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md bg-white/14 px-3 py-1 text-sm font-medium text-fern-100 ring-1 ring-white/25">
              Bienestar digestivo cotidiano
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Revision rapida antes de consultar disponibilidad
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              Antes de ir a la pagina de pedido, revisa si entiendes las condiciones basicas:
              telefono valido, posible llamada de confirmacion y entrega disponible en Mexico.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href={ctaHref}>Consultar disponibilidad</CtaButton>
              <CtaButton href="#checklist" secondary>
                Revisar primero
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 md:grid-cols-3">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <PhoneCall className="shrink-0 text-fern-700" size={20} aria-hidden="true" />
            Telefono real para confirmar pedido
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Truck className="shrink-0 text-fern-700" size={20} aria-hidden="true" />
            Disponibilidad y entrega se verifican despues
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <ClipboardCheck className="shrink-0 text-fern-700" size={20} aria-hidden="true" />
            Sin diagnosticos ni promesas medicas
          </div>
        </div>
      </section>

      <section className="bg-white" id="checklist">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[0.82fr_1.18fr] md:items-start">
          <SectionIntro
            eyebrow="Checklist de 60 segundos"
            title="Antes de continuar, confirma que el proceso tiene sentido para ti"
            text="Esta pagina no es una prueba medica. Sirve para filtrar visitas curiosas y enviar solo a personas que pueden revisar precio, disponibilidad y llamada de confirmacion."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon={Sparkles} title="Rutina diaria" tone="fern">
              Si buscas revisar una opcion de bienestar digestivo, continua solo despues de leer las
              condiciones basicas del pedido.
            </InfoCard>
            <InfoCard icon={PhoneCall} title="Telefono disponible" tone="clay">
              El formulario puede pedir un numero valido. Un numero falso o incorrecto puede cancelar
              el pedido.
            </InfoCard>
            <InfoCard icon={Clock3} title="Llamada posible" tone="amber">
              Puede haber una llamada para confirmar precio, datos y entrega. Continua solo si puedes
              contestar.
            </InfoCard>
            <InfoCard icon={ShoppingBag} title="Compra informada" tone="fern">
              Revisa detalles, precio final y condiciones en la siguiente pagina antes de tomar una
              decision.
            </InfoCard>
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
            <h2 className="text-3xl font-bold leading-tight text-ink">Lo que si debes revisar</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <CheckItem>Que la pagina siguiente muestre precio y condiciones antes del pedido.</CheckItem>
              <CheckItem>Que puedas escribir un telefono real y disponible.</CheckItem>
              <CheckItem>Que entiendas que el operador puede confirmar datos por llamada.</CheckItem>
              <CheckItem>Que el producto encaje con tu rutina y expectativas personales.</CheckItem>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight text-ink">Lo que esta pagina no hace</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
              <CautionItem>No diagnostica infecciones, parasitos ni enfermedades.</CautionItem>
              <CautionItem>No garantiza resultados ni sustituye consejo medico.</CautionItem>
              <CautionItem>No confirma stock, precio final o entrega por si sola.</CautionItem>
              <CautionItem>No recomienda usar telefonos falsos o de terceros.</CautionItem>
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
            <InfoCard icon={MessageCircle} title="Por que piden telefono?" tone="fern">
              En ofertas con entrega o confirmacion, el operador puede usar el telefono para validar
              datos, precio y disponibilidad.
            </InfoCard>
            <InfoCard icon={Truck} title="La entrega esta garantizada?" tone="amber">
              No desde esta pagina. La disponibilidad, precio final y entrega se revisan en la pagina
              siguiente o durante la llamada.
            </InfoCard>
            <InfoCard icon={ShieldCheck} title="Es consejo medico?" tone="clay">
              No. Esta pagina solo resume puntos de revision antes de consultar disponibilidad de una
              oferta comercial.
            </InfoCard>
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
          <CtaButton href={ctaHref}>Ver precio y condiciones</CtaButton>
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
        </div>
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/96 px-4 py-3 shadow-[0_-12px_28px_rgba(15,23,42,0.12)] backdrop-blur transition md:hidden ${
          showMobileSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
        }`}
      >
        <CtaButton href={ctaHref} fullWidth>
          Consultar disponibilidad
        </CtaButton>
      </div>
    </main>
  );
}
