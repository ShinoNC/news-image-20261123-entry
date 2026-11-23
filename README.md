[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/ShinoNC/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/ShinoNC/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# The World in One Day — Monday 23 November 2026

One newspaper front page summing up Monday 23 November 2026: **25 stories
across 9 regions**, every one dated that day. Led by the three biggest
stories of the day — the Kyiv toll rising to 15 as a boy of 7 is pulled
alive from the rubble in Dymer, Ukraine's claim to have sunk the Russian
corvette Merkury off Benghazi with seven sea drones, and the graves in
Bunia exposing the true scale of the Ebola disaster in DR Congo — with a
number strip, a verified-times UTC timeline, a region bar, a numbered world
map, and a date-check box listing the well-known stories left out because
they belong to another day.

## Entry

`main.ts` (Node 22) is the entry program. It copies the shipped front
page, `entry.png` (1024×1024, under 1 MiB), byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`), creating the output
directory if needed and clearing only its contents. No network, no
randomness: every run writes identical bytes.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
