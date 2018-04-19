---
title: Switch Component
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Switch components, Angular Switch controls
---

##Switch
<p class="highlight">The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.</p>
<div class="divider"></div>

### Switch Demo
<div class="sample-container" style="height:200px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/switch-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

At its core the switch component allows for toggling between on/off state. The default styling is done according to the selection controls specification as per the Material Design guidelines.
To get started with the Ignite UI for Angular Switch, let's first import the **IgxSwitchModule** in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxSwitchModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxSwitchModule],
    ...
})
export class AppModule {}
```

To get a simple switch, add the following code inside the compnent template:

```html
<igx-switch checked="true">
    Simple switch
</igx-switch>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container" style="height: 150px">
<iframe src='{environment:demosBaseUrl}/switch-sample-1' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

#### Switch properties

Let's enhance the code above by binding the switch properties to some data. Say, we have an array of setting objects, each having two properties: name and state. You can bind the switch component checked property to the underlying setting object state property. Analogically you can bind the value property to name.

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
The final result would be something like that:

<div class="sample-container" style="height: 200px">
    <iframe src='{environment:demosBaseUrl}/switch-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>

### API Summary

####Inputs
The following inputs are available on the **igx-switch** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `@Input()` id |   string   | The unique `id` attribute to be used for the switch. If you do not provide a value, it will be auto-generated. |
| `@Input()` labelId |    string   | The unique `id` attribute to be used for the switch label. If you do not provide a value, it will be auto-generated. |
| `@Input()` name |  string | The `name` attribute to be used for the switch. |
| `@Input()` value | any | The value to be set for the switch. |
| `@Input()` tabindex | number | Specifies the tabbing order of the switch. |
| `@Input()` checked | boolean | Specifies the checked state of the switch. |
| `@Input()` required | boolean | Specifies the required state of the switch. |
| `@Input()` disabled | boolean | Specifies the disabled state of the switch. |
| `@Input()` disableRipple | boolean | Specifies the whether the ripple effect should be disabled for the switch. |
| `@Input()` labelPosition | string `|` enum LabelPosition | Specifies the position of the text label relative to the switch element. |
| `@Input("aria-labelledby")` ariaLabelledBy | string | Specify an external element by id to be used as label for the switch. |

<div class="divider"></div>

####Outputs
The following outputs are available on the **igx-switch** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `@Output()` change | EventEmitter<IChangeCheckboxEventArgs> | Emitted when the switch checked value changes. |

####Methods
The following methods are available on the **igx-switch** component:
| toggle |
|:----------|
| Toggles the checked state of the switch. |

###Additional Resources
<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
