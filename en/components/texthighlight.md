---
title: TextHighlight Directive - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular TextHighlight directive can be used to highlight parts of text and have an active highlight on one of them.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Components, Native Angular Controls, Native Angular Components Library, Angular TextHighlight Directive, IgxTextHighlight Directive
---

# TextHighlight Directive

The [`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) directive in Ignite UI for Angular is used to highlight parts of a text, providing options for case sensitive searches and to highlight only exact matches. It also allows the developer to keep an active highlight, which can be any of the already highlighted parts.

## Demo   

<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/text-highlight-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

To get started with the Ignite UI for Angular TextHighlight directive you need to import the `IgxTextHighlightModule` in the **app.module.ts** file along with the other Ignite UI for Angular modules we need for our application.

```typescript
// app.module.ts
...
import { IgxButtonModule, IgxInputGroupModule,
        IgxIconModule, IgxRippleModule, IgxTextHighlightModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [IgxTextHighlightModule],
    ...
})
export class AppModule {}
```

Let's create a search box that we can use to highlight different parts of the text. We will use Ignite UI for Angular's [InputGroup](input-group.md) component in which we will add a text input with buttons for clear matches, find next, find previous, and a button for specifying whether the search will be case-sensitive or not. Also it has a label for how many matches we have found.

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
            <ng-container *ngIf="searchText.length > 0">
                <span>
                    <ng-container *ngIf="matchCount > 0">
                        {{ index + 1 }} of {{ matchCount }} results
                    </ng-container>
                    <ng-container *ngIf="matchCount == 0">
                        No results
                    </ng-container>
                </span>
            </ng-container>
           
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
Then, we will add a div with text and the IgxTextHighlight directive. Note that, since we need to bind the value input to the text in the div, we will also use interpolation for the div's text.

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

<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" data-src='{environment:demosBaseUrl}/data-display/text-highlight-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

## Search across multiple elements
The [`igxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) allows you to search across multiple elements which all share one active highlight. This is done by having the same [`groupName`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#groupname) value across multiple TextHighlight directives. In order to setup the sample we will reuse the search box from the previous sample, but this time we will add two div elements. The [`column`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#column) and [`row`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#row) inputs are useful when you have multiple elements and in our case the second div has a different row value.

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
In the .ts file we have the `firstParagraph` and `secondParagraph` fields, which are bound to the respective value inputs of the text highlight directives. Also, we will now use ViewChildren instead of ViewChild to get all the highlights in our template.

```typescript
public firstParagraph = "...";

public secondParagraph = "...";

@ViewChildren(IgxTextHighlightDirective)
public highlights;
```
All the rest of the code in the .ts file is identical to the single element example with the exception of the find method. Changes to this method are necessary since we now have multiple elements, but the code there can be used regardless of the number of TextHighlight directives you have on your page.

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

<div class="sample-container loading" style="height: 400px;">
    <iframe id="text-highlight-2-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/text-highlight-2" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="text-highlight-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

## Styles

The [`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) directive can be styled in terms of changing the color and the background of all occurrences of the given string. To get started, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-highlight-theme`]({environment:sassApiUrl}/index.html#function-igx-highlight-theme) and accepts the `$resting-background`, `$resting-color`, `$active-background` and the `$active-color` parameters.

```scss
$dark-highlight: igx-highlight-theme(
    $resting-background: #FFCD0F,
    $resting-color: #292826,
    $active-background: #292826,
    $active-color: #FFCD0F
);
```

The `$resting-background` and the `$resting-color` parameters will be applied to all highlighted occurrences, except for the active highlighted string, which will be styled based on the `$active-background` and the `$active-color` parameters.

The last step is to **include** the newly created theme.

If `$legacy-support` is set to `true`, include the component theme like that:
```scss
@include igx-highlight($dark-highlight);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-highlight($dark-highlight);
    }
}
```

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($dark-highlight);
```

>[!NOTE]
>Keep in mind that by default the `$legacy-support` is set to `false`

### Custom styles

Let's say we want to provide an even richer styling to our highlighted text parts. In order to do this, we can take advantage of the [`cssClass`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#cssclass) and the [`activeCssClass`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#activecssclass) inputs of the [`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) directive. We can combine these classes with the styles from the [`igx-highlight-theme`]({environment:sassApiUrl}/index.html#function-igx-highlight-theme) and provide an awesome experience to our users!

All we have to do is create a couple of css classes with some properties and attach them by using the inputs from above:

```html
<div igxTextHighlight
     [cssClass]="'custom-highlight'"
     [activeCssClass]="'custom-active-highlight'">
    {{html}}
</div>
```

```scss
// cssClass
.custom-highlight {
    border: 1px solid #FFCD0F;
}
// activeCssClass
.custom-active-highlight {
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.75);
}
```

As mentioned earlier, we can even combine them with a theme:

```scss
:host {
    ::ng-deep {
       @include igx-highlight($dark-highlight);
        
       // cssClass
       .custom-highlight {
            border: 1px solid #FFCD0F;
       }
        
        // activeCssClass
       .custom-active-highlight {
            box-shadow: 0 0 3px 0 rgba(0,0,0,0.75);
        }
   }
}
```

### Demo

<div class="sample-container loading" style="height: 300px;">
    <iframe id="text-highlight-style-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/text-highlight-style" class="lazyload no-theming"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="text-highlight-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>

## API References

For more detailed information regarding the TextHighlight directive's API, refer to the following link:
* [`IgxTextHighlight API`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html)

Additional components that were used:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxInputGroupComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)
<div class="divider"></div>

## Additional Resources
* [Grid Search](grid/search.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
