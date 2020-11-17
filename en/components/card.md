---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Angular Card component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Card component, Angular Card controls
---

# Card
<p class="highlight">The Ignite UI for Angular [`IgxCardComponent`]({environment:angularApiUrl}/classes/igxcardcomponent.html) displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard. The Card component supports pagination using the same component as the Ignite UI for Angular Grid, with some custom coding required.</p>

## Angular Card Example
<div class="sample-container loading" style="height: 500px">
    <iframe id="card-sample-0-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-0' width="100%" height="100%" seamless="" frameborder="0" class="lazyload" alt="Angular Card Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="card-sample-0-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-0-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

Cards allow you to easily display content composed of different types of objects or similar objects whose size and supported actions can vary.

### Getting Started

Import the `IgxCardModule` inside our **app.module.ts** file:

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

Then to represent the demo card template we can add the following code.

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

You will notice a few things above. First when we want to _tag_ an elements as a header title, like the `h3` heading, we place it between the `igx-card-header` tags and attach the `igxCardHeaderTitle` directive to the element. Conversely, if we wanted to make another heading element a `subtitle` we would attach the `igxCardHeaderSubtitle` to it.

Any image or video we want to show in the card, we wrap inside the `igx-card-media` tags. The `igx-card-media` allows us to size the content placed inside via the `width` and `height` attributes. In the example above we provided just `height`, which would leave the width to `auto`, thus allowing the image to stretch across the entire card surface, while maintaining the set height.

You can place anything inside the `igx-card-content` tags. Usually text goes there.

Finally, the `igx-card-actions` is where you'd place any actionable items, like buttons. If you use the `igxButton` directive on an element, it will automatically be placed correctly according to the material design spec inside the area.

### Media, Thumbs, and Avatars
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

### Outlined cards
The card has a `type` attribute you can set to either `default` (set automatically if omitted), or `outlined`. The `outlined` type removes any shadows from the card, replacing them with a thin border to separate the card from the background.

### Horizontal Layout

By default all sections of the card (header, content, media, actions) are layed out vertically. This is nice when we have a lot of vertical space. Say we wanted to lay out all the sections in the card horizontally. We can use the `horizontal` attribute of the card to set its layout.

Here's an example of an outlined horizonal card:

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
If everything went well, our card should look like this:

<div class="sample-container loading" style="height: 220px">
    <iframe id="card-sample-2-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-2' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="card-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Alternative layouts

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

<div class="sample-container loading" style="height: 270px">
    <iframe id="card-sample-3-iframe" data-src='{environment:demosBaseUrl}/layouts/card-sample-3' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="card-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Card Actions

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

## Styling
To get started with styling the card, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
``` 
Following the simplest approach, we create a new theme that extends the [`igx-card-theme`]({environment:sassApiUrl}/index.html#function-igx-card-theme) and accepts some parameters that style the card's items:

```scss
$colorful-card: igx-card-theme(
    $background: #011627,
    $header-text-color: #FEFEFE,
    $subtitle-text-color: #ECAA53,
    $content-text-color: #FEFEFE
);
```
As seen, the `igx-card-theme` exposes some useful parameters for basic styling of its items. 

### Including themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include igx-card($colorful-card);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include igx-card($colorful-card);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include igx-css-vars($colorful-card);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include igx-css-vars($colorful-card);
}
```

### Demo

<div class="sample-container loading" style="height: 486px">
    <iframe id="card-style-iframe" seamless width="100%" height="100%" frameborder="0" data-src="{environment:demosBaseUrl}/layouts/card-styling-sample" class="lazyload no-theming">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="card-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="card-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Summary
In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. We used some additional Ignite UI for Angular components inside our card, like avatars, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's theme by setting some exposed theme colors, creating custom palettes and extending schemas. 
The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

## API and Style References

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

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
