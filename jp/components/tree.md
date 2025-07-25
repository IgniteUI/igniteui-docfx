---
title: Angular Tree コンポーネント - Ignite UI for Angular
_description: Ignite UI for Angular Tree コンポーネントを使用すると、階層データをツリービュー構造で表示したり、ノードを簡単にカスタマイズしたり、オンデマンドでデータを読み込んだりできます。無料でお試しください。
_keywords: angular tree, angular tree コンポーネント, angular tree view, angular tree view コンポーネント, angular ui コンポーネント, ignite ui for angular, UI コントロール, インフラジスティックス
_language: ja
---
<style type="text/css">
    code-view .codesandbox-btn {
        display: none !important;
    }
</style>

# Angular Tree コンポーネントの概要

Angular Tree コンポーネントを使用すると、ユーザーは親子関係を持つツリービュー構造で階層データを表現したり、対応するデータ モデルなしで静的なツリービュー構造を定義したりできます。その主な目的は、エンドユーザーが階層データ構造内を視覚化してナビゲートできるようにすることです。Ignite UI for Angular Tree コンポーネントは、ロード オン デマンド機能、項目のアクティブ化、組み込みのチェックボックス、組み込みのキーボード ナビゲーションなどによる項目のバイステートおよびトライステートのカスケード選択も提供します。

## Angular Tree の例
この基本的な Angular Tree の例では、ノード階層を指定し、階層データセットを反復処理することにより、`igx-tree` とそのノードを定義する方法を確認できます。

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/tree-basic-sample" alt="Angular Tree の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Tree を使用した作業の開始

Ignite UI for Angular Tree コンポーネントの使用を開始するには、最初に Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、次のコマンドを入力します。

```cmd
ng add igniteui-angular
```
Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、app.module ファイルに `IgxTreeModule` をインポートします。 

```typescript
// app.module.ts

...
import { IgxTreeModule } from 'igniteui-angular';
// import { IgxTreeModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxTreeModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxTreeComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_TREE_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/tree/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_TREE_DIRECTIVES } from 'igniteui-angular';
// import { IGX_TREE_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-tree>
        <igx-tree-node>
            Angular Libraries
            <igx-tree-node>Ignite UI for Angular</igx-tree-node>
            <igx-tree-node>Angular Material</igx-tree-node>
        </igx-tree-node>
        <igx-tree-node>
            Web Component Libraries
            <igx-tree-node>Ignite UI for Web Components</igx-tree-node>
            <igx-tree-node>Open UI 5</igx-tree-node>
        </igx-tree-node>
        <igx-tree-node>
            Blazor Libraries
            <igx-tree-node>Ignite UI for Blazor</igx-tree-node>
        </igx-tree-node>
    </igx-tree>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_TREE_DIRECTIVES]
    /* or imports: [IgxTreeComponent, IgxTreeNodeComponent] */
})
export class HomeComponent {}
```

Ignite UI for Angular Tree モジュールまたはディレクティブをインポートしたので、`igx-tree` とそのパネルの基本構成を開始できます。

## Angular Tree の使用

[IgxTreeNodesComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html) は、[IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html) に属するすべてのノードの表現です。
ノードは、[disabled]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#disabled)、[active]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#active)、[selected]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#selected)、および [expanded]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#expanded) プロパティを提供します。これにより、要件に応じてノードの状態を構成できます。[data]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#data) プロパティを使用して、ノードが表すデータ エントリへの参照を追加できます。[IgxTreeComponent.findNodes()]({environment:angularApiUrl}/classes/igxtreecomponent.html#findNodes) を使用してノードを検索するには、`[data]` をバインドする必要があります。

### ツリーの宣言

ノードは、次のいずれかのアプローチを使用して宣言できます。

- ノード階層を指定し、データ セットを反復処理することにより、ツリーとそのノードを宣言します。

```html
<igx-tree>
	<igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
		{{ node.text }}
		<img [src]="node.image" [alt]="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child" [expanded]="isNodeExpaded(child)" [selected]="isNodeSelected(child)">
            {{ child.text }}
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```

ノードをデータ モデルにバインドして、展開された状態と選択された状態が基になるデータにも反映されるようにすることができます。

```html
<igx-tree (nodeSelection)="handleSelectionEvent($event)">
	<igx-tree-node *ngFor="let node of data" [data]="node" [(expanded)]="node.expanded" [(selected)]="node.selected">
		{{ node.text }}
		<img [src]="node.image" [alt]="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child">
			<a igxTreeNodeLink [href]="child.url" target="_blank">
                {{ child.text }}
            </a>
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```

- 静的な非バインド ノードを作成してツリーを宣言します。

ツリーを描画するために、必ずしもデータ セットは必要ありません。基になるデータ モデルなしで個々のノードを作成できます。

```html
<igx-tree>
	<igx-tree-node [expanded]="true" [selected]="false">
		I am a parent node 1
		<img src="hard_coded_src.webb" alt="Alt Text" />		
		<igx-tree-node [expanded]="true" [selected]="false">
			I am a child node 1
			<igx-tree-node>
				<a igxTreeNodeLink href="https://google.com" target="_blank">
				    I am a child node of the child
				</a>
			</igx-tree-node>
		</igx-tree-node>
	</igx-tree-node>

	<igx-tree-node [expanded]="false" [selected]="false">
		I am a parent node 2
		<img src="hard_coded_src.webb" alt="Alt Text" />
        <igx-tree-node [expanded]="false" [selected]="false">
			I am a child node 1
		</igx-tree-node>
	</igx-tree-node>

    <igx-tree-node [selected]="false" [disabled]="true">
		I am a parent node 3
	</igx-tree-node>
</igx-tree>
```

### リンクのあるノード
ノードがリンクを描画する必要がある場合は、`IgxTreeNodeLink` ディレクティブを `<a>` タグに追加する必要があります。これにより、適切な aria ロールがノードの DOM 要素に割り当てられます。

```html
<igx-tree>
	<igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
		{{ node.text }}
		<img [src]="node.image" [alt]="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child">
            <a igxTreeNodeLink [href]="child.url" target="_blank">
                {{ child.text }}
            </a>
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```
### ノードの操作
[IgxTreeNodeComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html) は、次の方法で展開または縮小することができます:
- ノード展開インジケーター **(デフォルトの動作)** をクリックします。
- `igx-tree` [toggleNodeOnClick]({environment:angularApiUrl}/classes/igxtreecomponent.html#toggleNodeOnClick) プロパティが `true` に設定されている場合、ノードをクリックします。

```html
<igx-tree [toggleNodeOnClick]="true">
	<igx-tree-node *ngFor="let node of data" [data]="node">
		{{ node.text }}
		<igx-tree-node *ngFor="let child of node.children" [data]="child">
                {{ child.text }}
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```

デフォルトでは、複数のノードを同時に展開できます。この動作を変更し、一度に 1 つのブランチのみを展開できるようにするには、[singleBranchExpand]({environment:angularApiUrl}/classes/igxtreecomponent.html#singleBranchExpand) プロパティを有効にすることができます。このようにして、ノードが展開されると、同じレベル内ですでに展開されている他のすべてのブランチが縮小されます。

```html
<igx-tree [singleBranchExpand]="true">
	<igx-tree-node *ngFor="let node of data" [data]="node">
		{{ node.text }}
		<igx-tree-node *ngFor="let child of node.children" [data]="child">
                {{ child.text }}
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```

さらに、IgxTree は、ノード操作のために次の API メソッドを提供します:
- [**expand**]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#expand) - アニメーションでノードを展開します。
- [**collapse**]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#collapse) - アニメーションでノードを縮小します。
- [**toggle**]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#toggle) - ノードの展開状態をアニメーションで切り替えます。
- [**collapseAll**]({environment:angularApiUrl}/classes/igxtreecomponent.html#collapseAll) - 指定されたノードをアニメーションで縮小します。ノードが渡されない場合は、すべての親ノードを展開します。
- [**expandAll**]({environment:angularApiUrl}/classes/igxtreecomponent.html#expandAll) - 指定されたノードをアニメーションで展開されたものとして設定します。ノードが渡されない場合は、すべての親ノードを展開します。
- [**deselectAll**]({environment:angularApiUrl}/classes/igxtreecomponent.html#deselectAll) - すべてのノードの選択を解除します。ノード配列が渡されると、指定されたノードのみの選択が解除されます。nodeSelection イベントを発行しません。

### ノードの検索
[findNodes]({environment:angularApiUrl}/classes/igxtreecomponent.html#findNodes) メソッドを使用して、IgxTree 内の特定のノードを見つけることができます。指定されたデータに一致するノードの配列を返します。
複合主キーなど、より複雑なデータ構造シナリオでノードを検索する場合、データに基づいてノードを検索するための基準を指定するために、カスタム比較関数を渡すことができます。
```html
<igx-tree>
	<igx-tree-node *ngFor="let node of data" [data]="node" [expanded]="isNodeExpaded(node)" [selected]="isNodeSelected(node)">
		{{ node.text }}
		<img [src]="node.image" alt="node.imageAlt" />
		<igx-tree-node *ngFor="let child of node.children" [data]="child" [expanded]="isNodeExpaded(child)" [selected]="isNodeSelected(child)">
            {{ child.text }}
		</igx-tree-node>
	</igx-tree-node>
</igx-tree>
```
```typescript
export class MyTreeViewComponent {
  public data: { [key: string]: any, valueKey: string } = MY_DATA;
  @ViewChild(IgxTreeComponent, { read: IgxTreeComponent })
  public tree;

  findNode(valueKey: string) {
    const comparer: IgxTreeSearchResolver =
      (data: any, node: IgxTreeNodeComponent) => node.data.valueKey === data;
    const matchingNodes: IgxTreeNode<{ [key: string]: any, valueKey: string }>[] = this.tree.findNodes(valueKey, comparer);
  }
}
```
### テンプレート
ノードの再利用可能なテンプレートを作成するには、**`igx-tree` 内で** `<ng-template>` を宣言します。 
```html
<igx-tree>
    <igx-tree-node *ngFor="let node of data" [data]="node">
        <ng-container *ngTemplateOutlet="#nodeTemplate; context: { $implicit: node }"></ng-container>
        <igx-tree-node *ngFor="let child of node.ChildCompanies" [data]="child">
            <ng-container *ngTemplateOutlet="#nodeTemplate; context: { $implicit: child}"></ng-container>
        </igx-tree-node>
    </igx-tree-node>
    <ng-template #nodeTemplate let-data>
        <div class="node-header company">
            <igx-icon class="company__logo">{{ data.Logo }}</igx-icon>
            <div class="company__name">{{ data.CompanyName }}</div>
        </div>
    </ng-template>
</igx-tree>
```
さらに、[expandIndicator]({environment:angularApiUrl}/classes/igxtreecomponent.html#expandIndicator) 入力を使用することにより、ノードの展開/縮小インジケーターの描画に使用されるカスタム テンプレートを設定できます。
```html
<igx-tree>
    <igx-tree-node *ngFor="let node of data" [data]="node">
    </igx-tree-node>
    <ng-template igxTreeExpandIndicator let-expanded>
        <igx-icon>{{ expanded ? 'expand_less' : 'expand_more' }}</igx-icon>
    </ng-template>
</igx-tree>
```

## Angular Tree の選択
`igx-tree` でノード選択を設定するには、その [selection]({environment:angularApiUrl}/classes/igxtreecomponent.html#selection) プロパティを設定する必要があります。このプロパティは、**None**、**BiState**、**Cascading** の 3 つのモードを受け入れます。以下で、それぞれについて詳しく説明します。
### None
`igx-tree` では、デフォルトでノードの選択が無効になっています。ユーザーは UI 操作を介してノードを選択または選択解除することはできませんが、これらのアクションは提供された API メソッドを介して実行できます。
### Bi-State
`igx-tree` で bi-state ノードの選択を有効にするには、[selection]({environment:angularApiUrl}/classes/igxtreecomponent.html#selection) プロパティを **BiState** に設定するだけです。これにより、すべてのノードのチェックボックスが表示されます。各ノードには、選択されているまたは選択されていないの 2 つの状態があります。このモードは複数選択をサポートします
```html
<igx-tree selection="BiState">
</igx-tree>
```
### カスケード
`igx-tree` でカスケード ノードの選択を有効にするには、selection プロパティを **Cascading** に設定するだけです。これにより、すべてのノードのチェックボックスが表示されます。 
```html
<igx-tree selection="Cascading">
</igx-tree>
```
このモードでは、親の選択状態はその子の選択状態に完全に依存します。親に選択された子と選択解除された子がある場合、そのチェックボックスは不確定な状態になります。

### Angular Tree のチェックボックス
Angular Tree コンポーネントは、チェックボックスの組み込みサポートを提供し、ユーザーが複数の項目を選択できるようにします。

TreeView チェックボックスには、部分的に選択された親ノードにのみ適用可能な tri-state モードもあります。このモードでは、すべてではないが一部の子ノードがチェックされると、親ノードは不確定状態になります。
## キーボード ナビゲーション
IgxTree のキーボード ナビゲーションは、ユーザーにさまざまなキーボード操作を提供します。この機能はデフォルトで有効になっており、ユーザーはノード間を移動できます。

IgxTree ナビゲーションは、W3C アクセシビリティ標準に準拠しており、使いやすいです。

**キーの組み合わせ**

 - <kbd>下矢印</kbd> - 次に表示されているノードに移動します。
ノードをアクティブとしてマークします。最後のノードの場合は何もしません。
 - <kbd>Ctrl + 下矢印</kbd> - 次に表示されているノードに移動します。最後のノードの場合は何もしません。
 - <kbd>上矢印</kbd> - 前に表示されていたノードに移動します。ノードをアクティブとしてマークします。最初のノードの場合は何もしません。
 - <kbd>Ctrl + 上矢印</kbd> - 前に表示されていたノードに移動します。最初のノードの場合は何もしません。
 - <kbd>左矢印</kbd> - 展開された親ノードの場合、ノードを縮小します。子ノードの場合、その親ノードに移動します。
 - <kbd>右矢印</kbd> - 展開された親ノードの場合、ノードの最初の子に移動します。縮小された親ノードの場合は、それを展開します。
 - <kbd>Home</kbd> - 最初のノードに移動します。
 - <kbd>End</kbd> - 最後に表示されたノードに移動します。
 - <kbd>Tab</kbd> - ツリーの外側にあるページ上の次のフォーカス可能な要素に移動します。
 - <kbd>Shift + Tab</kbd> - ツリーの外側で、ページ上の前のフォーカス可能な要素に移動します。
 - <kbd>Space</kbd> - 現在のノードの選択を切り替えます。ノードをアクティブとしてマークします。
 - <kbd>Shift + Space</kbd> - 選択が有効になっている場合、Shift キーを押しながら、アクティブなノードと Space を押したノードの間ですべてのノードの選択を切り替えます。
 - <kbd>Enter</kbd> - フォーカスされたノードをアクティブにします。ノードにリンクがある場合は、リンクを開きます。
 - <kbd>*</kbd> - ノードとすべての兄弟ノードを同じレベルで展開します。

選択が有効になっている場合、エンドユーザーによるノードの選択は、描画されたチェックボックスを介してのみ許可されます。どちらの選択タイプでも複数選択できるため、次のマウスとキーボードの操作を利用できます。

 - <kbd>クリック</kbd> - ノード チェックボックスで実行すると、選択が有効になっている場合、にノードの選択を切り替えます。それ以外の場合は、ノードにフォーカスします。
 - <kbd>Shift + クリック</kbd> - ノード チェックボックスで実行すると、選択が有効になっている場合、Shift キーを押しながらアクティブなノードとクリックしたノードの間ですべてのノードの選択を切り替えます。

## Angular Tree ロードオンデマンド

Ignite UI for Angular IgxTree は、サーバーから最小限のデータのみ取得して描画されるため、ユーザーにすばやくデータを表示できます。この動的データ読み込みアプローチでは、ユーザーがノードを展開した後にのみ、その特定の親ノードの子が取得されます。このメカニズムは、ロードオンデマンドであらゆるリモートデータとの設定が簡単にできます。
### デモ
<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/tree-advanced-sample" alt="Tree ロードオンデマンドの例">
</code-view>

ユーザーが展開アイコンをクリックすると、ロード アイコンに変わります。[Loading]({environment:angularApiUrl}/classes/igxtreenodecomponent.html#loading) プロパティが `false` に解決されると、読み込みインジケーターが消え、子が読み込まれます。

## Angular Tree スタイル設定
[Ignite UI for Angular テーマ](themes/index.md) を使用すると、ツリーの外観を大幅に変更できます。はじめに、テーマ エンジンによって公開されている関数を使用するために、スタイル ファイルに `index` ファイルをインポートする必要があります。 

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[tree-theme]({environment:sassApiUrl}/themes#function-tree-theme) を拡張し、新しいテーマを作成します。`$background` パラメーターだけを指定すれば、テーマがその他すべての必要なカラーを自動的に計算してくれます。他のプロパティをオーバーライドしてカスタマイズすることも可能です。

```scss
$custom-tree-theme: tree-theme(
  $background: #ecaa53,
);
```

最後にコンポーネントのテーマを含めます。

```scss
@include css-vars($custom-tree-theme);
```

### デモ

<code-view style="height: 400px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/lists/tree-styling" alt="Tree のスタイル設定">
</code-view>

## 既知の問題と制限

|制限|説明|
|--- |--- |
| 再帰的なテンプレート ノード | `igx-tree` は、テンプレートを介した igx-tree-nodes の再帰的な作成をサポートしていません。[詳細](https://github.com/IgniteUI/igniteui-angular/wiki/Tree-Specification#assumptions-and-limitations)をご覧ください。すべてのノードを手動で宣言する必要があります。つまり、非常に深い階層を視覚化する場合は、テンプレート ファイルのサイズに影響します。ツリーは、主にレイアウト/ナビゲーション コンポーネントとして使用することを目的としています。多数のレベルの深度と同種のデータを含む階層データ ソースを視覚化する必要がある場合は、[**IgxTreeGrid**](treegrid/tree-grid.md) を使用できます。|
|古い ViewEngine (Ivy 以前) での IgxTreeNodes の使用|`enableIvy:false` が tsconfig.json に設定されている場合、Angular の View Engine (Ivy以前) にツリーが使用されないという問題があります。|
|FireFox のタブ ナビゲーション|ツリーにスクロールバーがある場合、キーボード ナビゲーションを介してツリーにタブで移動すると、最初に igx-tree-node 要素にフォーカスされます。これは FireFox のデフォルトの動作ですが、ツリーに明示的な `tabIndex = -1` を設定することで解決できます。

## API リファレンス
<div class="divider"></div>

* [IgxTreeComponent]({environment:angularApiUrl}/classes/igxtreecomponent.html)
* [IgxTreeNodeComponent]({environment:angularApiUrl}/classes/igxtreenodecomponent.html)

## その他のリソース
<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)