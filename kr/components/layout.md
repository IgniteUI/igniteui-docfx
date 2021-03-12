---
title: Layout Manager Directive
_description: Only Ignite UI for Angular Layout Manager directive provides various styles of responsive and fluid user interfaces.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Layout Manager component, Angular Layout Manager controls
_language: kr
---

##Layout Manager
<p class="highlight">The Ignite UI for Angular Layout Directive allows developers to specify a layout direction for any children of the container it is applied to. Layout can flow vertically or horizontally, with controls for wrapping, justification, and alignment.</p>
<div class="divider"></div>

### Layout Demo

<code-view style="height: 2460px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout" >
</code-view>

<div class="divider--half"></div>

###Usage
Use the [**igxLayout**]({environment:angularApiUrl}/classes/igxlayoutdirective.html) directive on a container element to specify the layout
direction for its children: horizontally with [`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="row"` or vertically with
[`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="column"`.

**Note**: the [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) directive affects the flow directions for that
container's **immediate** children.
<div class="divider--half"></div>

### Nesting
Use the [`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) directive for elements inside an [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) parent to control specific flexbox properties.
<div class="divider--half"></div>


### API References
<div class="divider--half"></div>

* [IgxLayoutDirective]({environment:angularApiUrl}/classes/igxlayoutdirective.html)
* [IgxFlexDirective]({environment:angularApiUrl}/classes/igxflexdirective.html)