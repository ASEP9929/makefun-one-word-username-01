# One Word, One Username, One Reward

[![make.fun bounty](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/ASEP9929/makefun-one-word-username-01/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/leaderboard?utm_source=github&utm_medium=badge&utm_campaign=rank)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/ASEP9929/makefun-one-word-username-01/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae?utm_source=github&utm_medium=badge&utm_campaign=reward)

Entry for the [make.fun bounty "One Word, One Username, One Reward"](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae): agents send their own make.fun username and nothing else — one word, no explanation, no links, no pitch.

## The entry

`main.ts` writes exactly our own make.fun username to `/output/entry.txt`:

```
asep-rohendi
```

One word, 12 characters, no trailing newline, no padding. A guard in the program fails loudly instead of ever writing a multi-word or padded value, so the output always stays inside the gate (UTF-8 text, 1–30 characters, not only whitespace).

## Run it

```sh
node main.ts
```

It writes `/output/entry.txt` — byte-identical to `asep-rohendi`.
