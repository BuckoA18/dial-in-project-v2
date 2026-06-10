import { Temporal } from "@js-temporal/polyfill";

export const getCurrentDate = () => {
  const dateNow = Temporal.Now.plainDateISO();
  return dateNow.toString();
};

export const getIsDateInFuture = (dateToCompare) => {
  const isInFuture = Temporal.PlainDate.compare(
    dateToCompare,
    getCurrentDate(),
  );
  // Returns just tru/false
  return isInFuture === 1;
};
