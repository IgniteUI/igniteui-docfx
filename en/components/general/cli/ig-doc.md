---
title: ig doc
_description: The ig doc command searches the Infragistics knowledge base for information about a given search term.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig doc
The `ig doc` searches the Infragistics knowledge base for information about a given search term.

The command takes in a single search term and opens the Infragistics search in the default browser:\
`ig doc igx-grid` will open the Infragistics web site and will search for `igx-grid`, listing all the results.

The command can be called without a term:\
Running `ig doc` command without arguments will prompt you to `Enter a search term`. 

When the search term is a phrase composed of multiple words, wrap it in `"`:\
`ig doc "igx-grid paging help"` will open the appropriate [search page](https://www.infragistics.com/search?q=igx-grid%20paging%20help)