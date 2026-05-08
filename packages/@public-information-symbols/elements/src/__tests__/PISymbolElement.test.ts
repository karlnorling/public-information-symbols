import { PISymbolElement } from "../PISymbolElement";

describe("PISymbolElement", () => {
  it("has the correct tagName", () => {
    expect(PISymbolElement.tagName).toBe("pi-symbol");
  });

  it("observes the expected attributes", () => {
    expect(PISymbolElement.observedAttributes).toContain("symbol-id");
  });
});
