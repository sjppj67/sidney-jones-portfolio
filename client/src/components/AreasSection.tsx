import { Settings, DollarSign, Package, Building } from "lucide-react";

const areas = [
  {
    icon: Settings,
    title: "Operações",
    subtitle: "Excelência Operacional e Processos",
    color: "from-blue-900 to-blue-700",
    bgLight: "bg-blue-50",
    textAccent: "text-blue-700",
    items: [
      "Melhoria Contínua (Lean) — redesenho de fluxos burocráticos",
      "Automação de Backoffice com ganho de produtividade em larga escala",
      "Planejamento e Controle (PCP) — alocação estratégica de recursos",
      "Gestão de Fluxos Digitais via sistemas SEI",
    ],
  },
  {
    icon: DollarSign,
    title: "Finanças",
    subtitle: "Inteligência Financeira e Orçamentária",
    color: "from-slate-800 to-slate-600",
    bgLight: "bg-slate-50",
    textAccent: "text-slate-700",
    items: [
      "Análise de Demonstrações Contábeis — Liquidez, Rentabilidade, Endividamento",
      "Gestão de Custos, Markup, Margem de Contribuição e Ponto de Equilíbrio",
      "Planejamento Orçamentário CAPEX/OPEX com 100% de execução",
      "Operação avançada em SIAFI e SIADS",
    ],
  },
  {
    icon: Package,
    title: "Logística",
    subtitle: "Supply Chain e Patrimônio",
    color: "from-sky-800 to-sky-600",
    bgLight: "bg-sky-50",
    textAccent: "text-sky-700",
    items: [
      "Gestão de Almoxarifado com metodologias PEPS/FIFO",
      "Inventários rotativos e anuais com 100% de rastreabilidade",
      "Asset Management — ciclo de vida completo de bens permanentes",
      "Gestão de Pátio (YMS) — otimização do fluxo de veículos",
    ],
  },
  {
    icon: Building,
    title: "Facilities",
    subtitle: "Infraestrutura e Manutenção",
    color: "from-indigo-900 to-indigo-700",
    bgLight: "bg-indigo-50",
    textAccent: "text-indigo-700",
    items: [
      "PMOC — Plano de Manutenção para sistemas críticos (Climatização, Geradores, Elevadores)",
      "Coordenação de reformas e implementação de controle de acesso",
      "Segurança e Meio Ambiente (HSE) — protocolos operacionais",
      "Monitoramento e racionalização de custos de utilidades",
    ],
  },
];

export default function AreasSection() {
  return (
    <section
      id="areas"
      className="py-20 lg:py-28"
      style={{ background: "oklch(0.97 0.004 240)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            Áreas de Atuação
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            4 Pilares de Competência Executiva
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma visão integrada que conecta operações, finanças, logística e infraestrutura
            para gerar resultados sustentáveis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                {/* Top gradient bar */}
                <div className={`h-2 bg-gradient-to-r ${area.color}`} />

                <div className="p-6">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${area.bgLight} flex items-center justify-center mb-4`}
                  >
                    <Icon size={26} className={area.textAccent} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{area.title}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${area.textAccent} mb-4`}>
                    {area.subtitle}
                  </p>

                  <ul className="space-y-2">
                    {area.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${area.textAccent} bg-current`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
