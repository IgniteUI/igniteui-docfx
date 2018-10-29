---
title: Tree Grid Component
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid component, Angular Tree Grid control, Angular Tree Grid component, Angular Tree Grid control, Angular High Performance Tree Grid
---

## Tree Grid

<p class="highlight">Displays and manipulate hierarchical data with consistent schema formatted as a table and provides a line of advanced features such as sorting, filtering, editing, column pinning, paging, column moving and hiding.</p>
<div class="divider"></div>

### Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-childdatakey-iframe" src='{environment:demosBaseUrl}/treegrid-childdatakey' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="ttreegrid-childdatakey-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Getting started

The tree grid is exported as an `NgModule`, thus all you need to do in your application is to import the [`IgxTreeGridModule`]({environment:angularApiUrl}/classes/igxtreegridmodule.html) inside your `AppModule`:

```typescript
// app.module.ts

import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    imports: [
        ...
        IgxTreeGridModule,
        ...
    ]
})
export class AppModule {}
```

### Usage

The IgxTreeGridComponent shares a lot of features with the IgxGridComponent, but it also adds the ability to display its data hierarchically.
In order to achieve this, the IgxTreeGridComponent provides us with a couple of ways to define the relations among our data objects - by using a **child collection** for every data object or by using **primary and foreign keys** for every data object.

#### Child collection
When we are using the **child collection** option, every data object contains a child collection, that is populated with items of the same type as the parent data object. This way every record in our tree grid will have a direct reference to any of its children. In this case the [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be hierarchically defined collection.

#### Primary and Foreign keys
When we are using the **primary and foreign keys** option, every data object contains a primary key and a foreign key. The primary key is the unique identifier of the current data object and the foreign key is the unique identifier of its parent. In this case the [`data`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#data) property of our tree grid that contains the original data source will be a flat collection.
