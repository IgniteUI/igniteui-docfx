---
title: Angular Avatar Component – Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Avatar component, Angular Avatar control
---

# Avatar

<p class="highlight">The Ignite UI for Angular Avatar component helps adding initials, images, or material icons to your application.</p>
<div class="divider"></div>

## Angular Avatar Example

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3" alt="Angular Avatar Example">
</code-view>

<div class="divider--half"></div>

## Usage

To get started with the Avatar component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxAvatarModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxAvatarModule } from 'igniteui-angular';
// import { IgxAvatarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAvatarModule],
    ...
})
export class AppModule {}
```

## Examples

The IgniteUI for Angular Avatar component comes in three shapes (square, rounded and circle), with three size options (small, medium and large). It can be used for displaying initials, images or icons.

### Avatar Shape
We can change the avatar shape through the `shape` attribute setting its value to `square`, `rounded` or `circle`. By default, the shape of the avatar is `square`.

```html
<igx-avatar initials="JS"
            shape="circle">
</igx-avatar>
```

### Avatar displaying initials
To get a simple avatar with [`initials`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

```html
<igx-avatar initials="JS">
</igx-avatar>
```
Let's enhance our avatar by making it rounded and bigger in size. 

```html
<igx-avatar initials="JS"
            shape="rounded"
            size="medium">
</igx-avatar>
```
We can also change the background through the `background` property or set a color on the initials through the `color` property. 

```scss
// avatar.component.scss

igx-avatar {
    background: #e41c77;
    color: #000000;
}

```

> [!WARNING]
> The `roundShape` property of the `igx-avatar` component have been deprecated. The `shape` attribute should be used instead.

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-1' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Avatar displaying image
To get an avatar that displays an image, all you have to do is set the image source via the `src` property.

```html
<igx-avatar src="https://randomuser.me/api/portraits/men/1.jpg"
            shape="rounded"
            size="large">
</igx-avatar>
```

If all went well, you should see something like the following in the browser:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

### Avatar displaying icon
Analogically, the avatar can display an icon via the [`icon`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#icon) property. Currently all icons from the material icon set are supported.

```html
<igx-avatar icon="person"
            shape="rounded"
            size="small">
</igx-avatar>
```

You should see something like this:

<div class="sample-container loading" style="height:100px">
    <iframe id="avatar-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/avatar-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Styling

To get started with styling the avatar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

Following the simplest approach, we create a new theme that extends the [`avatar-theme`]({environment:sassApiUrl}/index.html#function-avatar-theme) and accepts the `$background`, `$color`, and the `$border-radius` parameters.

Given the following markup:

```html
<div class="initials-avatar">
    <igx-avatar>BA</igx-avatar>
</div>
```

We need to create a theme:

```scss
$custom-avatar-theme: avatar-theme(
    $background: #72da67,
    $color: #000000,
    $border-radius: 16px
);
```

### Using CSS variables 

The last step is to pass the custom avatar theme:

```scss
.initials-avatar {
    @include css-vars($custom-avatar-theme);
}
```

### Using mixins

In order to style components for Internet Explorer 11 and older browsers, we have to use different approach, since it doesn't support CSS variables. 

If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. On the other side, in order to prevent the custom theme to leak to other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom avatar theme to the `igx-avatar` mixin
        .initials-avatar {
            @include avatar($custom-avatar-theme);
        }
    }
}
```

If all went well, you should see something like the following in the browser:


<code-view style="height:120px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-styling" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)


## Theming Dependencies
* [IgxAvatar Theme]({environment:sassApiUrl}/index.html#function-avatar-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
