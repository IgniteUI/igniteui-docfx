---
title: Theming Demo
_description: Ignite UI for Angular uses SASS functions and mixins to give you the ability of styling easily your entire application or only specific parts of it with only a couple of steps. 
_keywords: Ignite UI for Angular, Angular Theming Component, Angular Theming, Ignite UI for Angular Components, Ignite for Agular Themes
---

## Theming Demo
The **Ignite UI for Angular Theming** provides you the ability to customize themes for your application by setting them globally, in order to beautify all non-custom-styled elements, or applying them severally to the components you want to differentiate.
<div class="divider"></div>

### Demo
<div class="sample-container" style="height: 650px">
    <iframe id="theme-chooser-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/theme-chooser" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="theme-chooser-iframe" data-demos-base-url="{environment:demosBaseUrl}"> view on stackblitz
    </button>
</div>
<div class="divider--half"></div>


### Default Theme

The first step is to set the global theme for the application. There is a **default theme** that styles all the components in the **Ignite UI for Angular cotrols** and now we are going to set it in the  `styles.scss` file:

```scss
// styles.scss

// import first the IgniteUI themes library
@import "~igniteui-angular/lib/core/styles/themes/index";

// NEVER FORGET to include the igx-core first!
@include igx-core();
// the default color palette is passed to the global theme
@include igx-theme($default-palette);
```

The result from the above code snippet looks like this:

<div class="divider--half"></div>
<div class="sample-container" style="height: 650px">
    <iframe id="default-theme-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/default-theme-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="default-theme-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}"> view on stackblitz
    </button>
</div>
<div class="divider--half"></div>

In case you have other preferences for the appearance of the components or the **default theme** doesn't match the interior of your application, rather than writing huge amount of CSS files, you can use the  **Ignite UI for Angular Theming** which is much easier, fun and efficient way for styling. 

### Get Started 

To get started, first you have to import the the *theme utilities* where the **SASS functions and mixins** are nested.
For good code structure it will be helpful to place the **theme logic** in separate directory:

```scss
// styles/dark-theme.scss

@import '~igniteui-angular/lib/core/styles/themes/utilities';

...

```
<div class="divider--half"></div>

The next step is to import all the components, that you want to customize, and their corresponding themes.

Our app will have: 
- **Igx-Grid** with `paging` and **filtering**:

```scss
// styles/dark-theme.scss
...
// Import grid component and theme styles
@import '~igniteui-angular/lib/core/styles/components/grid/grid-component';
@import '~igniteui-angular/lib/core/styles//components/grid/grid-theme';

// Import grid-paginator component and theme styles
@import '~igniteui-angular/lib/core/styles//components/grid-paginator/grid-paginator-component';
@import '~igniteui-angular/lib/core/styles//components/grid-paginator/grid-paginator-theme';

// Import grid-filtering component and theme styles
@import '~igniteui-angular/lib/core/styles//components/grid-filtering/grid-filtering-component';
@import '~igniteui-angular/lib/core/styles//components/grid-filtering/grid-filtering-theme';
...
```    
- **Igx-Dialog** with embedded `IgxInputGroupComponent`:

```scss
// styles/dark-theme.scss
...
// Import dialog-group component and theme styles
@import '~igniteui-angular/lib/core/styles//components/dialog/dialog-component';
@import '~igniteui-angular/lib/core/styles//components/dialog/dialog-theme';

// Import input-group component and theme styles
@import '~igniteui-angular/lib/core/styles//components/input/input-group-component';
@import '~igniteui-angular/lib/core/styles//components/input/input-group-theme';
...
```
- **Igx-Snackbar**

```scss
// styles/dark-theme.scss
...
// Import grid snackbar and theme styles
@import '~igniteui-angular/lib/core/styles//components/snackbar/snackbar-component';
@import '~igniteui-angular/lib/core/styles//components/snackbar/snackbar-theme';
...
```

- **Igx-Button** and **Igx-Button-Group**

```scss
// styles/dark-theme.scss
...
// Import button component and theme styles
@import '~igniteui-angular/lib/core/styles//components/button/button-component';
@import '~igniteui-angular/lib/core/styles//components/button/button-theme';

// Import button-group component and theme styles
@import '~igniteui-angular/lib/core/styles//components/button-group/button-group-component';
@import '~igniteui-angular/lib/core/styles//components/button-group/button-group-theme';
...
```

Now we have all the **functions** and **mixins** that are necessary for **theming** our components, we just need to define the **color palettes** that we are going to use:

```scss
// Define the primary color
$dark-color: #282828;

// Define the secondary color
$orange-color: #FFA500;

// Define the palette:
$dark-theme-palette: igx-palette($primary: $dark-color, $secondary: $orange-color);
```

Done!! We are now ready to set the new styling of our app.
<div class="divider--half"></div>

### Theme Setting

The **theme setting** is basically applying different shades of the primary and secondary colors to various component parts. In the [**Ignite UI for Angular Themes**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/) documentation you can find the information the component parts that can be styled.
So, now after we know that, lets get started with the demonstration:

#### Defining Themes
<div class="divider--half"></div>

- [**Igx-Grid-Theme**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/#function-igx-grid-theme)
```scss
// styles/dark-theme.scss
...
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
...
```

- [**Igx-Dialog-Theme**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/#themes-function-igx-dialog-theme)
```scss
// styles/dark-theme.scss
...
// Define dark theme for the dialog
$dark-dialog-theme: igx-dialog-theme(
  $palette: $dark-theme-palette,
  $background: igx-color($dark-theme-palette, "primary", 100),
  $title-color: igx-color($dark-theme-palette, "secondary", 500),
  $message-color: igx-color($dark-theme-palette, "secondary", 600)
);
...
```

- [**Igx-Input-Group-Theme**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/#themes-function-igx-input-group-theme)
```scss
// styles/dark-theme.scss
...
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
...
```

- [**Igx-Snackbar-Theme**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/#themes-function-igx-snackbar-theme)
```scss
// styles/dark-theme.scss
...
// Define dark theme for the snackbar
$dark-snackbar-theme: igx-snackbar-theme(
  $palette: $dark-theme-palette,
  $background: igx-color($dark-theme-palette, "primary", 100),
  $text-color: igx-color($dark-theme-palette, "secondary", 500)
);
...
```

- [**Igx-Button-Group-Theme**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/#themes-function-igx-button-group-theme)
```scss
// styles/dark-theme.scss
...
// Define dark theme for the button-group
$dark-button-group: igx-button-group-theme(
  $palette: $dark-theme-palette,
  $item-text-color: igx-color($dark-theme-palette, "primary", 500),
  $item-background: igx-color($dark-theme-palette, "secondary", 500),
  $item-selected-background: igx-color($dark-theme-palette, "primary", 200),
  $item-selected-text-color: igx-color($dark-theme-palette, "secondary", 500)
);
...
```

- [**Igx-Button-Theme**](https://staging.infragistics.local/products/ignite-ui-angular/docs/sass/#themes-function-igx-button-theme)
```scss
// styles/dark-theme.scss
...
// Define dark theme for the button
$dark-button-theme: igx-button-theme(
  $palette: $dark-theme-palette,
  $icon-color: igx-color($dark-theme-palette, "secondary", 700),
  $icon-hover-color: igx-color($dark-theme-palette, "primary", 500),
  $icon-hover-background: igx-color($dark-theme-palette, "secondary", 500),
  $icon-focus-color: igx-color($dark-theme-palette, "primary", 500),
  $icon-focus-background: igx-color($dark-theme-palette, "secondary", 500),
  $flat-hover-background: igx-color($dark-theme-palette, "primary", 500),
  $flat-text-color: igx-color($dark-theme-palette, "secondary", 700)
);
...
```

That's it! 

We have now made a theme for each component in our app. The last step is just to apply it.

#### Applying Theme
Wrap the components with an element.
```html
<div class = "dark-theme">
    <!-- Put the components inside the wrapper element -->
</div>
```
<div class="divider--half"></div>

After that, in a new SCSS file set the wrapper element `class` to include the components with their themes.

```scss
// styles/dark-themes-class.scss
@import 'dark-theme';

:host {
    display: block;
    margin: 16px;
    box-shadow: igx-elevation($elevations, 12);

    .dark-theme {
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

<div class="divider--half"></div>
<div class="sample-container" style="height: 650px">
    <iframe id="dark-theme-sample-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/dark-theme-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="dark-theme-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}"> view on stackblitz
    </button>
</div>
<div class="divider--half"></div>

Import the mixins and functions, define the colors, define the themes and apply them. These are the small steps for styling your app with **Ignite UI for Angular Theming**. 

### Theme Chooser
In the above sample we set only one theme per component.

If we want to define more themes for a single **Ignite UI for Angular control** with the idea of changing them, we can add a **theme chooser**.
This can be achieved with few modifications:
- Create a file and define the classes, which will include the themes:

```scss
// // styles/themes-classes.scss
@import 'themes';

:host {
    display: block;
    margin: 16px;
    box-shadow: igx-elevation($elevations, 12); 

  //Set the light themes for the components. 
    .light-theme {
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

    //Set the dark themes for the components.
    .dark-theme {
      background: $dark-color;
      ::ng-deep {   
        @include igx-grid($dark-grid);
        @include igx-snackbar($dark-snackbar);
        @include igx-input-group($dark-input-group);
        @include igx-grid-paginator($dark-grid-paginator);
        @include igx-button($dark-button);
        @include igx-dialog($dark-dialog);
        @include igx-grid-filtering($dark-grid-filtering);
        @include igx-button-group($dark-button-group); 
      }
    }
    
     //Set the black themes for the components.
    .black-theme {
      background: $black-color;
      ::ng-deep {    
        @include igx-grid($black-grid);
        @include igx-snackbar($black-snackbar);
        @include igx-input-group($black-input-group);
        @include igx-grid-paginator($black-grid-paginator);
        @include igx-button($black-button);
        @include igx-dialog($black-dialog);
        @include igx-grid-filtering($black-grid-filtering);
        @include igx-button-group($black-button-group); 
      }
    }
  }
```

<div class="divider--half"></div>

- Set a variable that will reference the wrapper class selector and set an event which triggers the function that manipulates the `class` reference:

```html
<div [class] = "wrapper">
...
<!-- Adding igxButton that triggers a dropdown with the theme options -->
<div class = "grid_wrapper" igxOverlayOutlet #outlet>
    <div class="grid-options" igxLayout igxLayoutDir="row" igxLayoutWrap="wrap">
        <button igxButton="raised" class="addProdBtn" (click)="openDialog()">Add New Product</button>
        <button class="drop-down-button" igxButton="raised" (click)="toggleDropDown($event, dropdown)">Themes</button>
        <igx-drop-down #dropdown class="theme-chooser">                                             
            <igx-drop-down-item class="light-theme-option" [igxDropDownItemNavigation]="dropdown" (click)="selectTheme(THEME.LIGHT)">
            </igx-drop-down-item>
            <igx-drop-down-item class="dark-theme-option" [igxDropDownItemNavigation]="dropdown" (click)="selectTheme(THEME.DARK)">
            </igx-drop-down-item>
            <igx-drop-down-item class="black-theme-option" [igxDropDownItemNavigation]="dropdown" (click)="selectTheme(THEME.BLACK)">
            </igx-drop-down-item>
        </igx-drop-down>
    </div>
...
</div>
```

<div class="divider--half"></div>

Add data that will represent the **themes classes** and a function to manipulate the `class` reference.

```typescript
    ...
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
    // Provide a reference to the wrapper class with a default value
    public wrapper = THEME.LIGHT;
    ...
    // Provide a function that manipulates the the wrapper class reference
    public selectTheme(theme: THEME) {
        this.wrapper = theme;
    }
    ...

```
<div class="divider--half"></div>

Now we can easily change our defined themes with only a `click` event:

<div class="sample-container" style="height: 650px">
    <iframe id="theme-chooser-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/theme-chooser" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="theme-chooser-iframe" data-demos-base-url="{environment:demosBaseUrl}"> view on stackblitz
    </button>
</div>

### Additional Resources
<div class="divider--half"></div>

* [Global Theme](global-theme.md)
* [Component Themes](component-themes.md)
* [Color Palette](palette.md)
* [Grid](grid.md)
* [Paging](grid_paging.md)
* [Filtering](grid_filtering.md)
* [Dialog](dialog.md)
* [Input Group](input_group.md)
* [Snackbar](snackbar.md)
* [Button](button.md)
* [Button Group](button_group.md)