---
title: Angular Query Builder Component - Ignite UI for Angular
_description: Angular Query Builder allows users to build complex custom queries in angular apps with a great UI experience. Try it Now.
_keywords: Angular Query Builder component, Angular Query Builder control, Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Angular UI Components, Native Angular Components Library
---

# Angular Query Builder Component Overview

Angular Query Builder is part of our [Angular Components](https://www.infragistics.com/products/ignite-ui-angular) and it provides a rich UI that allows developers to build complex data filtering queries for a specified data set. With this component they can build a tree of expressions and set AND/OR conditions between them with editors and condition lists determined by each field's data type. The expression tree can then be easily transformed to a query in the format the backend supports.

<p class="highlight">

The [`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) component provides a way to build complex queries through the UI. By specifying AND/OR operators, conditions and values the user creates an expression tree which describes the query.

</p>

## Angular Query Builder Example

We’ve created this Angular Query Builder example to show you the default functionalities of the Angular Query Builder component. Click the plus button to add conditions, “and” group as well as “or” group. Navigate the side bars to ungroup or delete.

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sample-1" alt="Angular Query Builder Example">
</code-view>

<div class="divider--half"></div>

## Getting Started with Ignite UI for Angular Query Builder

To get started with the Ignite UI for Angular Query Builder component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](general/getting-started.md) topic.

The next step is to import the `IgxQueryBuilderModule` in the **app.module.ts** file.

```typescript
// app.module.ts

import { IgxQueryBuilderModule } from 'igniteui-angular';
// import { IgxQueryBuilderModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxQueryBuilderModule],
    ...
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxQueryBuilderComponent` as a standalone dependency, or use the [`IGX_QUERY_BUILDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/query-builder/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_QUERY_BUILDER_DIRECTIVES, FilteringExpressionsTree, FieldType } from 'igniteui-angular';
// import { IGX_QUERY_BUILDER_DIRECTIVES, FilteringExpressionsTree, FieldType } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-query-builder #queryBuilder
        [fields]="fields"
        [(expressionTree)]="expressionTree"
        (expressionTreeChange)="onExpressionTreeChange()">
    </igx-query-builder>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_QUERY_BUILDER_DIRECTIVES]
    /* or imports: [IgxQueryBuilderComponent] */
})
export class HomeComponent {
    public expressionTree: FilteringExpressionsTree;
    public fields: FieldType [];

    public onExpressionTreeChange() {
        ...
    }
}
```

Now that you have the Ignite UI for Angular Query Builder module or directives imported, you can start using the `igx-query-builder` component.

## Using the Angular Query Builder

If no expression tree is initially set, you start with creating a group of conditions linked with [`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or). After that, conditions or sub-groups can be added.

In order to add a condition, a field, an operand based on the field dataType and a value if the operand is not unary. Once the condition is committed, a chip with the condition information appears. By hovering or clicking the chip, you have the options to modify it or add another condition or group right after it.

If you select more than one condition chip, a context menu appears with options to create a group or delete the queries. If you choose to create a group with the selected conditions, the newly created group will appear where the topmost selected condition was placed.

In order to select a group, you can also click on its vertical line, which is colored based on the linking condition ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)). If a single group is selected, you get a context menu with options to change its logic, ungroup or delete it.

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
<igx-query-builder #queryBuilder [fields]="fields" [(expressionTree)]="expressionTree" (expressionTreeChange)="onExpressionTreeChange()">
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
  $background: #ffcd0f,
);
```

Since we have other components inside the Query Builder, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: button-theme(
  $disabled-foreground: gray,
  ...,
);

$custom-button-group: button-group-theme(
  $item-background: #292826,
  ...,
);

$custom-input-group: input-group-theme(
  $box-background: #4a4a4a,
  ...,
);

$custom-chip: chip-theme(
  $background: #ffcd0f,
  ...,
);

$custom-drop-down: drop-down-theme(
  $background-color: #292826,
  ...,
);
```

In this example we only changed some of the parameters for the listed components, but the [`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme), [`button-group-theme`]({environment:sassApiUrl}/index.html#function-button-group-theme), [`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme), [`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme), [`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) themes provide way more parameters to control their respective styling.

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the new component themes using the `css-vars` mixin.

```scss
@include css-vars($custom-query-builder);

:host {
  ::ng-deep {
    @include css-vars($custom-drop-down);
    @include css-vars($custom-button);
    @include css-vars($custom-button-group);
    @include css-vars($custom-input-group);
    @include css-vars($custom-chip);
  }
}
```

> [!NOTE]
> If the component is using an [`Emulated`](/themes/sass/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to `penetrate` this encapsulation using `::ng-deep` to style the components inside the query builder component (button, chip, drop-down ...etc).

### Demo

<code-view style="height:330px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-style" >
</code-view>

> [!NOTE]
> The sample will not be affected by the selected global theme from `Change Theme`.

<div class="divider--half"></div>

You can also streamline your Angular app development using [WYSIWYG App Builder™](https://www.infragistics.com/products/appbuilder) with real UI components.

## API References

<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderComponent Styles]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
