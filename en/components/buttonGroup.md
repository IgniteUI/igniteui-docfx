---
title: Button Group Component
_description: Provides button group functionality to developers and also allows horizontal/vertical alignment, single/multiple selection with toggling.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Button Group components, Angular Button Group controls, Angular Buttons components, Angular Buttons controls
---

## Button Group
The [**igx-buttongroup**]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) component in Ignite UI for Angular provides a button group functionality with horizontal/vertical alignment and single/multiple selection along with toggling. The igx-buttongroup component makes use of the [igxButton directive.](button.md)

### Button Group Demo
<div class="sample-container loading" style="height: 450px">
    <iframe id="buttonGroup-sample-1-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/button-group-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Dependencies
Before using the component you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The Button Group is exported as an `NgModule`, thus you will need to import the `IgxButtonGroupModule` inside your `AppModule`:

```typescript
// app.module.ts

import { IgxButtonGroupModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxButtonGroupModule,
        ...
    ]
})
export class AppModule {}
```
### Usage
Use [`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) to organize buttons into an Angular styled button group.

#### Alignment
Use the [`alignment`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#alignment) input to set the orientation of the buttons in the button group.

```typescript
//sample.component.ts

import { ButtonGroupAlignment } from "igniteui-angular";
...
public alignment = ButtonGroupAlignment.vertical;
...
```

```html
<!-- sample.component.html -->

<igx-buttongroup [alignment]="alignment">
    <button igxButton>Sofia</button>
    <button igxButton>London</button>
    <button igxButton [selected]="true">New York</button>
    <button igxButton>Tokyo</button>
</igx-buttongroup>
```

```scss
// sample.component.scss

igx-buttongroup{
    display: inline-block;
    width: 200px;
}
```
<div class="sample-container loading" style="height: 164px">
    <iframe id="buttonGroup-sample-2-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Multiple selection
Use the the [`multiSelection`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#multiselection) input to enable the multiple selection in the button group.

```html
<!-- sample.component.html -->

<igx-buttongroup [multiSelection]="true">
    <button igxButton>
        <igx-icon>format_bold</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_italic</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_underlined</igx-icon>
    </button>
</igx-buttongroup>
```

<div class="sample-container loading" style="height: 60px">
    <iframe id="buttonGroup-sample-4-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-4" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Display Density
Use the [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#displaydensity) input to set the display density for the button group. This will set the style for the buttons in the group to cosy, compact or comfortable (default value) accordingly.

> [!NOTE] 
> The display density of a button within a button group is not changed if it is explicitly specified.

```typescript
// sample.component.ts

...
public displayDensity = "comfortable";
public displayDensities;

public ngOnInit() {
    this.displayDensities = [
        { label: "compact", selected: this.displayDensity === "compact", togglable: true },
        { label: "cosy", selected: this.displayDensity === "cosy", togglable: true },
        { label: "comfortable", selected: this.displayDensity === "comfortable", togglable: true }
    ];
}

public selectDensity(event) {
    this.displayDensity = this.displayDensities[event.index].label;
}
...
```

```html
<!-- sample.component.html -->

<article class="sample-column">
    <igx-buttongroup [multiSelection]="false" [values]="displayDensities" (onSelect)="selectDensity($event)"
        [displayDensity]="displayDensity">
    </igx-buttongroup>
</article>
```
<div class="sample-container loading" style="height: 60px">
    <iframe id="buttonGroup-sample-5-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-5" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Custom toggle buttons
Use the [`values`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#values) input to set an array of customized buttons in the button group.

```typescript
// sample.component.ts

interface IButton {
    ripple?: string;
    label?: string;
    disabled?: boolean;
    togglable?: boolean;
    selected?: boolean;
    color?: string;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || "gray";
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable || true;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}
...
public bordersButtons: ToggleButton[];

public ngOnInit() {
    this.bordersButtons = [
        new ToggleButton({
            icon: "border_top",
            selected: true
        }),
        new ToggleButton({
            icon: "border_right",
            selected: false
        }),
        new ToggleButton({
            icon: "border_bottom",
            selected: false
        }),
        new ToggleButton({
            icon: "border_left",
            selected: false
        })
    ];
}
...
```

```html
<!-- sample.component.html -->

<igx-buttongroup [multiSelection]="true" [values]="borders"></igx-buttongroup>
```
<div class="sample-container loading" style="height: 60px">
    <iframe id="buttonGroup-sample-3-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3" class="lazyload">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling

To get started with styling the button group, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-button-group-theme`]({environment:sassApiUrl}/index.html#function-igx-button-group-theme) and accepts some parameters that style the button group's items in their different states.

```scss
$dark-button-group: igx-button-group-theme(
    $item-text-color: #FFCD0F,
    $item-background: #292826,
    $item-hover-text-color: #292826,
    $item-hover-background: #FFCD0F,
    $item-selected-text-color: #292826,
    $item-selected-background: #FFCD0F,
    $disabled-text-color: gray,
    $disabled-background-color: lightgray
);
```

As seen, the `igx-button-group-theme` exposes some useful parameters for basic styling of its items. Additionally, if we want to drill deeper and change some button specific parameters, we will have to create a new theme that extends the `igx-button-theme` and scope it under the respective button group's class.

The last step is to **include** the component's theme.

```scss
@include igx-button-group($dark-button-group);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-button-group($dark-button-group);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;

$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$dark-button-group: igx-button-group-theme(
    $palette: $dark-palette,
    $item-text-color: igx-color($dark-palette, "secondary", 500),
    $item-background: igx-color($dark-palette, "primary", 500),
    $item-hover-text-color: igx-color($dark-palette, "primary", 500),
    $item-hover-background: igx-color($dark-palette, "secondary", 500),
    $item-selected-text-color: igx-color($dark-palette, "primary", 500),
    $item-selected-background: igx-color($dark-palette, "secondary", 500),
    $disabled-text-color: gray,
    $disabled-background-color: lightgray
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](../themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](../themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - the [`dark-button-group`]({environment:sassApiUrl}/index.html#variable-_dark-button-group) schema:

```scss
// Extending the dark button group schema
$dark-button-group-schema: extend($_dark-button-group,
    (
        item-text-color:(
            igx-color:("secondary", 500)
        ),
        item-background:(
            igx-color:("primary", 500)
        ),
        item-hover-text-color:(
            igx-color:("primary", 500)
        ),
        item-hover-background:(
            igx-color:("secondary", 500)
        ),
        item-selected-text-color:(
            igx-color:("primary", 500)
        ),
        item-selected-background:(
            igx-color:("secondary", 500)
        ),
        disabled-text-color: gray,
        disabled-background-color: lightgray
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-button-group: $dark-button-group-schema
));

// Defining dark-button-group-theme with the global dark schema
$dark-button-group: igx-button-group-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 300px">
    <iframe id="buttonGroup-style-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup Styles]({environment:sassApiUrl}/index.html#function-igx-button-group-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

