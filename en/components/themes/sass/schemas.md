---
title: Schemas
_description: Ignite UI for Angular theming schemas allow you to create recipes for component themes.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library 
---

# Schemas
<p class="highlight">Schemas are a simple, declarative way to list all properties a component theme uses.</p>

<div class="divider--half"></div>

## Overview
Schemas are like recipes. They are simple Sass maps, similar to JSON that allow us to define all properties a theme might use. Those properties can be colors, elevation levels, roundness, etc. Anything a theme consumes can be described as a `schema`, then passed to the global or component theme. A component schema can extend an existing component schema and override its properties.

**Schemas should be used when you want to change the default theme properties of a component in a way that will not result in duplicating CSS style rules or CSS variables**.

Let's take a look at the light Material Avatar schema:

```scss
$_light-avatar: extend(
    $_square-shape-avatar,
    (
        background: (
            igx-color: ('grays', 400)
        ),

        color: (
            igx-color: ('grays', 800)
        ),
    )
);
```

As you can see from the example above, the component schema defines the properties the [Avatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme) consumes. It just prescribes the colors the avatar should use, without referencing a concrete color palette map.

Let's take the `background` property for example. It tells the avatar theme what the default background should be. 

*The `background` can be assigned any value, that is, a value that can be assigned to the CSS `background-color` property.* You can also assign a map to `background`, like in the sample above. When you assign a map to the `background` property, the map should contain functions as the key names (e.g. `igx-color`), and arguments for the functions as values for said keys. We do this to be able to resolve the values later on, when the avatar theme is being built. See, because we don't know the palette a user might pass to the avatar theme, we should be able to resolve it later on, only when the palette is known.

We can also add other functions and arguments to the `background` map as key value pairs. For instance we may want to run the resolved result from `igx-color: ('grays', 400)` through the `to-opaque` function we have, to resolve the HEX value for the `400` color variant of the `grays` palette, which is usually represented in rgba. 

Let's see how the schema will change when we make this addition:

```scss
$_light-avatar: (
    icon-background: (
        igx-color: ('grays', 400),
        to-opaque: #fff
    ),
    ...
);
```

The result of the `igx-color` function call will automatically be passed as the first argument to the `to-opaque` function. Since `to-opaque` accepts a second argument for the background color, we provide it as the value. If the function doesn't accept any additional arguments, you should assign an empty list `()` as its value.

<div class="divider--half"></div>

## Extending Schemas
As you saw from the example above. Schemas are simple maps and as such can be extended by overriding some of their properties. You might want to _extend_ the material avatar schema by only changing its `background` property, without having to copy all other properties manually. This is easily done using the `extend` function we provide.

```scss
$my-avatar-schema: extend($_light-avatar, (
    background: limegreen
));
```

Now the value of `$my-avatar-schema` will contain all properties of `$_light-avatar`, but the value for `background` will have be `limegreen`.

## Consuming Schemas
Until now we have shown what a component schema is and how you can create one, but we have not talked about how you can use schemas in your Sass project. 

Individual component schemas are bundled up in a global schema map for all components we have. So the `$_light-avatar` schema is part of the global `$light-material-schema`. The `$light-material-schema` maps component schemas to component names. The `$light-material-schema` looks something like this:

```scss
$light-material-schema: (
    igx-avatar: $_light-avatar,
    igx-badge: $_light-badge,
    ...
);
```

We do this so we can pass the entire `$light-material-schema` to the `igx-theme` mixin. So for instance if we wanted to modify the `$light-material-schema` by replacing the default component schema the avatar component uses we might do:

```scss
$my-light-schema: extend($light-material-schema, (
    igx-avatar: $my-avatar-schema
));
```

Now we can pass all that to the global theme mixin:

```scss
// styles.scss
@include igx-theme(
    $schema: $my-light-schema,
    $palette: $default-palette
);
```

Avatars in your global theme will now have use limegreen color for their background.

Some component schemas, like the button schema, have property definitions for roundness. This means that you can change the default button roundness for all buttons.

Finally, let's see how individual component themes can use the schema we created above.

```scss
$my-avatar-theme: igx-avatar-theme(
    $schema: $my-avatar-schema
);
```

## Conclusions

Although schemas require a deeper knowledge of our theming library compared to theme functions and mixins, they allow us to declare component themes without increasing the size of the produced CSS. Another benefit of using schemas is how reusable and extensible they are as they are simple Sass maps. You can mix and match component schemas to create global theme schemas.

We use schemas internally to create variations that result in different pre-bundled themes for Material, Bootstrap, Fluent, and Indigo.

## API Overview
* [Avatar Schema]({environment:sassApiUrl}/index.html#variable-_light-avatar)
* [Light Components Schema]({environment:sassApiUrl}/index.html#variable-light-schema)
* [Dark Components Schema]({environment:sassApiUrl}/index.html#variable-dark-schema)
* [Global Theme]({environment:sassApiUrl}/index.html#mixin-igx-theme)
* [Avatar Theme]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
