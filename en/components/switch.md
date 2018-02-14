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
<iframe src='{environment:demosBaseUrl}/switch-sample-2' width="100%" height="100%" seamless frameBorder="0"></iframe>
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
  <div style="width: 150px">
      {{ setting.name }}
  </div>
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
| `checked` | bool | Switche is turned on if true. |

<div class="divider"></div>

####Outputs
The following outputs are available on the **igx-switch** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `change` | EventEmitter | Emits an event when the switch is turned on or off. |

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
