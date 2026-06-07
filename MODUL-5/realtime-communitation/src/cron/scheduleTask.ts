import cron from "node-cron";

const scheduleTask = () => {
  // Schedule a task to run every minute
  cron.schedule("* * * * *", () => {
    console.log("running a task every minute");
  });
};

export { scheduleTask };
