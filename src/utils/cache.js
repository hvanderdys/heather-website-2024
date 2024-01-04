import fs from "fs";
import { promisify } from "util";
import path from "path";

// Promisify fs.readFile and fs.writeFile for async/await usage
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const cacheDuration = 1000 * 60 * 5; // 5 minutes
// const cacheDuration = 1000 * 10; // 5 minutes
const cacheDir = path.resolve("./cache");

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

function isCacheValid(cacheTime) {
  const currentTime = Date.now();
  return currentTime - cacheTime < cacheDuration;
}

export async function get(key) {
  try {
    const cacheFilePath = path.resolve("./cache", `${key}.json`);
    const data = await readFile(cacheFilePath, "utf8");
    const cache = JSON.parse(data);
    if (isCacheValid(cache.timestamp)) {
      return cache.data;
    }
  } catch (error) {
    // Cache file doesn't exist or is invalid
    return null;
  }
}

export async function put(data, key) {
  const cacheFilePath = path.resolve("./cache", `${key}.json`);
  const cacheData = { timestamp: Date.now(), data };
  await writeFile(cacheFilePath, JSON.stringify(cacheData), "utf8");
}
