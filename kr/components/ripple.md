---
title: Ripple Directive
_description: With Ignite UI for Angular Ripple directive, developers can define an area which received a ripple animation effect for powerful UI enhancement.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Ripple components, Angular Ripple controls
_language: kr
---

## Ripple
<p class="highlight">With the Ignite UI for Angular Ripple directive, you can create a ripple animation effect to give users feedback when they’re trying to click or touch regions that aren’t configured to receive that input. Set this directive to a relatively positioned element to create an animation in response to a touch or a mouse click.</p>
<div class="divider"></div>

### Ripple Demo

<code-view style="height: 558px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-1" >
</code-view>

<div class="divider--half"></div>

### Dependencies

The Ripple Directive is exported as an `NgModule`, thus all you need to do in your application is to import the `IgxRippleModule` inside your `AppModule`:

```typescript
// app.module.ts

import { IgxRippleModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxRippleModule,
        ...
    ]
})
export class AppModule {}
```
### Usage
#### Adding Ripple Effect

Use [`igxRipple`]({environment:angularApiUrl}/classes/igxrippledirective.html) to add a ripple effect to the specified element. It will add a ripple effect with the default color.

```html
<button igxButton="raised" igxRipple>Click Me</button>
```

<code-view style="height: 68px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/ripple-sample-5" >
</code-view>


### API References
<div class="divider--half"></div>

* [IgxRippleDirective]({environment:angularApiUrl}/classes/igxrippledirective.html)
* [IgxRipple Styles]({environment:sassApiUrl}/index.html#function-igx-ripple-theme)

### Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
