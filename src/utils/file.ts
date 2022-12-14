import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    // eslint-disable-next-line no-useless-return
    return;
  }
  fs.promises.unlink(filename);
};
