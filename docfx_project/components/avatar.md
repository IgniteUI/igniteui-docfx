---
title: Avatar Component
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Avatar component, Angular Avatar control
---

##Avatar
<p class="highlight">Use the Ignite UI for Angular Avatar to add images, material icons, or initials to an application, which is helpful for representing users in lists or profile buttons. The Avatar can be square or circular, with three size options. The control supports all images from the material icon set as well as custom images.</p>
<div class="divider"></div>

### Avatar Demo
<div class="sample-container" style="height:600px">
    <iframe src='https://embed.plnkr.co/KLPxh3/?show=preview&sidebar=false' width="100%" height="100%" seamless frameBorder="0"></inframe>
</div>
<div class="divider--half"></div>

### Usage
```html
<igx-avatar roundShape="true" icon="person" bgColor="#0375be" data-init="SS">
</igx-avatar>
```
<div class="divider--half"></div>

### API
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `src` |  string | Set the image source of the avatar. |
| `initials` | string | Set the initials of the avatar. |
| `icon` | string | Set the icon of the avatar. Currently all icons from the material icon set are supported. Not applicable for initials and image avatars. |
| `bgColor` | string | Set the background color of initials or icon avatars. |
| `color` | string | Set the color of initials or icon avatars. (optional) |
| `roundShape` | boolean | Set the shape of the avatar to circle. The default shape is square. |
| `size` | string | Set the size of the avatar to either small, medium, or large. |

<div class="divider--half"></div>
*You can also set all igx-avatar properties programmatically.
<div class="divider--half"></div>

### Examples

Using `igx-avatar` tag to include it into your app.
```html
<igx-avatar roundShape="true" icon="person" bgColor="#0375be" data-init="SS">
</igx-avatar>
```

Using `TypeScript` to modify and existing igx-avatar instance.
```typescript
avatarInstance.srcImage('https://unsplash.it/60/60?image=55');
avatarInstance.size('small');
```
<div class="divider--half"></div>

