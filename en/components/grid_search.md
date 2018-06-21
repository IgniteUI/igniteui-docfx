---
title: Grid searching
_description: The Ignite UI for Angular Data Grid control features a search API that allows developers to implement search functionality within the grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Searching, Search, Search API
---

### Grid Searching

While browsers natively provide search functionality, most of the time the grid virtualizes its columns and rows that are out of view. In these cases, the native search is unable to search the virtualized cells, since they are not part of the DOM. We have extended the Ignite UI for Angular Data Grid with a **search API** that allows you to search through the **virtualized content** of the grid.

#### Demo

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

#### Grid setup
Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!

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

```css
/* searchgrid.component.css */

.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.resultsText {
    font-size: 0.875rem;
}

.caseSensitiveButton {
    margin-left: 10px;
}

.caseSensitiveIcon {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
    color: rgba(0, 0, 0, .54);
}

.searchButtons {    
    margin-left: 5px;
}
```

Great, and now let's prepare for the search API of our Data Grid! We can create a couple of properties, which can be used for storing the currently searched text and whether the search is case sensitive or not.

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
```

#### Search input box

Now let's create our search input! By binding our **searchText** as ngModel to our newly created input and subscribe to the ngModelChange event, we can detect every single **searchText** modification by the user. This will allow us to use the grid's `findNext` and `findPrev` methods to highlight all the occurrences of the **searchText** and scroll to the next/previous one (depending on which method we have invoked).

Both the `findNext` and the `findPrev` methods have two arguments:
- **string** value (the text we are searching for)
- (optional) **boolean** value (should the search be case sensitive or not, default value is false). 

The methods from above return a **number** value (the number of times the grid contains the given string).

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)" />
```

#### Display results count
Let's also display the position of the current occurrence, along with the total results count! We can do this by using the grid's `lastSearchInfo` property. This property is automatically updated when using the **find** methods.

- The `grid.lastSearchInfo.matchInfoCache.length` value will give us the total results count. 
- The `grid.lastSearchInfo.activeMatchIndex` value will give us the index position of the current occurrence (match). 

```html
<!--searchgrid.component.html-->

<div class="resultsText" *ngIf="grid.lastSearchInfo">
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">
        {{ grid.lastSearchInfo.activeMatchIndex + 1 }} of {{ grid.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

#### Add search buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the `findNext` and the `findPrev` methods inside the buttons' respective click event handlers.

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="grid.findPrev(searchText, caseSensitive)" />
    <input type="button" value="Next" (click)="grid.findNext(searchText, caseSensitive)" />
</div>
```

#### Add keyboard search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the Enter key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the preventDefault() method and invoke the `findNext`/`findPrev` methods depending on which key the user has pressed.

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        ev.preventDefault();
        this.grid.findNext(this.searchText, this.caseSensitive);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        ev.preventDefault();
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

What if we would like to filter and sort our grid or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the **searchText**! Furthermore, the search will work with paging and will persist the highlights through changes of the grid's `perPage` property.

#### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input and some material design icons combined with nice ripple styled buttons for our search options and navigation on the right. We can wrap these components inside an input group for a more refined design.
To do this, let's go and grab the [**IgxInputGroup**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html), [**IgxIcon**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/icon.html),  [**IgxRipple**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/ripple.html) and the [**IgxButton**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/button.html) modules.

```typescript
// app.module.ts

...
import {
    IgxGridModule.forRoot(),
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule    
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule],
})
export class AppModule {}
```

Finally, let's update our template with the new components!

We will wrap all of our components inside an **IgxInputGroup**. On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our **searchText** and invoke the grid's `clearSearch` method to clear the highlights.

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)"
        (keydown)="searchKeyDown($event)" />
    
    <igx-suffix *ngIf="searchText.length > 0">
        ...
    </igx-suffix>
</igx-input-group>
```

```typescript
// searchgrid.component.ts

public clearSearch() {
    this.searchText = "";
    this.grid.clearSearch();
}
```

On the right in our input group, let's create three separate containers with the following purposes:
- For displaying the search results.

```html
<!--searchgrid.component.html-->

<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="grid.lastSearchInfo">
        <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">
            {{ grid.lastSearchInfo.activeMatchIndex + 1 }} of {{ grid.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="grid.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div>
    ...
```
- For a button that toggles the **caseSensitive** property. We have replaced the checkbox with a more stylish button that contains a material icon. Whenever the button is clicked, we invoke our custom **updateSearch** method again and we set different background to our button depending on the state of the **caseSensitive** property.

```html
<!--searchgrid.component.html-->

    ...
    <div class="caseSensitiveButton">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="updateSearch()"
                [igxButtonBackground]="caseSensitive? 'lightgrey' : 'transparent'">
            <igx-icon class="caseSensitiveIcon" fontSet="material" name="text_fields"></igx-icon>
        </button>
    </div>
    ...
```
- For the search navigation buttons, we have transformed our inputs into ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the `findNext`/`findPrev` methods.

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findPrev(searchText, caseSensitive)">
            <igx-icon fontSet="material" name="navigate_before"></igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findNext(searchText, caseSensitive)">
            <igx-icon fontSet="material" name="navigate_next"></igx-icon>
        </button>
    </div>
</igx-suffix>
```

### API Summary

In this article we implemented our own bar for the grid with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Angular components like icons and inputs. The search API is listed below.

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

The following properties are available on the **IgxColumnComponent**:
| Name | Type | Description |
| :--- | :--- | :--- |
| `searchable` | boolean | Determines whether the column is included in the search. If set to false, the cell values for this column will not be included in the results of the search API of the grid (defaults to true). |

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
