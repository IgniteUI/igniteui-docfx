---
title: Component Themes
_description: The Ignite UI for Angular Theming component is developed in SASS with a low-difficulty API that offers restyling of one component, multiple components, or the entire suite.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Theming Component, Angular Theming
---

## Component Themes
<div class="highlight">Component themes allow you to change the styles of specific component instances by overriding the globally defined theme.</div>
<div class="divider"></div>

### Overview
<div class="divider--half"></div>

Before we dig deep into how you can create component-level themes, let's take a few moments to talk about how Ignite UI for Angular approaches component theming. Because we want to be able to support older browsers, like IE11, we have two completely different approaches for theming components. 
- The first approach is to create a new set of CSS rules that overwrite any previously declared CSS rules for a specific component. This approach is pretty straight-forward, and it is the only way we can provide support for older browser, albeit it is not ideal as it adds a lot of additional CSS rules to the generated CSS theme.  
- The second approach is to style component instances using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables). By using CSS variables we gain the ability to create component themes without replicating their styles over and over again. Also, this approach allows us to modify the value of the CSS variables at runtime.

We'll take a look at how these approaches work in practice, and how to use one instead of the other when generating component-level themes.
<div class="divider"></div>

### Creating Themes
<div class="divider--half"></div>

There are several parts to a component theme:

- **The component theme function** - A Sass function that normalizes the passed arguments and produces a theme to be consumed by a component mixin.
- **The component mixin** - A Sass mixin that consumes a component theme and produces *CSS rules* used to style a particular component.
- **The CSS variable mixin** - A Sass mixin that consumes a component theme and produces *CSS variables* used to style a particular component.

Say you want to create a new global avatar theme that has a different background color to the one we set in the avatar's default theme. As mentioned in the [**overview section**](#overview) there are 2 general approaches to creating a component theme. 
There are even more ways you can organize and scope your component themes. The most straightforward way to do that is in the same file you defined your [**global theme**](./global-theme.md).

Defining an avatar theme:

```scss
// Some place after igx-theme($my-color-palette);

// Change the initials and icon backgrounds 
// of the avatar to purple.
$new-avatar-theme: igx-avatar-theme(
    $initials-background: purple,
    $icon-background: purple
);

// Pass the theme to the `igx-avatar` mixin
@include igx-avatar($new-avatar-theme);
```

The above code generates new CSS rules for the `igx-avatar` component. These new CSS rules overwrite the default avatar rules.
Similarly, if you were to include `igx-avatar` mixin later down in the global `scss` file, the mixin will again overwrite any previously defined themes.

For instance: 

```scss
// ...
@include igx-avatar($new-avatar-theme);

// Later
$another-avatar-theme: igx-avatar-theme(
    $initials-background: royalblue,
    $icon-background: royalblue
);

@include igx-avatar($another-avatar-theme);
```
In the above code, the defacto global theme is now the `$another-avatar-theme` as it overwrites any previously included `igx-avatar` mixins.

This brings me to my next point.
<div class="divider"></div>

### Scoping Themes
<div class="divider--half"></div>

As we saw in the previous example, when adding multiple themes targeting the same component at the same level, the last theme mixin takes precedence. This is due to the way the CSS cascade works. If you want to have two or more themes targeting the same type of components you will have to scope them using a selector. For instance we can create multiple `igx-avatar` themes and scope them to specific CSS selectors we can later use in our component markup.

```scss
// ...
// CSS class selectors
.avatar-royalblue {
    @include igx-avatar($avatar-royalblue-theme);
}

.avatar-purple {
    @include igx-avatar($avatar-green-theme);
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

### View Encapsulation
<div class="divider--half"></div>

So far we've explored ways to create themes that are globally scoped, and are included in a single Sass file. However, this is not always desirable, and in some instances you will want the Sass file to be bound to a specific app component. In those cases we have to take View Encapsulation, and specifically how it is emulated in Angular, into consideration.

The Angular team has adopted 3 strategies for View Encapsulation - Emulated(default), Native, and None. To learn more about each of this strategies, take a look at the [Angular Documentation](https://angular.io/api/core/ViewEncapsulation). We will take a closer look at how to handle theming of Ignite UI for Angular components that are part of View Encapsulated parent components.

What exactly does `Emulated` View Encapsulation mean, anyway? This type of View Encapsulation does not take care advantage of the Shadow DOM specification, instead it employs a way to bind styles for a component and its children by using an unique attribute identifier applied on the host element. Any style rules you add to a stylesheet of a View Encapsulated component that target some inner selector will not apply because they do not reference the unique attribute of the host element. To be able to 'penetrate' this encapsulation we have to use some View Encapsulation penetration strategy. Right now in Angular this strategy is `::ng-deep`; it allows you to target any inner selector, which is encapsulated by its host element.

Let's take a look at some practical examples. Let's create an avatar theme that is bound to specific parent component.

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

$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    @include igx-avatar($avatar-theme);
}
```

With the code above we've created a version of the `igx-avatar`, which will always have `royalblue` as its background color. The theme for our custom avatar will not 'leak' in other `igx-avatar` component instances, and thus stays encapsulated within our custom `app-avatar` component.
<div class="divider"></div>

### CSS Variables
<div class="divider--half"></div>

In the [overview](#overview) section I mentioned you could use CSS variables to style your components by setting the `$igx-legacy-support` global variable to `false`. If you use the `igx-theme` mixin and pass it `$legacy-support` with value of `false` it will set the `$igx-legacy-support` to `false`, too. This enables you to use a special mixin `igx-css-vars` to style Ignite UI for Angular components without duplicating any styles.

The `igx-css-vars` mixing accepts one argument - a component theme.

#### Usage in global themes

The below example shows how you can style multiple components using just CSS variables.

```scss
// Import the IgniteUI themes library first
@import '~igniteui-angular/lib/core/styles/themes/index';

@include igx-core();
@include igx-theme($default-palette, $legacy-support: false);

// Overwrite the default themes for igx-avatar and igx-badge
// using only css variables;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);
$badge-theme: igx-badge-theme($background-color: white);

@include igx-css-vars($avatar-theme);
@include igx-css-vars($badge-theme);
```
<div class="divider"></div>

#### Usage in encapsulated views 

The below sample uses the sample from the [View Encapsulation](#view-encapsulation) section as a starting point:

```scss
@import '~igniteui-angular/lib/core/styles/themes/utilities';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-theme';
@import '~igniteui-angular/lib/core/styles/components/avatar/avatar-component'; 
// Disable legacy support first.
$igx-legacy-support: false;
$avatar-theme: igx-avatar-theme($initials-background: royalblue);

:host ::ng-deep {
    // We still need to include the base avatar styles just once.
    @include igx-avatar(igx-avatar-theme());

    // Pass the theme to overwrite the default root vars.
    @include igx-css-vars($avatar-theme);
}
```
As a bonus, any Ignite UI for Angular theme built with the `$igx-legacy-support` set to `false` will allow styling of components without the need to use Sass in your project. For instance the above could be achieved by setting the value of `--igx-avatar-initials-background` CSS variable to the desired color:

```css
/* app-avatar.component.css */

:host ::ng-deep {
    --igx-avatar-initials-background: royalblue;
}
```
<div class="divider"></div>

### API Overview
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar)

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

Learn how to configure a global theme:

* [Global Themes](./global-theme.md)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)