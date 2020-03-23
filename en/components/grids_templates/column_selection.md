@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes the interaction with the Grid more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes the interaction with the Tree Grid more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Column Selection | Ignite UI for Angular | infragistics
_description: Learn how to configure column selection with the Angular Material table. The column selection makes the interaction with the Hierarchical Grid more appealing than ever.
_keywords: column selection, igniteui for angular, infragistics
---
}

### @@igComponent Column Selection
The **column selection feature** provides an easy way to select an entire column with a one click action. It **emphasizes** the importance of a particular column by focusing on the header cell(s) and everything below. The feature comes with a rich [`API`]({environment:angularApiUrl}) that allows manipulation of the **state**, **data extraction** of the **selected** fractions easing **data analysis** operations and visualizations.

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Basic example demonstrating the feature</p>
</div>
<br/>

### Basic usage

#### Interactions
All of the presented columns are [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) by default. With that being said, in order to select a column, we just need to click over the targeted one to mark it as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected).

> [!NOTE]
> [`Multi Column Headers`](multi_column_headers.md) don't reflect on the [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable) input. The [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html) is [`selectable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selectable), if at least one of it's children has that behaviour enabled. In addition, the component is marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) if all it's descendents are [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected)

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Example showcasing multi column headers + column selection behaviour</p>
</div>
<br/>

#### API manipulations
The **API** provides some additional capabilities when it comes to the **non-visible** columns such that, every **hidden** column could be marked as [`selected`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#selected) by setting the corresponding **setter**.

> [!NOTE]
> The above statement also applies to the [`IgxColumnGroupComponent`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html), except that when the [`selected`]({environment:angularApiUrl}/classes/igxcolumngroupcomponent.html#selected) is changed it respectively changes the state of it's descendants.

<div class="sample-container" style="height:250px; background-color: lightgray">
    <p>Example showcasing API manipulation of multi column headers + column selection</p>
</div>
<br/>

More information regarding the API manipulations could be found in the [`API References`](#api-references) section.

### <a name="api-references"></a> API References
#### API REFS