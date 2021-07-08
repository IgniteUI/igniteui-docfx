---
title: Update Guide | Ignite UI for Angular | Infragistics
_description: Check out this article on updating how to update to a newer version of the Ignite UI for Angular library.
_keywords: ignite ui for angular, update, npm package, material components
---

# Update Guide

In the Ignite UI for Angular [versioning](https://github.com/IgniteUI/igniteui-angular/wiki/Ignite-UI-for-Angular-versioning) the first number always matches the major version of Angular the code supports and the second is dedicated for major version releases. Breaking changes may be introduced between major releases.
A comprehensive list of changes for each release of **Ignite UI for Angular** can be found in the product [CHANGELOG](https://github.com/IgniteUI/igniteui-angular/blob/master/CHANGELOG.md)

The Ignite UI for Angular package also supports automatic version migration through `ng update` schematics. Those will attempt to migrate all possible breaking changes (renamed selectors, classes and @Input/Output properties), however there might be still changes that cannot be migrated. Those are usually related to typescript application logic and will be described [additionally below](#additional-manual-changes).

First run the [**`ng update`**](https://angular.io/cli/update) command which will analyze your application and available updates for its packages.
```cmd
ng update
```

To update the **Ignite UI for Angular** package run the following command:
```cmd
ng update igniteui-angular
```
When you update `igniteui-angular` - it's recommended to update `@angular/core`, `@angular/cli` and `igniteui-cli` packages to their matching versions.
To update the **Ignite UI CLI** package run the following command:
```cmd
ng update igniteui-cli
```
To update the **Angular Core** package run the following command:
```cmd
ng update @angular/core
```
To update the **Angular CLI** package use the following command:
```cmd
ng update @angular/cli
```

## Additional manual changes


Unfortunately not all changes can be automatically updated. Changes below are split into sections as they occur in the versions, so if any updates are required you should start from your current version and apply further updates from bottom to top.

For example: if you are updating from version 6.2.4 to 7.1.0 you'd start from the "From 6.x .." section apply those changes and work your way up:

## From 11.1.x to 12.0.x
### Themes
* Breaking Changes:
    * `IgxAvatar` theme has been simplified. The number of theme params (`igx-avatar-theme`) has been reduced significantly and no longer includes prefixed parameters(`icon-*`, `initials-*`, `image-*`) and suffixed parameters(`border-radius-*`). Updates performed with `ng update` will migrate existing avatar themes, but some additional tweaking may be required to account for the absence of prefixed and suffixed params.

    You will need to modify existing type specific avatar themes in the following way:

    For example, this:

        ```scss
        $avatar-theme: igx-avatar-theme(
            $initials-background: blue,
            $initials-color: orange,
            $icon-background: blue,
            $icon-color: orange,
        );

        @include igx-avatar($avatar-theme);
        ```

    Needs to be transformed into this:

        ```scss
        $initials-avatar: igx-avatar-theme(
            $background: blue,
            $color: orange,
        );

        $icon-avatar: igx-avatar-theme(
            $background: blue,
            $color: orange,
        );

        .initials-avatar {
            @include igx-avatar($initials-avatar);
        }

        .icon-avatar {
            @include igx-avatar($icon-avatar);
        }
        ```

    * `IgxButton` theme has been simplified. The number of theme params (`igx-button-theme`) has been reduced significantly and no longer includes prefixed parameters (`flat-*`, `raised-*`, etc.). Updates performed with `ng update` will migrate existing button themes, but some additional tweaking may be required to account for the absence of prefixed params.

    In order to achieve the same result as from the code snippet below.

        ```html
        <button igxButton="raised">Raised button</button>
        <button igxButton="outlined">Outlined button</button>
        ```
        ```scss
        $my-button-theme: igx-button-theme(
            $raised-background: red,
            $outlined-outline-color: green
        );

        @include igx-css-vars($my-button-theme);
        ```
    You have to create a separate theme for each button type and scope it to a CSS selector.
        ```html
        <div class="my-raised-btn">
            <button igxButton="raised">Raised button</button>
        </div>
        <div class="my-outlined-btn">
            <button igxButton="outlined">Outlined button</button>
        </div>
        ```

        ```scss
        $my-raised-button: igx-button-theme(
            $background: red
        );

        $my-outlined-button: igx-button-theme(
            $border-color: red
        );

        .my-raised-btn {
            @include igx-css-vars($my-raised-button);
         }

        .my-outlined-btn {
            @include igx-css-vars($my-outlined-button);
        }
        ```
    As you can see, since the `igx-button-theme` params now have the same names for each button type, we have to scope our button themes to a CSS selector in order to have different colors for different types.

    Here you can see all the [available properties](https://www.infragistics.com/products/ignite-ui-angular/docs/sass/latest/index.html#function-igx-button-theme) of the `igx-button-theme`

    * The `igx-typography` mixin is no longer implicitly included with `igx-core`. To use our typography styles you have to include the mixin explicitly after `igx-core` and before `igx-theme`:

    ```scss
    // in styles.scss

    @include igx-core();

    @include igx-typography(
        $font-family: $material-typeface,
        $type-scale: $material-type-scale
    );

    @include igx-theme();
    ```

    > [!IMPORTANT]
    > The `igx-core` mixin should always be included first.

    For each theme included in Ignite UI for Angular we provide specific `font-family` and `type-scale` variables which you can use:

    | **Theme** | **Font Family** | **Type Scale** |
    |----------------|-----------------|-----------------|
    | Material | $material-typeface | $material-type-scale |
    | Fluent | $fluent-typeface | $fluent-type-scale |
    | Bootstrap | $bootstrap-typeface | $bootstrap-type-scale |
    | Indigo | $indigo-typeface | $indigo-type-scale |

### IgxBottomNav component

The [**IgxBottomNavComponent**]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html) was completely refactored in order to provide more flexible and descriptive way to define tab headers and contents. It is recommended that you update via **ng update** in order to migrate the existing **igx-bottom-nav** definitions to the new ones.


* Template
    * The new structure defines bottom navigation item components each wrapping a header and a content component. The headers usually contain an icon ([`Material guidelines`](https://material.io/components/bottom-navigation#usage)) but may as well have a label or any other custom content.
    * For header styling purposes we introduced two new directives - `igxBottomNavHeaderLabel` and `igxBottomNavHeaderIcon`.
    * Since the header component now allows adding any content, the `igxTab` directive, which was previously used to retemplate the tab's header, was removed because it is no longer necessary.
    * When the component is used in navigation scenario, the `routerLink` directive needs to be attached to the header component.

    ```html
    <igx-bottom-nav>
        <igx-bottom-nav-item>
            <igx-bottom-nav-header>
                <igx-icon igxBottomNavHeaderIcon>folder</igx-icon>
                <span igxBottomNavHeaderLabel>Tab 1</span>
            </igx-bottom-nav-header>
            <igx-bottom-nav-content>
                Content 1
            </igx-bottom-nav-content>
        </igx-bottom-nav-item>
        ...
    </igx-bottom-nav>
    ```
* API changes
    * The `id`, `itemStyle`, `panels`, `viewTabs`, `contentTabs` and `tabs` properties were removed. Currently, the [`items`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#items) property returns the collection of tabs.
    * The following properties were changed:
        * The tab item's `isSelected` property was renamed to [`selected`]({environment:angularApiUrl}/classes/igxbottomnavitemcomponent.html#selected).
        * The `selectedTab` property was renamed to [`selectedItem`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selecteditem).
    * The `onTabSelected` and `onTabDeselected` events were removed. We introduced three new events, [`selectedIndexChanging`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selectedindexchanging),[`selectedIndexChange`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selectedindexchange) and [`selectedItemChange`]({environment:angularApiUrl}/classes/igxbottomnavcomponent.html#selecteditemchange), which provide more flexibility and control over the tabs' selection. Unfortunately, having an adequate migration for these event changes is complicated to say the least, so any errors should be handled at project level.

### IgxTabs component
The [**IgxTabsComponent**]({environment:angularApiUrl}/classes/igxtabscomponent.html) was completely refactored in order to provide more flexible and descriptive way to define tab headers and contents. It is recommended that you update via **ng update** in order to migrate the existing **igx-tabs** definitions to the new ones.


* Template
    * The new structure defines tab item components each wrapping a header and a content component. The headers usually contain an icon and a label but may as well have any other custom content.
    * For header styling purposes we introduced two new directives - `igxTabHeaderLabel` and `igxTabHeaderIcon`.
    * Since the header component now allows adding any content, the `igxTab` directive, which was previously used to retemplate the tab's header, was removed because it is no longer necessary.
    * When the component is used in navigation scenario, the `routerLink` directive needs to be attached to the header component.

    ```html
    <igx-tabs>
        <igx-tab-item>
            <igx-tab-header>
                <igx-icon igxTabHeaderIcon>folder</igx-icon>
                <span igxTabHeaderLabel>Tab 1</span>
            </igx-tab-header>
            <igx-tab-content>
                <h1>Tab 1 Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </igx-tab-content>
        </igx-tab-item>
    ...
    </igx-tabs>
    ```
* API changes
    * The `id`, `groups`, `viewTabs`, `contentTabs` and `tabs` properties were removed. Currently, the [`items`]({environment:angularApiUrl}/classes/igxtabscomponent.html#items) property returns the collection of tabs.
    * The following properties were changed:
        * The tab item's `isSelected` property was renamed to [`selected`]({environment:angularApiUrl}/classes/igxtabitemcomponent.html#selected).
        * The `selectedTabItem` property was shortten to [`selectedItem`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selecteditem).
        * The `type` property, with its contentFit and fixed options, is no longer available. The header sizing & positioning mode is currently controlled by the [`tabAlignment`]({environment:angularApiUrl}/classes/igxtabscomponent.html#tabalignment) input property which accepts four different values - start (default), center, end and justify. The old `contentFit` type corresponds to the current `start` alignment value and the old `fixed` type - to the current `justify` value.
    * The `tabItemSelected` and `tabItemDeselected` events were removed. We introduced three new events, [`selectedIndexChanging`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selectedindexchanging), [`selectedIndexChange`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selectedindexchange) and [`selectedItemChange`]({environment:angularApiUrl}/classes/igxtabscomponent.html#selecteditemchange), which provide more flexibility and control over the tabs' selection. Unfortunately, having an adequate migration for these event changes is complicated to say the least, so any errors should be handled at project level.

### IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent
* *IgxGridRowComponent*, *IgxTreeGridRowComponent*, *IgxHierarchicalRowComponent*, *IgxGridGroupByRowComponent* are no longer exposed in the public API.
* Public APIs, which used to return an instance of one of the above, now return objects implementing the public [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) interface:

```ts
const row = grid.getRowByIndex(0);
const row = grid.getRowByKey(2);
const row = cell.row;
```

While the public API of [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) is the same as what *IgxRowComponent* and others used to expose, please note:

* *toggle* method, exposed by the *IgxHierarchicalRowComponent* is not available. Use [`expanded`]({environment:angularApiUrl}/interfaces/rowtype.html#expanded) property for all row types:

```ts
grid.getRowByIndex(0).expanded = false;
```
*row.rowData* and *row.rowID* are deprecated and will be entirely removed with version 13. Please use *row.data* and *row.key* instead.

* *row* property in the event arguments emitted by *onRowPinning*, and *dragData* property in the event arguments emitted by *onRowDragStart*, *onRowDragEnd* is now implementing [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html)
* *ng update* will migrate most of the uses of *IgxGridRowComponent*, *IgxTreeGridRowComponent*, *IgxHierarchicalRowComponent*, *IgxGridGroupByRowComponent* , like imports, typings and casts. If a place in your code using any of the above is not migrated, just remove the typing/cast, or change it with [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html).
* *getRowByIndex* will now return a [`RowType`]({environment:angularApiUrl}/interfaces/rowtype.html) object, if the row at that index is a summary row (previously used to returned *undefined*). *row.isSummaryRow* and *row.isGroupByRow* return true if the row at the index is a summary row or a group by row.
### IgxInputGroupComponent
* The `disabled` property has been removed. The property was misleading, as the state of the input group was always managed by the underlying `igxInput`.
    * Running `ng update` will handle all instances in which `[disabled]` was used as an `@Input` in templates.
    * If you are referencing the property in a `.ts` file:
    ```typescript
    export class CustomComponent {
        public inputGroup: IgxInputGroupComponent
        ...
        this.inputGroup.disabled = false;
    }
    ```

    you should please manually update your code to reference the underlying input directive's `disabled` property:
    ```typescript
    export class CustomComponent {
        public input: IgxInputDirective
        ...
        this.input.disabled = false;
    }
    ```

### IgxDateTimeDirective, IgxDatePickerComponent, IgxTimePickerComponent, IgxDateRangePickerComponent

* The `value` property for IgxDateTimeDirective, IgxDatePickerComponent, IgxTimePickerComponent, IgxDateRangePickerComponent now accepts ISO 8601 string format. This means that `value` type could be `Date` or `string`.
* The `inputFormat` property of IgxDateTimeDirective, IgxDatePickerComponent, IgxTimePickerComponent, IgxDateRangePickerComponent now doesn't accept `y` for the year part. You should update it to `yy`.

## From 10.2.x to 11.0.x
* IgxGrid, IgxTreeGrid, IgxHierarchicalGrid
    * The way the toolbar is instantiated in the grid has changed. It is now a separate component projected in the grid tree. Thus the `showToolbar` property is removed from
    all grids and all other properties related to the toolbar in the grid are deprecated.
    It is recommended to follow the recommended way for enabling
    toolbar features as described in the [Toolbar topic](../grid/toolbar.md).
    * The `igxToolbarCustomContent` directive is removed. While the migration will move
    your template content inside the toolbar content, it does not try to resolve template bindings. Make sure to check your template files after the migration.
    * The API for the toolbar component was changed during the refactor and many of the old properties are now removed. Unfortunately, having
    an adequate migration for these changes is complicated to say the least, so any errors should be handled at project level.

## From 10.0.x to 10.1.x
* IgxGrid, IgxTreeGrid, IgxHierarchicalGrid
    * Since we have removed the `IgxExcelStyleSortingTemplateDirective`, `IgxExcelStyleHidingTemplateDirective`, `IgxExcelStyleMovingTemplateDirective`, `IgxExcelStylePinningTemplateDirective`, and `IgxExcelStyleSelectingTemplateDirective` directives used for templating some parts of the Excel style filter menu, you could use the newly added directives for templating the column and filter operations areas - `IgxExcelStyleColumnOperationsTemplateDirective` and `IgxExcelStyleFilterOperationsTemplateDirective`. We have also exposed all internal components of the Excel style filter menu so that they can be used inside custom templates. You can find more information about the new template directives in the [Excel-Style Filtering Topic](../grid/excel-style-filtering.md#templates).
* IgxGrid
    * The `selectedRows()` method has been refactored into an input property named. This breaking change allows users to easily change the grid's selection state at runtime. Pre-selection of rows is also supported. All instances where the `selectedRows()` method is called have to be rewritten without any parentheses.
    * Binding to the `selectedRows` input property could look something like this:
    ```typescript
    public mySelectedRows = [0, 1, 2];
    ```
    ```html
    <igx-grid [data]="myData" rowSelection="multiple"
        primaryKey="ID" [selectedRows]="mySelectedRows">
        <!-- ... -->
    </igx-grid>
    ```

## From 9.0.x to 10.0.x
* IgxDropdown
    * The display property of the dropdown item has been changed from `flex` to `block`. We have done this in order to have truncated text enabled by default. Due to that change, if there is more than text in the content of the dropdown item, the layout needs to be handled on the application level.

    * The following example demonstrates how to style a dropdown item with an icon and text content so that they are vertically aligned.

    ```html
    <igx-drop-down-item>
        <div class="my-styles">
            <igx-icon>alarm</igx-icon>
            <span>item text</span>
        </div>
    </igx-drop-down-item>
    ```
    ```scss
    .my-styles {
        display: flex;
        align-items: center;

        span {
          margin-left: 8px;
        }
    }
    ```

## From 8.x.x to 9.0.x
Due to a breaking change in Angular 9 Hammer providers are no longer implicitly added
[please, refer to the following document for details:](https://github.com/angular/angular/blob/master/CHANGELOG.md#breaking-changes-9 ) Because of this the following components require `HammerModule` to be imported in the root module of the application in order for **touch** interactions to work as expected:

* igxGrid
* igxHierarchicalGrid
* igxTreeGrid
* igxList
* igxNavigationDrawer
* igxTimePicker
* igxDatePicker
* igxMonthPicker
* *igxSlider**
* igxCalendar
* igxCarousel

> **\* Note** - igxSlider requires the HammerModule for ***all*** user interactions.

You can use the following code snippet to update your app's root module file.

```typescript
import { HammerModule } from "@angular/platform-browser";

@NgModule({
    ...
    imports: [
        ...
        HammerModule
    ]
})
```

Due to name changes made in some of the `Enumerations` we export, manual update is needed for their members. Here's a list of all changes made that require manual update:

* AvatarType.`DEFAULT` -> IgxAvatarType.`CUSTOM`
* Type.`DEFAULT` -> IgxBadgeType.`PRIMARY`
* IgxCardType.`DEFAULT` -> IgxCardType.`ELEVATED`
* IgxCardActionsLayout.`DEFAULT` -> IgxCardActionsLayout.`START`
* IgxDividerType.`DEFAULT` -> IgxDividerType.`SOLID`
* IgxProgressType.`DANGER` -> IgxProgressType.`ERROR`

The `ng update` process will update all enumeration names, like `AvatarType`, `Type`, et al. to `IgxAvatarType` and `IgxBadgeType`, respectively. All other enumeration member names remain unchanged.

## From 8.1.x to 8.2.x

* IgxDrag
    * Since `hideBaseOnDrag` and `visible` inputs are being deprecated, in order to achieve the same functionality in your application, you can use any way of hiding the base element that Angular provides. One example is setting the `visibility` style to `hidden`, since it will only make in invisible and keep its space that it takes in the DOM:

        ```html
        <div igxDrag [ngStyle]="{ 'visibility': targetDragged ? 'hidden' : 'visible' }"
            (dragStart)="onDragStarted($event)" (dragEnd)="onDragEnded($event)">
            Drag me!
        </div>
        ```

        ```typescript
        public targetDragged = false;

        public onDragStarted(event) {
            this.targetDragged = true;
        }

        public onDragEnded(event) {
            this.targetDragged = false;
        }
        ```

    * Since `animateOnRelease` and `dropFinished()` are also being deprecated, any `dropFinished()` method usage should be replaced with `transitionToOrigin()`. Otherwise you would need to call `transitionToOrigin()` depending on when you would want the dragged element to transition back to its original location. Note that  if the dragged element DOM position is changed, then its original location will also change based on that.

* IgxDrop
    * Due to the default drop strategy provided with the `IxgDrop` directive is no longer applied by default, in order to continue having the same behavior, you need to set the new input `dropStrategy` to be the provided `IgxAppendDropStrategy` implementation.

        ```html
        <div igxDrop [dropStrategy]="appendStrategy"></div>
        ```
        ```typescript
        import { IgxAppendDropStrategy } from 'igniteui-angular';

        public appendStrategy = IgxAppendDropStrategy;
        ```
    * Any use of interfaces `IgxDropEnterEventArgs` and `IgxDropLeaveEventArgs` should be replaced with `IDragBaseEventArgs`.
    * Also any use of the  `IgxDropEventArgs` interface should be replaced with `IDropDroppedEventArgs`.

* IgxRowDragDirective
    * `IRowDragStartEventArgs` and `IRowDragEndEventArgs` have argument's name changed in order to be more clear to what it relates to. `owner` argument is renamed to `dragDirective`.
    The `owner` argument now provides a reference to the owner component. If your code was like:
        ```typescript
        public dragStart(event) {
            const directive = event.owner;
        }
        ```
        From version 8.2.x it should be updated to:
        ```typescript
        public dragStart(event) {
            const directive = event.dragDirective;
            const grid = event.owner;
        }
        ```

* IgxCombo
    * The way that the [`igx-combo`](../combo.md) handles selection and data binding is changed.

    - If the combo's [`valueKey`] input is defined, the control will look for that specific property in the passed array of data items when performing selection.
    **All** selection events are handled with the value of the data items' `valueKey` property.
    All combos that have `valueKey` specified should have their selection/two-way binding consist only of the values for the object property specified in the input:
    ```html
    <igx-combo [data]="cities" valueKey="id" displayKey="name"></igx-combo>
    ```
    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with the data entries' id properties
            this.combo.selectItems(['UK01', 'BG01']);
        }
    }
    ```

    - If the combo **does not** have a `valueKey` defined, **all** selection events are handled with **equality (===)**.
    All combos that **do not** have a `valueKey` specified should have their selection/two-way binding handled with **references** to their data items:
    ```html
    <igx-combo [data]="cities" displayKey="name"></igx-combo>
    ```
    ```typescript
    export class MyExampleCombo {
        public data: { name: string, id: string }[] = [{ name: 'London', id: 'UK01' }, { name: 'Sofia', id: 'BG01' }, ...];
        ...
        selectFavorites() {
            // Selection is handled with references to the data entries
            this.combo.selectItems([this.data[0], this.data[1]]);
        }
    }
    ```

    You can read more about setting up the combo in the [readme](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/combo/README.md#value-binding) and in the [official documentation](../combo.md#selection-api).

## From 8.0.x to 8.1.x
* The `igx-paginator` component is introduced as a standalone component and is also used in the Grid components.
Keep in mind that if you have set the `paginationTemplate`, you may have to modify your CSS to display the pagination correctly. This is due to the fact that the template is no longer applied under a paging-specific container with CSS rules to center content, so you might need to add them manually.
The style should be something similar to:

```html
<igx-grid #grid [data]="data" [paging]="true" [perPage]="10" [paginationTemplate]="pager">
</igx-grid>
<ng-template #pager>
    <div class="pagination-container"></div>
</ng-template>
```

```css
.pagination-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
```

## From 7.3.x to 8.0.x
* While updating, if you face the following error `Package "@angular/compiler-cli" has an incompatible peer dependency to "typescript" (requires ">=3.1.1 <3.3", would install "3.4.5").`, you should update `@angular/core` package first. This is related to this known [Angular CLI issue](https://github.com/angular/angular-cli/issues/13095)
* While updating the `igniteui-angular` package, if you see the following error `Package "igniteui-angular" has an incompatible peer dependency to "web-animations-js" (requires "^2.3.1", would install "2.3.2-pr208")`, you should update using `ng update igniteui-angular --force`. This could happen if you update `@angular/core` and `@angular/cli` before updating `igniteui-angular`.

## From 7.2.x or 7.3.x to 7.3.4
* If you use the `filterGlobal` method of `IgxGrid`, `IgxTreeGrid` or `IgxHierarchicalGrid`, you should know that the `condition` parameter is no longer optional. When the `filterGlobal` method is called with an invalid condition, it will not clear the existing filters for all columns.

## From 7.1.x to 7.2.x
* If you use an IgxCombo with `combo.value`, you should know that now `combo.value` is only a getter.
* If you use `IgxTextHighlightDirective`, you should know that the `page` input property is deprecated. `rowIndex`, `columnIndex` and `page` properties of the `IActiveHighlightInfo` interface are also deprecated. Instead, `row` and `column` optional properties are added.
* If you use the `igx-button-theme`, you should know that the `$button-roundness` has been replaced for each button type with: `$flat-border-radius`, `$raised-border-radius`, `$outline-border-radius`, `$fab-border-radius`,  `$icon-border-radius`.

## From 7.0.x to 7.1.x
 * If you use an IgxGrid with summaries in your application, you should know that now the `IgxSummaryOperand.operate()` method is called with empty data in order to calculate the necessary height for the summary row. For custom summary operands, the method should always return an array of IgxSummaryResult with proper length.

	Before version 7.1:
```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
	public operate(data?: any[]): IgxSummaryResult[] {
		return [{
			key: 'average',
			label: 'average',
			summaryResult: IgxNumberSummaryOperand.average(data).toFixed(2)
		}];
	}
}
```

	Since version 7.1:
```typescript
export class CustomSummary extends IgxNumberSummaryOperand {
	public operate(data?: any[]): IgxSummaryResult[] {
		return [{
			key: 'average',
			label: 'average',
			summaryResult: data.length ?  IgxNumberSummaryOperand.average(data).toFixed(2) : null
		}];
	}
}
```

## From 6.0.x to 6.1.x

* If you use an IgxCombo control in your application and you have set the `itemsMaxWidth` option, you should change this option to `itemsWidth`
