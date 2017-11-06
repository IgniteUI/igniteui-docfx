---
title: Input Directive
_description: Specialized and optimized for each data type, Ignite UI for Angular provides a variety of input controls for every application need. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Input components, Angular Input controls
---

##Input
With the igxInput directive you can add **inputs** in your markup.

### Usage
```html
    <div class="igx-form-group">
        <input type="text" igxInput [(ngModel)]="user.name"/>
        <label igxLabel>Username</label>
    </div>
```