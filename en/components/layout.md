---
title: Layout Manager Directive
_description: Only Ignite UI for Angular Layout Manager directive provides various styles of responsive and fluid user interfaces.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Layout Manager component, Angular Layout Manager controls
---

##Layout Manager
<p class="highlight">The Ignite UI for Angular Layout Directive allows developers to specify a layout direction for any children of the container it is applied to. Layout can flow vertically or horizontally, with controls for wrapping, justification, and alignment.</p>
<div class="divider"></div>

### Layout Demo
<div class="sample-container loading" style="height: 3704px">
    <iframe id="layout-sample-iframe" src='{environment:demosBaseUrl}/layout' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="layout-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

###Usage
Use the **igxLayout** directive on a container element to specify the layout
direction for its children: horizontally with `igxLayoutDir="row"` or vertically with
`igxLayoutDir="column"`.

**Note**: the `igxLayout` directive affects the flow directions for that
container's **immediate** children.
<div class="divider--half"></div>

### Nesting
Use the `igxFlex` directive for elements inside an `igxLayout` parent to control specific flexbox properties.

| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxFlexOrder` | number | Controls in what order are the elements laid out in the flex container. Defaults to `0`. |
| `igxFlexGrow` | number | Sets whether an item should grow in a proportion to its peers inside the flex container. Defaults to `1`. |
| `igxFlexShrink` | number | Sets whether an items should shrink in a proportion to its peers. Defaults to `1` and negative number are not accepted. |
<div class="divider--half"></div>

### API
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxLayoutDir` |  string | Sets the default flow direction of the container's children. Defaults to `rows`. |
| `igxLayoutReverse` |    boolean   | Defines the direction flex children are placed in the flex container. When set to `true`, the `rows` direction goes right to left and `columns` goes bottom to top.    |
| `igxLayoutWrap` | string | By default the immediate children will all try to fit onto one line. The default value `nowrap` sets this behavior. Other accepted values are `wrap` and `wrap-reverse`|
| `igxLayoutJustify` | string | Defines the alignment along the main axis. Defaults to `flex-start` which packs the children toward the start line. Other possible values are `flex-end`, `center`, `space-between`, `space-around`|
| `igxLayoutItemAlign` | string | Defines the default behavior for how children are laid out along the corss axis of the current line. Defaults to `flex-start`. Other possible values are `flex-end`, `center`, `baseline`, and `stretch` |
