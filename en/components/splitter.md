---
title: Angular Splitter | Split Panes |  Ignite UI for Angular | Infragistics
_description: Use the Angular Splitter component to create a simple split layout splitting the view horizontally or vertically into multiple collapsible split panes.
_keywords: angular splitter, igniteui for angular, infragistics
---

## Splitter

The Ignite UI for Angular Splitter component provides the ability to create layouts, split into multiple vertically or horizontally arranged panes that may be resized, expanded and collapsed. These interactions are performed through UI exposed in the splitter bars between the panes. A simple Splitter layout is demonstrated in the demo below.

### Demo
<div class="sample-container loading" style="height: 400px">
    <iframe id="splitter-horizontal-sample-iframe" src='{environment:demosBaseUrl}/layouts/splitter-horizontal-sample' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="splitter-horizontal-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="splitter-horizontal-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox
    </button>
</div>

<div class="divider--half"></div>

### Usage

To start using the **igxSplitter** component, you first need to import the **IgxSplitterModule** in your **app.module**:
```typescript
// app.module.ts
...
import { IgxSplitterModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxSplitterModule],
    ...
})
export class AppModule {}
```

After that you can add the markup for your component:
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
**igxSplitter** is initialized with the **igx-splitter** tag. Multiple splitter panes can be defined under a single **igx-splitter** component. The content of the pane is templatable and will be rendered in its own resizable container.


#### Orientation

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

#### Configuring panes

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

#### Nested panes

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

#### Demo
<div class="sample-container loading" style="height: 400px">
    <iframe id="splitter-nested-sample-iframe" src='{environment:demosBaseUrl}/layouts/splitter-nested-sample' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="splitter-nested-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="splitter-nested-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox
    </button>
</div>

### Keyboard navigation

Keyboard navigation is available by default in the splitter component. When you focus a splitter bar and press one of the following key combinations, the described behavior is performed.

#### Key combinations
- `Arrow Up` - Moves the splitter bar _up_ in a vertical splitter
- `Arrow Down` - Moves the splitter bar _down_ in a vertical splitter
- `Arrow Left` - Moves the splitter bar _left_ in a horizontal splitter
- `Arrow Right` - Moves the splitter bar _right_ in a horizontal splitter
- `Ctrl + Arrow Up` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Down` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Left` - Expands/Collapses a pane in a horizontal splitter
- `Ctrl + Arrow Right` - Expands/Collapses a pane in a horizontal splitter

### Styling
To get started with styling the **igxSplitter** component, you need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 

You can change the default styles of the splitter by creating a new theme that extends the [`igx-splitter-theme`]({environment:sassApiUrl}/index.html#function-igx-splitter-theme).

```scss
// In splitter-styling-sample.component.scss

$splitter-theme: igx-splitter-theme(
    $bar-color: #011627,
    $handle-color: #ECAA53,
    $expander-color: #ECAA53,
    $border-radius: 0,
    $focus-color: #ECAA53,
    $size: 4px
);
```

#### Using CSS Variables 

The next step is to pass the custom splitter theme:

```scss
@include igx-css-vars($custom-splitter-theme);
```

#### Using Theme Overrides

In order to style components for Internet Explorer 11, we have to use different approach, since it doesn't support CSS variables. 

If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`. On the other side, in order to prevent the custom theme to leak to other components, be sure to include the `:host` selector before `::ng-deep`:

```scss
:host {
    ::ng-deep {
        // Pass the custom splitter theme to the `igx-splitter` mixin
        @include igx-splitter($custom-splitter-theme);
    }
}
```

#### Demo
This is the final result from applying your new theme.

<div class="sample-container loading" style="height: 400px">
    <iframe id="splitter-styling-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/splitter-styling-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="splitter-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="splitter-styling-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
</div>

### API References
<div class="divider--half"></div>

* [IgxSplitterComponent]({environment:angularApiUrl}/classes/igxsplittercomponent.html)
* [IgxSplitterPaneComponent]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html)
* [SplitterType]({environment:angularApiUrl}/enums/splittertype.html)
* [IgxSplitterComponent Styles]({environment:sassApiUrl}/index.html#function-igx-splitter-theme)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

