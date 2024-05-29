---
title: Angular Icon Service – Ignite UI for Angular | Infragistics
_description: Developers can unify and use various icon and font sets interchangeably with custom colors and more with Ignite UI for Angular Icon Service. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Icon components, Angular Icon controls, Angular Icon service
---

# Angular Icon Service Overview
<p class="highlight">The Ignite UI for Angular Icon Service allows developers to add new icons from various sources to their UIs.</p>

## Introduction

The Ignite UI for Angular Icon Service provides several methods that allow users to create and manage icon families.

The icon service can be imported directly from the Ignite UI for Angular package.

```ts
import { IgxIconComponent, IgxIconService } from 'igniteui-angular';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ IgxIconComponent ]
})
export class AppComponent implements OnInit {
    constructor(public iconService: IgxIconService) {}
}
```

### Adding Icon Families

Adding a new family of icons is done using the `setFamily` method of the icon service. It creates an family entry with some metadata that instructs the `igx-icon` component about the icon(s) it should render.

Let's use a practical example to explain how the `setFamily` method works:

```ts
/** 
* The icon service associates a given family name (provided by the user) 
* with a specific CSS class (as documented in the providing icon font) 
* and corresponding icon name (documented in the icon font).
*/ 
iconService.setFamily('material', { className: 'material-icons', type: 'liga' });
iconService.setFamily('fa-solid', { className: 'fas', type: 'font', prefix: 'fa' });
```

The example above creates two icon families: 'material' and 'fa-solid'. Their types are different, the `material` family is registered as `liga`, while the `fa-solid` family is registered as `font`. The difference between the two is how the `igx-icon` component would go about rendering them. Typically, [Font Awesome](https://fontawesome.com/) uses class names to specify code points to a __font__ family, hence why we set its type to `font`. Anytime we have to rely on code points to render icons, we should set the type to `font`. The [Material Icons](https://material.io/icons) family is still a font family, however, the standard way to display an icon is to provide a `ligature` name, instead of a class name pointing to a specific code point. For that reason, we need to set the type to `liga`. There's a third family type - `svg`, it is reserved for icon families that will be comprised of SVGs that are registered through the Icon Service.

Having registered the two font families above, we can now consume their icons in a standardized way via the `igx-icon` component:

```html
<igx-icon family="material" name="home"></igx-icon>
<igx-icon family="fa-solid" name="car"></igx-icon>
```

You might have noticed that for the `material` family we use the ligature `name` as name, while in the case of the `fa-solid` family we specify the `className` for name, which is `fa-car` but drop the `fa-` prefix as it has been specified when we registered the icon family in the previous step.

### Adding SVG Icons
The Ignite UI for Angular Icon Service allows us to associate SVG images with families and give them names so that they can be included via the `igx-icon` component in the same way as font-based icons. The SVGs should be resolved via either strings or via absolute URI to the SVG asset.

```ts
// Add a new 'material' icon called 'my-icon' from an SVG file
iconService.addSvgIcon('my-icon', 'my-icon.svg', 'material');

// Add a new 'fa-solid' icon called 'my-icon' from string 
iconService.addSvgIconFromText('my-icon', '<svg>...</svg>', 'fa-solid');
```

Later in markup:

```html
<igx-icon family="material" name="my-icon"></igx-icon>
<igx-icon family="fa-solid" name="my-icon"></igx-icon>
```

Note that we are adding custom SVG icons to families of type `liga` and `font`. This is possible because the `addSvgIcon` and `addSvgIconFromText` methods register the icons as `svg` type implicitly, allowing the `igx-icon` component to correctly render the SVG.

## Meta Families
The Ignite UI for Angular Icon Service allows us to create pseudo family maps that combine icons added via either setting a family of font icons or adding SVGs under a common umbrella so that it's easier to reference them.

```ts
// The `setIconRef` sets an icon reference in the icon map,
// assuming material and fa-solid have been added as families,
iconService.setIconRef('home', 'my-family', { family: 'material', name: 'home' });
iconService.setIconRef('home-alt', 'my-family', { family: 'fa-solid', name: 'home' });
iconService.setIconRef('car', 'my-family', { family: 'fa-solid', name: 'car' });
```

Later in markup:

```html
<igx-icon family="my-family" name="home"></igx-icon>
<igx-icon family="my-family" name="home-alt"></igx-icon>
<igx-icon family="my-family" name="car"></igx-icon>
```

## Icon Retrieval
It is possible to get an icon for a given `family` and icon `name` in order to read the original icon `type`, `name`, `family`, and `className`.

```ts
const { family, className, name, type } = iconService.getIcon('my-family', 'car');

console.log(family); // -> 'fa-solid'
console.log(className); // -> 'fas'
console.log(name); // -> 'fa-car'
console.log(type); // -> 'font'
```

## API

Here's a quick summary of all methods available via the Ignite UI for Angular Icon Service.

### Add Family

```ts
setFamily(name: string, meta: IconFamilyMeta): IgxIconService;
```

### Icon References
Set ONLY if NOT already present the icon map:

```ts
addIconRef(name: string, family: string, icon: IconMeta): void;
```

Set an Icon reference in the icon map (overridden if already present):
```ts
setIconRef(name: string, family: string, icon: IconMeta): void;
```

Get and Icon reference
```ts
getIconRef(family: string, name: string): IconReference;
```

### SVG Icons
From URI:
```ts
addSvgIcon(name: string, url: string, family: string, stripMeta = false): void;
```

From string:
```ts
addSvgIconFromText(name: string, iconText: string, family: string, stripMeta = false): void;
```

## API References
<div class="divider--half"></div>

* [IgxIconService]({environment:angularApiUrl}/classes/igxiconservice.html)

## Additional Resources
<div class="divider--half"></div>

Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
