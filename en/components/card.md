---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Angular Card component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Card component, Angular Card controls
---

##Card
<p class="highlight">The Ignite UI for Angular Card component displays text, images, icons, and buttons in a visually rich presentation that can serve as an entry point to more detailed information. Cards can be used to create a multimedia dashboard. The Card component supports pagination using the same component as the Ignite UI for Angular Grid, with some custom coding required.</p>
<div class="divider"></div>

### Card Demo
<div class="sample-container" style="height: 1661px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="https://{environment:host}/angular-demos/card"></iframe>
</div>
<div class="divider--half"></div>

### Getting Started
Import the `IgxCardModule` inside your application/module.
```typescript
import { IgxCardModule } from "igniteui-js-blocks";
```
<div class="divider--half"></div>

### Usage
```html
<igx-card>
    <igx-card-header>
        <igx-avatar src="..." roundShape="true">
            <h3>Elon Musk</h3>
        </igx-avatar>
    </igx-card-header>
    <igx-card-content>
        <p>
        South African entrepreneur Elon Musk is known for founding Tesla Motors and SpaceX, which launched a landmark commercial spacecraft in 2012.
        </p>
    </igx-card-content>
    <igx-card-actions>
        <button igxButton (click)="openUrl('https://www.facebook.com/pages/Elon-Musk/108250442531979')">Like</button>
        <button igxButton (click)="openUrl('https://twitter.com/elonmusk')">Share</button>
    </igx-card-actions>
</igx-card>
```
<div class="divider--half"></div>

