---
title: Angular Card Component – Ignite UI for Angular
_description: With Angular Card component you can present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information. Try it now.
_keywords: Angular Card component, Angular Card control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---

# Angular Card Component Overview
<p class="highlight">
Angular Card represents a flexible container that has different elements like title text, descriptions, image styles, call to action buttons, links and others. In order to represent a given scenario/content in the best possible way, it offers various display options, headers, footers, as well as background colors, animations, and more.  

This lightweight Angular Card component is used for creating all sorts of cards, some of them can be – business cards, material flipping cards, stacked cards.
</p>

## Angular Card Example
Below you can see a basic sample of a well-crafted Ignite UI for Angular Card with main card sections like image, title, subtitle, primary card content, container for a button. 

<code-view style="height: 500px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-0" alt="Angular Card Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Card

To get started with the Ignite UI for Angular Card component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxCardModule` inside your **app.module.ts** file.

```typescript
// app.module.ts
...
import { IgxCardModule } from 'igniteui-angular';
// import { IgxCardModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxCardModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCardComponent` as a standalone dependency, or use the [`IGX_CARD_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/card/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';
// import { IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
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
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_CARD_DIRECTIVES]
    /* or imports: [IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardMediaDirective,
        IgxCardContentDirective,
        IgxCardActionsComponent,
        IgxCardFooterDirective,
        IgxCardHeaderTitleDirective,
        IgxCardHeaderSubtitleDirective,
        IgxCardThumbnailDirective,
        IgxButtonDirective,
        IgxRippleDirective] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Card module or directives imported, you can start using the `igx-card` component.

## Using the Angular Card Component
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

Any image or video we want to show in the Angular Card, we wrap inside the `igx-card-media` tags. The `igx-card-media` allows us to size the content placed inside via the `width` and `height` attributes. In the example above we provided just `height`, which would leave the width to `auto`, thus allowing the image to stretch across the entire card surface, while maintaining the set height.

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

### Angular Card Horizontal Layout

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


<code-view style="height: 220px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-2" >
</code-view>


### Alternative layouts

You can get even more creative with the layout of the `igx-card`.

Below is an example showing how you can create a semi-horizontal card, where we have every section of the card layed out vertically, while the `igx-card-media` appears alongside the vertical sections of the card.

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


<code-view style="height: 270px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-sample-3" >
</code-view>


### Angular Card Actions

The Angular Card actions area allows additional configuration to what we have already mentioned.

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
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 
Following the simplest approach, we create a new theme that extends the [`card-theme`]({environment:sassApiUrl}/index.html#function-card-theme) and accepts some parameters that style the card's items:

```scss
$colorful-card: card-theme(
    $background: #011627,
    $header-text-color: #FEFEFE,
    $subtitle-text-color: #ECAA53,
    $content-text-color: #FEFEFE
);
```
As seen, the `card-theme` exposes some useful parameters for basic styling of its items. 

### Including themes

<div class="divider"></div>

The last step is to **include** the component theme in our application.

If `$legacy-support` is set to `true`, include the **component theme** like that:

```scss
 @include card($colorful-card);
```
>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`

```scss
:host {
     ::ng-deep {
        @include card($colorful-card);
    }
}
```

<div class="divider"></div>

If `$legacy-support` is set to `false`(default), include the component **css variables** like that:

```scss
@include css-vars($colorful-card);
```

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, you still have to use `:host` because you need a global selector in order to override the variables.

```scss
:host {
    @include css-vars($colorful-card);
}
```

### Angular Card Demo


<code-view style="height: 486px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/card-styling-sample" >
</code-view>


### Summary
In this article we covered a lot of ground with the card component. First, we created a very simple card with text content only. Then added some images to make the card a bit more appealing. We used some additional Ignite UI for Angular components inside our card, avatar, buttons and icons, to enrich the experience and add some functionality. And finally, we changed the card's theme by setting some exposed theme colors, creating custom palettes and extending schemas. 
The card component is capable of displaying more different layouts worth exploring in the Card Demo in the beginning of this article.

## API and Style References

For more detailed information regarding the card's API, refer to the following links:
* [`IgxCardComponent API`]({environment:angularApiUrl}/classes/igxcardcomponent.html)

The following built-in CSS styles helped us achieve this card layout:

* [`IgxCardComponent Styles`]({environment:sassApiUrl}/index.html#function-card-theme)

Additional components and/or directives that were used:

* [`IgxAvatarComponent`]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [`IgxIconComponent`]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [`IgxButtonDirective`]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)

Styles:

* [`IgxAvatarComponent Styles`]({environment:sassApiUrl}/index.html#function-avatar-theme)
* [`IgxIconComponent Styles`]({environment:sassApiUrl}/index.html#function-icon-theme)
* [`IgxButtonDirective Styles`]({environment:sassApiUrl}/index.html#function-button-theme)

<div class="divider"></div>

## Theming Dependencies
* [IgxButton Theme]({environment:sassApiUrl}/index.html#function-button-theme)
* [IgxAvatar Theme]({environment:sassApiUrl}/index.html#function-avatar-theme)
* [IgxIconTheme]({environment:sassApiUrl}/index.html#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
