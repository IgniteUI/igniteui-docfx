---
title: Checkbox コンポーネント
_description: Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を許可する選択コントロールです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Checkbox コンポーネント, Angular Checkbox コントロール
---

## Checkbox
<p class="highlight">Ignite UI for Angular Checkbox コンポーネントは、特定の条件のバイナリ選択を可能にする選択コントロールです。ネイティブ ブラウザーのチェックボックスと同様に動作します。</p>
<div class="divider"></div>

### Checkbox デモ
<div class="sample-container" style="height:1390px">
<iframe src='{environment:demosBaseUrl}/form-elements' width="100%" height="100%" seamless frameBorder="0"></iframe>
</div>
<div class="divider--half"></div>

### 使用方法

```html
<ul>
    <li *ngFor="let task of tasks">
        <igx-checkbox [checked]="task.done" (change)="handler($event)">
            {{ task.description }}
        </igx-checkbox>
    </li>
</ul>
```

フォームで `[(ngModel)]` と共に簡単に使用できます。

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
