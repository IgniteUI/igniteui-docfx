---
title: Angular Query Builder Component - Ignite UI for Angular
_description: Angular Query Builder allows users to build complex custom queries in angular apps with a great UI experience. Try it Now.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Query Builder component, Angular Query Builder control
---


# Angular Query Builder Overview

Angular Query Builder provides a feature rich UI that allows developers to build complex data filtering queries for a specified data set. With this component they can build a tree of expressions and set AND/OR conditions between them with editors and condition lists determined by each field's data type. The expression tree can then be easily transformed to a query in the format the backend supports.

<p class="highlight">The [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) component provides a way to build complex queries through the UI. By specifying AND/OR operators, conditions and values the user creates an expression tree which describes the query. 

## Angular Query Builder Example

We’ve created this Angular Query Builder example to show you the default functionalities of the Angular Query Builder component. Click the plus button to add conditions, “and” group as well as “or” group. Navigate the side bars to ungroup or delete.

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sample-1" alt="Angular Query Builder Example">
</code-view>

<div class="divider--half"></div>

## Interaction

If no expression tree is initially set, you start with creating a group of conditions linked with [`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or). After that, conditions or sub-groups can be added. 

In order to add a condition, a field, an operand based on the field dataType and a value if the operand is not unary. Once the condition is committed, a chip with the condition information appears. By hovering or clicking the chip, you have the options to modify it or add another condition or group right after it.

If you select more than one condition chip, a context menu appears with options to create a group or delete the queries. If you choose to create a group with the selected conditions, the newly created group will appear where the topmost selected condition was placed.

In order to select a group, you can also click on its vertical line, which is colored based on the linking condition ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)). If a single group is selected, you get a context menu with options to change its logic, ungroup or delete it.

## Getting Started with Ignite UI for Angular Query Builder Component

You can start using the component by setting the [`fields`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#fields) property to an array describing the field name and its data type. It will automatically assign the corresponding operands based on the data type.
The Query Builder has the [`expressionTree`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#expressionTree) input property. You could use it to set an initial state of the control and access the user-specified filtering logic.

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);
    
    this.queryBuilder.expressionTree = tree;
}
```

The `expressionTree` is a two-way bindable property which means a corresponding `expressionTreeChange` output is implemented that emits when the end-user changes the UI by creating, editing or removing conditions. It can also be subscribed to separately to receive notifications and react to such changes.

```html
<igx-query-builder #queryBuilder
    [fields]="fields"
    [(expressionTree)]="expressionTree"
    (expressionTreeChange)="onExpressionTreeChange()">
</igx-query-builder>
```

## Styling

To get started with styling the Query Builder, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
``` 

The Query Builder takes its background color from the its theme, using the `background` parameter. In order to change the background we need to create a custom theme:

```scss
$custom-query-builder: query-builder-theme(
    $background: #FFCD0F
);
```

Since we have other components inside the Query Builder, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: button-theme(
    $disabled-color: gray,
    ...
);

$custom-button-group: button-group-theme(
    $item-background:  #292826,
    ...
);

$custom-input-group: input-group-theme(
    $box-background: #4a4a4a,
    ...
);

$custom-chip: chip-theme(
    $background: #FFCD0F,
    ...
);

$custom-drop-down: drop-down-theme(
    $background-color: #292826,
    ...
);
```

In this example we only changed some of the parameters for the listed components, but the [`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme), [`button-group-theme`]({environment:sassApiUrl}/index.html#function-button-group-theme), [`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme), [`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme), [`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) themes provide way more parameters to control their respective styling.

The last step is to **include** the component mixins, each with its respective theme. We will also add some styles for other elements inside the query builder.

```scss
@include query-builder($custom-query-builder);
igx-query-builder {
    @include button($custom-button);
    @include button-group($custom-button-group);
    @include input-group($custom-input-group);
    @include chip($custom-chip);
    @include drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-query-builder__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

>[!NOTE]
>We scope most of the components' mixins within `igx-query-builder`, so that these custom themes will affect only components nested in the Query Builder. Otherwise, other buttons, chips, inputs and dropdowns in the application would be affected too.

>[!NOTE]
>If the component is using an [`Emulated`](themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep`:

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include query-builder($custom-query-builder);
        igx-query-builder {
            @include button($custom-button);
            @include button-group($custom-button-group);
            @include input-group($custom-input-group);
            @include chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-query-builder__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### Defining a color palette

Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) and [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) functions.

`igx-palette` generates a color palette based on the primary and secondary colors that are passed:

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```
And then with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) we can easily retrieve color from the palette. 

```scss
$custom-query-builder: query-builder-theme(
    $background: color($dark-palette, "secondary", 400)
);

$custom-button: button-theme(
    $disabled-color: color($dark-palette, "secondary", 100),
    ...
);

$custom-button-group: button-group-theme(
    $item-background: color($dark-palette, "secondary", 400),
    ...
);

$custom-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 200),
    ...
);

$custom-chip: chip-theme(
    $background: color($dark-palette, "primary", 400),
    ...
);

$custom-drop-down: drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),
    ...
);
```

>[!NOTE]
>The `igx-color` and `igx-palette` are powerful functions for generating and retrieving colors. Please refer to [`Palettes`](themes/sass/palettes.md) topic for detailed guidance on how to use them.

### Using Schemas

Going further with the theming engine, you can build a robust and flexible structure that benefits from [**schemas**](themes/sass/schemas.md). A **schema** is a recipe of a theme.

Extend one of the two predefined schemas, that are provided for every component, in this case - [`light-query-builder`]({environment:sassApiUrl}/index.html#variable-_light-query-builder), [`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button), [`light-button-group`]({environment:sassApiUrl}/index.html#variable-_light-button-group), [`light-chip`]({environment:sassApiUrl}/index.html#variable-_light-chip), [`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group) and [`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down) schemas:

```scss
$query-builder-dark-palette: palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-query-builder-schema: extend($_light-query-builder,
    (
        background:(
           color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
           color: ("secondary", 100)
        ),
        ...
    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
           color: ("secondary", 400)
        ),
        ...
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 200)
        ),
        ...
    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
           color: ("primary", 400)
        ),
        ...
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),
        ...
    )
);
```

In order to apply our custom schemas we have to **extend** one of the globals ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) or [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)), which is basically pointing out the components with a custom schema, and after that add it to the respective component themes:

```scss
$custom-light-schema: extend($light-schema,(
    igx-query-builder: $custom-query-builder-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-query-builder: query-builder-theme(
    $palette: $query-builder-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

Don't forget to include the themes in the same way as it was demonstrated above.

### Demo

<code-view style="height:530px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-style" >
</code-view>

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

## API References
<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderComponent Styles]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
