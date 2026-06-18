export const delay = (min = 200, max = 600) =>
  new Promise<void>((resolve) => {
    const ms = min + Math.random() * (max - min);
    setTimeout(resolve, ms);
  });
