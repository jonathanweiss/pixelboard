const characters = {
  0: [1008, 1008, 3132, 3132, 15375, 15375, 15375, 15375, 15375, 15375, 3852, 3852, 1008, 1008],
  1: [240, 240, 1008, 1008, 240, 240, 240, 240, 240, 240, 240, 240, 4095, 4095],
  2: [4092, 4092, 15375, 15375, 63, 63, 1020, 1020, 4080, 4080, 16128, 16128, 16383, 16383],
  3: [4095, 4095, 60, 60, 240, 240, 1020, 1020, 15, 15, 15375, 15375, 4092, 4092],
  4: [252, 252, 1020, 1020, 3900, 3900, 15420, 15420, 16383, 16383, 60, 60, 60, 60],
  5: [16380, 16380, 15360, 15360, 16380, 16380, 15, 15, 15, 15, 15375, 15375, 4092, 4092],
  6: [1020, 1020, 3840, 3840, 15360, 15360, 16380, 16380, 15375, 15375, 15375, 15375, 4092, 4092],
  7: [16383, 16383, 15375, 15375, 60, 60, 240, 240, 960, 960, 960, 960, 960, 960],
  8: [4092, 4092, 15375, 15375, 15375, 15375, 4092, 4092, 15375, 15375, 15375, 15375, 4092, 4092],
  9: [4092, 4092, 15375, 15375, 15375, 15375, 4095, 4095, 15, 15, 60, 60, 4080, 4080],

  A: [1008, 1008, 3900, 3900, 15375, 15375, 15375, 15375, 16383, 16383, 15375, 15375, 15375, 15375],

  ':': [0, 0, 960, 960, 960, 960, 0, 0, 0, 0, 960, 960, 960, 960],
};

// A wild missingno appears...
const missingno = [13107, 13107, 3276, 3276, 13107, 13107, 3276, 3276, 13107, 13107, 3276, 3276, 13107, 13107];

const rows = 14;
const columns = 14;

const defaultGrid = {
  width: 4,
  height: 4,
  columns,
  rows,
};

export { characters, missingno, rows, columns, defaultGrid };
