---
title: Angular Pivot Grid での行編集 - Ignite UI for Angular
_description: Angular Pivot Grid で行編集を有効にし、CRUD 操作のための強力な API が必要な場合、Ignite UI for Angular Data Grid 行編集コンポーネントをお試しください。
_keywords: row editing, igniteui for angular, インフラジスティックス・ジャパン株式会社
_license: commercial
_language: ja
_canonicalLink: grid/row-editing
---



# Angular Pivot Grid 行編集

Pivot Grid コンポーネントは、Angular CRUD 操作のためのデータ操作と強力な API を提供します。行をクリックして **Enter キー**を押すか、変更する行をダブルクリックします。

## Angular Pivot Grid 行編集の例

以下の手順では、Pivot Grid で行編集を有効にする方法を示します。セル値を変更してから同じ行の他のセルをクリックまたはナビゲーションした場合も **[完了]** ボタンを使用して確定するまで行値を更新しません。または **[キャンセル]** ボタンを使用して破棄します。





> [!NOTE]
> 行が編集モードにある場合、他の行のセルをクリックすると [完了] ボタンが押されたように動作し、前の行の変更をすべての変更をサブミットします。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

## 行編集の使用

`IgxPivotGridModule` を **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import { IgxPivotGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxPivotGridModule],
    ...
})
export class AppModule {}
```

次に Pivot Grid をバインドしたデータソースで定義し、[`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) を true に設定してバインドします。




> [!NOTE]
> プライマリキーは行編集操作で必須です。

> [!NOTE]
> 各列の編集を有効にする必要はありません。Pivot Grid で [`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) プロパティを使用するとプライマリ行以外 `field` プロパティを定義したすべての行が編集可能になります。特定の列の編集を無効にする場合、[`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) 列の入力を false に設定します。






> [!NOTE]
> Pivot Grid は、保留中のセル変更を保持するプロバイダー [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) を行ステートをサブミットまたはキャンセルするまで内部使用します。

## 配置

- オーバーレイのデフォルトの位置は編集モードで行の下にあります。

- 行の下にスペースがない場合、オーバーレイが行の上に表示されます。

- 一番上または下に表示されると、オーバーレイは閉じられるまでスクロール時にこの位置を保持します。

## 動作

- 行が編集モードの場合、編集が継続します。同じ行のセルがクリックされたかどうか。

- [完了] ボタンをクリックすると行編集を完了し、変更をデータソースまたはトランザクションへサブミットします。更に行が編集モードを完了します。

- [キャンセル] ボタンがをクリックすると現在の行のすべての変更を元に戻し、行編集モードを終了します。

- 行が編集モードにある場合、他の行のセルをクリックすると現在の行編集を終了し、行の新規の変更をサブミット ([完了] ボタンをクリックした場合と同じ) します。フォーカスのある新しいセルが編集可能かどうか、新しい行が編集モードに入るかどうか、セルが編集できない場合は前の行のみ編集モードを終了します。

- 行が編集モードの時にグリッドがスクロールされると行が表示領域外になりますが、Pivot Grid は編集モードのままです。Pivot Grid をスクロールすると編集行は再度表示されますが編集行が編集モードのままになります。Pivot Grid 以外をクリックしたときにセルも編集モードに残ります。

- **ソート**、**フィルタリング**、**検索**、および**非表示**操作を実行すると、現在の行のすべての変更が元に戻され、行の編集モードを終了します。

- **ページング**、**サイズ変更**、**ピン固定**、**移動**操作を実行すると、編集モードを終了して最新の値を送信します。

- 編集した各セルは行編集が終了するまで変更スタイルを取得します。Pivot Grid がトランザクションで提供されない場合の動作です。トランザクションが有効な場合、すべての変更がコミットされるまでセル編集スタイルが適用されます。


## キーボード ナビゲーション

- `Enter` と `F2` で行編集モードに入ります。

- `Esc` で行編集モードを終了し、行の編集モード時に変更されたいずれのセルの変更もサブミットしません。

- `Tab` で行の編集可能なセルから次のセルへフォーカスを移動、右端の編集可能なセルから [キャンセル] と [完了] ボタンへ移動します。[完了] ボタンからのナビゲーションは現在の編集行内で編集可能なセルへ移動します。


## 機能の統合

- すべてのデータ変更操作は行変更操作を終了し、現在の行の変更をサブミットします。ソート、グループの変更、フィルタリング条件、ページングなどが含まれます。

- 行編集が終了した後に集計が更新されます。同様にソートやフィルタリングなどの他の機能が有効になります。



## 行編集オーバーレイのカスタマイズ

### テキストのカスタマイズ

`igxRowEditTextDirective` を使用した行編集オーバーレイのテキストのカスタマイズが可能です。
`rowChangesCount` プロパティが公開されて変更されたセルのカウントを保持します。

```html
<ng-template igxRowEditText let-rowChangesCount>
 Changes: {{rowChangesCount}}
</ng-template>
 ```

### ボタンのカスタマイズ

`igxRowEditActionsDirective` を使用して行編集オーバーレイのボタンのカスタマイズが可能です。
キーボード ナビゲーションにボタンを含める場合、各ボタンに `igxRowEditTabStopDirective` が必要です。

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

## スタイル設定

[Ignite UI for Angular テーマ ライブラリ](../themes/index.md)を使用して、行編集オーバーレイを大幅に変更できます。
行編集オーバーレイは複合要素です。UI は、他の 2 つのコンポーネントで構成されています。
    - コンテンツをレンダリングするための [`igx-banner`](../banner.md)
    - [`igx-button`](../button.md) はデフォルトのテンプレートでレンダリングされます (`[完了]` ボタンと `[キャンセル]` ボタンの場合)。

以下の例では、これら 2 つのコンポーネントのスタイル設定オプション ([`ボタンのスタイル設定`](../button.md#スタイル設定) & [`バナーのスタイル設定`](../banner.md#スタイル設定)) を使用して、IgxPivotGrid の行編集のエクスペリエンスをカスタマイズします。
次に、現在のセルのエディターと背景をより明確にするためにスタイルを設定します。セル スタイリングの詳細については、[こちら](cell-editing.md#スタイル設定)をご覧ください。

### テーマのインポート

行編集バナーのスタイルを設定する最も簡単な方法は、`アプリ`のグローバル スタイル ファイル (通常 `styles.scss`) でスタイルを定義することです。
はじめに `themes/index` ファイルをインポートすることにより、Ignite UI for Angular Sass フレームワークの強力なツールへアクセスできるようになります。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

テーマ ファイルをインポートしたら、カスタム テーマを作成できます。

#### テーマの定義

行編集の背景にカスタムの [`banner テーマ`]({environment:sassApiUrl}/themes#function-banner-theme)を定義して、定義済みのパレットの 1 つである `$purple-palette` を使用することができます。

```scss
$banner-theme: banner-theme(
  $banner-background: #e3e3e3,
  $banner-message-color: color($purple-palette, "secondary", 600)
);
```

ここでは、色を生成するために `my-banner-palette` を [`igx-color`]({environment:sassApiUrl}/palettes#function-color) (テーマ ライブラリによって公開) と共に使用しています。

### テーマを含む

次に Sass `@include` ステートメントを使用してテーマを適用します。新しく定義された `$banner-theme` を [`tokens mixin`]({environment:sassApiUrl}/themes#mixin-tokens) で渡します。

```scss
:host {
  @include tokens($banner-theme);
}
```

### コンポーネント スタイル

行編集オーバーレイは他の多くのコンポーネントのテーマを利用するため、グローバル スタイルでスタイル設定するとアプリケーションの他の部分 (バナー、ボタンなど) に影響を与える可能性があります。それを防ぐ最善の方法は、バナー テーマを適用する特定のコンポーネントのスタイル ファイルにスコープすることです。

>[!NOTE]
>コンポーネントが [`Emulated`](../themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、グリッド行編集オーバーレイのスタイルを設定するには、`::ng-deep`を使用してこのカプセル化を解除する必要があります。

```scss
// custom.component.scss

:host {
  ::ng-deep {
    @include tokens($banner-theme);
  }
}
```

上記の構文で、カスタム バナー テーマはグリッドの行編集オーバーレイに適切に適用されます。

### カスタム テンプレート

行編集オーバーレイをさらにカスタマイズするには、`[完了]` ボタンと `[キャンセル]` ボタンを別々にスタイル設定できるようにカスタム テンプレートを渡します。

```html
<!-- in component.html -->
<igx-pivot-grid>
    <ng-template igxRowEditActions let-endRowEdit>
        <div class="custom-buttons">
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                <igx-icon>clear</igx-icon>
            </button>
            <button igxIconButton="flat" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                <igx-icon>check</igx-icon>
            </button>
        </div>
    </ng-template>
</igx-pivot-grid>
```

カスタム ボタンを定義した後は、[`flat-icon-button-theme`]({environment:sassApiUrl}/themes#function-flat-icon-button-theme) を使用してスタイルを設定できます。You can learn more about `igx-icon-button` styling in the [Icon Button Styling documentation](../icon-button.md#icon-button-styling).`[完了]` と `[キャンセル]` のカスタム テーマを作成できます。

```scss
// custom.component.scss
...

$button-theme: flat-icon-button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
  @include tokens($button-theme);
}
```

`@include` ステートメントを `.custom-buttons` でスコープ設定して、`[完了]` ボタンと `[キャンセル]` ボタンにのみ適用されるようにします。

### デモ

バナーとボタンのスタイルを設定後、[編集モードのセル](cell-editing.md#スタイル設定)のカスタム スタイルも定義します。以下は、すべてのスタイルを組み合わせた結果です。








>[!NOTE]
>このサンプルは、`Change Theme` (テーマの変更) から選択したグローバル テーマに影響を受けません。

## 既知の問題と制限

- グリッドに `primaryKey` が設定されておらず、リモート データ シナリオが有効になっている場合 (ページング、ソート、フィルタリング、スクロール時に、グリッドに表示されるデータを取得するためのリモート サーバーへのリクエストがトリガーされる場合)、データ要求が完了すると、行は次の状態を失います:
  - 行の選択
  - 行の展開/縮小
  - 行の編集
  - 行のピン固定

## API リファレンス

- [rowEditable]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable)
- [onRowEditEnter]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#onRowEditEnter)
- [onRowEdit]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#onRowEdit)
- [rowEditDone]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditDone)
- [onRowEditCancel]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#onRowEditCancel)
- [endEdit]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#endEdit)
- [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
- [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
- [primaryKey]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#primaryKey)
- [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)

## その他のリソース

<div class="divider--half"></div>

- [igxGrid を使用して CRUD 操作の構築](../general/how-to/how-to-perform-crud.md)
- [Pivot Grid 概要](pivot-grid.md)
- [Pivot Grid 編集](editing.md)
- [Pivot Grid トランザクション](batch-editing.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
