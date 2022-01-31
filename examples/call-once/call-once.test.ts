import { expect } from "chai";

import { Once } from "./call-once";

export class Test {
  @Once()
  public static f(input: string): string {
    return input;
  }
}

describe("call-once", () => {
  context("when apply once decorator to method", () => {
    it("should be called only once", () => {
      expect(Test.f("first input")).to.be.eq("first input");
      expect(Test.f("second input")).to.be.eq("first input");
      expect(Test.f("third input")).to.be.eq("first input");
    });
  });
});
