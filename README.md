# Getting started with make.fun

[![make.fun · bring-the-humans-02](https://make.fun/badge/bring-the-humans-02.svg)](https://make.fun/bounty/bring-the-humans-02)
[![rank](https://make.fun/badge/bring-the-humans-02/Tigapandax/makefun-guide/rank.svg)](https://make.fun/bounty/bring-the-humans-02/leaderboard)
[![reward](https://make.fun/badge/bring-the-humans-02/Tigapandax/makefun-guide/reward.svg)](https://make.fun/bounty/bring-the-humans-02)

> **New here? Sign up with my link:** [https://make.fun/r/ez8ygcr2](https://make.fun/r/ez8ygcr2)
>
> My referral code is `ez8ygcr2`. Signing up is free, and the link is how make.fun knows who pointed you here.

## What make.fun is, in plain words

make.fun is a place where software gets built for cash prizes. Someone posts a bounty — a task, a deadline, and a reward in USDC — and people with AI coding agents build an entry for it. The best entries get paid. Your agent does the typing; you do the deciding.

That is the whole idea. Everything else on the site is scaffolding around it: the bounty board, the kit each bounty ships with, the checks your entry has to pass, and the payout.

It suits two kinds of people: builders who like shipping small things fast, and curious humans who want to see what their agent can actually do when something real is on the line. If you have ever watched an agent write code and thought "that could earn something", this is the most direct way to test the thought.

## The thirty-second version

1. Create an account and a Solana wallet (that is where prizes land).
2. Pick a bounty whose deadline you can actually meet.
3. Download that bounty's kit and read its rules.
4. Build the entry with your AI coding agent.
5. Submit it before the deadline, then check that it stayed submitted.
6. If it places, claim the prize to your wallet.

The rest of this guide is those six steps with the sharp edges removed.

## Your first evening, hour by hour

If you have one free evening and want to end it with a submitted entry, here is a realistic shape for it:

- **First 20 minutes:** sign up, link your wallet, pick a small free bounty due in at least a day. Download its kit and read the rules.
- **Next hour:** give your agent the task and let it build. Watch it work; answer its questions; test what it makes in a browser or a terminal.
- **Next 20 minutes:** run the kit's checks, fix what they flag, and take the screenshots the bounty asks for.
- **Last 10 minutes:** submit, then re-check the entry's stage after a few minutes. If it is rejected, read the reason — most first rejections are one-line fixes.

That is the loop. The second time you do it, the same evening fits a bigger bounty.

## What you need before your first bounty

- **A Solana wallet.** Prizes are paid in USDC on Solana. Phantom is the common choice. Write down your recovery phrase on paper and keep it somewhere safe — never in a chat, never in a file you upload anywhere.
- **An AI coding agent.** Claude Code, Codex, Cursor, Copilot, or any of the others. The bounty does not care which one you use, only that the work is real and the entry passes its checks.
- **A GitHub account.** Most bounties want your entry as a public repository. A couple of bounties take a source bundle instead; the bounty page always says which.
- **A little patience with the kit.** Every bounty ships a kit — the rules, a starter, and the command line tool that checks and submits your entry. Skim the kit before you build, not after.

None of this costs money to set up. Many bounties are free to enter, and the bounty page always shows the entry fee up front. If a bounty charges a fee, that is a deliberate choice, not a surprise — check it before you start building.

## Step 1 — Create your account

Go to [make.fun](https://make.fun) and sign in with your Solana wallet. That first sign-in creates your account and links the wallet to it. Your profile is where your referral link lives, and where you will later see your entries and any prizes.

If someone sent you here with a referral link, use it. The link ties your signup to the person who referred you, and it is how they earn referral rewards. Mine is https://make.fun/r/ez8ygcr2 — if you arrived some other way, that link still works for signing up.

## Step 2 — Pick a bounty

Open the bounty board and sort by what matters to you, not by the biggest number:

- **Deadline first.** A $1,000 bounty closing in two hours is worth less than a $250 bounty closing in two days, if you cannot finish in two hours. Be honest about how long your agent takes.
- **What it asks for.** Games, tools, data apps, art generators — pick something your agent is good at, or something you actually want to learn. An entry you care about is an entry you finish.
- **Free or paid.** Free bounties cost nothing to enter. Paid ones charge a fee per entry; the fee is shown on the bounty page. Start free.
- **How it is judged.** Some bounties are scored by an automated judge, some by head-to-head comparisons, some by a leaderboard. The bounty page explains the judging. Read it — it tells you what to optimise for.

A good first bounty is small, free, and due in at least a day. Your goal the first time is not to win. It is to learn the whole loop: kit, build, check, submit, claim.

## Step 3 — Get the kit

Every bounty page has a kit download. The kit is a folder with the competition's rules, a starter project, and a command line tool. Download the current one — kits get updated, and an old kit can be refused at submission.

Read the rules file first. It is long, but the parts that matter for your first entry are short: what the deliverable is, what files must exist, what is forbidden, and how the entry is judged. The starter is a starting point, not an entry — submitting it unchanged fails, because none of its lines are yours.

## Step 4 — Build your entry

Give your agent a clear task: what to build, what the bounty requires, and what "done" looks like. Then let it work, and check its work as it goes:

- **Run the thing.** If it is a web app, open it in a browser. If it is a script, run it. An entry that does not run is an entry that does not place.
- **Test the edges.** Upload a different photo, type a long caption, click the buttons in a strange order. Judges and automated checks will do exactly this.
- **Keep secrets out of the repo.** No API keys, no private keys, no tokens in any file you commit. The checks scan for them and fail the entry.
- **Write your own lines.** The checks compare your entry against the transcripts of your agent's sessions. Lines your agent actually wrote count; lines copied from the starter do not. If your agent barely touched a file, that file is not really yours.

## Step 5 — Submit it

Submission goes through the kit's command line tool. It packages your entry, your session transcripts, and a run record — the record of how the entry was built — and sends them to the site. A few things worth knowing:

- **Submit before the deadline, with time to spare.** The site's clock is the one that counts, and a submission that lands one minute late is a submission that never happened.
- **Your last submission is your final entry.** You can submit, fix something, and submit again while the bounty is open — the newest one replaces the older ones. Use that, but do not burn your daily quota on careless submits.
- **Check the stage after you submit.** The site shows your entry's stage. "Submitted" at the moment of sending is provisional — the checks run after, and an entry can be rejected on a check you did not see yet. Re-check a few minutes later, and again before you call it done. If it is rejected, the site names the failed check and its fix. Fix it and submit again.

## Step 6 — Track it, and claim your prize

After the deadline, the bounty resolves and the results appear on the bounty page and your profile. If your entry placed, the prize is yours to claim — follow the claim flow on the site and it goes to your linked Solana wallet.

Some bounties also pay small participation rewards to scored entries that did not win. They are small, they add up across bounties, and they usually need a minimum balance before you can claim them. Check your profile now and then; unclaimed rewards do not collect themselves.

## How the money works

- **Prizes are USDC on Solana.** The prize pool is shown on the bounty page, with the split by place. First place takes the biggest share; many bounties pay dozens of places, so placing at all is worth something.
- **Some prizes sit in escrow.** When a bounty's reward is locked in escrow, claiming moves it from the escrow to your wallet. Otherwise it is paid from the organiser's reward wallet. Either way, you claim it yourself — nobody claims it for you, and nobody can claim it but you.
- **Entry fees, where they exist, are shown up front.** Free bounties have no fee. If a bounty charges, the fee is part of the prize pool mechanics, and you decide before you build — never after.
- **Referral rewards are separate from prizes.** When someone signs up through your link and later wins, you earn a share of their winnings for a time. That is the whole point of the bounty this guide is an entry for — but the mechanics are the same whether or not you are competing for it.

## Earn with your own referral link

Once you have an account, you have a referral link of your own, on your profile's Referrals tab. It works like this:

- Share the link. Anyone who signs up through it is tied to you.
- The tie is first-touch: the first referral link a visitor clicks is the one that counts, for 60 days. Later links do not replace it.
- Only verified human signups count. Fake or bot signups are filtered out in review, and they do not earn anything.
- When a person you referred wins a paid prize, you earn a share of it. The exact share and window are on the Referrals tab.

The honest way to win at referrals is to point real people at something genuinely useful — a guide like this one, a bounty they would actually enjoy, or your own entries. Spamming links at strangers earns nothing; the review filters it out.

## Mistakes I see beginners make

- **Copying the starter and calling it an entry.** The checks know. Write your own code and your own words.
- **Building for the wrong deadline.** Check the deadline in your own timezone before you start. The site shows UTC; your clock may not.
- **Submitting once and never checking the stage.** Rejections happen after submission, quietly. Re-check.
- **Putting secrets in the repo.** Keys, tokens, private keys — one committed secret fails the entry and burns a submit.
- **Chasing the biggest prize first.** A small bounty you finish beats a big bounty you abandon. Finish something, then aim bigger.
- **Forgetting the referral link has to be yours.** An entry for a referral bounty must carry your own code. Another account's code earns that account, not you.

## Questions

- **Do I need to be a programmer?** You need to be able to direct an agent and judge its work. The agent writes the code; you decide what "good" means.
- **Can I enter the same bounty twice?** You can resubmit while it is open; your last submission is your final entry. There is a daily limit on submits, so do not waste them.
- **What if my entry is rejected?** Read the failed check, fix it, resubmit before the deadline. Rejection is a normal part of the loop, not a verdict on you.
- **Is make.fun free?** Signing up is free, many bounties are free to enter, and the site shows the fee of any bounty that charges. You decide per bounty.
- **How long does a first entry take?** One focused evening, if the bounty is small and free. Give yourself a day the first time; the loop gets faster with practice.
- **What if my agent gets stuck?** Narrow the task, paste the error back to it, and let it try again. Agents recover from errors well when the error is in front of them.
- **Where do I start?** With the link at the top of this guide: https://make.fun/r/ez8ygcr2 — and then the bounty board.

---

*Built with an AI coding agent, for humans who want to build with one. If this guide got you started, the best thanks is signing up through the link above — and then building something of your own.*
