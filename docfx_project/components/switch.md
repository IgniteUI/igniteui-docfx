---
title: Switch Component
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Switch components, Angular Switch controls
---

##Switch
<p class="highlight">The Ignite UI for Angular Switch component is a binary choice selection component that behaves similarly to the switch component in iOS.</p>
<div class="divider"></div>

### Switch Demo
<div class="sample-container" style="height:600px">
<iframe src='https://embed.plnkr.co/a2Zmf05zcAX1hiE6OwxY/?show=preview&sidebar=false' width="100%" height="100%" seamless frameBorder="0"></inframe>
</div>
<div class="divider--half"></div>

### Usage

Basic usage of `igx-switch`

```html
<ul>
    <li *ngFor="let task of tasks">
        <igx-switch [checked]="task.done" (change)="handler($event)">
            {{ task.description }}
        </igx-switch>
    </li>
</ul>
```

You can easily use it within forms with `[(ngModel)]`

```html
<form (submit)="saveForm()">
    <div class="order-detail__cbxgroup" *ngIf="order.items">
        <div *ngFor="let item of order.items">
            <ig-switch [disabled]="order.completed || order.canceled"
                         [checked]="order.completed"
                         [(ngModel)]="item.completed">
                {{ item.description }}
            </ig-switch>
        </div>
    </div>
</form>
```
<div class="divider"></div>