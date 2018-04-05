---
title: Input Group Component
_description: With Ignite UI for Angular Input Group component, developers can create a single-line or multi-line text elements, to add additional CSS styles and integrate with other controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Label components, Angular Label controls
---

## Input Group
<p class="highlight">
The Ignite UI for Angular Input Group component is used to create a single-line or multi-line text elements. Combined with the Label, Input, Suffix, Prefix and Hint directives, it helps you to cover common scenarios when dealing with form inputs.
</p>
<div class="divider--half"></div>

### Input Group Demo
<div class="sample-container" style="height:500px">
<iframe id="input-group-sample-6-frame" src='{environment:demosBaseUrl}/input-group-sample-6' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="input-group-sample-6-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
The default styling of the Input Group component as well as its complimentary directives follow the text fields specification in the Material Design 
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

To get started with the Ignite UI for Angular Input Group, Input, Label, Prefix, Suffix and Hint let's first import the **IgxInputGroup** in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxInputGroup } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxInputGroup],
    ...
})
export class AppModule {}
```

> [!NOTE]
> To use any of the directives `igxInput`, `igxLabel`, `igxPrefix`, `igxSuffix` or `igxHint`, you have to wrap them in an `<igx-input-group>` container.

### Label & Input
HTML labels and inputs are the core building blocks of the HTML forms. Here is how you can use the `igxLabel` and `igxInput` directives:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

And the result is:
<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-1-frame" src='{environment:demosBaseUrl}/input-group-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

The `igxInput` directive could be applied to `<input>` and `<textarea>` HTML element. We support both single-line and multi-line text fields.

#### Validation
Ignite UI for Angular Input directive provides a Material-based styling when you have validation. Let's add `required` attribute to our input:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

In the demonstration of the code below you can see we receive an asterisk next to the label as well as the input turns green/red when we write in it depending on whether the validation passes/fails.

<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-2-frame" src='{environment:demosBaseUrl}/input-group-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

#### Data Binding
Ignite UI for Angular Input supports one-way and two-way data-binding. Let's add a two-way data-binding to our input. Here is the code in our component:

```typescript
public user = {
    fullName: ""
};

```

and in our markup:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" [(ngModel)]="user.fullName" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

### Prefix & Suffix
If you want to have an input prefix or suffix, you can use Ignite UI for Angular Prefix or Suffix. Let's add a new input field with prefix and suffix:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon name="phone"></igx-icon>
    </igx-suffix>
</igx-input-group>
```

Here is how the sample looks:
<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-3-frame" src='{environment:demosBaseUrl}/input-group-sample-3' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Hints
Ignite UI for Angular Hint provides a helper text placed below the input. The hint can be placed at the start or at the end of the input. The position of the `igxHint` can be set using the `position` property. Let's add a hint to our phone input:

```html
<igx-input-group>
    <igx-prefix>+359</igx-prefix>
    <label igxLabel for="phone">Phone</label>
    <input igxInput name="phone" type="text" [(ngModel)]="user.phone" />
    <igx-suffix>
        <igx-icon name="phone"></igx-icon>
    </igx-suffix>
    <igx-hint position="start">Ex.: +359 888 123 456</igx-hint>
</igx-input-group>
```

This is how the phone field with hint looks like:
<div class="sample-container" style="height:110px">
<iframe id="input-group-sample-4-frame" src='{environment:demosBaseUrl}/input-group-sample-4' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### Styling
Our inputs could be styled differently by using the `type` property of the `igxInputGroup` component. Currently we support four different ways of styling: line (the default one), box, border and search. this is how they look like:

<div class="sample-container" style="height:520px">
<iframe id="input-group-sample-5-frame" src='{environment:demosBaseUrl}/input-group-sample-5' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="input-group-sample-5-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Input Group API

### Inputs

|Name|Type|Description|
|--- |--- |--- |
|`type`|string|How the input will be styled. The allowed values are `line`, `box`, `border` and `search`. The default is `line`.|
<div class="divider--half"></div>

### Methods

|Signature|Description|
|--- |--- |
|`isTypeLine()`|Whether the `igxInputGroup` type is line.|
|`isTypeBox()`|Whether the `igxInputGroup` type is box.|
|`isTypeBorder()`|Whether the `igxInputGroup` type is border.|
|`isTypeSearch()`|Whether the `igxInputGroup` type is search.|
<div class="divider--half"></div>

## Input API

### Inputs

|Name|Type|Description|
|--- |--- |--- |
|`value`|any|The value of the input.|
<div class="divider--half"></div>

### Getters/Setters

|Name|Type|Getter|Setter|Description|
|--- |--- |--- |--- |--- |
|`valid`|IgxInputState|Yes|No|Gets the input validation state. The possible values could be `IgxInputState.INITIAL`, `IgxInputState.VALID`, `IgxInputState.INVALID`.
|`disabled`|boolean|Yes|Yes|Gets/Sets the disabled property of the input.|
|`focused`|boolean|Yes|No|Gets whether the input is currently in focus.|
<div class="divider--half"></div>

## Hint API

### Inputs

|Name|Type|Description|
|--- |--- |--- |
|`position`|string|Where the hint will be placed. The allowed values are `start` and `end`. The default value is `start`.|
<div class="divider--half"></div>

## Additional Resources
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
