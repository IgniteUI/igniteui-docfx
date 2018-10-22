---
title: Shadows Styleguide
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

### Shadows

Shadows are used to establish and maintain functional boundaries between Document Object Model trees to enable better functional encapsulation.

<p class="highlight"></p>
<div class="divider"></div>

### Elevations
<div class="elevations row">
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-1">
            <p class="variable">
                $elevate-1
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 3px 0 palette(gray, 400),
                <br>0 1px 1px 0 palette(gray, 300),
                <br>0 2px 1px -1px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-2">
            <p class="variable">
                $elevate-2
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 5px 0 palette(gray, 400),
                <br>0 2px 2px 0 palette(gray, 300),
                <br>0 3px 1px -2px palette(gray, 200);
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-3">
            <p class="variable">
                $elevate-3
            </p>
            <p class="css">
                box-shadow:
                <br>0 1px 8px 0 palette(gray, 400),
                <br>0 3px 4px 0 palette(gray, 300),
                <br>0 3px 3px -2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-4">
            <p class="variable">
                $elevate-4
            </p>
            <p class="css">
                box-shadow:
                <br>0 2px 4px -1px palette(gray, 400),
                <br>0 4px 5px 0 palette(gray, 300),
                <br>0 1px 10px 0 palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-6">
            <p class="variable">
                $elevate-6
            </p>
            <p class="css">
                box-shadow:
                <br>0 3px 5px -1px palette(gray, 400),
                <br>0 6px 10px 0 palette(gray, 300),
                <br>0 1px 18px 0 palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-8">
            <p class="variable">
                $elevate-8
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 5px -3px palette(gray, 400),
                <br>0 8px 10px 1px palette(gray, 300),
                <br>0 3px 14px 2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-9">
            <p class="variable">
                $elevate-9
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 6px -3px palette(gray, 400),
                <br>0 9px 12px 1px palette(gray, 300),
                <br>0 3px 16px 2px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-12">
            <p class="variable">
                $elevate-12
            </p>
            <p class="css">
                box-shadow:
                <br>0 7px 8px -4px palette(gray, 400),
                <br>0 12px 17px 2px palette(gray, 300),
                <br>0 5px 22px 4px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-16">
            <p class="variable">
                $elevate-16
            </p>
            <p class="css">
                box-shadow:
                <br>0 8px 10px -5px palette(gray, 400),
                <br>0 16px 24px 2px palette(gray, 300),
                <br>0 6px 30px 5px palette(gray, 200)
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-24">
            <p class="variable">
                $elevate-24
            </p>
            <p class="css">
                box-shadow:
                <br>0 11px 15px -7px palette(gray, 400),
                <br>0 24px 38px 3px palette(gray, 300),
                <br>0 9px 46px 8px palette(gray, 200)
            </p>
        </div>
    </div>
</div>

### Usage
<div class="elevate-image">
    <img width="100%" height="100%" src="../images/whatismaterial_3d_elevation2.jpg" alt="Shadows Usage">
</div>

###Demo

The following section demonstrates how to set various elevations to elements.

Define the element that you want ot set a shadow on:

```html
...
    <div>
        <div class="elevation-sample elevate">
            <p class="variable">
                $elevate-8
            </p>
            <p class="css">
                box-shadow:
                <br>0 5px 5px -3px palette(gray, 400),
                <br>0 8px 10px 1px palette(gray, 300),
                <br>0 3px 14px 2px palette(gray, 200)
                <br>The are the default elevation colors 
            </p>
        </div>
    </div>
```

Then apply the [igx-elevation]({environment:sassApiUrl}/index.html#function-igx-elevation) to the `scss` class of the element:

```scss
    // First you have to import the utilities!
@import '~igniteui-angular/lib/core/styles/themes/utilities';

    //Apply the elevation level
.elevation-sample.elevate{
    box-shadow: igx-elevation($elevations, 8);
}
```
The result from the above code snippets is:

<div class="sample-container loading" style="height: 350px">
    <iframe id="shadows-sample-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/shadows-sample" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="shadows-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>

Now lets change the shadow color and the elevation level:

 ```scss
...
//Define the 3 elevation colors
$color-1:#99BFAA;
$color-2:#5C868D;
$color-3:#5C3D46;    

//Define the shadow elevations
$shadow-elevations: igx-elevations($color-1,$color-2,$color-3);

//Apply the custom shadow elevations and change the elevation level 
.elevation-sample.elevate{
    box-shadow: igx-elevation($shadow-elevations, 24);
}
```

And you get

<div class="sample-container loading" style="height: 350px">
    <iframe id="shadows-sample-2-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/shadows-sample-2" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="shadows-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz</button>
</div>
<div class="divider--half"></div>


### API References

* [IGX-ELEVATION]({environment:sassApiUrl}/idnex.html#function-igx-elevation)
* [IGX-ELEVATIONS]({environment:sassApiUrl}/idnex.html#function-igx-elevations)


