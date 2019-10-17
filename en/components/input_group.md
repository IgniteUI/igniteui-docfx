---
title: Input Groups Component - Native Angular | Ignite UI for Angular
_description: The Input Groups component in Ignite UI for Angular allows for easy-to-use and aesthetic forms, simplicity with inputting data, and provides mitigation for handling validation and errors.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Label components, Angular Label controls, Angular Input components, Angular Input controls, Input component, Input control, Label component, Label control, Angular Input Group components, Angular Input Group controls, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

## Input Group

Input groups in the Ignite UI for Angular controls allow developers to create easy-to-use and aesthetic forms. The user experiences simplicity with inputting data, and the inputs also provide mitigation for handling validation and errors.

### Input Group Demo
<div class="sample-container loading" style="height:800px">
<iframe id="input-group-sample-6-frame" src='{environment:demosBaseUrl}/data-entries/input-group-sample-6' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-6-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
The default styling of the Input Group component as well as its complimentary directives follow the text fields specification in the Material Design
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

To get started install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

Then import all needed modules from the `igniteui-angular` toolkit as well as the **FormsModule** in order to have a working Template Driven Form:

```typescript
// app.module.ts

...
import { IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxIconModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule, igxSelectModule, FormsModule],
    ...
})
export class AppModule {}
```


> [!NOTE]
> To use any of the directives [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html), `igxLabel`, `igx-prefix`, `igx-suffix` or [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html), you have to wrap them in an `<igx-input-group>` container.

#### Label & Input
You can read about the `igxLabel` and [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) directives as well as their validation, data binding and API in a separate topic [here](label_input.md).

#### Prefix & Suffix
If you want to have an input prefix or suffix, you can use Ignite UI for Angular Prefix or Suffix. Both directives can contain html elements, strings, icons or even other components. Let's add a new input field with string **prefix** (`+359`) and [`igx-icon`]({environment:angularApiUrl}/classes/igxiconcomponent.html) **suffix** (`<igx-icon>phone</igx-icon>`):

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
</igx-input-group>
```

Here is how the sample looks:
<div class="sample-container loading" style="height:100px">
<iframe class="lazyload" id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

#### Hints
Ignite UI for Angular Hint provides a helper text placed below the input. The hint can be placed at the start or at the end of the input. The position of the [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) can be set using the [`position`]({environment:angularApiUrl}/classes/igxhintdirective.html#position) property. Let's add a hint to our phone input:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon>phone</igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

This is how the phone field with hint looks:
<div class="sample-container loading" style="height:110px">
<iframe class="lazyload" id="input-group-sample-4-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-4' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

#### Styling
Our inputs could be styled differently by using the [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) property of the [`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) component. Currently we support four different ways of styling: line (the default one), box, border and search. This is how they look:

<div class="sample-container loading" style="height:520px">
<iframe class="lazyload" id="input-group-sample-5-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-5' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-5-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling

The Input Group component makes use of the [Ignite UI Theming Library](themes/index.md) and has a large array of properties that are exposes by its [igx-input-theme]({environment:sassApiUrl}/index.html#function-igx-input-group-theme).
In the steps below, we'll take a look at styling the input's label, borders, text and background. 

#### Include styles

The first thing we need to do is include the `index` file in our style file:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

We can now begin constructing our custom [palette](themes/palette.md) and use it to generate a [theme](themes/component-themes.md) for our input.

#### Defining a color palette

Instead of hardcoded colors, we'll create an [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and then use the color ranges it provides to generate our custom [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color)

```scss
$purple: #9E379F;
$blue: #61AEDB;

$custom-palette: igx-palette($primary: $blue, $secondary: $purple);

$text-color: igx-color($custom-palette, "secondary", 400);
$border-color:  igx-color($custom-palette, "secondary", 900);
$background-color: #91CEFB27;

```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Defining a theme

Now that we've chosen the appropriate colors, we need to generate a theme for our input. We do this by calling [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) and passing the parameters which we'd like to change:

```scss
$input-group-theme: igx-input-group-theme(
  $palette: $custom-palette,
  $filled-text-color: $text-color,
  $focused-text-color: $text-color,
  $idle-text-color: $text-color,
  $idle-bottom-line-color: $border-color,
  $focused-bottom-line-color: $border-color,
  $interim-bottom-line-color: $border-color,
  $hover-bottom-line-color: $border-color,
  $box-background: $background-color
);
```

We've specified that we'd like the text color of our Input Group to change, as well as the bottom border that's displayed. All we have to do now is include the theme.

#### Including the theme

The easiest way to include our theme is to just use the [`igx-input-group` mixin]({environment:sassApiUrl}/index.html#mixin-igx-input-group) with the SASS `@include` statement in our global styles file:

```scss
@include igx-input-group($input-group-theme);

```

#### Scoping styles

If we include the `igx-input-group` mixin in our global styles files (`styles.scss` by default), the custom theme will affect **all** Input Groups in our application. In case we want to apply our custom styling only to a *specific subset* of Input Group elements, we have to scope our theme accordingly.

Continuing in the context of the example, we can scope our theme to only apply on the `igx-input-group` elements under our example component. We can do this by moving our custom styles to our component's style file (`input-group-style.component.scss`). However, if we just leave the include statement, as shown in the [include step](#including-the-theme), our styles will not properly apply - while our text color has properly changed, the bottom border and the background remain the same. This is because of Angular's `View Encapsulation`. Since our component is using `Emulated` view encapsulation (the default one), our styles from the `@include` statement are scoped only for our component's template. The `input` and `label` elements are part of that view, so their styles are applied correctly. However, the bottom border of the `input` is generated by the `igx-input-group` component and is **not** affected by the styles of our component.

In order to style the border, we need to penetrate Angular's `Emulated` view encapsulation, using `::ng-deep` selector in our component's scss file. When using `::ng-deep`, we need to make sure that we scope the styles with a `:host` selector to make sure that these styles will apply only to elements under our component:

```scss
// input-group-style.component.scss
:host {
    ::ng-deep {
 @include igx-input-group($input-group-theme);
    }
}
```

 >[!NOTE]
 > If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep`. To make sure the theme **does not** affect Input Groups in *other components* in our app, we scope the `::ng-deep` statement under `:host`

#### Demo

The result of the applied styles can be seen in the below demo:

<div class="sample-container loading" style="height:240px">
    <iframe id="input-group-style-iframe" src='{environment:demosBaseUrl}/data-entries/input-group-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

### Additional Resources
Related topics:

* [Reactive Forms Integration](input_group_reactive_forms.md)
* [Label & Input](label_input.md)
* [Combo](combo.md)
* [Select](select.md)
* [Display Density](display_density.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
