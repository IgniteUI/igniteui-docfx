---
title: Avatar Component
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Avatar component, Angular Avatar control
_language: kr
---

##Avatar

<p class="highlight">The Ignite UI for Angular Avatar component helps adding images, material icons, or initials to your application.</p>
<div class="divider"></div>

### Avatar Demo


<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3" >
</code-view>

<div class="divider--half"></div>

### Usage

To get started with the Ignite UI for Angular Avatar, let's first import the `IgxAvatarModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```
The Avatar can be either square or circular, with three size options (small, medium and large). It can be used for displaying initials, images or icons.

####Avatar displaying initials
To get a simple avatar with [`initials`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

```html
<igx-avatar initials="JS">
</igx-avatar>
```
Let's enhance our avatar by making it circular and bigger in size. We can also change the background through the [`bgColor`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#bgcolor) property or set a color on the initials through the [`color`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#color) property. All of these are input properties and can be bound to some component properties.

```html
<igx-avatar initials="JS" 
            [roundShape]="isCircular" 
            size="medium" 
            [bgColor]="bgColor" 
            [color]="color">
</igx-avatar>
```
```typescript
// avatar.component.ts
...
  public bgColor = "#0375be";
  public color = "black";
  public isCircular = true;

```
If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

####Avatar displaying image
To get an avatar that dispalays an image, all you have to do is setting the image source via the [`src`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#src) property.

```html
<igx-avatar [src]="imgSource"
            roundShape="true"
            size="large">
</igx-avatar>
```

```typescript
// avatar.component.ts
...
  public imgSource = "https://randomuser.me/api/portraits/men/1.jpg";

```
If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

####Avatar displaying icon
Analogically, the avatar can display an icon via the [`icon`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#icon) property. Currently all icons from the material icon set are supported.

```html
<igx-avatar icon="phone"
            roundShape="true"
            size="large">
</igx-avatar>
```

### API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)