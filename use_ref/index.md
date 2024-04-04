## 課題1-1
[Peformance](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

```ts
const measurePerformance = function (func: CallableFunction) {
  const startTime = performance.now();

  // 定の処理を実行
  func();

  const endTime = performance.now();

  // 処理にかかった時間をミリ秒単位で返す
  return endTime - startTime;
};
```

## 課題1-2
次のライブラリのメソッドのパフォーマンスの違いを測定
- [dayjs](https://day.js.org/)
- [tempo](https://tempo.formkit.com/)
- [date-fns](https://date-fns.org/)
- [luxon](https://moment.github.io/luxon/api-docs/index.html)

```ts
// 日付ライブラリで本日の日付を取得する処理を実行
const dayjsPerformance = measurePerformance(() => {
  dayjs().format("YYYY-MM-DD");
});

const tempoPerformance = measurePerformance(() => {
  TempoFormat(new Date());
});

const dateFnsPerformance = measurePerformance(() => {
  format(new Date(), "yyyy-MM-dd");
});

const luxonPerformance = measurePerformance(() => {
  DateTime.now().toISODate();
});

console.log("dayjsPerformance: ", dayjsPerformance);
console.log("tempoPerformance: ", tempoPerformance);
console.log("dateFnsPerformance: ", dateFnsPerformance);
console.log("luxonPerformance: ", luxonPerformance);
```

## 課題2
```tsx
export function Profiler({ Component, onFinishMeasure }) {
  // 現時点では渡されたComponentを1000回レンダリングしているだけです。
  // useRef, useState, useEffectを活用して、
  // 1000回レンダリングが終了するまでに要した時間をonFinishMeasureに返せるようにしましょう

  // パフォーマンス測定の状態を管理
  const [state, setState] = useState(false);

  // 経過時間はuseRefに格納
  const elapsedTime = useRef(undefined);

  const children = [];

  useEffect(() => {
    if (state) {
      const start = performance.now();
      // 1000回レンダリング
      for (let i = 0; i < 1000; i++) {
        children.push(<Component key={i} />);
      }
      const end = performance.now();
      elapsedTime.current = end - start;
      onFinishMeasure();
    }
  }, [state]);

  return (
    <>
      <button onClick={() => setState(true)}>measure</button>
      {state && (
        <div>
          {elapsedTime.current ? `${elapsedTime.current}ms` : "レンダリング中"}
        </div>
      )}
      {children}
    </>
  );
}
```
