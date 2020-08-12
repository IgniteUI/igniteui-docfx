---
title: Button Group Component
_description: Provides button group functionality to developers and also allows horizontal/vertical alignment, single/multiple selection with toggling.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Button Group components, Angular Button Group controls, Angular Buttons components, Angular Buttons controls
---

## Button Group
<p class="highlight">The Ignite UI for Angular Button Group component is used to organize buttons into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.</p>

### Demo
<div class="sample-container loading" style="height: 85px">
    <iframe id="buttonGroup-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-entries/button-group-sample-1" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

### Usage

#### First Steps

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

#### Add Button Group

Use the [`igx-buttongroup`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html) selector to wrap your buttons and display them into a button group. If you want a button to be selected by default, use the `selected` property:

```html
<!-- sample.component.html -->
<igx-buttongroup>
    <button igxButton>
        <igx-icon>format_align_left</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_align_center</igx-icon>
    </button>
    <button igxButton>
        <igx-icon>format_align_right</igx-icon>
    </button>
    <button igxButton [selected]="true">
        <igx-icon>format_align_justify</igx-icon>
    </button>
</igx-buttongroup>
```

### Examples

#### Alignment
Use the [`alignment`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#alignment) input property to set the orientation of the buttons in the button group.

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

<div class="sample-container loading" style="height: 220px">
    <iframe id="buttonGroup-sample-2-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2" class="lazyload">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>
<div class="divider--half"></div>

#### Multiple selection
Use the the [`multiSelection`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#multiselection) input property to enable the multiple selection in the button group.

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

<div class="sample-container loading" style="height: 80px">
    <iframe id="buttonGroup-sample-4-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-4" class="lazyload">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

#### Display Density
The [`displayDensity`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#displaydensity) input property is used to control the display density of a button group. This will set the style for the buttons in the group to cosy, compact or comfortable (default value) accordingly.

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
<igx-buttongroup [values]="displayDensities" 
                 [displayDensity]="displayDensity"
                 (onSelect)="selectDensity($event)">
</igx-buttongroup>
```

<div class="sample-container loading" style="height: 80px">
    <iframe id="buttonGroup-sample-5-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-5" class="lazyload">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

#### Custom toggle buttons
Use the [`values`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#values) input property to set an array of customized buttons in the button group.

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
<igx-buttongroup [multiSelection]="true" [values]="bordersButtons"></igx-buttongroup>
```

<div class="sample-container loading" style="height: 90px">
    <iframe id="buttonGroup-sample-3-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3" class="lazyload">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

### Styling

To get started with styling the button group, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-button-group-theme`]({environment:sassApiUrl}/index.html#function-igx-button-group-theme) and accepts some of the parameters that style the button group's items in their different states.

```scss
$custom-button-group: igx-button-group-theme(
    $item-text-color: #fdfdfd,
    $item-background: #2f4d6a,
    $item-hover-text-color: #fdfdfd,
    $item-hover-background: #1f3347,
    $item-selected-text-color: #fdfdfd,
    $item-selected-background: #1f3347,
    $item-selected-hover-background: #1f3347,
    $disabled-text-color: gray,
    $disabled-background-color: lightgray
);
```

As seen, the `igx-button-group-theme` exposes some useful parameters for basic styling of its items. If you want to drill deeper and change some button specific parameters, you can create a new theme that extends the `igx-button-theme` and scope it under the respective button group class.

#### Using CSS variables 

The last step is to include the component's theme.

```scss
@include igx-css-vars($custom-button-group);
```

#### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-button-group($custom-button-group);
    }
}
```

#### Demo

<div class="sample-container loading" style="height: 200px">
    <iframe id="buttonGroup-style-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/data-entries/button-group-style" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="buttonGroup-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="buttonGroup-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup Styles]({environment:sassApiUrl}/index.html#function-igx-button-group-theme)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

