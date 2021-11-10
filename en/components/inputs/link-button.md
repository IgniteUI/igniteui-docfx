# Angular Link Button Overview

The Angular Link Button provides different variants and styles, which are easily configurable to match the appearance and functionality, that we want to achieve.

## Angular Link Button Example

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/link-button-overview"
           alt="Angular Button Example"
           github-src="inputs/link-button/overview">
</code-view>

## Usage

To get started with the Link Button Web Component we need to import the [`IgcLinkButtonComponent`]({environment:wcApiUrl}/classes/IgcLinkButtonComponent.html) in our typescript file:

After we import the link button component, we are ready to start using it, so let's add our first link button.

With `prefix` and `suffix` slots we can add different content before and after the main content of the button.

The internal structure of the `igc-link-button` is an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) type element, which is why we can
set the `href`, `rel`, `target` and `download` attributes of the link button.

## Link Button Variants

### Flat Button

Use `flat` [`variant`]({environment:wcApiUrl}/classes/IgcLinkButtonComponent.html#variant) to add a simple flat button in your component template. Note that if you do not set variant, by default it will be set to flat.

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-flat">
</iframe></div>

### Outlined Button

All you have to do to create an `outlined` button is to change button variant property:

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-outlined">
</iframe></div>

### Contained Button

Analogically, we can switch to `contained` variant:

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-contained">
</iframe></div>

### Floating Action Button

And for a floating action button, we can switch to `fab` variant: 

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-fab">
</iframe></div>

### Disable Link Button

The [`disabled`]({environment:wcApiUrl}/classes/IgcLinkButtonComponent.html#disabled) property can be used to make a button unclickable:

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-disabled">
</iframe></div>

### Download

By setting a URL to [`download`]({environment:wcApiUrl}/classes/IgcLinkButtonComponent.html#download) property, we can make the link button download a file when it is clicked.

<div class="sample-container loading" style="height: 70px">
    <iframe class="lazyload" seamless width="100%" height="100%" frameborder="0" data-src="{environment:dvDemosBaseUrl}/inputs/link-button-download">
</iframe></div>

## Size

We can allow the user to choose the size of the `igc-link-button` by using its [`size`]({environment:wcApiUrl}/classes/IgcLinkButtonComponent.html#size) property. То demonstrate this, we will add some radio buttons to display all size values. This way whenever one gets selected, we will change the size property of the button.

And here's the result of all that work:

<code-view style="height: 200px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/link-button-size"
           alt="Angular List Example"
           github-src="/inputs/link-button/size">
</code-view>

## Styling

The link button component exposes `base` CSS part that allows us to style the wrapping `<a>` element.

```css
igc-link-button::part(base) {
    background-color: #0099ff;
    color: #3f51b5;
    padding: 12px;
}
```

<code-view style="height: 100px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/inputs/link-button-styling"
           alt="Angular List Example"
           github-src="/inputs/link-button/styling">
</code-view>

## API Reference

-   [IgcLinkButtonComponent]({environment:wcApiUrl}/classes/IgcLinkButtonComponent.html)

Additional Web Components that were used:

-   [IgcRadioGroupComponent]({environment:wcApiUrl}/classes/IgcRadioGroupComponent.html)
-   [IgcRadioComponent]({environment:wcApiUrl}/classes/IgcRadioComponent.html)

## Additional Resources

<div class="divider--half"></div>

-   [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
-   [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
