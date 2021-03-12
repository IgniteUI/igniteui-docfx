---
title: Switch Component
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Switch components, Angular Switch controls
_language: kr
---

##Switch
<p class="highlight">The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.</p>
<div class="divider"></div>

### Switch Demo

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-entries/switch-sample-2" >
</code-view>

<div class="divider--half"></div>

### Usage

At its core the switch component allows for toggling between on/off state. The default styling is done according to the selection controls specification as per the Material Design guidelines.
To get started with the Ignite UI for Angular Switch, let's first import the `IgxSwitchModule` in the **app.module.ts** file:

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

To get a simple switch, add the following code inside the component template:

```html
<igx-switch [checked]="true">
    Simple switch
</igx-switch>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height: 150px">
<iframe data-src='{environment:demosBaseUrl}/data-entries/switch-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

#### Switch properties

Let's enhance the code above by binding the switch properties to some data. Say, we have an array of setting objects, each having two properties: name and state. You can bind the switch component [`checked`]({environment:angularApiUrl}/classes/igxswitchcomponent.html#checked) property to the underlying setting object state property. Analogically, you can bind the value property to name.

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

<div class="sample-container loading" style="height: 200px">
    <iframe data-src='{environment:demosBaseUrl}/data-entries/switch-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### API References
<div class="divider--half"></div>

* [IgxSwitchComponent]({environment:angularApiUrl}/classes/igxswitchcomponent.html)
* [IgxSwitchComponent Styles]({environment:sassApiUrl}/index.html#function-igx-switch-theme)

###Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
