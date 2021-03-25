---
title: Angular Selection-based Data Aggregation | selection | Ignite UI for Angular | Infragistics 
_description: Learn how to aggregate selected data in a grid with the Ignite Angular Material table using rich API. It also allows instant content aggregations in the virtualized data of the Grid
_keywords: Data aggregation, selection, ignite ui for angular, infragistics
---

# Selection-based Aggregates

With the sample, illustrated beyond, you may see how multiple selection is being used, alongside with custom summary functions, to display aggregates based on the selected values in the grid footer.

## Topic Overview

To achieve the selection-based aggregates functionality, you can use our [`Grid Selection`]({environment:angularApiUrl}/components/grid/selection.html) feature, together with the [`Grid Summaries`]({environment:angularApiUrl}/components/grid/summaries.html).    
The Summaries are allowing for customization of the basic Summary feature functionality through extending one of the base classess, [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html), depending on the column data type and your needs.  

## Selection
To start working with the data in the selected grid range, you will have to subscribe to events that are notifying of changes in the grid selection. That can be done by subscribing to the [`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrangeselection) event and to the [`onRangeSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection) event. You need to bind to both of them because the Selection feature differentiates between selecting a single cell and selecting a range of cells.     

In the events subscription logic, you can extract the selected data using the grid's [`getSelectedData`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrangeselection) function and pass the selected data to the custom summary operand.


## Summary
Within the custom summary class, you'd have to be differentiating the types of data in the grid. For instance, in the scenario below, there are four different columns, whose type of data is suitable for custom summaries. These are the Unit Price, the Units in Stock, Discontinued status and the Order Date.   
The `operate` method of the derived class of the `IgxSummaryOperand`, is where you will process the data, starting by casing it in different categories based on the data types:

```typescript
const numberData = data.filter(rec => typeof rec === "number");
const boolData = data.filter(rec => typeof rec === "boolean");
const dates = data.filter(rec => isDate(rec));
```   

> [!NOTE]
> Bear in mind, that `isDate` is a custom function.     

After having the data types grouped accordingly, you can proceed to the aggregation itself. For that reason, you could use the already exposed methods of the `IgxNumberSummaryOperand` and `IgxDateSummaryOperand`. 
After that, you'd have to put the aggregated data in the same array, which would be returned to the template.  
For the visualization of the data, you might want to use the `<igx-grid-footer>`, which in a combination with the `custom-summaries` class will give the natural look of the Summary.


### Demo
Change the selection to see summaries of the currently selected range.   


<code-view style="height: 560px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-selection-custom-summaries" >
</code-view>


## API References

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)    
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)    
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)     

## Additional Resources
<div class="divider--half"></div>    

* [Grid overview](grid.md)    
* [Selection Service]({environment:angularApiUrl}/classes/igxgridselectionservice.html)
* [Row Selection](row-selection.md)   
* [Cell Selection](cell-selection.md)    
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [Summaries](summaries.md)    
* [Paging](paging.md)    

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.    

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)    
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)     
