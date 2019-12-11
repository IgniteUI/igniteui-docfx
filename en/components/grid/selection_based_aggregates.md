### Selection-based Aggregates

With the sample, illustrated beyond, you may see how multiple selections are being used, alongside with custom summary functions, to achieve the desired functionality.

#### Overview

To achieve the selection-based aggregation functionality, you might use our [`Grid Selection`]({environment:angularApiUrl}/components/grid/selection.html) feature, accompanied with the [`Grid Summaries`]({environment:angularApiUrl}/components/grid/summaries.html).    
The Summaries are allowing the customization of the basic Summary feature functionality through extending one of the base classess, [`IgxSummaryOperand`]({environment:angularApiUrl}/classes/igxsummaryoperand.html), [`IgxNumberSummaryOperand`]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html) or [`IgxDateSummaryOperand`]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html), according to the column data type and your needs.    
On the other hand, the Grid Summaries are offering multiple functions that provide rich information about the selected data parts of the grid. Having all this in mind, you're ready to dive in to a better acquaintance of the great potential, offered by using our features.

#### Selection
To start working with the data in the selected range in the grid, you will have to bind yourself to events that are acknowledging a change in the selection. That can be done by binding to the [`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrangeselection) event, alongside to the [`onRangeSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection) one. You might need to bind to both of them because the Selection feature makes a difference between selecting a single cell and selecting a range of cells.     

After that, you can pass the selected data to the custom summary, using the grid's [`getSelectedData`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrangeselection) function. Using it, you might be assured, that even data, that's selected out of the visible grid range, would be included in the summary.


#### Summary
Within the custom summary class, you'd have to be differentiating the different types of data in the grid. For instance, in the scenario below, you can spot four different columns, that are worth getting summarized. These are the Unit Price, the Units in Stock, Discontinued status and the Order Date.   
The `operate` method of the inheritor class of the `IgxSummaryOperand`, is the place, where you will like to process the data, starting by distinguishing it in different categories based on the data types:

```typescript
const numberData = data.filter(rec => typeof rec === "number");
const boolData = data.filter(rec => typeof rec === "boolean");
const dates = data.filter(rec => isDate(rec));
```   

> [!NOTE]
> Bear in mind, that `isDate` is a custom function.     

After having the datatypes grouped accordingly, you can proceed to the aggregation itself. For that reason, you could use the exposed useful methods of the `IgxNumberSummaryOperand` and `IgxDateSummaryOperand`. 
After that, you'd have to gather the aggregated data to the same array, which would be returned to the template.  
For the visualization of the data, you might use the `<igx-grid-footer>`, which in a combination with the `custom-summaries` class will give the natural look of the Summary.


#### Demo
Change the selection to see summaries of the currently selected range.   

<div class="sample-container loading" style="height: 560px;">
    <iframe id="grid-selection-custom-summaries" data-src='{environment:demosBaseUrl}/grid/grid-selection-custom-summaries' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-custom-summaries" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### API References

* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)    
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)    
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)     

### Additional Resources
<div class="divider--half"></div>    

* [Grid overview](grid.md)    
* [Selection Service]({environment:angularApiUrl}/classes/igxgridselectionservice.html)
* [Row Selection](row_selection.md)   
* [Cell Selection](cell_selection.md)    
* [IgxNumberSummaryOperand]({environment:angularApiUrl}/classes/igxnumbersummaryoperand.html)
* [IgxDateSummaryOperand]({environment:angularApiUrl}/classes/igxdatesummaryoperand.html)
* [Summaries](summaries.md)    
* [Paging](paging.md)    

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.    

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)    
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)     
