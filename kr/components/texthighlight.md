---
title: TextHighlight Directive - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular TextHighlight directive can be used to highlight parts of text and have an active highlight on one of them.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular TextHighlight Directive, IgxTextHighlight Directive
_language: kr
---

## TextHighlight Directive

The [`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) directive in Ignite UI for Angular is used to highlight parts of a text, providing options for case sensitive searches and to highlight only exact matches. It also allows the developer to keep an active highlight, which can be any of the already highlighted parts.

### TextHighlight Demo

<code-view style="height: 260px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-1" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> To start using Ignite UI for Angular components in your own projects, make sure you have configured all necessary dependencies and have performed the proper setup of your project. You can learn how to do this in the [**installation**](general/getting-started.md) topic.

### Usage

To get started with the Ignite UI for Angular TextHighlight directive, let's first import the `IgxTextHighlightModule` in the **app.module.ts** file along with the other Ignite UI for Angular modules we need for our application.

```typescript
// app.module.ts

...
import { IgxButtonModule, IgxInputGroupModule,
        IgxIconModule, IgxRippleModule, IgxTextHighlightModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxInputGroupModule,
                    IgxIconModule, IgxRippleModule, IgxTextHighlightModule],
    ...
})
export class AppModule {}
```

Then, lets create a search box which we can use to highlight different parts of the text. We will use Ignite UI for Angular's [InputGroup](input-group.md) component in which we will add a text input with buttons for clear matches, find next and find previous and a button for specifying whether the search will be case sensitive or not. Also it has a label for how many matches we have found.

```html
<div class="search-container">
    <igx-input-group type="search" class="input-group">
        <igx-prefix>
            <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
            <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
        </igx-prefix>

        <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
                (keydown)="searchKeyDown($event)" />
        <igx-suffix>
            <div class="caseSensitiveButton">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="updateSearch()"
                        [igxButtonBackground]="caseSensitive? 'rgb(73, 180, 254)' : 'transparent'">
                    <igx-icon class="caseSensitiveIcon" fontSet="material">text_fields</igx-icon>
                </button>
            </div>
        </igx-suffix>

        <igx-suffix *ngIf="searchText.length > 0">
            <div>
                <span *ngIf="matchCount > 0">
                    {{ index + 1 }} of {{ matchCount }} results
                </span>
                <span *ngIf="matchCount == 0">
                    No results
                </span>
            </div>
            <div class="searchButtons">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material">navigate_before</igx-icon>
                </button>
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findNext()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material">navigate_next</igx-icon>
                </button>
            </div>
        </igx-suffix>
    </igx-input-group>
</div>
```
Then, we will add a paragraph with text and the IgxTextHighlight directive. Note that, since we need to bind the value input to the text in the paragraph, we will also use interpolation for the paragraph's text. The column, row and page inputs are useful when you have multiple containers and can be left at 0 for our example. Another noteworthy thing is that the search container (in our case the paragraph element) needs to be the only child in its parent container and because of this we need the surrounding div element.

```html
    <div igxTextHighlight
         [value]="html"
         [groupName]="'group1'"
         [containerClass]="'search-text'"
         class="search-text">
        {{html}}
    </div>
```

In the .ts file of our component first we need to add the following fields, that are used for bindings in our component's template:

``` typescript
    public html = "...";

    @ViewChild(IgxTextHighlightDirective, {read: IgxTextHighlightDirective})
    public highlight: IgxTextHighlightDirective;

    public searchText: string = "";
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;


    public get canMoveHighlight() {
        return this.matchCount > 1;
    }
```

Then we need to add the following methods which will allow the user to apply the highlights for the text they have typed in the search box and to move the active highlight around.

``` typescript
    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = "";
        this.find(0);
    }

    private findNext() {
        this.find(1);
    }

    private findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                IgxTextHighlightDirective.setActiveHighlight("group1", {
                    columnIndex: 0,
                    index: this.index,
                    page: 0,
                    rowIndex: 0
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
```

If the sample is configured properly, the final result should look like that:


<code-view style="height: 260px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-1" >
</code-view>


<div class="divider"></div>

### Search across multiple containers
The [`igxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) allows you to search across multiple containers which all share one active highlight. This is done by having the same group value across multiple TextHighlight directives which have all separate containers. In order to setup the sample we will reuse the search box from the previous sample, but this time we will add two paragraphs. Again, note that they both are in their own containers, but this time the second one has a different row value.

```html
    <div igxTextHighlight
         [groupName]="'group1'"
         [row]="0"
         [containerClass]="'search-text'"
         [value]="firstParagraph"
         class="search-text">
        {{firstParagraph}}
    </div>
    <div igxTextHighlight
         [groupName]="'group1'"
         [row]="1"
         [containerClass]="'search-text'"
         [value]="secondParagraph"
         class="search-text">
        {{secondParagraph}}
    </div>
```
Then in the .ts file we have the firstParagraph and secondParagraph fields, which are bound to the respective value inputs of the text highlight directives. Also we will now use ViewChildren instead of ViewChild to get all the highlights in our template.

```typescript
    public firstParagraph = "...";

    public secondParagraph = "...";

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;
```
All the rest of the code in the .ts file is identical to the single container example with the exception of the find method. Changes to this method are necessary since we now have multiple containers, but the code there can be used regardless of the number of TextHighlight directives you have on your page.

```typescript
    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];

            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                IgxTextHighlightDirective.setActiveHighlight("group1", {
                    index: actualIndex,
                    rowIndex: row
                });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
```


<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-2" >
</code-view>


<div class="divider"></div>

### API and Style References

For more detailed information regarding the TextHighlight directive's API, refer to the following link:
* [`IgxTextHighlight API`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html)

Additional components that were used:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxInputGroupComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
<div class="divider"></div>

### Additional Resources
* [Grid Search](grid/search.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
