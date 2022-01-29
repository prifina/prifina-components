"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SleepSummaryAsync = exports.SleepSummary = void 0;
const SleepSummary = [{
  summary_date: "2017-11-05",
  period_id: 0,
  is_longest: 1,
  timezone: 120,
  bedtime_start: "2017-11-06T02:13:19+02:00",
  bedtime_end: "2017-11-06T08:12:19+02:00",
  score: 70,
  score_total: 57,
  score_disturbances: 83,
  score_efficiency: 99,
  score_latency: 88,
  score_rem: 97,
  score_deep: 59,
  score_alignment: 31,
  total: 20310,
  duration: 21540,
  awake: 1230,
  light: 10260,
  rem: 7140,
  deep: 2910,
  onset_latency: 480,
  restless: 39,
  efficiency: 94,
  midpoint_time: 11010,
  hr_lowest: 49,
  hr_average: 56.375,
  rmssd: 54,
  breath_average: 13,
  temperature_delta: -0.06,
  hypnogram_5min: "443432222211222333321112222222222111133333322221112233333333332232222334",
  hr_5min: [0, 53, 51, 0, 50, 50, 49, 49, 50, 50, 51, 52, 52, 51, 53, 58, 60, 60, 59, 58, 58, 58, 58, 55, 55, 55, 55, 56, 56, 55, 53, 53, 53, 53, 53, 53, 57, 58, 60, 60, 59, 57, 59, 58, 56, 56, 56, 56, 55, 55, 56, 56, 57, 58, 55, 56, 57, 60, 58, 58, 59, 57, 54, 54, 53, 52, 52, 55, 53, 54, 56, 0],
  rmssd_5min: [0, 0, 62, 0, 75, 52, 56, 56, 64, 57, 55, 78, 77, 83, 70, 35, 21, 25, 49, 44, 48, 48, 62, 69, 66, 64, 79, 59, 67, 66, 70, 63, 53, 57, 53, 57, 38, 26, 18, 24, 30, 35, 36, 46, 53, 59, 50, 50, 53, 53, 57, 52, 41, 37, 49, 47, 48, 35, 32, 34, 52, 57, 62, 57, 70, 81, 81, 65, 69, 72, 64, 0]
}];
exports.SleepSummary = SleepSummary;
const SleepSummaryAsync = ["summary_date,period_id,is_longest,timezone,bedtime_end,bedtime_start,breath_average,duration,total,awake,rem,deep,light,midpoint_time,efficiency,restless,onset_latency,hr_5min,hypnogram_5min,rmssd,rmssd_5min,score,score_alignment,score_deep,score_disturbances,score_efficiency,score_latency,score_rem,score_total,temperature_deviation,temperature_trend_deviation,bedtime_start_delta,bedtime_end_delta,midpoint_at_delta,temperature_delta,hr_lowest,hr_average,user,day", "2021-12-28,0,1,120,2021-12-29T06:40:28+02:00,2021-12-28T22:36:28+02:00,17.25,29040,25860,3180,8010,5640,12210,15150,89,13,1650,[0, 0, 0, 0, 0, 59, 64, 63, 64, 65, 62, 61, 61, 61, 61, 61, 62, 62, 61, 62, 62, 60, 57, 59, 60, 61, 60, 60, 61, 62, 63, 63, 64, 62, 61, 61, 59, 62, 62, 67, 67, 68, 68, 70, 70, 70, 71, 70, 71, 62, 60, 61, 61, 60, 59, 60, 60, 60, 60, 59, 61, 62, 62, 62, 62, 64, 63, 62, 61, 62, 60, 61, 58, 58, 59, 58, 62, 58, 59, 59, 57, 62, 63, 63, 60, 60, 61, 61, 61, 60, 60, 62, 62, 64, 64, 65, 65],4444422111221111111222242331322111222332111122222223333323332212221222233333333223332222222233344,21,[0, 0, 0, 0, 0, 40, 27, 25, 23, 23, 18, 22, 22, 20, 23, 20, 19, 19, 21, 25, 20, 27, 40, 16, 16, 14, 16, 16, 24, 15, 17, 18, 18, 20, 18, 21, 26, 19, 22, 10, 11, 12, 12, 12, 11, 11, 9, 10, 10, 17, 18, 19, 22, 25, 20, 21, 19, 17, 15, 17, 19, 17, 15, 16, 17, 16, 18, 30, 21, 19, 32, 29, 33, 30, 25, 42, 30, 40, 29, 33, 30, 18, 18, 20, 24, 24, 27, 28, 28, 33, 30, 19, 24, 20, 18, 31, 25],88,100,97,81,93,64,99,86,-0.25,0.0,-5012,24028,10138,-0.25,57,62.01,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-28"];
exports.SleepSummaryAsync = SleepSummaryAsync;