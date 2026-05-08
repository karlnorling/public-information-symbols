import { SymbolById } from "../SymbolById";

describe("SymbolById (Vue)", () => {
  it("is a Vue component", () => {
    expect(typeof SymbolById).toBe("object");
    expect((SymbolById as { name?: string }).name).toBe("SymbolById");
  });
});
