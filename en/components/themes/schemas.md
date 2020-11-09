---
title: Schemas
_description: Ignite UI for Angular theming schemas allow you to create recipes for component themes.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
---

# Schemas
<p class="highlight">Schemas are a simple, declarative way to list all properties a component theme might use.</p>

<div class="divider--half"></div>

## Overview
Schemas are like recipes. They are simple Sass maps, similar to JSON that allow us to define all properties a theme might use. Those properties can be colors, shadows, margins, paddings, etc. Anything a theme consumes can be described as a `schema`, then passed to the global or component theme. A component schema can extend an existing component schema and override the properties of the former.

To make it easier to understand, lets take a look at the default schema the avatar component uses:

```scss
$_light-avatar: (
    icon-background: (
        igx-color: ('grays', 400)
    ),

    icon-color: (
        igx-color: ('grays', 800)
    ),

    initials-background: (
        igx-color: ('grays', 400)
    ),

    initials-color: (
        igx-color: ('grays', 800)
    ),

    image-background: transparent
);
```

As you can see from the example above, the component schema defines the properties the [Avatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) consumes. It just prescribes the colors the avatar should use, without having to resolve them beforehand.

Let's take the `icon-background` property for example. It tells the avatar theme what the default background should be for each new __igx-avatar__ of type __icon__. 

*The `icon-background` can be assigned any value, that is, a value that can be assigned to the CSS `background-color` property.* You can also assign a map to `icon-background`, like in the sample above. When you assign a map to the `icon-background` property, for instance, the map should contain functions as the key names, and arguments for the functions as values for said keys. We do this to be able to resolve the values later on, when the avatar theme is being built. See, because we don't know the palette a user might pass to the avatar theme, we should be able to resolve it later on, only when the palette is known.

We can also add other functions and arguments to the `icon-background` map as key value pairs. For instance we may want to run the resolved result from `igx-color: ('grays', 400)` through the `hexrgba` function we have, to resolve the hex value for the `400` color variant of the `grays` palette, which is usually represented in rgba. 

Let's see how the schema will change when we make this addition:

```scss
$_light-avatar: (
    icon-background: (
        igx-color: ('grays', 400),
        hexrgba: #fff
    ),
    ...
);
```
The result of the igx-color function call will be automatically passed as the first argument to the `hexrgba` function. Since the `hexrgba` accepts a second argument for the background color, we provide it as the value of the `hexrgba` key in the example above.

<div class="divider"></div>

## Extending Schemas
As you saw from the example above. Schemas are simple maps and as such can be extended by overriding some of their properties. You might want to extend the default avatar schema by only changing the icon-background property, without having to copy all other properties manually. This is easily done using the `extend` function we provide.

```scss
$my-avatar-schema: extend($_light-avatar, (
    icon-background: limegreen
));
```

Now the value of `$my-avatar-schema` will contain all properties of `$_light-avatar`, except the value of `icon-background` will be set to `limegreen`.

## Consuming Schemas
Until now we have shown what a component schema is and how you can modify it, but we have not talked about how you can use a schema in your Sass project. 

Individual component schemas are bundled up in a global schema map for all components we might have. So the `$_light-avatar` schema is part of the global `$light-schema` map. The `$light-schema` maps component schemas to component names. The `$light-schema` looks something like this:

```scss
$light-schema: (
    igx-avatar: $_light-schema,
    igx-badge: $_light-badge,
    ...
);
```

We do this so we can pass the entire `$light-schema` to the `igx-theme` mixin. So for instance if we wanted to modify the `$light-schema` by replacing the default component schema the avatar component uses we might do:

```scss
$my-light-schema: extend($light-schema, (
    igx-avatar: $my-avatar-schema
));
```

Now we can pass all that to a global theme:

```scss
@include igx-theme(
    $schema: $my-light-schema,
    $palette: $default-palette
);
```

Now each icon avatar in your global theme will have a limegreen background.

Some component schemas, like the button schema, have property definitions for roundness. This means that you can change the default button roundness for all buttons.

Finally, let's see how a component theme can use the schema we created above.

```scss
$my-avatar-theme: igx-avatar-theme(
    $schema: $my-light-schema
);
```
## Conclusions

Although schemas require more advanced knowledge of our theming engine compared to theme functions and mixins, they present a powerful way for declaring component themes in your application. 

The good thing about schemas is they allow you to modify the global theme before it was built, thus reducing the amount of produced CSS.

Another great feature of theme schemas is that you can have as many as you want and swap them as you wish. **For instance, we use schemas internally to provide both light and dark themes by default. This allows you to switch the entire look of your application.**

## API Overview
* [Light Avatar Schema]({environment:sassApiUrl}/index.html#variable-_light-avatar)
* [Light Components Schema]({environment:sassApiUrl}/index.html#variable-light-schema)
* [Dark Components Schema]({environment:sassApiUrl}/index.html#variable-dark-schema)
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
