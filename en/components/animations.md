---
title: Animations
_description: Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, animations
---

# Animations

<p class="highlight">Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience.</p>

## Angular Animations


<code-view style="height: 470px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/animations-sample-1" >
</code-view>

<div class="divider--half"></div>

### Usage

The Ignite UI for Angular animations are grouped into 8 categories depending on their visual effects - `fade`, `flip`, `grow`, `miscellaneous`, `rotate`, `scale`, `slide`, and `swing`. Every group accepts a different set of parameters, allowing you to modify the behavior of any of the included animations. Each animation is an [`AnimationReferenceMetadata`](https://angular.io/api/animations/AnimationReferenceMetadata) object as produced by the [`animation`](https://angular.io/api/animations/animation) function provided by Angular.

If parameters are attached, they act as default values. When an animation is invoked via the [`useAnimation`](https://angular.io/api/animations/useAnimation) function, then parameter values are allowed to be passed in directly. If any of the passed in parameter values are missing, then the default values will be used.

``` typescript
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from "igniteui-angular/animations/main";

animations: [
    trigger('fadeInOut', [
            transition('void => *', [
                useAnimation(fadeIn, {
                    params: {
                        duration: '.35s',
                        easing: 'ease-out'
                    }
                })
            ]),
            transition('* => void', [
                useAnimation(fadeOut, {
                    params: {
                        duration: '.2s',
                        easing: 'ease-out'
                    }
                })
            ])
        ])
]
```

### Timing Functions

Ignite UI for Angular includes a set of timing functions that can be used to ease in or out an animation. There are three main timing function groups - [EaseIn]({environment:angularApiUrl}/enums/easein.html), [EaseOut]({environment:angularApiUrl}/enums/easeout.html), and [EaseInOut]({environment:angularApiUrl}/enums/easeinout.html), each containing the following timings:
  - quad
  - cubic
  - quart
  - quint
  - sine
  - expo
  - circ
  - back

To use a specific timing function, import it first:

``` typescript 
import { EaseOut } from "igniteui-angular/animations/easings";
```
and then use it as value for the easing param in any animation:

``` typescript
useAnimation(fadeIn, {
    params: {
        easing: EaseOut.back
    }
});
```
## SCSS Animations

### Keyframes Mixin

The Ignite UI for Angular [keyframes]({environment:sassApiUrl}/index.html#mixin-keyframes) mixin is used to register new keyframes animations. The mixin takes the name of a keyframes animation as a parameter and adds it to the global keyframe register list. In that way, the keyframes will not be duplicated in the exported CSS when including the same keyframes animation several times.

For instance, doing this:

```scss
@include fade-in();
@include fade-in();
```

Will result in only one `@keyframes` rule added to the produced CSS:

```css
@keyframes fade-in { ... }
```

Keyframes selectors for the animation steps along with CSS styles for the keyframes are defined inside the body of the mixin.  

```scss
@include keyframes(fade-in-bottom) {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
```


### Animation Mixin

The [animation]({environment:sassApiUrl}/index.html#mixin-animation) mixin serves as a vessel for animating elements using a list of animation properties passed as parameters. Users can specify animation properties like `name`, `duration`, `delay`, `direction`, `iteration count`, etc. Multiple keyframe animations can be passed to the `animation` mixin.

```scss
//include the 'fade-in-top' keyframes animation mixin
@include fade-in-top();

//include the animation mixin with parameters
.my-class {
    @include animation('fade-in-top' 3s $ease-out-quad infinite);
}
```


<code-view style="height: 270px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/animations-sample-2" >
</code-view>


## API References
<div class="divider"></div>

* [Animations]({environment:sassApiUrl}/index.html)
* [AnimationSettings]({environment:angularApiUrl}/interfaces/animationsettings.html)
* [IAnimationParams]({environment:angularApiUrl}/interfaces/ianimationparams.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)