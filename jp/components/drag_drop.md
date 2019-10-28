---
title: Drag and Drop 
_description: Ignite UI for Angular Drag and Drop ディレクティブを使用して DOM 要素の位置を移動できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Scrollbar コンポーネント,  Angular Drag and Drop ディレクティブ
_language: ja
---

## Drag and Drop
<p class="highlight">Ignite UI for Angular Drag and Drop ディレクティブは、ページの要素のドラッグを有効にします。</p>

#### デモ

Drag and drop icon to reposition it.

<div class="sample-container loading" style="height:325px">
    <iframe id="icons-sample-iframe" src='{environment:demosBaseUrl}/interactions/icons-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="icons-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">Stackblitz で表示</button>
</div>
<div class="divider--half"></div>

### Drag ディレクティブ

Angular アプリケーション内の要素をある場所から他の場所へドラッグするには、[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブを使用します。[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブと組み合わせてドラッグした要素の配置やインタラクティブなアプリケーションを作成できます。

#### 基本構成

[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブは、テンプレートに追加して DOM 要素に適用できます。

```html
<div igxDrag>Drag me</div>
```

#### DOM 動作

ユーザーが 5px いずれかの方向へスワイプするとデフォルトでドラッグ操作を開始します。そうでない場合は、インタラクションがクリックとして見なされ、[`dragClicked`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragclicked) イベントが発生します。

ドラッグ時にドラッグ ゴースト要素が発生し、マウスカーソルまたはタッチインタラクションと共に移動します。元の要素は表示されたままですが、[`hideBaseOnDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html#hidebaseondrag) でドラッグ開始時に自動的に非表示にできます。

ドラッグは、[`dragStart`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragstart) イベントの [`cancel`]({environment:angularApiUrl}/interfaces/idragstarteventargs.html#cancel) プロパティを true に設定してキャンセルできます。デフォルトのドラッグ ロジックをキャンセルします。

ユーザーがリリースした後、マウス/タッチ ドラッグ ゴースト要素が DOM から削除され、[`hideBaseOnDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html#hidebaseondrag) が有効な場合、元の要素が再び表示されて [`dragEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#dragend) が発生されます。[`animateOnRelease`]({environment:angularApiUrl}/classes/igxdragdirective.html#animateonrelease) 入力を `true` に設定すると、最後にドラッグした位置から元の要素の位置へ戻すドラッグ ゴーストのデフォルト アニメーションの完了後に実行します。ドラッグ ゴーストは削除され、[`returnMoveEnd`]({environment:angularApiUrl}/classes/igxdragdirective.html#returnmoveend) イベントが発生されます。

#### 使用方法
```html
<div igxDrag [hideBaseOnDrag]="true" [animateOnRelease]="true" *ngFor="let elem of draggableElems" >
    <span [style.margin]="'auto'">{{elem.label}}</span>
</div>
```

### Drop ディレクティブ

[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) ディレクティブを使用してドラッグされている要素を領域に配置する場合、[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) を使用します。要素がドロップ領域に入ったかどうか、その後領域内でリリースされているかを決定するためにユーザーが使用できるイベントを提供します。

#### 基本構成
[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブは [`igxDrag` と同様に DOM 要素に適用できます。 

````html
<div igxDrop>Drop here</div>
````

[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブにドロップした [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) 要素は、インスタンス化した [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) を持つ要素の子として付け加えるロジックがデフォルトで提供されます。[`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブの [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) イベントをキャンセルしてオーバーライドできます。[`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) イベントが提供する [`cancel`]({environment:angularApiUrl}/interfaces/igxdropeventargs.html#cancel) 引数を設定して行うことができます。

ドロップ ロジックを定義し、[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) の [`animateOnRelease`]({environment:angularApiUrl}/classes/igxdragdirective.html#animateonrelease) 入力を true に設定した場合、DOM 操作完了後に [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) の [`dropFinished()`]({environment:angularApiUrl}/classes/igxdragdirective.html#dropfinished) メソッドも呼び出すことが推奨されます。[`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) に通知して関連する配置を DOM の新しい位置に更新することにより、正しくアニメーション化します。

[`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) デフォルトのドロップ ロジックをキャンセルの例。

````html
<div igxDrop (onDrop)="onElemDrop($event)">Drop here</div>
````

````ts
public onElemDrop(event: IgxDropEventArgs) {
    event.cancel = true; // This cancels the default drop logic
    // ...
    // Custom implementation logic
    // ...

    // This is required to tell the dragged element the dropping has finished, so it can return to the new location/old location.
    // It can be called anywhere in the code as well.
    event.drag.dropFinished(); 
}
````

#### 高度な設定
1 つの要素に [`igxDrag`]({environment:angularApiUrl}/classes/igxdragdirective.html) と [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) 両方のディレクティブを使用できます。ただし、他の要素が [`igxDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html) ディレクティブの [`onDrop`]({environment:angularApiUrl}/classes/igxdropdirective.html#ondrop) イベントをキャンセルしてドロップされているときはカスタム ロジックを使用してください。

#### 使用方法
````html
<div class="dropArea" igxDrop (onEnter)="onAreaEnter()" (onLeave)="onAreaLeave()">
    <span *ngIf="!elementInsideArea">Drag here.</span>
    <span *ngIf="elementInsideArea">Release to put element here.</span>
</div>
````

````ts
//App component...
public onAreaEnter() {
    this.elementInsideArea = true;
    this.changeDetectionRef.detectChanges();
}
public onAreaLeave() {
    this.elementInsideArea = false;
    this.changeDetectionRef.detectChanges();
}
//...
````


### API
* [IgxDragDirective]({environment:angularApiUrl}/classes/igxdragdirective.html)
* [IgxDropDirective]({environment:angularApiUrl}/classes/igxdropdirective.html)

### リファレンス

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語) ](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語) ](https://github.com/IgniteUI/igniteui-angular)
