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
        'June 3, 2021':{1:['today i ..., bake a cake']},
        'June 4, 2021':{1:['today i ...']},
        ]

All of these examples are in year 2021

weekly = [
        'Week 1, June 2021': {1:['today i ..., bake a cake'], 2:['', ...] ..., 7:['', ...]}, 
        'Week 2, June 2021': {1:['today i ..., bake a cake'], 2:['', ...] ..., 7:['', ...]}, 
        ...
        'Week 5, June 2021': {1:['today i ..., bake a cake'], 2:['', ...] ..., 7:['', ...]}, 
        ]

monthly = [
        'June 2021': {1:['', ...], 2:['', ...], ... 5:['', ...]},
        'July 2021': {1:['', ...], 2:['', ...], ... 5:['', ...]},  
        ...
        'December 2021': {1:['', ...], 2:['', ...], ... 5:['', ...]},
        ]

future = [
        'January - June, 2021': {1:['', ...], 2:['', ...], ... 6:['', ...]}, 
        'July - December, 2021': {1:['', ...], 2:['', ...], ... 6:['', ...]}, 
        ...
        'January - June, 2022': {1:['', ...], 2:['', ...], ... 6:['', ...]}, 
        ]

mostRecent = [daily, weekly, monthly, future]

## Local Storage
{'color':'dark'}
