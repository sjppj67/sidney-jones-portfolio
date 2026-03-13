import { useState } from "react";
import { Car, Cpu, RefreshCw, ChevronRight, TrendingUp, Clock, Users } from "lucide-react";

const cases = [
  {
    icon: Car,
    tag: "Facilities & Logística",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Estacionamento do Neurologia",
    subtitle: "Hospital Universitário Clementino Fraga Filho — UFRJ",
    challenge:
      "O estacionamento do complexo hospitalar operava de forma desorganizada, sem controle de fluxo, gerando congestionamentos, conflitos entre usuários e prejuízos operacionais recorrentes.",
    solution:
      "Implementação de sistema de Gestão de Pátio (YMS) com janelas de recebimento, controle de acesso por categoria de usuário e protocolos de segurança viária. Redesenho completo do layout e sinalização.",
    results: [
      { icon: TrendingUp, label: "Redução de conflitos", value: "85%" },
      { icon: Clock, label: "Tempo médio de espera", value: "−60%" },
      { icon: Users, label: "Capacidade otimizada", value: "+40%" },
    ],
    gradient: "from-blue-900 to-blue-700",
  },
  {
    icon: Cpu,
    tag: "Tecnologia & Operações",
    tagColor: "bg-sky-100 text-sky-700",
    title: "Automação na FACC",
    subtitle: "Faculdade de Administração e Ciências Contábeis — UFRJ",
    challenge:
      "Processos administrativos manuais e repetitivos consumiam horas de trabalho da equipe, gerando erros, retrabalho e atrasos na tramitação de documentos e relatórios gerenciais.",
    solution:
      "Implementação de ferramentas de automação de backoffice com processamento de dados em larga escala. Integração com o sistema SEI para tramitação eletrônica e criação de dashboards gerenciais em Excel para monitoramento em tempo real.",
    results: [
      { icon: Clock, label: "Redução de Lead Time", value: "70%" },
      { icon: TrendingUp, label: "Ganho de produtividade", value: "+50%" },
      { icon: Users, label: "Horas/mês liberadas", value: "120h" },
    ],
    gradient: "from-slate-800 to-slate-600",
  },
  {
    icon: RefreshCw,
    tag: "Gestão Estratégica",
    tagColor: "bg-indigo-100 text-indigo-700",
    title: "Reorganização da COPPE",
    subtitle: "Instituto Alberto Luiz Coimbra de Pós-Graduação — UFRJ",
    challenge:
      "A unidade apresentava desalinhamento entre processos administrativos, controle patrimonial deficiente e lacunas na prestação de contas de convênios de grande porte com agências de fomento.",
    solution:
      "Reestruturação completa dos fluxos administrativos com foco em Governança e Compliance. Implementação de inventário rotativo com 100% de rastreabilidade, revisão dos processos de prestação de contas e alinhamento com requisitos do SIAFI.",
    results: [
      { icon: TrendingUp, label: "Acuracidade patrimonial", value: "100%" },
      { icon: Clock, label: "Tempo de prestação de contas", value: "−45%" },
      { icon: Users, label: "Convênios regularizados", value: "100%" },
    ],
    gradient: "from-indigo-900 to-indigo-700",
  },
];

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState(0);
  const current = cases[activeCase];
  const Icon = current.icon;

  return (
    <section id="cases" className="py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            Cases de Sucesso
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Resultados Concretos em Ambientes Complexos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Exemplos práticos de como transformei desafios operacionais em soluções de alto impacto.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
          {cases.map((c, i) => {
            const TabIcon = c.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  activeCase === i
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                <TabIcon size={16} />
                {c.title}
              </button>
            );
          })}
        </div>

        {/* Active Case Card */}
        <div className="bg-white rounded-3xl border border-border shadow-lg overflow-hidden">
          <div className={`bg-gradient-to-r ${current.gradient} p-8 text-white`}>
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                <Icon size={32} className="text-white" />
              </div>
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${current.tagColor}`}>
                  {current.tag}
                </span>
                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {current.title}
                </h3>
                <p className="text-white/75 text-sm">{current.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-xs font-bold">!</span>
                  </div>
                  <h4 className="font-bold text-foreground">Desafio</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{current.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <ChevronRight size={14} className="text-green-600" />
                  </div>
                  <h4 className="font-bold text-foreground">Solução Implementada</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{current.solution}</p>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-border pt-6">
              <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                Resultados Alcançados
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {current.results.map((r, i) => {
                  const RIcon = r.icon;
                  return (
                    <div
                      key={i}
                      className="text-center p-4 rounded-xl bg-secondary"
                    >
                      <RIcon size={20} className="text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{r.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
