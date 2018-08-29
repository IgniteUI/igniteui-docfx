---
title: Expansion Panel
_description: Provides an easily configurable component with two states - collapsed and expanded.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Collapsible component, IgxExpansionPanel, Ignite UI Expansion Panel
---

## Expansion Panel
<p class="highlight">
The `IgxExpansionPanel` is a lightweigh component which can be rendered in two states - collapsed or expanded. When collapsed, the panel displays a short summary of its content. The collapsed panel can be toggled (via click or keyboard interactions) to display the whole body of the component, containing any additional necessary content.
</p>
<div class="divider--half"></div>

## Getting Started

To use the `IgxExpansionPanelComponent` we need to import the **IgxExpansionPanelModule** in our **app.module**: 
```typescript
// app.module.ts

...
import { IgxExpansionPanelModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxExpansionPanelModule],
    ...
})
export class AppModule {}
```

We can now start using `igx-expansion-panel` in the markup. The expansion panel has a simple structure, as you can see below:
- `igx-expansion-panel` - the component host - stores header and body
    - `igx-expansion-panel-header` - stores the component header. This is always visible. Stores title and description as well as any additional content
        - `igx-expansion-panel-title` - stores the component title. Has default styling and will always appear at the beginning of the header. Used in aria labels.
        - `igx-expansion-panel-description` - stores the component description. Can be used to provide a short summary. Will always be displayed second in the headers.
    - `igx-expansion-panel-body` - stores the component body. This part is only visible when the component is expanded.

```html
<!-- expansible-panel.component.html -->
<igx-expansion-panel>
    <igx-expansion-panel-header>
        <igx-expansion-panel-title>
            IgxExpansionPanel
        </igx-expansion-panel-title>
        <igx-expansion-panel-description>
            A control with toggleable content
        </igx-expansion-panel-description>
    </igx-expansion-panel-header>
    <igx-expansion-panel-body>
        The IgxExpansionPanel control provides a header with a short title and summary as well as a toggleable, detailed view.
    </igx-expansion-panel-body>
</igx-expansion-panel>

```
The `IgxExpansionPanelComponent` exposes the `.igx-expansion-panel` class which we can use to style the component:

```css
<!-- expansion-panel.component.css -->

.igx-expansion-panel
{
    font-family: Verdana;
}
```

You can see the results below: 
<div class="sample-container loading" style="height: 440px;">
    <iframe id="expansion-sample-1-sample" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/expansion-sample-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="expansion-sample-1-sample" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>