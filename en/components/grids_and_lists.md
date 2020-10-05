---
title: Angular Data Grids and Lists Components | DataTable | Ignite UI for Angular | Infragistics
_description: Find powerful grid features for no-lag scrolling through millions of data points. Ignite UI for Angular’s Data Grid is built for optimization and speed.
_keywords: angular data grid, infragistics, infragistics.com
---
<style>

h1#the-fastest-angular-data-grid{
    text-align:center;
}

h2#key-features, h2#faqs{
    visibility: hidden;
}

h3#quick-and-easy-to-customize-build-and-implement, h3#angular-grid-features{
    visibility: hidden;
}

.center-text{
    text-align:center;
}

ul#features-list{
    margin: 0 auto;
    column-gap: 12%;
    columns: 2
}

ul#features-list li{
    margin-bottom: 15px;
}

div#features-gifs{
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
}

div#list-features-included, div.features-gifs--wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

div#features-gifs div.features-gifs--content:last-child {
        border-left: 1px solid #ccc;
}


div#features-gifs div.features-gifs--content{
    text-align: left;
    width: 50%;
    padding: 1rem;
}

div#list-features-included{
    flex: 0 50%;
    align-self: center;
    justify-content: center;
}

div#list-features-included{
    flex: 0 50%;
    align-self: center;
    justify-content: center;
}

@media only screen and (max-width: 767px){
        .features-gifs--wrapper {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
    }

    div#list-features-included {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-flow: column;
        align-items: center;
    }

    div#list-features-included ul {
        margin-left: auto;
        width: 70%;
        margin-right: auto;
    }
    

    div#features-gifs div.features-gifs--content{
        width: 100%;
    }

    div#features-gifs div.features-gifs--content:last-child {
        border-left: none;
    }
    div.support-section:last-child:last-child {
        border-left: none;
    }
    div#support-section-wrapper{
        flex-flow: column;
    }
}

div#features-gifs  div.features-gifs--content img{
    padding: 15px 0;
}

div#support-section-wrapper{
    display: flex;
}

div.support-section{
    padding: 1.25rem;
    text-align: left;
}

div.support-section:last-child{
    border-left: 1px solid #ccc;
}
#faqs-accordion-wrapper {
    display: flex;
    flex-flow: column;
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

.faqs-accordion-content {
    padding: 0 2.5rem;
    border-top: 1px solid;
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


</style>

<div style="text-align:center">
    <img class="b-lazy b-loaded" style="margin: 0 auto; max-width: 175px;" title="Ignite UI logo" src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg" alt="Ignite UI Logo for developer web applications">
</div>

# **The Fastest Angular Data Grid**

<div class="center-text">
Ignite UI for Angular provides a complete library of Angular-native, Material-based UI components, including the world’s fastest virtualized Angular data grid.
</div>

<div class="divider--half"></div>

<div class="center-text">
    <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">download now</a>
</div>

<div class="divider--half"></div>

## Angular Grid Example
<div class="divider--half"></div>

<div class="sample-container loading" style="height: 500px">
    <iframe id="icon-sample-1-iframe" seamless width="100%" height="100%" frameborder="0" src="{environment:lobDemosBaseUrl}/grid-crm" onload="onSampleIframeContentLoaded(this);">
    </iframe>
</div>

<div class="divider"></div>

## What is an Angular Data Grid? 

An Angular data grid is a component used to display tabular data in a series of rows and columns. Data grids, also known as tables, are well known in the desktop world with popular software such as Microsoft Excel. While grids have been available on desktop platforms for a long time, they have recently become part of web app UIs, such as Angular UI. Modern grids can be complex and may include a range of functionalities, including data binding, editing, Excel-like filtering, custom sorting, grouping, row reordering, row and column freezing, row aggregation, and exporting to Excel, CSV, and pdf formats.

## Why Use an Angular Data Grid? 

Angular data grids are essential in use cases where lots of data must be stored and sorted through quickly. This can include industries such as financial or insurance that use high-volume, high-velocity data frequently.  Often the success of these companies is dependent on the functionality and performance of these data grids. When stock decisions need to be made in microseconds, for example, it’s imperative that the data grid performs with no lag time or flicker. 

<div class="divider"></div>

## Key features

<div class="center-text">
    <img class="b-lazy b-loaded" title="Angular Framework logo" style="width: 45px; height: 45px;" role="presentation" src="https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/angular-logo.svg" alt="Angular Framework logo">
</div>

<div class="divider--half"></div>

<div class="center-text">
The Ignite UI for Angular Data Grid is not just for high-volume and real-time data. It is a feature-rich Angular grid that gives you capabilities that you would never be able to accomplish with so little code on your own.
This example demonstrates a few of the data grid’s key features:
</div>

<div class="divider--half"></div>


<ul id="features-list">
<li>[**Virtualized Rows and Columns**](grid/virtualization.md) so you can load millions of records</li>

<li>[**Inline Editing**](grid/row_editing.md) with Cell, Row, and [**Batch**](grid/batch_editing.md) Update options</li>

<li>[**Excel-style Filtering**](grid/excel_style_filtering.md) and full [**Excel Keyboard Navigation**](grid/keyboard_navigation.md) capability</li>

<li>Interactive [**Outlook-style Grouping**](grid/groupby.md)</li>

<li>[**Column Summaries**](grid/summaries.md) based on any data in a grid cell or column</li>

<li>[**Export to Excel**](grid/export_excel.md), including [**Data Visualization**](excel_library_working_with_charts.md)</li>

<li>[**Display Density**](grid/display_density.md) to adjust the height and sizing of the rows</li>

<li>Column templates like [**Sparkline Column**](sparkline.md#demo) and Image Column</li>
</ul>


<div class="divider--half"></div>


<div class="center-text">
<span  class="h2">
    <strong>Data Virtualization and Performance</strong>
</span> 

<div class="divider--half"></div>
<img class="b-lazy b-lazy-gifs vmar--xl width--full b-loaded responsive-img" title="Scrolling Ignite UI for Angular Data Grid component" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-virtualization-performance-1100.gif?v=201808021304" alt="Scrolling Ignite UI for Angular Data Grid component showing off its performance and data visualization capbilities">

<div class="divider--half"></div>

Seamlessly scroll through unlimited rows and columns in your Angular grid, with the data grid’s column and row level virtualization. With support for local or remote data sources, you get the best performance no matter where your data lives. Your users will experience Excel-like scrolling, with enterprise speed — no lag, screen flicker, or visual delay — giving you the best user experience (UX) without compromising performance.

</div>

<div class="divider"></div>

### Quick and Easy to Customize, Build and Implement
<div class="center-text">
<span  class="h2">
    <strong>Quick and Easy to Customize, Build and Implement</strong>
</span>

<div class="divider--half"></div>

The Ignite UI Angular Data Grid can handle unlimited rows and columns of data, while providing access to custom templates and real-time data updates. Featuring an intuitive API for easy theming and branding, you can quickly bind to data with minimal code.
<div class="divider--half"></div>
<div class="center-text">
    <a class="cta-btn no-external-icon ui-btn--sm" href="grid/grid.md">view samples</a>
</div>
</div>

<div id="features-gifs">
        <div class="features-gifs--wrapper">
            <div class="features-gifs--content">
                <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of filtering capabilities within Angular Data Grid" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-filtering-ui-768.gif?v=201811121733" alt="Animation of filtering capabilities within Angular Data Grid">
                <br>
                <h3  class="h3">
                    <strong>Angular Grid Paging, Sorting, Filtering, & Searching</strong>
                </h3>
                <div class="divider--half"></div>
                Allow users to navigate your data set with our default [pager](grid/paging.md) or create your own template to give your own paging experience. With complete support for single and multi-column sorting, full-text [search](grid/search.md) on the grid, and several [advanced filtering](grid/advanced_filtering.md) options, including data-type based [Microsoft Excel-style Filtering](grid/excel_style_filtering.md).
            </div>
            <div class="features-gifs--content">
                <img class="b-lazy b-loaded responsive-img" title="Inline editing on a cell" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-inline-grid-editing-1100.jpg?v=201808021304" alt="Inline editing on a cell within Angular Data Grid Component">
                <h3  class="h3">
                    <strong>Inline Angular Grid Editing</strong>
                </h3>
                <div class="divider--half"></div>
                We provide you default [cell templates for editable columns](grid/grid.md#cell-editing-template) which are based on the data type of the column. You can define your own custom templates for editable columns and override default behavior for committing and discarding changes in the cell value.
            </div>
        </div>
        <div class="features-gifs--wrapper">
            <div class="features-gifs--content">
                <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of keyboard navigation functionality" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-keyboard-navigation-1100.gif?v=201808021304" alt="Animation of keyboard navigation functionality within Angular Data Grid">
                <h3  class="h3">
                    <strong>Keyboard Navigation & Row/Cell Selection in the Angular Grid</strong>
                </h3>
                <div class="divider--half"></div>
                Ensure accessibility compliance and improve usability, enabling Excel-like [keyboard navigation](grid/keyboard_navigation.md) in the Angular data grid, using the up, down, right, left, tab, and Enter keys. You can toggle single or multiple row selection in the Angular grid using the mouse or keyboard to select or de-select full rows, or use the built-in select all / de-select all checkbox in the grid toolbar to work with row selection. <a class="no-external-icon" href="https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility-">Learn about our most recent enhancements to this feature</a>.
            </div>
            <div class="features-gifs--content">
                <img class="b-lazy b-loaded responsive-img" title="Icon representation for ARIA support" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-aria-support-1100.jpg?v=201808021304" alt="Icon representation for ARIA support on the Angular Data Grid Component">
                <h3  class="h3">
                    <strong>Angular Grid Accessibility & ARIA Support</strong>
                </h3>
                <div class="divider--half"></div>
                Each of our Angular components in Ignite UI for Angular has been implemented according to the latest accessibility guidelines and specifications. Our Angular components have been tested using OS or Browser provided accessibility technology – screen readers. Our team ensures not only that the guidelines are implemented, but also that the actual content delivered to visually impaired or blind people is actually consumable and user-friendly for them. The Ignite UI for Angular data grid is fully accessible with a11y Keyboard accessibility, ARIA, and accessible color palette. <a class="no-external-icon" href="https://www.infragistics.com/community/blogs/b/engineering/posts/grid-keyboard-navigation-accessibility-">Learn more</a>.
            </div>
        </div>
        <div class="features-gifs--wrapper">
            <div class="features-gifs--content">
                <img class="b-lazy b-loaded responsive-img" title="Grid of data with column grouping, pinning and summary features enabled" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-cell-summaries-1100.jpg?v=201808021304" alt="Grid of data with column grouping, pinning and summary features enabled for Angular Data Grid component">
                <h3  class="h3">
                    <strong>Column Grouping, Pinning, Summaries, & Moving in the Angular Grid</strong>
                </h3>
                <div class="divider--half"></div>
                Group columns or pre-set column groups via mouse interaction, touch or our API, with support for built-in column [summaries](grid/summaries.md) or custom summary templates. Enable users to interactively [hide](grid/column_hiding.md) or [move columns](grid/column_moving.md), with full support for interactive [column pinning](grid/column_pinning.md), during move, drag, and reorder operations.
            </div>
            <div class="features-gifs--content">
                <img class="b-lazy b-loaded responsive-img" title="Grid of data with Multi-Column Headers feature enabled" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-multi-column-headers-1100.jpg?v=201808021304" alt="Grid of data with Multi-Column Headers feature enabled on the Angular Data Grid component">
                <h3  class="h3">
                    <strong>Multi-Column Headers in the Angular Grid</strong>
                </h3>
                <div class="divider--half"></div>
                Enable [multi-column headers](grid/multi_column_headers.md), allowing you to group columns under a common header. Every column group could be a representation of combinations between other groups or columns, with full support for column pinning, interactive column moving within groups, sorting, and hiding groups.
            </div>
        </div>
        <div class="features-gifs--wrapper">
            <div class="features-gifs--content">
                <img class="b-lazy b-lazy-gifs b-loaded responsive-img" title="Animation of different grids design showing the themeing and templating capabilities" src="https://static.infragistics.com/marketing/ignite-ui-angular/grid/ignite-ui-angular-grid-cell-styling-1100.gif?v=201808021304" alt="Animation of different grids design showing the themeing and templating capabilities of the Angular Data Grid">
                <h3  class="h3">
                    <strong>Theming, Styling, & Templating in the Angular Grid</strong>
                </h3>
                <div class="divider--half"></div>
                With Ignite UI for Angular you can customize cell appearance with CSS or re-template any cell with ng-template to give any cell render appearance. With full support for Material Design, you can customize your branded experience with our simple-to-use theming engine.
            </div>
            <div class="features-gifs--content">
                <img class="b-lazy b-loaded responsive-img" title="Icon representation of Microsoft Excel-like features" src="https://static.infragistics.com/marketing/Website/products/Ignite-UI-for-Angular/ignite-ui-angular-grid-export-to-excel-2-1100.jpg?v=201808021304" alt="Icon representation of Microsoft Excel-like features on the Angular Data Grid">
                <h3  class="h3">
                    <strong>Excel Library for the Angular Grid</strong>
                </h3>
                <div class="divider--half"></div>
                Full support for exporting data grids to XLXS, XLS, TSV or CSV. The Ignite UI for Angular [Excel library](excel_library.md) includes 300+ formulas, Table support, Conditional Formatting, Chart creation and more – all without needing Microsoft Excel on the client machine.
            </div>
        </div>
</div>
<div class="divider"></div>

### Angular Grid Features
<div class="center-text">
    <span  class="h2">
        <strong>Download the Fastest Angular Grid Today!</strong>
    </span>
    <div class="divider--half"></div>
    <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">download now</a>
    <br>
    30 days free trial. No credit card required.
    <div class="divider"></div>
    <span  class="h2">
        <strong>Angular Grid Features</strong>
    </span>
</div>
  <div class="divider"></div>
<div id="list-features-included">
<ul>
    <li>[Inline Editing](grid/editing.md)</li>
    <li>[Row and Column Filtering](grid/filtering.md)</li>
    <li>[Grid Sorting](grid/sorting.md)</li>
    <li>[Column Grouping](grid/groupby.md)</li>
    <li>[Column Summaries](grid/summaries.md)</li>
    <li>[Fixed/Pinned Columns](grid/column_pinning.md)</li>
</ul>
<ul>
    <li>[Resizable Columns](grid/column_resizing.md)</li>
    <li>[Column Hiding](grid/column_hiding.md)</li>
    <li>[Column Moving](grid/column_moving.md)</li>
    <li>[Cell Copy and Paste](grid/clipboard_interactions.md)</li>
    <li>[Cell Styling](grid/conditional_cell_styling.md)</li>
    <li>[Real-time/Live Data Theming](grid/live_data.md)</li>
</ul>
<ul>
    <li>[Custom Grid Toolbar](grid/toolbar.md)</li>
    <li>[Grid Paging](grid/paging.md)</li>
    <li>[Row Selection](grid/selection.md)</li>
    <li>[Cell Selection](grid/cell_selection.md)</li>
    <li>[Grid-level Searching](grid/search.md)</li>
    <li>[Export to Excel, CSV, TSV](exporter_excel.md)</li>
</ul>
<ul>
    <li>[Multi-Column Headers](grid/multi_column_headers.md)</li>
    <li>[Combo Box/Dropdown](combo.md)</li>
    <li>[Virtualization and Performance](grid/virtualization.md)</li>
    <li>[Remote Data Load on Demand](grid/virtualization.md#remote-virtualization)</li>
    <li>[Cell Templates](grid/grid.md#cell-template)</li>
    <li>[ARIA/a11y Support](general/accessibility-compliance.md)</li>
</ul>
</div>

<div class="divider"></div>

<div id="support-section-wrapper">
    <div class="support-section">
    <div class="center-text">
        <span  class="h2">
            <strong>Ignite UI for Angular Supported Browsers</strong>
        </span>
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
    <div class="support-section">
    <div class="center-text">
        <span  class="h2">
            <strong>Ignite UI for Angular Support Options</strong>
        </span>
    </div>
<div class="divider--half"></div>
There are multiple options to get access to our award-winning support at Infragistics for the Angular product.
<div class="divider--half"></div>
        <ul>
            <li>Start at the Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/support/ignite-ui-angular-help">Support</a> home page</li>
            <li>Read the Angular [Documentation](general/getting_started.md) and experiment with Angular Samples</li>
            <li>Read the<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/community/blogs/tags/Ignite UI for Angular"> Angular Blogs</a> to stay up to date</li>
            <li>Submit a <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/grid-table"> Support Case</a></li>
            <li>Learn from the Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">Reference Applications</a></li>
        </ul>
    </div>
</div>

<div class="divider"></div>

<div class="center-text">
    <span  class="h2">
        <strong>Ignite UI for Angular Trial License and Commercial</strong>
    </span>
    <div class="divider--half"></div>
Ignite UI for Angular is a commercially licensed product available via a subscription model. You can try the Ignite UI for Angular product for free when you <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/free-downloads">register for a 30-day trial</a>. When you are done with your Trial Period, you can <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/how-to-buy/product-pricing">purchase a license </a> from our web site or by calling <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/about-us/contact-us">sales in your region</a>.
</div>

<div class="divider"></div>

## FAQs
<div class="center-text">
    <span  class="h2">
        <strong>Frequently Asked Questions About Ignite UI for Angular</strong>
    </span>
    <div class="divider"></div>
</div>

<div id="faqs-accordion-wrapper">
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Why should I choose the Infragistics Ignite UI for Angular Data Grid?</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
            <ul>
                <li>[Virtualized Rows and Columns](grid/virtualization.md) so you can load millions of records</li>
                <li>[Inline Editing](grid/row_editing.md) with Cell, Row, and [Batch](grid/batch_editing.md) Update options</li>
                <li>[Excel-style Filtering](grid/excel_style_filtering.md) and full [Excel Keyboard Navigation](grid/keyboard_navigation.md) capability</li>
                <li>Interactive [Outlook-style Grouping](grid/groupby.md)</li>
                <li>[Column Summaries](grid/summaries.md) based on any data in a grid cell or column</li>
                <li>[Export to Excel](grid/export_excel.md), including [Data Visualization](excel_library_working_with_charts.md)</li>
                <li>[Display Density](grid/display_density.md) to adjust the height and sizing of the rows</li>
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
If you are developing applications on multiple platforms, consider our complete app development package, Infragistics Ultimate, which include desktop platforms like WPF and Windows Forms, plus all modern web toolsets for Angular, Web Components, ASP.NET MVC and ASP.NET Core.
    </div>
    </div>
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Can I purchase the Infragistics Ignite UI for Angular Data Grid control separately?</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
        No, you cannot purchase the Angular Data Grid separately. It is part of a the <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular">Ignite UI for Angular product</a>, which includes dozens of UI controls and components, plus over 60 charts, including Angular Financial Charting. If you are interested in other modern web platforms like Angular, ASP.NET MVC, Web Components or ASP.NET Blazor, check out our <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/products/ignite-ui">Ignite UI product bundle</a>, which gives you every web platform for only $100 more on your subscription. That is hundreds of controls, components, and data visualizations for a very low price.
        </div>
    </div>
    <div class="faqs-accordion-content">
        <div class="faqs-accordion h4">Can I purchase the Infragistics Ignite UI for Angular Data Grid control separately?</div>
        <div class="divider--half"></div>
        <div class="faqs-accordion-panel">
        To get started with the Angular Data Grid, follow the steps in the [getting started guide](general/getting_started.md). We also maintain a library of <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/resources/sample-applications">sample applications</a>, which are designed to not only inspire but are best practices guides for Angular development.
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