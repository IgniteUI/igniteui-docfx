---
title: Financial Chart - Custom Indicators
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted. 
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart 
---
## Custom Indicators 

The igxFinancialChart component allows you to define custom financial indicators to display in the Indicator Pane.

### Custom Indicators Demo

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-custom-indicators-iframe" src='{environment:demosBaseUrl}/financial-chart-custom-indicators' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-custom-indicators-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

In the igxFinancialChart, you can enable custom financial indicators by adding names for them to the CustomIndicatorNames property and performing calculations for them in the ApplyCustomIndicators event.

The following code example shows how to set up and calculate two custom indicators, one featuring the Simple Moving Average (SMA) and one displaying random values.

