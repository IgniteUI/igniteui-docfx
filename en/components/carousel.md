---
title: Carousel Component
_description: Use Ignite UI for Angular Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Carousel component, Angular Carousel control
---

# Carousel
<p class="highlight">The Ignite UI for Angular Carousel component is developed as a native [Angular component](https://angular.io/guide/architecture#components). Use it to browse or navigate through a collection of slides, including image galleries, cards, onboarding tutorials, or page-based interfaces.</p>
<div class="divider"></div>

## Angular Carousel Example
<div class="sample-container loading" style="height: 550px">
    <iframe id="carousel-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/layouts/carousel" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


## Usage
The carousel can be used as a full-screen element or situated inside another component. Also, the slides may feature any valid html content inside, including other Angular components.

### First steps
<div class="divider--half"></div>

>[!NOTE]
>This component requires [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) to be imported in the root module of the application in order for touch interactions to work as expected.

The next step is to import the **IgxCarouselModule** in our **app.module.ts** file:
```typescript
// app.module.ts

...
import { IgxCarouselModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxCarouselModule],
    ...
})
export class AppModule {}
```

In this section we will go through the setup of the above defined **demo**.

### Adding slides with *ngFor
<div class="divider--half"></div>

If we have slides with the same type of content, the easiest approach is to use *\*ngFor* to add them in the template.

Since our slides are going to contain only images, we are going to create an array of objects in the **ts** file and use it to populate the **igx-carousel** with slides:

```typescript
...
public slides = [
      {
        src: "/assets/images/carousel/ignite-ui-angular-indigo-design.png"
      },
      {
        src: "/assets/images/carousel/slider-image-chart.png"
      },
      {
        src: "/assets/images/carousel/ignite-ui-angular-charts.png"
      }
  ];
...
```

```html
...
<div class="carousel-container">
    <igx-carousel #carousel>
            <igx-slide  *ngFor="let slide of slides;">
                <div class="image-container">
                    <img [src]="slide.src">
                </div>
             </igx-slide>
    </igx-carousel>
</div>
...
```
## Examples

### Configuring IgxCarousel
<div class="divider--half"></div>

By default, the carousel has its **[`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop)** input property set to `true` ( *looping occurs when the first slide comes after the last by navigating using the Next action, or when the last slide comes after the first by using the Previous action* ). The looping behavior can be disabled by setting the value of the `loop` input to `false`.

To keep track of each slide index, the carousel has indicators that are positioned at the `bottom` of the carousel by default. In order to change this behavior, we have to use the [indicatorsOrientation]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsorientation) property and assign it to `top`. Indicators can be disabled by adding an empty template.

The carousel template may look like this:

```html
<div class="carousel-container">
    <igx-carousel #carousel [loop]="false">
      ...  
        <!-- Adding an empty template to disable carousel's indicators -->
        <ng-template igxCarouselIndicator></ng-template>
    </igx-carousel>
</div>
```

### Custom indicators
<div class="divider--half"></div>

To add custom carousel indicators we will have to use the [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html), like this:

```html
...
  <ng-template igxCarouselIndicator let-slide>
      <div [ngClass]="{'selected': slide.current === current}"></div>
  </ng-template>
...
```

### Custom nav buttons

To achieve this we will use the [IgxCarouselPrevButtonDirective]({environment:angularApiUrl}/classes/igxcarouselprevbuttondirective.html) and [IgxCarouselNextButtonDirective]({environment:angularApiUrl}/classes/igxcarouselnextbuttondirective.html) directives:

```html
...
    <ng-template igxCarouselNextButton let-disabled>
        <button igxButton="fab" igxRipple="white" [disabled]="disabled">
            <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
    </ng-template>

    <ng-template igxCarouselPrevButton let-disabled>
        <button igxButton="fab" igxRipple="white" [disabled]="disabled">
            <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
    </ng-template>
...
```

### Slide containing other components
<div class="divider--half"></div>

This carousel is going to contain slides with forms and images:
```html
...
  <div class="carousel-container">
    <igx-carousel>
        <igx-slide>
            <div class="slide-content-wrapper">
                <img src="assets/images/svg/carousel/SignUp.svg">
                <form #form class="signInForm">
                    <igx-input-group>
                        <igx-prefix>
                            <igx-icon>person</igx-icon>
                        </igx-prefix>
                        <label style="display: flex;" igxLabel for="username">Username</label>
                        <input igxInput id="username" type="text" />
                    </igx-input-group>
                    <igx-input-group>
                        <igx-prefix>
                            <igx-icon>lock</igx-icon>
                        </igx-prefix>
                        <label style="display: flex;" igxLabel for="password">Password</label>
                        <input igxInput id="password" type="password" />
                    </igx-input-group>
                </form>
                <div class="btn">
                    <button igxButton="raised" type="submit" (click)="form.reset()">Sign In</button>
                </div>
            </div>
        </igx-slide>

        <igx-slide>
            <div class="slide-content-wrapper">
                <img src="assets/images/svg/carousel/Route.svg">
                <form #form2 class="searchForm">
                    <igx-input-group>
                        <igx-prefix>
                            <igx-icon>search</igx-icon>
                        </igx-prefix>
                        <label style="display: flex;" igxLabel for="username">Search</label>
                        <input igxInput id="search" type="text" />
                    </igx-input-group>
                </form>
                <div class="btn">
                    <button igxButton="raised" type="submit" (click)="form2.reset()">Search</button>
                </div>
            </div>
        </igx-slide>
    </igx-carousel>
</div>
...
```

#### Demo

<div class="sample-container loading" style="height: 700px">
    <iframe id="carousel-with-components-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-with-components-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-with-components-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-with-components-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


## Animations

Animated slide transitions provide the end-users a nice experience when interacting with the carousel.

The carousel is configured to use the `slide` animation by default but it also supports `fade` as an alternative animation.

The animations are configured through the [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationtype) input, like this:

```html
<igx-carousel animationType="fade">
...
</igx-carousel>

```
Setting `none` to the `animationType` input disables carousel's animations.


### Demo

The demo below demonstrates the different types of animations, which the carousel supports. 

<div class="sample-container loading" style="height: 700px">
    <iframe id="carousel-animations-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-animations-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


## Navigation
<div class="divider--half"></div>

Transition and navigation are the most important carousel features.

The navigation in the carousel can be handled by the user through navigation buttons, keyboard navigation and pan interaction on mobile devices.

### Pan gestures
<div class="divider--half"></div>

By default, the carousel can be used on any touch-enabled device. This is optional and can be changed by setting the [gesturesSupport]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#gesturessupport) property to `false`.

The carousel [animations](carousel.md#animations) are fully supported on touch devices, which makes the carousel consistent with any platform and great when used in progressive web applications ([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)).

### Keyboard navigation
<div class="divider--half"></div>

* To navigate to the **next**/**previous** slide, you have to use, respectfully: 
    * `Arrow Right` key for the next slide
    * `Arrow Left` key for the previous slide
*  To navigate to the **end**/**start** slide you have to use, respectfully:
    * `End` key for the end slide
    * `Home` key for the start slide
 
### Automatic transitioning
<div class="divider--half"></div>

The **IgxCarousel** can be easily configured to change the slides automatically, without any user interaction. This way you can create your own slideshow by only setting a transition interval to the [interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) property, which determines the amount of time in milliseconds between slides transition. 

>[!NOTE]
>The automatic slide transitioning is not entirely user-independent by default. Positioning the mouse pointer over a slide will interrupt the current slide transition until the mouse pointer leaves the slide area. This can be prevented by setting [pause]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) property to `false`. 

## Advanced Example
<div class="divider--half"></div>

Let's create a fully automated carousel with looping enabled. Each slide will be synced with a [list item]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) in a list. Clicking on a list item will trigger a slide change.


To achieve this goal, we have to do the following configurations to the carousel:
 - disable `gesturesSupport`
 - disable the `navigation` buttons
 - disable the carousel `indicators`
 - disable the `pause` on user interaction with the slide
 - add transition `interval`

Our carousel will look like this in the template:

```html
...
<div class="carousel-wrapper">
    <igx-carousel [navigation]="false" [pause]="false" animationType="fade" [interval]="2000" [gesturesSupport]="false">
        <div class="slides-wrapper">
            <igx-slide *ngFor="let item of slides">
                  <!-- Slides content goes here -->
             </igx-slide>
        </div>
        <!-- Adding an empty template to disable carousel's indicators -->
        <ng-template igxCarouselIndicator></ng-template>
    </igx-carousel>
</div>
...
```
We are ready with the carousel configuration. Now we need only to add a [list](list.md) component and sync the both components:

adding [IgxList]({environment:angularApiUrl}/classes/igxlistcomponent.html):
```html
...
<div class="list-wrapper">
    <igx-list displayDensity="compact">
      <!-- Adding disabled classes when the list item index does not match the current slide index-->
        <igx-list-item *ngFor="let item of slides; let i=index" [ngClass]="{'disabled': i !== currentIndex }" >
      <!-- List item content goes here -->
        </igx-list-item>
    </igx-list>
</div>
...
```
syncing the components by hooking up on carousel's [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) and list's [onItemClicked]({environment:angularApiUrl}/classes/igxlistcomponent.html#onitemclicked) events:

```typescript
  public ngOnInit() {
    ...
    this.list.onItemClicked.subscribe((args: IListItemClickEventArgs) => {
        this.currentIndex = args.item.index;
        this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.onSlideChanged.subscribe((args: ISlideEventArgs) => {
        this.currentIndex = args.slide.index;
    });
  }
```
These configurions will have the following result:
<div class="sample-container loading" style="height: 700px">
<iframe id="carousel-no-navigation-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>




## API References
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent Styles]({environment:sassApiUrl}/index.html#function-igx-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
