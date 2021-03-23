---
title: Theming Examples
_description: Ignite UI for Angular uses SASS functions and mixins to give you the ability of styling easily your entire application or only specific parts of it with only a couple of steps.
_keywords: Ignite UI for Angular, Angular Theming Component, Angular Theming, Ignite UI for Angular Components, Ignite for Angular Themes, Global Theme, Component Theme
_language: kr
---

## Theming Examples
The **Ignite UI for Angular Theming** provides you the ability to customize themes for your application by setting them globally, in order to beautify all non-custom-styled elements, or applying them severally to the components you want to differentiate.

### Demos

<code-view style="height: 650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/theme-chooser" >
</code-view>

<div class="divider--half"></div>


### Default Theme

There is a **default theme** that styles all the components in the **Ignite UI for Angular controls** and the first thing that we are going to do is to set it in the `styles.scss` file:

```scss
// import first the IgniteUI themes library
@import "~igniteui-angular/lib/core/styles/themes/index";

// Don't forget to include the igx-core first
@include igx-core();

// the default color palette is passed to the global theme
@include igx-theme($default-palette);
```

The result from the above code snippet looks like this:


<code-view style="height: 650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/default-theme-sample" >
</code-view>

<div class="divider--half"></div>

In case you have other preferences for the appearance of the components or the **default theme** doesn't match the interior of your application, you can use the  **Ignite UI for Angular Theming**, which is much easier, fun and efficient way for styling, than writing a huge amount of CSS.

### Get Started

To get started, you have to import the *theme utilities*, where the **SASS functions and mixins** are nested.
For good code structure it will be helpful to place the **theme logic** in a separate directory:

```scss
// styles/dark-theme.scss

@import '~igniteui-angular/lib/core/styles/themes/utilities';

```
<div class="divider--half"></div>

The next step is to import all the components, that you want to customize, and their corresponding themes.

Our app will have:
- [**Igx-Grid**](../grid/grid.md) with [**paging**](../grid/paging.md) and [**filtering**](../grid/filtering.md):

```scss
// Import grid component and theme styles
@import '~igniteui-angular/lib/core/styles/components/grid/grid-component';
@import '~igniteui-angular/lib/core/styles/components/grid/grid-theme';

// Import grid-paginator component and theme styles
@import '~igniteui-angular/lib/core/styles/components/grid-paginator/grid-paginator-component';
@import '~igniteui-angular/lib/core/styles/components/grid-paginator/grid-paginator-theme';

```
- [**Igx-Dialog**](../dialog.md) with embedded [**Igx-Input-Group**](../input-group.md):

```scss

// Import dialog-group component and theme styles
@import '~igniteui-angular/lib/core/styles/components/dialog/dialog-component';
@import '~igniteui-angular/lib/core/styles/components/dialog/dialog-theme';

// Import input-group component and theme styles
@import '~igniteui-angular/lib/core/styles/components/input/input-group-component';
@import '~igniteui-angular/lib/core/styles/components/input/input-group-theme';

```

Now we have all the functionality, necessary for **theming** our components, we just need to define the **color palettes** that we are going to use:

```scss
// Define the primary color
$dark-color: #282828;

// Define the secondary color
$orange-color: #FFA500;

// Define the palette:
$dark-theme-palette: igx-palette($primary: $dark-color, $secondary: $orange-color);
```

Done! We are ready to set the new styling of our app.
<div class="divider--half"></div>

### Theme Setting

The **theme setting** is basically applying different shades of the primary and secondary colors to various component parts. In the [**Ignite UI for Angular Themes**]({environment:sassApiUrl}) documentation you can find out which component parts can be styled.

Now lets define the **component themes** that we are going to apply:

#### Defining Component Themes
<div class="divider--half"></div>

- [**Igx-Grid-Theme**]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

```scss
// Define dark theme for the dialog
$dark-grid-theme: igx-grid-theme(
  $palette: $dark-theme-palette,
  $content-background: igx-color($dark-theme-palette, "secondary", 100),
  $header-background: igx-color($dark-theme-palette, "primary", 500),
  $header-text-color: igx-color($dark-theme-palette, "secondary", 600),
  $cell-selected-background: igx-color($dark-theme-palette, "secondary", 600),
  $cell-selected-text-color: igx-color($dark-theme-palette, "primary", 600),
  $row-hover-background: igx-color($dark-theme-palette, "primary", 100),
  $header-border-color: igx-color($dark-theme-palette, "primary", 600)
);
```

- [**Igx-Dialog-Theme**]({environment:sassApiUrl}/index.html#function-igx-dialog-theme)

```scss

// Define dark theme for the dialog
$dark-dialog-theme: igx-dialog-theme(
  $palette: $dark-theme-palette,
  $background: igx-color($dark-theme-palette, "primary", 100),
  $title-color: igx-color($dark-theme-palette, "secondary", 500),
  $message-color: igx-color($dark-theme-palette, "secondary", 600)
);

```

- [**Igx-Input-Group-Theme**]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

```scss
// Define dark theme for the input-group
$dark-input-group-theme: igx-input-group-theme(
  $palette: $dark-theme-palette,
  $box-background:  igx-color($dark-theme-palette, "primary", 100),
  $disabled-border-color: igx-color($dark-theme-palette, "primary", 500),
  $box-disabled-background: igx-color($dark-theme-palette, "secondary", 100),
  $hover-bottom-line-color: igx-color($dark-theme-palette, "secondary", 700),
  $focused-bottom-line-color: igx-color($dark-theme-palette, "secondary", 700),
  $focused-text-color: igx-color($dark-theme-palette, "secondary", 500),
  $idle-text-color: igx-color($dark-theme-palette, "secondary", 700)
);
```

That's it!

We have now made a theme for each component in our app. The last step is just to apply it.

#### Applying Component Themes
Bind the host element `class` with the **themes class**.

```typescript
@HostBinding("class")
public themesClass = "dark-theme";
```
<div class="divider--half"></div>

After that, in a new SCSS file nest the **themes class**, that includes the components with their themes, in the host element.

```scss
// styles/dark-themes-class.scss
@import 'dark-theme';

:host {
    display: block;
    margin: 16px;
    box-shadow: igx-elevation($elevations, 12);

    &.dark-theme {
      background: $dark-color;
        ::ng-deep {
          @include igx-grid($dark-grid-theme);
          @include igx-snackbar($dark-snackbar-theme);
          @include igx-input-group($dark-input-group-theme);
          @include igx-grid-paginator($dark-grid-paginator-theme);
          @include igx-button($dark-button-theme);
          @include igx-dialog($dark-dialog-theme);
          @include igx-grid-filtering($dark-grid-filtering-theme);
          @include igx-button-group($dark-button-group-theme);
      }
    }
}
```
And the result is:


<code-view style="height: 650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/dark-theme-sample" >
</code-view>

<div class="divider--half"></div>

Import the *utilities*, component mixins and the theme functions, define the colors, define the themes and apply them. These are the steps for styling your app with **Ignite UI for Angular Theming**.

### Theme Chooser
In the above sample we set only one theme per component.

If we want to define more themes for a single **Ignite UI for Angular Component**, with the idea of changing them, we can add a **theme chooser**.

This can be achieved in a few modifications:
- Create a SCSS file and define the classes, which will include the themes:

```scss
// styles/themes-classes.scss
@import 'themes';

:host {
    display: block;
    margin: 16px;
    box-shadow: igx-elevation($elevations, 12);

    // Set the light themes for the components.
    &.light-theme {
      background: $light-color;
      ::ng-deep {
        @include igx-grid($light-grid);
        @include igx-snackbar($light-snackbar);
        @include igx-input-group($light-input-group);
        @include igx-grid-paginator($light-grid-paginator);
        @include igx-button($light-button);
        @include igx-dialog($light-dialog);
        @include igx-grid-filtering($light-grid-filtering);
        @include igx-button-group($light-button-group);
      }
    }
    ...
  }
```

<div class="divider--half"></div>

- Set an event, which triggers the function that manipulates the `class` of the host element:

```html
<!-- Adding igxButton that triggers a dropdown with the theme options -->
<div class = "grid_wrapper" igxOverlayOutlet #outlet>
    <div class="grid-options" igxLayout igxLayoutDir="row" igxLayoutWrap="wrap">
        <button igxButton="raised" class="addProdBtn" (click)="openDialog()">Add New Product</button>
        <button class="drop-down-button" igxButton="raised" (click)="toggleDropDown($event, dropdown)" [igxDropDownItemNavigation]="dropdown">Themes</button>
        <igx-drop-down #dropdown class="theme-chooser">
            <igx-drop-down-item class="light-theme-option" (click)="selectTheme(THEME.LIGHT)">
            </igx-drop-down-item>
            <igx-drop-down-item class="dark-theme-option" (click)="selectTheme(THEME.DARK)">
            </igx-drop-down-item>
            <igx-drop-down-item class="black-theme-option" (click)="selectTheme(THEME.BLACK)">
            </igx-drop-down-item>
        </igx-drop-down>
    </div>
...
</div>
```

<div class="divider--half"></div>

Add data that will represent the **themes classes** and a function to manipulate the `class` selector of the host element.

```typescript

// Enumeration that will represent the themes classes

export enum THEME {
    LIGHT = "light-theme",
    DARK = "dark-theme",
    BLACK = "black-theme"
}

@Component({
    selector: "app-theme-chooser-sample",
    styleUrls: ["./theme-chooser-sample.component.scss"],
    templateUrl: "./theme-chooser-sample.component.html"
})
export class ThemeChooserSampleComponent implements OnInit {
    // Provide a reference to the themes classes
    public THEME: typeof THEME = THEME;
    // Bind the host element class with the themes class and set a default value
    @HostBinding("class")
    public themesClass: THEME = THEME.LIGHT;
    ...
    // Provide a function that manipulates the the class reference
    public selectTheme(theme: THEME) {
        this.themesClass = theme;
    }
    ...

```
<div class="divider--half"></div>

Now we can easily change our defined themes with only a `click` event:


<code-view style="height: 650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/theme-chooser" >
</code-view>

<div class="divider--half"></div>

### API

* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [IgxGrid Filtering Styles]({environment:sassApiUrl}/index.html#function-igx-grid-filtering-theme)
* [IgxGrid Paginator Styles]({environment:sassApiUrl}/index.html#function-igx-grid-paginator-theme)
* [IgxDialogComponent Styles]({environment:sassApiUrl}/index.html#function-igx-dialog-theme)
* [IgxInputGroupComponent Styles]({environment:sassApiUrl}/index.html#function-igx-input-group-theme) 
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)

### Additional Resources
<div class="divider--half"></div>

* [Global Theme](global-theme.md)
* [Component Themes](component-themes.md)
* [Color Palette](palette.md)
* [Grid](../grid/grid.md)
* [Grid Paging](../grid/paging.md)
* [Grid Filtering](../grid/filtering.md)
* [Dialog](../dialog.md)
* [Input Group](../input-group.md)
* [Snackbar](../snackbar.md)
* [Button](../button.md)
* [Button Group](../button-group.md)