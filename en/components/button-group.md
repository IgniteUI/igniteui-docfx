---
title: Angular Button Group Component – Ignite UI for Angular | Infragistics
_description: Provides button group functionality to developers and also allows horizontal/vertical alignment, single/multiple selection with toggling.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Button Group components, Angular Button Group controls, Angular Buttons components, Angular Buttons controls
---

# Angular Button Group Component Overview
<p class="highlight">Angular Button Group component is used to organize buttons into styled button groups with horizontal/vertical alignment, single/multiple selection and toggling.</p>

## Angular Button Group Example

<code-view style="height: 85px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-1" alt="Angular Button Group Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Button Group

To get started with the Ignite UI for Angular Button Group component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxButtonGroupModule` in your **app.module.ts** file. 

```typescript
// app.module.ts

...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxButtonGroupModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxButtonGroupComponent` as a standalone dependency, or use the [`IGX_BUTTON_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/buttonGroup/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

...
import { IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';
// import { IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
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
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_BUTTON_GROUP_DIRECTIVES, IgxIconComponent]
    /* or imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxIconComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Button Group module or directives imported, you can start with a basic configuration of the `igx-buttongroup` and its buttons.

## Using for Angular Button Group Component

### Add Button Group

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

## Examples

### Alignment
Use the [`alignment`]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#alignment) input property to set the orientation of the buttons in the button group.

```typescript
//sample.component.ts
import { ButtonGroupAlignment } from 'igniteui-angular';
// import { ButtonGroupAlignment } from '@infragistics/igniteui-angular'; for licensed package

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


<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-2" >
</code-view>

<div class="divider--half"></div>

### Selection

In order to configure the `igx-buttongroup` selection, you could use its [selectionMode]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html#selectionMode) property. This property accepts the following three modes: 
- **single** - default selection mode of the button group. A single button can be selected/deselected by the user.
- **singleRequired** - mimics a radio group behavior. Only one button can be selected and once initial selection is made, deselection is not possible through user interaction.
- **multi** - multiple buttons in the group can be selected and deselected.

The sample below demonstrates the exposed `igx-buttongroup` selection modes:

<code-view style="height: 170px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-4" >
</code-view>


### Size (Display Density)
The `--ig-size` CSS custom property can be used to control the size of the button group.

```scss
/* sample.component.scss */
igx-buttongroup {
    --ig-size: var(--ig-size-small);
}
```

```html
<!-- sample.component.html -->
<igx-buttongroup></igx-buttongroup>
```


<code-view style="height: 80px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-5" >
</code-view>


### Custom toggle buttons
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
        this.ripple = obj.ripple || 'gray';
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
            icon: 'border_top',
            selected: true
        }),
        new ToggleButton({
            icon: 'border_right',
            selected: false
        }),
        new ToggleButton({
            icon: 'border_bottom',
            selected: false
        }),
        new ToggleButton({
            icon: 'border_left',
            selected: false
        })
    ];
}
...
```

```html
<!-- sample.component.html -->
<igx-buttongroup [selectionMode]="'multi'" [values]="bordersButtons"></igx-buttongroup>
```


<code-view style="height: 90px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-sample-3" >
</code-view>


## Styling

To get started with styling the button group, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`button-group-theme`]({environment:sassApiUrl}/index.html#function-button-group-theme) and accepts some of the parameters that style the button group's items in their different states.

```scss
$custom-button-group: button-group-theme(
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

As seen, the `button-group-theme` exposes some useful parameters for basic styling of its items. If you want to drill deeper and change some button specific parameters, you can create a new theme that extends the `button-theme` and scope it under the respective button group class.

### Using CSS variables 

The last step is to include the component's theme.

```scss
@include css-vars($custom-button-group);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables. 

If the component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include button-group($custom-button-group);
    }
}
```

### Demo


<code-view style="height: 200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/button-group-style" >
</code-view>


## API References
<div class="divider--half"></div>

* [IgxButtonGroupComponent]({environment:angularApiUrl}/classes/igxbuttongroupcomponent.html)
* [IgxButtonGroup Styles]({environment:sassApiUrl}/index.html#function-button-group-theme)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-button-theme)

## Theming Dependencies
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-ripple-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

