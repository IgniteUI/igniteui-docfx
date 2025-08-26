---
title: Angular Navbar Component – Ignite UI for Angular | Infragistics
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library, Angular NavBar component, Angular Navbar control, Angular Navigation Bar, Angular Navigation Bar component
---

# Angular Navbar Component Overview

The Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) is an application header component that informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.

## Angular Navbar Example

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar/" alt="Angular Navbar Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Navbar

To get started with the Ignite UI for Angular Navbar component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The first step is to import the `IgxNavbarModule` inside our **app.module.ts** file.

```typescript
// app.module.ts

import { IgxNavbarModule } from 'igniteui-angular';
// import { IgxNavbarModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxNavbarComponent` as a standalone dependency, or use the [`IGX_NAVBAR_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/navbar/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_NAVBAR_DIRECTIVES } from 'igniteui-angular';
// import { IGX_NAVBAR_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: '<igx-navbar title="Ignite UI for Angular"></igx-navbar>',
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_NAVBAR_DIRECTIVES],
  /* or imports: [IgxNavbarComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Navbar module or directives imported, you can start using the `igx-navbar` component.

## Using the Angular Navbar

Then in the template of our component we can add the following code to show a basic navbar with a title:

```html
<!--navbar.component.html-->

<igx-navbar title="Ignite UI for Angular"> </igx-navbar>
```

### Add Menu Button

In order to add a menu button, we will show the action button using the `actionButtonIcon` property, and make it use a menu icon as follows:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true"></igx-navbar>
```

> [!NOTE]
> The [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionButtonIcon) uses the Material fontset by design.

### Add Icon Buttons

We can make our app a little more functional by adding options for searching, favorites and more. To do that let's grab the [**IgxIconButton**](icon-button.md) and [**IgxIcon**](icon.md) modules and import them in our **app.module.ts** file.

```typescript
// app.module.ts

...
import { IgxNavbarModule, IgxIconButtonDirective, IgxIconModule } from 'igniteui-angular';
// import { IgxNavbarModule, IgxButtonModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxIconButtonDirective, IgxIconModule],
})
export class AppModule {}
```

Next, we need to update our template with an icon button for each of the options we want our app to provide:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App">
  <button igxIconButton="flat">
    <igx-icon>search</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>favorite</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-navbar>
```

If all went well, you should see the following in your browser:

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-1/" >
</code-view>

<div class="divider--half"></div>

### Add Custom Action

What if we want to use a custom template for our app navigation on the left-most part of the navbar? We can easily achieve this by using the `igx-navbar-action` directive, which will render the content we have provided. We will do that by using a button with the Font Awesome home icon.

```css
/* navbar.component.css */

@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");
```

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App">
  <igx-navbar-action>
    <button igxIconButton="flat">
      <igx-icon family="fa" name="fa-home"></igx-icon>
    </button>
  </igx-navbar-action>

  <button igxIconButton="flat">
    <igx-icon>search</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>favorite</igx-icon>
  </button>
  <button igxIconButton="flat">
    <igx-icon>more_vert</igx-icon>
  </button>
</igx-navbar>
```

Finally, this is how our navbar should look like with its custom action button icon:

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-2/" >
</code-view>

<div class="divider--half"></div>

### Add Navigation Icon

If we want to create a navbar with an icon navigating back, we should follow a couple of steps. First, we can use the `actionButtonIcon` property to choose a suitable icon from the Material fontset. Then, we can make a simple check if there are any previously visited pages to go back to, and pass the result to the [`isActionButtonVisible`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#isActionButtonVisible) property. The last step is to create a method for navigating back and hook it to the [`action`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#action) property.

```html
<!--navbar.component.html-->

<igx-navbar
  title="Ignite UI for Angular"
  actionButtonIcon="arrow_back"
  [isActionButtonVisible]="canGoBack()"
  (action)="navigateBack()"
>
</igx-navbar>
```

```typescript
export class NavbarSample3Component {
  constructor(private _location: Location) {}

  public ngOnInit() {}

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
    return window.history.length > 0;
  }
}
```

If the sample is configured properly, you should see the following in your browser:

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-3/" >
</code-view>

> [!NOTE]
> If [`igx-navbar-action`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) or [`igxNavbarAction`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) is provided, the default [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionButtonIcon) will not be used.

<div class="divider--half"></div>

### Add Custom Title

If we want to provide a custom content for a navbar's title, we can achieve this by using `igx-navbar-title` or `igxNavbarTitle` directive. They will replace the default navbar's title provided by `title` input property. The sample below has a custom title containing a link with an image:

```html
<!--navbar.component.html-->

<div class="sample-column">
  <igx-navbar>
    <igx-navbar-action>
      <button igxIconButton="flat">
        <igx-icon>menu</igx-icon>
      </button>
    </igx-navbar-action>

    <div igxNavbarTitle>
      <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
        <img
          src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
          width="120px"
          height="50px"
          alt
          style="margin-top: 7px;"
        />
      </a>
    </div>

    <button igxIconButton="flat">
      <igx-icon>search</igx-icon>
    </button>
    <button igxIconButton="flat">
      <igx-icon>favorite</igx-icon>
    </button>
    <button igxIconButton="flat">
      <igx-icon>more_vert</igx-icon>
    </button>
  </igx-navbar>
</div>
```

> [!NOTE]
> If [`igx-navbar-title`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) or [`igxNavbarTitle`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) is provided, the default [`title`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#title) will not be used.

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-custom-title/" >
</code-view>

<div class="divider--half"></div>

## Styling

To get started with styling the navbar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`navbar-theme`]({environment:sassApiUrl}/index.html#function-navbar-theme) and provide just the `$background` and `$idle-icon-color` parameters. The theme will automatically compute all of the necessary background and foreground colors for various interaction states. If need, you can also manually override specific properties for finer control over the appearance.

```scss
$custom-navbar-theme: navbar-theme(
  $background: #011627,
  $idle-icon-color: #ecaa53,
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to pass the newly created theme to the `css-vars` mixin:

```scss
@include css-vars($custom-navbar-theme);
```

### Demo

<code-view style="height: 150px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-style/" >
</code-view>

<div class="divider--half"></div>

### Styling with Tailwind

You can style the navbar using our custom Tailwind utility classes, which apply the appropriate theme for you. To do this, simply add the corresponding class to your `igx-navbar`. Be sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Each component styling utility class begins with the schema name as a prefix, choose from `material`, `fluent`, `bootstrap`, or `indigo` for light themes, or `dark-material`, `dark-fluent`, and so on for dark themes. This sets the schema for your custom theme.

The value inside square brackets defines the color and can be any valid CSS color format, such as a HEX code, CSS variable, RGB, etc.

You can also override any other CSS variable using `arbitrary properties`, as shown below for the `text-color` variable:

```html
<igx-navbar class="!material-navbar-background-[#7B9E89] ![--text-color:#121E17]" title="Sample App">
  ...
</igx-navbar>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your navbar should look like this:

<div class="sample-container loading" style="height:120px">
    <iframe id="navbar-tailwind-style-iframe" data-src='{environment:demosBaseUrl}/menus/navbar-tailwind-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## API References

<div class="divider--half"></div>

* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxNavbarActionDirective]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html)
* [IgxNavbarTitleDirective]({environment:angularApiUrl}/classes/igxnavbartitledirective.html)
* [IgxNavbarComponent Styles]({environment:sassApiUrl}/index.html#function-navbar-theme)

Additional components and/or directives with relative APIs that were used:

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-icon-theme)

## Theming Dependencies

* [IgxIconComponent Theme]({environment:sassApiUrl}/index.html#function-icon-theme)
* [IgxButtonComponent Theme]({environment:sassApiUrl}/index.html#function-button-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
