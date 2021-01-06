---
title: Animations
_description: Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, animations
---

# Animations

<p class="highlight">Ignite UI for Angular includes over 100+ pre-built animations specially designed for a better user experience.</p>

## Angular Animations Example

<div class="sample-container loading" style="height: 470px">
    <iframe id="animations-iframe" frameborder="0" seamless="" width="100%" height="100%" src="{environment:demosBaseUrl}/theming/animations" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0; padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="animations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="animations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on stackblitz</button>
</div>
<div class="divider--half"></div>

## Usage

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

## Timing Functions

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

## API References
<div class="divider"></div>

* [AnimationSettings]({environment:angularApiUrl}/interfaces/animationsettings.html)
* [IAnimationParams]({environment:angularApiUrl}/interfaces/ianimationparams.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)