---
title: Angular Text Highlight ディレクティブ | Ignite UI for Angular
_description: Ignite UI for Angular TextHighlight ディレクティブは、テキスト部分のハイライトやアクティブ ハイライトがあります。
_keywords: Angular TextHighlight ディレクティブ, Angular Text Highlight ディレクティブ, IgxTextHighlight ディレクティブ, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Text Highlight (テキスト強調表示) ディレクティブの概要

Ignite UI for Angular の [`IgxTextHighlightDirective`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) および `IgxTextHighlightService` は、テキストの強調表示、大文字と小文字の区別のオプション、完全一致のみの強調表示をサポートします。既に強調表示している部分を含む、テキストの強調表示をアクティブに保持できます。

## Angular Text Highlight ディレクティブの例

<code-view style="height: 260px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-1/" alt="Angular TextHighlight ディレクティブの例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Text Highlight ディレクティブを使用した作業の開始

Ignite UI for Angular Text Highlight ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxTextHighlightModule` をインポートします。

```typescript
// app.module.ts
...
import { IgxTextHighlightModule } from 'igniteui-angular';
// import { IgxTextHighlightModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [IgxTextHighlightModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxTextHighlightDirective` をスタンドアロンの依存関係としてインポートできます。

```typescript
// home.component.ts

import { IgxTextHighlightDirective, IgxTextHighlightService } from 'igniteui-angular';
// import { IgxTextHighlightDirective, IgxTextHighlightService } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <div
      igxTextHighlight
      [value]="html"
      [groupName]="'group1'"
      [containerClass]="'search-text'"
      class="search-text"
    >
      {{ html }}
    </div>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IgxTextHighlightDirective],
})
export class HomeComponent {
  constructor(public textHighlightService: IgxTextHighlightService) {}
}
```

Ignite UI for Angular Text Highlight モジュールまたはディレクティブをインポートしたので、`igxTextHighlight` の使用を開始できます。

## Angular Text Highlight ディレクティブの使用

次にテキストの様々な部分を強調表示するためにハイライトできる検索ボックスを作成します。Ignite UI for Angular の [InputGroup](input-group.md) コンポーネントは、一致のクリア、次の一致、前の一致へ移動するためのボタン、検索で大文字と小文字を区別を指定するボタンを追加します。また一致がいくつ見つかったかを示すラベルがあります。

```html
<div class="search-container">
  <igx-input-group type="search" class="input-group">
    <igx-prefix>
      <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
      <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()"
        >clear</igx-icon
      >
    </igx-prefix>

    <input
      #search1
      id="search1"
      igxInput
      placeholder="Search"
      autocomplete="off"
      [(ngModel)]="searchText"
      (ngModelChange)="onTextboxChange()"
      (keydown)="searchKeyDown($event)"/>
    <igx-suffix>
      <div class="caseSensitiveButton">
        <button
          igxIconButton="flat"
          igxRipple
          igxRippleCentered="true"
          (click)="updateSearch()"
          [style.background]="caseSensitive ? 'rgb(73, 180, 254)' : 'transparent'">
          <igx-icon class="caseSensitiveIcon" fontSet="material">text_fields</igx-icon>
        </button>
      </div>
      <ng-container *ngIf="searchText.length > 0">
        <span>
          <ng-container *ngIf="matchCount > 0">
            {{ index + 1 }} of {{ matchCount }} results
          </ng-container>
          <ng-container *ngIf="matchCount == 0"> No results </ng-container>
        </span>
      </ng-container>

      <div class="searchButtons">
        <button
          igxIconButton="flat"
          igxRipple
          igxRippleCentered="true"
          (click)="findPrev()"
          [disabled]="!canMoveHighlight">
          <igx-icon fontSet="material">navigate_before</igx-icon>
        </button>
        <button
          igIconButton="flat"
          igxRipple
          igxRippleCentered="true"
          (click)="findNext()"
          [disabled]="!canMoveHighlight">
          <igx-icon fontSet="material">navigate_next</igx-icon>
        </button>
      </div>
    </igx-suffix>
  </igx-input-group>
</div>
```

div テキストと IgxTextHighlight ディレクティブを追加します。値入力を div のテキストにバインドする必要があることに注意してください。div テキストに補間も使用します。

```html
<div
  igxTextHighlight
  [value]="html"
  [groupName]="'group1'"
  [containerClass]="'search-text'"
  class="search-text">
   {{html}}
</div>
```

コンポーネント テンプレートのバインディングに使用する以下のフィールドをコンポーネントの .ts ファイルに追加します。

```typescript
@Component({
    ...
})
export class HomeComponent {
    public html = '...';

    @ViewChild(IgxTextHighlightDirective, {read: IgxTextHighlightDirective})
    public highlight: IgxTextHighlightDirective;

    public searchText: string = '';
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;

    public get canMoveHighlight() {
        return this.matchCount > 1;
    }
}
```

次に以下のメソッドを追加すると、ユーザーが検索ボックスに入力したテキストにハイライトを適用でき、アクティブ ハイライト間を移動できます。

```typescript
@Component({
    ...
})
export class HomeComponent {
    constructor(public textHighlightService: IgxTextHighlightService) {}

    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
                ev.preventDefault();
                this.findPrev();
            }
        }
    }

    public onTextboxChange() {
        this.index = 0;
        this.find(0);
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.find(0);
    }

    public clearSearch() {
        this.searchText = '';
        this.find(0);
    }

    private findNext() {
        this.find(1);
    }

    private findPrev() {
        this.find(-1);
    }

    private find(increment: number) {
        if (this.searchText) {
            this.matchCount = this.highlight.highlight(this.searchText, this.caseSensitive);
            this.index += increment;

            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                this.textHighlightService.setActiveHighlight('group1', {
                    columnIndex: 0,
                    index: this.index,
                    page: 0,
                    rowIndex: 0
                });
            }
        } else {
            this.highlight.clearHighlight();
        }
    }
}
```

サンプルが正しく構成された場合、以下のような結果になります。

<code-view style="height: 260px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-1/" >
</code-view>

<div class="divider"></div>

## 複数要素で検索

[`igxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) は、1 つのアクティブ ハイライトを共有する複数の要素内を検索できます。複数の TextHighlight ディレクティブで同じ [`groupName`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#groupName) 値を持つことにより可能になります。サンプルの設定は、前のサンプルの検索ボックスを再利用しますが、今回は div 要素を 2 つ追加します。[`column`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#column) と [`row`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#row) 入力は複数要素がある場合に便利で、この場合は 2 つ目の div に異なる行値があります。

```html
<div
  igxTextHighlight
  [groupName]="'group1'"
  [row]="0"
  [containerClass]="'search-text'"
  [value]="firstParagraph"
  class="search-text">
   {{firstParagraph}}
</div>
<div
  igxTextHighlight
  [groupName]="'group1'"
  [row]="1"
  [containerClass]="'search-text'"
  [value]="secondParagraph"
  class="search-text">
   {{secondParagraph}}
</div>
```

.ts ファイルに `firstParagraph` と `secondParagraph` フィールドがあり、テキスト ハイライト ディレクティブの各値入力にバインドします。ViewChild の代わりに ViewChildren を使用してテンプレートのすべてのハイライトを取得します。

```typescript
public firstParagraph = "...";

public secondParagraph = "...";

@ViewChildren(IgxTextHighlightDirective)
public highlights;
```

.ts ファイルのコードの残りすべてが単一要素の例 (find メソッドの例外) と同一となります。複数の要素があるため、このメソッドの変更が必要になりますが、TextHighlight ディレクティブの数値に関係なくコードを使用できます。

```typescript
@Component({
    ...
})
export class HomeComponent {
    constructor(public textHighlightService: IgxTextHighlightService) {}

    private find(increment: number) {
        if (this.searchText) {
            let count = 0;
            const matchesArray = [];

            this.highlights.forEach((h) => {
                count += h.highlight(this.searchText, this.caseSensitive);
                matchesArray.push(count);
            });

            this.matchCount = count;

            this.index += increment;
            this.index = this.index < 0 ? this.matchCount - 1 : this.index;
            this.index = this.index > this.matchCount - 1 ? 0 : this.index;

            if (this.matchCount) {
                let row;

                for (let i = 0; i < matchesArray.length; i++) {
                    if (this.index < matchesArray[i]) {
                        row = i;
                        break;
                    }
                }

                const actualIndex = row === 0 ? this.index : this.index - matchesArray[row - 1];

                this.textHighlightService.setActiveHighlight('group1', {
                    index: actualIndex,
                    rowIndex: row
                });
            }
        } else {
            this.highlights.forEach((h) => {
                h.clearHighlight();
            });
            this.matchCount = 0;
        }
    }
}
```

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-2/" >
</code-view>

<div class="divider"></div>

## スタイル設定

[`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) ディレクティブは、指定された文字列のすべての発生の色と背景を変更してスタイル設定できます。まず、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`highlight-theme`]({environment:sassApiUrl}/themes#function-highlight-theme) を拡張する新しいテーマを作成し、`$resting-background`、`$resting-color`、`$active-background` と `$active-color` パラメーターを受け取る方法です。

```scss
$dark-highlight: highlight-theme(
  $resting-background: #ffcd0f,
  $resting-color: #292826,
  $active-background: #292826,
  $active-color: #ffcd0f,
);
```

`$resting-background` と `$resting-color` パラメーターは、`$active-background` と `$active-color` パラメーターに基づいてスタイル設定されるアクティブな強調表示の文字列以外、すべての強調表示に適用されます。 

最後にコンポーネントのテーマを**含めます**。

```scss
:host {
  ::ng-deep {
    @include css-vars($dark-highlight);
  }
}
```

> [!NOTE]
> コンポーネントが [`Emulated`](/hemes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、スタイルを適用するには `::ng-deep` を使用してこのカプセル化を解除する必要があります。

### カスタム スタイル

[`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) ディレクティブの [`cssClass`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#cssclass) と [`activeCssClass`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#activecssclass) 入力を利用できます。これらのクラスを [`highlight-theme`]({environment:sassApiUrl}/themes#function-highlight-theme) のスタイルと組み合わせて、優れたユーザー エクスペリエンスを提供できます。

プロパティを持ついくつかの CSS クラスを作成し、上記の入力を使用してそれらを添付します。

```html
<div
  igxTextHighlight
  [cssClass]="'custom-highlight'"
  [activeCssClass]="'custom-active-highlight'">
   {{html}}
</div>
```

```scss
// cssClass
.custom-highlight {
  border: 1px solid #ffcd0f;
}
// activeCssClass
.custom-active-highlight {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);
}
```

上記のように、テーマと組み合わせることもできます。

```scss
:host {
  ::ng-deep {
    @include css-vars($dark-highlight);  
    
    .custom-highlight {
      border: 1px solid #ffcd0f;
    }  

    .custom-active-highlight {
      box-shadow: 0 0 3px 0 rgba(0,0,0, .5);
    }
  }
}
```


### デモ

<code-view style="height: 300px;" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/text-highlight-style/" >
</code-view>

<div class="divider"></div>

## API リファレンス

TextHighlight ディレクティブの API に関する詳細な情報は、以下のリンクのトピックを参照してください。

* [`IgxTextHighlight API`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html)

使用したその他のコンポーネント:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxInputGroupComponent スタイル`]({environment:sassApiUrl}/themes#function-input-group-theme)
<div class="divider"></div>

## その他のリソース

* [Grid 検索](grid/search.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
