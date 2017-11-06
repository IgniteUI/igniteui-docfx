---
title: Switch Component
_description: Ignite UI for Angular Switch component enables developers to use binary on/off or true/false data input functions within their applications. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Switch components, Angular Switch controls
---

##Switch
`igx-switch` is a selection component that allows users to make a binary choice for a certain condition. It behaves similar to the switch component in iOS. 

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