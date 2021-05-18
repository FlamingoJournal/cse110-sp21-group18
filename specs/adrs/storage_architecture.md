# Storage Architecture

* Status: accepted
* Deciders: Back End Team
* Date:  5/16/2021

## Context and Problem Statement

Designed how to structure local storage:
We will use arrays for every log type that store the entry as the key and the text the user put in as the value.
We will also have an array to hold the keys of the most recent logs.

daily = ['2021may01':'today i ...',
         'may02']

weekly = ['2021may01'
          '2021may02']

months = [jan,feb,]

monthly = ['2021may']
future = ['2021_01','2021_02']

mostRecent = ['2021may01', '2021may01']
