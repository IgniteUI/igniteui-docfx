---
title: Grid 検索
_description: Ignite UI for Angular Data Grid コントロールは、グリッド内で検索機能を実装する検索 API があります。 
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Data Grid コンポーネント, Angular Data Grid コントロール, Angular Grid コンポーネント, Angular Grid コントロール, Angular 高パフォーマンス ‘Grid, 検索, サーチ, API 検索
---

### Grid 検索

ブラウザーにはネイティブな検索機能がありますが、ほとんどの場合でグリッドの行列が表示範囲外になります。このような場合、ネイティブ検索は DOM の一部でないため仮想化セルを検索できません。Ignite UI for Angular Data Grid を**検索 API** で拡張したため、グリッドの**仮想コンテンツ**を介して検索できるようになりました。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-search-sample-iframe" src='{environment:demosBaseUrl}/grid-search-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-search-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### 使用方法

#### グリッドの設定
グリッドを作成してからデータをバインドします。コンポーネントにカスタム スタイルも追加しました。

```html
<!--searchgrid.component.html-->

    <igx-grid #grid1 id="grid1" [data]="data" [autoGenerate]="false">
        <igx-column [field]="'IndustrySector'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'IndustryGroup'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'SectorType'" dataType="string" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'KRD'" dataType="number" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'MarketNotion'" dataType="number" [filterable]="true" [sortable]="true"></igx-column>
        <igx-column [field]="'Date'" dataType="date" [filterable]="true" [sortable]="true"></igx-column>
    </igx-grid>
```

```css
/* searchgrid.component.css */

.grid__wrapper {
    margin: 15px;
}

.offset {
    margin-bottom: 15px;
}

.resultsText {
    font-size: 0.875rem;
}

.caseSensitiveButton {
    margin-left: 10px;
}

.caseSensitiveIcon {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
    color: rgba(0, 0, 0, .54);
}

.searchButtons {    
    margin-left: 5px;
}
```

データグリッドの検索 API を使用します。検索したテキストの保存や検索で大文字小文字を区別するかどうかに使用できるプロパティを作成できます。

```typescript
// searchgrid.component.ts

public searchText: string = "";
public caseSensitive: boolean = false;
```

#### 検索入力ボックス

検索入力を作成します。**searchText** を ngModel として新しく作成した入力へバインドして ngModelChange イベントにサブスクライブします。ユーザーによるすべての ngModelChange 変更を検出できます。
これはグリッドの `findNext` と `findPrev` メソッドを使用して **searchText** のすべての発生を強調し、次へまたは前 (呼び出すメソッドに基づいて) へスクロールするメソッドです。

`findNext` と `findPrev` メソッドの両方に 2 つの引数があります。
- **string** 値 (検索テキスト)
- (オプション) **boolean** 値 (検索は大文字と小文字を区別するかどうか、デフォルト値は false). 

上記のメソッドは **number** 値を返します (グリッドで指定した文字列が含まれる回数)

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)" />
```

#### 検索結果の個数を表示
検索で見つかった個数と場所を示します。グリッドの `lastSearchInfo` プロパティを使用します。このプロパティは、**find** メソッド使用時に自動的に更新されます。 

- `grid.lastSearchInfo.matchInfoCache.length` 値は検索で見つかった個数です。
- The `grid.lastSearchInfo.activeMatchIndex` 値は、現在の一致 (出現) のインデックス位置です。

```html
<!--searchgrid.component.html-->

<div class="resultsText" *ngIf="grid.lastSearchInfo">
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">
        {{ grid.lastSearchInfo.activeMatchIndex + 1 }} of {{ grid.lastSearchInfo.matchInfoCache.length }} results
    </span>
    <span *ngIf="grid.lastSearchInfo.matchInfoCache.length == 0">
        No results
    </span>
</div>
```

#### 検索ボタンの追加

ボタンの各クリック イベント ハンドラー内で `findNext` と `findPrev` メソッドを呼び出して検索や検索結果をナビゲーションするためのボタンを作成します。

```html
<!--searchgrid.component.html-->

<div class="searchButtons">
    <input type="button" value="Previous" (click)="grid.findPrev(searchText, caseSensitive)" />
    <input type="button" value="Next" (click)="grid.findNext(searchText, caseSensitive)" />
</div>
```

#### キーボード検索の追加

ユーザーは矢印キーと Enter キーで結果を移動できます。 preventDefault() メソッドのデフォルト キャレットの移動を防止する検索入力の  **keydown** イベントを処理し、ユーザーが押したキーに基づいて `findNext`/`findPrev` メソッドを呼び出します。

```html
<!--searchgrid.component.html-->

<input #search1 id="search1" placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)"
       (keydown)="searchKeyDown($event)" />
```

```typescript
// searchgrid.component.ts

public searchKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
        ev.preventDefault();
        this.grid.findNext(this.searchText, this.caseSensitive);
    } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
        ev.preventDefault();
        this.grid.findPrev(this.searchText, this.caseSensitive);
    }
}
```

#### 大文字と小文字の区別

ユーザーは検索で大文字と小文字を区別するかどうかを選択できます。 この目的で、 **caseSensitive** プロパティを **checked** プロパティにバインドしてシンプルなチェックボックス入力を使用し、プロパティを切り替えて変更イベントを処理し、 `findNext` メソッドを呼び出します。
```html
<!--searchgrid.component.html-->

<span>Case sensitive</span>
<input type="checkbox" [checked]="caseSensitive" (change)="updateSearch()">
```

```typescript
// searchgrid.component.ts

public updateSearch() {
    this.caseSensitive = !this.caseSensitive;
    this.grid.findNext(this.searchText, this.caseSensitive);
}
```

#### 永続化

グリッドのフィルターや並べ替え、レコードの追加や削除などの場合、処理後に現在の検索が自動的に更新されて **searchText** に一致するテキストが保持されます。更に検索がページングで動作し、グリッドの `perPage` プロパティの変更時も強調表示が保持されます。

#### アイコンの追加

その他のコンポーネントを使用するためにユーザー インターフェイスを作成し、検索バー全体のデザインを向上します。左側にはより洗練されたデザイン検索または削除アイコン、右側には検索オプション用に Ripple スタイルのマテリアル デザイン アイコンを表示できます。入力グループ内のコンポーネントをラップしてより洗練されたデザインにすることができます。
[**IgxInputGroup**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/input_group.html), [**IgxIcon**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/icon.html),  [**IgxRipple**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/ripple.html) and the [**IgxButton**](https://www.infragistics.com/products/ignite-ui-angular/angular/components/button.html) モジュールを使用します。

```typescript
// app.module.ts

...
import {
    IgxGridModule.forRoot(),
    IgxInputGroupModule,
    IgxIconModule,
    IgxRippleModule,
    IgxButtonModule    
} from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule],
})
export class AppModule {}
```

最後にテンプレートを新しいコンポーネントで更新します。

**IgxInputGroup** 内のすべてのコンポーネントをラップします。左側で検索とアイコンの削除/クリアを切り替えます (検索入力が空かどうかに基づきます)。 中央に入力を配置します。更に削除アイコンがクリックされたときに **searchText** を更新し、グリッドの `clearSearch` メソッドを呼び出して強調表示をクリアします。

```html
<!--searchgrid.component.html-->

<igx-input-group type="search" class="offset">
    <igx-prefix>
        <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
        <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
    </igx-prefix>

    <input #search1 id="search1" igxInput placeholder="Search" [(ngModel)]="searchText" (ngModelChange)="grid.findNext(searchText, caseSensitive)"
        (keydown)="searchKeyDown($event)" />
    
    <igx-suffix *ngIf="searchText.length > 0">
        ...
    </igx-suffix>
</igx-input-group>
```

```typescript
// searchgrid.component.ts

public clearSearch() {
    this.searchText = "";
    this.grid.clearSearch();
}
```

On the right in our input group, let's create three separate containers with the following purposes:
- For displaying the search results.

```html
<!--searchgrid.component.html-->

<igx-suffix *ngIf="searchText.length > 0">
    <div class="resultsText" *ngIf="grid.lastSearchInfo">
        <span *ngIf="grid.lastSearchInfo.matchInfoCache.length > 0">
            {{ grid.lastSearchInfo.activeMatchIndex + 1 }} of {{ grid.lastSearchInfo.matchInfoCache.length }} results
        </span>
        <span *ngIf="grid.lastSearchInfo.matchInfoCache.length == 0">
            No results
        </span>
    </div>
    ...
```
- ボタンは **caseSensitive** チェックボックスをマテリアル アイコンを含むスタイリッシュなボタンで置き換えました。ボタンがクリックされるとカスタム **updateSearch**  メソッドを再び呼び出して、 **caseSensitive** プロパティの状態に基づいてボタンに異なる背景を設定します。

```html
<!--searchgrid.component.html-->

    ...
    <div class="caseSensitiveButton">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="updateSearch()"
                [igxButtonBackground]="caseSensitive? 'lightgrey' : 'transparent'">
            <igx-icon class="caseSensitiveIcon" fontSet="material" name="text_fields"></igx-icon>
        </button>
    </div>
    ...
```
- For the search navigation buttons, we have transformed our inputs into ripple styled buttons with material icons. The handlers for the click events remain the same - invoking the `findNext`/`findPrev` methods.

```html
<!--searchgrid.component.html-->

    ...
    <div class="searchButtons">
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findPrev(searchText, caseSensitive)">
            <igx-icon fontSet="material" name="navigate_before"></igx-icon>
        </button>
        <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="grid.findNext(searchText, caseSensitive)">
            <igx-icon fontSet="material" name="navigate_next"></igx-icon>
        </button>
    </div>
</igx-suffix>
```

### API まとめ

検索結果のナビゲーションは、グリッドにカスタムバー機能を追加して実装しました。アイコンや入力などその他の Ignite UI for Angular コンポーネントも使用しています。以下は検索 API です。

#### メソッド
以下のメソッドは **IgxGridComponent** で使用できます。
| 名前 | 型 | パラメーター |説明 |
| :--- | :--- | :--- | :--- |
| `findNext` | number | 検索文字列と検索で大文字と小文字の区別をするかどうか (デフォルトは false)。 | グリッドで文字列の次の出現を検索します。表示されていない場合はセルへスクロールします。グリッドに文字列が何回含まれるかを返します。|
| `findPrev` | number | 検索文字列と検索で大文字と小文字の区別をするかどうか (デフォルトは false)。 | グリッドで文字列の前の出現を検索します。表示されていない場合はセルへスクロールします。 グリッドに文字列が何回含まれるかを返します。|
| `clearSearch` | void | N/A | グリッドのすべての強調表示を削除します。 |
| `refreshSearch` | number | N/A | 既存の検索を再適用します。グリッドに文字列が何回含まれるかを返します。 |

<div class="divider"></div>

以下のメソッドは **IgxGridCellComponent** で使用できます。
| 名前 | 型 | パラメーター |説明 |
| :--- | :--- | :--- | :--- |
| `highlightText` | number | 検索文字列と検索で大文字と小文字の区別をするかどうか (デフォルトは false)。 | セルで文字列のすべての出現を強調表示します。検索文字列がセルに何回含まれるかを返します。 |
| `clearHighlight` | void | N/A | Removes all the highlights in the cell. |

<div class="divider"></div>

#### プロパティ
以下のプロパティは **IgxGridComponent** で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `lastSearchInfo` | ISearchInfo | 最後に実行された検索についての情報を含みます。 |


<div class="divider"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
* [Virtualization and Performance](grid_virtualization.md)
* [Filtering](grid_filtering.md)
* [Paging](grid_paging.md)
* [Sorting](grid_sorting.md)
* [Summaries](grid_summaries.md)
* [Column Pinning](grid_column_pinning.md)
* [Column Resizing](grid_column_resizing.md)
* [Selection](grid_selection.md)
* [Export to Excel](exporter_excel.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム**　(英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**　(英語)](https://github.com/IgniteUI/igniteui-angular)
