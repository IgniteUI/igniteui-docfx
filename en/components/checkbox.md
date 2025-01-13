---
title: Angular Checkbox Component – Ignite UI for Angular
_description: Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. Try it Now
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Checkbox components, Angular Checkbox controls
---

# Angular Checkbox Component Overview
<p class="highlight">Angular Checkbox is an extension of the standard HTML input type checkbox, providing similar functionality, only enhanced with things like animations and Material Design styling. It enables users to choose one or several predefined options, mostly in forms and surveys.

The Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. It behaves similarly to the native browser checkbox. Some of the features it offers are styling options, themes, checked, unchecked, and indeterminate states, and others.</p>

## Angular Checkbox Example
See the checkbox in action in the following Angular Checkbox example below.

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-sample-1" alt="Angular Checkbox Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Checkbox

To get started with the Ignite UI for Angular Checkbox component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxCheckboxModule` in the **app.module.ts** file:

```typescript
// app.module.ts

import { IgxCheckboxModule } from 'igniteui-angular';
// import { IgxCheckboxModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxCheckboxModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCheckboxComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxCheckboxComponent } from 'igniteui-angular';
// import { IgxCheckboxComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-checkbox [checked]="true">
        Simple checkbox
    </igx-checkbox>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxCheckboxComponent]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Checkbox module or component imported, you can start using the `igx-checkbox` component.

## Using the Angular Checkbox Component
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
@Component({...})
export class HomeComponent {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];

    public statusChanged() {
        // event handler logic
    }
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
You can position the label using the checkbox's [`labelPosition`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#labelPosition) property:
```html
<igx-checkbox labelPosition="before"></igx-checkbox>
```

If the `labelPosition` is not set, the label will be positioned after the checkbox.

### Indeterminate Checkbox in Angular

In addition to the checked and unchecked states, there is a third state a checkbox can be in: **indeterminate**. In this state the checkbox is neither checked, nor unchecked. This is set using the checkbox's [`indeterminate`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#indeterminate) property:

```html
<igx-checkbox [indeterminate]="true"></igx-checkbox>
```

We can create an app that has a list of tasks that need to be done and one master checkbox in Angular that's going to be checked only if all the tasks are completed. Let's update the previous sample. Starting with the template:

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
    { done: true, description: 'Research' },
    { done: true, description: 'Implement' },
    { done: false, description: 'Test' }
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
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Then, we create a new theme that extends the [`checkbox-theme`]({environment:sassApiUrl}/index.html#function-checkbox-theme) and use some of its parameters to style the checkbox's items:

```scss
// in styles.scss
$custom-checkbox-theme: checkbox-theme(
  $border-radius: 10px,
  $label-color: #011627,
  $empty-color: #ECAA53,
  $fill-color: #ECAA53,
  $tick-color: #011627,
);
```

The last step is to **include** the component theme in our application.

```scss
@include css-vars($custom-checkbox-theme);
```

### Demo


<code-view style="height: 100px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" >
</code-view>


<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

## Theming Dependencies
* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-igx-riple-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
