import { GraduationCap, Building2, Award, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "1998",
    icon: GraduationCap,
    title: "Graduação em Ciências Contábeis",
    desc: "Faculdade Moraes Júnior (atual Mackenzie) — formação sólida em Contabilidade e Finanças.",
  },
  {
    year: "1999",
    icon: Award,
    title: "MBA em Contabilidade para Gestão de Negócios",
    desc: "Universidade Federal do Rio de Janeiro (UFRJ) — especialização com foco em gestão estratégica e financeira.",
  },
  {
    year: "1994–",
    icon: Building2,
    title: "Carreira na UFRJ",
    desc: "Mais de 30 anos de experiência técnico-administrativa na maior universidade federal do Brasil, gerindo operações complexas em múltiplas unidades.",
  },
  {
    year: "Hoje",
    icon: TrendingUp,
    title: "Gestor de Alta Performance",
    desc: "Liderança de equipes multidisciplinares, gestão de orçamentos CAPEX/OPEX e implementação de processos de excelência operacional.",
  },
];

export default function SobreSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-0.5 bg-accent" />
              Sobre Mim
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A solidez acadêmica da UFRJ com a agilidade executiva do mercado
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou <strong className="text-foreground">Sidney Jones</strong>, Contador formado pela
                Faculdade Moraes Júnior (atual Mackenzie) e pós-graduado com MBA em Contabilidade
                para Gestão de Negócios pela UFRJ. Com mais de{" "}
                <strong className="text-foreground">30 anos de experiência técnico-administrativa</strong>{" "}
                na Universidade Federal do Rio de Janeiro, consolidei uma trajetória única que combina
                rigor acadêmico e visão estratégica de negócios.
              </p>
              <p>
                Ao longo da minha carreira, transformei processos burocráticos em sistemas eficientes,
                liderei equipes multidisciplinares de mais de 50 colaboradores e gerenciei operações
                complexas que vão de almoxarifados estratégicos a projetos de infraestrutura predial.
              </p>
              <p>
                Minha proposta de valor é clara: levo para o mercado corporativo a{" "}
                <strong className="text-foreground">
                  disciplina financeira, a governança institucional e a capacidade de execução
                </strong>{" "}
                desenvolvidas em um dos ambientes mais complexos e regulados do Brasil — a universidade
                pública federal.
              </p>
            </div>

            {/* Key values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Governança & Compliance", color: "bg-primary/10 text-primary" },
                { label: "Liderança Estratégica", color: "bg-accent/10 text-accent" },
                { label: "Excelência Operacional", color: "bg-primary/10 text-primary" },
                { label: "Inteligência Financeira", color: "bg-accent/10 text-accent" },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold text-center ${tag.color}`}
                >
                  {tag.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="relative flex gap-6">
                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
