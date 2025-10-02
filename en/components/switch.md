---
title: Angular Switch Component – Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Angular Switch component, Angular Switch control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
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

### Switch Theme Dependencies

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<div class="theme-switcher-wrapper">
  <!-- Theme Switcher Radios and Labels -->
  <input type="radio" name="theme" id="material" checked>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent">
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap">
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo">
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb color when switch is off</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>Track color when switch is disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$track-off-color</td>
            <td>Track color when switch is off</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-disabled-color</td><td>Thumb color when switch is disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>Thumb color when switch is on</td>
          </tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>Track color when switch is on and hovered</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>Track color when switch is on and disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-on-color</strong></summary></details></td>
            <td>$track-on-color</td>
            <td>Track color when switch is on</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>Thumb color when switch is on and disabled</td></tr>
        </tbody>
      </table>
    </div>
    <!-- Fluent Theme Table -->
    <div class="theme-table fluent">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$border-color</td>
            <td>Border color derived from thumb off color</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-off-hover-color</td><td>Thumb color on hover</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb off color derived from border color</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>Border color on hover</td></tr>
          <tr class="dependent"><td></td><td>$border-disabled-color</td><td>Border color when disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb off color derived from track off color</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>Border color on hover</td></tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>Track color when disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>Thumb color when switch is on</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>The color of the thumb when the switch is on and disabled</td></tr>
          <tr class="dependent"><td></td><td>$border-on-color</td><td>The border color when the switch is on</td></tr>
          <tr class="dependent"><td></td><td>$border-on-hover-color</td><td>Border color when switch is on and hovered</td></tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>Track color when switch is on and hovered</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>Track color when on and disabled</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table bootstrap">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$border-color</td>
            <td>Border color derived from thumb off color</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-off-hover-color</td><td>Thumb color on hover</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb off color derived from border color</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>Border color on hover</td></tr>
          <tr class="dependent"><td></td><td>$border-disabled-color</td><td>Border color when disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb off color derived from track off color</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>Border color on hover</td></tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>Track color when disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>Thumb color when switch is on</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>The color of the thumb when the switch is on and disabled</td></tr>
          <tr class="dependent"><td></td><td>$border-on-color</td><td>The border color when the switch is on</td></tr>
          <tr class="dependent"><td></td><td>$border-on-hover-color</td><td>Border color when switch is on and hovered</td></tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>Track color when switch is on and hovered</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>Track color when on and disabled</td></tr>
          <tr class="dependent"><td></td><td>$focus-fill-color</td><td>Fill color when switch is focused</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$focus-fill-color</strong></summary></details></td>
            <td>$focus-outline-color</td>
            <td>Outline color derived from focus fill</td>
          </tr>
          <tr class="dependent"><td></td><td>$focus-fill-hover-color</td><td>Focus fill color when hovered</td></tr>
        </tbody>
      </table>
    </div>
    <div class="theme-table indigo">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$thumb-off-color</strong></summary></details></td>
            <td>$border-color</td>
            <td>Border color derived from thumb off color</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-off-hover-color</td><td>Thumb color on hover</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb off color derived from border color</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>Border color on hover</td></tr>
          <tr class="dependent"><td></td><td>$border-disabled-color</td><td>Border color when disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-off-color</strong></summary></details></td>
            <td>$thumb-off-color</td>
            <td>Thumb off color derived from track off color</td>
          </tr>
          <tr class="dependent"><td></td><td>$border-hover-color</td><td>Border color on hover</td></tr>
          <tr class="dependent"><td></td><td>$track-disabled-color</td><td>Track color when disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$track-on-color</strong></summary></details></td>
            <td>$thumb-on-color</td>
            <td>Thumb color when switch is on</td>
          </tr>
          <tr class="dependent"><td></td><td>$thumb-on-disabled-color</td><td>The color of the thumb when the switch is on and disabled</td></tr>
          <tr class="dependent"><td></td><td>$border-on-color</td><td>The border color when the switch is on</td></tr>
          <tr class="dependent"><td></td><td>$track-on-hover-color</td><td>Track color when switch is on and hovered</td></tr>
          <tr class="dependent"><td></td><td>$track-on-disabled-color</td><td>Track color when on and disabled</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$border-on-color</strong></summary></details></td>
            <td>$border-on-hover-color</td>
            <td>Border color when switch is on and hovered</td>
          </tr>
          <tr class="dependent">
            <td></td><td>$focus-outlined-color-focused</td><td>The focus outlined color for focused state</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


To get started with styling the switch, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Then, we create a new theme that extends the [`switch-theme`]({environment:sassApiUrl}/index.html#function-switch-theme) and by providing just two parameters - `$thumb-off-color` and `$thumb-on-color` you can get a fully styled switch, as the theme generates all the rest of the necessary colors based on these two, you can of course override any of the other parameters for a customized look:

```scss
$custom-switch-theme: switch-theme(
  $thumb-off-color: #7cadd5,
  $thumb-on-color: #ecaa53,
);
```

The last step is to **include** the component theme in our application.

```scss
@include css-vars($custom-switch-theme);
```

### Demo

<code-view style="height: 200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-styling/" >
</code-view>

### Styling with Tailwind

You can style the switch using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.
- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-switch`, `dark-switch`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the semicolon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [IgxSwitch Theme]({environment:sassApiUrl}/index.html#function-switch-theme). The syntax is as follows:

```html
<igx-switch
  class="!light-switch ![--thumb-on-color:#FF4E00]"
  [checked]="true">
  ...
</igx-switch>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your switch should look like this:

<div class="sample-container loading" style="height:200px">
    <iframe id="switch-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/data-entries/switch-tailwind-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

<div class="divider--half"></div>

## API References

<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent Styles]({environment:sassApiUrl}/index.html#function-switch-theme)

## Theming Dependencies

* [IgxRipple Theme]({environment:sassApiUrl}/index.html#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
