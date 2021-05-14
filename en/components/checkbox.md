---
title: Checkbox Component
_description: Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Checkbox components, Angular Checkbox controls
---

# Checkbox
<p class="highlight">The Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. It behaves similarly to the native browser checkbox.</p>
<div class="divider"></div>

## Angular Checkbox Example

<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-1" alt="Angular Checkbox Example">
</code-view>

<div class="divider--half"></div>

## Usage
At its core, the checkbox component allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification in the Material Design guidelines.

First you need to import the `IgxCheckboxModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxCheckboxModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxCheckboxModule],
    ...
})
export class AppModule {}
```

To make the checkbox in the demo, add the following code inside the component template:

```html
<igx-checkbox [checked]="true">
    Simple checkbox
</igx-checkbox>
```

### Checkbox properties

Let's enhance the code above by binding the checkbox properties to some data. Say, we have an array of task objects, each having two properties: description and done. You can bind the checkbox component [`checked`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#checked) property to the underlying task object done property. Analogically, you can bind the [`value`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#value) property to description.
Optionally, you can also bind the [`change`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#change) event and add some custom logic in the provided event handler method.

```typescript
// tasks.component.ts
...
public tasks = [
  { done: true, description: 'Research' },
  { done: true, description: 'Implement' },
  { done: false, description: 'Test' },
];

...
statusChanged()
{
    // event handler logic
}
```
Enhance the component template by adding a checkbox for each task and then setting the corresponding property bindings:

```html
<!--tasks.component.html-->

<igx-checkbox *ngFor="let task of tasks" [checked]="task.done">
    {{ task.description }}
</igx-checkbox>
```

Add some styles:

```scss
//task.component.scss

:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-checkbox {
    margin-top: 16px;
}
```

The final result would be something like that:


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-2" >
</code-view>


### Label Positioning

You can position the label using the checkbox's [`labelPosition`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#labelposition) property:

```html
<igx-checkbox labelPosition="before"></igx-checkbox>
```

If the `labelPosition` is not set, the label will be positioned after the checkbox.

### Indeterminate Checkbox

In addition to the checked and unchecked states, there is a third state a checkbox can be in: **indeterminate**. In this state the checkbox is neither checked, nor unchecked. This is set using the checkbox's [`indeterminate`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#indeterminate) property:

```html
<igx-checkbox [indeterminate]="true"></igx-checkbox>
```

We can create an app that has a list of tasks that need to be done and one master checkbox that's going to be checked only if all the tasks are completed. Let's update the previous sample. Starting with the template:

```html
<!-- app.component.html -->

<igx-checkbox 
    [readonly]="true" 
    [(ngModel)]="masterCheckbox.checked" 
    [(indeterminate)]="masterCheckbox.indeterminate" 
    (click)="toggleAll()"
>
All done
</igx-checkbox>
<igx-checkbox class="tasks" *ngFor="let task of tasks" [(ngModel)]="task.done">
    {{ task.description }}
</igx-checkbox>
```

Next, we're going to indent the subtasks, so it's more visual that they are part of the same group.

```scss
// app.component.scss

:host {
    display: flex;
    flex-flow: column nowrap;
    padding: 16px;
}

igx-checkbox {
    margin-top: 16px;
}

igx-checkbox.tasks {
    padding-left: 10px;
}
```

And finally, we'll create the logic of our application:

```ts
// app.component.ts

public tasks = [
    { done: true, description: "Research" },
    { done: true, description: "Implement" },
    { done: false, description: "Test" }
];

public get masterCheckbox() {
    return this.tasks.reduce(
        (acc, curr, idx, arr) => {
            acc.checked = acc.checked && curr.done;
            acc.done = curr.done ? acc.done + 1 : acc.done;
            acc.indeterminate = acc.done === arr.length ? false : !!acc.done;

            return acc;
        },
        {
            checked: true,
            done: 0,
            indeterminate: false
        }
    );
}

public toggleAll() {
    if (this.masterCheckbox.checked) {
        for (const task of this.tasks) {
            task.done = false;
        }
    } else {
        for (const task of this.tasks) {
            task.done = true;
        }
    }
}
```
After all that is done, our application should look like this:


<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-3" >
</code-view>


## Styling

To get started with styling the checkbox, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Then, we create a new theme that extends the [`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme) and use some of its parameters to style the checkbox's items:

```scss
// in styles.scss
$custom-checkbox-theme: igx-checkbox-theme(
    $border-radius: 10px,
    $label-color: #011627,
    $empty-color: #ECAA53,
    $fill-color: #ECAA53,
    $tick-color: #011627,
);
```

### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-checkbox($custom-checkbox-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($custom-checkbox-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($custom-checkbox-theme);
}
```
### Demo


<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" >
</code-view>


<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
