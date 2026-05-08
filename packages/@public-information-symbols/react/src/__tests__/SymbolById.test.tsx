import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { SymbolById } from "../SymbolById";

describe("SymbolById", () => {
  it("returns null for unknown ids", () => {
    const html = renderToStaticMarkup(<SymbolById id="nonexistent" />);
    expect(html).toBe("");
  });
});
