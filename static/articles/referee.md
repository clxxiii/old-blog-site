---
title: How to be a referee
description: A tutorial on the ins and outs of becoming an osu! referee.
publishDate: 02 17 22
---

# Introduction

While your job as a referee may not be immediately obvious, your
job as a referee is crucial to the tournament scene. Which is what
makes it the perfect role for your first time as staff. For the purposes
of keeping a complete guide, I'll be going over everything from the
software to use, to refereeing without a ref sheet, to a breakdown
of what I think should be the role of the ref in a behavioral situation.

# IRC Clients

When it comes to refereeing, you will need some type of software to actually
interract with chat. One option is refereeing from in game, but it's clunky,
unprofessional, and there are many tournaments that don't allow that in the
first place.

### Here are my top three choices for IRC Clients:

### [chat4osu!](https://osu.ppy.sh/community/forums/topics/879262)

![c40 Image](<https://raw.githubusercontent.com/clxxiii/clxxiii-guides/main/(public)/osu-staff/static/wiki_images/chat4osu.png>)

If you want to have easy access to osu! chat and ref casually on the side,
chat4osu! is the most well-suited towards people that just want a simple setup.
It has support for hotkeys, custom notifications, and the ability to visualize
the lobby using a side menu.

### _Unfortunately, there's no MacOS release as of now._

### [Script Chan](https://osu.ppy.sh/community/forums/topics/730734)

![](<https://raw.githubusercontent.com/clxxiii/clxxiii-guides/main/(public)/osu-staff/static/wiki_images/scriptchan.png>)

Script chan is the ultimate referee tool. It is completely overkill
and I love it. It's got the ability to manage and create teams, manage mappools,
use discord webhooks to post match results, automatic score keeping and posting,
almost anything you could need in a client you have with Script chan (except for hotkeys).
<br><br><b>This client only works on windows.</b>

### [KiwiIRC](https://kiwiirc.com/nextclient/)

![](<https://raw.githubusercontent.com/clxxiii/clxxiii-guides/main/(public)/osu-staff/static/wiki_images/kiwiIRC.png>)

KiwiIRC is by far the most compatible client you can get. It's all hosted on the web,
but it has virtually no features. It wasn't made for osu in the first place. However,
if you need a client in a pinch, or have an operating system that doesn't support other
clients, KiwiIRC is the best bet.

## Which does CLXXIII use?

I rarely use KiwiIRC, but I have in the past when I needed to from a different computer
where I didn't have my normal software installed. If it's a 1v1 tournament, or a smaller
tournament I will use chat4osu. If it's a larger tournament, or one that I've already set
up in Script chan, I will use both chat4osu for chat, and Script chan for the scorekeeping
features.

# Commands

When you're using an IRC client, you can't interact with a multiplayer lobby like you are used
to. That's where the `!mp` commands come in. For nearly every action you
can make in a multi lobby, you can make using `!mp` commands. Including
some things you can't do regularly.

Here's a list of every `!mp` command you can use:
You can get access to this list using `!mp help` in a multi,
or a DM with bancho.

| Command                                     | Function                                                                     |
| :------------------------------------------ | :--------------------------------------------------------------------------- |
| !mp lock                                    | Prevents players from moving between slots                                   |
| !mp unlock                                  | Allows players to move between slots                                         |
| !mp make `[room-name]`                      | Makes a multiplayer lobby                                                    |
| !mp makeprivate `[room-name]`               | Makes a multiplayer lobby, only the players in the lobby can see the MP link |
| !mp size `[size]`                           | Changes the number of open slots                                             |
| !mp set `[teammode]` `[scoremode]` `[size]` | Sets lobby properties                                                        |
| !mp move `[username]` `[slot]`              | Moves a player to a different slot                                           |
| !mp invite `[username]`                     | Invites a player to the lobby                                                |
| !mp host `[username]`                       | Gives a player the host                                                      |
| !mp clearhost                               | Clears the host from the lobby                                               |
| !mp settings                                | Prints information about the lobby                                           |
| !mp kick `[username]`                       | Kicks a player from the lobby                                                |
| !mp ban `[username]`                        | Bans a player from the lobby                                                 |
| !mp team `[username]` `[team]`              | Sets the team of a player                                                    |
| !mp map `[map-id]` `[gamemode]`             | Changes the map of the lobby                                                 |
| !mp mods `[mods]`                           | Changes the mods active in the lobby                                         |
| !mp timer `[seconds]`                       | Sets a timer                                                                 |
| !mp start `[seconds]`                       | Starts the game                                                              |
| !mp abort                                   | Stops the current game from playing                                          |
| !mp aborttimer                              | Stops the current timer                                                      |
| !mp password `[password]`                   | Changes the password of the lobby                                            |
| !mp addref `[username]`, , ...              | Adds users able to use !mp commands                                          |
| !mp removeref `[username]`, , ...           | Removes users able to use !mp commands                                       |
| !mp listrefs                                | Lists all referees                                                           |
| !mp name `[room-name]`                      | Changes the name of the lobby                                                |

## Variables

| Variable      | Meaning                                                                                                                                     |
| ------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `[room-name]` | The name of the multi room                                                                                                                  |
| `[username]`  | A player, can be their name, `clxxiii`, or their ID, `#10962678`                                                                            |
| `[size]`      | The number of slots, from the top                                                                                                           |
| `[teammode]`  | `0` HeadToHead<br>`1` TagCoop<br>`2` TeamVS<br>`3` TeamTagVs                                                                                |
| `[scoremode]` | `0` Score<br>`1` Accuracy<br>`2` Combo<br>`3` ScoreV2                                                                                       |
| `[gamemode]`  | `0` Standard<br>`1` Taiko<br>`2` Catch<br>`3` Mania                                                                                         |
| `[team]`      | Red or Blue                                                                                                                                 |
| `[map-id]`    | The slot id, from 1-16                                                                                                                      |
| `[mods]`      | A string of mods to be enable<br>EX: <span class="code">!mp mods NF, <span class="code">!mp mods HD NF, <span class="code">!mp mods Freemod |
| `[seconds]`   | Number of seconds before the timer ends                                                                                                     |
| `[password]`  | Password to enter the lobby (none if left blank)                                                                                            |

# Running Matches

##### Now that you know all of the commands, it's time to set up a lobby! Remember to remind your players about the upcoming match at least 15 minutes in advance!

- !mp make `[acronym]`: (`[Team1]`) vs (`[Team2]`) - Make the lobby
- !mp set `[teammode]` `[scoremode]` `[size]` - Set the settings
- !mp mods NF - Change default map to NF
- !mp map `[map-id-of-NM1]` - Change map to NM1

The rest of the setup will change depending on what you're running
