---
title: アクション ストリップ
_description: アクション ストリップは、1 つ以上のアクションのテンプレート領域を表します。アクション ストリップはオーバーレイするため、相対コンテナー内に配置する必要があります。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular ActionStrip コンポーネント, Angular ActionStrip ディレクティブ, Angular ActionStrip コントロール
_language: ja
---

# Action Strip
<p class="highlight">
Ignite UI for Angular Action Strip コンポーネントは、ホバーなどのユーザー操作の際に特定のターゲット コンテナーの上に追加の UI および機能を表示できる 1 つ以上のアクションを含むオーバーレイ領域を提供します。アクション ストリップはコンテナーをオーバーレイしようとして絶対的に配置されるため、コンテナーは相対的に配置する必要があります。主な操作とターゲットコ ンテナーへのユーザー アクセスはアクション ストリップでオーバーラップされますが、使用できます。
</p>

<div class="divider--half"></div>

## Angular Action Strip の例


<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-paragraph" alt="Angular Action Strip の例">
</code-view>


<div class="divider--half"></div>

## 使用方法
アクション ストリップを初期化して正しく配置するには、相対的に配置されたコンテナー内に配置する必要があります。

```html
<div style="position:relative; width:100px; height:100px;">
    <igx-action-strip>
        <button igxButton (click)="makeTextBold()">
            <igx-icon>format_bold</igx-icon>
        </button>
    </igx-action-strip>
<div>
```

デフォルトでアクション ストリップは表示されますが、これは [`hidden`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#hidden) の @Input プロパティで設定できます。

### メニューのルック アンド フィール
3 つ以上のアクション項目が表示される場合に、[`IgxActionStripMenuItem`]({environment:angularApiUrl}/classes/igxactionstripmenuitemdirective.html) ディレクティブの使用をお勧めします。`*igxActionStripMenuItem` 構造ディレクティブでマークされたアクション ストリップ内の項目はドロップダウンで表示され、`[その他]` ボタン (最後のアクションを表す 3 つのドット) を切り替えると表示されます。

```html
<div style="position:relative; width:100px; height:100px;">
    <igx-action-strip>
        <button *igxActionStripMenuItem igxButton (click)="alignTextLeft()">
            <igx-icon>format_align_left</igx-icon>
        </button>
        <button *igxActionStripMenuItem igxButton (click)="alignTextCenter()">
            <igx-icon>format_align_center</igx-icon>
        </button>
        <button *igxActionStripMenuItem igxButton (click)="alignTextRight()">
            <igx-icon>format_align_right</igx-icon>
        </button>
    </igx-action-strip>
</div>
```


<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-paragraph-menu" >
</code-view>


### アクション ストリップの再利用

同じアクション ストリップ インスタンスは、アクションを同時に表示する必要がない限り、ドキュメント内の複数の場所で使用できます。
アクション ストリップは [`context`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#context) によって親コンテナーを変更できます。
[`show`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#show) API メソッドを使用し、`context` を引数として渡すことを推奨します。`context` はコンポーネントのインスタンスで、`ElementRef` 型のアクセス可能な `element` プロパティを持つ必要があります。

>注: アクション ストリップを `element` に追加するために、`show` API メソッドは [Angular Renderer2](https://angular.io/api/core/Renderer2) を使用します。


## グリッドでの使用

アクション ストリップは、IgxGrid の追加機能と UI を提供します。
これはグリッド アクション コンポーネントで利用でき、2 つのデフォルト コンポーネントを提供します。
- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - グリッド編集に関連する機能と UI を含みます。グリッドの `rowEditable` オプションの値と行の削除が許可されているかどうかに基づいて、セルまたは行の編集モードをすばやく切り替えることができます。
- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - グリッドの行ピン固定に関連する機能と UI を含みます。行をすばやくピン固定し、ピン固定された行とその無効な行の間を移動できます。

```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-grid>
```
>注: これらのコンポーネントは [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html) を継承します。カスタム グリッド アクション コンポーネントを作成する場合、`IgxGridActionsBaseDirective` も継承する必要があります。

>注: `IgxActionStripComponent` がグリッドの子コンポーネントである場合、行をホバーするとUI が自動的に表示されます。

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-action-strip" >
</code-view>


## スタイル設定

アクション ストリップをカスタマイズするには、すべてのスタイリング関数とミックスインが置かれている `index` ファイルをインポートする必要があります。
```scss
@import '~igniteui-angular/lib/core/styles/themes/index'
```
次に、`igx-action-strip-theme` を拡張する新しいテーマを作成し、変更するパラメーターを渡します。
```scss
$custom-strip: igx-action-strip-theme(
    $background: rgba(150, 133, 143, 0.4),
    $actions-background: rgba(109, 121, 147, 0.6),
    $color:  null,
    $delete-action: null,
    $actions-border-radius: 0
);
```

最後に新しく作成されたコンポーネントのテーマをアプリケーションに含めます。

`$legacy-support` が `false` (デフォルト) に設定されている場合、css 変数を以下のように含めます。
```scss
@include igx-css-vars($custom-strip);
```

`$legacy-support` が `true` に設定されている場合、コンポーネントのテーマを以下のように含めます。
```scss
@include igx-action-strip($custom-strip);
```


<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-styling" >
</code-view>


## 既知の問題と制限

- IE11 で Action Strip コンポーネントを使用するには、Angular アプリケーションの polyfill.ts に配列ポリフィルを明示的にインポートする必要があります。

    ```typescript
    import 'core-js/es7/array';
    ```

## API と スタイル リファレンス

アクション ストリップの API に関する詳細な情報は、以下のリンクのトピックを参照してください。
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

以下の定義済み CSS スタイルを使用してアクション ストリップ レイアウトを構成しました。

* [`IgxActionStripComponent スタイル`]({environment:sassApiUrl}/index.html#function-igx-action-strip-theme)

アクション ストリップで使用できるその他のコンポーネントとディレクティブ。

* [`IgxActionStripMenuItemDirective`]({environment:angularApiUrl}/classes/igxmenuitemdirective.html)
* [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxeditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)


<div class="divider"></div>

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
