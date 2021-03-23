---
title: Divider Component
_description: Ignite UI for Angular Divider component enables users to separate content both horizontally and vertically.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Divider component, Angular Divider control
---

# Divider

<p class="highlight">The divider component enables users to separate content both horizontally and vertically.</p>
<div class="divider"></div>

## Angular Divider Example

By default the divider is a solid horizontal line.


<code-view style="height:207px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-1" alt="Angular Divider Example">
</code-view>


## Usage

```html
<igx-divider></igx-divider>
```

## Vertical Divider
By adding the `vertical` attribute and setting its value to `true`, you can change the direction of the divider from horizontal to vertical.

```html
<igx-divider [vertical]="true"></igx-divider>
```

<code-view style="height:238px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-2" >
</code-view>


## Dashed Divider
The default style of the divider is a `solid` line but it can also be `dashed`.
To change the default look simply use the `type` attribute of the divider and set its value to `dashed`.

```html
<igx-divider type="dashed"></igx-divider>
```

<code-view style="height:187px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-3" >
</code-view>


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

<code-view style="height:311px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/divider-sample-4" >
</code-view>


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

