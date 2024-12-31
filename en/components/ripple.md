---
title: Angular Ripple Directive – Ignite UI for Angular | Infragistics
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Angular Ripple component, Angular Ripple Directive, Angular Ripple control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---

# Angular Ripple Directive Overview

<p class="highlight">The Ignite UI for Angular Ripple component creates an animation in response to a touch or a mouse click.</p>

## Angular Ripple Example

<div class="divider--half"></div>

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" alt="Angular Ripple Example">
</code-view>

<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Ripple Directive

To get started with the Ignite UI for Angular Ripple directive, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the `IgxRippleModule` in the **app.module.ts** file.

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';
// import { IgxRippleModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxRippleDirective` as standalone dependencies.

```typescript
// home.component.ts

import { IgxRippleDirective, IgxButtonDirective } from "igniteui-angular";
// import { IgxRippleDirective, IgxButtonDirective } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: "app-home",
  template: '<button igxButton="contained" igxRipple>Click Me</button>',
  styleUrls: ["home.component.scss"],
  standalone: true,
  imports: [IgxRippleDirective, IgxButtonDirective],
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Ripple module or directive imported, you can start using the `igxRipple` directive.

> [!WARNING]
> The [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) uses the Web Animation API and runs natively on [browsers that support it.](http://caniuse.com/#feat=web-animation)
> The `web-animations.min.js` polyfill is [available](https://github.com/web-animations/web-animations-js)
> for other browsers.

## Using the Angular Ripple Directive

### Adding Ripple Effect

Use the `igxRipple` directive to add a ripple effect to the specified element:

```html
<button igxButton="contained" igxRipple>Click Me</button>
```

## Examples

### Custom Color

You can easily change the default ripple color using the `igxRipple`:

```html
<button igxButton="contained" igxRipple="white">White</button>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" alt="Angular Ripple Example">
</code-view>

### Centered Ripple Effect

By default, the ripple effect starts from the position of the click event. You can change this behavior using the [`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) property and setting the center of the element as origin.

```html
<button igxButton="contained" igxRipple="white" [igxRippleCentered]="true">
  Centered
</button>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" alt="Angular Ripple Example">
</code-view>

### Ripple Duration

We can use the [`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleDuration) property to change the duration of the ripple animation, which, by default, is set to 600 milliseconds.

```html
<button igxButton="contained" igxRipple [igxRippleDuration]="2000">
  Click Me
</button>
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" alt="Angular Ripple Example">
</code-view>

### Ripple Target

Use the [`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#igxRippleTarget) property to attach a ripple effect to a specific element inside a parent element.

```html
<div
  class="parent"
  igxRipple="white"
  igxRippleTarget=".child"
  [igxRippleCentered]="true"
>
  ...
  <button class="sample-button child" igxButton="contained">Read More</button>
</div>
```

Notice that no matter whether you click on the parent or the child element, the ripple effect will only appear on the button.

<code-view style="height: 350px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" alt="Angular Ripple Example">
</code-view>

> [!NOTE]
> The child element, which you want to target with the `igxRippleTarget` property, has to be relatively positioned.

## Styling

First, in order to use the functions exposed by the theme engine, we need to import the `index` file, where all styling functions and mixins are located, into our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

You can easily create a new theme, that extends the [`ripple-theme`]({environment:sassApiUrl}/index.html#function-ripple-theme) and accepts the parameters, required to customize the ripple as desired.

```scss
$custom-ripple-theme: ripple-theme(
  $color: #217346,
);
```

The next step is to pass the custom ripple theme:

```scss
@include css-vars($custom-ripple-theme);
```

> [!NOTE]
> A color that is set using the `igxRiple` directive, would take precedence from the one, set within a custom theme.

### Demo

<code-view style="height:200px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-styling" alt="Angular Ripple Example">
</code-view>

## API References

<div class="divider--half"></div>

- [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
- [IgxRipple Styles]({environment:sassApiUrl}/index.html#function-ripple-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
