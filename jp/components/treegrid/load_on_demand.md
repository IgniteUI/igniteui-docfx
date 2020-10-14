---
title:  Tree Grid ロードオンデマンド - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Tree Grid は、親行が展開されたときに必要な子データのみを読み込むことにより、取得およびレンダリングするデータ量が大幅に軽減されます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Tree Grid コンポーネント, Angular Tree Table コンポーネント, Angular Tree Grid コントロール, Angular Tree Table コントロール, Angular 高パフォーマンス Tree Grid, Angular 高パフォーマンス Tree Table, Tree Grid, Tree Table
_language: ja
---

###  Tree グリッド ロードオンデマンド

Ignite UI for Angular [`IgxTreeGrid`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) は、サーバーから最小限のデータのみ取得してレンダリングされるため、ユーザーにすばやくデータを表示できます。その後、ユーザーが行を展開した後にのみ、その特定の親行の子がロードされます。このメカニズムは、ロードオンデマンドであらゆるリモートデータとの設定が簡単にできます。

#### デモ

<div class="sample-container loading" style="height:450px">
    <iframe id="tree-grid-lod-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-load-on-demand' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">このサンプルが気に入りましたか? 完全な Angular ツールキットにアクセスして、すばやく独自のアプリの作成を開始します。<a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">無料でダウンロードできます。</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">codesandbox で表示</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-lod-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

ロードオンデマンド機能は、ツリーグリッド データソースの両方のタイプ ([`プライマリと外部キー`](tree_grid.md#プライマリと外部キー)、または[`子コレクション`](tree_grid.md#子コレクション)) と互換性があります。ツリー グリッドにルート レベルのデータをロードし、いずれかのデータソース タイプに必要なキーを指定するだけです。ツリーグリッドは、ユーザーが行を展開したときに子行をロードするためのコールバック入力プロパティ [`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) を提供します。

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren">
        ...
</igx-tree-grid>
```

[`loadChildrenOnDemand`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#loadchildrenondemand) コールバックは、2 つのパラメーターを提供します。

- parentID - 展開されている親行の ID。
- done  - 子がサーバーから取得されたときに子と共に呼び出されるコールバック。 

```typescript
public loadChildren = (parentID: any, done: (children: any[]) => void) => {
    this.dataService.getData(parentID, (children) => done(children));
}
```

ユーザーが展開アイコンをクリックすると、ロード アイコンに変わります。`done` コールバックが呼び出されると、ロード インジケーターが消え、子が読み込まれます。ツリーグリッドは子を基になるデータソースに追加し、必要なキーを自動的に設定します。 

行がその展開前に子を持つかどうかについての情報を提供する方法がある場合は、[`hasChildrenKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#haschildrenkey) 入力プロパティを使用できます。このようにして、展開インジケータを表示するかどうかを示すデータオブジェクトからブール値プロパティを提供できます。

```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID"
        [loadChildrenOnDemand]="loadChildren" hasChildrenKey="hasEmployees">
        ...
</igx-tree-grid>
```

[`hasChildrenKey`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#haschildrenkey) プロパティを設定する必要はありません。指定しなかった場合は、各行に展開インジケーターが表示されます。子を持たない行を展開した後も、未定義または空の配列で `done` コールバックを呼び出す必要があります。この場合、ロード インジケーターが消えた後に展開ンジケータは表示されません。

カスタムの読み込みインジケーターを提供したい場合は、ng-template を作成し、それに `igxRowLoadingIndicator` ディレクティブを使用してマークを付けます。以下のコード スニペットはカスタム テンプレートを定義する方法を示します。

```html
<igx-tree-grid ...>

    ...

    <ng-template igxRowLoadingIndicator>
        <igx-icon fontSet="material">loop</igx-icon>
    </ng-template>
</igx-tree-grid>
```

### API リファレンス

<div class="divider--half"></div>

* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent スタイル]({environment:sassApiUrl}/#function-igx-grid-theme)

### その他のリソース

<div class="divider--half"></div>

* [Tree Grid 概要](tree_grid.md)
* [Tree Grid 可視化とパフォーマンス](virtualization.md)

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
