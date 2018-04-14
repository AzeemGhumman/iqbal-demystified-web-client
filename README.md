Iqbal Demystified Web Client
======================

TODO: Add introduction of the project here. Which technologies are used. How is the project structured, etc.

Running on your machine
--------------------------

1 - Download repository
2 - Make sure you have nodejs installed on your machine
3 - Run the following command
```
$ npm run dev
```

REST API
--------------------------

To get the list of lists:
http://icanmakemyownapp.com/iqbal/updated_scripts/get-list-of-lists.php

Along with book names, the call above will give you all the ListIDs.
To get the contents of a particular list of book, use that ListId to get data from this link:
http://icanmakemyownapp.com/iqbal/updated_scripts/get-list.php?listId={listID for this list}

The response of the get-list call contains the names and IDs of each poem in that book.
To get the contents of a specific poem, use the PoemID to get poem data from this link:
http://icanmakemyownapp.com/iqbal/updated_scripts/get-poem.php?poemId={poemID for the selected poem}

Example of List YAML - (Book: بال جبریل)
http://icanmakemyownapp.com/iqbal/updated_scripts/get-list.php?listId=List_002

Example of Poem YAML - (Poem: ميري نوائے شوق سے شور حريم ذات ميں) 
http://icanmakemyownapp.com/iqbal/updated_scripts/get-poem.php?poemId=002_001

Note: All responses are in valid YAML format
