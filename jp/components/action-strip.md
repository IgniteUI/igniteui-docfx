---
title: アクション ストリップ
_description: アクション ストリップは、1 つ以上のアクションのテンプレート領域を表します。アクション ストリップはオーバーレイするため、相対コンテナー内に配置する必要があります。
_keywords: Angular Action Strip コンポーネント, Angular Action Strip ディレクティブ, Angular Action Strip コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, Angular UI コンポーネント
_language: ja
---

# Angular Action Strip (アクション ストリップ) ディレクティブの概要

<p class="highlight">
Ignite UI for Angular Action Strip コンポーネントは、ホバーなどのユーザー操作の際に特定のターゲット コンテナーの上に追加の UI および機能を表示できる 1 つ以上のアクションを含むオーバーレイ領域を提供します。アクション ストリップはコンテナーをオーバーレイしようとして絶対的に配置されるため、コンテナーは相対的に配置する必要があります。主な操作とターゲットコ ンテナーへのユーザー アクセスはアクション ストリップでオーバーラップされますが、使用できます。
</p>

## Angular Action Strip の例

<code-view style="height: 400px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-paragraph" alt="Angular Action Strip の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Action Strip を使用した作業の開始

Ignite UI for Angular Action Strip コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxActionStripModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxActionStripModule } from 'igniteui-angular';
// import { IgxActionStripModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxActionStripModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxActionStripComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_ACTION_STRIP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/action-strip/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

...
import { IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
// import { IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <div style="width:100px; height:100px;">
        <igx-action-strip>
            <button igxButton (click)="makeTextBold()">
                <igx-icon>format_bold</igx-icon>
            </button>
        </igx-action-strip>
    <div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_ACTION_STRIP_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    /* or imports: [IgxActionStripComponent, IgxButtonDirective, IgxIconComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Action Strip モジュールまたはディレクティブをインポートしたので、`igx-action-strip` コンポーネントの基本構成を開始できます。

## Angular Action Strip コンポーネントの使用

アクション ストリップを初期化して正しく配置するには、相対的に配置されたコンテナー内に配置する必要があります。

```html
<div style="position:relative; width:100px; height:100px;">
  <igx-action-strip>
    <button igxButton (click)="makeTextBold()">
      <igx-icon>format_bold</igx-icon>
    </button>
  </igx-action-strip>
</div>
```

デフォルトでアクション ストリップは表示されませんが、これは [`hidden`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html#hidden) の @Input プロパティで設定できます。

### メニューのルック アンド フィール

3 つ以上のアクション項目が表示される場合に、[`IgxActionStripMenuItem`]({environment:angularApiUrl}/classes/igxactionstripmenuitemdirective.html) ディレクティブの使用をお勧めします。`*igxActionStripMenuItem` 構造ディレクティブでマークされたアクション ストリップ内の項目はドロップダウンで表示され、[その他] ボタン (最後のアクションを表す 3 つのドット) を切り替えると表示されます。

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

> [!NOTE]
> アクション ストリップを `element` に追加するために、`show` API メソッドは [Angular Renderer2](https://angular.io/api/core/Renderer2) を使用します。

## グリッドでの使用

アクション ストリップは、IgxGrid の追加機能と UI を提供します。
これはグリッド アクション コンポーネントで利用でき、2 つのデフォルト コンポーネントを提供します。

- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - グリッド編集に関連する機能と UI を含みます。グリッドの `rowEditable` オプションの値と行の削除が許可されているかどうかに基づいて、セルまたは行の編集モードをすばやく切り替えることができます。
- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - グリッドの行ピン固定に関連する機能と UI を含みます。行をすばやくピン固定し、ピン固定された行とその無効な行の間を移動できます。

```html
<igx-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
  <igx-column *ngFor="let c of columns" [field]="c.field"> </igx-column>

  <igx-action-strip #actionStrip>
    <igx-grid-pinning-actions></igx-grid-pinning-actions>
    <igx-grid-editing-actions></igx-grid-editing-actions>
  </igx-action-strip>
</igx-grid>
```

> [!NOTE]
> これらのコンポーネントは [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html) を継承します。カスタム グリッド アクション コンポーネントを作成する場合、`IgxGridActionsBaseDirective` も継承する必要があります。

> [!NOTE]
> `IgxActionStripComponent` がグリッドの子コンポーネントである場合、行をホバーするとUI が自動的に表示されます。

<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-action-strip" >
</code-view>

> [!NOTE]
> グリッド コンポーネントで ActionStrip を使用する方法の詳細については、[こちら](/components/grid/row-actions.html)を参照してください。

## スタイル設定

アクション ストリップをカスタマイズするには、すべてのスタイリング関数とミックスインが置かれている `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

次に、`action-strip-theme` を拡張する新しいテーマを作成し、変更するパラメーターを渡します。

```scss
$custom-strip: action-strip-theme(
  $background: rgba(109, 121, 147, 0.2),
  $actions-background: rgba(#011627, 0.9),
  $actions-border-radius: 0
);
```

最後に新しく作成されたコンポーネントのテーマをアプリケーションに含めます。

```scss
@include css-vars($custom-strip);
```

<code-view style="height: 400px;" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/menus/action-strip-styling" >
</code-view>

## API と スタイル リファレンス

アクション ストリップの API に関する詳細な情報は、以下のリンクのトピックを参照してください。

* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

以下の定義済み CSS スタイルを使用してアクション ストリップ レイアウトを構成しました。

* [`IgxActionStripComponent スタイル`]({environment:sassApiUrl}/themes#function-action-strip-theme)

アクション ストリップで使用できるその他のコンポーネントとディレクティブ。

* [`IgxGridActionsBaseDirective`]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)

<div class="divider"></div>

## テーマの依存関係

* [IgxButton テーマ]({environment:sassApiUrl}/themes#function-button-theme)
* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)
* [IgxDropDown テーマ]({environment:sassApiUrl}/themes#function-drop-down-theme)
* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
