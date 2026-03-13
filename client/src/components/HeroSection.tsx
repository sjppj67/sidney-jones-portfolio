import { ChevronDown, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHOTO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663030420799/oNSr25JrpT4zhnZTzyDyCy/sidneyjones-terno_e9d06002.avif";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.06 245) 0%, oklch(0.25 0.08 240) 40%, oklch(0.32 0.10 230) 100%)",
      }}
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "oklch(0.65 0.12 220)" }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "oklch(0.55 0.10 230)" }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.8 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.8 0 0) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponível para novas oportunidades
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sidney Jones
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 font-medium mb-6">
              Gestor de Operações, Finanças e Infraestrutura
            </p>

            {/* Impact phrase */}
            <div className="relative pl-5 border-l-4 border-white/40 mb-8">
              <p className="text-lg text-white/90 italic leading-relaxed">
                "30 anos transformando burocracia em eficiência operacional."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: "30+", label: "Anos de Experiência" },
                { value: "50+", label: "Colaboradores Gerenciados" },
                { value: "100%", label: "Execução Orçamentária" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-white/10 border border-white/15"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/70 mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => scrollToSection("contato")}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              >
                Entrar em Contato
              </Button>
              <a
                href="https://wa.me/5521992483471"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/professorsidneyjones/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 bg-transparent font-semibold"
                >
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-full scale-105 opacity-20"
                style={{
                  background:
                    "conic-gradient(from 0deg, oklch(0.65 0.12 220), oklch(0.45 0.10 240), oklch(0.65 0.12 220))",
                }}
              />
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={PHOTO_URL}
                  alt="Sidney Jones - Gestor Executivo"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-xs text-muted-foreground font-medium">Formação</div>
                <div className="text-sm font-bold text-primary">UFRJ · Mackenzie</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
