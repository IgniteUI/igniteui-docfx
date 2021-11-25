---
title: Angular Grid Row Actions | Ignite UI for Angular | インフラジスティックス
_description: 行コンポーネントを実現するために Grid コンポーネントで Row Actions を使用する方法を紹介します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular ActionStrip コンポーネント, Angular ActionStrip ディレクティブ, Angular ActionStrip コントロール
_language: ja
---
@@if (igxName === 'IgxGrid') {
# Grid Row Actions

Ignite UI for Angular のグリッド コンポーネントは、`ActionStrip` を使用し、行/セルコンポーネントおよび行のピン固定に CRUD を使用する機能を提供します。
デフォルトで 2 つのグリッド アクションが提供されます。
}
@@if (igxName === 'IgxTreeGrid') {
# Tree Grid Row Actions

Ignite UI for Angular のツリー グリッド コンポーネントは、`ActionStrip` を使用し、行/セルコンポーネントおよび行のピン固定に CRUD を使用する機能を提供します。
デフォルトで 2 つのグリッド アクションが提供されます。
}
@@if (igxName === 'IgxHierarchicalGrid') {
# Hierarchical Grid Row Actions

Ignite UI for Angular の階層グリッド コンポーネントは、`ActionStrip` を使用し、行/セルコンポーネントおよび行のピン固定に CRUD を使用する機能を提供します。
デフォルトで 2 つのグリッド アクションが提供されます。
}

- [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html) - グリッド編集専用に設計された機能と UI を含みます。[`rowEditable`]({environment:angularApiUrl}/classes/IgxGridComponent.html#rowEditable) オプションとグリッドの行削除に応じて、セルまたは行の編集モードをすばやく切り替えることができます。

- [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxgridpinningactionscomponent.html) - グリッド行のピン固定のために特別に設計された機能と UI を含みます。行をすばやくピン固定し、ピン固定された行とその無効な行の間を移動できます。


@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid [data]="data" [rowEditable]="true" [primaryKey]="'ID'">
    <igx-column *ngFor="let c of columns" [field]="c.field">
    </igx-column>

    <igx-action-strip #actionStrip>
        <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <igx-grid-editing-actions></igx-grid-editing-actions>
    </igx-action-strip>
</igx-hierarchical-grid>
```
}

>注: これらのコンポーネントは [`IgxGridActionsBaseDirective`]({environment:infragisticsBaseUrl}/classes/igxgridactionsbasedirective.html) を継承します。カスタム グリッド アクション コンポーネントを作成する場合、`IgxGridActionsBaseDirective` も継承する必要があります。
>注: `IgxActionStripComponent` がグリッドの子コンポーネントの場合、行をホバーすると UI が自動的に表示されます。

## カスタム実装

これらのコンポーネントは、カスタマイズのための柔軟性を提供するテンプレートを公開します。たとえば、`delete`、`edit` などの行アクションがある Gmail シナリオで `ActionStrip` を使用する場合、`igx-icon` でボタン コンポーネントを作成します。そして、クリック イベントを追加し、`igx-action-strip` コンポーネントに挿入します。

```html
 <igx-action-strip #actionstrip>
    <igx-grid-pinning-actions></igx-grid-pinning-actions>
        <button title="Edit" igxButton="icon" igxRipple (click)='startEdit(actionstrip.context)'>
            <igx-icon>edit</igx-icon>
        </button>
        <button title="Delete" igxButton="icon" igxRipple *ngIf='!isDeleted(actionstrip.context)' (click)='actionstrip.context.delete()'>
            <igx-icon>delete</igx-icon>
        </button>
    </igx-action-strip>
</igx-grid>
```

@@if (igxName === 'IgxGrid') {
<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-action-strip" >
</code-view>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/tree-grid-action-strip" >
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height: 600px;" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hGrid-action-strip" >
</code-view>
}

## API リファレンス

アクション ストリップの API に関する詳細な情報は、以下のリンクのトピックを参照してください:
* [`IgxActionStripComponent API`]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)

アクション ストリップで使用できるその他のコンポーネントとディレクティブ:

* [`IgxGridActionsBaseDirective `]({environment:angularApiUrl}/classes/igxgridactionsbasedirective.html)
* [`IgxGridPinningActionsComponent`]({environment:angularApiUrl}/classes/igxpinningactionscomponent.html)
* [`IgxGridEditingActionsComponent`]({environment:angularApiUrl}/classes/igxeditingactionscomponent.html)
* [`IgxDividerDirective`]({environment:angularApiUrl}/classes/igxdividerdirective.html)