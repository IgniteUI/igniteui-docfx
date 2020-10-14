---
title: Divider Component
_description: Ignite UI for Angular Divider component enables users to separate content both horizontally and vertically.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Divider component, Angular Divider control
---

# Divider

<p class="highlight">The divider component enables users to separate content both horizontally and vertically.</p>
<div class="divider"></div>

## Demo

By default the divider is a solid horizontal line.

<div class="sample-container loading" style="height:207px">
    <iframe id="divider-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/divider-sample-1' width="100%" height="100%" seamless="" frameborder="0" class="lazyload"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="divider-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="divider-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Usage

```html
<igx-divider></igx-divider>
```

## Vertical Divider
By adding the `vertical` attribute and setting its value to `true`, you can change the direction of the divider from horizontal to vertical.

```html
<igx-divider [vertical]="true"></igx-divider>
```
<div class="sample-container loading" style="height:238px">
    <iframe id="divider-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/divider-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="divider-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="divider-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Dashed Divider
The default style of the divider is a `solid` line but it can also be `dashed`.
To change the default look simply use the `type` attribute of the divider and set its value to `dashed`.

```html
<igx-divider type="dashed"></igx-divider>
```
<div class="sample-container loading" style="height:187px">
    <iframe id="divider-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/divider-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="divider-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="divider-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

## Inset Divider
The divider can be set in on both sides.
To inset the divider, set the `middle` attribute of the divider to `true` and provider the desired `inset` value, the divider will start shrinking from both ends.

**Keep in mind that you have to add unit(px,rem,%...) at the end of the value otherwise, it will not work.**

```html
// Both side
<igx-divider [middle]="true" inset="80px"></igx-divider>

// Left side only 
<igx-divider inset="40px"></igx-divider>

```
<div class="sample-container loading" style="height:311px">
    <iframe id="divider-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/divider-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="divider-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="divider-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

If the value of the `middle` attribute is set to a falsy value, or if the attribute is omitted altoghether, the divider will set in only on the left.

## API References
<div class="divider--half"></div>

* [IgxDividerDirective]({environment:angularApiUrl}/classes/igxdividerdirective.html)
* [IgxDividerDirective Styles]({environment:sassApiUrl}/index.html#function-igx-divider-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

