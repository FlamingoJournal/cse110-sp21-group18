# Storage Architecture Version 2

* Status: Accepted
* Deciders: Back End Team
* Date:  6/1/2021

## Context and Problem Statement

Designed how to structure local storage:
We will use stores for every log type that store the date as the key and the text the user put in as the value.
We will also have an store to hold the keys of the most recent logs.
We will store color in local storage.
The values will have nested arrays, since a page can have multiple text areas on one page.

## IndexedDB
daily = [
        '6/1/2021':['today i ..., bake a cake'],
        '6/2/2021':['today i ...'],
        ]

All of these examples are in year 2021

weekly = [
        '202111': [week one monday's text],
        '202112': [week one tuesday's text],
        ...
        '202121': [week two tuesday's text],
        ]

monthly = [
        '202111': [Month 1 week 1],
        '202112': [Month 1 week 2],
        ...
        '202121': [Month 2 week 1],
        ]

future = [
        '202111': [First Half of the Year, Month 1],
        '202112': [First Half of the Year, Month 2],
        ...
        '202121': [Second Half of the Year, Month 1],
        ]

mostRecent = [daily, weekly, monthly, future]

## Local Storage
{'color':'dark'}
