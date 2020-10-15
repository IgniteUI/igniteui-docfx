---
title: Label and Input Directives
_description: With Ignite UI for Angular Label and Input directives, developers can create a single-line or multi-line text elements, add additional CSS styles and integrate with other controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Label components, Angular Label controls, Angular Input components, Angular Input controls, Input component, Input control, Label component, Label control, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

# Label & Input
<p class="highlight">
The Ignite UI for Angular Input and Label directives are used to create single-line or multi-line text elements. They help to cover common scenarios when dealing with form inputs.
</p>
<div class="divider--half"></div>

## Demo
<div class="sample-container loading" style="height:100px">
<iframe id="input-group-sample-1-frame" src='{environment:demosBaseUrl}/data-entries/input-group-sample-1' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="input-group-sample-1-frame" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-1-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage
To get started with the Input and Label directives, first you need to import the `IgxInputGroupModule` in your **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxInputGroupModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule],
    ...
})
export class AppModule {}
```

## Label & Input
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

<div class="sample-container loading" style="height:100px">
    <iframe id="input-group-sample-2-frame" data-src='{environment:demosBaseUrl}/data-entries/input-group-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="input-group-sample-2-frame" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-group-sample-2-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
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

##### Demo
<div class="sample-container loading" style="height: 100px">
<iframe id="input-text-selection-frame" data-src='{environment:demosBaseUrl}/data-entries/input-text-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="input-text-selection-frame" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="input-text-selection-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Input Group
The Ignite UI for Angular Input Group component helps developers to create easy-to-use and aesthetic forms. For further information, you can read the separate topic [here](input_group.md).

## API References
<div class="divider--half"></div>

* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxInputGroupComponent]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)

## Additional Resources
<div class="divider--half"></div>

Related topics:
* [Input Group](input_group.md)

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
