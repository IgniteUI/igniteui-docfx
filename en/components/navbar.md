---
title: Navbar Component
_description: Ignite UI for Angular Navbar control provides optimal UI experience with seamless integration to allow users to move within an application smoothly.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular NavBar component, Angular Navbar control
---

# Navbar
<p class="highlight">The Ignite UI for Angular [`IgxNavbarComponent`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html) informs the user of their current position in an app, and helps them move back (much like the “back” button in a browser). The Navigation Bar can also provide links to quick actions such as search or favorite, helping users navigate smoothly through an application without trying to move to invalid routes or states. The bar sits at the top of the container it is placed in.</p>


## Angular Navbar Example

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar" alt="Angular Navbar Example">
</code-view>

<div class="divider--half"></div>

## Usage

To get started with the Navbar component, first you need to import the `IgxNavbarModule` in our **app.module.ts** file:

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

<igx-navbar title="Ignite UI for Angular">
</igx-navbar>
```

## Examples

### Add Menu Button

In order to add a menu button, we will show the action button using the `actionButtonIcon` property, and make it use a menu icon as follows:

```html
<!--navbar.component.html-->

<igx-navbar title="Sample App" actionButtonIcon="menu" [isActionButtonVisible]="true">
</igx-navbar>
```

> [!NOTE]
> The [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) uses the Material fontset by design.

### Add Icons

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

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-1" >
</code-view>

<div class="divider--half"></div>

### Add Custom Action Icon

What if we want to use a custom action icon for our app navigation instead of the default one that is on the left-most part of the navbar? We can easily achieve this by using the `igx-navbar-action` directive, which will replace the default action icon with the content we have provided. We will do that by using the Font Awesome home icon in combination with a style for it.

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

    <igx-navbar-action>
        <igx-icon class="customIcon" fontSet="fa" name="fa-home"></igx-icon>
    </igx-navbar-action>
</igx-navbar>
```

> [!NOTE]
> If [`igx-navbar-action`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) or [`igxNavbarAction`]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html) is provided, the default [`actionButtonIcon`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#actionbuttonicon) will not be used.

Finally, this is how our navbar should look like with its custom action icon:


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-2" >
</code-view>

<div class="divider--half"></div>

### Add Navigation Icon

If we want to create a navbar with an icon navigating back, we should follow a couple of steps. First, we can use the `actionButtonIcon` property to choose a suitable icon from the Material fontset. Then, we can make a simple check if there are any previously visited pages to go back to, and pass the result to the  [`isActionButtonVisible`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#isactionbuttonvisible) property. The last step is to create a method for navigating back and hook it to the [`action`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#action) property.

```html
<!--navbar.component.html-->

<igx-navbar title="Ignite UI for Angular"
    actionButtonIcon="arrow_back"
    [isActionButtonVisible]="canGoBack()"
    (action)="navigateBack()">
</igx-navbar>
```

```typescript
export class NavbarSample3Component {

  constructor(private _location: Location) { }

  public ngOnInit() {  }

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
           iframe-src="{environment:demosBaseUrl}/menus/navbar-sample-3" >
</code-view>

<div class="divider--half"></div>

### Add Custom Title

If we want to provide a custom content for a navbar's title, we can achieve this by using `igx-navbar-title` or `igxNavbarTitle` directive. They will replace the default navbar's title provided by `title` input property. The sample below has a custom title containing a link with an image:

```html
<!--navbar.component.html-->

<div class="sample-column">
    <igx-navbar actionButtonIcon="menu" [isActionButtonVisible]="true">
        <div igxNavbarTitle>
            <a href="https://www.infragistics.com/products/ignite-ui-angular" target="_blank">
                <img src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg"
                     width="120px" height="50px" alt style="margin-top: 7px;">
            </a>
        </div>

        <igx-icon>search</igx-icon>
        <igx-icon>favorite</igx-icon>
        <igx-icon>more_vert</igx-icon>
    </igx-navbar>
</div>
```

> [!NOTE]
> If [`igx-navbar-title`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) or [`igxNavbarTitle`]({environment:angularApiUrl}/classes/igxnavbartitledirective.html) is provided, the default [`title`]({environment:angularApiUrl}/classes/igxnavbarcomponent.html#title) will not be used.


<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-custom-title" >
</code-view>

<div class="divider--half"></div>

## Styling

To get started with styling the navbar, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`igx-navbar-theme`]({environment:sassApiUrl}/index.html#function-igx-navbar-theme) and accepts the `$text-color`, `$background`, `$idle-icon-color` and the `$hover-icon-color` parameters.

```scss
$custom-navbar-theme: igx-navbar-theme(
    $text-color: #151515,
    $background: #dedede,
    $idle-icon-color: #151515,
    $hover-icon-color: #8c8c8c
);
```

### Using CSS variables

The last step is to pass the newly created theme:

```scss
@include igx-css-vars($custom-navbar-theme);
```

### Using mixins

In order to style components for older browsers, like Internet Explorer 11, we have to use a different approach, since it doesn't support CSS variables.

If the component is using the [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. To prevent the custom theme to leak into other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom navbar theme to the `igx-navbar` mixin
        @include igx-navbar($custom-navbar-theme);
    }
}
```

### Using color palettes

Instead of hardcoding the color values, like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$white-color: #dedede;
$black-color: #151515;
$light-navbar-palette: igx-palette($primary: $white-color, $secondary: $black-color);
```

And then with `igx-color` we can easily retrieve color from the palette.

```scss
$custom-navbar-theme: igx-navbar-theme(
    $text-color: igx-color($light-navbar-palette, "secondary", 400),
    $background: igx-color($light-navbar-palette, "primary", 400),
    $idle-icon-color: igx-color($light-navbar-palette, "secondary", 400),
    $hover-icon-color: #8c8c8c
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to the [`Palettes`](themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using schemas

You can build a robust and flexible structure that benefits from [**schemas**](themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-navbar`]({environment:sassApiUrl}/index.html#variable-_light-navbar) schema:

```scss
 // Extending the navbar schema
 $light-navbar-schema: extend($_light-navbar,
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
        $hover-icon-color: #8c8c8c
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global light-schema
$custom-light-schema: extend($light-schema,(
    igx-navbar: $light-navbar-schema
));

// Defining navbar with the global light schema
$cutom-navbar-theme: igx-navbar-theme(
  $palette: $light-navbar-palette,
  $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo


<code-view style="height: 150px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/navbar-style" >
</code-view>

<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxNavbarComponent]({environment:angularApiUrl}/classes/igxnavbarcomponent.html)
* [IgxNavbarActionDirective]({environment:angularApiUrl}/classes/igxnavbaractiondirective.html)
* [IgxNavbarTitleDirective]({environment:angularApiUrl}/classes/igxnavbartitledirective.html)
* [IgxNavbarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-navbar-theme)

Additional components and/or directives with relative APIs that were used:

* [IgxIconComponent]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent Styles]({environment:sassApiUrl}/index.html#function-igx-icon-theme)

## Theming Dependencies
* [IgxIconComponent Theme]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [IgxButtonComponent Theme]({environment:sassApiUrl}/index.html#function-igx-button-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
