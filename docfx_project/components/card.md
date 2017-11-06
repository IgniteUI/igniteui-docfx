---
title: Card Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Angular Card component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Card component, Angular Card controls
---

##Card
The **igx-card** component serves as a sheet of material as an
entry point to more detailed information.

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

### Getting Started
Import the `IgxCardModule` inside your application/module.

### Card Example
<div class="sample-container" style="height: 800px">
    <iframe seamless width="100%" height="100%" frameborder="0" src="https://embed.plnkr.co/JWAYTeaQnt4dn8SONIwd/?show=preview&sidebar=false"></iframe>
</div>
