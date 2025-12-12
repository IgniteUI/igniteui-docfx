---
title: Angular Grid のセル結合 - Ignite UI for Angular
_description: Ignite UI for Angular Data Grid の複数行レイアウト機能を使用して、列をより強力な方法で配置およびサイズ設定します。デモと例をお試しください。
_keywords: angular cell merging, cell merging, ignite ui for angular, セルの結合, セルの結合
_license: commercial
_language: ja
---

# Angular セル結合

Ignite UI for Angular の @@igComponent には、同じ値を持つ隣接セルを 1 つの大きなセルに結合するセル結合機能があります。結合は列内で縦方向に適用され、重複する値を減らして可読性を向上させます。既定ではデータ値の一致でセル結合されるほか、カスタム条件を設定して結合するように構成できます。

## Angular セル結合の例

@@if(igxName === 'IgxGrid'){
<code-view style="height:755px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-cellMerge/" alt="Angular セル結合の例">
</code-view>
}
@@if(igxName === 'IgxHierarchicalGrid'){
<code-view style="height:755px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-cell-merge/" alt="Angular セル結合の例">
</code-view>
}
@@if(igxName === 'IgxTreeGrid'){
<code-view style="height:755px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-cell-merge/" alt="Angular セル結合の例">
</code-view>
}

## セル結合の有効化と使用

グリッドでのセル結合は、以下の 2 つのレベルで制御されます:
- グリッド レベルの結合モード - 結合がいつ適用されるかを決定
- 列レベルの結合トグル - どの列でセルを結合できるかを決定

### グリッド結合モード

グリッドは、`GridCellMergeMode` 列挙型の値を受け入れる `cellMergeMode` プロパティを公開します。
- `always` - ソート状態に関係なく、結合条件を満たすすべての隣接セルを結合。
- `onSort` - 列がソートされているときのみ隣接セルを結合 **(デフォルト値)**。

```html
<@@igSelector [data]="data" [cellMergeMode]="cellMergeMode">
    ...
</@@igSelector>
```

```ts
protected cellMergeMode: GridCellMergeMode = 'always';
```

### 列結合のトグル

列レベルでは、`merge` プロパティで結合の有効または無効を切り替えます。

```html
<igx-column field="OrderID" [merge]="true"></igx-column>
<igx-column field="ShipperName" [merge]="false"></igx-column>
```

上記の例では:
- **OrderID** 列は、隣接する重複値を結合します。
- **ShipperName** 列は、結合を行わず通常通りに描画されます。

### 組み合わせた例

```html
<@@igSelector [data]="data" [cellMergeMode]="cellMergeMode" [autoGenerate]="false">
    <igx-column field="OrderID" header="Order ID" [merge]="true"></igx-column>
    <igx-column field="ShipperName" header="Shipper Name" [merge]="true"></igx-column>
    <igx-column field="Salesperson" header="Salesperson"></igx-column>
</@@igSelector>
```

```ts
protected cellMergeMode: GridCellMergeMode = 'onSort';
```

この例では、グリッドは列がソートされている場合のみ結合を行い、Category 列と Product 列の両方で結合が有効になっています。

## カスタム結合条件

`always` と `onSort` の組み込みモードに加えて、`mergeStrategy` プロパティを使用して独自の結合条件を定義することができます。このストラテジでは、セルの比較方法と結合範囲の計算方法の両方を制御します。

### 結合ストラテジ インターフェイス

カスタム結合ストラテジは `IGridMergeStrategy` インターフェイスを実装する必要があります:

```ts
export interface IGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;    
}
```

- `merge` - 結合されたセルをどのように生成するかを定義。
- `comparer` - 隣接するレコードを結合すべきかを判定する条件を定義。

@@if(igxName === 'IgxGrid' || igxName === 'IgxHierarchicalGrid'){
### デフォルトのストラテジを拡張

一部の動作 (例: comparer ロジック) のみをカスタマイズしたい場合は、組み込みの `DefaultMergeStrategy` を拡張し、必要なメソッドのみをオーバーライドできます。

```ts
export class MyCustomStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```

}
@@if(igxName === 'IgxTreeGrid'){
`IgxTreeGrid` には、`IGridMergeStrategy` を実装する 2 つの組み込みストラテジがあります: `DefaultTreeGridMergeStrategy` と `ByLevelTreeGridMergeStrategy`。`DefaultTreeGridMergeStrategy` は、階層レベルに関係なく同じ値を持つすべてのセルを結合します。`ByLevelTreeGridMergeStrategy` は、同じ階層レベルにあり、かつ同じ値を持つセルのみを結合します。同一階層レベルが結合の必須条件になります。

### デフォルトのストラテジを拡張

一部の動作 (例: comparer ロジック) のみをカスタマイズしたい場合は、組み込みの `DefaultTreeGridMergeStrategy` または `ByLevelTreeGridMergeStrategy` のいずれかを拡張し、必要なメソッドのみをオーバーライドできます。

```ts
export class MyCustomStrategy extends DefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```

}

### カスタム ストラテジの適用

定義したカスタム ストラテジは、`mergeStrategy` プロパティを通じてグリッドに割り当てます。

```html
<@@igSelector [data]="data" [mergeStrategy]="customStrategy">
  <igx-column field="ActionID" [merge]="true"></igx-column>
  <igx-column field="ProjectName" [merge]="true"></igx-column>
</@@igSelector>
```

```ts
protected customStrategy = new MyCustomStrategy();
```

@@if(igxName === 'IgxGrid'){
### デモ

<code-view style="height:755px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-cellMerge-custom/" alt="カスタム条件付き Angular セル結合の例">
</code-view>
}

## 機能の統合

セル結合の特性上、他の機能との連携動作について以下の点に注意が必要です:
@@if(igxName === 'IgxGrid'){
- **展開と縮小**: マスター詳細、グループ化など、データ以外の行を生成する機能がある場合、その位置でセル結合が中断され、グループが分割されます。
}
- **Excel エクスポート**: 結合されたセルは、Excel にエクスポートしても結合状態が維持されます。
- **列のピン固定**: 列がピン固定されてもセルの結合は維持され、ピン固定領域内に表示されます。
- **行のピン固定**: セルは自身が属する領域内でのみ結合されます。つまり、ピン固定された行のセルはピン固定行のセル同士で、ピン固定されていない行のセルはその中でのみ結合されます。
- **ナビゲーション/アクティベーション**: セルがアクティブになると、その行内の結合セルはすべて単一セルに分解されます。これはキーボード ナビゲーションによるアクティベーションも含みます。

>[!NOTE]
> 結合セルをクリックすると、結合シーケンス内でもっとも近いセルがアクティブになります。

- **更新/編集**: アクティブ化によって結合シーケンスが分解されるため、編集モードになるのは単一セルのみです。
- **行の選択**: 選択された行が結合セルと交差する場合、関連するすべての結合セルが選択対象としてマークされます。

@@if(igxName === 'IgxGrid'){
## 制限

|既知の制限| 説明|
| --- | --- |
| セルの結合は、複数行レイアウトとの組み合わせではサポートされません。 | 両方とも複雑なレイアウトを使用するため、同時に使用することはできません。このような無効な構成が検出された場合は警告が表示されます。 |
}

## API リファレンス

- [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
- [@@igxNameComponent スタイル]({environment:sassApiUrl}/themes#function-grid-theme)

## その他のリソース

<div class="divider--half"></div>

- [@@igComponent 概要](@@igMainTopic.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)