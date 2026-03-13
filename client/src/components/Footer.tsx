import { MessageCircle, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-10 border-t border-white/10"
      style={{ background: "oklch(0.14 0.04 245)" }}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sidney Jones
            </div>
            <div className="text-xs text-white/50 uppercase tracking-widest">
              Gestor de Operações, Finanças e Infraestrutura
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5521992483471"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/professorsidneyjones/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0077B5] flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:contato@sidneyjones.com.br"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
              title="E-mail"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
          >
            <ArrowUp size={16} />
            Voltar ao topo
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Sidney Jones. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
