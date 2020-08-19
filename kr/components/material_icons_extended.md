---
title: Icon Component
_description: Ignite UI for Angular extends the material icons set to provide the designers and developers a wide range of icons to choose from.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls, Material icons extended
---

## Material Icons Extended
<p class="highlight">The Ignite UI for Angular provides a nice set of icons that extends the material icon set</p>

### Demo
<div class="sample-container loading" style="height: 750px">
    <iframe id="material-icons-extended-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/data-display/material-icons-extended" onload="onSampleIframeContentLoaded(this);">
</iframe></div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="material-icons-extended-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on codesandbox
    </button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="material-icons-extended-iframe" data-demos-base-url="{environment:demosBaseUrl}">                view on stackblitz
    </button>
</div>

<div class="divider--half"></div>

### Installation

```sh
npm install @igniteui/material-icons-extended
```

### Usage

First, let's see how we can register a single icon in our component:

```typescript
import { Component, OnInit } from "@angular/core";
import { IgxIconService } from "igniteui-angular";
import { github } from "@igniteui/material-icons-extended";
// ...
export class SampleComponent implements OnInit {
  constructor(private iconService: IgxIconService) {}

  ngOnInit(): void {
    // Register a single icon
    this.iconService.addSvgIcon(github.name, github.value, "imx-icons");
  }
}
```

Now, let's see how to register multiple icons/categories:

```typescript
//...
import { health, programming } from "@igniteui/material-icons-extended";

export class SampleComponent implements OnInit {
  public allIcons = [
    ...health,
    ...programming,
    ...finance,
    ...logos,
    ...socialMedia
  ];
  //...
  addIcons() {
    for (let icon of this.allIcons) {
      this.iconService.addSvgIcon(icon.name, icon.value, "imx-icons");
    }
  }

  ngOnInit(): void {
    this.addIcons();
  }
}
```

To use the icons in your component template:

```html
<igx-icon fontSet="imx-icons" name="github"></igx-icon>
```

For more info and other types of usages, goo to our * [GitHub repo](https://github.com/IgniteUI/material-icons-extended).

### Additional Resources
<div class="divider--half"></div>

[`IgxIconService`]({environment:angularApiUrl}/classes/igxiconservice.html)

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
