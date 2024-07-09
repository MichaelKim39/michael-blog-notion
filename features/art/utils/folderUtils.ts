const randomRange = (min: number, max: number, paddingFactor = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min) * paddingFactor;
};

export const getRandomPos = (
  width: number | undefined,
  height: number | undefined
): { x: number; y: number } | undefined => {
  if (width === undefined || height === undefined) return undefined;

  const headerHeight = 100;
  const footerHeight = 200;
  const horizontalPaddingFactor = 0.3;
  const maxWidth = width * (1 - horizontalPaddingFactor * 2);
  const maxHeight = height - headerHeight - footerHeight;

  const x = randomRange(0, maxWidth);
  const y = randomRange(0, maxHeight);

  console.log(`Random position: ${width}, ${height}, ${x}, ${y}`);

  return { x, y };
};
