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

We’ve created this Angular Query Builder example to show you the default functionalities of the Angular Query Builder component. Click the plus button to add conditions, “and” group as well as “or” group. Grouping or ungrouping expressions as well as re-ordering could be achieved via the Drag&Drop functionality.

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
        [entities]="entities"
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
    public entities: Array<any>;

    public onExpressionTreeChange() {
        ...
    }
}
```

Now that you have the Ignite UI for Angular Query Builder module or directives imported, you can start using the `igx-query-builder` component.

## Using the Angular Query Builder

If no expression tree is initially set, you start by choosing an entity and which of its fields the query should return. After that, conditions or sub-groups can be added. 

In order to add a condition you select a field, an operand based on the field data type and a value if the operand is not unary. The operands `In` and `Not In` will allow you to create an inner query with conditions for a different entity instead of simply providing a value. Once the condition is committed, a chip with the condition information appears. By clicking or hovering the chip, you have the options to modify it or add another condition or group right after it.

Clicking on the ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) or [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)) button placed above each group, will open a menu with options to change the group type or ungroup the conditions inside.

Since every condition is related to a specific field from a particular entity changing the entity will lead to resetting all preset conditions and groups. When selecting a new entity a confirmation dialog will be shown, unless the [`showEntityChangeDialog`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#showEntityChangeDialog) input property is set to false.

You can start using the component by setting the [`entities`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#entities) property to an array describing the entity name and an array of its fields, where each field is defined by its name and data type. Once a field is selected it will automatically assign the corresponding operands based on the data type.
The Query Builder has the [`expressionTree`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#expressionTree) input property. You could use it to set an initial state of the control and access the user-specified filtering logic.

```typescript
ngAfterViewInit(): void {
    const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Companies', ['ID']);
    innerTree.filteringOperands.push({
        fieldName: 'Employees',
        condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
        conditionName: 'greaterThan',
        searchVal: 100
    });
    innerTree.filteringOperands.push({
        fieldName: 'Contact',
        condition: IgxBooleanFilteringOperand.instance().condition('true'),
        conditionName: 'true'
    });

    const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
    tree.filteringOperands.push({
        fieldName: 'CompanyID',
        condition: IgxStringFilteringOperand.instance().condition('in'),
        conditionName: 'in',
        searchTree: innerTree
    });
    tree.filteringOperands.push({
        fieldName: 'OrderDate',
        condition: IgxDateFilteringOperand.instance().condition('before'),
        conditionName: 'before',
        searchVal: new Date('2024-01-01T00:00:00.000Z')
    });
    tree.filteringOperands.push({
        fieldName: 'ShippedDate',
        condition: IgxDateFilteringOperand.instance().condition('null'),
        conditionName: 'null'
    });

    this.queryBuilder.expressionTree = tree;
}
```

The `expressionTree` is a two-way bindable property which means a corresponding `expressionTreeChange` output is implemented that emits when the end-user changes the UI by creating, editing or removing conditions. It can also be subscribed separately to receive notifications and react to such changes.

```html
<igx-query-builder #queryBuilder
    [entities]="entities"
    [(expressionTree)]="expressionTree"
    (expressionTreeChange)="onExpressionTreeChange()">
</igx-query-builder>
```

## Expressions Dragging

Condition chips can be easily repositioned using mouse [*Drag & Drop*](drag-drop.md) or [*Keyboard reordering*](#keyboard-interaction) approaches. With those, users can adjust their query logic dynamically.
- Dragging a chip does not modify its condition/contents, only it's position.
- Chip can also be dragged along groups and subgroups. For example, grouping/ungrouping expressions is achieved via the Expressions Dragging functionality.
In order to group already existing conditions, first you need to add a new group through the 'add' group button. Then via dragging, the required expressions can be moved to that group. In order to ungroup, you could drag all conditions outside their current group and once the last condition is moved out, the group will be deleted.
>[!NOTE]
>Chips from one query tree cannot be dragged in another, e.g. from parent to inner and vice versa.
<div style="display:inline-block;">
    <a style="background: url(../../images/general/query-builder-drag-and-drop.gif); display:flex; justify-content:center; width: 80vw; max-width:480px; min-height:415px;"
       target="_blank">
        <img src="../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Rearranging chips using mouse Drag and Drop</p>
</div>

## Keyboard interaction
**Key Combinations**
 - <kbd>Tab</kbd> / <kbd>Shift + Tab</kbd> - navigates to the next/previous chip, drag indicator, remove button, 'add' expression button.
 - <kbd>Arrow Down</kbd>/<kbd>Arrow Up</kbd> - when chip's drag indicator is focused, the chip can be moved up/down.
 - <kbd>Space</kbd> / <kbd>Enter</kbd> - focused expression enters edit mode. If chip is been moved, this confirms it's new position.
 - <kbd>Esc</kbd> - chip's reordering is canceled and it returns to it's original position.

>[!NOTE]
>Keyboard reordering provides the same functionality as mouse Drag & Drop. Once a chip is moved, user has to confirm the new position or cancel the reorder.
<div style="display:inline-block;">
    <a style="background: url(../../images/general/query-builder-keyboard-drag-and-drop.gif); display:flex; justify-content:center; width: 80vw; max-width:480px; min-height:428px;"
       target="_blank">
        <img src="../images/general/play.svg" style="vertical-align: middle;" />
    </a>
    <p style="text-align:center;">Rearranging chips using keyboard reordering</p>
</div>


## Templating

The Ignite UI for Angular Query Builder Component allows defining templates for the component's header and the search value using the following predefined reference names:

### Header

Passing content inside of the `igx-query-builder-header` allows templating the query builder header. 

 The code snippet below illustrates how to do this:

```html
<igx-query-builder #queryBuilder [entities]="this.entities">
        <igx-query-builder-header [title]="'Query Builder Template Sample'">  
        </igx-query-builder-header>
</igx-query-builder>
```

### Search value

The search value of a condition can be templated using the [`igxQueryBuilderSearchValue`]({environment:angularApiUrl}/classes/igxquerybuildersearchvaluetemplatedirective.html) directive, applied to an `<ng-template>` inside of the `igx-query-builder`'s body:

```html
<igx-query-builder #queryBuilder
    [entities]="entities"
    [expressionTree]="expressionTree">
    <ng-template #searchValueTemplate igxQueryBuilderSearchValue 
                let-searchValue
                let-selectedField = "selectedField" 
                let-selectedCondition = "selectedCondition"
                let-defaultSearchValueTemplate = "defaultSearchValueTemplate">
        @if (
            selectedField?.field === 'Region' &&
            (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')
            ){
            <igx-select [placeholder]="'Select region'" [(ngModel)]="searchValue.value">
                <igx-select-item *ngFor="let reg of regionOptions" [value]="reg">
                    {{ reg.text }}
                </igx-select-item>
            </igx-select>
        } 
        @else if (
            selectedField?.field === 'OrderStatus' &&
            (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')
            ){
            <igx-radio-group>
                <igx-radio class="radio-sample" *ngFor="let stat of statusOptions" value="{{stat.value}}" [(ngModel)]="searchValue.value">
                    {{stat.text}}
                </igx-radio>
            </igx-radio-group>
        }
            @else {  
            <ng-container #defaultTemplate *ngTemplateOutlet="defaultSearchValueTemplate"></ng-container>
        }
    </ng-template>
</igx-query-builder>
```

## Formatter
In order to change the appearance of the search value in the chip displayed when a condition is not in edit mode, you can set a formatter function to the fields array. The search value and selected condition could be acccessed through the value and rowData arguments as follows:

```ts
this.ordersFields = [
    { field: "CompanyID", dataType: "string" },
    { field: "OrderID", dataType: "number" },
    { field: "EmployeeId", dataType: "number" },
    { field: "OrderDate", dataType: "date" },
    { field: "RequiredDate", dataType: "date" },
    { field: "ShippedDate", dataType: "date" },
    { field: "ShipVia", dataType: "number" },
    { field: "Freight", dataType: "number" },
    { field: "ShipName", dataType: "string" },
    { field: "ShipCity", dataType: "string" },
    { field: "ShipPostalCode", dataType: "string" },
    { field: "ShipCountry", dataType: "string" },
    { field: "Region", dataType: "string", formatter: (value: any, rowData: any) => rowData === 'equals' || rowData === 'doesNotEqual' ? `${value.value}` : value }},
    { field: "OrderStatus", dataType: "number" }
];
```

## Demo
We’ve created this Angular Query Builder example to show you the templating and formatter functionalities for the header and the search value of the Angular Query Builder component.

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-template-sample" alt="Angular Query Builder Templates Example">
</code-view>

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
  $background: #292826,
  ...
);
```

Since we have other components inside the Query Builder, such as buttons, chips, dropdowns and inputs, we need to create a separate theme for each one:

```scss
$custom-button: button-theme(
  $schema: $dark-material-schema,
  $background: #292826,
  $foreground: #ffcd0f,
  ...
);

$custom-input-group: input-group-theme(
  $focused-secondary-color: #ffcd0f
);

$custom-chip: chip-theme(
  $background: #ffcd0f,
  $text-color: #292826
);

$custom-icon-button: icon-button-theme(
  $background: #ffcd0f,
  $foreground: #292826
);
```

In this example we only changed some of the parameters for the listed components, but the [`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme), [`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme), [`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme), [`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) themes provide way more parameters to control their respective styling.

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](/themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the new component themes using the `css-vars` mixin.

```scss
@include css-vars($custom-query-builder);

:host {
  ::ng-deep {
    @include css-vars($custom-input-group);
    @include css-vars($custom-chip);
    @include css-vars($custom-icon-button);

    .igx-filter-tree__buttons {
      @include css-vars($custom-button);
    }
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
* [IgxQueryBuilderHeaderComponent]({environment:angularApiUrl}/classes/igxquerybuilderheadercomponent.html)
* [IgxQueryBuilderSearchValueTemplateDirective]({environment:angularApiUrl}/classes/igxquerybuildersearchvaluetemplatedirective.html)
* [IgxQueryBuilderComponent Styles]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
