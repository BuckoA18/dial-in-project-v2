import { Temporal } from "@js-temporal/polyfill";
import { FLAVOURS } from "./config";

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

export const getFlavourCategories = () => {
  return [...new Set(FLAVOURS.map((flavour) => flavour.category))];
};
