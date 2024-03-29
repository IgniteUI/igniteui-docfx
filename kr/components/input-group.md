---
title: Input Groups Component - Native Angular | Ignite UI for Angular
_description: The Input Groups component in Ignite UI for Angular allows for easy-to-use and aesthetic forms, simplicity with inputting data, and provides mitigation for handling validation and errors.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Label components, Angular Label controls, Angular Input components, Angular Input controls, Input component, Input control, Label component, Label control, Angular Input Group components, Angular Input Group controls, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
_language: kr
---

## Input Group

Input groups in the Ignite UI for Angular controls allow developers to create easy-to-use and aesthetic forms. The user experiences simplicity with inputting data, and the inputs also provide mitigation for handling validation and errors.

### Input Group Demo

<code-view style="height:800px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-6" >
</code-view>

<div class="divider--half"></div>

### Usage
The default styling of the Input Group component as well as its complimentary directives follow the text fields specification in the Material Design
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

To get started import all modules for Ignite UI components and the **FormsModule** in order to have working Template Driven Form:

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
You can read about the `igxLabel` and [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) directives as well as their validation, data binding and API in a separate topic [here](label-input.md).

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
<iframe id="input-group-sample-3-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
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
<iframe id="input-group-sample-4-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div class="divider--half"></div>

#### Styling
Our inputs could be styled differently by using the [`type`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html#type) property of the [`igxInputGroup`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html) component. Currently we support four different ways of styling: line (the default one), box, border and search. This is how they look:


<code-view style="height:695px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-5" >
</code-view>


### API References
* [IgxHintDirective]({environment:angularApiUrl}/classes/igxhintdirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-input-group-theme)

### Additional Resources
Related topics:

* [Reactive Forms Integration](angular-reactive-form-validation.md)
* [Label & Input](label-input.md)
* [Combo](combo.md)
* [Select](select.md)
* [Display Density](display-density.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
