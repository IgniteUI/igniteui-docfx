---
title: Carousel Component
_description: Use Ignite UI for Angular Carousel component to navigate through a collection of slides, cards or page-based interfaces with endless programmatic features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Carousel component, Angular Carousel control
_language: kr
---

## Carousel
<p class="highlight">The Ignite UI for Angular Carousel component is developed as a native [Angular component](https://angular.io/guide/architecture#components). Use it to browse or navigate through a collection of slides, including image galleries, cards, onboarding tutorials, or page-based interfaces.</p>
<div class="divider"></div>

### Carousel Demo
<div class="sample-container loading" style="height: 620px">
    <iframe seamless="" width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/layouts/carousel-sample-4" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>


### Usage
The carousel can be used as a full-screen element or situated inside another component. Also, the slides may feature any valid html content inside, including other Angular components. To get started with the **Ignite UI for Angular Carousel**, let's first import the **IgxCarouselModule** in our **app.module.ts** file:
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
Then in the template of our carousel component we can add the following markup to add two slides and define their html content:

```html
<!-- app.component.html -->
<igx-carousel>
    <igx-slide>
        <h3>Ignite UI for Angular</h3>
        <p>30+ Material-based Angular components to code speedy web apps faster.</p>
    </igx-slide>
    <igx-slide>
        <h3>Ignite UI for Javascript</h3>
        <p>A complete JavaScript UI component library giving you the ability to build data-rich responsive web apps.</p>
    </igx-slide>
</igx-carousel>
```

This is enough to have the carousel instantiated on our page, let's have a look at it:

<code-view style="height: 230px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-sample-1" >
</code-view>

### Displaying slides using the ngFor directive

A real world scenario would include dynamically loading the slides and not declaring via markup. To demonstrate this, first we will provide the slides via code:

```typescript
  // app.component.ts
  public slides: any[] = [];
  constructor() { }

  public ngOnInit() {
     this.addNewSlide();
  }

  public addNewSlide() {
      this.slides.push(
        { description: "30+ Material-based Angular components to code speedy web apps faster.",
          heading: "Ignite UI for Angular",
          image: "assets/images/carousel/slide1-angular.png"},
        { description: "A complete JavaScript UI library empowering you to build data-rich responsive web apps.",
          heading: "Ignite UI for Javascript",
          image: "assets/images/carousel/slide2-ignite.png"}
      );
  }
```
And now we are ready to add the ngFor directive to the [`igx-slide`]({environment:angularApiUrl}/classes/igxslidecomponent.html) and provide our html inside as usual. We are also adding an image to each slide:

```html
<!-- app.component.html -->
<igx-carousel #carousel>
    <igx-slide *ngFor="let slide of slides;">
        <h3>{{slide.heading}}}</h3>
        <p>{{slide.description}}}</p>
        <img [src]="slide.image">
    </igx-slide>
</igx-carousel>
```

The carousel that we created is functional but not really well looking. Let's add some styles to it starting from the navigation as it is the most important feature. Previous and Next arrows must be eye catching so we need to change their default color and center the carousel content:

```css
/* app.component.css */
.igx-carousel__inner {
    width: 100%;
    text-align: center; 
}
a > igx-icon > span{
    color: #e41c77;
}
```

Let's see what we have now, sure looks better with the arrows standing out clearly on both sides and all the content centered:


<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-sample-2" >
</code-view>


### Navigation

As mentioned navigation and transition are the most important carousel features. One should make sure that the transition interval, auto playing and pausing are configured as per the requirements. All those are easily managed through the exposed properties, like we are going to demonstrate now. Say we don't want to distract the users, so we will stop the automatic playing, enable pausing on interactions and enable looping (looping is when first slide comes after navigating Next from last slide):

```html
<!-- app.component.html -->
<igx-carousel #carousel [loop]="loop" [pause]="pause">
...
</igx-carousel>
```
In the above snippet we are setting values to the [`loop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#loop) and [`pause`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#pause) element properties using [property binding](https://angular.io/guide/template-syntax#property-binding). Another optional property to set is the [`interval`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#interval), which sets the amount of time in milliseconds between slides transition. We are skipping this as we do not want our carousel to transition the content by itself, but want it to be entirely controlled by the user. The component properties values are provided via code below. Notice that to disable the automatic playing we need to call the [`stop`]({environment:angularApiUrl}/classes/igxcarouselcomponent.html#stop) method exposed by the carousel:

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

Following all the steps above brings us a nice and functional carousel that the user has full control over using the navigation arrows. The linear bar provides adittional UI that acts as an indicator of the user progress:


<code-view style="height: 550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/layouts/carousel-sample-3" >
</code-view>


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
    <iframe data-src='{environment:demosBaseUrl}/layouts/carousel-sample-4' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
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
