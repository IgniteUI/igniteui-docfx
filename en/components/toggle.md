---
title: Toggle Component - Native Angular | Ignite UI for Angular 
_description: The Ignite UI for Angular Toggle directive allows the users to open, to interact with, to apply animations, and to close a toggle container. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Components, Angular Toggle directives, Angular Toggle controls, Angular Toggle Component,
---

## Toggle

<p class="highlight">The Ignite UI for Angular Toggle component allows the users to wrap some content into a box which can be easily opened and closed.</p>

### Demo

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### Usage

#### First Steps

To get started with the Toggle component, first you need to import the `IgxToggleModule` in your **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxToggleModule } from 'igniteui-angular'

@NgModule({
    ...
    imports: [..., IgxToggleModule]
    ...
})
export class AppModule {}
```

>[!NOTE]
> All toggle components implement the [`igxToggle`]({environment:angularApiUrl}/classes/igxtoggledirective.html) or the [`igxToggleAction`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) directives internally.

#### Display Toggle

In order to show and hide toggle content, use its [open]({environment:angularApiUrl}/classes/igxtoggledirective.html#open) and [close]({environment:angularApiUrl}/classes/igxtoggledirective.html#close) methods:

```typescript
import { IgxToggleDirective } from 'igniteui-angular'

...

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

Then in the template of our component we can apply the directive on the element we want to be togglable: 

```html
<!--template.component.html-->
<button class="toggle-button" igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle>
    <section class="toggle-section">
        <img src="assets/images/toggle/nature.jpg"/>
    </section>
</div>
```

### Examples 

#### Change position 

In the next sample we'll use different positioning strategy so the content is displayed below the button. 

The `igxToggle` directive uses the [`IgxOverlayService`]({environment:angularApiUrl}/classes/igxoverlayservice.html) provider. The `open`, `close` and `toggle` methods accept optional overlay settings to control how content is displayed. If omitted, the default overlay settings are used as seen in the previous sample.

>[!NOTE]
> By defaut the [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) property is set to `true`. In order to disable this functionallity, the property have to be set to `false`.

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
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
```

This is how our toggle should look like now:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/interactions/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

#### Automatic toggle actions

In order to avoid using the `open` and `close` methods, we can operate with a directive, which has `onClick` handler, and changes the state of the toggle we are referring to automatically.

If we would like to take advantage of this functionality, we will have to use the `IgxToggleActionDirective`, coming from the same `IgxToggleModule`, and assign the `IgxToggleDirective` to it.

>[!NOTE]
> The [`IgxToggleActionDirective`]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html) should be declared on the element we are planing to use like a trigger (toggle).

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <h5>Automatic toggle actions</h5>
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

>[!NOTE]
> By default `IgxToggleActionDirective` excludes its host element from the [`closeOnOutsideClick`]({environment:angularApiUrl}/interfaces/overlaysettings.html#closeonoutsideclick) property. Therefore, clicking on the host element will not fire any event. Additionally, this directive will set its host element as the position strategy [`target`]({environment:angularApiUrl}/interfaces/positionsettings.html#target).

#### Automatic toggle service provider

There is a convenient way to keep the state of the `igxToggle` directive and command it through the[`igxNavigationService`]({environment:angularApiUrl}/classes/igxnavigationservice.html) provider. We just need to set an identifier for our `igxToggle` which will trigger a registration into the service. If we would like to control this state automatically, we have to pass this identifier to the `igxToggleActionDirective`.

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" class="toggle-button" igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content">
    <section class="toggle-section">
        <h5>Automatic toggle actions with service provider</h5>
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

#### Offsetting the toggle container

We can manipulate the position of the toggle container along the corresponding axis by a provided amount:

```typescript
// deltaX and deltaY determine by how much the container will be offset compared to its' previous position
public offsetToggle() {
    const deltaX: number = 30;
    const deltaY: number = 30;
    this.toggle.setOffset(deltaX, deltaY);
}
```

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-4-iframe" data-src='{environment:demosBaseUrl}/interactions/toggle-sample-4' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="toggle-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### API References
<div class="divider"></div>

* [IgxToggleDirective]({environment:angularApiUrl}/classes/igxtoggledirective.html)
* [IgxToggleActionDirective]({environment:angularApiUrl}/classes/igxtoggleactiondirective.html)

Additional components and/or directives with relative APIs that were used:

* [IgxOverlayOutletDirective]({environment:angularApiUrl}/classes/igxoverlayoutletdirective.html)
* [IgxOverlayService]({environment:angularApiUrl}/classes/igxoverlayservice.html)
* [igxNavigationService]({environment:angularApiUrl}/classes/igxnavigationservice.html)


### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.
* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
