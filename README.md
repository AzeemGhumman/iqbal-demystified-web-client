Iqbal Demystified Web Client
======================

TODO: Add introduction of the project here. Which technologies are used. How is the project structured, etc.

Running on your machine
--------------------------

1 - Clone repository

2 - Make sure you have nodejs installed on your machine

3 - Run the following command
```
$ npm run dev
```

REST API
--------------------------
There are 3 types of objects that can be requested using the REST API
* List of Lists
* List
* Poem

The response from the server is in **YAML** format.

### List of Lists
To get the List Of Lists, use the following REST endpoint:

http://icanmakemyownapp.com/iqbal/updated_scripts/get-list-of-lists.php

Along with book names, the call above will return all the ListIDs.


### List
To get the contents of a particular list of book, use that ListId to get data from this link:

http://icanmakemyownapp.com/iqbal/updated_scripts/get-list.php?listId={listID for this list}

The response of the get-list call contains the names and IDs of each poem in that book.

**Example** of List YAML - (Book: بال جبریل)

http://icanmakemyownapp.com/iqbal/updated_scripts/get-list.php?listId=List_002

### Poem
To get the contents of a specific poem, use the PoemID to get poem data from this link:

http://icanmakemyownapp.com/iqbal/updated_scripts/get-poem.php?poemId={poemID for the selected poem}

**Example** of Poem YAML - (Poem: ميري نوائے شوق سے شور حريم ذات ميں) 

http://icanmakemyownapp.com/iqbal/updated_scripts/get-poem.php?poemId=002_001
