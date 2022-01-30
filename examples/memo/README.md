# memo

메소드 인자값에 따라 리턴값을 메모이제이션 하는 예제입니다.

```typescript
export class Calculator {
  public static calledCount = 0;

  @Memo()
  public static add(a: number, b: number): number {
    this.calledCount++;
    return a + b;
  }
}

Calculator.add(1, 2); // 3
Calculator.add(1, 2); // 3
Calculator.calledCount; // 1
```

같은 인자가 넘어오면 메소드를 실행하지 않고 메모이제이션된 결과를 리턴합니다.
