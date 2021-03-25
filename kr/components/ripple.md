---
title: Ripple Directive
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Ripple components, Angular Ripple controls
_language: kr
---

## Ripple
<p class="highlight">With the Ignite UI for Angular Ripple directive, you can create a ripple animation effect to give users feedback when they’re trying to click or touch regions that aren’t configured to receive that input. Set this directive to a relatively positioned element to create an animation in response to a touch or a mouse click.</p>
<div class="divider"></div>

### Ripple Demo

<code-view style="height: 558px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-1" >
</code-view>

<div class="divider--half"></div>

### Dependencies

The Ripple Directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxRippleModule` inside your `AppModule`:

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```
### Usage
#### Adding Ripple Effect

Use [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) to add a ripple effect to the specified element. It will add a ripple effect with the default color.

```html
<button igxButton="raised" igxRipple>Click Me</button>
```
<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" class="lazyload">
</iframe></div>

#### Custom Color

You can set the ripple color using [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html). In this sample, we set white color to the ripple.

```html
<button igxButton="raised" igxRipple="white">White</button>
```
<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-6" class="lazyload">
</iframe></div>

#### Centered Ripple Effect 
The ripple effect starts from the position of the click event. You can change this behavior using [`igxRippleCentered`]({environment:angularApiUrl}/classes/igxrippledirective.html#centered) and setting the center of the element as origin.

```html
<button igxButton="raised" igxRipple="white" igxRippleCentered="true">Centered</button>
```
<div class="sample-container loading" style="height: 68px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-3" class="lazyload">
</iframe></div>

#### Ripple Target
Use [`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) to attach a ripple effect to a specific element inside a parent element.

```html
<div class="parent-div" igxRipple="blue" igxRippleTarget=".child-div" igxRippleCentered="true">
  Parent Div
  <div class="child-div">
    Child Div
  </div>
</div>
```
Notice that if you click on the parent or the child divs the ripple effect will only appear inside the child div. The child div position has to be set to **relative**.
<div class="sample-container loading" style="height: 168px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-2" class="lazyload">
</iframe></div>

#### Ripple Duration
Use [`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) to change the duration of the ripple animation. The default is 600 miliseconds. In this sample the [`igxRippleDuration`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippleduration) is set to 2000 miliseconds.

```html
<div [igxRippleDuration]=2000 igxRipple="white">
  <p>Long Ripple Animation</p>
</div>
```
<div class="sample-container loading" style="height: 148px">
    <iframe seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/interactions/ripple-sample-4" class="lazyload">
</iframe></div>

The [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) uses the Web Animation API and runs natively on
[browsers that support it.](http://caniuse.com/#feat=web-animation)
The `web-animations.min.js` polyfill is [available](https://github.com/web-animations/web-animations-js)
for other browsers.

> [!NOTE]
> Use a relatively positioned element for the ripple animation. You can also use [`igxRippleTarget`]({environment:angularApiUrl}/classes/igxrippledirective.html#rippletarget) to target a child element.

### Styling
The igxRipple allows styling through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The ripple's [theme]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) exposes a property that allows customization of the color of the effect.        

#### Importing global theme
To begin styling of the predefined ripple color, you need to import the `index` file, where all styling functions and mixins are located.  
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```   

#### Defining custom theme
You can easily create a new theme, that extends the [`igx-ripple-theme`]({environment:sassApiUrl}/index.html#function-igx-ripple-theme) and accepts the parameters, required to customize the ripple as desired.

```scss
$custom-theme: igx-ripple-theme(
  $color: #FFCD0F
);
```   

#### Defining a custom color palette
In the approach, that was described above, the color value was hardcoded. Alternatively, you can achieve greater flexibility, using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.   
`igx-palette` generates a color palette, based on provided primary and secondary colors.  

```scss
$black-color: #494949;
$yellow-color: #ffcd0f;

$custom-palette: igx-palette(
    $primary: $black-color,
    $secondary: $yellow-color
);
```   

After the custom palette has been generated, the `igx-color` function can be used to obtain different varieties of the primary and the secondary colors.   

```scss
$custom-theme: igx-ripple-theme(
    $color: igx-color($custom-palette, "secondary", 500)
);
```

#### Defining custom schemas
You can go even further and build flexible structure that has all the benefits of a [**schema**](../themes/schemas.md). The **schema** is the recipe of a theme.   
Extend one of the two predefined schemas, that are provided for every component. In our case, we would use `$_dark_ripple`.   

```scss
$custom-ripple-schema: extend($_dark-ripple, (
    color: (igx-color("secondary", 500))
));
```   
In order for the custom schema to be applied, either `light`, or `dark` globals has to be extended. The whole process is actually supplying a component with a custom schema and adding it to the respective component theme afterwards.   

```scss
$my-custom-schema: extend($dark-schema, (
    igx-ripple: $custom-ripple-schema
));

$custom-theme: igx-ripple-theme(
    $palette: $custom-palette,
    $schema: $my-custom-schema
);
```

#### Applying the custom theme
The easiest way to apply your theme is with a `sass` `@include` statement in the global styles file:
```scss
@include igx-ripple($custom-theme);
```

#### Scoped component theme

In order for the custom theme to affect only specific component, you can move all of the styles you just defined from the global styles file to the custom component's style file (including the import of the `index` file).

This way, due to Angular's [ViewEncapsulation](https://angular.io/api/core/Component#encapsulation), your styles will be applied only to your custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >Wrap the statement inside of a `:host` selector to prevent your styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
        @include igx-ripple($custom-theme);
    }
}
```    

>[!NOTE]
  > A color that is set using the `igxRiple` directive, would take precedence from the one, set within a custom theme.  

#### Demo

<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-styling" >
</code-view>


### API References
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple Styles]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
