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

<code-view style="height: 180px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/icon-service" alt="Icon Service Example">
</code-view>

### Adding Icon Families

By default the Icon Service sets its default family to `material`.

Adding new families of icons is done using the `setFamily` method of the icon service. It creates an family entry with some metadata that instructs the `igx-icon` component about the icon(s) it should render.

Let's use a practical example to explain how the `setFamily` method works:

```ts
/** 
* The icon service associates a given family name (provided by the user) 
* with a specific CSS class (as documented in the providing icon font) 
* and corresponding icon name (documented in the icon font).
* NOTE: Material is already the default family.
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

## Internal Usage

Starting with version 18.1.0 of Ignite UI for Angular, we added a new `setFamily` method that allows us to create a new family of icons in the `iconService` and associate them with a CSS class.

| Icon Family | Icon Name      | Target Family | Target Name          | Used By                                                 | Theme                     |
|-------------|----------------|---------------|----------------------|---------------------------------------------------------|---------------------------|
| default     | more_vert      | material      | more_vert            | Action Strip, Grid                                      | All                       |
| default     | expand         | material      | expand_more          | Grid, Expansion Panel, Filtering Row                    | All                       |
| default     | collapse       | material      | expand_less          | Grid, Expansion Panel                                   | All                       |
| default     | arrow_next     | material      | keyboard_arrow_right | Month Picker, Calendar                                  | All                       |
| default     | arrow_prev     | material      | keyboard_arrow_left  | Month Picker, Calendar                                  | All                       |
| default     | carousel_next  | material      | keyboard_arrow_right | Carousel                                                | Indigo                    |
| default     | carousel_prev  | material      | keyboard_arrow_left  | Carousel                                                | Indigo                    |
| default     | carousel_next  | material      | arrow_forward        | Carousel                                                | Material                  |
| default     | carousel_prev  | material      | arrow_back           | Carousel                                                | Material                  |
| default     | next           | material      | navigate_next        | Grid, Tabs                                              | Indigo                    |
| default     | prev           | material      | navigate_before      | Grid, Tabs                                              | Indigo                    |
| default     | next           | material      | navigate_next        | Filtering Row                                           | All                       |
| default     | prev           | material      | navigate_before      | Filtering Row                                           | All                       |
| default     | selected       | material      | done                 | Grid, Chip, Filtering Row                               | All                       |
| default     | remove         | material      | cancel               | Grid, Chip                                              | All                       |
| default     | clear          | material      | cancel               | Combo, Simple Combo, Time Picker, Date Picker           | Material                  |
| default     | clear          | material      | clear                | Combo, Simple Combo, Time Picker, Date Picker           | Indigo, Fluent, Bootstrap |
| default     | clear          | material      | clear                | Grid, Input Group, Excel Style Filtering, Filtering Row | All                       |
| default     | clock          | material      | access_time          | Time Picker                                             | All                       |
| default     | filter_list    | material      | filter_list          | Grid, Filtering Cell, Excel Style Filtering             | All                       |
| default     | add            | material      | add                  | Grid, Query Builder, Excel Style Filtering              | All                       |
| default     | close          | material      | close                | Grid, Query Builder, Filtering Row                      | All                       |
| default     | check          | material      | check                | Grid, Query Builder                                     | All                       |
| default     | delete         | material      | delete               | Grid, Query Builder                                     | All                       |
| default     | edit           | material      | edit                 | Grid, Query Builder                                     | All                       |
| default     | first_page     | material      | first_page           | Grid, Paginator                                         | All                       |
| default     | last_page      | material      | last_page            | Grid, Paginator                                         | All                       |
| default     | chevron_left   | material      | chevron_left         | Grid, Paginator                                         | All                       |
| default     | chevron_right  | material      | chevron_right        | Grid, Paginator, Excel Style Filtering, TreeNode        | All                       |
| default     | refresh        | material      | refresh              | Grid, Filtering Row                                     | All                       |
| default     | visibility     | material      | visibility           | Grid, Excel Style Filtering                             | All                       |
| default     | visibility_off | material      | visibility_off       | Grid, Excel Style Filtering                             | All                       |
| default     | arrow_back     | material      | arrow_back           | Grid, Excel Style Filtering                             | All                       |
| default     | arrow_forward  | material      | arrow_forward        | Grid, Excel Style Filtering                             | All                       |
| default     | arrow_upward   | material      | arrow_upward         | Grid, Excel Style Filtering                             | All                       |
| default     | arrow_downward | material      | arrow_downward       | Grid, Excel Style Filtering                             | All                       |
| default     | today          | material      | today                | Date Picker                                             | All                       |
| default     | date_range     | material      | date_range           | Date Range Picker                                       | All                       |
| default     | expand         | material      | arrow_drop_down      | Grid, TreeNode                                          | All                       |
| default     | import_export  | material      | import_export        | Grid                                                    | All                       |
| default     | table_rows     | material      | table_rows           | Grid                                                    | All                       |
| default     | view_column    | material      | view_column          | Grid                                                    | All                       |
| default     | functions      | material      | functions            | Grid, Pivot Data Selector                               | All                       |
| default     | input_expand   | material      | expand_more          | Combo, Simple Combo, Select                             | Material                  |
| default     | input_collapse | material      | expand_less          | Combo, Simple Combo, Select                             | Material                  |
| default     | input_expand   | material      | arrow_drop_down      | Combo, Simple Combo, Select                             | Indigo, Fluent, Bootstrap |
| default     | input_collapse | material      | arrow_drop_up        | Combo, Simple Combo, Select                             | Indigo, Fluent, Bootstrap |
| default     | case-sensitive | imx-icons     | case-sensitive       | Combo, Simple Combo                                     | All                       |

To change the expand icon in the tree for instance, you can do the following:

```ts
setIconRef('expand', 'tree', {
    name: 'chevron_right',
    family: 'material',
});
```

This will set the expand icon to the `chevron_right` ligature from the `material` font family.

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
