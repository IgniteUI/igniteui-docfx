---
title: Angular Splitter | Split Panes |  Ignite UI for Angular | Infragistics
_description: Use the Angular Splitter component to create a simple split layout splitting the view horizontally or vertically into multiple collapsible split panes.
_keywords: angular splitter, igniteui for angular, infragistics
---

## Splitter

The Ignite UI for Angular Splitter component provides a framework for a simple split layout splitting the view horizontally or vertically into multiple smaller areas called split panes.

### Demo
<div class="sample-container loading" style="height: 450px">
    <iframe id="splitter-horizontal-iframe" src='{environment:dvDemosBaseUrl}/layouts/splitter-horizontal' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="splitter-horizontal-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Usage

To start using the **igxSplitter** first we need to import the **IgxSplitterModule** in our **app.module**:
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

After that we can add the markup for our component:
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
The Initialization of the **igxSplitter** is done by using the **igx-splitter** tag. Multiple splitter panes can be defined under a single **igx-splitter**. The content of the pane is templatable and will be rendered in its own resizable container.


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

The **igxSplitterPane** contains several input properties. We can set the initial pane size by using the [`size`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#size) input property. The [`minSize`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#minSize) and [`maxSize`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#maxSize) input properties can be used to set the minimum or maximum allowed size of the pane. Resizing beyond `minSize` and `maxSize` is not allowed.
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
If we want to disallow resizing of a pane, we can set the [`resizable`]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html#resizable) input property to **false**.
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

We can nest splitter components to create a more complex layout inside a splitter pane.
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
<div class="sample-container loading" style="height: 450px">
    <iframe id="splitter-nested-iframe" src='{environment:dvDemosBaseUrl}/layouts/splitter-nested' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="splitter-nested-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

### Keyboard navigation

Keyboard navigation is available by default in the splitter component. When we focus a splitter bar and press one of the following key combinations, the described behavior is performed.

#### Key combinations
- `Arrow Up` - Moves up the splitter bar in a vertical splitter
- `Arrow Down` - Moves down the splitter bar in a vertical splitter
- `Arrow Left` - Moves left the splitter bar in a horizontal splitter
- `Arrow Right` - Moves right the splitter bar in a horizontal splitter
- `Ctrl + Arrow Up` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Down` - Expands/Collapses a pane in a vertical splitter
- `Ctrl + Arrow Left` - Expands/Collapses a pane in a horizontal splitter
- `Ctrl + Arrow Right` - Expands/Collapses a pane in a horizontal splitter


### API References
<div class="divider--half"></div>

* [IgxSplitterComponent]({environment:angularApiUrl}/classes/igxsplittercomponent.html)
* [IgxSplitterPaneComponent]({environment:angularApiUrl}/classes/igxsplitterpanecomponent.html)
* [SplitterType]({environment:angularApiUrl}/enums/splittertype.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

