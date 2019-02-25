---
title: Grid searching
_description: The Ignite UI for Angular Data Grid control features a search API that allows developers to implement search functionality within the grid.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Searching, Search, Search API
---

### Hierarchical Grid Searching

While browsers natively provide search functionality, most of the time the Hierarchical Grid virtualizes its columns and rows that are out of view. In these cases, the native search is unable to search the virtualized cells, since they are not part of the DOM. We have extended the Ignite UI for Angular Hierarchical Grid with a **search API** that allows you to search through the **virtualized content** of the Hierarchical Grid.

#### Demo




<!-- TODO -->


### Usage

#### Grid setup
Let's start by creating our grid and binding it to our data. We will also add some custom styles for the components we will be using!




<!-- TODO -->




<!-- TODO -->


Great, and now let's prepare for the search API of our Hierarchical Grid! We can create a few properties, which can be used for storing the currently searched text and whether the search is case sensitive and/or by an exact match.

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
public exactMatch: boolean = false;
```

#### Search input box

Now let's create our search input! By binding our **searchText** as ngModel to our newly created input and subscribe to the ngModelChange event, we can detect every single **searchText** modification by the user. This will allow us to use the Hierarchical Grid's [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext) and [`findPrev`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findprev) methods to highlight all the occurrences of the **searchText** and scroll to the next/previous one (depending on which method we have invoked).

Both the [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext) and the [`findPrev`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findprev) methods have three arguments:
- `text`: **string** (the text we are searching for)
- (optional) `caseSensitive`: **boolean** (should the search be case sensitive or not, default value is false)
- (optional) `exactMatch`: **boolean** (should the search be by an exact match or not, default value is false)

When searching by an exact match, the search API will highlight as results only the cell values that match entirely the **searchText** by taking the case sensitivity into account as well. For example the strings '_software_' and '_Software_' are an exact match with a disregard for the case sensitivity.

The methods from above return a **number** value (the number of times the Hierarchical Grid contains the given string).

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="hierarchicalGrid.findNext(searchText, caseSensitive, exactMatch)" />
```

#### Display results count
Let's also display the position of the current occurrence, along with the total results count! We can do this by using the grid's `lastSearchInfo` property. This property is automatically updated when using the **find** methods.

- The `hierarchicalGrid.lastSearchInfo.matchInfoCache.length` value will give us the total results count.
- The `hierarchicalGrid.lastSearchInfo.activeMatchIndex` value will give us the index position of the current occurrence (match).

```html
<!--searchgrid.component.html-->

<div class="resultsText" *ngIf="hierarchicalGrid.lastSearchInfo">
    <span *ngIf="hierarchicalGrid.lastSearchInfo.matchInfoCache.length > 0">
        {{ hierarchicalGrid.lastSearchInfo.activeMatchIndex + 1 }} of {{ hierarchicalGrid.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="hierarchicalGrid.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

#### Add search buttons

In order to freely search and navigate among our search results, let's create a couple of buttons by invoking the [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext) and the [`findPrev`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findprev) methods inside the buttons' respective click event handlers.

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="hierarchicalGrid.findPrev(searchText, caseSensitive, exactMatch)" />
    <input type="button" value="Next" (click)="hierarchicalGrid.findNext(searchText, caseSensitive, exactMatch)" />
</div>
```

#### Add keyboard search

We can also allow the users to navigate the results by using the keyboard's arrow keys and the Enter key. In order to achieve this, we can handle the **keydown** event of our search input by preventing the default caret movement of the input with the preventDefault() method and invoke the [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findprev) methods depending on which key the user has pressed.

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="hierarchicalGrid.findNext(searchText, caseSensitive, exactMatch)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        ev.preventDefault();
        this.hierarchicalGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        ev.preventDefault();
        this.hierarchicalGrid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
```

#### Case sensitive and Exact match

Now let's allow the user to choose whether the search should be case sensitive and/or by an exact match. For this purpose we can use simple checkbox inputs by binding our **caseSensitive** and **exactMatch** properties to the inputs' **checked** properties respectively and handle their **change** events by toggling our properties and invoking the [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext) method.

```html
<!--searchgrid.component.html-->

<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">

<span>Exact match</span>
<input type="checkbox" [checked]="exactMatch" (change)="updateExactSearch()">
```

```typescript
// searchgrid.component.ts

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.hierarchicalGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}

public updateExactSearch() {
    this.exactMatch = !this.exactMatch;
    this.hierarchicalGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
}
```

#### Persistence

What if we would like to filter and sort our Hierarchical Grid or even to add and remove records? After such operations, the highlights of our current search automatically update and persist over any text that matches the **searchText**! Furthermore, the search will work with paging and will persist the highlights through changes of the Hierarchical Grid's [`perPage`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#perpage) property.

#### Adding icons

By using some of our other components, we can create an enriched user interface and improve the overall design of our entire search bar! We can have a nice search or delete icon on the left of the search input, a couple of chips for our search options and some material design icons combined with nice ripple styled buttons for our navigation on the right. We can wrap these components inside an input group for a more refined design.
To do this, let's go and grab the [**IgxInputGroup**](../input_group.md), [**IgxIcon**](../icon.md),  [**IgxRipple**](../ripple.md), [**IgxButton**](../button.md) and the [**IgxChip**](../chip.md) modules.

```typescript
// app.module.ts

...
import {
    IgxHierarchicalGridModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxChipsModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule],
})
export class AppModule {}
```

Finally, let's update our template with the new components!

We will wrap all of our components inside an [**IgxInputGroup**](../input_group.md). On the left we will toggle between a search and a delete/clear icon (depending on whether the search input is empty or not). In the center, we will position the input itself. In addition, whenever the delete icon is clicked, we will update our **searchText** and invoke the Hierarchical Grid's [`clearSearch`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearsearch) method to clear the highlights.

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="hierarchicalGrid.findNext(searchText, caseSensitive, exactMatch)"
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
    this.hierarchicalGrid.clearSearch();
}
```

On the right in our input group, let's create three separate containers with the following purposes:
- For displaying the search results.

```html
<!--searchgrid.component.html-->

<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="hierarchicalGrid.lastSearchInfo">
        <span *ngIf="hierarchicalGrid.lastSearchInfo.matchInfoCache.length > 0">
            {{ hierarchicalGrid.lastSearchInfo.activeMatchIndex + 1 }} of {{ hierarchicalGrid.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="hierarchicalGrid.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div>
    ...
```
- For displaying a couple of chips that toggle the **caseSensitive** and the **exactMatch** properties. We have replaced the checkboxes with two stylish chips that change color based on these properties. Whenever a chip is clicked, we invoke its respective handler - **updateSearch** or **updateExactSearch** depending on which chip has been clicked.

```html
<!--searchgrid.component.html-->

    ...
    <div class="chips">
        <igx-chips-area>
            <igx-chip (click)="updateSearch()" [color]="caseSensitive? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Case Sensitive</span>
            </igx-chip>
            <igx-chip (click)="updateExactSearch()" [color]="exactMatch? 'lightgrey' : 'rgba(0, 0, 0, .04)'">
                <span>Exact Match</span>
            </igx-chip>
        </igx-chips-area>
    </div>
    ...
```
- For the search navigation buttons, we have transformed our inputs into ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext)/[`findPrev`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findprev) methods.

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="hierarchicalGrid.findPrev(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="hierarchicalGrid.findNext(searchText, caseSensitive, exactMatch)">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </div>
</igx-suffix>
```

### Known Limitations

|Limitation|Description|
|--- |--- |
|Searching in cells with a template|The search functionality highlights work only for the default cell templates. If you have a column with custom cell template, the highlights will not work so you should either use alternative approaches, such as a column formatter, or set the [`searchable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable) property on the column to false.|
|Remote Virtualization| The search will not work properly when using remote virtualization|
|Cells with cut off text| When the text in the cell is too large to fit and the text we are looking for is cut off by the ellipsis, we will still scroll to the cell and include it in the match count, but nothing will be highlighted |

### API References

In this article we implemented our own search bar for the Hierarchical Grid with some additional functionality when it comes to navigating between the search results. We also used some additional Ignite UI for Angular components like icons, chips and inputs. The search API is listed below.

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) methods:
-   [`findNext`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findnext)
-   [`findPrev`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#findprev)
-   [`clearSearch`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#clearsearch)
-   [`refreshSearch`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#refreshsearch)

[`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html) methods:
-   [`highlightText`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#highlighttext)
-   [`clearHighlight`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#clearhighlight)

[`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html) properties:
-   [`searchable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#searchable)

[`ISearchInfo`]({environment:angularApiUrl}/interfaces/isearchinfo.html)

Additional components and/or directives with relative APIs that were used:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxRippleDirective`]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html)

Styles:

* [`IgxHierarchicalGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [`IgxInputGroupComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [`IgxRippleDirective Styles`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)
* [`IgxButtonDirective Styles`]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [`IgxChipComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-chip-theme)

### Additional Resources
<div class="divider--half"></div>

* [Hierarchical Grid overview](hierarchical_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Filtering](filtering.md)
* [Paging](paging.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
