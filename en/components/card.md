---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Angular Card component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Card component, Angular Card controls
---

##Card
<p class="highlight">The Ignite UI for Angular [`IgxCardComponent`]({environment:angularApiUrl}/classes/igxcardcomponent.html) displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard. The Card component supports pagination using the same component as the Ignite UI for Angular Grid, with some custom coding required.</p>
<div class="divider"></div>

###Card Demo
<div class="sample-container loading" style="height: 690px">
    <iframe id="card-sample-4-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

###Usage

Cards allow you to easily display content composed of different types of objects or similar objects whose size and supported actions can vary.

####Getting Started

To get started with the Card component, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

The next step is to import the `IgxCardModule` inside our **app.module.ts** file:

```typescript
// app.module.ts
...
import { IgxCardModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxCardModule],
    ...
})
export class AppModule {}
```

Then in the template of our first card component we can add the following code to display a card with a media image, header, content and actions area.

```html
<!--card.component.html>-->

<igx-card>
    <igx-card-media height="196px">
        <img [src]="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50">
    </igx-card-media>

    <igx-card-header>
        <h3 igxCardHeaderTitle>New York</h3>
        <h5 igxCardHeaderSubtitle>City in New York</h5>
    </igx-card-header>

    <igx-card-content>
        <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.</p>
    </igx-card-content>

    <igx-card-actions>
        <button igxButton igxRipple>Read More</button>
        <button igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>favorite</igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>share</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

If all went well, you should see the following card in your browser:

<div class="sample-container loading" style="height: 486px">
    <iframe id="card-sample-0-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-0' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-0-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

You will notice a few things above. First when we want to _tag_ an elements as a header title, like the `h3` heading, we place it between the `igx-car-header` tags and attach the `igxCardHeaderTitle` directive to the element. Conversely, if we wanted to make another heading element a `subtitle` we would attach the `igxCardHeaderSubtitle` to it.

Any image or video we want to show in the card, we wrap inside the `igx-card-media` tags. The `igx-card-media` allows us to size the content placed inside via the `width` and `height` attributes. In the example above we provided just `height`, which would leave the width to `auto`, thus allowing the image to stretch across the entire card surface, while maintaining the set height.

You can place anything inside the `igx-card-content` tags. Usually text goes there.

Finally, the `igx-card-actions` is where you'd place any actionable items, like buttons. If you use the `igxButton` directive on an element, it will automatically be placed correctly according to the material design spec inside the area.

#### Media, Thumbs, and Avatars
If you want to show an image or icon in the card header next to the title and subtitle, you can do it by using the `igxCardThumbnail` directive.

Taking the card above as an example, we can edit the contents of the `igx-card-header` and add a `igxCardThumbnail` container to hold an icon:

```html
<igx-card-header>
    <div igxCardThumbnail>
        <igx-icon>place</igx-icon>
    </div>
    
    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

The above example will show the icon alongside the title and subtitle in the card header.

We also automatically detect the presence of `igx-avatar` or `igx-card-media` placed in the card header. They will appear as if they were card thumbnails. So you can do:

```html
<igx-card-header>
    <igx-avatar>
        <igx-icon>place</igx-icon>
    </igx-avatar>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

or, even this:

```html
<igx-card-header>
    <igx-card-media width="40px" height="40px">
        <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=50">
    </igx-card-media>

    <h3 igxCardHeaderTitle>Title</h3>
    <h5 igxCardHeaderSubtitle>Subtitle</h5>
</igx-card-header>
```

#### Outlined cards
The card has a `type` attribute you can set to either `default` (set automatically if omitted), or `outlined`. The `outlined` type removes any shadows from the card, replacing them with a thin border to separate the card from the background.

Here's an example of an outlined card:

```html
<!--outlined-card.component.html>-->
<igx-card type="outlined">
    <igx-card-header>
        <igx-card-media width="64px" height="64px">
            <img [src]="card.imageUrl">
        </igx-card-media>

        <h5 igxCardHeaderTitle>{{card.title}}</h5>
        <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
    </igx-card-header>

    <igx-divider></igx-divider>

    <igx-card-actions layout="justify">
        <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>{{icon}}</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

At this point the card should look similar to the following:
<div class="sample-container loading" style="height: 168px">
    <iframe id="card-sample-1-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Horizontal Layout

By default all sections of the card (header, content, media, actions) are layed out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out all the sections in the card horizontally. We can use the `horizontal` attribute of the card to set its layout.

Take a look at this example:

```html
<igx-card type="outlined" [horizontal]="horizontal">
    <div class="h-sample-column">
        <igx-card-header>
            <h5 igxCardHeaderTitle>{{card.title}}</h5>
            <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
            <igx-card-media width="64px" height="64px">
                <img [src]="card.imageUrl">
            </igx-card-media>
        </igx-card-header>

        <igx-card-content>
            <p>{{card.content}}</p>
        </igx-card-content>
    </div>

    <igx-divider [vertical]="horizontal"></igx-divider>

    <igx-card-actions layout="justify">
        <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
            <igx-icon>{{icon}}</igx-icon>
        </button>
    </igx-card-actions>
</igx-card>
```

We are using the `.h-sample-column` class to bundle the `igx-card-header` and `igx-card-content` together, keeping them aligned vertically, while other sections in the card align horizontally. 

The styles that `.h-sample-column` class applies are:

```scss
.h-sample-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0%;

    igx-card-header {
        padding-bottom: 0;
    }
}
```

Notice how the buttons in the `igx-card-actions` have now switched to a `vertical` layout. The `igx-card-actions` has an `inverse` layout relationship with its parent. So whenever the card's `horizontal` attribute is set to `true` the actions `vertical` property will be set to `true` and vice versa.

You can set the `vertical` attribute of he actions area explicitly, thus overriding this default behavior. 

```html
<igx-card-actions layout="justify" [vertical]="false">
    <button *ngFor="let icon of card.icons;" igxButton="icon" igxRipple igxRippleCentered="true">
        <igx-icon>{{icon}}</igx-icon>
    </button>
</igx-card-actions>
```

Here's how our horizontal card looks:

<div class="sample-container loading" style="height: 202px">
    <iframe id="card-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Alternative layouts

You can get even more creative with the layout of the `igx-card`.

Bellow is an example showing how you can create a semi-horizontal card, where we have every section of the card layed out vertically, while the `igx-card-media` appears alongside the vertical sections of the card.

```html
<igx-card [horizontal]="horizontal">
    <div igxLayout igxLayoutDir="column" igxFlex igxFlexGrow="1">
        <igx-card-header>
            <igx-avatar [src]="card.avatarUrl"></igx-avatar>
            <h5 igxCardHeaderTitle>{{card.title}}</h5>
            <h5 igxCardHeaderSubtitle>{{card.subtitle}}</h5>
        </igx-card-header>

        <igx-card-content>
            <p>{{card.content}}</p>
        </igx-card-content>

        <igx-card-actions [vertical]="false">
            <button *ngFor="let button of card.buttons;" igxButton="flat" igxRipple>
                {{button}}
            </button>
        </igx-card-actions>
    </div>

    <igx-card-media width="96px">
        <img [src]="card.imageUrl">
    </igx-card-media>
</igx-card>
```

<div class="sample-container loading" style="height: 252px">
    <iframe id="card-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Card Actions

The card actions area allows additional configuration to what we have already mentioned.

You can reverse order of the flat buttons and the button icons using the `reverse` attribute.

```html
<igx-card-actions [reverse]="true">
    <button igxButton>Button</button>

    <button igxButton="icon">
        <igx-icon>star</igx-icon>
    </button>
</igx-card-actions>
```

Now the icon buttons will appear before the flat-style text buttons.

You can also justify the buttons so that they are layed out across the entire axis, not at the opposite ends. To do that, use the `layout` attribute an set its value to `justify`, like below:

```html
<igx-card-actions layout="justify">
    <button igxButton>Button</button>

    <button igxButton="icon">
        <igx-icon>star</igx-icon>
    </button>
</igx-card-actions>
```

### Styling
To get started with styling the card, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 
Following the simplest approach, we create a new theme that extends the [`igx-card-theme`]({environment:sassApiUrl}/index.html#function-igx-card-theme) and accepts some parameters that style the card's items:

```scss
$colorful-card: igx-card-theme(
    $background: #FD6BD93A,
    $header-text-color: #F2F607,
    $subtitle-text-color: #FA2509,
    $content-text-color: #0A41F7
);
```
As seen, the `igx-card-theme` exposes some useful parameters for basic styling of its items. 

The last step is to **include** the component's theme.

```scss
 @include igx-card($colorful-card);
```
>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
     ::ng-deep {
        @include igx-card($colorful-card);
    }
}
```
#### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #E7EB0B;
$red-color: #F00B1E;
$colorful-palette: igx-palette($primary: $red-color, $secondary: $yellow-color);
```

And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$colorful-card: igx-card-theme(
    $palette: $colorful-palette,
    $background: igx-color($colorful-palette, "secondary", 100),
    $header-text-color: igx-color($colorful-palette, "primary", 200),
    $subtitle-text-color: igx-color($colorful-palette, "primary", 500),
    $content-text-color: igx-color($colorful-palette, "primary", 700)
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/palette.md) topic for detailed guidance on how to use them.

#### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - the [`dark-card`]({environment:sassApiUrl}/index.html#variable-_dark-card) schema:

```scss
// Extending the dark-card schema
$dark-card-schema: extend($_dark-card,
    (
        background:(
            igx-color:("secondary", 100)
        ),
        header-text-color:(
            igx-color:("primary", 500)
        ),
        subtitle-text-color:(
            igx-color:("primary", 500)
        ),
        content-text-color:(
            igx-color:("primary", 700)
        )
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-card: $dark-card-schema
));

// Defining the dark-card theme with the global dark schema
$dark-card: igx-card-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

#### Demo

<div class="sample-container loading" style="height: 486px">
    <iframe id="card-style-iframe" seamless="" width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/layouts/card-styling-sample" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Summary
In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. We used some additional Ignite UI for Angular components inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's theme by setting some exposed theme colors, creating custom palettes and extending schemas. 
The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

### API and Style References

For more detailed information regarding the card's API, refer to the following links:
* [`IgxCardComponent API`]({environment:angularApiUrl}/classes/igxcardcomponent.html)

The following built-in CSS styles helped us achieve this card layout:

* [`IgxCardComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-card-theme)

Additional components and/or directives that were used:

* [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)

Styles:

* [`IgxAvatarComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-avatar-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-icon-theme)
* [`IgxButtonDirective Styles`]({environment:sassApiUrl}/index.html#function-igx-button-theme)

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
