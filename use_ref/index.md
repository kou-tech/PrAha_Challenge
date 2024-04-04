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

## 課題3
- 動的なレイアウトの調整
  - 画面サイズや親要素のサイズに応じて、子要素のサイズを動的に調整する必要がある場合、子要素の高さを取得し、その情報をもとに親要素や他の兄弟要素のサイズを調整することができる。
- スクロールイベントの監視
  - ユーザーがページをスクロールして特定の位置に到達した際に、遅延読み込みやアニメーションを実行するなどの処理を行ったりするのに利用できる。
- アナリティクスやトラッキング
  - ユーザーの行動を分析するために、ページの読み込みやクリックなどのイベントを監視し、データを収集するのに利用できる。

## 任意課題
- [詳細記事](https://gist.github.com/bvaughn/8de925562903afd2e7a12554adcdda16)
- [React Developer Tools](https://ja.react.dev/learn/react-developer-tools)によって、Profilerコンポーネントを使用してアプリケーションのパフォーマンスを測定することができるから。
- [Profiler](https://ja.react.dev/reference/react/Profiler)
  - 使用するたびにアプリケーションに一定の CPU とメモリのオーバーヘッドが生じる。
