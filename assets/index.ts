import { readFileSync } from 'fs';

export const resolve = (file: string): string =>
  new URL(file, import.meta.url).pathname;

export const paths = {
  astronaut: resolve('./astronaut.txt'),
  avatar: resolve('./avatar.png'),
};

export const readString = (name: keyof typeof paths): string =>
  readFileSync(paths[name], 'utf8');
