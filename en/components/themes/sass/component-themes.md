---
title: Component Themes
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

# Component Themes
<div class="highlight">Component themes allow you to change the styles of specific component instances by overriding the globally defined theme.</div>
<div class="divider"></div>

## Overview
<div class="divider--half"></div>

Before we dig deep into how you can create component-level themes, let's take a few moments to talk about how Ignite UI for Angular approaches component theming. Because we want to be able to support older browsers, like IE11, we have two completely different approaches for theming components.
- The first approach is to style component instances using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables). By using CSS variables we gain the ability to create component themes without replicating their styles over and over again. Also, this approach allows us to modify the value of the CSS variables at runtime.
- The second approach is to create a new set of CSS rules that overwrite any previously declared CSS rules for a specific component. This approach is pretty straight-forward, and it is the only way we can provide sensible theming support for older browser, albeit it is not ideal as it adds a lot of additional CSS rules to the generated CSS theme.

We'll take a look at how these approaches work in practice, and how to use one instead of the other when generating component-level themes.
<div class="divider"></div>

## Creating Themes
<div class="divider--half"></div>

There are several parts to a component theme:

- **The component theme function** - A Sass function that normalizes the passed arguments and produces a theme to be consumed by a component mixin.
- **The CSS variable mixin** - A Sass mixin that consumes a component theme and produces *CSS variables* used to style a particular component.
- **The component mixin** - A Sass mixin that consumes a component theme and produces *CSS rules* used to style a particular component.

Say you want to create a new global avatar theme that has a different background color to the one we set in the avatar's default theme. As mentioned in the [**overview section**](#overview) there are 2 general approaches to creating a component theme. 
There are even more ways you can organize and scope your component themes. The most straightforward way to do that is in the same file you defined your [**global theme**](./global-themes.md).

Defining an avatar theme:

```scss
// Some place after @include igx-theme(...);

// Change the background of the avatar to purple.
$new-avatar-theme: igx-avatar-theme(
    $background: purple
);

// Pass the css-vars to the `igx-css-vars` mixin
@include igx-css-vars($new-avatar-theme);
```

The above code produces CSS variables for the `igx-avatar` component. These new CSS variables overwrite the default avatar rules.
Similarly, if you were to include `igx-css-vars` mixin later down in the global `scss` file, the mixin will again overwrite any previously defined themes.

For instance: 

```scss
// ...
@include igx-css-vars($new-avatar-theme);

// Later
$another-avatar-theme: igx-avatar-theme(
    $background: royalblue
);

@include igx-css-vars($another-avatar-theme);
```
In the above code, the de facto global theme is now the `$another-avatar-theme` as it overwrites any previously included `igx-css-vars` mixins.

This brings us to our next point.
<div class="divider"></div>

## Scoping Themes
<div class="divider--half"></div>

As we saw in the previous example, when adding multiple themes targeting the same component at the same level, the last theme mixin takes precedence. This is due to the way the CSS cascade works. If you want to have two or more themes targeting the same type of component, you will have to scope them to a selector. For instance we can create multiple `igx-avatar` themes and scope them to specific CSS selectors we can later use in our component markup.

```scss
// ...
// CSS class selectors
.avatar-royalblue {
    @include igx-css-vars($avatar-royalblue-theme);
}

.avatar-purple {
    @include igx-css-vars($avatar-green-theme);
}
```

In a component template:

```html
<div class="avatar-royalblue">
    <igx-avatar initials="AZ"></igx-avatar>
</div>

<div class="avatar-purple">
    <igx-avatar icon="home"></igx-avatar>
</div>
```
<div class="divider"></div>

## View Encapsulation
<div class="divider--half"></div>

So far we've explored ways to create themes that are globally scoped, and are included in a single Sass file. However, this is not always desirable, and in some instances you will want the Sass file to be bound to a specific component. In those cases we have to take View Encapsulation, and specifically how it is emulated in Angular, into consideration.

The Angular team has adopted 3 strategies for View Encapsulation - Emulated(default), ShadowDom, and None. To learn more about each of these strategies, take a look at the [Angular Documentation](https://angular.io/api/core/ViewEncapsulation). We will take a closer look at how to handle theming of Ignite UI for Angular components that are part of View Encapsulated parent components.

What exactly does `Emulated` View Encapsulation mean, anyway? This type of View Encapsulation does not take advantage of the Shadow DOM specification, instead it employs a way to bind styles for a component and its children by using a unique attribute identifier applied on the host element. Any style rules you add to a stylesheet of a View Encapsulated component that target some inner selector will not apply because they do not reference the unique attribute of the host element. To be able to 'penetrate' this encapsulation we have to use some View Encapsulation penetration strategy. Right now, in Angular this strategy is `::ng-deep`; it allows you to target any inner selector, which is encapsulated by its host element. It's good practice to use `::ng-deep` if you're dealing with CSS rules, instead of CSS variables and you want to customize a single instance of a component. We'll provide an example for that in the next section.

Let's take a look at an example using CSS variables. Let's create an avatar theme that is bound to specific parent component.

Here's our simple component:

```typescript
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-avatar',
    styleUrls: ['./app-avatar.component.scss'],
    template: `<igx-avatar [initials]="initials"></igx-avatar>`
})
export class AvatarComponent extends Component {
    @Input() public initials = 'AZ';
}
```

And this is what our Sass stylesheet looks like:

```scss
// app-avatar.component.scss

// Import all required functions and mixins
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component';

$avatar-theme: igx-avatar-theme($background: royalblue);

:host {
    @include igx-css-vars($avatar-theme);
}

```

When using CSS variables, we don't have to use the `::ng-deep` pseudo-selector. With the code above we've created CSS variables for the `igx-avatar`,  which will always have `royalblue` as its background color. The theme for our custom avatar will not 'leak' into other `igx-avatar` component instances, thus staying encapsulated within our custom `app-avatar` component.

Any Ignite UI for Angular theme built with the `$igx-legacy-support` set to `false` will allow styling of components without the need of Sass in your project. For instance the above could be achieved by setting the value of `--igx-avatar-background` CSS variable to the desired color:

```css
/* app-avatar.component.css */
:host {
    --igx-avatar-background: royalblue;
}
```

<div class="divider"></div>

## Targeting Older Browsers
<div class="divider--half"></div>

In the [overview](#overview) section I mentioned you could use hard-coded values to style your components by setting the `$igx-legacy-support` global variable to `true`. If you use the `igx-theme` mixin and pass it `$legacy-support` with value of `true` it will set the `$igx-legacy-support` to `true`, too.

### Usage in global themes

The below example shows how you can style components using hard-coded values.

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

@include igx-core();
@include igx-theme(
    $palette: $default-palette,
    $legacy-support: true
);

// Overwrite the default themes for igx-avatar using hard-coded values:
$avatar-theme: igx-avatar-theme($background: royalblue);

@include igx-avatar($avatar-theme);
```
<div class="divider"></div>

### Usage in encapsulated views 

The below sample uses the sample from the [View Encapsulation](#view-encapsulation) section as a starting point:

```scss
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component'; 

// Enable legacy support first.
$igx-legacy-support: true;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    @include igx-avatar($avatar-theme);
}
```
<div class="divider"></div>

## API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar)

<div class="divider--half"></div>

## Additional Resources
<div class="divider--half"></div>

Learn how to configure a global theme:

* [Global Themes](./global-themes.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
