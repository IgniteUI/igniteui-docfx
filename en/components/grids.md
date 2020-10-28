---
title: Angular Data Grids | DataTable | Ignite UI for Angular | Infragistics
_description: Find powerful grid features for no-lag scrolling through millions of data points. Ignite UI for Angular’s Data Grid is built for optimization and speed.
_keywords: Angular data grid, infragistics, infragistics.com
---

<style>

.affix{
  margin-top: 0;
}

.theme-widget-wrapper{
    display: none;
}

.h3, h3{
    font-weight: bold;
}

.cta-area{
    text-align: center;
    background-color: #f8f8f8;
    padding: 2rem;
}

ul#features-list{
    margin: 0 auto;
    column-gap: 12%;
    columns: 2
}

ul#features-list li{
    margin-bottom: 15px;
}

.feature{
    padding: 15px 0;
}

.feature__details p{
    margin: 0;
    margin-top: 1rem;
}

div#list-features-included{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

div#list-features-included{
    columns: 3;
    column-gap: 10%;
}

div#support-section-wrapper{
    display: flex;
}

div.support-section{
    padding: 1.25rem;
    text-align: left;
}

h2#frequently-asked-questions{
    padding: .2rem 0 .5rem 1.1rem;
    margin-top: 1.5rem;
    border: 1px solid #ccc;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
}

div#faqs-accordion-wrapper {
    display: flex;
    flex-flow: column;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
}

.faqs-accordion {
  display: inline-flex;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
}

.faqs-accordion-panel {
  padding: 0 18px;
  background: transparent;
  max-height: 0;
  overflow: hidden;
  margin-bottom: 5px;
  transition: max-height 0.2s ease-out;
}

.faqs-accordion-panel ul{
  margin-bottom: 15px;
}

.faqs-accordion:before {
    font-family: Material Icons;
    content: "keyboard_arrow_down";
    font-size: 25px;
    width: 30px;
    height: 25px;
}

.faqs-accordion.active:before {
    font-family: Material Icons;
    content: "keyboard_arrow_up";
    font-size: 25px;
    width: 30px;
    height: 25px;
}

.faqs-accordion-content{
    border-bottom: 1px solid #ccc;
    padding: 0 .9rem;
}

.faqs-accordion-content:last-child{
    border-top: none;
}

.faqs-accordion-content:last-child{
    border-bottom: none;
}

h3#quick-and-easy-to-customize-build-and-implement{
    text-align: center;
}

h3#angular-grid-paging-sorting-filtering--searching, h3#angular-grid-paging-sorting-filtering--searching ~ h3{
    visibility: hidden;
}

h3#excel-library-for-the-angular-grid ~ h3{
    visibility: visible;
}

@media only screen and (max-width: 767px){

    div#list-features-included {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-flow: column;
        align-items: center;
        display: flex;
    }

    div#list-features-included ul {
        margin-left: auto;
        width: 70%;
        margin-right: auto;
    }
    
    div.support-section:last-child:last-child{
        border-left: none;
    }

    div#support-section-wrapper{
        flex-flow: column;
    }

    div.support-section:last-child{
        padding-left: 1.25rem;
    }
}

</style>

<div >
    <img class="b-lazy b-loaded" style="margin: 0 auto; max-width: 175px;" title="Ignite UI logo" src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg" alt="Ignite UI Logo for developer web applications">
</div>

# The Fastest Angular Data Grid

Ignite UI for Angular provides a complete library of Angular-native, Material-based UI components, including the world’s fastest virtualized Angular data grid.

## Angular Grid Example

<div class="divider--half"></div>

<div class="sample-container loading" style="height: 435px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:demosBaseUrl}/grids/data-grid-binding-live-data" onload="onSampleIframeContentLoaded(this);">
    </iframe>
</div>

## What is a Angular Data Grid?

An Angular data grid is a component used to display tabular data in a series of rows and columns. Data grids, also known as tables, are well known in the desktop world with popular software such as Microsoft Excel. While grids have been available on desktop platforms for a long time, they have recently become part of web app UIs, such as Angular UI. Modern grids can be complex and may include a range of functionalities, including data binding, editing, Excel-like filtering, custom sorting, grouping, row reordering, row and column freezing, row aggregation, and exporting to Excel, CSV, and pdf formats.

## Why Use a Angular Data Grid?

Angular data grids are essential in use cases where lots of data must be stored and sorted through quickly. This can include industries such as financial or insurance that use high-volume, high-velocity data frequently.  Often the success of these companies is dependent on the functionality and performance of these data grids. When stock decisions need to be made in microseconds, for example, it’s imperative that the data grid performs with no lag time or flicker.

## Key features

<div class="divider--half"></div>

The Ignite UI for Angular Data Grid is not just for high-volume and real-time data. It is a feature-rich Angular grid that gives you capabilities that you would never be able to accomplish with so little code on your own.
This example demonstrates a few of the data grid’s key features:

<div class="divider--half"></div>

<ul id="features-list">
<li>[Virtualized Rows and Columns](data-grid-live-data.md) so you can load millions of records</li>

<li>[Inline Editing](data-grid-cell-editing.md) with Cell, Row, and Batch Update options</li>

<li>[Excel-style Filtering](data-grid-column-filtering.md) and full [Excel Keyboard Navigation](data-grid-cell-activation.md) capability</li>

<li>Interactive [Outlook-style Grouping](data-grid-row-grouping.md)</li>

<li>[Column Summaries](data-grid-column-summaries.md) based on any data in a grid cell or column</li>

<li>Export to Excel, including [Data Visualization](excel_library_working_with_charts.md)</li>

<li>[Cell and Row Selection](data-grid-cell-selection.md) for Single and Multi-Select</li>

<li>Full touch support for mobile app development</li>
</ul>

<div class="divider"></div>
<!-- <div class="divider"></div> -->

<!-- <img class="b-lazy b-lazy-gifs vmar--xl width--full b-loaded responsive-img" style="width: 100%" title="Scrolling Ignite UI for Angular Data Grid component" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-virtualization-performance-1100.gif?v=201808021304" alt="Scrolling Ignite UI for Angular Data Grid component showing off its performance and data visualization capbilities"> -->

<!-- <div class="divider--half"></div> -->

### Data Virtualization and Performance

<div class="divider--half"></div>

Seamlessly scroll through unlimited rows and columns in your Angular grid, with the data grid’s column and row level virtualization. With support for local or remote data sources, you get the best performance no matter where your data lives. Your users will experience Excel-like scrolling, with enterprise speed — no lag, screen flicker, or visual delay — giving you the best user experience (UX) without compromising performance.

<div class="divider--half"></div>
<hr style="border: .5px solid #ccc;">
<div  class="cta-area">
    <h4 class="h2" style="text-align: center; font-weight: 700; margin-top: 0;" >Quick and Easy to Customize, Build and Implement</h4>
    <div style="text-align:center">
    <p>The Ignite UI for Angular Data Grid can handle unlimited rows and columns of data, while providing access to custom templates and real-time data updates. Featuring an intuitive API for easy theming and branding, you can quickly bind to data with minimal code.</p>
    <div class="divider--half"></div>
        <div style="text-align:center">
            <a class="cta-btn no-external-icon ui-btn--sm" href="grid/grid.md">view samples</a>
        </div>
    </div>
    </div>
</div>
<hr style="border: .5px solid #ccc;">
<div class="divider"></div>

<!-- ### Angular Grid Cell and Row Selection -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of cell selection capabilities within Angular Data Grid" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-react-table-cell-row-selection-480.gif?v=201811121733" alt="Animation of cell selection capabilities within Angular Data Grid"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Cell and Row Selection<a class="anchorjs-link" href="data-grid-column-filtering.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid includes every option for mouse and touch-driven selection by cell and row level, including modes like SingleCell, SingleRow, MultipleCell, MultipleRow, RangeCell and more.</p>
    </div>
</div>

<!-- ### Angular Grid Filtering -->

<div class="feature">
    <div class="feature__image feature__image--right">
        <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of filtering capabilities within Angular Data Grid" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-react-table-grid-filtering-480.jpg?v=201808021304" alt="Animation of filtering capabilities within Angular Data Grid">
    </div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Filtering<a class="anchorjs-link" href="data-grid-cell-editing.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid includes column filtering based on the data type of the column being filtered. For example, if your column is a DateTime field you can use filters like Last Month, This Quarter, Next Week, etc.</p>
    </div>
</div>

<!-- ### Angular Grid Column Moving -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of column moving functionality" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-moving-480.gif?v=201808021304" alt="Animation of column moving functionality within Angular Data Grid"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Moving<a class="anchorjs-link" href="data-grid-column-moving.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>Rearranging column order is as easy as Click and Drag in the Angular Data Grid. We’ve also included a complete animation engine, giving you control over the UX of this interaction.</p>
    </div>
</div>

<!-- ### Angular Grid Column Pinning -->

<div class="feature">
    <div class="feature__image feature__image--right">
<img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of column pinning functionality" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-pinning-1100.jpg?v=201808021304" alt="Animation of column pinning functionality within the Angular Data Grid"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Pinning<a class="anchorjs-link" href="data-grid-column-pinning.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>With Right and Left column pinning in the Angular Data Grid, users can lock a single column or multiple columns in any order, so that the column maintains position, while scrolling horizontally.</p>
    </div>
</div>

<!-- ### Angular Grid Column Resizing -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Grid of data with column resizing features enabled" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-resizing-480.gif?v=201808021304" alt="Grid of data with column resizing features enabled for Angular Data Grid component"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Resizing<a class="anchorjs-link" href="data-grid-column-resizing.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports the ability to resize columns, giving your customers flexibility over how they display the Data Grid columns, with respect to the other columns in the table.</p>
    </div>
</div>

<!-- ### Angular Grid Column Sorting -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Grid of data with column sorting features enabled" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-sorting-480.gif?v=201808021304" alt="Grid of data with column sorting features enabled on the Angular Data Grid component"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Sorting<a class="anchorjs-link" href="data-grid-column-sorting.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports ascending and descending column sorting with a Single, Multi or Tri-State Column Sorting configuration. Sorting is triggered on header click or using the Column Options dropdown.</p>
    </div>
</div>

<!-- ### Angular Grid Column Summaries -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of column summary functionality" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-summaries-480.jpg?v=201808021304" alt="Animation of column summary functionality of the Angular Data Grid"></div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Summaries<a class="anchorjs-link" href="data-grid-column-summaries.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports column summaries in the footer area of the Data Grid, or in the Group Headers. This is great for showing values like Count, Sum, Min, Max, Avg, etc.</p>
    </div>
</div>

<!-- ### Angular Grid Column Types -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Icon representation of column type features" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-types-480.jpg?v=201808021304" alt="Icon representation of column type features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Types<a class="anchorjs-link" href="data-grid-column-types.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports a variety of column types, plus a Template Column type and a Sparkline Template type, giving you complete flexibility over the way your data is displayed in the Grid.</p>
    </div>
</div>
<div class="divider--half"></div>

<!-- ### Angular Grid Column Animations -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Animation of column animation functionality" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-animations-480.gif?v=201808021304" alt="Animation of column animation functionality features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Animations<a class="anchorjs-link" href="data-grid-column-animation.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports Column Animation during events like Column Hiding or Column Moving. When Column Animation on the Angular Data Grid is set, the corresponding animation will fire for all of the cells in that column.</p>
    </div>
</div>
<div class="divider--half"></div>

<!-- ### Angular Grid Column Options Dialog -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Animation of column options dialog features" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-column-options-dialog-480.jpg?v=201808021304" alt="Animation of column options dialog features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column Options Dialog<a class="anchorjs-link" href="data-grid-column-options.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports the ability to group, hide, move, pin, filter, and sort columns directly from a UI exposed on each column header. The Column Options are on by default for every column, via the Kebab menu on column hover.</p>
    </div>
</div>
<div class="divider--half"></div>

<!-- ### Angular Grid Column and Row Outlook Style Grouping -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Animation of outlook style grouping features" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-outlook-style-grouping-row-column-grouping-480.gif?v=201808021304" alt="Animation of outlook style grouping features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Column and Row Outlook Style Grouping<a class="anchorjs-link" href="data-grid-row-grouping.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid lets you group rows into a ‘sticky header’ Row Group. Like the Group By feature in Microsoft Outlook, your users have an easy way to visually group data based on their own criteria.</p>
    </div>
</div>
<div class="divider--half"></div>

<!-- ### Angular Grid Paging -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Animation of data grid paging features" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-paging-480.jpg?v=201808021304" alt="Animation of data grid paging features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Paging<a class="anchorjs-link" href="data-grid-row-paging.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid Paging component is designed to take in an array of data and output portions of that data as a page, with a simple navigation UI.</p>
    </div>
</div>
<div class="divider--half"></div>

<!-- ### Angular Grid Row Pinning -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Animation of data grid row pinning features" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-outlook-style-grouping-row-column-grouping-480.gif?v=201808021304" alt="Animation of data grid row pinning features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Row Pinning<a class="anchorjs-link" href="data-grid-row-pinning.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid allows you to pin rows to the top of the Data Grid. When a row is pinned, it will be duplicated at the top of the Data Grid and remain fixed there with a light gray background and its actual (or original) row in the Data Grid will be rendered with low opacity, making it clear to the user this is a special row.</p>
    </div>
</div>
<div class="divider--half"></div>

<!-- ### Angular Grid Keyboard Navigation -->

<div class="feature">
    <div class="feature__image feature__image--right"><img class="b-lazy b-loaded responsive-img" title="Animation of data grid keyboard navigation features" src="https://static.infragistics.com/marketing/ignite-ui-react/ignite-ui-react-data-grid-keyboard-navigation-480.gif?v=201808021304" alt="Animation of data grid keyboard navigation features on the Angular Data Grid">
</div>
    <div class="feature__details">
        <span class="h3 features__heading">Angular Grid Keyboard Navigation<a class="anchorjs-link" href="data-grid-cell-activation.md" aria-label="Anchor" data-anchorjs-icon="" style="padding-left: 0.375em;"></a></span>
        <p>The Angular Data Grid supports extensive Excel-like keyboard navigation. Ensure accessibility compliance and improve usability, enabling Excel-like keyboard navigation in the Angular Data Grid, using the up, down, right, left, tab, and Enter keys. You can toggle single or multiple row selection using the mouse or keyboard to select or de-select full rows.</p>
    </div>
</div>
<div class="divider--half"></div>

## Angular Grid Features

<div class="divider"></div>
<div id="list-features-included">
<ul>
    <li>[Cell Editing](data-grid-cell-editing.md)</li>
    <li>[Column Filtering](data-grid-column-filtering.md)</li>
    <li>[Grid Sorting](data-grid-column-sorting.md)</li>
    <li>[Row Grouping](data-grid-row-grouping.md)</li>
    <li>[Column Summaries](data-grid-column-summaries.md)</li>
    <li>[Fixed/Pinned Columns](data-grid-column-pinning.md)</li>
    <li>[Resizable Columns](data-grid-column-resizing.md)</li>
    <li>[Column Hiding](data-grid-column-resizing.md)</li>
</ul>
<ul>
    <li>[Column Moving](data-grid-column-moving.md)</li>
    <li>[Real-time/Live Data](data-grid-live-data.md)</li>
    <li>[Custom Grid Toolbar](data-grid-column-chooser.md#toolbars-column-chooser-ui)</li>
    <li>[Grid Paging](data-grid-row-paging.md)</li>
    <li>[Row Selection](data-grid-cell-selection.md)</li>
    <li>[Cell Selection](data-grid-cell-selection.md)</li>
    <li>[Virtualization and Performance](data-grid-performance.md)</li>
    <li>[Remote Data Load on Demand](data-grid-remote-data.md)</li>
    <li>[Cell Templates](data-grid-column-types.md#template-column)</li>
</ul>
<!-- <ul>
    <li>[Cell Copy and Paste](grid/clipboard-interactions.md)</li>
    <li>[Cell Styling](grid/conditional-cell-styling.md)</li>
    <li>[Grid-level Searching](grid/search.md)</li>
    <li>[Export to Excel, CSV, TSV](exporter-excel.md)</li>
    <li>[Multi-Column Headers](grid/multi-column-headers.md)</li>
    <li>[Combo Box/Dropdown](combo.md)</li>
    <li>[ARIA/a11y Support](general/accessibility-compliance.md)</li>
</ul> -->
</div>

<div class="divider"></div>

<hr>

<div class="cta-area">
    <h4 class="h2" style="font-weight: 700; margin-top: 0;">Download the Fastest Angular Grid Today!</h4>
    <div class="divider--half"></div>
    <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/products/ignite-ui-Angular/download">download now</a>
    <br>
    30 days free trial. No credit card required.
    <div class="divider"></div>
</div>

<hr>

<div class="divider"></div>
<div id="support-section-wrapper">
    <div class="support-section">
    <div >
        <h2>Ignite UI for Angular Supported Browsers</h2>
    </div>
<div class="divider--half"></div>
   The Angular Data Grid is supported on all modern web browsers, including:
<div class="divider--half"></div>
        <ul>
            <li>Chrome</li>
            <li>Edge / Edge Chromium</li>
            <li>Firefox</li>
            <li>Safari</li>
            <li>Internet Explorer 11 with polyfills</li>
        </ul>
    </div>
    <div class="support-section" style="padding-left: 4rem;">
    <div >
            <h2>Ignite UI for Angular Support Options</h2>
    </div>
<div class="divider--half"></div>
There are multiple options to get access to our award-winning support at Infragistics for the Angular product.
<div class="divider--half"></div>
        <ul>
            <li>Start at the Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/support/ignite-ui-Angular-help">Support</a> home page</li>
            <li>Read the Angular [Documentation](general/getting-started.md) and experiment with Angular Samples</li>
            <li>Read the<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/community/blogs/tags/Ignite UI for Angular"> Angular Blogs</a> to stay up to date</li>
            <li>Submit a <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui-Angular/grid-table"> Support Case</a></li>
            <li>Learn from the Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">Reference Applications</a></li>
        </ul>
    </div>
</div>

<div class="divider--half"></div>

## Ignite UI for Angular Trial License and Commercial

<div class="divider--half"></div>
<p>Ignite UI for Angular is a commercially licensed product available via a subscription model. You can try the Ignite UI for Angular product for free when you <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/free-downloads">register for a 30-day trial</a>. When you are done with your Trial Period, you can <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/how-to-buy/product-pricing">purchase a license </a> from our web site or by calling <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/about-us/contact-us">sales in your region</a>.</p>
<hr>
<div class="divider--half"></div>

## Frequently Asked Questions

<div id="faqs-accordion-wrapper">
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Why should I choose the Infragistics Ignite UI for Angular Data Grid?</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
            <ul>
                <li>[Virtualized Rows and Columns](grid/virtualization.md) so you can load millions of records</li>
                <li>[Inline Editing](grid/row-editing.md) with Cell, Row, and [Batch](grid/batch-editing.md) Update options</li>
                <li>[Excel-style Filtering](grid/excel-style-filtering.md) and full [Excel Keyboard Navigation](grid/keyboard-navigation.md) capability</li>
                <li>Interactive [Outlook-style Grouping](grid/groupby.md)</li>
                <li>[Column Summaries](grid/summaries.md) based on any data in a grid cell or column</li>
                <li>[Export to Excel](grid/export-excel.md), including [Data Visualization](excel_library_working_with_charts.md)</li>
                <li>[Display Density](grid/display-density.md) to adjust the height and sizing of the rows</li>
                <li>Column templates like [Sparkline Column](sparkline.md) and Image Column</li>
            </ul>
        </div>
    </div>
    <div class="faqs-accordion-content">
    <div class="faqs-accordion h4">What is the Pricing for the Infragistics Ignite UI for Angular Data Grid?</div>
    <div class="divider--half"></div>
    <div class="faqs-accordion-panel">
Ignite UI for Angular is a commercially licensed product available via a subscription model. A single developer license starts at $749 USD for a one-year subscription, which includes one year of standard support and product updates. This subscription includes the Angular Grid, plus Angular Charts and dozens on other Angular UI Controls.
<div class="divider--half"></div>
We also offer discounts for multi-year licenses. Please <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/how-to-buy/product-pricing">refer to our Pricing page</a> for more information on pricing.
<div class="divider--half"></div>
If you are developing applications on multiple platforms, consider our complete app development package, Infragistics Ultimate, which include desktop platforms like WPF and Windows Forms, plus all modern web toolsets for Angular, React, Web Components, ASP.NET MVC and ASP.NET Core.
    </div>
    </div>
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Can I purchase the Infragistics Ignite UI for Angular Data Grid control separately?</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
        No, you cannot purchase the Angular Data Grid separately. It is part of a the <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui-Angular">Ignite UI for Angular product</a>, which includes dozens of UI controls and components, plus over 60 charts, including Angular Financial Charting. If you are interested in other modern web platforms like Angular, React, ASP.NET MVC, Web Components or ASP.NET Blazor, check out our <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui">Ignite UI product bundle</a>, which gives you every web platform for only $100 more on your subscription. That is hundreds of controls, components, and data visualizations for a very low price.
        </div>
    </div>
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Can I purchase the Infragistics Ignite UI for Angular Data Grid control separately?</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
        To get started with the Angular Data Grid, follow the steps in the [getting started guide](general/getting-started.md). We also maintain a library of <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">sample applications</a>, which are designed to not only inspire but are best practices guides for Angular development.
        </div>
    </div>
</div>

<script>
    (function(){
        var acc = document.getElementsByClassName("faqs-accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
        }
    })()
</script>
