export const sleep = (ms, value) => {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
};
