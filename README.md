# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/hanafixampret/makefun-say-what-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/hanafixampret/makefun-say-what-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) on make.fun — one line of software error copy that tells the brutal truth about the failure.

## The entry

> Connection timed out after 30 seconds. The database heard your request, thought about it, and said nothing. Try again.

The database connection timed out — named plainly, no vague apology — with a twist (it heard you, thought about it, said nothing) and a next step (try again). Fits a real error dialog.

## Run

```sh
node main.ts
```

Writes one line of error copy to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), validates 1–200 characters, a single line, and a byte-identical round-trip.
