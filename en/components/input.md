---
title: Input Directive
_description: Specialized and optimized for each data type, Ignite UI for Angular provides a variety of input controls for every application need.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Input components, Angular Input controls
---

##Input
With the igxInput directive you can add **inputs** in your markup.

### Input Demo
<div class="sample-container loading" style="height:1390px">
    <iframe id="form-elements-sample-iframe" src='{environment:demosBaseUrl}/form-elements' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="form-elements-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

### Usage
```html
    <div class="igx-form-group">
        <input type="text" igxInput [(ngModel)]="user.name"/>
        <label igxLabel>Username</label>
    </div>
```
