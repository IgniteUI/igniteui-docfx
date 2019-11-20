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

In the **onboarding** demo above we have 3 slides with images and one with an image and a sign up form, disabled [`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop), custom indicators, which are positioned above the carousel and routing navigation to another component.

In this section we will go through the setup of the demo.

#### Configuring IgxCarousel
<div class="divider--half"></div>

By **default** carousel's **loop** behavior is set to true and the property, that sets  the position of the indicators ( [indicatorsOrientation]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#indicatorsorientation) ) is assigned with `bottom`, we are going to change these properties with following code snippet:

```html
<div class="carousel-container">
    <igx-carousel #carousel [loop]="false" indicatorsOrientation="top">
      ...
    </igx-carousel>
</div>
```

#### Adding slides with *ngFor
<div class="divider--half"></div>

For convenience we are going to create an array of objects in the **ts** file and use it to populate the **igx-carousel** with slides:

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

Since the first three slides are going to contain only images we will use **ngFor** to add them in the template:
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

The last step to create the carousel in the [demo](carousel.md#demo) is to add custom carousel indicators.
We will going to achieve this using the [IgxCarouselIndicatorDirective]({environment:angularApiUrl}/classes/igxcarouselindicatordirective.html):

```html
...
  <ng-template igxCarouselIndicator let-slide>
      <div [ngClass]="{'selected': slide.current === current}" class="indicator"></div>
  </ng-template>
...
```
### Animations

Animated slide transitioning gives the end users nice experience during their interaction with the carousel.

#### Animation types

[IgxCarousel]({environment:angularApiUrl}/classes/igxcarouselcomponent.html) has two animations for slide transitioning:

- **Slide** animation
- **Fade** animation

The **deafult** one is **Slide** and you can change it through the [animationType]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#animationtype) input, like this:

```html

<igx-carousel animationType="fade">
...
</igx-carousel>

```
Setting `none` to the `animationType` input disables carousel's animations.

#### Demo

The demo below demonstrates the different slide transition approaches, which the carousel supports. 

<div class="sample-container loading" style="height: 600px">
    <iframe id="carousel-animations-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-animations-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-animations-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>


### Navigation and Transition

Transition and navigation are the most important carousel features.
Enabling [navigation]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#navigation) of the carousel will render the navigation buttons.
The last two demos demostrated two types of transition - with user interaction (button click) and automatic slide change.

#### Automatic transitioning
To enable automatic transitioning a numeric value should be assigned to the transition [interval]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval),  which sets the amount of time in milliseconds between slides transition. 

>[!NOTE]
>Entering the slide area with the mouse coursor or focusing it with a tab click **will stop the current slide transition until `mouseleave`/blur**. This is regulated by the [pause]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) input, unless the transition is regulated by the user from the [stop]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#stop)/[play]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#play) methods (e.g. like in the animation [demo](carousel.md#demo-1)), then the slide transitioning is controlled entirely by the user.

Say we want to create a carousel, which is going to loop over a couple of slides, without any interruptions, no indecators and the navigation is done only with a list items:

The carousel template will look like this
```html
<igx-carousel #carousel navigation="false" pause="false">
  <!-- slides area -->
</igx-carousel>
```

```typescript
  // app.component.ts
  public loop = true;
  public pause = true;

  constructor() { }

  public ngOnInit() {
     this.addNewSlide();
     // stops the auto playing
     this.carousel.stop();
  }
```
Having those configured this way, we empowered the user to have full control over the carousel. What we want to do now is customize the navigation further and replace the carousel indicators with a nice looking progress bar. Hooking up on the [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) event and using the [**IgxLinearProgressBar**]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html) component we will add adittional UI indicating the progress made. First we need to import the **IgxLinearProgressBar** module:

```typescript
// app.component.ts
import { Direction, IgxCarousel, IgxLinearProgressBar } from 'igniteui-angular';
```
Once we have the module imported, we can continue with adding the [**IgxLinearProgressBar**]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html) in our template. Notice that we set the [`max`]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html#max) property to bind to the [`total`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#total) property value, which will be defined in the **app.component.ts** file. Also, we add a handler for the [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) event and an indicator text in adittion to the progress bar:

```html
<!-- app.component.html -->
<igx-carousel #carousel [loop]="loop" pause="false" (onSlideChanged)="onSlideChanged(carousel)">
    <igx-slide *ngFor="let slide of slides;">
        <h3>{{slide.heading}}</h3>
        <p>{{slide.description}}</p>
        <img [src]="slide.image">
    </igx-slide>
    <igx-linear-bar #linearbar [max]="total"></igx-linear-bar>
    <span>{{current}} out of {{total}}</span>
</igx-carousel>
```

We update the [`total`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#total) and [`current`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#current) properties values in the **ngOnInit** and the linear bar value in the [`onSlideChanged`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#onslidechanged) event handler:

```typescript
// app.component.ts
  @ViewChild("carousel") public carousel: IgxCarousel;
  @ViewChild("linearbar") public linearbar: IgxLinearProgressBar;

  public total: number;
  public current: number;

  constructor() { }

  public ngOnInit() {
     this.addNewSlide();
     this.carousel.stop();
     this.total = this.slides.total;
     this.current = this.carousel.current;
  }

  public onSlideChanged(carousel: IgxCarousel) {
    this.current = carousel.current + 1;
    this.linearbar.value = carousel.current + 1;
  }
```
Now we have a nice progress bar that is also showing its percent value which we don't need (because we added our custom indicating text "1 out of 3"). Let's hide this percent value and the carousel original indicators, which are still visible:

```css
/* app.component.css */
span.progress-linear__value {
    display: none;
}
ul.igx-carousel__indicators {
    display: none;
}
```

<div class="sample-container loading" style="height: 750px">
<iframe id="carousel-no-navigation-sample-iframe" data-src='{environment:demosBaseUrl}/layouts/carousel-no-navigation-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="carousel-no-navigation-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

### Actions on tap/click
Our carousel now displays nicely the home page content. What it is missing is defining actions that will follow the user interactions with the slides. Once the user made a choice and clicked/tapped on the slide, it is expected that the carousel will transfer the user to a new page/view. Let's see how to do this by setting a route to navigate to - we will replace the heading with an [`IgxButton`]({environment:angularApiUrl}/classes/igxbuttondirective.html) and  add an event handler for the button click event:

```html
<!-- app.component.html-->
<igx-slide *ngFor="let slide of slides;">
    <span igxButton="raised" igxButtonColor="white" 
        igxButtonBackground="#e41c77" (click)="goTo(carousel.current)">{{slide.heading}}</span>
    <p>{{slide.description}}</p>
    ...
</igx-slide>
```
Don't forget to add the **IgxButtonModule** to the **app.component.ts**. The `goto()` function will use the [Angular router](https://angular.io/guide/router) to navigate to another view:

```typescript
  // app.component.ts
  import { Router } from "@angular/router";
  import { Direction, IgxButtonModule, IgxCarousel, IgxLinearProgressBar } from 'igniteui-angular';
  ...

  export class AppComponent implements OnInit {
  ...
  constructor(private router: Router) { }

  public goTo(index: number) {
    this.router.navigate(["/details", index]);
  }
```
Given this configuration, the router matches that URL to the given route path **/details:index** and displays the corresponding page:

<div class="sample-container loading" style="height: 620px">
    <iframe data-src='{environment:demosBaseUrl}/layouts/carousel-base-sample' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>

###API References
<div class="divider--half"></div>

* [IgxCarouselComponent]({environment:angularApiUrl}/classes/igxcarouselcomponent.html)
* [IgxCarouselComponent Styles]({environment:sassApiUrl}/index.html#function-igx-carousel-theme)
* [IgxSlideComponent]({environment:angularApiUrl}/classes/igxslidecomponent.html)
* [IgxLinearProgressBarComponent]({environment:angularApiUrl}/classes/igxlinearprogressbarcomponent.html)
* [IgxLinearProgressBarComponent Styles]({environment:sassApiUrl}/index.html#function-igx-progress-linear-theme)
* [IgxButtonDirective]({environment:angularApiUrl}/classes/igxbuttondirective.html)
* [IgxButton Styles]({environment:sassApiUrl}/index.html#function-igx-button-theme)
