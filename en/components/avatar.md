---
title: Avatar Component
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Avatar component, Angular Avatar control
---

##Avatar

<p class="highlight">The Ignite UI for Angular Avatar component helps adding initials, images, or material icons to your application.</p>
<div class="divider"></div>

### Demo

<div class="sample-container loading" style="height:200px">
    <iframe id="avatar-sample-3-iframe" src='{environment:demosBaseUrl}/layouts/avatar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="avatar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">        view on stackblitz
    </button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Avatar component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxAvatarModule` in the **app.module.ts** file:

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

### Examples

The Avatar can be either square or circular, with three size options (small, medium and large). It can be used for displaying initials, images or icons.

####Avatar displaying initials
To get a simple avatar with [`initials`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

```html
<igx-avatar initials="JS">
</igx-avatar>
```
Let's enhance our avatar by making it circular and bigger in size. 

```html
<igx-avatar initials="JS"
            roundShape="true"
            size="medium">
</igx-avatar>
```
We can also change the background through the `background` property or set a color on the initials through the `color` property. 

```scss
// avatar.component.scss

    background:  #e41c77;
    color: #000000;

```
If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

####Avatar displaying image
To get an avatar that dispalays an image, all you have to do is setting the image source via the `src` property.

```html
<igx-avatar src="https://randomuser.me/api/portraits/men/1.jpg"
            roundShape="true"
            size="large">
</igx-avatar>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

####Avatar displaying icon
Analogically, the avatar can display an icon via the [`icon`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#icon) property. Currently all icons from the material icon set are supported.

```html
<igx-avatar icon="person"
            roundShape="true"
            size="small">
</igx-avatar>
```

You should see something like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

### Styling

To get started with styling the avatar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`igx-avatar-theme`]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) and accepts the `$initials-background`, `$initials-color`, `$icon-background`, `$icon-color` and the `$border-radius-square` parameters.

```scss
$custom-avatar-theme: igx-avatar-theme(
    $initials-background: #72da67,
    $initials-color: #000000,
    $icon-background: #217346,
    $icon-color: #ffffff,
    $border-radius-square: 16px
);
```

The last step is to **include** the component mixins: 

```scss
@include igx-avatar($custom-avatar-theme);
```

>[!NOTE]
 >If the component is using an [`Emulated`](./themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

 ```scss
:host {
  ::ng-deep {
    @include igx-avatar($custom-avatar-theme);
  }
}
```

You should see something like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-styling' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="avatar-styling-iframe" data-demos-base-url="{environment:demosBaseUrl}">        view on stackblitz
    </button>
</div>
<div class="divider--half"></div>

### API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)