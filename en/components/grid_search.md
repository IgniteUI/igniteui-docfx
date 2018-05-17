---
title: Grid searching
_description: The Ignite UI for Angular Data Grid control features a search API that allows developers to implement search functionality within the grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Searching, Search, Search API
---

### Grid Searching

The Ignite UI for Angular Data Grid control features a **search API** that allows developers to implement search functionality for the grid.

#### Demo

<div class="sample-container loading" style="height:700px">
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

#### Grid setup
Let's start by creating our grid and binding it to our data. 

```html
<!--searchgrid.component.html-->

    <igx-grid #grid1 id="grid1" [data]="data" [autoGenerate]="false">
        <igx-column [field]="'IndustrySector'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'IndustryGroup'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'SectorType'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'KRD'" dataType="number" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'MarketNotion'" dataType="number" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'Date'" dataType="date" [filterable]="true" [sortable]="true"></igx-column>
    </igx-grid>
```

Great, and now let's prepare for the search API of our Data Grid! We can create a couple of properties, which can be used for storing the currently searched text and whether the search is case sensitive or not.

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
```

Let's add some custom styles for the components we will be using!

```css
/* searchgrid.component.css */

.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.searchButton {
    width: 80px;
}
```

#### Search input box

Now let's create our search input! By binding our **searchText** as ngModel to our newly created input and subscribing for the ngModelChange event, we can detect every single modification over our **searchText** by the user. This will allow us to use the grid's `findNext` and `findPrev` methods to highlight all the occurrences of the **searchText** and scroll navigate to the next/previous one (depending on which method we have invoked).

Both the `findNext` and the `findPrev` methods require two arguments:
- **string** value (the text we are searching for)
- **boolean** value (should the search be case sensitive). 

The methods from above return a **number** value (the number of times the grid contains the given string).

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)" />
```

#### Display results count
Let's also display the results count by accessing the grid's `lastSearchInfo` property. We can get the results count from the `lastSearchInfo.matchInfoCache.length` value. This property is automatically updated when using the **find** methods.

```html
<!--searchgrid.component.html-->

<div class="offset">
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">Results: {{ grid.lastSearchInfo.matchInfoCache.length }}</span>
</div>
```

#### Add search buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the `findNext` and the `findPrev` methods inside the buttons' respective click event handlers.

```html
<!--searchgrid.component.html-->

<div class="offset">
    <input class="searchButton" type="button" value="Previous" (click)="grid.findPrev(searchText, caseSensitive)" />
    <input class="searchButton" type="button" value="Next" (click)="grid.findNext(searchText, caseSensitive)" />
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">Results: {{ grid.lastSearchInfo.matchInfoCache.length }}</span>
</div>
```

#### Add keyboard search

We can also allow the users to search navigate the results by using the keyboard's arrow keys and the Enter key. In order to achieve this, we can handle the **keydown** event of our search input and invoke the `findNext`/`findPrev` methods depending on which key the user has pressed.

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        this.grid.findNext(this.searchText, this.caseSensitive);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        this.grid.findPrev(this.searchText, this.caseSensitive);
    }
}
```

#### Case sensitive

Now let's allow the user to choose whether the search should be case sensitive or not. For this purpose we can use a simple checkbox input by binding our **caseSensitive** property to its **checked** property and handle the **change** event by toggling our property and invoking the `findNext` method.

```html
<!--searchgrid.component.html-->

<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">
```

```typescript
// searchgrid.component.ts

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive);
}
```

#### Persistence

What if we would like to filter and sort our grid or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the **searchText**!

In order to reapply the current search, we can always use the `refreshSearch` method manually, which:
- Has no parameters.
- Reapplies the existing search and returns how many times the grid contains the last search.

#### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overal design of our search input. We can have a nice search icon on the left of the search input, a delete icon on the right (for deleting the entire content of the input) and a nicely styled checkbox. We can wrap some of these components inside an input group for a more refined design.
To do this, let's go and grab the [**IgxInputGroup**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html), [**IgxIcon**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html) and the [**IgxCheckbox**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/checkbox.html) modules.

```typescript
// app.module.ts

...
import {
    IgxGridModule.forRoot(),
    IgxInputGroupModule,
    IgxIconModule,
    IgxCheckboxModule
} from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxCheckboxModule],
})
export class AppModule {}
```

Finally, let's update our template with the new components! We will wrap our search icon, search input and delete icon by using the **IgxInputGroup**. In addition, whenever the delete icon is clicked, we will update our **searchText** and invoke the grid's `clearSearch` method to clear the highlights.

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon>search</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText"
           (ngModelChange)="grid.findNext(searchText, caseSensitive)" (keydown)="searchKeyDown($event)" />

    <igx-suffix *ngIf="searchText.length > 0" (click)="clearSearch()">
        <igx-icon>clear</igx-icon>
    </igx-suffix>
</igx-input-group>

<igx-checkbox class="offset" [checked]="caseSensitive" (change)="updateSearch()">
    <span>Case sensitive</span>
</igx-checkbox>
```

```typescript
// searchgrid.component.ts

public clearSearch() {
    this.searchText = "";
    this.grid.clearSearch();
}
```

### API Summary

In this article we implemented our own search box for the grid with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Angular components like icons and inputs. The search API options and methods are listed below.

#### Methods
The following methods are available on the **IgxGridComponent**:
| Name | Type | Parameters |Description |
| :--- | :--- | :--- | :--- |
| `findNext` | number | The string to search and, optionally, if the search should be case sensitive (defaults to false). | Finds the next occurrence of a given string in the grid and scrolls to the cell if it isn't visible. Returns how many times the grid contains the string. |
| `findPrev` | number | The string to search and, optionally, if the search should be case sensitive (defaults to false). | Finds the previous occurrence of a given string in the grid and scrolls to the cell if it isn't visible. Returns how many times the grid contains the string. |
| `clearSearch` | void | N/A | Removes all the highlights in the grid. |
| `refreshSearch` | number | N/A | Reapplies the existing search. Returns how many times the grid contains the last search. |

<div class="divider"></div>

The following methods are available on the **IgxGridCellComponent**:
| Name | Type | Parameters |Description |
| :--- | :--- | :--- | :--- |
| `highlightText` | number | The string to search and, optionally, if the search should be case sensitive (defaults to false). | Highlights all occurrences of a string in a given cell. Return how many times the searched string is contained in the cell. |
| `clearHighlight` | void | N/A | Removes all the highlights in the cell. |

<div class="divider"></div>

#### Properties
The following properties are available on the **IgxGridComponent**:
| Name | Type | Description |
| :--- | :--- | :--- |
| `lastSearchInfo` | ISearchInfo | Contains information about the last performed search. |


<div class="divider"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Filtering](grid_filtering.md)
* [Paging](grid_paging.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Export to Excel](exporter_excel.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
