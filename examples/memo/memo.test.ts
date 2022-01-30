import { expect } from "chai";

import { Memo } from "./memo";

export class Calculator {
  public static calledCount = 0;

  @Memo()
  public static add(a: number, b: number): number {
    this.calledCount++;
    return a + b;
  }
}

describe("memo", () => {
  context("when apply memo decorator to method", () => {
    it("should be called once with same parameters", () => {
      expect(Calculator.add(1, 2)).to.be.eq(3);
      expect(Calculator.add(1, 2)).to.be.eq(3);
      expect(Calculator.calledCount).to.be.eq(1);
      expect(Calculator.add(2, 3)).to.be.eq(5);
      expect(Calculator.add(2, 3)).to.be.eq(5);
      expect(Calculator.calledCount).to.be.eq(2);
    });
  });
});
