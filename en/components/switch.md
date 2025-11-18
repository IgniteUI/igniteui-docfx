---
title: Angular Switch Component – Ignite UI for Angular | Infragistics | MIT license
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Angular Switch component, Angular Switch control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
_license: MIT
---

# Angular Switch Component Overview

<p class="highlight">The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.</p>

## Angular Switch Example

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-1/" alt="Angular Switch Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Switch

To get started with the Ignite UI for Angular Switch component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxSwitchModule` in your **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxSwitchModule } from 'igniteui-angular';
// import { IgxSwitchModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSwitchModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSwitchComponent` as a standalone dependency.

```typescript
// home.component.ts

import { IgxSwitchComponent } from 'igniteui-angular';
// import { IgxSwitchComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: ` <igx-switch [checked]="true"> Simple switch </igx-switch> `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxSwitchComponent],
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Switch module or component imported, you can start using the `igx-switch` component.

## Using the Angular Switch

At its core the switch component allows for toggling between on/off state. The default styling is done according to the selection controls specification in the Material Design guidelines.

To get a simple switch as the one in the demo, add the following code inside the component template:

```html
<igx-switch [checked]="true"> Simple switch </igx-switch>
```

### Switch properties

Let's enhance the code above by binding the switch properties to some data. Say, we have an array of settings objects, each having two properties - `name` and `state`. You can bind the switch component [`checked`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#checked) property to the underlying object state property. Analogically, you can bind the value property to name.

```typescript
// toggle.component.ts
...
public settings = [
    { name: 'WiFi', state: false},
    { name: 'Bluetooth', state: true},
    { name: 'Device visibility', state: false}
];
```

Enhance the component template by adding a switch for each setting and then binding the corresponding property:

```html
<!--toggle.component.html-->

<igx-switch *ngFor="let setting of settings" [checked]="setting.state">
  {{ setting.name }}
</igx-switch>
```

Add some styles:

```scss
:host {
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;
}

igx-switch {
  margin-top: 24px;
}
```

And the final result should be something like that:

<code-view style="height: 200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-2/" >
</code-view>

### Label Positioning

You can position the label using the switch's [`labelPosition`]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html#labelPosition) property:

```html
<igx-switch labelPosition="before"></igx-switch>
```

If the `labelPosition` is not set, the label will be positioned after the switch.

## Styling

Following the simplest approach, you can use CSS variables to customize the appearance of the switch:

```css
igx-switch {
    --thumb-on-color: #e3f0ff;
    --thumb-off-color: #fff;
    --track-on-color: #0064d9;
    --track-off-color: #788fa6;
    --track-on-hover-color: #0058bf;
    --border-radius-track: 1rem;
    --focus-outline-color: #0032a5;
    --border-on-color: transparent;
    --border-color: transparent;
}

igx-switch:hover {
    --track-off-color: #637d97;
}
```

By changing the values of these CSS variables, you can alter the entire look of the switch component.

<div class="divider--half"></div>

Another way to style the switch is by using **Sass**, along with our [`switch-theme`]({environment:sassApiUrl}/index.html#function-switch-theme) function.

To start styling the switch using **Sass**, first import the `index` file, which includes all theme functions and component mixins:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Then, we create a new theme that extends the [`switch-theme`]({environment:sassApiUrl}/themes#function-switch-theme) and by providing just two parameters - `$thumb-off-color` and `$thumb-on-color` you can get a fully styled switch, as the theme generates all the rest of the necessary colors based on these two, you can of course override any of the other parameters for a customized look:

```scss
$custom-switch-theme: switch-theme(
    $thumb-off-color: #7cadd5,
    $thumb-on-color: #ecaa53,
);
```

Finally, **include** the custom theme in your application:

```scss
@include css-vars($custom-switch-theme);
```

In the sample below, you can see how using the switch component with customized CSS variables allows you to create a design that visually resembles the switch used in the [`SAP UI5`](https://ui5.sap.com/#/entity/sap.m.Switch/sample/sap.m.sample.Switch) design system. 

<code-view style="height: 200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-styling/" >
</code-view>

> [!NOTE]
> The sample uses the [Fluent Light](themes/sass/schemas.md#predefined-schemas) schema.

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent Styles]({environment:sassApiUrl}/themes#function-switch-theme)

## Theming Dependencies

* [IgxRipple Theme]({environment:sassApiUrl}/themes#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
