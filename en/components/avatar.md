---
title: Angular Avatar Component – Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular Avatar control enables users to add images, material icons or initials within any application for instances such as a profile button.
_keywords: Angular Avatar component, Angular Avatar control, Ignite UI for Angular, Angular UI components
---

# Angular Avatar Component Overview
<p class="highlight">Angular Avatar component helps adding initials, images, or material icons to your application.</p>
<div class="divider"></div>

## Angular Avatar Example

<code-view style="height:200px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-sample-3/" alt="Angular Avatar Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Avatar

To get started with the Ignite UI for Angular Avatar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxAvatarModule` in your **app.module.ts** file. 

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

Alternatively, as of `16.0.0` you can import the `IgxAvatarComponent` as a standalone dependency.

```typescript
// home.component.ts

...
import { IgxAvatarComponent } from 'igniteui-angular';
// import { IgxAvatarComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: '<igx-avatar shape="circle"></igx-avatar>',
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IgxAvatarComponent]
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Avatar module or component imported, you can start with a basic configuration of the `igx-avatar` component.

## Using the Angular Avatar Component

The Ignite UI for Angular Avatar component comes in three shapes (square, rounded, and circle) and three size options (small, medium, and large). It can be used for displaying initials, images or icons.

### Avatar Shape
We can change the avatar shape through the `shape` attribute setting its value to `square`, `rounded` or `circle`. By default, the shape of the avatar is `square`.

```html
<igx-avatar shape="circle"></igx-avatar>
```

### Avatar displaying initials
To get a simple avatar with [`initials`]({environment:angularApiUrl}/classes/igxavatarcomponent.html#initials) (i.e. JS  for  'Jack Sock'), add the following code inside the component template:

```html
<igx-avatar initials="JS" shape="circle"></igx-avatar>
```
Let's enhance our avatar by making it circular and bigger in size. 

```html
<igx-avatar size="medium" initials="JS" shape="circle"></igx-avatar>
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

Following the simplest approach, we create a new theme that extends the [`avatar-theme`]({environment:sassApiUrl}/themes#function-avatar-theme) providing values for the `$background` and `$border-radius` parameters. The `$color` (or `$icon-color`) is automatically set to either black or white, depending on which offers better contrast with the specified background. Note that the `$border-radius` property only takes effect when the avatar's `shape` is set to `rounded`.

Given the following markup:

```html
<div class="avatar-sample initials">
  <igx-avatar initials="JS" shape="rounded" size="medium"></igx-avatar>
</div>
```

We create the following avatar theme:

```scss
$custom-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px
);
```

The last step is to pass the custom avatar theme:

```scss
.initials {
  @include css-vars($custom-avatar-theme);
}
```

If all went well, you should see something like the following in the browser:


<code-view style="height:120px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/avatar-styling/" >
</code-view>

### Custom sizing

You can either use the `--size` variable, targeting the `igx-avatar` directly:

```scss
igx-avatar {
  --size: 200px;
}
```

Or you can use the universal `--igx-avatar-size` variable to target all instances:

```html
<div class="my-app">
  <igx-avatar></igx-avatar>
</div>
```
```scss
.my-app {
  --igx-avatar-size: 200px;
}
```

You can also use one of the predefined sizes, assigning it to the `--ig-size` variable, if theres no size attribute applied. The available values for `--ig-size` are `--ig-size-small`, `--ig-size-medium`, and `--ig-size-large`:

```scss
igx-avatar {
  --ig-size: var(--ig-size-small);
}
```

Learn more about it in the [Size](display-density.md) article.

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxAvatarComponent]({environment:angularApiUrl}/classes/igxavatarcomponent.html)


## Theming Dependencies
* [IgxAvatar Theme]({environment:sassApiUrl}/themes#function-avatar-theme)
* [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
