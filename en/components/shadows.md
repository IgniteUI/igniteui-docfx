---
title: Elevations/shadows
_description:
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

# Shadows

Shadows are used to establish and maintain functional boundaries between Document Object Model trees to enable better functional encapsulation.

## Elevations
<div class="elevations row">
    <div class="col-lg-4 col-md-4 col-sm-6">
        <div class="elevation-sample elevate-1">
            <p class="variable">
                Level 1
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
                Level 2
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
                Level 3
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
                Level 4
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
                Level 6
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
                Level 8
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
                Level 9
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
                Level 12
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
                Level 16
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
                Level 24
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

## Usage
<div class="elevate-image">
    <img width="100%" height="100%" src="../images/whatismaterial_3d_elevation2.jpg" alt="Shadows Usage">
</div>

## How to add elevations?

The following section demonstrates how to set elevation to a component. In the example, we are using the card component.

First apply the [igx-elevation]({environment:sassApiUrl}/index.html#function-igx-elevation) to the card by doing the following

```scss
$myCard: igx-card-theme(
    $resting-shadow: igx-elevation($elevations, 10)
);

@include igx-card($myCard);

// This compiles to

.igx-card {
  box-shadow: 
    0 6px 6px -3px rgba(0, 0, 0, 0.26),
    0 10px 14px 1px rgba(0, 0, 0, 0.12),
    0 4px 18px 3px rgba(0, 0, 0, 0.08);
}
```

As you can see the shadow is produced according to the material guidelines.

To change the shadows colors use the igx-elevations function to override the defaults:
 ```scss
...
// Define the 3 elevation colors

$color-1: rgb(153, 191, 170); // Umbra
$color-2: rgb(92, 134, 141); // Penumbra
$color-3: rgb(92, 61, 70); // Ambient

// Use igx-elevations to generate sass maps for all three 
// box-shadows with the costume colors 

$elevations-color: igx-elevations($color-1, $color-2, $color-3);

// Use the igx-elevation to set the desired elevation level
$mySpecialCard: igx-card-theme(
    $resting-shadow: igx-elevation($elevations-color, 10)
);

// If you want you can scope your custom elevation to a specific selector
.special-card {
  @include igx-card($mySpecialCard);
}

// This compiles compiled to

.special-card .igx-card {
  box-shadow: 
    0 6px 6px -3px rgb(153, 191, 170),
    0 10px 14px 1px rgb(92, 134, 141),
    0 4px 18px 3px rgb(92, 61, 70);
}

```

You can also set box-shadow without taking advantage of the igx-elevation function:
```scss
$myboringCard: igx-card-theme(
    $resting-shadow: 0 10px 10px 10px #666
);

.boring-card{
  @include igx-card($myboringCard);
}

// This compiles to

.boring-card .igx-card {
  box-shadow: 0 10px 10px 10px #666;
}
```


Here is The result from the above code snippets:


<code-view style="height: 470px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/theming/card-sample-shadow" >
</code-view>

<div class="divider--half"></div>


<div class="divider--half"></div>


## API References

* [IGX-ELEVATION]({environment:sassApiUrl}/index.html#function-igx-elevation)
* [IGX-ELEVATIONS]({environment:sassApiUrl}/index.html#function-igx-elevations)


