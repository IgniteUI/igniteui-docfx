---
title: Angular Label and Input Directives
_description: With Ignite UI for Angular Label and Input directives, developers can decorate and style single-line or multi-line input elements, add additional CSS styles and integrate with other controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular Label component, Angular Label control, Angular Input component, Angular Input control, Input component, Input control, Label component, Label control, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

# Angular Label & Input Directives Overview
The Ignite UI for Angular Input and Label directives are used to decorate and style single-line or multi-line input elements in an `igx-input-group` component.

<div class="divider--half"></div>

## Angular Label & Input Example

<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-1" alt="Angular Label & Input Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Label & Input

To get started with the Ignite UI for Angular Label and Input directives, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxInputGroupModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { FormsModule } from '@angular/forms';
import { IgxInputGroupModule } from 'igniteui-angular';
// import { IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package


@NgModule({
    ...
    imports: [..., IgxInputGroupModule, FormsModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxLabelDirective`, `IgxInputDirective`, and `IgxInputGroupComponent` as standalone dependencies, or use the [`IGX_INPUT_GROUP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/input-group/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { FormsModule } from '@angular/forms';
import { IGX_INPUT_GROUP_DIRECTIVES } from 'igniteui-angular';
// import { IGX_INPUT_GROUP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-input-group>
        <input igxInput name="fullName" type="text" [(ngModel)]="fullName" />
        <label igxLabel for="fullName">Full Name</label>
    </igx-input-group>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_INPUT_GROUP_DIRECTIVES, FormsModule]
    /* or imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, FormsModule] */
})
export class HomeComponent {
    public fullName = 'John Doe';
}
```

Now that you have the Ignite UI for Angular Input Group module or directives imported, you can start using the `igxLabel` and `igxInput` directives and the `igx-input-group` component.

## Using the Angular Label & Input
The default styling of the Label and Input directives follows the text fields specification in the Material Design
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

To use the [`igxInput`]({environment:angularApiUrl}/classes/igxinputdirective.html) and [`igxLabel`]({environment:angularApiUrl}/classes/igxlabeldirective.html), you have to wrap them in an `<igx-input-group>` container:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

The `igxInput` directive could be applied to `<input>` and `<textarea>` HTML elements, in both single-line and multi-line text fields.

### Validation
We can validate an `input` using the [`required`]({environment:angularApiUrl}/classes/igxinputdirective.html#required) attribute. This will add an asterisk next to the label, indicating that this field must be completed. The input will turn green/red depending on whether the validation passes/fails.

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```


<code-view style="height:100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-group-sample-2" >
</code-view>

<div class="divider--half"></div>

### Data Binding
The Ignite UI for Angular Input directive supports both one-way and two-way data-binding. The following code illustrates how to add a two-way data-binding using the `NgModel`:

```typescript
public user = {
    fullName: ""
};

```

in our markup:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```
### Focus & Text Selection

You can add logic to force `focus` on input elements using the [`igxFocus`]({environment:angularApiUrl}/classes/igxfocusdirective.html) directive. 

```html
<igx-input-group>
    <input igxInput [igxFocus]="isFocused" name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```
>[!NOTE]
>To use the [`igxFocus`]({environment:angularApiUrl}/classes/igxfocusdirective.html) directive, you have to import the [`IgxFocusModule`]({environment:angularApiUrl}/classes/igxfocusmodule.html).

If you want the text in an input element, marked with `igxInput`, to be selected on focus, you have to enable the [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) directive.

```html
<igx-input-group>
    <input igxInput [igxTextSelection]="true" [igxFocus]="isFocused" name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>

<igx-input-group>
    <input igxInput [igxTextSelection]="true" name="email" type="text" />
    <label igxLabel for="email">Email</label>
</igx-input-group>
```
>[!NOTE]
>To use the [`igxTextSelection`]({environment:angularApiUrl}/classes/igxtextselectiondirective.html) directive, you have to import the [`IgxTextSelectionModule`]({environment:angularApiUrl}/classes/igxtextselectionmodule.html).


<code-view style="height: 130px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/input-text-selection" >
</code-view>

<div class="divider--half"></div>

## Input Group
The Ignite UI for Angular Input Group component helps developers to create easy-to-use and aesthetic forms. For further information, you can read the separate topic [here](input-group.md).

## API References
<div class="divider--half"></div>

* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## Additional Resources
<div class="divider--half"></div>

Related topics:
* [Input Group](input-group.md)

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
