---
title: Navbar Component
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular NavBar component, Angular Navbar control
---

## Navbar
<p class="highlight">The Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.</p>
<div class="divider"></div>

### Navbar Demo
<div class="sample-container loading" style="height: 530px">
    <iframe id="nav-bar-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/menus/navbar" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To get started with the Navbar component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxNavbarModule` in our **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxNavbarModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxNavbarModule],
    ...
})
export class AppModule {}
```

Then in the template of our component we can add the following code to show a basic navbar with a title only:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App">
</igx-navbar>
```

#### With menu button
Good, we know which application we have opened. Now, let's see what capabilities it offers us by exploring its menu. To achieve this we will show the action button and make it use a menu icon as follows:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
</igx-navbar>
```

> [!NOTE]
> The [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) uses the Material fontset by design.

#### Adding Icons

Now that our app has its menu in place, we can make it a little more functional by adding options for searching, favorites and more. To do that let's grab the [**IgxIcon**](icon.md) module and import it in our **app.module.ts** file.
```typescript
// app.module.ts

...
import {
    IgxNavbarModule,
    IgxIconModule
} from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxIconModule],
})
export class AppModule {}
```

Next, we need to update our template with an icon for each of the options we want our app to provide:

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>
</igx-navbar>
```

If all went well, you should see the following in your browser:
<div class="sample-container loading" style="height: 330px">
    <iframe id="nav-bar-sample-1-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-1' class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

#### Custom action icon

What if we want to use a custom action icon for our app navigation instead of the default one that is on the left-most part of the navbar?
We can easily achieve this by using the [`igx-action-icon`]({environment:angularApiUrl}/classes/igxactionicondirective.html) directive, which will replace the default action icon with the content we have provided. We will do that by using the Font Awesome home icon in combination with a style for it.

```css
/* navbar.component.css */

@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fontawesome.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-regular.css");
@import url("https://unpkg.com/@fortawesome/fontawesome-free-webfonts@^1.0.9/css/fa-solid.css");

.customIcon {
    vertical-align: middle;
}
```

```html
<!--navbar.component.html-->

 <igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
    <igx-icon>search</igx-icon>
    <igx-icon>favorite</igx-icon>
    <igx-icon>more_vert</igx-icon>

    <igx-action-icon>
        <igx-icon class="customIcon" fontSet="fa" name="fa-home"></igx-icon>
    </igx-action-icon>
</igx-navbar>
```

Finally, this is how our navbar should look like with its custom action icon:

<div class="sample-container loading" style="height: 330px">
    <iframe id="nav-bar-sample-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-sample-2' class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> If [`igx-action-icon`]({environment:angularApiUrl}/classes/igxactionicondirective.html) is provided, the default [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) will not be used. 

### Styling

To get started with styling the navbar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-navbar-theme`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme) and accepts the `$text-color`, `$background`, `$idle-icon-color` and the `$hover-icon-color` parameters.

```scss
$dark-navbar: igx-navbar-theme(
    $text-color: #FFCD0F,
    $background: #292826,
    $idle-icon-color: #FFCD0F,
    $hover-icon-color: gray
);
```

The last step is to **include** the newly created theme.

```scss
@include igx-navbar($dark-navbar);
```

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include igx-navbar($dark-navbar);
    }
}
```

#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette.

```scss
$dark-navbar: igx-navbar-theme(
    $text-color: igx-color($dark-palette, "secondary", 400),
    $background: igx-color($dark-palette, "primary", 400),
    $idle-icon-color: igx-color($dark-palette, "secondary", 400),
    $hover-icon-color: gray
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`dark-navbar`]({environment:sassApiUrl}/index.html#variable-_dark-navbar) schema:

```scss
 // Extending the dark navbar schema.
 $dark-navbar-schema: extend($_dark-navbar,
    (
        text-color: (
            igx-color: ("secondary", 400)
        ),
        background: (
            igx-color: ("primary", 400)
        ),
        idle-icon-color:(
            igx-color: ("secondary", 400)
        ),
        hover-icon-color: gray
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-navbar: $dark-navbar-schema
));

// Defining navbar-theme with the global dark schema
$dark-navbar: igx-navbar-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 150px">
    <iframe id="nav-bar-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src='{environment:demosBaseUrl}/menus/navbar-style' class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="nav-bar-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### API References

In this article we show a few scenarios where the navbar component may come in handy. The APIs, we used to achieve them, are listed in the links below.

* [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [`IgxActionIconDirective`]({environment:angularApiUrl}/classes/igxactionicondirective.html)

Additional components and/or directives with relative APIs that were used:

* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)

Styles:

* [`IgxNavbarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
