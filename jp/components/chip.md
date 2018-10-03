---
title: Chip コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Chip コンポーネントは入力、属性、または操作を表す小さい要素を提供します。
_keywords: ジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Chip, Chip コンポーネント, ChipArea, ChipArea コンポーネント
_language: ja
---

### Chip

[`IgxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) は情報を小さな楕円内に表示する視覚的なコンポーネントです。Chip は、テンプレート化、削除、選択が可能で複数の Chip の順序を変更して視覚的に接続することもできます。Chip は「チップ領域」と呼ばれるコンテナーに配置され、このコンテナーは Chip の間の操作を管理します。

#### デモ

<div class="sample-container loading" style="height:650px">
    <iframe id="chip-sample-iframe  " src='{environment:demosBaseUrl}/chip-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="chip-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

#### Chip の初期化

[`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) はチップ要素のメイン クラスで、[`IgxChipsAreaComponent`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) はチップ領域のメイン クラスです。
チップ領域はチップの間の操作 (ドラッグ、選択、ナビゲーションなど) が必要の複雑なシナリオの処理で使用されます。別の要素を識別するために [`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) で [`id`]({environment:angularApiUrl}/classes/igxchipcomponent.html#id) を定義する必要があります。

[`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) を [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) と使用した例:

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

### 機能

#### 選択

選択はデフォルトで無効ですが、[`selectable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selectable) オプションを使用して有効にできます。チップをクリックするか、チップを `Tab` キーによってフォーカスして `Space` キーを押すと選択できます。[`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) の選択状態が変更すると、[`onSelection`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onselection) イベントは発生されます。選択されたチップをクリックするか、チップがフォーカスされる場合に `Space` キーを押すと選択解除できます。

```html
<igx-chips-area #chipsArea>
    <igx-chip *ngFor="let chip of chipList" [selectable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```ts
public ngOnInit() {
    chipsArea.forEach((chip) => {
        chip.selectable = true;
    });
}
```

#### 削除

`remove button` はチップの部分です。削除ボタンの表示状態を [`removable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removable) ブール値オプションによって制御できます。ユーザーがチップを削除するときに [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) イベントが発生されます。

```html
<igx-chips-area #chipsArea>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id" [removable]="'true'" (onRemove)="chipRemoved($event)">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```ts
public ngOnInit() {
    chipsArea.forEach((chip) => {
        chip.removable = true;
    });
}

public chipRemoved(event) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.cdr.detectChanges();
}
```

#### 移動/ドラッグ

チップの位置を変更するためにユーザーによってドラッグできます。移動/ドラグ機能はデフォルトで無効ですが、[`draggable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#draggable) オプションを使用して有効にできます。データソースでチップの移動を手動的に処理する必要があります。

```html
<igx-chips-area #chipArea (onReorder)="chipsOrderChanged($event)">
    <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

```ts
public ngOnInit() {
    chipArea.forEach((chip) => {
        chip.draggable = true;
    });
}

public chipsOrderChanged(event) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
    event.isValid = true;
}

```

![Dragging](../images/dragging.gif)

#### Chip テンプレート

[`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) の構造は主にチップのコンテンツ、削除ボタン、[`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html)、[`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html)、[`connector`]({environment:angularApiUrl}/classes/igxconnectordirective.html) です。削除ボタン以外の要素をテンプレート化できます。

チップのコンテンツは、チップの [`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html)、[`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html)、または [`connector`]({environment:angularApiUrl}/classes/igxconnectordirective.html) を定義する要素以外のテンプレートに定義されるコンテンツです。コンテンツは任意のタイプを定義できます。

[`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) および [`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) は実際のチップ領域にある要素で、テンプレート化できます。テンプレートを指定するには、[`IgxPrefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) および [`IgxSuffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) ディレクティブを使用します。
以下は、[`prefix`]({environment:angularApiUrl}/classes/igxprefixdirective.html) にアイコン、[`label`]({environment:angularApiUrl}/classes/igxlabeldirective.html) にテキスト、[`suffix`]({environment:angularApiUrl}/classes/igxsuffixdirective.html) にカスタム アイコン ボタンを使用した例です。

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <igx-icon igxPrefix fontSet="material" [name]="'drag_indicator'"></igx-icon>
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxSuffix *ngIf="removable" igxButton="icon" (click)="onClick()">
        <igx-icon fontSet="material" [name]="'close'"></igx-icon>
    </span>
</igx-chip>
```

[`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) の [`connectors`]({environment:angularApiUrl}/classes/igxconnectordirective.html) はテンプレート化が可能で、各チップの後に配置して隣り合わせたチップをアイコンやテキストなどとリンクします。最後のチップ (右端) に connector はありません。コネクターはチップのドラッグ操作で非表示し、チップとの操作が完了した後に表示します。connector は [`IgxConnector`]({environment:angularApiUrl}/classes/igxconnectordirective.html) ディレクティブによって定義されます。

プレフィックス コネクターの例:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxConnector> -> </span>
</igx-chip>
```

サフィックス コネクターの例:

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxSuffixConnector> -> </span>
</igx-chip>
```

#### キーボード ナビゲーション

チップをフォーカスするには `Tab` キーを押すか、それをクリックします。チップを順序変更するにはキーボード ナビゲーションを使用します。

- チップがフォーカスされた場合のキーボード コントロール:

  - <kbd>LEFT</kbd> - 左側にあるチップをフォーカスします。
  - <kbd>RIGHT</kbd> - 右側にあるチップをフォーカスします。
  - <kbd>SPACE</kbd> - チップが選択可能な場合、選択状態を切り替えます。
  - <kbd>DELETE</kbd> - チップの削除を手動的に処理するために [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) 出力を発生します。
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - フォーカスされたチップの位置を 1 つ左へ移動します。
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - フォーカスされたチップの位置を 1 つ右へ移動します。

- 削除ボタンがフォーカスされた場合のキーボード コントロール:

  - <kbd>SPACE</kbd> または <kbd>ENTER</kbd> チップの削除を手動的に処理するために [`onRemove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#onremove) 出力を発生します。

### API

* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent Styles]({environment:sassApiUrl}/index.html#function-igx-chip-theme)
* [IgxChipsAreaComponent]({environment:angularApiUrl}/classes/igxchipsareacomponent.html)
* [IgxPrefixDirective]({environment:angularApiUrl}/classes/igxprefixdirective.html)
* [IgxSuffixDirective]({environment:angularApiUrl}/classes/igxsuffixdirective.html)
* [IgxConnectorDirective]({environment:angularApiUrl}/classes/igxconnectordirective.html)
* [IgxLabelDirective]({environment:angularApiUrl}/classes/igxlabeldirective.html)

### 参照

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
