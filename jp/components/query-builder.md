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
        [entities]="entities"
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
    public entities: Array<any>;

    public onExpressionTreeChange() {
        ...
    }
}
```

Ignite UI for Angular Query Builder モジュールまたはディレクティブをインポートしたので、`igx-query-builder` コンポーネントの使用を開始できます。

## Angular Query Builder の使用

最初に式木が設定されていない場合は、[`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or) で結合された条件のグループを作成することから開始します。次に、エンティティと、クエリで返すフィールドを選択します。その後、条件またはサブグループを追加できます。 

条件を追加するには、フィールド、フィールドのデータ タイプに基づくオペランド、およびオペランドが単項でない場合は値を選択します。`In` オペランドと `Not In` オペランドを使用すると、単に値を指定するのではなく、異なるエンティティの条件を含む内部クエリを作成できます。条件が確定すると、条件情報を含むチップが表示されます。チップをホバーまたはクリックすると、チップを変更したり、その直後に別の条件やグループを追加したりできます。

複数の条件チップを選択すると、現在の選択をグループ化または削除するオプションを含むコンテキスト メニューが表示されます。選択した条件でグループを作成することを選択した場合、一番上に選択した条件が配置された場所に新しく作成されたグループが表示されます。

グループを選択するために、リンク条件 ([`AND`]({environment:angularApiUrl}/enums/filteringlogic.html#and) または [`OR`]({environment:angularApiUrl}/enums/filteringlogic.html#or)) に基づいて色付けされた垂直線をクリックすることもできます。単一のグループが選択されている場合、ロジックを変更、グループ解除、または削除するオプションを含むコンテキスト メニューが表示されます。

すべての条件は特定のエンティティの特定のフィールドに関連しているため、エンティティを変更すると、すべての事前設定された条件とグループがリセットされます。新しいエンティティを選択すると、[`showEntityChangeDialog`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#showEntityChangeDialog) 入力プロパティが false に設定されていない限り、確認ダイアログが表示されます。

[`entities`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#entities) プロパティを、エンティティ名とそのフィールドの配列を記述する配列に設定することで、コンポーネントの使用を開始できます。各フィールドは、名前とデータ タイプによって定義されます。フィールドが選択されると、データ タイプに基づいて対応するオペランドが自動的に割り当てられます。
クエリ ビルダーには [`expressionTree`]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html#expressionTree) 入力プロパティがあります。コントロールの初期状態を設定するために使用できます。

```typescript
ngAfterViewInit(): void {
    const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Companies', ['ID']);
    innerTree.filteringOperands.push({
        fieldName: 'Employees',
        condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
        conditionName: 'greaterThan',
        searchVal: 100
    });
    innerTree.filteringOperands.push({
        fieldName: 'Contact',
        condition: IgxBooleanFilteringOperand.instance().condition('true'),
        conditionName: 'true'
    });

    const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
    tree.filteringOperands.push({
        fieldName: 'CompanyID',
        condition: IgxStringFilteringOperand.instance().condition('in'),
        conditionName: 'in',
        searchTree: innerTree
    });
    tree.filteringOperands.push({
        fieldName: 'OrderDate',
        condition: IgxDateFilteringOperand.instance().condition('before'),
        conditionName: 'before',
        searchVal: new Date('2024-01-01T00:00:00.000Z')
    });
    tree.filteringOperands.push({
        fieldName: 'ShippedDate',
        condition: IgxDateFilteringOperand.instance().condition('null'),
        conditionName: 'null'
    });

    this.queryBuilder.expressionTree = tree;
}
```

`expressionTree` は、双方向のバインド可能なプロパティです。これは、エンド ユーザーが条件を作成、編集、または削除して UI を変更したときに発行される、対応する `expressionTreeChange` 出力が実装されていることを意味します。通知を受信して変更に反応するために個別にサブスクライブすることもできます。

```html
<igx-query-builder #queryBuilder
    [entities]="entities"
    [(expressionTree)]="expressionTree"
    (expressionTreeChange)="onExpressionTreeChange()">
</igx-query-builder>
```

## テンプレート化

Ignite UI for Angular Query Builder コンポーネントでは、次の定義済み参照名を使用して、コンポーネントのヘッダーと検索値のテンプレートを定義できます。

### ヘッダー

`igx-query-builder-header` 内にコンテンツを渡すと、クエリ ビルダー ヘッダーをテンプレート化できます。[`IgxQueryBuilderHeaderComponent`]({environment:angularApiUrl}/classes/igxquerybuilderheadercomponent.html) は、[`showLegend`]({environment:angularApiUrl}/classes/igxquerybuilderheadercomponent.html#showLegend) 入力プロパティを false に設定することで凡例を非表示にする方法を提供します。

以下のコードはこれを実行する方法を示します。

```html
<igx-query-builder #queryBuilder [entities]="this.entities">
        <igx-query-builder-header [title]="'Query Builder Template Sample'" [showLegend]="true">  
        </igx-query-builder-header>
</igx-query-builder>
```

### 検索値

条件の検索値は、[`igxQueryBuilderSearchValue`]({environment:angularApiUrl}/classes/igxquerybuildersearchvaluetemplatedirective.html) ディレクティブを使用してテンプレート化でき、`igx-query-builder` 本体内の `<ng-template>` に適用されます。

```html
<igx-query-builder #queryBuilder
    [entities]="entities"
    [expressionTree]="expressionTree">
    <ng-template #searchValueTemplate igxQueryBuilderSearchValue 
                let-searchValue
                let-selectedField = "selectedField" 
                let-selectedCondition = "selectedCondition"
                let-defaultSearchValueTemplate = "defaultSearchValueTemplate">
        @if (
            selectedField?.field === 'Region' &&
            (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')
            ){
            <igx-select [placeholder]="'Select region'" [(ngModel)]="searchValue.value">
                <igx-select-item *ngFor="let reg of regionOptions" [value]="reg.value">
                    {{ reg.text }}
                </igx-select-item>
            </igx-select>
        } 
        @else if (
            selectedField?.field === 'OrderStatus' &&
            (selectedCondition === 'equals' || selectedCondition === 'doesNotEqual')
            ){
            <igx-radio-group>
                <igx-radio class="radio-sample" *ngFor="let stat of statusOptions" value="{{stat.value}}" [(ngModel)]="searchValue.value">
                    {{stat.text}}
                </igx-radio>
            </igx-radio-group>
        }
            @else {  
            <ng-container #defaultTemplate *ngTemplateOutlet="defaultSearchValueTemplate"></ng-container>
        }
    </ng-template>
</igx-query-builder>
```

この Angular Query Builder の例は、Angular Query Builder コンポーネントのヘッダーと検索値のテンプレート機能を紹介するために作成しました。

<code-view style="height:530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-template-sample" alt="Angular Query Builder テンプレートの例">
</code-view>

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
    $background: #FFCD0F
);
```

Query Builder 内には、ボタン、チップ、ドロップダウン、入力など、他のコンポーネントがあるため、それぞれに個別のテーマを作成する必要があります。

```scss
$custom-button: button-theme(
    $disabled-color: gray,
    ...
);

$custom-button-group: button-group-theme(
    $item-background:  #292826,
    ...
);

$custom-input-group: input-group-theme(
    $box-background: #4a4a4a,
    ...
);

$custom-chip: chip-theme(
    $background: #FFCD0F,
    ...
);

$custom-drop-down: drop-down-theme(
    $background-color: #292826,
    ...
);
```

この例では、リストされたコンポーネントのパラメーターの一部のみを変更しましたが、[`button-theme`]({environment:sassApiUrl}/index.html#function-button-theme)、[`button-group-theme`]({environment:sassApiUrl}/index.html#function-button-group-theme)、[`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme)、[`drop-down-theme`]({environment:sassApiUrl}/index.html#function-drop-down-theme)、[`input-group-theme`]({environment:sassApiUrl}/index.html#function-input-group-theme) テーマは、それぞれのスタイルを制御するためのより多くのパラメーターを提供します。

最後のステップは、それぞれのテーマを持つコンポーネント ミックスインを**含める**ことです。また、高度なフィルタリング ダイアログ内の他の要素のスタイルを追加します。

```scss
@include query-builder($custom-query-builder);
igx-query-builder {
    @include button($custom-button);
    @include button-group($custom-button-group);
    @include input-group($custom-input-group);
    @include chip($custom-chip);
    @include drop-down($custom-drop-down);
    .igx-filter-empty__title {
        color: #FFCD0F
    }
    .igx-query-builder__header {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon {
        color: #FFCD0F
    }
    .igx-filter-tree__expression-actions igx-icon:hover {
        color: #ffe482
    }
    .igx-filter-tree__expression-actions igx-icon:focus {
        color: #ffe482
    }
    .igx-filter-contextual-menu {
        border: 1px solid #FFCD0F
    }
    .igx-filter-contextual-menu__close-btn {
        position: absolute !important;
        background: #292826 !important;
        border-color: #FFCD0F !important;
    }
    .igx-input-group__input::placeholder {
        color: gray;
    }
}
```

>[!NOTE]
>ほとんどのコンポーネントのミックスインの範囲を `igx-query-builder` 内に設定して、これらのカスタム テーマがクエリ ビルダーの中にネストされたコンポーネントにのみ影響するようにします。そうでない場合、アプリケーション内の他のボタン、チップ、入力、ドロップダウンも影響を受けます。

>[!NOTE]
>コンポーネントが [`Emulated`](themes/sass/component-themes.md#表示のカプセル化) ViewEncapsulation を使用している場合、`::ng-deep` を使用してこのカプセル化に`解除する`必要があります。

```scss
:host {
    ::ng-deep {
        @include drop-down($custom-drop-down);
        @include query-builder($custom-query-builder);
        igx-query-builder {
            @include button($custom-button);
            @include button-group($custom-button-group);
            @include input-group($custom-input-group);
            @include chip($custom-chip);
            .igx-input-group__input::placeholder {
                color: gray;
            }
            .igx-filter-empty__title {
                color: #FFCD0F
            }
            .igx-query-builder__header {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon {
                color: #FFCD0F
            }
            .igx-filter-tree__expression-actions igx-icon:hover {
                color: #ffe482
            }
            .igx-filter-tree__expression-actions igx-icon:focus {
                color: #ffe482
            }
            .igx-filter-contextual-menu {
                border: 1px solid #FFCD0F
            }
            .igx-filter-contextual-menu__close-btn {
                position: absolute !important;
                background: #292826 !important;
                border-color: #FFCD0F !important;
            }
        }
    }
}
```

### カラーパレットの定義

上記のように色の値をハードコーディングする代わりに、[`igx-palette`]({environment:sassApiUrl}/index.html#function-igx-palette) および [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) 関数を使用することによって色に関してより高い柔軟性を持つことができます。

`igx-palette` は渡された一次色と二次色に基づいてカラーパレットを生成します。

```scss
$yellow-color: #FFCD0F;
$black-color: #292826;
$dark-palette: palette($primary: $yellow-color, $secondary: $black-color);
```
また [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) を使用してパレットから簡単に色を取り出すことができます。 

```scss
$custom-query-builder: query-builder-theme(
    $background: color($dark-palette, "secondary", 400)
);

$custom-button: button-theme(
    $disabled-color: color($dark-palette, "secondary", 100),
    ...
);

$custom-button-group: button-group-theme(
    $item-background: color($dark-palette, "secondary", 400),
    ...
);

$custom-input-group: input-group-theme(
    $box-background: color($dark-palette, "secondary", 200),
    ...
);

$custom-chip: chip-theme(
    $background: color($dark-palette, "primary", 400),
    ...
);

$custom-drop-down: drop-down-theme(
    $background-color: color($dark-palette, "secondary", 400),
    ...
);
```

>[!NOTE]
>`igx-color` および `igx-palette` は、色を生成および取得するための重要な機能です。使い方の詳細については[`パレット`](themes/sass/palettes.md)のトピックを参照してください。

### スキーマの使用

テーマ エンジンを使用して [**スキーマ**](themes/sass/schemas.md)の利点を活用でき、堅牢で柔軟な構造を構築できます。**スキーマ**はテーマを使用する方法です。

すべてのコンポーネント (この場合は [`light-query-builder`]({environment:sassApiUrl}/index.html#variable-_light-query-builder)、[`light-button`]({environment:sassApiUrl}/index.html#variable-_light-button)、[`light-button-group`]({environment:sassApiUrl}/index.html#variable-_light-button-group)、[`light-chip`]({environment:sassApiUrl}/index.html#variable-_light-chip)、[`light-input-group`]({environment:sassApiUrl}/index.html#variable-_light-input-group) および [`light-drop-down`]({environment:sassApiUrl}/index.html#variable-_light-drop-down)) に提供されている 2 つの定義済みスキーマのいずれかを拡張します。

```scss
$query-builder-dark-palette: palette($primary: #11bd7b, $secondary: #e32057, $info: $black-color);

$custom-query-builder-schema: extend($_light-query-builder,
    (
        background:(
           color: ("info")
        )
    )
);

$custom-button-schema: extend($_light-button,
    (
        disabled-color:(
           color: ("secondary", 100)
        ),
        ...
    )
);

$custom-button-group-schema: extend($_light-button-group,
    (
        item-background:(
           color: ("secondary", 400)
        ),
        ...
    )
);

$custom-input-group-schema: extend($_light-input-group,
    (
        box-background:(
           color: ("secondary", 200)
        ),
        ...
    )
);

$custom-chip-schema: extend($_light-chip,
    (
        background:(
           color: ("primary", 400)
        ),
        ...
    )
);

$custom-drop-down-schema: extend($_light-drop-down,
    (
        background-color:(
           color: ("secondary", 400)
        ),
        ...
    )
);
```

カスタム スキーマを適用するには、グローバル ([`light`]({environment:sassApiUrl}/index.html#variable-light-schema) または [`dark`]({environment:sassApiUrl}/index.html#variable-dark-schema)) の 1 つを**拡張する**必要があります。これは基本的にカスタム スキーマでコンポーネントを指し示し、その後それぞれのコンポーネント テーマに追加するものです。

```scss
$custom-light-schema: extend($light-schema,(
    igx-query-builder: $custom-query-builder-schema,
    igx-button: $custom-button-schema,
    igx-button-group: $custom-button-group-schema,
    igx-input-group: $custom-input-group-schema,
    igx-chip: $custom-chip-schema,
    igx-drop-down: $custom-drop-down-schema
));

$custom-query-builder: query-builder-theme(
    $palette: $query-builder-dark-palette,
    $schema: $custom-light-schema
);

$custom-button: button-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-button-group: button-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-input-group: input-group-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-chip: chip-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);

$custom-drop-down: drop-down-theme(
    $palette: $dark-palette,
    $schema: $custom-light-schema
);
```

上記と同じ方法でテーマを含める必要があることに注意してください。

### デモ

<code-view style="height:530px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/query-builder-style" >
</code-view>

>[!NOTE]
>サンプルは、`テーマの変更`で選択したグローバル テーマの影響を受けません。
<div class="divider--half"></div>

[WYSIWYG App Builder™](https://jp.infragistics.com/products/appbuilder) と実際の UI コンポーネントを使用して、Angular アプリ開発を効率化することもできます。

## API リファレンス
<div class="divider--half"></div>

* [IgxQueryBuilderComponent API]({environment:angularApiUrl}/classes/igxquerybuildercomponent.html)
* [IgxQueryBuilderHeaderComponent]({environment:angularApiUrl}/classes/igxquerybuilderheadercomponent.html)
* [IgxQueryBuilderSearchValueTemplateDirective]({environment:angularApiUrl}/classes/igxquerybuildersearchvaluetemplatedirective.html)
* [IgxQueryBuilderComponent スタイル]({environment:sassApiUrl}/index.html#function-query-builder-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
