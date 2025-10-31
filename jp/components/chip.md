---
title: Angular Chip コンポーネント - Ignite UI for Angular | インフラジスティックス
_description: Ignite UI for Angular Chip コンポーネントは入力、属性、または操作を表す小さい要素を提供します。
_keywords: Angular Chip, Angular Chip コンポーネント, Angular Chip Area, Angular Chip Area, Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スイート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular UI コンポーネント
_language: ja
---

# Angular Chip (チップ) コンポーネントの概要

[`Angular Chip コンポーネント`]({environment:angularApiUrl}/classes/igxchipcomponent.html)は、楕円形のコンテナーに情報を表示する視覚的要素です。コンポーネントにはテンプレート化、削除、選択などのさまざまなプロパティがあります。複数のチップの順序を変更し、チップ領域をコンテナーとして視覚的に接続できます。

## Angular Chip の例

<code-view style="height: 100px; padding-top: 10px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/chip-simple/" alt="Angular Chip の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular Chip を使用した作業の開始

Ignite UI for Angular Chip コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに **IgxChipsModule** をインポートします。

```typescript
// app.module.ts

import { IgxChipsModule } from 'igniteui-angular';
// import { IgxChipsModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxChipsModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxChipComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_CHIPS_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/chips/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { IGX_CHIPS_DIRECTIVES } from 'igniteui-angular';
import { NgFor } from '@angular/common';
// import { IGX_CHIPS_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  selector: 'app-home',
  template: `
    <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
      {{ chip.text }}
    </igx-chip>
  `,
  styleUrls: ['home.component.scss'],
  standalone: true,
  imports: [IGX_CHIPS_DIRECTIVES, NgFor],
})
export class HomeComponent {
  public chipList = [
    { text: 'Country', id: '1', icon: 'place' },
    { text: 'City', id: '2', icon: 'location_city' },
    { text: 'Address', id: '3', icon: 'home' },
    { text: 'Street', id: '4', icon: 'streetview' },
  ];
}
```

Ignite UI for Angular Chips モジュールまたはディレクティブをインポートしたので、`igx-chip` コンポーネントの使用を開始できます。

## Angular Chip コンポーネントの使用

[`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) には、[`id`]({environment:angularApiUrl}/classes/igxchipcomponent.html#id) 入力があるため、他のチップと簡単に識別できます。[`id`]({environment:angularApiUrl}/classes/igxchipcomponent.html#id) がない場合は自動的に生成します。

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id">
  {{chip.text}}
</igx-chip>
```

### 選択

<img class="responsive-img"  src="../images/chip/selecting_default.gif" />

選択は、[`selectable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selectable) 入力を `true` に設定して有効にできます。チップを選択すると、[`selectedChanging`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selectedChanging) イベントが発生します。新しい [`selected`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#selected) 値を提供することにより、新しいステートとこの選択の変更をトリガーした [`originalEvent`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#originalEvent) の元のイベントを取得できます。[`selected`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#selected) プロパティをプログラムで設定して行う場合、[`originalEvent`]({environment:angularApiUrl}/interfaces/ichipselecteventargs.html#originalEvent) 引数に値 `null` になります。

```html
<igx-chip *ngFor="let chip of chipList" [selectable]="true">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>
```

### 削除

<img class="responsive-img"  src="../images/chip/removing_default.gif" />

削除は、[`removable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removable) 入力を `true` に設定して有効にできます。有効な場合は、チップの最後に削除ボタンが描画されます。チップを削除すると、[`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) イベントが発生します。

デフォルトで、チップは削除アイコンをクリックしても DOM ツリーから自動的に削除されません。削除は手動で処理する必要があります。

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id" [removable]="true" (remove)="chipRemoved($event)">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>
```

```typescript
public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```

### ドラッグ

ドラッグは、[`draggable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removable) 入力を `true` に設定して有効にできます。有効にすると、チップをクリックしてドラッグできます。

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id" [draggable]="true">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>
```

> [!NOTE]
> チップの順序をソートするには、[`IgxChipsAreaComponent`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) を使用してイベントを処理する必要があります。

<div class="divider"></div>

**デモ サンプルを作成するには、上記の機能を使用します。**

```html
<igx-chip *ngFor="let chip of chipList" [id]="chip.id" [selectable]="true" [removable]="true" (remove)="chipRemoved($event)">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
   {{chip.text}}
</igx-chip>
```

次に、`chipList` と [`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) イベントを処理する関数を追加します。

```ts
import { IBaseChipEventArgs } from 'igniteui-angular';
// import { IBaseChipEventArgs } from '@infragistics/igniteui-angular'; for licensed package
...
public chipList = [
    {
        text: 'Country',
        id: '1',
        icon: 'place'
    },
    {
        text: 'City',
        id: '2',
        icon: 'location_city'
    },
    {
        text: 'Town',
        id: '3',
        icon: 'store'
    },
    {
        text: 'First Name',
        id: '4',
        icon: 'person_pin'
    }
];

private changeDetectionRef: any;

public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```

すべて適切に設定できると、ブラウザーで以下が表示されます。


<code-view style="height: 100px; padding-top: 10px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/chip-simple/" >
</code-view>

### Chip テンプレート

[`IgxChipComponent`]({environment:angularApiUrl}/classes/igxchipcomponent.html) のすべての要素がテンプレート化できます。

`IgxPrefix` と `IgxSuffix` ディレクティブを使用して、チップの `prefix` と `suffix` をテンプレート化できます。

<img class="responsive-img"  src="../images/chip/prefix_suffix.jpg" />

```html
<igx-chip>
  <igx-icon igxPrefix>insert_emoticon</igx-icon>
  <igx-icon igxSuffix style="transform: rotate(180deg)">insert_emoticon</igx-icon>
  <span>Why not both?</span>
</igx-chip>
```

[`--ig-size`] CSS 変数を使用して、チップのサイズをカスタマイズできます。デフォルトでは、`var(--ig-size-large)` に設定されています。`var(--ig-size-medium)` または `var(--ig-size-small)` に設定することもできますが、チップ内のすべての要素は相対的な位置を保持します。

<img class="responsive-img"  src="../images/chip/density.jpg" />

```html
<igx-chip>Hi! My name is Chip!</igx-chip>

<igx-chip style="--ig-size: var(--ig-size-medium)">
  I can be smaller!
</igx-chip>

<igx-chip style="--ig-size: var(--ig-size-small)">
  <igx-icon igxPrefix>child_care</igx-icon>
  Even tiny!
</igx-chip>
```

`select icon` をカスタマイズするには、[`selectIcon`]({environment:angularApiUrl}/classes/igxchipcomponent.html#selectIcon) 入力を使用します。`TemplateRef` 型の値を受け取り、同じ機能を保持する際にデフォルト アイコンをオーバーライドします。

<img class="responsive-img"  src="../images/chip/selecting_custom.gif" />

```html
<igx-chip *ngFor="let chip of chipList" [selectable]="true" [selectIcon]="mySelectIcon">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>

<ng-template #mySelectIcon>
  <igx-icon>check_circle</igx-icon>
</ng-template>
```

`remove icon` をカスタマイズするには、[`removeIcon`]({environment:angularApiUrl}/classes/igxchipcomponent.html#removeIcon) 入力を使用します。`TemplateRef` 型の値を取得してデフォルトの削除アイコンの代わりに描画します。

<img class="responsive-img"  src="../images/chip/remove_icons.jpg" />

```html
<igx-chip *ngFor="let chip of chipList" [removable]="true" [removeIcon]="myRemoveIcon">
  <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
  {{chip.text}}
</igx-chip>

<ng-template #myRemoveIcon>
  <igx-icon>delete</igx-icon>
</ng-template>
```

<div class="divider"></div>

### デモ

デモ サンプルを作成するには、上記の機能を使用します。

```html
<igx-chip
*ngFor="let chip of chipList"
[id]="chip.id"
[selectable]="true"
[removable]="true"
(remove)="chipRemoved($event)"
>
    <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
    {{chip.text}}
</igx-chip>
```

次に、`chipList` と [`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) イベントを処理する関数を追加します。

```ts
import { IBaseChipEventArgs } from 'igniteui-angular';
// import { IBaseChipEventArgs } from '@infragistics/igniteui-angular'; for licensed package
...
public chipList = [
    {
        text: 'Country',
        id: '1',
        icon: 'place'
    },
    {
        text: 'City',
        id: '2',
        icon: 'location_city'
    },
    {
        text: 'Town',
        id: '3',
        icon: 'store'
    },
    {
        text: 'First Name',
        id: '4',
        icon: 'person_pin'
    }
];

private changeDetectionRef: any;

public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}
```
すべて適切に設定できると、ブラウザーで以下が表示されます。


<code-view style="height: 100px; padding-top: 10px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/chip-simple/" >
</code-view>

## Chip Area

[`IgxChipsAreaComponent`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) はチップの間の操作 (ドラッグ、選択、ナビゲーションなど) が必要となる複雑なシナリオの処理で使用されます。

### Chip のソート

<img class="responsive-img"  src="../images/chip/dragging.gif" />

チップの位置を変更するため、ユーザーによってドラッグができます。ドラッグはデフォルトで無効になっていますが、[`draggable`]({environment:angularApiUrl}/classes/igxchipcomponent.html#draggable) 入力プロパティを使用して有効にできます。実際のチップのソートは手動で処理する必要があります。チップが別のチップの上にドラッグされる場合に、新しい順序を返す [`reorder`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html#reorder) イベントを提供するため、チップ領域が役に立ちます。

```html
<igx-chips-area (reorder)="chipsOrderChanged($event)">
  <igx-chip *ngFor="let chip of chipList" [draggable]="'true'">
    <igx-icon igxPrefix>{{chip.icon}}</igx-icon>
    {{chip.text}}
  </igx-chip>
</igx-chips-area>
```

```typescript
public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
}
```

### キーボード ナビゲーション

チップをフォーカスするには `Tab` キーを押すか、それをクリックします。チップがチップ領域にある場合、キーボード ナビゲーションを使用して順序を変更することができます。

- チップがフォーカスされた場合のキーボード コントロール:

  - <kbd>LEFT</kbd> - チップのフォーカスを左へ移動します。

    <img class="responsive-img"  src="../images/chip/arrow_left_key.gif" />

  - <kbd>RIGHT</kbd> - チップのフォーカスを右へ移動します。 

    <img class="responsive-img"  src="../images/chip/arrow_right_key.gif" />

  - <kbd>SPACE</kbd> - チップが選択可能な場合、選択を切り替えます。

    <img class="responsive-img"  src="../images/chip/space_key.gif" />

  - <kbd>DELETE</kbd> - [`igxChip`]({environment:angularApiUrl}/classes/igxchipcomponent.html) の [`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) イベントをトリガーし、チップ削除が手動で処理されます。
  - <kbd>SHIFT</kbd> + <kbd>LEFT</kbd> - 現在フォーカスされたチップは左に位置を移動した際に [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) の [`reorder`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html#reorder) イベントをトリガーします。
  - <kbd>SHIFT</kbd> + <kbd>RIGHT</kbd> - 現在フォーカスされたチップは右に位置を移動した際に [`igxChipArea`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html) の [`reorder`]({environment:angularApiUrl}/classes/igxchipsareacomponent.html#reorder) イベントをトリガーします。

- 削除ボタンがフォーカスされた場合のキーボード コントロール:

  - <kbd>SPACE</kbd> または <kbd>ENTER</kbd> チップの削除を手動的に処理するために [`remove`]({environment:angularApiUrl}/classes/igxchipcomponent.html#remove) 出力を発生します。

<div class="divider--half"></div>

以下は、IgxAvatar をプレフィックスとして使用し、すべてのチップにカスタム アイコンを使用するチップ領域の例です。

```html
<igx-chips-area (reorder)="chipsOrderChanged($event)">
  <igx-chip
    *ngFor="let chip of chipList"
    [id]="chip.id"
    [selectable]="true"
    [selectIcon]="mySelectIcon"
    [removable]="true"
    [removeIcon]="myRemoveIcon"
    (remove)="chipRemoved($event)"
    [draggable]="'true'">
    <igx-avatar
      class="chip-avatar-resized"
      igxPrefix
      [src]="chip.photo"
      shape="circle">
    </igx-avatar>
    {{chip.name}}
  </igx-chip>
</igx-chips-area>

<ng-template #mySelectIcon>
  <igx-icon>check_circle</igx-icon>
</ng-template>

<ng-template #myRemoveIcon>
  <igx-icon>delete</igx-icon>
</ng-template>
```

チップに合わせてアバターのサイズを変更します。

```scss
.chip-avatar-resized {
  width: 2em;
  height: 2em;
  min-width: 2em;
}
```

`chipList` とイベントを処理する関数を追加します。

```ts
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs } from 'igniteui-angular';
// import { IBaseChipEventArgs, IChipsAreaReorderEventArgs } from '@infragistics/igniteui-angular'; for licensed package

...
public chipList = [
    {
        id: '770-504-2217',
        name: 'Terrance Orta',
        photo: 'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg'
    },
    {
        id: '423-676-2869',
        name: 'Richard Mahoney',
        photo: 'https://www.infragistics.com/angular-demos/assets/images/men/13.jpg'
    },
    {
        id: '859-496-2817',
        name: 'Donna Price',
        photo: 'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg'
    }
];

private changeDetectionRef: any;

public chipRemoved(event: IBaseChipEventArgs) {
    this.chipList = this.chipList.filter((item) => {
        return item.id !== event.owner.id;
    });
    this.changeDetectionRef.detectChanges();
}

public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
    const newChipList = [];
    for (const chip of event.chipsArray) {
        const chipItem = this.chipList.filter((item) => {
            return item.id === chip.id;
        })[0];
        newChipList.push(chipItem);
    }
    this.chipList = newChipList;
}
```

すべてが適切に設定されていれば、ブラウザーで以下が表示されます。

### デモ

<code-view style="height: 100px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/chip-area-sample/" >
</code-view>

## スタイル設定

最も簡単な方法は、CSS 変数を使用してチップの外観をカスタマイズする方法です。

```css
igx-chip {
    --background: #cd201f;
    --hover-background: #cd201f;
    --focus-background: #9f1717;
    --text-color: #fff;
}
```
これらの CSS 変数の値を変更することで、チップ コンポーネントの全体的な外観を変更できます。

<div class="divider--half"></div>

チップにスタイルを設定する別の方法は、**Sass** と [`chip-theme`]({environment:sassApiUrl}/index.html#function-chip-theme) 関数を使用することです。

**Sass** を使用してチップのスタイル設定を開始するには、まずすべてのテーマ関数とコンポーネント ミックスインを含む `index` ファイルをインポートします。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`chip-theme`]({environment:sassApiUrl}/themes#function-chip-theme) を拡張して新しいテーマを作成し、チップの項目をスタイリングします。`$background` または `$selected-background` を指定することで、状態に応じた色や前景色が自動的に計算されます。必要に応じて、他のパラメーターをカスタム値でオーバーライドすることもできます。

```scss
$custom-chip-theme: chip-theme(
    $background: #57a5cd,
    $selected-background: #ecaa53,
    $remove-icon-color: #d81414,
    $border-radius: 5px,
);
```

最後に、カスタム テーマをアプリケーションに**含めます**。

```scss
@include css-vars($custom-chip-theme);
```

以下のサンプルでは、カスタマイズした CSS 変数を使用したチップ コンポーネントが、[`Ant`](https://ant.design/components/tag?theme=light#tag-demo-icon) デザイン システムのチップに視覚的に似たデザインを実現している様子を確認できます。 

<code-view style="height:100px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/data-display/chip-styling/" >
</code-view>

### カスタム サイズ変更

`igx-chip` を直接ターゲットとして `--size` 変数を使用することができます。

```scss
igx-chip {
  --size: 50px;
}
```

または、ユニバーサル変数 `--igx-chip-size` を使用して、すべてのインスタンスをターゲットにすることもできます。

```html
<div class="my-app">
  <igx-chip></igx-chip>
</div>
```

```scss
.my-app {
  --igx-chip-size: 50px;
}
```

事前定義されたサイズの 1 つを使用して、それを `--ig-size` 変数に割り当てることもできます。`--ig-size` に使用可能な値は、`--ig-size-small`、`--ig-size-medium`、`--ig-size-large` です。

```scss
igx-chip {
  --ig-size: var(--ig-size-small);
}
```

詳細については、[サイズ](display-density.md)の記事をご覧ください。

## API

* [IgxChipComponent]({environment:angularApiUrl}/classes/igxchipcomponent.html)
* [IgxChipComponent スタイル]({environment:sassApiUrl}/themes#function-chip-theme)
* [IgxChipsAreaComponent]({environment:angularApiUrl}/classes/igxchipsareacomponent.html)

## テーマの依存関係

* [IgxIcon テーマ]({environment:sassApiUrl}/themes#function-icon-theme)

## 参照

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
