---
title: Chip コンポーネント - ネイティブ Angular | Ignite UI for Angular
_description: Ignite UI for Angular Chip コンポーネントは入力、属性、または操作を表す小さい要素を提供します。
_keywords: ジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, ネイティブ Angular コンポーネント, Chip, Chip コンポーネント, ChipArea, ChipArea コンポーネント
---

### Chip

`igxChip` は情報を楕円内に表示する小さい視覚的なコンポーネントです。Chip をテンプレート化、削除、または選択できます。複数の Chip を順序変更し、視覚的に接続できます。Chip は「チップ領域」と呼ばれるコンテナーに配置されます。このコンテナーは Chip の間の操作を管理します。

#### デモ

<div class="sample-container loading" style="height:625px">
    <iframe id="chip-sample-iframe  " src='{environment:demosBaseUrl}/chip-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="chip-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で開く</button>
</div>

#### Chip の初期化

The `IgxChipComponent` はチップ要素のメイン クラスで、`IgxChipsAreaComponent`はチップ領域のメイン クラスです。
チップ領域はチップの間の操作 (ドラッグ、選択、ナビゲーションなど) が必要の複雑なシナリオの処理で使用されます。別の要素を識別するために `IgxChipComponent` で `id` を定義する必要があります。

`igxChip` を `igxChipArea` と使用した例:

```html
<igx-chips-area>
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
        <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    </igx-chip>
</igx-chips-area>
```

### 機能

#### 選択

選択はデフォルトで無効ですが、`selectable` オプションを使用して有効にできます。チップをクリックするか、チップを `Tab` キーによってフォーカスして `Space` キーを押すと選択できます。`igxChip` の選択状態が変更すると、`onSelection` イベントは発生されます。選択されたチップをクリックするか、チップがフォーカスされる場合に `Space` キーを押すと選択解除できます。

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

`remove button` はチップの部分です。削除ボタンの表示状態を `removable` ブール値オプションによって制御できます。ユーザーがチップを削除するときに `onRemove` イベントが発生されます。

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

チップの位置を変更するためにユーザーによってドラッグできます。移動/ドラグ機能はデフォルトで無効ですが、`draggable` オプションを使用して有効にできます。データソースでチップの移動を手動的に処理する必要があります。

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

`IgxChipComponent` の構造は主にチップのコンテンツ、削除ボタン、prefix、suffix、`connector` です。削除ボタン以外の要素をテンプレート化できます。

チップのコンテンツは、チップの `prefix`、`suffix`、または `connector` を定義する要素以外のテンプレートに定義されるコンテンツです。コンテンツは任意のタイプを定義できます。

`prefix` および `suffix` は実際のチップ領域にある要素で、テンプレート化できます。テンプレートを指定するには、IgxPrefix および IgxSuffix ディレクティブを使用します。
以下は、`prefix` にアイコン、`label` にテキスト、`suffix` にカスタム アイコン ボタンを使用した例です。

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
    <igx-icon igxPrefix fontSet="material" [name]="'drag_indicator'"></igx-icon>
    <span #label [class]="'igx-chip__text'">{{chip.text}}</span>
    <span igxSuffix *ngIf="removable" igxButton="icon" (click)="onClick()">
        <igx-icon fontSet="material" [name]="'close'"></igx-icon>
    </span>
</igx-chip>
```

`igxChip` の `connectors` はテンプレート化が可能で、各チップの後に配置して隣り合わせたチップをアイコンやテキストなどとリンクします。最後のチップ (右端) に connector はありません。コネクターはチップのドラッグ操作で非表示し、チップとの操作が完了した後に表示します。connector は `IgxConnector` ディレクティブによって定義されます。

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
  - <kbd>RIGTH</kbd> - 右側にあるチップをフォーカスします。
  - <kbd>SPACE</kbd> - チップが選択可能な場合、選択状態を切り替えます。
  - <kbd>DELETE</kbd> - チップの削除を手動的に処理するために `onRemove` 出力を発生します。
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - フォーカスされたチップの位置を 1 つ左に移動します。
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - フォーカスされたチップの位置を 1 つ右に移動します。

- 削除ボタンがフォーカスされた場合のキーボード コントロール:

  - <kbd>SPACE</kbd> または <kbd>ENTER</kbd> チップの削除を手動的に処理するために `onRemove` 出力を発生します。

### 参照

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーカス** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
