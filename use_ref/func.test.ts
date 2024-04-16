import dayjs from "dayjs";
import { format } from "date-fns";
import { DateTime } from "luxon";
import { format as TempoFormat } from "@formkit/tempo";

const measurePerformance = function (func: CallableFunction) {
  const startTime = performance.now();

  // 定の処理を実行
  func();

  const endTime = performance.now();

  // 処理にかかった時間をミリ秒単位で返す
  return endTime - startTime;
};

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
