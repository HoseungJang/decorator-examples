# call-once

메소드를 무조건 1회만 실행시키는 예제입니다.

```typescript
export class Test {
  @Once()
  public static f(input: string): string {
    return input;
  }
}

Test.f("first input"); // first input
Test.f("second input"); // first input
```

첫 실행 이후부턴 어떤 값이 들어오든 메소드를 실행하지 않고 첫 번째 결과만을 리턴합니다.
