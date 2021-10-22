//const s3Bucket = "athena-test-prifina";
//const s3Key = "google-timeline-data/csv-data/";

export const GoogleTimeline = {
  queryActivities: {
    //bucket: s3Bucket,
    //key: s3Key + "activities/activities.csv",
    fields: ["timestamp", "datetime", "type", "confidence"],
  },
};
