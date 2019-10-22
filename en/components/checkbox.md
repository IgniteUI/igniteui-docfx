---
title: Checkbox Component
_description: Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Checkbox components, Angular Checkbox controls
---

##Checkbox
<p class="highlight">The Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. It behaves similarly to the native browser checkbox.</p>
<div class="divider"></div>

### Checkbox Demo
<div class="sample-container loading" style="height: 200px">
<iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/data-entries/checkbox-sample-2' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage
At its core, the checkbox component allows for a choice between selected/unselected state. The default styling is done according to the selection controls specification as per the Material Design guidelines.

To get started with the Ignite UI for Angular Checkbox install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

Then you need to import the `IgxCheckboxModule` in the **app.module.ts** file:

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

To get a simple checkbox, add the following code inside the component template:

```html
<igx-checkbox [checked]="true">
    simple checkbox
</igx-checkbox>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height: 100px">
<iframe data-src='{environment:demosBaseUrl}/data-entries/checkbox-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

#### Checkbox properties

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

The final result would be something like that:

<div class="sample-container loading" style="height: 200px">
<iframe data-src='{environment:demosBaseUrl}/data-entries/checkbox-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

### Styling
Using the [Ignite UI for Angular Theming](themes/index.md), we can alter the **igx-checkbox** appearance.

#### Import theme
First, in order for us to use the functions exposed by the theme engine, we need to import the `index` file in our style file: 

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

#### Define palette
We are going to use our own color [palette](themes/palette.md) where we can specify our two main theme colors. Additionally we are going to set several of the exposed by the [`igx-checkbox-theme`]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme) parameters namely `$border-radius`, `$label-color` and `$empty-color`.
First define a custom palette:
```scss
// in styles.scss
$my-primary-color: #f5e492;
$my-secondary-color: #09f;

$my-color-palette: igx-palette(
    $primary: $my-primary-color,
    $secondary: $my-secondary-color
);
```

In order to see our custom palette applied, we need to pass it to a theme function.
So in one bold move we will [`create a custom theme`](themes/component-themes.md#creating-themes) and pass our three more specific parameters as well. Let's say we have decided modifying these will be more than sufficient to make our component look the way we like:
```scss
// in styles.scss
$custom-checkbox-theme: igx-checkbox-theme(
    $palette: $my-color-palette,
    $border-radius: 10px,
    $label-color: $my-secondary-color,
    $empty-color: $my-secondary-color
);
```

#### Applying
All that's left is to properly scope our newly created theme.

##### Globally
In case you want this newly created `igx-checkbox` theme to be applied [`globally`](themes/component-themes.md#creating-themes) in your app, all that is needed is to include the theme in your app root style file:
```scss
// in styles.scss
// Pass our checkbox theme to the `igx-checkbox` mixin
    @include igx-checkbox($custom-checkbox-theme);
```

##### Scoped
There may be a case where you want a particular `igx-checkbox` be styled differently than the others in the app. This will require to use Angular specific pseudo-class selectors like `:host`, `::ng-deep`, etc. Additionally, all of the above styles we specify in styles.scss need to be defined in the component.scss file instead.

 >[!NOTE]
 >If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`.
On the other side, in order to prevent our custom theme to leak to other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
// in component.scss
:host {
    ::ng-deep {
        // Pass our checkbox theme to the `igx-checkbox` mixin
        @include igx-checkbox($custom-checkbox-theme);
    }
}
```
#### Styling Demo

<div class="sample-container loading" style="height: 100px">
    <iframe id="checkbox-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/checkbox-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="checkbox-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [LabelPosition]({environment:angularApiUrl}/enums/labelposition.html)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
