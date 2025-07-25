---
title: Angular Splitter Component | Split Panes |  Ignite UI for Angular | Infragistics
_description: Use the Angular Splitter component to create a simple split layout splitting the view horizontally or vertically into multiple collapsible split panes.
_keywords: angular splitter, angular splitter component, angular split view component, angular ui components, igniteui for angular, infragistics
---

# Angular Splitter Component Overview

The Ignite UI for Angular Splitter component provides the ability to create layouts, split into multiple vertically or horizontally arranged panes that may be resized, expanded and collapsed. These interactions are performed through UI exposed in the splitter bars between the panes. A simple Splitter layout is demonstrated in the demo below.

## Angular Splitter Example

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-horizontal-sample" alt="Angular Splitter Example">
</code-view>


<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Splitter

To get started with the Ignite UI for Angular Splitter component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxSplitterModule` in your **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxSplitterModule } from 'igniteui-angular';
// import { IgxSplitterModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxSplitterModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxSplitterComponent` as a standalone dependency, or use the [`IGX_SPLITTER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/splitter/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_SPLITTER_DIRECTIVES } from 'igniteui-angular';
// import { IGX_SPLITTER_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-splitter>
        <igx-splitter-pane>
            Pane 1
        </igx-splitter-pane>
        <igx-splitter-pane>
            Pane 2
        </igx-splitter-pane>
    </igx-splitter>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_SPLITTER_DIRECTIVES]
    /* or imports: [IgxSplitterComponent, IgxSplitterPaneComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Splitter module or directives imported, you can start using the `igx-splitter` component.

## Using the Angular Splitter

**igxSplitter** is initialized with the **igx-splitter** tag. Multiple splitter panes can be defined under a single **igx-splitter** component. The content of the pane is templatable and will be rendered in its own resizable container.

```html
<!-- splitter.component.html -->
<igx-splitter>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### Orientation

The splitter can be vertical or horizontal, which is defined by the [`type`]({environment:angularApiUrl}/classes/igxsplittercomponent.html#type) input. The default value is Vertical.
```typescript
public type = SplitterType.Horizontal;
```
```html
<igx-splitter [type]="type">
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### Collapsible Splitter

You can make the splitter collapsible or not by showing or hiding the splitter's handle and expanders, using the [`nonCollapsible`]({environment:angularApiUrl}/classes/igxsplittercomponent.html#nonCollapsible) input. The default value is false, so the splitter is collapsible.

```html
<igx-splitter [nonCollapsible]="true">
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-collapsible-sample" >
</code-view>

### Configuring panes

The **igxSplitterPane** component contains several input properties. You can set the initial pane size by using the [`size`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#size) input property. The [`minSize`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#minSize) and [`maxSize`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#maxSize) input properties can be used to set the minimum or maximum allowed size of the pane. Resizing beyond `minSize` and `maxSize` is not allowed.
```html
<igx-splitter>
    <igx-splitter-pane size='300px' minSize='100px'>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane size='300px' maxSize='500px'>
        ...
    </igx-splitter-pane>
</igx-splitter>
```
You can also forbid the resizing of a pane by setting its [`resizable`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#resizable) input property to **false**.
```html
<igx-splitter>
    <igx-splitter-pane [resizable]='false'>
        ...
    </igx-splitter-pane>
    <igx-splitter-pane>
        ...
    </igx-splitter-pane>
</igx-splitter>
```

### Nested panes

You can nest splitter components to create a more complex layout inside a splitter pane.
```typescript
public typeHorizontal = SplitterType.Horizontal;
public typeVertical = SplitterType.Vertical;
```
```html
<igx-splitter style='height: 30vh;' [type]='typeHorizontal' >
    <igx-splitter-pane>
        <igx-splitter [type]='typeVertical' [style.width]='"100%"'>
            <igx-splitter-pane>
                Pane1.1
            </igx-splitter-pane>
            <igx-splitter-pane>
                Pane1.2
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
    <igx-splitter-pane>
        <igx-splitter [type]='typeVertical' [style.width]='"100%"'>
            <igx-splitter-pane>
                Pane2.1
            </igx-splitter-pane>
            <igx-splitter-pane>
                Pane2.2
            </igx-splitter-pane>
        </igx-splitter>
    </igx-splitter-pane>
</igx-splitter>
```

### Demo

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-nested-sample" >
</code-view>


## Keyboard navigation

Keyboard navigation is available by default in the splitter component. When you focus a splitter bar and press one of the following key combinations, the described behavior is performed.

### Key combinations
- `Arrow Up` - Moves the splitter bar _up_ in a vertical splitter
- `Arrow Down` - Moves the splitter bar _down_ in a vertical splitter
- `Arrow Left` - Moves the splitter bar _left_ in a horizontal splitter
- `Arrow Right` - Moves the splitter bar _right_ in a horizontal splitter
- `Ctrl + Arrow Up` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Down` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Left` - Expands/Collapses a pane in a horizontal splitter
- `Ctrl + Arrow Right` - Expands/Collapses a pane in a horizontal splitter

## Styling
To get started with styling the **igxSplitter** component, you need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

You can change the default styles of the splitter by creating a new theme that extends the [`splitter-theme`]({environment:sassApiUrl}/index.html#function-splitter-theme). By providing just the base parameters, the theme will automatically generate all necessary styles for the interaction states.

```scss
// In splitter-styling-sample.component.scss

$splitter-theme: splitter-theme(
  $bar-color: #011627,
  $handle-color: #ecaa53,
  $expander-color: #ecaa53,
  $size: 4px
);
```

### Using CSS Variables 

The next step is to pass the custom splitter theme:

```scss
@include css-vars($custom-splitter-theme);
```

### Demo
This is the final result from applying your new theme.


<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/splitter-styling-sample" >
</code-view>

### Custom sizing

You can either use the `--size` variable, targeting the `igx-splitter` directly:

```scss
igx-splitter {
  --size: 10px;
}
```

Or you can use the universal `--igx-splitter-size` variable to target all instances:

```html
<div class="my-app">
  <igx-splitter></igx-splitter>
</div>
```
```scss
.my-app {
  --igx-splitter-size: 10px;
}
```


## API References
<div class="divider--half"></div>

* [IgxSplitterComponent]({environment:angularApiUrl}/classes/igxsplittercomponent.html)
* [IgxSplitterPaneComponent]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html)
* [SplitterType]({environment:angularApiUrl}/enums/splittertype.html)
* [IgxSplitterComponent Styles]({environment:sassApiUrl}/index.html#function-splitter-theme)

<div class="divider--half"></div>

## Theming Dependencies
* [IgxDropDown Theme]({environment:sassApiUrl}/index.html#function-drop-down-theme)
* [IgxIcon Styles]({environment:sassApiUrl}/index.html#function-icon-theme)

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

