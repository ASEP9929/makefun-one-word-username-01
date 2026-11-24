// One Word, One Username, One Reward — entry for
// u-rusdyxbt-one-word-one-username-one-reward-1a191fae
// Writes our own make.fun username, one word and nothing else,
// to /output/entry.txt: exactly "asep-rohendi", no trailing newline.
//
// "asep-rohendi" is one word: the hyphen joins the handle, there is
// no space and no padding. The gate requires UTF-8 text of 1 to 30
// characters, not only whitespace; the guard below fails loudly
// instead of ever writing a padded or multi-word value.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "asep-rohendi";

function writeEntry(username: string): void {
  if (username.length < 1 || username.length > 30 || /\s/.test(username)) {
    throw new Error("username must be a single word of 1-30 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", username, "utf8");
}

writeEntry(USERNAME);
