@@if (igxName === 'IgxGrid') {
---
title:  Angular Grid Sizing | Ignite UI for Angular | infragistics 
_description: Learn how to correctly size your UI Grid Angular component depending on your goals by using the width and height options.
_keywords: sizing, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title:  Angular Tree Grid Sizing | Ignite UI for Angular | infragistics 
_description: Learn how to correctly size your UI Grid Angular component depending on your goals by using the width and height options.
_keywords: sizing, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title:  Angular Hierarchical Grid Sizing | Ignite UI for Angular | infragistics 
_description: Learn how to correctly size your UI Grid Angular component depending on your goals by using the width and height options.
_keywords:  sizing, igniteui for angular, infragistics
---
}

### Grid sizing

When it comes to [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) sizing there are a few different scenarios that are important to understand. While some are straight forward, others might be more complex and that is why we will take each one and look into them in more detail. We will go through setting `width` and `height` separately since there are some differences when using percentages for example for each one and etc.

### Width

When the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) `width` input is not set the grid sizes accordingly as if it is set to `100%`. You can check how the grid reacts to it in the `Percentage` section.

#### Pixels

When the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) `width` input is set to pixels it will set the whole grid size to that value and it will be static. It will not react to any browser resizing or changes in the DOM. When it comes to the grid content though:

* When the combined width of the columns is less than the visible area of the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) there will be empty space between the last column and the right edge of the grid. For example lets render a grid with width `1200px` and all 6 columns having a width of `150px`. This will lead to empty space of `300px`.

    ![](../../images/grid_sizing/width-cols-empty-space.jpg)

* If at least one column does not have width specified though and it will autosize and fill the remaining space. For example lets have the same grid as above, but with the second pinned column without any width set. 

    ![](../../images/grid_sizing/width-cols-filled-space.jpg)

* If the visible area width is smaller than the combined width of the columns or if a column without width tries to fill an empty area smaller than `136px` a horizontal scrollbar will be rendered. For the scenario of a column without width its minimum auto size width is `136px` and this is the reason a horizontal scrollbar to appear. Lets for example have all columns except the second have width of `300px` which makes them `300px` wider than the grid width. Since there is not enough space to fit the `136px` width of the second column as well horizontal scrollbar will be rendered.

    ![](../../images/grid_sizing/width-cols-scrollbar.jpg)

#### Percentage

When the `width` of the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) is set to percentages it will size the grid according to the parent element's width. If the parent element does not have width specified the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) will size relative to the browser window.

* For example if we set the grid `width` input to `100%` and there is no parent element it will fill 100% of the available width of the browser window. If it is resized the grid will resize as well accordingly.

    ![](../../images/grid_sizing/width-percent-100p.jpg)

* If we set it to `100%` again but there is parent element that has specific width of `1200px` this will mean that the grid will size relative to that element and his final width will be `1200px`.


    ![](../../images/grid_sizing/width-percent-parent-100p.jpg)

* If we set the width to `50%` the grid will fill half of the available space and similarly if we set `150%` it will bet half of the available space bigger and etc. No matter what it is relatively based off of.


### Height

By default if no height is defined for the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html), it will default to `100%`. You can check how the grid reacts to it in the `Percentage` section.

#### Null

The [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) `height` input can accept `null` value, which when set, displays all rows with no scrollbar no matter how many they are. In this case there is no vertical virtualization since the grid renders all rows anyway.

* If we for example have data with 14 rows in this case the grid will render all 14 of them and size the grid so all are visible without any empty space inside the grid.

    ![](../../images/grid_sizing/height-null-14rows.jpg)

* If we have 24 rows instead, the grid will still render all rows but since they are too many and they exceed the browser boundaries the browser itself will render vertical scrollbar by default so the user can scroll down to the rest of the rows.

    ![](../../images/grid_sizing/height-null-24rows.jpg)

**Note:** Due to this behavior if the grid data contains too many rows, it might have significant performance impact to the browser, since all rows would be rendered without virtualization.

#### Pixels

Setting the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) `height` in pixels is more straightforward since the grid will size to that specific size in all occasions similarly to how `width` in pixels is set.

* If we set for example the height `500px` with 4 rows for our data the grid will sit to that size and since 4 rows is not enough to fill the visible area it is expected to have some empty area.

    ![](../../images/grid_sizing/height-500px-4rows.jpg)

* If the number of rows exceed the visible area of the grid when height is set to pixels a vertical scrollbar will be rendered. Foe example a grid with `500px` height set and 14 rows will be rendered the following way:

    ![](../../images/grid_sizing/height-500px-14rows.jpg)

#### Percentage

When the `height` input is set to percentages the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) will size based on the parent element height. If the parent element has height set in pixels or percentages the grid will size relative to the size ot the parent.

* If we set the parent element height to `800px` and the [**@@igxName**]({environment:angularApiUrl}/classes/@@igTypeDoc.html) to `100%` height this means that the grid will be sized to 100 percents of `800px`.

    ![](../../images/grid_sizing/height-percent-100-parent-800px.jpg)

* If we want the grid to be sized to `100%` from the browser window we would need to set the `body` height to `100%` and set to the parent element of the grid also height of `100%`. In this case the parent element can be sized and the grid will size accordingly if the browser is resized.

    ![](../../images/grid_sizing/height-percent-100-parent-100.jpg)

If the parent element does not have defined height, the browser does not assign height to it initially and sizes it based on its children and their size. That is why there is no way for the grid to know what base height to use in order to apply percentage sizing based on it. For this reason it will render maximum of 10 rows and if they are more a vertical scrollbar will be rendered, otherwise the grid will fit to number of rendered rows. We will look in this scenario in more detail in the next examples.

Lets have width set to `1200px` and the parent element not having any size applied to it:

* If there are less than 10 rows the grid will try to fit all rows in the `visible area without having an empty space between the last row and the bottom of the visible area. For example lets have the grid data to consist of 7 rows. The grid will render all 7 rows without vertical scrollbar and empty space inside the grid.

    ![](../../images/grid_sizing/height-undefined-7rows.jpg)


* If there are more than 10 rows a vertical scrollbar will be rendered for the rest of the rows and only 10 rows can be visible at any time. In the next example only the row number is increased to 14.

    ![](../../images/grid_sizing/height-undefined-14rows.jpg)