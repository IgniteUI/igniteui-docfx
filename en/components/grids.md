---
title: Angular Grid Layout | Real-Time Angular Tables | The Lightweight Angular Web Components table | Infragistics
_description: Our Angular grid layout will help you build dynamic, touch-responsive data grids with little coding and configuration. Get 30-day FREE trial of Ignite UI for Angular.
_keywords: Angular data grid, infragistics, grids, Ignite UI for Angular, table
---

<style>

.affix{
  margin-top: 0;
}

h1 {
   margin-top: 1.5rem;
}

.h3{
    font-weight: bold;
}

h3 {
    visibility: hidden;
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
    columns: 2;
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

/* .faqs-accordion-panel ul{
  margin-bottom: 15px;
} */

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
    <img class="b-lazy b-loaded" style="margin: 0 auto; max-width: 175px;" title="Ignite UI logo" src="../images/marketing/ignite-ui-logo.svg" alt="Ignite UI Logo for developer web applications">
</div>

# The Fastest Angular Data Grid

## Angular Grid Example

In this Angular grid example, you can see how users can customize their view of the data by using features and functionality of the grid, such as search and filtering, columns sorting, resizing, pinning and hiding, row grouping, grid summaries, horizontal and vertical, and cell styling which includes embedded in the cell linear progress bar indicator component and sparkline component.

<div class="divider--half"></div>

<code-view style="height: 435px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-overview"
           alt="Angular Grid Example" >
</code-view>

Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a href="{environment:infragisticsBaseUrl}/products/ignite-ui-angular/download">Download it for free.</a>

## Why Use a Angular Data Grid?

Angular data grids are essential in use cases where high volumes of data must be stored and sorted through quickly. This can include industries such as financial services, banking and insurance, which often use high-volume, high-velocity data. The success of these companies is dependent upon the features, functionality and performance of these data grids. When stock decisions need to be made in microseconds, for example, it’s imperative that the data grid performs with no lag time or flicker.

## Angular Data Grid Features

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

<li>[Cell and Row Selection](data-grid-cell-selection.md) for Single and Multi-Select</li>

<li>Full touch support for mobile app development</li>
</ul>

<div class="divider"></div>

### The Fastest Angular Data Grid Example

<span class="h3">Demo</span>

<code-view style="height: 435px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/data-grid-type-marketing-table"  >
</code-view>

<div class="divider--half"></div>

### Data Virtualization and Performance

<span class="h3">Data Virtualization and Performance</span>

<div class="divider--half"></div>
<hr style="border: .5px solid #ccc;">
<div  class="cta-area">
    <h4 class="h2" style="text-align: center; font-weight: 700; margin-top: 0;" >Quick and Easy to Customize, Build and Implement Angular Tables</h4>
    <div style="text-align:center">
    <p>The Ignite UI for Angular Data Grid can handle unlimited rows and columns of data, while providing access to custom templates and real-time data updates. Featuring an intuitive API for easy theming and branding, you can quickly bind to data with minimal code.</p>
    <div class="divider--half"></div>
        <div style="text-align:center">
            <a class="cta-btn no-external-icon ui-btn--sm" href="{environment:infragisticsBaseUrl}/resources/sample-applications">view samples</a>
        </div>
    </div>
    </div>
</div>
<hr style="border: .5px solid #ccc;">
<div class="divider"></div>

### Angular Grid Cell and Row Selection

### Angular Grid Filtering

### Angular Grid Column Moving

### Angular Grid Column Pinning

### Angular Grid Column Resizing

### Angular Grid Column Sorting

### Angular Grid Column Summaries

### Angular Grid Column Types

### Angular Grid Column Animations

### Angular Grid Column Options Dialog

### Angular Grid Column and Row Outlook Style Grouping

### Angular Grid Row Pinning

### Angular Grid Keyboard Navigation

## Angular Grid Features

<div class="divider"></div>

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
            <li>Start at the Angular <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/support/ignite-ui-angular-help">Support</a> home page</li>
            <li>Read the Angular [Documentation](general-getting-started.md) and experiment with Angular Samples</li>
            <li>Read the<a class="no-external-icon" href="{environment:infragisticsBaseUrl}/community/blogs/tags/Ignite UI for Angular"> Angular Blogs</a> to stay up to date</li>
            <li>Submit a <a class="no-external-icon" href="{environment:infragisticsBaseUrl}/my-account/support-activity"> Support Case</a> after signing into your account</li>
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
