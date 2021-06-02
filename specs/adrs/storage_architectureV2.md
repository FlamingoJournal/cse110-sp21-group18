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

weekly = [
        '2021may01': [[monday's text], [tuesday's text], ...],
        '2021may02': [[monday's text], [tuesday's text], ...],
        ]

monthly = [
        'may2021':[[week 1 text], [week 2 text], ...], 
        'june2021': [[week 1 text], [week 2 text], ...],
        ]

future = [
        '2021_01': [[jan text], [feb text]],
        '2021_02':[[jun text], [july text]],
        ]

mostRecent = [daily, weekly, monthly, future]

## Local Storage
{'color':'dark'}
