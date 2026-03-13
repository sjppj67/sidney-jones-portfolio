import { useState, useEffect, useRef } from "react";
import {
  Target,
  BarChart2,
  Cog,
  Truck,
  Wrench,
  Monitor,
} from "lucide-react";

const skillGroups = [
  {
    id: "estrategia",
    icon: Target,
    title: "Gestão Estratégica e Liderança",
    tag: "Executivo",
    color: "bg-blue-900",
    lightColor: "bg-blue-50",
    textColor: "text-blue-900",
    borderColor: "border-blue-900",
    skills: [
      { name: "Liderança de Equipes Multidisciplinares", level: 95 },
      { name: "Business Partnering", level: 90 },
      { name: "Gestão de Stakeholders", level: 88 },
      { name: "Governança e Compliance", level: 92 },
    ],
  },
  {
    id: "financeiro",
    icon: BarChart2,
    title: "Inteligência Financeira e Orçamentária",
    tag: "Financeiro",
    color: "bg-slate-700",
    lightColor: "bg-slate-50",
    textColor: "text-slate-700",
    borderColor: "border-slate-700",
    skills: [
      { name: "Análise de Demonstrações Contábeis", level: 95 },
      { name: "Gestão de Custos e Precificação", level: 90 },
      { name: "Planejamento Orçamentário CAPEX/OPEX", level: 93 },
      { name: "SIAFI e SIADS", level: 88 },
    ],
  },
  {
    id: "operacoes",
    icon: Cog,
    title: "Excelência Operacional e Processos",
    tag: "Operações",
    color: "bg-sky-700",
    lightColor: "bg-sky-50",
    textColor: "text-sky-700",
    borderColor: "border-sky-700",
    skills: [
      { name: "Melhoria Contínua (Lean)", level: 85 },
      { name: "Automação de Backoffice", level: 88 },
      { name: "Planejamento e Controle (PCP)", level: 90 },
      { name: "Gestão de Fluxos Digitais (SEI)", level: 92 },
    ],
  },
  {
    id: "logistica",
    icon: Truck,
    title: "Logística, Estoque e Patrimônio",
    tag: "Supply Chain",
    color: "bg-indigo-800",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-800",
    borderColor: "border-indigo-800",
    skills: [
      { name: "Gestão de Almoxarifado (PEPS/FIFO)", level: 92 },
      { name: "Inventário e Acuracidade", level: 95 },
      { name: "Asset Management (Patrimônio)", level: 90 },
      { name: "Gestão de Pátio (YMS)", level: 85 },
    ],
  },
  {
    id: "facilities",
    icon: Wrench,
    title: "Facilities e Infraestrutura",
    tag: "Manutenção",
    color: "bg-blue-800",
    lightColor: "bg-blue-50",
    textColor: "text-blue-800",
    borderColor: "border-blue-800",
    skills: [
      { name: "Gestão de Manutenção Predial (PMOC)", level: 88 },
      { name: "Projetos de Infraestrutura", level: 85 },
      { name: "Segurança e Meio Ambiente (HSE)", level: 82 },
      { name: "Gestão de Utilidades", level: 87 },
    ],
  },
  {
    id: "tecnologia",
    icon: Monitor,
    title: "Tecnologia e Inovação",
    tag: "Digital",
    color: "bg-slate-800",
    lightColor: "bg-slate-50",
    textColor: "text-slate-800",
    borderColor: "border-slate-800",
    skills: [
      { name: "Análise de Dados e Dashboards (Excel)", level: 90 },
      { name: "Desenvolvimento Web (HTML/CSS/JS/Python)", level: 80 },
      { name: "Git, GitHub, CI/CD básico", level: 78 },
      { name: "WordPress, Jekyll, WooCommerce", level: 82 },
    ],
  },
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs font-bold text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function HabilidadesSection() {
  const [activeGroup, setActiveGroup] = useState("estrategia");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeGroup]);

  const current = skillGroups.find((g) => g.id === activeGroup)!;
  const CurrentIcon = current.icon;

  return (
    <section
      ref={sectionRef}
      id="habilidades"
      className="py-20 lg:py-28"
      style={{ background: "oklch(0.97 0.004 240)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-accent" />
            Mapa de Habilidades
            <span className="w-8 h-0.5 bg-accent" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            6 Áreas de Competência Profissional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mais de 30 anos de experiência consolidados em competências técnicas e estratégicas
            de alta performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Group selector */}
          <div className="lg:col-span-1 flex flex-col gap-2">
            {skillGroups.map((group) => {
              const GroupIcon = group.icon;
              const isActive = activeGroup === group.id;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 border ${
                    isActive
                      ? `${group.color} text-white border-transparent shadow-md`
                      : "bg-white text-foreground border-border hover:border-primary/30 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-white/20" : group.lightColor
                    }`}
                  >
                    <GroupIcon size={20} className={isActive ? "text-white" : group.textColor} />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs font-bold uppercase tracking-wide mb-0.5 ${isActive ? "text-white/70" : "text-muted-foreground"}`}>
                      {group.tag}
                    </div>
                    <div className={`text-sm font-semibold leading-tight ${isActive ? "text-white" : "text-foreground"}`}>
                      {group.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Skill bars */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm p-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-xl ${current.lightColor} flex items-center justify-center`}>
                <CurrentIcon size={28} className={current.textColor} />
              </div>
              <div>
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${current.textColor}`}>
                  {current.tag}
                </div>
                <h3 className="text-xl font-bold text-foreground">{current.title}</h3>
              </div>
            </div>

            {/* Skill bars */}
            <div>
              {current.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  animate={animate}
                />
              ))}
            </div>

            {/* Summary */}
            <div className={`mt-6 p-4 rounded-xl ${current.lightColor} border ${current.borderColor} border-opacity-20`}>
              <p className={`text-sm font-medium ${current.textColor}`}>
                Nível de proficiência baseado em mais de 30 anos de experiência prática e
                resultados mensuráveis em ambiente institucional de alta complexidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
