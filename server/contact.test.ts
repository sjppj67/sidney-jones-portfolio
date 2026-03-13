import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  saveContactMessage: vi.fn().mockResolvedValue({ insertId: 1 }),
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should accept a valid contact form submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Maria Silva",
      company: "Empresa ABC",
      email: "maria@empresa.com",
      phone: "(21) 9 9999-0000",
      position: "Gerente de Operações",
      message: "Olá Sidney, temos uma oportunidade interessante para você.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should accept submission without optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "João Recrutador",
      email: "joao@rh.com",
      message: "Estamos procurando um gestor experiente para nossa empresa.",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Teste",
        email: "email-invalido",
        message: "Mensagem de teste válida com mais de 10 caracteres.",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with name too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "A",
        email: "teste@email.com",
        message: "Mensagem de teste válida com mais de 10 caracteres.",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with message too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Teste Nome",
        email: "teste@email.com",
        message: "Curta",
      })
    ).rejects.toThrow();
  });
});
