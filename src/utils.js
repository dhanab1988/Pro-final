export function categorizeTimes(timesArray) {
  const breakfast = [];
  const lunch = [];
  const dinner = [];

  timesArray.forEach((time) => {
    const [hour, minute] = time.split(":").map(Number);

    const label = `${hour > 12 ? hour - 12 : hour}:${minute
      .toString()
      .padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;

    const slot = { time, label, available: true };

    if (hour >= 7 && hour < 12) breakfast.push(slot);
    else if (hour >= 12 && hour < 18) lunch.push(slot);
    else if (hour >= 18 && hour <= 22) dinner.push(slot);
  });

  return { breakfast, lunch, dinner };
}
