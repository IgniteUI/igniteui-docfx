---
title: Carousel Component
_description: Use Ignite UI for Angular Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Carousel component, Angular Carousel control
---

## Carousel
<p class="highlight">The Ignite UI for Angular Carousel component is developed as a native [Angular component](https://angular.io/guide/architecture#components). Use it to browse or navigate through a collection of slides, including image galleries, cards, onboarding tutorials, or page-based interfaces.</p>
<div class="divider"></div>

### Demo
<div class="sample-container loading" style="height: 550px">
    <iframe id="carousel-base-sample-iframe" seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/layouts/carousel-base-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="carousel-base-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


### Getting Started
The carousel can be used as a full-screen element or situated inside another component. Also, the slides may feature any valid html content inside, including other Angular components.

#### First steps
<div class="divider--half"></div>

To get started with the Carousel component, install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

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

In this section we will go through the setup of the above defined **onboarding demo**.

#### Configuring IgxCarousel
<div class="divider--half"></div>

By **default** carousel's **[`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop)** behavior is set to true ( *looping is when the first slide comes after navigating Next from the last slide or the last slide comes after navigating Previous from the first slide* ).

To keep track of each slide index, the carousel has indicators. The indicators position, by default, is at the *bottom* of the carousel and to change it, we have to use the [indicatorsOrientation]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsorientation) property by assigning it with `top`.

The carousel template for now will look like this:

```html
<div class="carousel-container">
    <igx-carousel #carousel [loop]="false" indicatorsOrientation="top">
      ...
    </igx-carousel>
</div>
```

#### Adding slides with *ngFor
<div class="divider--half"></div>

If we have slides with the same type of content, it will be much easier to use *ngFor* to add them in the template.

Since our first three slides are going to contain only images, we are going to create an array of objects in the **ts** file and use it to populate the **igx-carousel** with slides:

```typescript
...
public slides = 
  [
      {
        src: "assets/images/svg/carousel/Onboarding1.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding2.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding3.svg"
      }
  ];
...
```

```html
...
  <igx-slide  *ngFor="let slide of slides;">
      <div class="image-container">
          <img style="width: 80%" [src]="slide.src">
      </div>
  </igx-slide>
...
```

#### Slide containing other components
<div class="divider--half"></div>

The last slide is going to contain an image, a sign up form and a button for routing, so we are going to define it separately:
```html
...
  <igx-slide>
      <div class="slide-content-wrapper">

          <div style="margin: 20px auto; width: 60%">
              <img style="width: 80%" src="assets/images/svg/carousel/SignUp.svg">
              <button igxButton="icon" (click)="goTo()">
                  <igx-icon class="icon" fontSet="material">info</igx-icon>
              </button>
          </div>

          <form #form class="signInForm" >
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
          <button igxButton="raised" type="submit" (click)="form.reset()">Sign Up</button>
      </div>
  </igx-slide>
...
```

#### Custom indicators
<div class="divider--half"></div>

To add custom carousel indicators we will have to use the [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html), like this:

```html
...
  <ng-template igxCarouselIndicator let-slide>
      <div [ngClass]="{'selected': slide.current === current}" class="indicator"></div>
  </ng-template>
...
```

#### Custom nav buttons

The last step is to customize the navigation buttons.

To achieve this we will use [IgxCarouselPrevButtonDirective]({environment:angularApiUrl}/classes/igxcarouselprevbuttondirective.html) and [IgxCarouselNextButtonDirective]({environment:angularApiUrl}/classes/igxcarouselnextbuttondirective.html) with the following approach:

```html
...
  <ng-template igxCarouselNextButton let-disabled>
          <button igxButton="fab" igxRipple="white" [disabled]="disabled">
                  <igx-icon fontSet="material">add</igx-icon>
          </button>
  </ng-template>

  <ng-template igxCarouselPrevButton let-disabled>
          <button igxButton="fab" igxRipple="white" [disabled]="disabled">
                  <igx-icon fontSet="material">remove</igx-icon>
          </button>
  </ng-template>
...
```

### Animations

Animated slide transitioning gives the end users really nice experience during their interaction with the carousel.

#### Animations
The carousel by default is configured with **slide** animation transitioning and also supports a **fade** animation.

The animations are configured through the [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationtype) input, like this:

```html

<igx-carousel animationType="fade">
...
</igx-carousel>

```
Setting `none` to the `animationType` input disables carousel's animations.


#### Demo

The demo below demonstrates the different types of animations, which the carousel supports. 

<div class="sample-container loading" style="height: 700px">
    <iframe id="carousel-animations-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-animations-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


### Navigation
<div class="divider--half"></div>

Transition and navigation are the most important carousel features.

The navigation in the carousel can be handled by the user through navigation buttons, keyboard navigation and pan interaction on mobile devices.

#### Pan gestures
<div class="divider--half"></div>

By default the carousel can be used for any kind of touch devices. This is optional and can be changed by setting `false` to the [gesturesSupport]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#gesturessupport) property.

The carousel [animations](carousel.md#animations) are supported even on a touch device, which makes it consistent with any platform and a perfect tool for building a progressive web application([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)) with.

#### Keyboard navigation
<div class="divider--half"></div>

* To navigate to the **next**/**previous** slide, you have to use, respectfully: 
    * `Arrow Right` key for the next slide
    * `Arrow Left` key for the previous slide
*  To navigate to the **end**/**start** slide you have to use, respectfully:
    * `End` key for the end slide
    * `Home` key for the start slide
 
#### Automatic transitioning
<div class="divider--half"></div>

The **IgxCarousel** can be easily configured to change the slides automatically, without any user interaction. This way you can create your own slideshow by only setting a transition interval to the [interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) property, which determines the amount of time in milliseconds between slides transition. 

>[!NOTE]
>The automatic slide transitioning is not entirely user-independent by default. Positioning the mouse pointer over a slide will interrupt the current slide transition until the mouse pointer leaves the slide area. This can be prevented by setting [pause]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) property to `false`. 

#### Demo
<div class="divider--half"></div>

Let's create a fully autonomous carousel with enabled looping, synced with a [list item]({environment:angularApiUrl}/classes/igxlistitemcomponent.html) and the selection of a slide will be controlled by the user only through the `list items`.


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
<iframe id="carousel-no-navigation-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


`
###API References
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent Styles]({environment:sassApiUrl}/index.html#function-igx-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)
