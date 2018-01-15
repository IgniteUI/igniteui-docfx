---
title: Scroll コンポーネント
_description: Ignite UI for Angular Scroll Bar コンポーネントは、レスポンシブで直感的な UI のためにスクロールを実装するスタンドアロン ネイティブなコントロールです。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Scrollbar コンポーネント, Angular Scrollbar コントロール
---

##Scroll
<p class="highlight">Ignite UI for Angular Scroll コンポーネントはコンテンツをスクロール コンテナーにホストします。コンテナーの高さまたは一度に表示するコンテンツの項目の数を指定します。DOM 仮想化をスクロールを含むコンテナー内のコンテンツに適用できます。</p>
<div class="divider"></div>

### Scrollbar デモ
<div class="sample-container" style="height: 755px">
    <iframe frameborder="0" seamless width="100%" height="100%" src="https://{environment:demosBaseUrl}/scroll"></iframe>
</div>
<div class="divider--half"></div>

### はじめに
IgxScroll を使用するには、IgxScroll をインポートします。

```typescript
import { IgxScroll } from "igniteui-js-blocks/IgxScrollModule";
```
<div class="divider--half"></div>

```html
<igx-scroll #scroll
            (onScroll)="updateList($event)"
            [itemsToViewCount]="visibleItemsCount"
            [itemHeight]="50"
            [totalItemsCount]="items.length">
    <ul class="list">
        <li class="list-item" *ngFor="let item of visibleItems">
            {{item}}
        </li>
    </ul>
</igx-scroll>
```

```typescript
export class IgxScrollSampleComponent {
    public items: string[] = [];

    public visibleItems: string[] = [];

    public visibleItemsCount: number = 5;

    public constructor() {
        for (let i = 1; i <= 50000; i++) {
            this.items.push("item #" + i );
        }

        this.visibleItems = this.items.slice(0, 5);
    }

    private updateList($event: IgxScrollEvent): void {
        this.visibleItems = this.items.slice($event.currentTop, $event.currentTop + this.visibleItemsCount);
    }
}

```
<div class="divider--half"></div>


## API

### 入力

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `itemHeight` | boolean | UI 操作を無効にするか、有効にします。 |
| `scrollTop` | number | スクロールの上位置を取得します。 |
| `totalItemsCount` | number | 項目の合計数。 |
| `visibleItemsCount` | number | スクロールで描画される実際の項目の数。 |
<div class="divider--half"></div>

### 出力

| 名前 | 説明 |
| :--- | :--- |
| `onScroll`  | IgxScroll のビューポートがスクロールされたときに実行されるスクロール イベント。IgxScrollEvent 引数で発生されます。|
<div class="divider--half"></div>

### メソッド

| 名前   | 引数 | 戻り値の型 | 説明 |
|:----------:|:------|:------|:------|
| `scrollVertically`  | delta: number | void | 指定したデルタでスクロールします。スクロール デルタがスクロール境界以外の場合はスクロールしません。 |
<div class="divider--half"></div>
