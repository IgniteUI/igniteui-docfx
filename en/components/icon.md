---
title: Icon Component
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon component. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls
---

##Icon
<p class="highlight">The Ignite UI for Angular Icon component unifies icon/font sets so developers can use them interchangeably and add material icons to markup. The component supports custom colors. Icons can be set as inactive.</p>
<div class="divider"></div>

### Icon Demo

<div class="sample-container" style="height: 384px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/icon-sample-1"  onload="onSampleIframeContentLoaded(this);">
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="icon-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

The Icon component is exported as an `NgModule`, thus all you need to do in your application is to import the _IgxIconModule_
inside your `AppModule`:

```typescript
// app.module.ts

import { IgxIconModule } from 'igniteui-angular/main';

@NgModule({
    imports: [
        ...
        IgxIconModule,
        ...
    ]
})
export class AppModule {}
```
### Examples

Using `igx-icon` to set an `active` home icon with magenta `color`.
```html
<igx-icon name="home" color="magenta" isActive="true"></igx-icon>
```
Setting an `inactive` icon.
```html
<igx-icon name="volume_off" isActive="false"></igx-icon>
```
<div class="divider--half"></div>

### API Summary

In this article we covered the Icon component. Here are a few more APIs to explore, which are listed below.

####Atributes
You can set all properties of the icon component with the following `attributes`:
| Name   |       Example      |  Description |
|:----------|:-------------:|:------|
| `name` |  `name="home"` | Set the icon by providing its name from the official [material icons set](https://material.io/icons/) . |
| `active` |  `active="true"` | Set the icon to active/inactive (default is true). |
| `color` |  `color="#474747"` | Set the icon color by providing a string value. |
<div class="divider--half"></div>

####Setters
You can programmatically set all of the icon properties with the following icon setters: 
| Name | Type | Description |
| :--- | :--- | :--- |
| `color(color: string)` | string | Sets the icon color |
| `name(icon: string)` | string | Sets the icon name |
| `isActive(state: boolean)` | boolean | Sets the icon style to inactive if set to false. |
####Getters
You can programmatically get all of the icon properties with the following icon getters: 
| Name | Type | Description |
| :--- | :--- | :--- |
| `getIconColor()` | string | Returns the icon color |
| `getIconName()` | string | Returns the icon name. |
| `getActive()` | boolean | Returns the icon active state. |
<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
