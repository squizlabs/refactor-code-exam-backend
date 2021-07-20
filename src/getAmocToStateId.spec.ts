import { getAmocToStateId } from "./getAmocToStateId";

describe("getAmocToStateId", () => {
  test("that it returns all states", () => {
    expect(getAmocToStateId("NT")).toEqual("IDD");
    expect(getAmocToStateId("NSW")).toEqual("IDN");
    expect(getAmocToStateId("Qld")).toEqual("IDQ");
    expect(getAmocToStateId("SA")).toEqual("IDS");
    expect(getAmocToStateId("Tas")).toEqual("IDT");
    expect(getAmocToStateId("Vic")).toEqual("IDV");
    expect(getAmocToStateId("WA")).toEqual("IDW");
    expect(getAmocToStateId("ACT")).toEqual("IDN");
  });
});
