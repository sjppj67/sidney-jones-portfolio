import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Linkedin, Mail, Send, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  company: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  position: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContatoSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      reset();
      toast.success("Mensagem enviada com sucesso!");
    },
    onError: (err) => {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error(err);
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
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
      <div className="container">
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
                  <MessageCircle size={22} className="text-white" />
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
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={22} className="text-white" />
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
                  <Linkedin size={22} className="text-white" />
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
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigado pelo contato. Responderei em breve.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Formulário para Recrutadores
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Preencha os dados abaixo e entrarei em contato o mais breve possível.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-foreground mb-1.5 block">
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Seu nome"
                          {...register("name")}
                          className={errors.name ? "border-red-400" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm font-semibold text-foreground mb-1.5 block">
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          placeholder="Nome da empresa"
                          {...register("company")}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground mb-1.5 block">
                          E-mail *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          {...register("email")}
                          className={errors.email ? "border-red-400" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-semibold text-foreground mb-1.5 block">
                          Telefone
                        </Label>
                        <Input
                          id="phone"
                          placeholder="(21) 9 0000-0000"
                          {...register("phone")}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="position" className="text-sm font-semibold text-foreground mb-1.5 block">
                        Cargo / Vaga em Aberto
                      </Label>
                      <Input
                        id="position"
                        placeholder="Ex: Gerente de Operações, Diretor Administrativo..."
                        {...register("position")}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground mb-1.5 block">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva a oportunidade, requisitos e como posso contribuir com sua organização..."
                        rows={5}
                        {...register("message")}
                        className={errors.message ? "border-red-400" : ""}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-semibold"
                      disabled={submitMutation.isPending}
                    >
                      {submitMutation.isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Enviar Mensagem
                        </span>
                      )}
                    </Button>
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
