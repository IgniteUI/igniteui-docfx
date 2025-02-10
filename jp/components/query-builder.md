---
title: Angular Query Builder コンポーネント - Ignite UI for Angular
_description: Angular Query Builder (クエリ ビルダー) を使用すると、ユーザーは優れた UI エクスペリエンスを備えた Angular アプリで複雑なカスタム クエリを作成できます。今すぐお試しください。
_keywords: Angular Query Builder コンポーネント, Angular Query Builder コントロール, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, Angular UI コンポーネント, ネイティブ Angular コンポーネント ライブラリ
_language: ja
---

# Angular Query Builder (クエリ ビルダー) コンポーネントの概要

Angular Query Builder は、[Angular コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular)の一部であり、開発者が指定されたデータ セットに対して複雑なデータ フィルタリング クエリを作成できる機能豊富な UI を提供します。このコンポーネントを使用すると、式のツリーを構築し、エディターと各フィールドのデータ タイプによって決定される条件リストを使用して、それらの間に AND/OR 条件を設定できます。式ツリーは、バックエンドがサポートする形式のクエリに簡単に変換できます。

<p class="highlight">

[`IgxQueryBuilderComponent`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html) コンポーネントは UI を使用して複雑なクエリを作成する方法を提供します。AND/OR 演算子、条件、および値を指定すると、クエリを記述する式ツリーが作成されます。 

</p>

## Angular Query Builder の例

この Angular Query Builder の例を作成して、Angular Query Builder コンポーネントのデフォルト機能を紹介しました。プラス ボタンをクリックして、条件、「and」グループ、および「or」グループを追加します。グループ解除または削除するには、サイド バーに移動します。

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-sample-1" alt="Angular Query Builder の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Query Builder を使用した作業の開始

Ignite UI for Angular Query Builder コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxQueryBuilderModule` をインポートします。

```typescript
// app.module.ts

import { IgxQueryBuilderModule } from 'igniteui-angular';
// import { IgxQueryBuilderModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxQueryBuilderModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxQueryBuilderComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_QUERY_BUILDER_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/query-builder/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_QUERY_BUILDER_DIRECTIVES, FilteringExpressionsTree, FieldType } from 'igniteui-angular';
// import { IGX_QUERY_BUILDER_DIRECTIVES, FilteringExpressionsTree, FieldType } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-query-builder #queryBuilder
        [fields]="fields"
        [(expressionTree)]="expressionTree"
        (expressionTreeChange)="onExpressionTreeChange()">
    </igx-query-builder>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_QUERY_BUILDER_DIRECTIVES]
    /* or imports: [IgxQueryBuilderComponent] */
})
export class HomeComponent {
    public expressionTree: FilteringExpressionsTree;
    public fields: FieldType [];

    public onExpressionTreeChange() {
        ...
    }
}
```

Ignite UI for Angular Query Builder モジュールまたはディレクティブをインポートしたので、`igx-query-builder` コンポーネントの使用を開始できます。

## Angular Query Builder の使用

最初に式木が設定されていない場合は、[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) で結合された条件のグループを作成することから開始します。その後、条件またはサブグループを追加できます。 

条件、フィールド、dataType フィールドに基づくオペランド、およびオペランドが単項でない場合の値を追加します。条件が確定すると、条件情報を含むチップが表示されます。チップをホバーまたはクリックすると、チップを変更したり、その直後に別の条件やグループを追加したりできます。

複数の条件チップを選択すると、グループを作成したりクエリを削除したりするためのオプションを含むコンテキストメニューが表示されます。選択した条件でグループを作成することを選択した場合、一番上に選択した条件が配置された場所に新しく作成されたグループが表示されます。

グループを選択するために、リンク条件 ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)) に基づいて色付けされた垂直線をクリックすることもできます。単一のグループが選択されている場合、ロジックを変更、グループ解除、または削除するオプションを含むコンテキスト メニューが表示されます。

コンポーネントの使用を開始するには、[`fields`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#fields) プロパティに、フィールド名とそのデータ タイプを説明する配列を追加します。データ タイプに基づいて対応するオペランドを自動的に割り当てます。
クエリ ビルダーには [`expressionTree`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#expressionTree) 入力プロパティがあります。コントロールの初期状態を設定するために使用できます。

```typescript
ngAfterViewInit(): void {
    const tree = new FilteringExpressionsTree(FilteringLogic.And);
    tree.filteringOperands.push({
        fieldName: 'ID',
        condition: IgxStringFilteringOperand.instance().condition('contains'),
        searchVal: 'a',
        ignoreCase: true
    });
    const subTree = new FilteringExpressionsTree(FilteringLogic.Or);
    subTree.filteringOperands.push({
        fieldName: 'ContactTitle',
        condition: IgxStringFilteringOperand.instance().condition('doesNotContain'),
        searchVal: 'b',
        ignoreCase: true
    });
    subTree.filteringOperands.push({
        fieldName: 'CompanyName',
        condition: IgxStringFilteringOperand.instance().condition('startsWith'),
        searchVal: 'c',
        ignoreCase: true
    });
    tree.filteringOperands.push(subTree);

    this.queryBuilder.expressionTree = tree;
}
```

`expressionTree` は、双方向のバインド可能なプロパティです。これは、エンド ユーザーが条件を作成、編集、または削除して UI を変更したときに発行される、対応する `expressionTreeChange` 出力が実装されていることを意味します。通知を受信して変更に反応するために個別にサブスクライブすることもできます。

```html
<igx-query-builder #queryBuilder [fields]="fields" [(expressionTree)]="expressionTree" (expressionTreeChange)="onExpressionTreeChange()">
</igx-query-builder>
```

## スタイル設定

クエリ ビルダーのスタイル設定は、すべてのテーマ関数とコンポーネント ミックスインが存在する `index` ファイルをインポートする必要があります。

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

クエリ ビルダーは、`background` パラメーターを使用して、そのテーマから背景色を取得します。背景を変更するには、カスタム テーマを作成する必要があります。

```scss
$custom-query-builder: query-builder-theme(
  $background: #ffcd0f,
);
```

Query Builder 内には、ボタン、チップ、ドロップダウン、入力など、他のコンポーネントがあるため、それぞれに個別のテーマを作成する必要があります。

```scss
$custom-button: button-theme(
  $disabled-foreground: gray,
  ...,
);

$custom-button-group: button-group-theme(
  $item-background: #292826,
  ...,
);

$custom-input-group: input-group-theme(
  $box-background: #4a4a4a,
  ...,
);

$custom-chip: chip-theme(
  $background: #ffcd0f,
  ...,
);

$custom-drop-down: drop-down-theme(
  $background-color: #292826,
  ...,
);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme)、[`button-group-theme`]({environment:sassApiUrl}/index.html#function-button-group-theme)、[`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme)、[`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

>[!NOTE]
>上記のようにカラーの値をハードコーディングする代わりに、[`palette`]({environment:sassApiUrl}/index.html#function-palette) および [`color`]({environment:sassApiUrl}/index.html#function-color) 関数を使用してカラーに関してより高い柔軟性を実現することができます。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックをご覧ください。

最後に、`css-vars` ミックスインを使用して新しいコンポーネント テーマを**含めます**。

```scss
@include css-vars($custom-query-builder);

:host {
  ::ng-deep {
    @include css-vars($custom-drop-down);
    @include css-vars($custom-button);
    @include css-vars($custom-button-group);
    @include css-vars($custom-input-group);
    @include css-vars($custom-chip);
  }
}
```

> [!NOTE]
> コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、クエリ ビルダー コンポーネント内のコンポーネント (ボタン、チップ、ドロップダウンなど) のスタイルを設定するには、`::ng-deep` を使用してこのカプセル化を`解除する`必要があります。

### デモ

<code-view style="height:330px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-style" >
</code-view>

>[!NOTE]
>サンプルは、`Change Theme` (テーマの変更) で選択したグローバル テーマの影響を受けません。
<div class="divider--half"></div>

[WYSIWYG App Builder™](https://jp.infragistics.com/products/appbuilder) と実際の UI コンポーネントを使用して、Angular アプリ開発を効率化することもできます。

## API リファレンス

<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderComponent スタイル]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
