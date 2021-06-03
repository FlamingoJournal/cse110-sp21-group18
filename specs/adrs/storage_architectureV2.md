# Storage Architecture Version 2

* Status: Accepted
* Deciders: Back End Team
* Date:  6/1/2021

## Context and Problem Statement

Designed how to structure local storage:
We will use stores for every log type that store the date as the key and the text the user put in as the value.
We will also have an store to hold the keys of the most recent logs.
We will store color in local storage.
The values will have nested arrays, since a page can have multiple bulletEntry instances on one page.

## IndexedDB
daily = [
        '6/1/2021':{1:['today i ..., bake a cake']},
        '6/2/2021':{1:['today i ...']},
        ]

All of these examples are in year 2021

weekly = [
        '2021011': {1:['today i ..., bake a cake'], 2:['', ...] ..., 7:['', ...]}, <-- month 1 week 1
        '2021012': {1:['today i ..., bake a cake'], 2:['', ...] ..., 7:['', ...]}, <-- month 1 week 2
        ...
        '2021023': {1:['today i ..., bake a cake'], 2:['', ...] ..., 7:['', ...]}, <-- month 2 week 3
        ]

monthly = [
        '202101': {1:['', ...], 2:['', ...], ... 5:['', ...]}, <-- Month 1 
        '202102': {1:['', ...], 2:['', ...], ... 5:['', ...]}, <-- Month 1 
        ...
        '202112': {1:['', ...], 2:['', ...], ... 5:['', ...]}, <-- Month 12 
        ]

future = [
        '20211': {1:['', ...], 2:['', ...], ... 6:['', ...]}, <--First Half of the Year 2021
        '20212': {1:['', ...], 2:['', ...], ... 6:['', ...]}, <--Second Half of the Year 2021
        ...
        '20221': {1:['', ...], 2:['', ...], ... 6:['', ...]}, <--First Half of the Year 2022
        ]

mostRecent = [daily, weekly, monthly, future]

## Local Storage
{'color':'dark'}
