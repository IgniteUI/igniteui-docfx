---
title: Angular Drag and Drop | IgniteUI for Angular | インフラジスティックス
_description: Ignite UI for Angular Drag and Drop ディレクティブを使用してページの要素のドラッグ実行する方法を紹介します。
_keywords: Angular Drag and Drop, Angular Drag and Drop ディレクティブ, Angular UI コントロール, Ignite UI for Angular, インフラジスティックス
_language: ja
---

# Angular Drag and Drop (ドラッグアンドドロップ) ディレクティブの概要
<p class="highlight">Ignite UI for Angular Drag and Drop ディレクティブは、ページの要素のドラッグを有効にします。サポートされている機能には自由自在のドラッグ、ドラッグ ハンドルの使用、ゴーストのドラッグ、アニメーション、および複数のドロップ ストラテジが含まれています。</p>

## Angular Drag and Drop の例

アイコンをドラッグ アンド ドロップして位置を変更します。


<code-view style="height:325px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/icons-sample" alt="Angular Drag and Drop の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Drag and Drop コンポーネントを使用した作業の開始

Ignite UI for Angular Drag & Drop ディレクティブを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxDragDropModule` をインポートします。

```typescript
// app.module.ts

...
import { IgxDragDropModule } from 'igniteui-angular';
// import { IgxDragDropModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxDragDropModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxDragDirective` と `IgxDropDirective` をスタンドアロンの依存関係としてインポートすることも、[`IGX_DRAG_DROP_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/drag-drop/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_DRAG_DROP_DIRECTIVES } from 'igniteui-angular';
// import { IGX_DRAG_DROP_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <div igxDrag>Drag me</div>
    <div igxDrop>Drop here</div>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_DRAG_DROP_DIRECTIVES]
    /* or imports: [IgxDragDirective, IgxDropDirective] */
})
export class HomeComponent {}
```

Ignite UI for Angular Drag and Drop モジュールまたはディレクティブをインポートしたので、`igxDrag` と `igxDrop` ディレクティブの使用を開始できます。

## Angular Drag ディレクティブの使用

Angular アプリケーション内の要素をある場所から他の場所へドラッグするには、[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブを使用します。[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブと組み合わせてドラッグした要素の配置やインタラクティブなアプリケーションを作成できます。

### ドラッグの基本

ユーザーが 5px いずれかの方向へスワイプするとドラッグ操作を開始します。これはカスタマイズ可能であり、[`dragTolerance`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragTolerance) 入力を使用して変更できます。そうでない場合は、インタラクションがクリックとして見なされ、`dragClick` イベントがトリガーします。

ドラッグが開始されると、[`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragStart)イベントがトリガーされます。実際の移動が発生しないようにするには、[`cancel`]({environment:angularApiUrl}/interfaces/idragstarteventargs.html#cancel) プロパティを `true` に設定してイベントをキャンセルできます。

移動が実行される前に、ポインターの最後と次の位置を含む [`dragMove`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragMove) イベントもトリガーされます。要素のドラッグ時に動きが検出されるたびにトリガーされます。 

ユーザーがマウス/タッチをリリースした後、ドラッグ ゴースト要素が DOM から削除され、[`dragEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragEnd) が発生されます。

> [!Note]
> [`dragMove`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragMove) イベントの性質上、短い期間で何度もトリガーされる可能性があり、トリガーされたときに実行される複雑な操作のパフォーマンスの問題が発生することがあります。

### ゴーストでドラッグします

[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブは、テンプレートに追加して DOM 要素に適用できます。

```html
<div igxDrag>Drag me</div>
```

`igxDrag` ディレクティブのデフォルト動作では、ベース要素を変更せずに残し、エンドユーザーがドラッグ操作を実行した場合ゴースト要素を作成します。

ページにゴーストがレンダリングされる前に、追加しようとしているゴースト要素の情報を含む [`ghostCreate`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostCreate) イベントがトリガーされます。このイベントは、[`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragStart) イベントの直後にトリガーされます。[`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragStart) がキャンセルされた場合、ゴーストは作成されず、それに応じて [`ghostCreate`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostCreate) イベントはトリガーされません。

ゴーストが削除される直前に、ゴーストの [`ghostDestroy`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostDestroy) イベントがトリガーされます。

### ゴーストのカスタマイズ

デフォルトのゴースト要素は、`igxDrag` が使用されるベース要素のコピーです。[`ghostTemplate`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghostTemplate) 入力へのテンプレート参照を直接提供することでカスタマイズできます。

```html
<div class="email-content flexlist"
	igxDrag
	[ghostTemplate]="customGhost">
	<div class="sender">
		{{email.sender}} 
	</div>
	<div class="email-title">
		{{email.title}}
	</div>
</div>
<ng-template #customGhost>
	<div class="dragGhost">
		<igx-icon fontSet="material">email</igx-icon> 
		Moving {{ draggedElements }} item{{ (draggedElements > 1 ? 's' : '')}}
	</div>
</ng-template>

```

### ゴーストなしのドラッグ

`igxDrag` ディレクティブが適用されるベース要素を移動したい場合、[`ghost`]({environment:angularApiUrl}/classes/igxdragdirective.html#ghost) 入力を `false` に設定することができます。それにより、余分なゴースト要素はレンダリングされず、要素をドラッグするときにカスタム スタイル設定を適用する必要がある場合は、ベース要素に直接適用できます。

```html
<div igxDrag [ghost]="false">Drag me</div>
```

### ハンドルを使用したドラッグ

デフォルトで、要素全体がそのアクションの実行に使用されるため、ドラッグする `igxDrag` の子である要素を指定できます。`igxDragHandle` ディレクティブを使用して実行し、`igxDrag`内の複数の要素に適用できます。

#### 使用方法
```html
<div
    igxDrag 
    [ghost]="false"
    [dragTolerance]="0"
    (dragMove)=onDragMove($event)>
    <igx-icon igxDragHandle fontSet="material" class="dialogHandle">drag_indicator</igx-icon>
    <div class="igx-dialog__window">
    </div>
</div>
```

以下のデモでは、ハンドルを使用してダイアログをドラッグします。

<code-view style="height:325px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/drag-dialog-sample" >
</code-view>

<div class="divider--half"></div>

### アニメーション

要素がドラッグされている場合、デフォルトでニメーションは適用されません。

`igxDrag` にトランジション アニメーションを適用できますが、ドラッグの終了時または要素が現在ドラッグされていないときの使用をお勧めします。これは、[`transitionToOrigin`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitionToOrigin) および [`transitionTo`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitionto) メソッドを使用して実現できます。

`transitionToOrigin` メソッドは、その名前が示すように、現在ドラッグされている要素または要素のゴーストを、ドラッグが開始された開始位置へアニメーション化します。`transitionTo` メソッドは、ページ (`pageX` および `pageY` など) に関連する特定の位置に要素をアニメーション化します。または、指定された要素の位置をアニメーション化します。要素が現在ドラッグされていない場合は、アニメーション化するか、ゴーストを作成して目的の位置にアニメーション化します。

両方の関数には、トランジション アニメーションをカスタマイズし、期間、タイミング関数、または遅延を設定するために設定できる引数があります。特定の開始位置が設定されている場合、そこから要素をアニメーション化します。

トランジション アニメーションが終了すると、ゴーストが作成される場合、ゴーストは削除され、`igxDrag` ディレクティブは初期状態に戻ります。ゴーストが作成されていない場合、位置を維持します。いずれの場合もアニメーションの持続時間に基づいて、[`transitioned`]({environment:angularApiUrl}/classes/igxdragdirective.html#transitioned) イベントがトリガーされます。アニメーションが適用されていない場合、ただちにトリガーされます。

要素の変換を処理する他のアニメーションを作成できます。これは、Angular Animations または CSS Animations を使用して、ベース `igxDrag` 要素/そのゴーストのいずれかに他の要素と同様に実行できます。ゴーストに適用する場合は、カスタムゴ ーストを定義し、その要素にアニメーションを適用する必要があります。

ドラッグ ハンドルを使用してリスト内の要素をソートします。リスト要素のドラッグ時は、他のリスト要素がアニメーションでソートされます。 

<code-view style="height:380px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/list-reorder-sample" >
</code-view>

<div class="divider--half"></div>

### ドラッグ可能な要素を無視する

ユーザーが igxDrag をインスタンス化したメイン要素の操作可能な子を使用したい場合は、[`igxDragIgnore`]({environment:angularApiUrl}/classes/igxdragignoredirective.html) ディレクティブを設定することにより、igxDrag からは無視され、ドラッグ アクションを実行しないようにすることができます。これにより、これらの要素は完全に操作可能になり、すべてのマウス イベントを受信します。

```html
<div [igxDrag]="myData">
    <span>Drag me!</span>
    <igx-icon igxDragIgnore fontSet="material" (click)="remove()">bin</igx-icon>
</div>
```

## Angular Drop ディレクティブの使用

[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブを使用してドラッグされている要素を領域に配置する場合、[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) を使用します。要素が適用される要素の境界に入ったかどうか、その後要素内でリリースされているかを決定するために使用できるイベントを提供します。

[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブは、[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブと同じように、任意の DOM 要素に適用できます。

デフォルトで、[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブは DOM のドラッグされた要素の位置を変更するためのロジックを適用しません。そのため、[`dropStrategy`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropStrategy) を指定するか、カスタム ロジックを適用する必要があります。ドロップ ストラテジについては、次のセクションで説明します。

### ドロップ ストラテジ

`igxDrop` には、`Default`、`Prepend`、`Insert` および `Append` の 4 つのドロップ ストラテジがあります。

* `Default` - 要素が `igxDrop` 要素にドロップされた場合にアクションを実行せず、[`IgxDefaultDropStrategy`]({environment:angularApiUrl}/classes/igxdefaultdropstrategy.html) という名前のクラスとして実装されます。

* `Append` - ドロップされた要素を常に最後の子として挿入し、[`IgxAppendDropStrategy`]({environment:angularApiUrl}/classes/igxappenddropstrategy.html) という名前のクラスとして実装されます。 

* `Prepend` - ドロップされた要素を常に最初の子として挿入し、[`IgxPrependDropStrategy`]({environment:angularApiUrl}/classes/igxprependdropstrategy.html) という名前のクラスとして実装されます。

* `Insert` - ドロップされた要素を最後の位置に挿入します。ただし、要素がドロップされたときに要素の下に子がある場合、`igxDrag` インスタンス化された要素はその子の位置に挿入され、他の子は移動されます。[`IgxInsertDropStrategy`]({environment:angularApiUrl}/classes/igxinsertdropstrategy.html) という名前のクラスとして実装されます。

ストラテジを適用する方法は、上記のクラスのいずれかに `dropStrategy` 入力を設定することです。`igxDrop` はインスタンス自体を作成および管理する必要があるため、提供される値はインスタンスではなくタイプでなければなりません。

```typescript
public appendStrategy = IgxAppendDropStrategy;
```

```html
<div igxDrop [dropStrategy]="appendStrategy"></div>
```

#### ドロップ ストラテジのキャンセル

特定のドロップ ストラテジを使用する場合、`cancel` プロパティを true に設定して [`dropped`]({environment:angularApiUrl}/classes/igxdropdirective.html#dropped) イベントでその動作をキャンセルできます。`Dropped` イベントは `igxDrop` に固有です。`igxDrop` にドロップ ストラテジを適用していない場合、イベントをキャンセルしても副作用はありません。

例:

```html
<div igxDrag></div>
<!-- ... -->
<div igxDrop (dropped)="onDropped($event)"></div>
```

```typescript
public onDropped(event) {
    event.cancel = true;
}
```

独自のドロップ ロジックを実装する場合は、`dropped` イベントにバインドし、そこでロジックを実行するか、`IgxDefaultDropStrategy` クラスの拡張をお勧めします。

### ドラッグとドロップ要素のリンク
それぞれ `igxDrag` および `igxDrop` ディレクティブで [`dragChannel`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragChannel) および [`dropChannel`]({environment:angularApiUrl}/classes/igxdropdirective.html#dragChannel) 入力を使用すると、異なる要素をリンクして相互間にのみ操作できます。たとえば、特定の `igxDrop` 要素にドロップできるように `igxDrag` 要素を制約する必要があり、使用できない場合は、同じチャネルを割り当てることで簡単に実現できます。

#### 例

```html
<div igxDrag [dragChannel]="['Mammals', 'Land']"> Human </div>
<div igxDrag [dragChannel]="['Mammals', 'Water']"> Dolphin </div>
<div igxDrag [dragChannel]="['Insects', 'Air']"> Butterfly </div>
<div igxDrag [dragChannel]="['Insects', 'Land']"> Ant </div>

<div igxDrop [dropChannel]="['Mammals']"> Mammals </div>
<div igxDrop [dropChannel]="['Insects']"> Insects </div>
<div igxDrop [dropChannel]="['Land']"> Land </div>
```

右側のメールを左側のフォルダーにドラッグします。


<code-view style="height:340px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/email-sample" >
</code-view>

<div class="divider--half"></div>

## 高度な設定

`igxDrag` と `igxDrop` 両方を組み合わせて多くのさまざまな複雑なアプリケーションシ ナリオで使用できるため、次の例はかんばんボードでそれらの使用方法を示します。 

ユーザーは各列のカードをソートすることができます。各カードにドロップ領域を設定することで実行されるため、別のカードがその領域に入ったことを検出し、実行時にそれらを切り替えて、ユーザーにより快適なエクスペリエンスを提供します。

列間でカードを切り替える機能はなければ、かんばんボードにはなりません。カードは、列から別の列に特定の位置で直接移動できます。以下ではダミー オブジェクトを使用して実現されているため、リリースされた場合にカードが配置される視覚的な領域が作成されます。カードのドラッグが終了するか、別の列を出るとダミーオブジェクトが削除されます。

かんばんボード内で項目を移動します。


<code-view style="height:700px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/interactions/kanban-sample" >
</code-view>

<div class="divider--half"></div>

## API
* [IgxDragDirective]({environment:angularApiUrl}/classes/igxdragdirective.html)
* [IgxDropDirective]({environment:angularApiUrl}/classes/igxdropdirective.html)
* [IgxDefaultDropStrategy]({environment:angularApiUrl}/classes/igxdefaultdropstrategy.html)
* [IgxAppendDropStrategy]({environment:angularApiUrl}/classes/igxappenddropstrategy.html)
* [IgxPrependDropStrategy]({environment:angularApiUrl}/classes/igxprependdropstrategy.html)
* [IgxInsertDropStrategy]({environment:angularApiUrl}/classes/igxinsertdropstrategy.html)

## リファレンス

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
