---
title: Input Groups Component - Native Angular | Ignite UI for Angular
_description: The Input Groups component in Ignite UI for Angular allows for easy-to-use and aesthetic forms, simplicity with inputting data, and provides mitigation for handling validation and errors.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Label components, Angular Label controls, Angular Input components, Angular Input controls, Input component, Input control, Label component, Label control, Angular Input Group components, Angular Input Group controls, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

# Input Group
<p class="highlight">The Ignite UI for Angular controls can easily be used in Reactive Forms that provide a model-driven approach for handling form inputs.</p>
<div class="divider--half"></div>

## Angular Input Group Example

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1" alt="Angular Input Group Example">
</code-view>

<div class="divider--half"></div>

## Usage
To get started with the Input Group component, first you need to import the `IgxInputGroupModule` from the `igniteui-angular` toolkit.

Note that the `IgxInputGroup` also depends on the **FormsModule** in order to have a working Template Driven Form:

```typescript
// app.module.ts

...
import { IgxInputGroupModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

> [!NOTE]
> To use any of the directives `igxInput`, `igxLabel`, `igx-prefix`, `igx-suffix` or `igx-hint`, you have to wrap them in an `<igx-input-group>` container.

## Examples

### Label & Input
You can read about the [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html) and [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) directives as well as their validation, data binding and API in a separate topic [here](label-input.md).

### Prefix & Suffix
The `igx-prefix` or `igxPrefix` and `igx-suffix` or `igxSuffix` directives can contain or be attached to HTML elements, strings, icons or even other components. In the following sample we will create a new input field with a string **prefix** and an icon **suffix**:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
    <igx-icon igxSuffix>phone</igx-icon>
</igx-input-group>
```

<div class="sample-container loading" style="height:100px">
<iframe class="lazyload" id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Hints
The [`igx-hint`]({environment:angularApiUrl}/classes/igxhintdirective.html) directive provides a helper text placed below the input. It can be at the beginning or at the end of the input depending on the value of the [`position`]({environment:angularApiUrl}/classes/igxhintdirective.html#position) property. Let's add a hint to our phone input:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="tel" />
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

### Input Types & Input Group Type Token
The input group styles can be altered by using the [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) property of the [`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) component. The input group component supports the following types: `line` (default if type is not specified), `border`, `box`, and `search`. The `line`, `border`, and `box` types are made specifically for the `Material Design` themes. Setting those types with other themes will not have any effect on how the input group looks.
An example of setting a specific type declaratively:
```html
<igx-input-group type="border">
```

Using the [IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) injection token allows to specify a type on an application level for all input-group instances. It provides an easy way to style all related components at once.
To set the type, use the [IGX_input-group_TYPE]({environment:angularApiUrl}/index.html#igx_input-group_type) injection token to create a DI provider.

```typescript
providers: [{provide: IGX_input-group_TYPE, useValue: 'box' }]
```

>[!NOTE]
>The [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) property has precedence over a [IGX_INPUT_GROUP_TYPE]({environment:angularApiUrl}/index.html#igx_input_group_type), thus a token value can be overridden on a component level if the type property is set explicitly.  
>Most of the `igniteui-angular` form controls use input-group component internally, or allow for a custom template. Setting a global token will affect these components as well.

Ignite UI for Angular also provides styling for the input of `type="file"` and it supports all the input group types and themes, just add this to your template:

```html
<igx-input-group>
    <input igxInput type="file" multiple />
</igx-input-group>
```



<code-view style="height:695px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-5" >
</code-view>



### Input Group Theme

The input group component supports several themes - `material`, `fluent`, `bootstrap`, and `indigo-design`; The [`theme`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#theme) is automatically set during component initialization and is inferred from the currently used stylesheet. If you plan to support several themes in your application with runtime switching, you can explicitly set the theme using the `theme` Input property.

```html
<igx-input-group theme="fluent">...</igx-input-group>
```

## Styling

The first thing we need to do, in order to get started with the input group styling, is to include the `index` file in our style file:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Next, we have to create a new theme that extends the [`igx-input-group-theme`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) and pass the parameters which we'd like to change:

```scss
$custom-input-group: igx-input-group-theme(
  $filled-text-color: #288a54,
  $focused-text-color: #174f30,
  $idle-text-color: #288a54,
  $idle-bottom-line-color: #288a54,
  $interim-bottom-line-color: #288a54,
  $hover-bottom-line-color: #288a54,
  $focused-secondary-color: #174f30,
  $box-background: #eeeeee
);
```

### Using CSS variables

The last step is to include the newly created theme:

```scss
@include igx-css-vars($custom-input-group);
```

### Using Theme Overrides

In order to style components for older browsers, like Internet Explorer 11, we have to use the [input group mixin]({environment:sassApiUrl}/index.html#mixin-igx-input-group), since it doesn't support CSS variables.

However, if we just leave the include statement, as shown in the previous step, our styles will not properly apply - while our text color has properly changed, the bottom border and the background remain the same. This is because our component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation. The `input` and `label` elements are part of that view, so their styles are applied correctly. The bottom border, on the other hand, is generated by the `igx-input-group` component and is **not** affected by the styles of our component.

In order to style the border, we have to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, we also need to make sure that we scope the styles with a `:host` selector before the `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-input-group($custom-input-group);
    }
}
```

### Demo


<code-view style="height:120px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-style" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputGroup Types]({environment:angularApiUrl}/enums/igxinputgrouptype.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

## Theming Dependencies
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Related topics:

* [Label & Input](label-input.md)
* [Reactive Forms Integration](input-group-reactive-forms.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
