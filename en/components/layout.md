---
title: Layout Manager Directive
_description: Only Ignite UI for Angular Layout Manager directive provides various styles of responsive and fluid user interfaces.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Layout Manager component, Angular Layout Manager controls
---

# Layout Manager
<p class="highlight">The Ignite UI for Angular Layout Directive allows developers to specify a layout direction for any children of the container it is applied to. Layout can flow vertically or horizontally, with controls for wrapping, justification, and alignment.</p>
<div class="divider"></div>

## Angular Layout Manager Example
<div class="divider--half"></div>


<code-view style="height: 580px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-sample" alt="Angular Layout Manager Example">
</code-view>


<div class="divider--half"></div>

## Usage

Use the [**igxLayout**]({environment:angularApiUrl}/classes/igxlayoutdirective.html) directive on a container element to specify the layout direction for its children:

<div class="divider--half"></div>

### Horizontally with Row direction

Use [`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="row"`.

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-direction-row" >
</code-view>


<div class="divider--half"></div>

### Vertically with Column direction

Use [`igxLayoutDir`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#dir)`="column"`.

<code-view style="height: 300px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-direction-column" >
</code-view>


<div class="divider--half"></div>

**Note**: Reverse order using [`igxLayoutReverse`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#reverse)`="true"`.

<div class="divider--half"></div>

### Customize the order of the elements
Customize the order of the element by using `igxFlexOrder`.


<code-view style="height: 110px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-custom-order" >
</code-view>


<div class="divider--half"></div>

### Change element spacing

Use [`igxLayoutJustify`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#justify)`="space-between | space-around"`.

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-content-space" >
</code-view>


<div class="divider--half"></div>

### Position elements along the main axis
Use [`igxLayoutJustify`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#justify)`="flex-start | center | flex-end"` to specify the elements position along the main axis according to your preferences.

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-justify-content" >
</code-view>


<div class="divider--half"></div>

### Position elements along the cross axis
Use [`igxLayoutItemAlign`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#itemalign)`="flex-start | center | flex-end"` to specify the elements position along the cross axis according to your preferences.

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-align-items" >
</code-view>


<div class="divider--half"></div>

### You can also wrap elements 
Use [`igxLayoutWrap`]({environment:angularApiUrl}/classes/igxlayoutdirective.html#wrap)`="wrap"`.

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/layout-wrap" >
</code-view>


**Note**: The [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) directive affects the flow directions for that
container's **immediate** children.
<div class="divider--half"></div>

## Nesting
Use the [`igxFlex`]({environment:angularApiUrl}/classes/igxflexdirective.html) directive for elements inside an [`igxLayout`]({environment:angularApiUrl}/classes/igxlayoutdirective.html) parent to control specific flexbox properties.
<div class="divider--half"></div>


## API References
<div class="divider--half"></div>

* [IgxLayoutDirective]({environment:angularApiUrl}/classes/igxlayoutdirective.html)
* [IgxFlexDirective]({environment:angularApiUrl}/classes/igxflexdirective.html)