import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { saveContactMessage } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(2, "Nome é obrigatório"),
        company: z.string().optional(),
        email: z.string().email("E-mail inválido"),
        phone: z.string().optional(),
        position: z.string().optional(),
        message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
      }))
      .mutation(async ({ input }) => {
        await saveContactMessage({
          name: input.name,
          company: input.company ?? null,
          email: input.email,
          phone: input.phone ?? null,
          position: input.position ?? null,
          message: input.message,
        });

        await notifyOwner({
          title: `Novo contato de recrutador: ${input.name}`,
          content: `**Nome:** ${input.name}\n**Empresa:** ${input.company || "Não informado"}\n**E-mail:** ${input.email}\n**Telefone:** ${input.phone || "Não informado"}\n**Cargo/Vaga:** ${input.position || "Não informado"}\n\n**Mensagem:**\n${input.message}`,
        });

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
