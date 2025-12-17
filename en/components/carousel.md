---
title: Angular Carousel Component – Ignite UI for Angular - MIT license 
_description: Use Ignite UI for Angular Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features. Try it now
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Carousel component, Angular Carousel control
_license: MIT
---

# Angular Carousel Component Overview

<p class="highlight">Ignite UI for Angular Carousel is a responsive, lightweight component that provides the most flexible way to create slideshow-like web experience for users who navigate back and forth through a collection of images with text slides, links, and other html elements.

The Angular Carousel component allows you to use animations, slide transitions, and customization so you can easily tweak the interface and build Angular custom carousel.
</p>
<div class="divider"></div>

## Angular Carousel Example

The Angular Carousel demo you see below shows slides containing only images. We’ve enabled navigation buttons allowing users to easily move from one slide to another – going back and forth.

<code-view style="height: 550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/carousel/" alt="Angular Carousel Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Carousel

To get started with the Ignite UI for Angular Carousel component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [_getting started_](general/getting-started.md) topic.

The next step is to import the **IgxCarouselModule** in our **app.module.ts** file:

>[!NOTE]
>This component can utilize the [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) **optionally**. It can be imported in the root module of the application in order for touch interactions to work as expected.

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular/carousel';
// import { IgxCarouselModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., HammerModule, IgxCarouselModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxCarouselComponent` as a standalone dependency, or use the [`IGX_CAROUSEL_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/carousel/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { IGX_CAROUSEL_DIRECTIVES } from 'igniteui-angular/carousel';
// import { IGX_CAROUSEL_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-carousel>
        <igx-slide *ngFor="let slide of slides">
            <div class="image-container">
                <img [src]="slide.src" />
            </div>
        </igx-slide>
    </igx-carousel>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [HammerModule, IGX_CAROUSEL_DIRECTIVES]
    /* or imports: [HammerModule, IgxCarouselComponent, IgxSlideComponent] */
})
export class HomeComponent {}
```

Now that you have the Ignite UI for Angular Carousel module or directives imported, you can start using the `igx-carousel` component.

## Using the Angular Carousel Component

The Ignite UI for Angular Carousel component can be used as a full-screen element or situated inside another component. Also, the slides may feature any valid html content inside, including other Angular components.

In this section we will go through the setup of the above defined **demo**.

### Adding slides with *ngFor

<div class="divider--half"></div>

If we have slides with the same type of content, the easiest approach is to use _\*ngFor_ to add them in the template.

Since our slides are going to contain only images, we are going to create an array of objects in the **ts** file and use it to populate the **igx-carousel** with slides:

```typescript
@Component({...})
export class HomeComponent {
    public slides = [
        { src: '/assets/images/carousel/ignite-ui-angular-indigo-design.png' },
        { src: '/assets/images/carousel/slider-image-chart.png' },
        { src: '/assets/images/carousel/ignite-ui-angular-charts.png' }
    ];
}
```

```html
<div class="carousel-container">
    <igx-carousel #carousel>
        <igx-slide *ngFor="let slide of slides">
            <div class="image-container">
                <img [src]="slide.src" />
            </div>
        </igx-slide>
    </igx-carousel>
</div>
```

## Angular Carousel Custom Examples

### Configuring IgxCarousel

<div class="divider--half"></div>

By default, the Carousel in Angular has its [`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop) input property set to `true` (_looping occurs when the first slide comes after the last by navigating using the Next action, or when the last slide comes after the first by using the Previous action_). The looping behavior can be disabled by setting the value of the [`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop) input to `false`.

```html
<igx-carousel [loop]="false">
    ...
</igx-carousel>
```

To keep track of each slide index, the carousel has indicators that are positioned at the `end` of the carousel by default. In order to change this behavior, use the [`indicatorsOrientation`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsOrientation) property and assign it to `start`.

```html
<igx-carousel indicatorsOrientation="start">
    ...
</igx-carousel>
```

By default, the [`IgxCarousel`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html) displays its navigation buttons and indicators. Use the [`indicators`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicators) property to hide the indicators and the [`navigation`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#navigation) property to hide the navigation buttons.

```html
<igx-carousel [navigation]="false" [indicators]="false">
    ...
</igx-carousel>
```

The [`IgxCarousel`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html) supports vertical mode. Use the [`vertical`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#vertical) property to enable it.

```html
<igx-carousel [vertical]="true">
    ...
</igx-carousel>
```

### Custom indicators

<div class="divider--half"></div>

To add Angular custom carousel indicators we will have to use the [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html), like this:

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
                    <button igxButton="contained" type="submit" (click)="form.reset()">Sign In</button>
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
                    <button igxButton="contained" type="submit" (click)="form2.reset()">Search</button>
                </div>
            </div>
        </igx-slide>
    </igx-carousel>
</div>
...
```

#### Demo


<code-view style="height: 700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-with-components-sample/" >
</code-view>


## Angular Carousel Animations

Animated slide transitions provide the end-users a nice experience when interacting with the carousel.

The carousel is configured to use the `slide` animation by default but it also supports `fade` as an alternative animation.

The animations are configured through the [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationType) input, like this:

```html
<igx-carousel animationType="fade">
...
</igx-carousel>

```

Setting `none` to the `animationType` input disables carousel's animations.


### Demo

The demo below demonstrates the different types of animations, which the carousel supports.


<code-view style="height: 700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-animations-sample/" >
</code-view>


## Navigation

<div class="divider--half"></div>

Transition and navigation are the most important carousel features.

The navigation in the carousel can be handled by the user through navigation buttons, keyboard navigation and pan interaction on mobile devices.

### Pan gestures

<div class="divider--half"></div>

By default, the carousel can be used on any touch-enabled device. This is optional and can be changed by setting the [gesturesSupport]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#gesturesSupport) property to `false`.

The carousel [animations](carousel.md#angular-carousel-animations) are fully supported on touch devices, which makes the carousel consistent with any platform and great when used in progressive web applications ([PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)).

### Keyboard navigation

<div class="divider--half"></div>

- Navigation buttons
  - `Space`/`Enter` key - navigates to the next/previous slide.
- Indicators
  - `Arrow Left` key - navigates to the previous (next in Right-to-Left mode) slide.
  - `Arrow Right` key - navigates to the next (previous in Right-to-Left mode) slide.
  - `Home` key - navigates to the first (last in Right-to-Left mode) slide.
  - `End` key - navigates to the last (first in Right-to-Left mode) slide.

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
    <igx-carousel [navigation]="false" [indicators]="false" [pause]="false" animationType="fade" [interval]="2000" [gesturesSupport]="false">
        <igx-slide *ngFor="let item of slides">
            <!-- Slides content goes here -->
        </igx-slide>
    </igx-carousel>
</div>
...
```

We are ready with the carousel configuration. Now we need only to add a [list](list.md) component and sync the both components:

adding [IgxList]({environment:angularApiUrl}/classes/igxlistcomponent.html):

```html
...
<div class="list-wrapper">
    <igx-list>
      <!-- Adding disabled classes when the list item index does not match the current slide index-->
        <igx-list-item *ngFor="let item of slides; let i=index" [ngClass]="{'disabled': i !== currentIndex }" >
      <!-- List item content goes here -->
        </igx-list-item>
    </igx-list>
</div>
...
```

syncing the components by hooking up on carousel's [`slideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#slideChanged) and list's [itemClicked]({environment:angularApiUrl}/classes/igxlistcomponent.html#itemClicked) events:

>[!NOTE]
>As of v15.1.0 `onSlideChanged` was renamed to `slideChanged`. Using `ng update` will automatically migrate your code prior to use the new event name.

```typescript
  public ngOnInit() {
    this.list.itemClicked.subscribe((args: IListItemClickEventArgs) => {
        this.currentIndex = args.item.index;
        this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.slideChanged.subscribe((args: ISlideEventArgs) => {
        this.currentIndex = args.slide.index;
    });
  }
```

These configurations will have the following result:

<code-view style="height: 700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample/" >
</code-view>

## Angular Carousel Styling

### Carousel Theme Property Map

When you modify a primary property, all related dependent properties are automatically updated to reflect the change:

<div class="theme-switcher-wrapper">
  <input type="radio" name="theme" id="material" checked>
  <label for="material" class="switch-label">Material</label>
  <input type="radio" name="theme" id="fluent">
  <label for="fluent" class="switch-label">Fluent</label>
  <input type="radio" name="theme" id="bootstrap">
  <label for="bootstrap" class="switch-label">Bootstrap</label>
  <input type="radio" name="theme" id="indigo">
  <label for="indigo" class="switch-label">Indigo</label>

  <div class="tables">
    <!-- Material Theme Table -->
    <div class="theme-table material">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The background color of the button on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-arrow-color</td><td>The color of the button arrow.</td></tr>
          <tr class="dependent"><td></td><td>$button-disabled-background</td><td>The background color of the button when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-focus-color <br> (When $indicator-background is not provided)</td><td>The color of the indicator when focused.</td></tr>
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-arrow-color</td>
            <td>The color of the button arrow on hover.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-disabled-background</strong></td>
            <td>$button-disabled-arrow-color</td>
            <td>The color of the button arrow when disabled.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-hover-arrow-color</strong></td>
            <td>$button-focus-arrow-color</td>
            <td>The color of the button arrow when focused.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-focus-arrow-color</strong></td>
            <td>$button-focus-border-color</td>
            <td>The border color of the button when focused.</td>
          </tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-background</strong></summary></details></td>
            <td>$indicator-border-color</td>
            <td>The color of the indicator border.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-dot-color</td><td>The color of the indicator dot when active.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-focus-color</td><td>The color of the indicator when focused.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-active-dot-color</strong></summary></details></td>
            <td>$indicator-active-hover-dot-color</td>
            <td>The color of the indicator when active and hovered.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-border-color</td><td>The color of the indicator border when active.</td></tr>
          <tr class="primary">
            <td><strong>$indicator-dot-color</strong></td>
            <td>$indicator-hover-dot-color</td>
            <td>The color of the indicator dot on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
   <!-- Fluent Theme Table -->
    <div class="theme-table fluent">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The background color of the button on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-arrow-color</td><td>The color of the button arrow.</td></tr>
          <tr class="dependent"><td></td><td>$button-disabled-background</td><td>The background color of the button when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$button-focus-border-color</td><td>The border color of the button when focused.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-focus-color <br> (When $indicator-background is not provided)</td><td>The color of the indicator when focused.</td></tr>
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-arrow-color</td>
            <td>The color of the button arrow on hover.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-disabled-background</strong></td>
            <td>$button-disabled-arrow-color</td>
            <td>The color of the button arrow when disabled.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-hover-arrow-color</strong></td>
            <td>$button-focus-arrow-color</td>
            <td>The color of the button arrow when focused.</td>
          </tr>
         </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-background</strong></summary></details></td>
            <td>$indicator-border-color</td>
            <td>The color of the indicator border.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-dot-color</td><td>The color of the indicator dot when active.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-focus-color</td><td>The color of the indicator when focused.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-active-dot-color</strong></summary></details></td>
            <td>$indicator-active-hover-dot-color</td>
            <td>The color of the indicator when active and hovered.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-border-color</td><td>The color of the indicator border when active.</td></tr>
          <tr class="primary">
            <td><strong>$indicator-dot-color</strong></td>
            <td>$indicator-hover-dot-color</td>
            <td>The color of the indicator dot on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Bootstrap Theme Table -->
    <div class="theme-table bootstrap">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The background color of the button on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-arrow-color</td><td>The color of the button arrow.</td></tr>
          <tr class="dependent"><td></td><td>$button-disabled-background</td><td>The background color of the button when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$button-focus-border-color</td><td>The border color of the button when focused.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-focus-color <br> (When $indicator-background is not provided)</td><td>The color of the indicator when focused.</td></tr>
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-arrow-color</td>
            <td>The color of the button arrow on hover.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-disabled-background</strong></td>
            <td>$button-disabled-arrow-color</td>
            <td>The color of the button arrow when disabled.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-hover-arrow-color</strong></td>
            <td>$button-focus-arrow-color</td>
            <td>The color of the button arrow when focused.</td>
          </tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-background</strong></summary></details></td>
            <td>$indicator-border-color</td>
            <td>The color of the indicator border.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-dot-color</td><td>The color of the indicator dot when active.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-focus-color</td><td>The color of the indicator when focused.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-active-dot-color</strong></summary></details></td>
            <td>$indicator-active-hover-dot-color</td>
            <td>The color of the indicator when active and hovered.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-border-color</td><td>The color of the indicator border when active.</td></tr>
          <tr class="primary">
            <td><strong>$indicator-dot-color</strong></td>
            <td>$indicator-hover-dot-color</td>
            <td>The color of the indicator dot on hover.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Indigo Theme Table -->
    <div class="theme-table indigo">
      <table class="collapsible-table">
        <thead>
          <tr>
            <th>Primary Property</th>
            <th>Dependent Property</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$button-background</strong></summary></details></td>
            <td>$button-hover-background</td>
            <td>The background color of the button on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$button-border-color</td><td>The border color of the button.</td></tr>
          <tr class="dependent"><td></td><td>$button-arrow-color</td><td>The color of the button arrow.</td></tr>
          <tr class="dependent"><td></td><td>$button-disabled-background</td><td>The background color of the button when disabled.</td></tr>
          <tr class="dependent"><td></td><td>$indicator-active-dot-color <br> (When $indicator-background is not provided)</td><td>The color of the indicator dot when active.</td></tr>
          <tr class="primary">
            <td><strong>$button-hover-background</strong></td>
            <td>$button-hover-arrow-color</td>
            <td>The color of the button arrow on hover.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-disabled-background</strong></td>
            <td>$button-disabled-arrow-color</td>
            <td>The color of the button arrow when disabled.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-border-color</strong></td>
            <td>$button-hover-border-color</td>
            <td>The border color of the button on hover.</td>
          </tr>
          <tr class="primary">
            <td><strong>$button-hover-arrow-color</strong></td>
            <td>$button-focus-arrow-color</td>
            <td>The color of the button arrow when focused.</td>
          </tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-background</strong></summary></details></td>
            <td>$indicator-dot-color</td>
            <td>The color of the indicator dot.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-dot-color</td><td>The color of the indicator dot when active.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-dot-color</strong></summary></details></td>
            <td>$indicator-hover-dot-color</td>
            <td>The color of the indicator dot on hover.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-border-color</td><td>The color of the indicator border.</td></tr>
        </tbody>
        <tbody class="group">
          <tr class="primary">
            <td><details><summary><strong>$indicator-active-dot-color</strong></summary></details></td>
            <td>$indicator-active-hover-dot-color</td>
            <td>The color of the indicator when active and hovered.</td>
          </tr>
          <tr class="dependent"><td></td><td>$indicator-active-border-color</td><td>The color of the indicator border when active.</td></tr>
          <tr class="dependent"><td></td><td>$button-focus-border-color</td><td>The border color of the button when focused.</td></tr>
          <tr class="primary">
            <td><strong>$indicator-active-hover-dot-color</strong></td>
            <td>$indicator-focus-color</td>
            <td>The color of the indicator when focused.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

Using the [Ignite UI for Angular Theming](themes/index.md), we can greatly alter the `carousel` appearance.

First, in order to use the functions exposed by the theme engine, we need to import the `index` file in our style file:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [carousel-theme]({environment:sassApiUrl}/themes#function-carousel-theme), and by providing just a few base parameters like `$button-background` and `$indicator-background`, the theme will generate the appropriate state-specific colors and contrasting foregrounds. You can also override any of the available parameters if you want more control over the appearance.

```scss
$carousel-theme: carousel-theme(
  $button-background: #7c32dd,
  $indicator-background: #7c32dd,
);
```

The last step is to include the component's theme.

```scss
@include css-vars($carousel-theme);
```

### Demo

The sample below demonstrates a simple styling applied through the [Ignite UI for Angular Theming](themes/index.md).

<code-view style="height: 310px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-styling-sample/" alt="Angular Carousel Styling Example">
</code-view>

### Styling with Tailwind

You can style the `carousel` using our custom Tailwind utility classes. Make sure to [set up Tailwind](themes/misc/tailwind-classes.md) first.

Along with the tailwind import in your global stylesheet, you can apply the desired theme utilities as follows:

```scss
@import "tailwindcss";
...
@use 'igniteui-theming/tailwind/utilities/material.css';
```

The utility file includes both `light` and `dark` theme variants.

- Use `light-*` classes for the light theme.
- Use `dark-*` classes for the dark theme.
- Append the component name after the prefix, e.g., `light-carousel`, `dark-carousel`.

Once applied, these classes enable dynamic theme calculations. From there, you can override the generated CSS variables using `arbitrary properties`. After the colon, provide any valid CSS color format (HEX, CSS variable, RGB, etc.).

You can find the full list of properties in the [carousel-theme]({environment:sassApiUrl}/themes#function-carousel-theme). The syntax is as follows:

```html
<igx-carousel class="!light-carousel
![--indicator-background:#a7b6de] 
![--button-background:#a7b6de] 
![--indicator-border-color:#3E4853]">
  ...
</igx-carousel>
```

>[!NOTE]
>The exclamation mark(`!`) is required to ensure the utility class takes precedence. Tailwind applies styles in layers, and without marking these styles as important, they will get overridden by the component’s default theme.

At the end your carousel should look like this:

<div class="sample-container loading" style="height:310px">
    <iframe id="carousel-tailwind-styling-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-tailwind-sample/' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>

## Accessibility

### WAI-ARIA Roles, States, and Properties

- The Carousel base element role is [`region`](https://www.w3.org/TR/wai-aria-1.1/#region) - section containing content that is relevant to specific purpose and users will likely want to be able to navigate easily.
- Carousel indicators are with role [`tab`](https://www.w3.org/TR/wai-aria-1.1/#tab) -  grouping label providing a mechanism for selecting the tab content that is to be rendered to the user
- The element that serves as the container for the set of tabs (carousel indicators) role is set to [`tablist`](https://www.w3.org/TR/wai-aria-1.1/#tab).
- Each slide element is set with role [`tabpanel`](https://www.w3.org/TR/wai-aria-1.1/#tabpanel).
- The element that serves as the container for the set of igx-slides is set with [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live)="polite". Both options are
  - **off**: if the carousel is automatically rotating.
  - **polite**: if the carousel is NOT automatically rotating.

### ARIA support

#### **Carousel component**

##### **Attributes**

- [aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription) set to 'carousel'.
- [aria-selected](https://www.w3.org/TR/wai-aria/states_and_properties#aria-selected)- set to _true_ or _false_ based on the active slide.
- [aria-controls](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) - set a slide index whose content is controlled by the current element.
- [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) - used to set the priority with which screen reader should treat updates to live regions - the possible settings are: **off** and **polite**. The default setting is **polite**. When the [interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval) option set, the **aria-live** attribute would be set to **off**.
- [aria-label](https://www.w3.org/TR/wai-aria/states_and_properties#aria-label) slide based.
- aria-label (buttons)
  - aria-label - for previous slide.
  - aria-label - for next slide.

#### **Slide component**

##### **Roles**

- [attr.role="tabpanel"](https://www.w3.org/TR/wai-aria-1.1/#tabpanel) -  container for the resources associated with a tab, where each tab is contained in a tablist.

##### **Attributes**

- id - follows the pattern "panel-${this.index}"
- [aria-labelledby](https://www.w3.org/TR/wai-aria/#aria-labelledby) follows the pattern "tab-${this.index}-${this.total}"
- [aria-selected](https://www.w3.org/TR/wai-aria-1.1/#aria-selected) set **active** slide. Indicates the current **selected** state of a particular slide element.

## API References

<div class="divider--half"></div>

- [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
- [IgxCarouselComponent Styles]({environment:sassApiUrl}/themes#function-carousel-theme)
- [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
- [IgxListComponent]({environment:angularApiUrl}/classes/igxlistcomponent.html)
- [IgxListItemComponent]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

## Theming Dependencies

- [IgxIcon Theme]({environment:sassApiUrl}/themes#function-icon-theme)

## Additional Resources

<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
