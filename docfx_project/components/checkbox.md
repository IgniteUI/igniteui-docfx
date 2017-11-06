---
title: Checkbox Component
_description: Ignite UI for Angular Checkbox component is a selection control that allows users to make a binary choice for a certain condition. 
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Checkbox components, Angular Checkbox controls
---

##Checkbox

`igx-checkbox` is a selection component that allows users to make a binary choice for a certain condition. It behaves similar to the native browser checkbox.  

### Usage

```html
<ul>
    <li *ngFor="let task of tasks">
        <igx-checkbox [checked]="task.done" (change)="handler($event)">
            {{ task.description }}
        </igx-checkbox>
    </li>
</ul>
```

You can easily use it within forms with `[(ngModel)]`

```html
<form (submit)="saveForm()">
    <div class="order-detail__cbxgroup" *ngIf="order.items">
        <div *ngFor="let item of order.items">
            <ig-checkbox
            [disabled]="order.completed || order.canceled"
            [checked]="order.completed"
            [(ngModel)]="item.completed">
                {{ item.description }}
            </ig-checkbox>
        </div>
    </div>
</form>
```