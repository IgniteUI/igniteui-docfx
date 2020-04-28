---
title: Switch Component
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Switch components, Angular Switch controls
---

## Switch
<p class="highlight">The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.</p>
<div class="divider"></div>

#### Demo
<div class="sample-container loading" style="height:200px">
    <iframe id="switch-sample-1-iframe" src='{environment:demosBaseUrl}/data-entries/switch-sample-1' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="switch-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

At its core the switch component allows for toggling between on/off state. The default styling is done according to the selection controls specification in the Material Design guidelines.

The first step is to import the `IgxSwitchModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxSwitchModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSwitchModule],
    ...
})
export class AppModule {}
```

To get a simple switch as the one in the demo, add the following code inside the component template:

```html
<igx-switch [checked]="true">
    Simple switch
</igx-switch>
```

#### Switch properties

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

<div class="sample-container loading" style="height: 200px">
    <iframe id="switch-sample-2-iframe" data-src='{environment:demosBaseUrl}/data-entries/switch-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="switch-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Styling

To get started with styling the switch, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Then, we create a new theme that extends the [`igx-switch-theme`]({environment:sassApiUrl}/index.html#function-igx-switch-theme) and use some of its parameters to style the switch's items:

```scss
// in styles.scss
$custom-switch-theme: igx-switch-theme(
    $thumb-on-color: #ECAA53,
    $track-on-color: #F0CB9C
);
```

#### Including Themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-switch($custom-switch-theme);
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
    ::ng-deep {
        @include igx-switch($custom-switch-theme);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($custom-switch-theme);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($custom-switch-theme);
}
```
#### Demo

<div class="sample-container loading" style="height: 200px">
    <iframe id="switch-styling-iframe" frameborder="0" seamless width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-entries/switch-styling" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="switch-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent Styles]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

###Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
