import { useState } from 'react';

export default function ContatoSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      position: formData.get('position'),
      message: formData.get('message'),
    };

    try {
      // Substitua pela sua URL real (veja explicação abaixo)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.06 245) 0%, oklch(0.25 0.08 240) 50%, oklch(0.30 0.09 235) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-0.5 bg-white/40" />
            Contato
            <span className="w-8 h-0.5 bg-white/40" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Vamos Conversar?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Estou disponível para novas oportunidades executivas. Entre em contato pelo formulário
            ou pelas redes abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Direct contacts */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5521992483471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </div>
                  <div className="text-white font-semibold">(21) 9 9248-3471</div>
                  <div className="text-white/50 text-xs">Clique para abrir no WhatsApp</div>
                </div>
              </a>

              <a
                href="mailto:contato@sidneyjones.com.br"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-0.5">
                    E-mail
                  </div>
                  <div className="text-white font-semibold text-sm">contato@sidneyjones.com.br</div>
                  <div className="text-white/50 text-xs">Resposta em até 24h</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/professorsidneyjones/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <div className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-0.5">
                    LinkedIn
                  </div>
                  <div className="text-white font-semibold text-sm">professorsidneyjones</div>
                  <div className="text-white/50 text-xs">Ver perfil completo</div>
                </div>
              </a>
            </div>

            {/* LinkedIn Badge */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
              <div className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-3">
                Perfil LinkedIn Verificado
              </div>
              <div
                className="badge-base LI-profile-badge"
                data-size="medium"
                data-theme="light"
                data-type="VERTICAL"
                data-vanity="professorsidneyjones"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/professorsidneyjones?trk=profile-badge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </div>
              <script
                src="https://platform.linkedin.com/badges/js/profile.js"
                async
                defer
                type="text/javascript"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Obrigado pelo contato. Responderei em breve.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      Formulário para Recrutadores
                    </h3>
                    <p className="text-sm text-gray-500">
                      Preencha os dados abaixo e entrarei em contato o mais breve possível.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1.5 block">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-1.5 block">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1.5 block">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-1.5 block">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="position" className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Cargo / Vaga em Aberto
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Ex: Gerente de Operações, Diretor Administrativo..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1.5 block">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Descreva a oportunidade, requisitos e como posso contribuir com sua organização..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                          Enviar Mensagem
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-600 text-center text-sm mt-2">
                        Erro ao enviar. Tente novamente ou entre em contato por e-mail.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}