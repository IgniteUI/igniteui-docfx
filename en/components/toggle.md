---
title: Toggle Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Toggle directive allows the users to open, to interact with, to apply animations, and to close a toggle container. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Toggle directives, Angular Toggle controls, Angular Toggle Component,
---

## Toggle

The [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) directive allows the users to open, to interact with, to apply animations, and to close a toggle container. All toggle components implement the [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) or [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) internally, and users can implement toggle-based components and views, like dropdowns, while the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) directive controls other components until the toggle umbrella.

### Toggle Demo

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/interactions/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

## Usage

The toggle allows you to wrap some content into a box which can be easily opened and closed.

To get started with the Toggle directive, first you need to install Ignite UI for Angular by typing the following command:

```cmd
ng add igniteui-angular
```
For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting_started.md) topic.

Now let's import the **IgxToggleModule** in our **app.module.ts**. We are also planning to take advantage of [**igxButton**]({environment:angularApiUrl}/classes/igxbuttondirective.html) directive so we will have to import **IgxButtonModule** into the **app.module.ts** too.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```
Then in the template of our component we can apply the directive on the element we want to be togglable.

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle>
    <section class="toggle-section">
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Strawberries</li>
            <li>Raspberry</li>
            <li>Cherry</li>
        </ul>
    </section>
</div>
```

In order to show and hide this content we will have to invoke one of the two methods [open]({environment:angularApiUrl}/classes/igxtoggledirective.html#open)/[close]({environment:angularApiUrl}/classes/igxtoggledirective.html#close).

```typescript
import { IgxToggleDirective } from 'igniteui-angular'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggleContent() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

If all went well, you should see the following in your browser:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

In the next sample we'll use different positioning strategy so the content is displayed below the button. 

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<div class="sample-wrapper">
  <article class="sample-column">
    <button class="toggle-button" #button igxButton="raised" (click)="toggle()">Toggle</button>
    <div class="toggle-content" igxToggle>
      <section class="toggle-section">
          <h2>Box</h2>
      </section>
    </div>
  </article>
</div>
```

The [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) uses the [**IgxOverlayService**](overlay_main.md) and the [`open`]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) and [`toggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html#toggle) methods accept optional overlay settings to control how content is displayed. If omitted, default overlay settings are used as seen in the previous sample.

```typescript
// template.component.ts

...
    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild("button") public igxButton: ElementRef;
    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    public _overlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };
    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
```


<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe-1" data-src='{environment:demosBaseUrl}/interactions/toggle' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-iframe-1" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

***Note***: By defaut [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) is set to `false`. If set to `true` there are some limitations in the behavior. When element is shown clicking on toggle button will force close on outside click and toggle method. Close on outside click will start close animation. Then toggle method, with close animation started, will call open. Those two events neutralize each other and nothing happens. In order to achieve the desired behavior there a couple of options listed below: 
- use [`IgxToggleActionDirective`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) as described below;
- set [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) to `false` as in the sample above

### Automatic toggle actions

In order to prevent the invocation of these methods there is a directive which has `onClick` handler and changes the state to the toggle we are referred to. So let's dive in. If we would like to take advantage of this functionality we will have to use [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) which is coming from the same **IgxToggleModule**.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

Then in the template we need to declare [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) by assigning the [**IgxToggleDirective**]({environment:angularApiUrl}/classes/igxtoggledirective.html) to it. The [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) should be declared on the element we are planing to use like a trigger(toggle).

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <img src="link to random image"/>
    </section>
</div>
```

After these changes the toggle should work exactly in the same way.

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-2-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-2' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

***Note***: By default [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) excludes its host element from [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick). Clicking on the host element will not fire close on outside click. Additionally [**IgxToggleActionDirective**]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) will set its host element as the position strategy [`target`]({environment:angularApiUrl}/interfaces/positionsettings.html#target).

### Automatic toggle actions with service provider

There is a convenient way to keep the state and command our [**igxToggle**]({environment:angularApiUrl}/classes/igxtoggledirective.html) through **igxNavigationService** provider which would be convenient for us to keep tracking it everywhere in our application. We just need to set identifier for our [**igxToggle**]({environment:angularApiUrl}/classes/igxtoggledirective.html) directive and the registration into the service happens for us. If we would like this state to be controlled automatically again we just need to pass this identifier to our helping **igxToggleActionDirective**.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" class="toggle-button"  igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content">
    <section class="toggle-section">
    <h3>Click 
        <br/> Out of the Box</h3>
    </section>
</div>
```

If all went well, it will look like this:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-3-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-3' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### IgxOverlayOutlet Directive

The [**IgxOverlayOutlet**]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html) provides a way to mark an element as an `igxOverlay` outlet container through the component template.
Directive instance is exported as `overlay-outlet`, so it can be assigned within the template:

```html
<div igxOverlayOutlet #outlet="overlay-outlet"></div>
```

This allows to provide the `outlet` templates variable as a setting to the toggle action:
```html
<button [igxToggleAction]="reference" [igxToggleOutlet]="outlet">Toggle</button>
<custom-component #reference></custom-component>
```

### Offsetting the toggle container

To offset the container along the corresponding axis by a provided amount:
```typescript
    // deltaX and deltaY determine by how much the container will be offset compared to its' previous position
   const deltaX: number = 30;
   const deltaY: number = 15;
    this.toggleForm.setOffset(deltaX, deltaY);
```

## API Summary

In this article we covered the details of how to use Toggle directive. We created a content which would possible to be hidden or shown by invoking programmatically methods which determine this behavior.
Furthermore we added another helping directive which controls automatically this same behavior by giving it the appropriate toggle reference. In the end we have registered our [**igxToggle**]({environment:angularApiUrl}/classes/igxtoggledirective.html) directive in the **igxNavigationService** provider by giving it an ID, which we then provided to our helping **igxToggleAction** directive.

### API References
<div class="divider"></div>

* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)
* [IgxOverlayOutletDirective]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)

<div class="divider"></div>

###Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
