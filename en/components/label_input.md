---
title: Label and Input Directives
_description: With Ignite UI for Angular Label and Input directives, developers can create a single-line or multi-line text elements, add additional CSS styles and integrate with other controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Label components, Angular Label controls, Angular Input components, Angular Input controls, Input component, Input control, Label component, Label control, Angular Input directive, Angular Label directive, Angular Forms, Angular Reactive Forms, Angular Form Validation
---

## Label & Input
<p class="highlight">
The Ignite UI for Angular Input and Label directives are used to create a single-line or multi-line text elements. They help to cover common scenarios when dealing with form inputs.
</p>
<div class="divider--half"></div>

### Label & Input Demo
<div class="sample-container" style="height:100px">
<iframe id="input-group-sample-2-frame" src='{environment:demosBaseUrl}/input-group-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="input-group-sample-2-frame" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
The default styling of the Label and Input directives follows the text fields specification in the Material Design
[**guidelines**](https://material.io/guidelines/components/text-fields.html).

> [!NOTE]
> To use `igxInput` and `igxLabel`, you have to wrap them in an `<igx-input-group>` container.

To get started with the Ignite UI for Angular Label & Input, let's first import the **IgxInputGroup** in our **app.module.ts** file:

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

The `igxInput` directive could be applied to `<input>` and `<textarea>` HTML elements. We support both single-line and multi-line text fields.

#### Validation
Ignite UI for Angular Input directive provides a Material-based styling when you have validation. Let's add `required` attribute to our input:

```html
<igx-input-group>
    <input igxInput name="fullName" type="text" required="required" />
    <label igxLabel for="fullName">Full Name</label>
</igx-input-group>
```

In the demonstration of the code below you can see we receive an asterisk next to the label and the input turns green/red when we write in it depending on whether the validation passes/fails.

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

### Input Group
You can read about the Input Group component in a separate topic [here](input_group.md).

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

## Additional Resources
Related topics:

* [Input Group](input_group.md)
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)