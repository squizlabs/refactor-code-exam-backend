import { getWarnings } from "./amoc";

describe("getting data", () => {
  it("should download data", async () => {
    const warnings = await getWarnings();

    expect(Object.keys(warnings).length).toBeGreaterThan(1);
  });

  it("should download data", async () => {
    const warnings = await getWarnings();

    expect(Object.keys(warnings)).toContain("IDQ11307.amoc.xml");
  });
});
