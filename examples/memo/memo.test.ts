import { expect } from "chai";

import { Memo } from "./memo";

export class Calculator {
  public static calledCount = {
    add: 0,
    sub: 0,
  };

  @Memo()
  public static add(a: number, b: number): number {
    this.calledCount.add++;
    return a + b;
  }

  @Memo()
  public static sub(a: number, b: number): number {
    this.calledCount.sub++;
    return a - b;
  }
}

describe("memo", () => {
  context("when apply memo decorator to method", () => {
    it("should be called once with same parameters", () => {
      expect(Calculator.add(1, 2)).to.be.eq(3);
      expect(Calculator.add(1, 2)).to.be.eq(3);
      expect(Calculator.calledCount.add).to.be.eq(1);
      expect(Calculator.add(2, 3)).to.be.eq(5);
      expect(Calculator.add(2, 3)).to.be.eq(5);
      expect(Calculator.calledCount.add).to.be.eq(2);

      expect(Calculator.sub(5, 3)).to.be.eq(2);
      expect(Calculator.sub(5, 3)).to.be.eq(2);
      expect(Calculator.calledCount.sub).to.be.eq(1);
      expect(Calculator.sub(4, 3)).to.be.eq(1);
      expect(Calculator.sub(4, 3)).to.be.eq(1);
      expect(Calculator.calledCount.sub).to.be.eq(2);
    });
  });
});
