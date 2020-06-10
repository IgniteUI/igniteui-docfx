---
title: TextHighlight ディレクティブ - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular TextHighlight ディレクティブは、テキスト部分のハイライトやアクティブ ハイライトがあります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コンポーネント, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular TextHighlight ディレクティブ, IgxTextHighlight ディレクティブ
_language: ja
---

## TextHighlight ディレクティブ

Ignite UI for Angular の [`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) ディレクティブは、テキストのハイライト、大文字と小文字の区別のオプション、完全一致のみのハイライトをサポートします。既にハイライトしている部分を含む、テキストのハイライトをアクティブに保持できます。

### TextHighlight デモ
<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" frameborder="0" seamless width="100%" height="100%" src="{environment:demosBaseUrl}/data-display/text-highlight-1" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

Ignite UI for Angular TextHighlight ディレクティブ を初期化するには、以下のコマンドを実行して Ignite UI for Angular をインストールする必要があります。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、[はじめに](general/getting_started.md)トピックををご覧ください。

次に、**app.module.ts** ファイルに `IgxTextHighlightModule` とアプリケーションに必要な他の Ignite UI for Angular モジュールをインポートします。

```typescript
// app.module.ts

...
import { IgxButtonModule, IgxInputGroupModule,
        IgxIconModule, IgxRippleModule, IgxTextHighlightModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxButtonModule, IgxInputGroupModule,
                    IgxIconModule, IgxRippleModule, IgxTextHighlightModule],
    ...
})
export class AppModule {}
```

次にテキストの異なる部分のハイライトに使用できる検索ボックスを作成します。Ignite UI for Angular の [InputGroup](input_group.md) コンポーネントは、一致のクリア、次の一致、前の一致へ移動するためのボタン、検索で大文字と小文字を区別を指定するボタンを追加します。また一致がいくつ見つかったかをを示すラベルがあります。

```html
<div class="search-container">
    <igx-input-group type="search" class="input-group">
        <igx-prefix>
            <igx-icon *ngIf="searchText.length == 0">search</igx-icon>
            <igx-icon *ngIf="searchText.length > 0" (click)="clearSearch()">clear</igx-icon>
        </igx-prefix>

        <input #search1 id="search1" igxInput placeholder="Search" autocomplete="off" [(ngModel)]="searchText" (ngModelChange)="onTextboxChange()"
                (keydown)="searchKeyDown($event)" />
        <igx-suffix>
            <div class="caseSensitiveButton">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="updateSearch()"
                        [igxButtonBackground]="caseSensitive? 'rgb(73, 180, 254)' : 'transparent'">
                    <igx-icon class="caseSensitiveIcon" fontSet="material">text_fields</igx-icon>
                </button>
            </div>
        </igx-suffix>

        <igx-suffix *ngIf="searchText.length > 0">
            <div>
                <span *ngIf="matchCount > 0">
                    {{ index + 1 }} of {{ matchCount }} results
                </span>
                <span *ngIf="matchCount == 0">
                    No results
                </span>
            </div>
            <div class="searchButtons">
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findPrev()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material">navigate_before</igx-icon>
                </button>
                <button igxButton="icon" igxRipple igxRippleCentered="true" (click)="findNext()" [disabled]="!canMoveHighlight">
                    <igx-icon fontSet="material">navigate_next</igx-icon>
                </button>
            </div>
        </igx-suffix>
    </igx-input-group>
</div>
```
div テキストと IgxTextHighlight ディレクティブを追加します。値入力を div のテキストにバインドする必要があることに注意してください。div テキストに補間も使用します。

```html
    <div igxTextHighlight
         [value]="html"
         [groupName]="'group1'"
         [containerClass]="'search-text'"
         class="search-text">
        {{html}}
    </div>
```

コンポーネント テンプレートのバインディングに使用する以下のフィールドをコンポーネントの .ts ファイルに追加します。

``` typescript
    public html = "...";

    @ViewChild(IgxTextHighlightDirective, {read: IgxTextHighlightDirective})
    public highlight: IgxTextHighlightDirective;

    public searchText: string = "";
    public matchCount: number = 0;
    public caseSensitive: boolean = false;
    public index: number = 0;


    public get canMoveHighlight() {
        return this.matchCount > 1;
    }
```

次に以下のメソッドを追加すると、ユーザーが検索ボックスに入力したテキストにハイライトを適用でき、アクティブ ハイライト間を移動できます。

``` typescript
    public searchKeyDown(ev) {
        if (this.searchText) {
            if (ev.key === "Enter" || ev.key === "ArrowDown" || ev.key === "ArrowRight") {
                ev.preventDefault();
                this.findNext();
            } else if (ev.key === "ArrowUp" || ev.key === "ArrowLeft") {
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
        this.searchText = "";
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
                IgxTextHighlightDirective.setActiveHighlight("group1", {
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
```

サンプルが正しく構成された場合、以下のような結果になります。

<div class="sample-container loading" style="height: 260px;">
    <iframe id="text-highlight-1-iframe" data-src='{environment:demosBaseUrl}/data-display/text-highlight-1' width="100%" height="100%" seamless="" frameBorder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-1-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider"></div>

### 複数要素で検索
[`igxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) は、1 つのアクティブ ハイライトを共有する複数の要素内を検索できます。複数の TextHighlight ディレクティブで同じ [`groupName`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#groupname) 値を持つことにより可能になります。サンプルの設定は、前のサンプルの検索ボックスを再利用しますが、今回は div 要素を 2 つ追加します。 [`column`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#column) と [`row`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#row) 入力は複数要素がある場合に便利で、この場合は 2 つ目の div に異なる行値があります。

```html
    <div igxTextHighlight
         [groupName]="'group1'"
         [row]="0"
         [containerClass]="'search-text'"
         [value]="firstParagraph"
         class="search-text">
        {{firstParagraph}}
    </div>
    <div igxTextHighlight
         [groupName]="'group1'"
         [row]="1"
         [containerClass]="'search-text'"
         [value]="secondParagraph"
         class="search-text">
        {{secondParagraph}}
    </div>
```
.ts ファイルに firstParagraph と secondParagraph フィールドがあり、テキスト ハイライト ディレクティブの各値入力にバインドします。ViewChild の代わりに ViewChildren を使用してテンプレートのすべてのハイライトを取得します。

```typescript
    public firstParagraph = "...";

    public secondParagraph = "...";

    @ViewChildren(IgxTextHighlightDirective)
    public highlights;
```
.ts ファイルのコードの残りすべてが単一要素の例 (find メソッドの例外) と同一となります。複数の要素があるため、このメソッドの変更が必要になりますが、TextHighlight ディレクティブの数値に関係なくコードを使用できます。

```typescript
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

                IgxTextHighlightDirective.setActiveHighlight("group1", {
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
```

<div class="sample-container loading" style="height: 400px;">
    <iframe id="text-highlight-2-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/text-highlight-2" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>

<div class="divider"></div>

### スタイル設定

[`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) ディレクティブは、指定された文字列のすべての発生の色と背景を変更してスタイル設定できます。まず、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

最も簡単な方法は、[`igx-highlight-theme`]({environment:sassApiUrl}/index.html#function-igx-highlight-theme) を拡張する新しいテーマを作成し、`$resting-background`、 `$resting-color`、 `$active-background` と `$active-color`パラメーターを受け取る方法です。

```scss
$dark-highlight: igx-highlight-theme(
    $resting-background: #FFCD0F,
    $resting-color: #292826,
    $active-background: #292826,
    $active-color: #FFCD0F
);
```

`$resting-background` と `$resting-color` パラメーターは、`$active-background` と `$active-color`パラメーターに基づいてスタイル設定されるアクティブな強調表示の文字列以外、すべての強調表示に適用されます。 

最後にコンポーネントのテーマを**含めます**。

```scss
@include igx-highlight($dark-highlight);
```

>[!NOTE]
>コンポーネントが [`Emulated`](themes/component-#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化を`ペネトレーション`する必要があります。

```scss
:host {
    ::ng-deep {
        @include igx-highlight($dark-highlight);
    }
}
```

#### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用して色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: igx-palette($primary: $black-color, $secondary: $yellow-color);
```

次に [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取得できます。

```scss
$dark-highlight: igx-highlight-theme(
    $resting-background: igx-color($dark-palette, "secondary", 400),
    $resting-color: igx-color($dark-palette, "primary", 400),
    $active-background: igx-color($dark-palette, "primary", 400),
    $active-color: igx-color($dark-palette, "secondary", 400)
);
```

>[!NOTE]
>`igx-color` と `igx-palette` は色の生成や取得のための関数です。使い方の詳細については [`パレット`](themes/palette.md) のトピックをご覧ください。

#### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/schemas.md) の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネントに提供されている 2 つの定義済みスキーマの 1 つを拡張します。この場合、[`dark-highlight`]({environment:sassApiUrl}/index.html#variable-_dark-highlight) スキーマ。

```scss
 // Extending the dark highlight schema.
$dark-highlight-schema: extend($_dark-highlight,
    (
        resting-background: (
            igx-color: ("secondary", 400)
        ),
        resting-color: (
            igx-color: ("primary", 400)
        ),
        active-background: (
            igx-color: ("primary", 400)
        ),
        active-color: (
            igx-color: ("secondary", 400)
        )
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) のいずれかを**拡張**する必要があります。この方法は、基本的にカスタム スキーマでコンポーネントをポイントし、その後それぞれのコンポーネントテーマに追加します。

```scss
// Extending the global dark-schema
$custom-dark-schema: extend($dark-schema,(
    igx-highlight: $dark-highlight-schema
));

// Defining highlight-theme with the global dark schema
$dark-highlight: igx-highlight-theme(
  $palette: $dark-palette,
  $schema: $custom-dark-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

#### カスタム スタイル

[`IgxTextHighlight`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html) ディレクティブの [`cssClass`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#cssclass) と [`activeCssClass`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html#activecssclass) 入力を利用できます。これらのクラスを [`igx-highlight-theme`]({environment:sassApiUrl}/index.html#function-igx-highlight-theme) のスタイルと組み合わせて、優れたユーザー エクスペリエンスを提供できます。

プロパティを持ついくつかの CSS クラスを作成し、上記の入力を使用してそれらを添付します。

```html
<div igxTextHighlight
     [value]="html"
     [groupName]="'group1'"
     [cssClass]="'custom-highlight'"
     [activeCssClass]="'custom-active-highlight'">
    {{html}}
</div>
```

```scss
.custom-highlight {
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
}
.custom-active-highlight {
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
}
```

上記のように、テーマと組み合わせることもできます。

```scss
:host {
    ::ng-deep {
       @include igx-highlight($dark-highlight);

       .custom-highlight {
            box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
       }
       .custom-active-highlight {
            box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
        }
   }
}
```

#### デモ

<div class="sample-container loading" style="height: 300px;">
    <iframe id="text-highlight-style-iframe" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/data-display/text-highlight-style" class="lazyload no-theming"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="text-highlight-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider"></div>

### API リファレンス

TextHighlight ディレクティブの API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* [`IgxTextHighlight API`]({environment:angularApiUrl}/classes/igxtexthighlightdirective.html)

使用したその他のコンポーネント:

* [`IgxInputGroupComponent`]({environment:angularApiUrl}/classes/igxinputgroupcomponent.html)
* [`IgxInputGroupComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-input-group-theme)

<div class="divider"></div>

### その他のリソース
* [Grid 検索](grid/search.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
