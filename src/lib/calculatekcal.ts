// 4 kcal per carb(c),  4 kcal per protein(p), 9kcal per fat(f);
export const calculatekcal = (c: number, p: number, f: number) => {
  return c * 4 + p * 4 + f * 9;
};
