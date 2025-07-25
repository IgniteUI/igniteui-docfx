---
title: Angular List ビュー | Angular List 例 | インフラジスティックス
_description: Ignite UI for Angular List コンポーネントは、アイテムの行を表示し、1 つ以上のヘッダー アイテム、およびリスト アイテムの検索とフィルタリングをサポートします。無料でお試しください。
_keywords: angular list, ignite ui for angular, angular list コンポーネント, angular list view, angular list view コンポーネント, angular ui コンポーネント
_language: ja
---

# Angular List View (リスト ビュー) コンポーネントの概要

Ignite UI for Angular List コンポーネントは項目の行を表示し、ヘッダー項目を 1 つ以上、さらにリスト項目の検索およびフィルタリングをサポートします。各リスト項目はすべての有効な HTML または [Angular コンポーネント](https://jp.infragistics.com/products/ignite-ui-angular)をサポートするテンプレートに設定できます。リスト コンポーネントは、組み込みのパンニング機能、空および読み込み状態のテンプレートも提供し、[`IgxForOf`](for-of.md) ディレクティブを使用した大きなリストの仮想化をサポートします。

## Angular List の例
次の例は、_name_ プロパティと _phone number_ プロパティを持つ連絡先が入力されたリストを表しています。[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) コンポーネントは、[`IgxAvatar`](avatar.md) と [`IgxIcon`](icon.md) を使用して、ユーザー エクスペリエンスを向上させ、**連絡先をお気に入りに追加**にアバター写真とさまざまなアイコンを設定する機能を公開します。さらに、リスト ビューは、フィルタリング パイプを使用して実現されたソート機能を公開します。

<code-view style="height: 513px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-4" alt="Angular List の例">
</code-view>

<div class="divider--half"></div>

## Ignite UI for Angular List を使用した作業の開始

Ignite UI for Angular List View コンポーネントを使用した作業を開始するには、Ignite UI for Angular をインストールする必要があります。既存の Angular アプリケーションで、以下のコマンドを入力します。

```cmd
ng add igniteui-angular
```

Ignite UI for Angular については、「[はじめに](general/getting-started.md)」トピックをご覧ください。

次に、**app.module.ts** ファイルに `IgxListModule` をインポートします。

>[!NOTE]
>このコンポーネントは、**オプションで** [`HammerModule`](https://angular.io/api/platform-browser/HammerModule) を利用できます。タッチ操作が正しく動作するために、アプリケーションのルート モジュールにインポートできます。

```typescript
// app.module.ts

import { HammerModule } from '@angular/platform-browser';
import { IgxListModule } from 'igniteui-angular';
// import { IgxListModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxListModule, HammerModule],
    ...
})
export class AppModule {}
```

あるいは、`16.0.0` 以降、`IgxListComponent` をスタンドアロンの依存関係としてインポートすることも、[`IGX_LIST_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/list/public_api.ts) トークンを使用してコンポーネントとそのすべてのサポート コンポーネントおよびディレクティブをインポートすることもできます。

```typescript
// home.component.ts

import { HammerModule } from '@angular/platform-browser';
import { IGX_LIST_DIRECTIVES } from 'igniteui-angular';
// import { IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-list>
        <igx-list-item isHeader="true">Header</igx-list-item>
        <igx-list-item>Item 1</igx-list-item>
        <igx-list-item>Item 2</igx-list-item>
        <igx-list-item>Item 3</igx-list-item>
    </igx-list>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_LIST_DIRECTIVES, HammerModule]
    /* or imports: [IgxListComponent, IgxListItemComponent, HammerModule] */
})
export class HomeComponent {}
```

Ignite UI for Angular List モジュールまたはディレクティブをインポートしたので、`igx-list` コンポーネントの使用を開始できます。

## Angular List の使用

連絡先コンポーネントのテンプレートでリストを作成できます。
項目がない場合は、空のリストのデフォルト テンプレートを使用できます。
[`igxEmptyList`]({environment:angularApiUrl}/classes/igxemptylisttemplatedirective.html) ディレクティブを使用して空のリストの外観をカスタマイズするためにカスタム テンプレートを設定できます。この場合、デフォルト テンプレートは使用されません。

```html
<!--contacts.component.html-->

<igx-list>
    <ng-template igxEmptyList>
        <p class="empty">No contacts! :(</p>
    </ng-template>
</igx-list>
```

空のテンプレートのスタイル:

```css
/* contacts.component.css */

.empty {
    color: rgba(0, 153, 255, 1);
    font-size: 25px;
    font-weight: 600;
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
}
```

空のリストは以下のようになります:


<code-view style="height: 100px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-5" >
</code-view>


データの読み込みで遅延が発生した場合、リストの [`isLoading`]({environment:angularApiUrl}/classes/igxlistcomponent.html#isloading) プロパティを `true` に設定し、デフォルト テンプレートで処理中のデータ読み込み処理についてユーザーに通知できます。[`igxDataLoading`]({environment:angularApiUrl}/classes/igxdataloadingtemplatedirective.html) ディレクティブを使用してカスタムの読み込みテンプレートを提供できます。

```html
<!--contacts.component.html-->

<igx-list>
    <ng-template igxDataLoading>
        <p class="loading">Patience, we are currently loading your data...</p>
    </ng-template>
</igx-list>
```
```css
/* contacts.component.css */

.loading {
    color: rgba(255, 153, 0, 1);
    font-size: 25px;
    font-weight: 600;
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
}
```

<code-view style="height: 300px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-6" >
</code-view>


### リスト項目の追加

リストが空の場合にテンプレートは便利ですが、次は項目を追加します。以下のコードを追加すると項目の簡易なリストを作成できます。

```html
<!--contacts.component.html-->

<igx-list>
    <igx-list-item isHeader="true">Header</igx-list-item>
    <igx-list-item>Item 1</igx-list-item>
    <igx-list-item>Item 2</igx-list-item>
    <igx-list-item>Item 3</igx-list-item>
</igx-list>
```

以下は結果です:


<code-view style="height: 200px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-2" >
</code-view>


リスト項目にカスタム マークアップおよびスタイルを適用します。たとえば、名前の下に電話番号が表示される連絡先の Angular リストを作成する場合、コンポーネントの typescript ファイルで連絡先のリストを定義します。

```typescript
// contacts.component.ts
...
public contacts = [{
    name: "Terrance Orta",
    phone: "770-504-2217"
}, {
    name: "Richard Mahoney",
    phone: "423-676-2869"
}, {
    name: "Donna Price",
    phone: "859-496-2817"
}, {
    name: "Lisa Landers",
    phone: "901-747-3428"
}, {
    name: "Dorothy H. Spencer",
    phone: "573-394-9254"
}];
```

データを描画するマークアップを作成します。
すぐにスタイル設定したい場合は、リスト項目に付属するディレクティブを使用できます。

以下の例では、それらを使用する方法を示します。

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    Contacts
  </igx-list-item>
  <igx-list-item *ngFor="let contact of contacts">
    <h4 igxListLineTitle>{{ contact.name }}</h4>
    <p igxListLineSubTitle>{{ contact.phone }}</p>
  </igx-list-item>
</igx-list>
```

`igxListLineTitle` と `igxListLineSubTitle` ディレクティブは両方とも、リスト項目にデフォルトの外観を指定します。

結果は以下のようになります。


<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-3" >
</code-view>


### アバターおよびアイコンの追加

その他のコンポーネントを [`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) と共に使用してエクスペリエンスの向上や機能拡張が可能です。名前や電話番号の値の左に画像のアバターを表示できます。また、連絡先をお気に入りに追加するための星アイコンを右側に追加できます。要素を追加するには、[**IgxAvatar**](avatar.md) および [**IgxIcon**](icon.md) モジュールを app.module.ts ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule
} from 'igniteui-angular';
// import { IgxListModule, IgxAvatarModule, IgxIconModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

連絡先オブジェクトにアバターの `photo` ソースおよび連絡先のお気に入り状態を示す `isFavorite` プロパティを追加します。

```typescript
// contacts.component.ts

public contacts = [{
    name: 'Terrance Orta',
    phone: '770-504-2217',
    photo: 'https://randomuser.me/api/portraits/men/27.jpg',
    isFavorite: false
}, {
    name: 'Richard Mahoney',
    phone: '423-676-2869',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    isFavorite: true
}, {
    name: 'Donna Price',
    phone: '859-496-2817',
    photo: 'https://randomuser.me/api/portraits/women/50.jpg',
    isFavorite: false
}, {
    name: 'Lisa Landers',
    phone: '901-747-3428',
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
    isFavorite: false
}, {
    name: 'Dorothy H. Spencer',
    phone: '573-394-9254',
    photo: 'https://randomuser.me/api/portraits/women/67.jpg',
    isFavorite: true
}];
```

連絡先リストのテンプレートをアバターおよびアイコンを表示するために更新します。リスト ディレクティブを使用してテンプレートを更新できます。

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    Contacts
  </igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts;">
      <igx-avatar igxListThumbnail [src]="contact.photo" shape="circle"></igx-avatar>
      <h4 igxListLineTitle>{{ contact.name }}</h4>
      <p igxListLineSubTitle class="phone">{{ contact.phone }}</p>
      <span igxListLine>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, laborum.</span>
      <igx-icon igxListAction [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)">star</igx-icon>
  </igx-list-item>
</igx-list>
```

- `igxListThumbnail` は、リスト項目の開始に何らかのメディアを追加する必要がある場合に使用します。このディレクティブは、ターゲット要素 (この場合は igx-avatar) を、デフォルトの位置と間隔を提供するコンテナーにラップします。
- `igxListAction` は、スイッチ、ラジオ ボタン、チェックボックスなど、アクションまたはメタデータを持つリスト項目に使用します。この場合、アクションは `igx-icon` で表示されます。ディレクティブは、正しい位置と間隔のコンテナーでターゲット要素をラップします。
- `igxListLine` は、`igxListThumbnail` と `igxListAction` の間にテキストが必要な場合に使用します。このディレクティブは、テキストの位置、間隔、配置が残りのディレクティブと外観がよくなるようにします。

次に、連絡先オブジェクトの isFavorite プロパティを切り替えるために [**IgxIcon**](icon.md) コンポーネントでクリック イベントをリッスンします。

```typescript
// contacts.component.ts

...
toggleFavorite(item: IgxListItem) {
    const contact = this.contacts[item.index - 1];
    contact.isFavorite = !contact.isFavorite;
}
```

また、`--ig-size` カスタム CSS プロパティを使用して、ユーザーがリストのサイズを選択できるようにすることができます。これには、`IgxButtonGroupModule` をインポートし、[**IgxButtonGroup**](button-group.md) を使用してすべてのサイズ値を表示します。このようにして、選択されるたびに、リストの**サイズ**が更新されます。

```typescript
// app.module.ts
...
import { IgxButtonGroupModule } from 'igniteui-angular';
// import { IgxButtonGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [..., IgxButtonGroupModule]
})
```

```html
<!--contacts.component.html-->

<igx-buttongroup [values]="sizes" (selected)="selectSize($event)"></igx-buttongroup>
...
<igx-list>
    ...
</igx-list>
```

```typescript
// contacts.component.ts

public size = 'large';
public sizes;

public ngOnInit() {
    this.sizes = [
        { label: 'large', selected: this.size === 'large', togglable: true },
        { label: 'medium', selected: this.size === 'medium', togglable: true },
        { label: 'small', selected: this.size === 'small', togglable: true }
    ];
}

public selectSize(event: any) {
    this.size = this.sizes[event.index].label;
}


@HostBinding('style.--ig-size')
protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
}
```

結果は以下のようになります。


<code-view style="height: 513px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-4" >
</code-view>

<div class="divider--half"></div>

### リスト項目パンニング

連絡先や電話番号の Angular リストなどを作成しましたが、次に連絡先に電話を掛ける機能を追加します。
[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) はリスト項目パンニングに最適です。
以下の手順に沿って作成します。
- [`allowLeftPanning`]({environment:angularApiUrl}/classes/igxlistcomponent.html#allowLeftPanning) と [`allowRightPanning`]({environment:angularApiUrl}/classes/igxlistcomponent.html#allowRightPanning) またはそのいずれかを使用してパンニングを有効にします。
- 右と左またはそのいずれかのテンプレートを定義します。
- リスト項目のパンニング イベントを処理して必要なアクションを実行します。

以下は、右と左両方のパンニングを処理する方法の例です。右パンニングのイベント ハンドラーは、トースト メッセージを表示します。左パンニングのイベント ハンドラーは、[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) から項目を削除します。

> [!NOTE]
> リスト項目の削除はアプリケーション タスクであることに注意してください。[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) にデータソース参照がないため、[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) は項目をデータソースから削除できません。

以下は HTML コードです。

```html
<!-- contacts.component.html -->

<igx-list [allowLeftPanning]="true" [allowRightPanning]="true"
  (leftPan)="leftPanPerformed($event)" (rightPan)="rightPanPerformed($event)">
  <ng-template igxListItemLeftPanning>
    <div class="listItemLeftPanningStyle">
      <igx-icon [color]="white" style="margin-left:10px">delete</igx-icon>Delete
    </div>
  </ng-template>
  <ng-template igxListItemRightPanning>
    <div class="listItemRightPanningStyle">
      <igx-icon [color]="white" style="margin-right:10px">call</igx-icon>Dial
    </div>
  </ng-template>
  <igx-list-item isHeader="true">Contacts</igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts">
    <igx-avatar igxListThumbnail [src]="contact.photo" shape="circle"></igx-avatar>
    <h4 igxListLineTitle>{{ contact.name }}</h4>
    <p igxListLineSubTitle class="phone">{{ contact.phone }}</p>
    <igx-icon igxListAction [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)">star</igx-icon>
  </igx-list-item>
</igx-list>

<igx-toast #toast></igx-toast>
```

上記の例は、CSS スタイルを使用します。

```css
/* contacts.component.css */

igx-icon {
    cursor: pointer;
    user-select: none;
}

.listItemLeftPanningStyle {
    display: flex;
    flex-direction: row-reverse;
    background-color:orange;
    color: white;
    width: 100%;
    padding-right: 10px;
    align-items: center;
}

.listItemRightPanningStyle {
    display: flex;
    flex-direction: row;
    background-color:limegreen;
    color: white;
    width: 100%;
    padding-left: 10px;
    align-items: center;
}
```
最後にパンニング イベントを処理するタイプスクリプト コードを使用します。

```typescript
// contacts.component.ts

...
@ViewChild('toast')
public toast: IgxToastComponent;

public rightPanPerformed(args) {
  args.keepItem = true;
  this.toast.message = 'Dialing ' + this.contacts[args.item.index - 1].name;
  this.toast.open();
}

public leftPanPerformed(args) {
  args.keepItem = false;
  setTimeout((idx = args.item.index - 1) => {
    this.toast.message = 'Contact ' + this.contacts[idx].name + ' removed.';
    this.toast.open();
    this.contacts.splice(idx, 1);
  }, 500);
}

...
```

> [!NOTE]
> リスト項目のパンニング時にパンニング イベントが発生するために達する必要のあるしきい値があります。[`IgxList`]({environment:angularApiUrl}/classes/igxlistcomponent.html) [`panEndTriggeringThreshold`]({environment:angularApiUrl}/classes/igxlistcomponent.html#panEndTriggeringThreshold) プロパティを使用するしきい値を変更できます。このプロパティのデフォルトは 0.5 でリスト項目幅の 50% を意味します。

次にリスト項目をパンニングします。


<code-view style="height: 500px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-7" >
</code-view>

<div class="divider--half"></div>

## Angular フィルター リスト

リストで連絡先を名前によって検索する機能を追加します。これはフィルタリング パイプを使用して実装できます。

Angular コンポーネント テンプレートの上側に入力フィールドを追加し、コンポーネントの _searchContact_ プロパティにバインドします:

```html
<!--contacts.component.html-->

<igx-input-group type="search" class="search">
    <igx-prefix>
        <igx-icon>search</igx-icon>
    </igx-prefix>
    <input #search igxInput placeholder="Search Contacts" [(ngModel)]="searchContact">
    <igx-suffix *ngIf="search.value.length > 0" (click)="searchContact = null">
        <igx-icon>clear</igx-icon>
    </igx-suffix>
</igx-input-group>
```

`IgxFilterModule` および `IgxInputGroupModule` を app.module.ts ファイルにインポートし、[`IgxFilterOptions`]({environment:angularApiUrl}/classes/igxfilteroptions.html) を連絡先コンポーネントにインポートします。

```typescript
// app.module.ts
...
import { IgxFilterModule, IgxInputGroupModule } from 'igniteui-angular';
// import { IgxFilterModule, IgxInputGroupModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [..., IgxFilterModule, IgxInputGroupModule]
})

// contacts.component.ts
...
import { IgxFilterOptions } from 'igniteui-angular';
// import { IgxFilterOptions } from '@infragistics/igniteui-angular'; for licensed package

@Component({...})
export class ContactListComponent {
    public searchContact: string;
    ...
    get filterContacts(): IgxFilterOptions {
        const fo = new IgxFilterOptions();
        fo.key = 'name';
        fo.inputValue = this.searchContact;
        return fo;
    }
}
```

[`IgxFilterOptions`]({environment:angularApiUrl}/classes/igxfilteroptions.html) をインポートした後、`searchContact` プロパティの更新でパイプによって使用されるフィルタリング オプションを返すゲッター メソッドを登録します。フィルターが機能するために連絡先オブジェクトのフィルター `key` を登録します。この場合、各連絡先の `name` です。[`IgxFilterOptions`]({environment:angularApiUrl}/classes/igxfilteroptions.html) オブジェクトで登録する 2 番目のプロパティは連絡先の名前を比較する値です。連絡先リストの上の入力フィールドにバインドした `searchContact` プロパティです。

フィルタリング パイプを連絡先のデータに適用します。テンプレートで以下のコードを追加します:

```html
<!--contacts.component.html-->

<igx-list-item *ngFor="let contact of contacts | igxFilter: filterContacts; let i = index">
    ...
</igx-list-item>
```

<div class="divider--half"></div>

## リスト項目の選択

リスト項目には、どの項目が「選択」されているかを追跡するのに役立つ `selected` プロパティがあります。このプロパティを使用すると、各項目の選択状態を識別および管理できます。

以下の例は、`selected` プロパティを使用したときに項目の視覚スタイルがどのように変化するかを示しています。

<code-view style="height: 420px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-item-selection" >
</code-view>

デフォルトで、`selected` プロパティは `false` に設定されています。各リスト項目の `(click)` イベントにバインドされたインライン式を使用して値を切り替えることができ、クリックされるたびに項目の視覚的な状態を効果的に切り替えることができます。

```html
<igx-list>
    <igx-list-item [isHeader]="true">Contacts</igx-list-item>
    @for (contact of contacts | igxFilter: filterContacts; track contact) {
      <igx-list-item [selected]="contact.selected" (click)="contact.selected = !contact.selected">
        <igx-avatar igxListThumbnail [src]="contact.photo" shape="circle"></igx-avatar>
        <span igxListLineTitle>{{ contact.name }}</span>
        <span igxListLineSubTitle>{{ contact.phone }}</span>
        <igx-icon igxListAction [style.color]="contact.isFavorite ? 'orange' : 'lightgray'" igxRipple="pink"
          [igxRippleCentered]="true" (click)="toggleFavorite(contact, $event)"
        (mousedown)="mousedown($event)">star</igx-icon>
      </igx-list-item>
    }
  </igx-list>
```

リスト項目には、選択した要素のさまざまな部分のスタイルを設定するために使用できるいくつかの CSS 変数も公開されています。

- `--item-background-selected`
- `--item-text-color-selected`
- `--item-title-color-selected`
- `--item-action-color-selected`
- `--item-subtitle-color-selected`
- `--item-thumbnail-color-selected`

```scss
igx-list-item {
  --item-background-selected: var(--ig-secondary-500);
  --item-title-color-selected: var(--ig-secondary-500-contrast);
  --item-subtitle-color-selected: var(--ig-info-100);
}
```

リストのテーマ変数を使用する場合は、リスト項目の選択状態のスタイルを設定できるパラメーターが用意されています。これらのパラメーターの詳細については、[`list-theme`]({environment:sassApiUrl}/themes#function-list-theme) を参照してください。

<div class="divider--half"></div>

## Chat コンポーネント
以下のサンプルは、**IgxList** を使用して作成したシンプルなチャットです。

<code-view style="height: 650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-chat-sample" >
</code-view>

<div class="divider--half"></div>

## List コンポーネントにテーマの適用

以下は、リストの背景を変更する方法を説明します。まず、index.scss をコンポーネントの .scss ファイルにインポートします。

```scss
@use "igniteui-angular/theming" as *;

// 重要: Ignite UI for Angular 13 より前のバージョンは、次を使用してください。
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

最もシンプルな方法として、[`list-theme`]({environment:sassApiUrl}/themes#function-list-theme) を拡張し、`$background` パラメーターだけを指定することで、状態ごとのカラーや適切なコントラストの前景色が自動的に計算されます。必要に応じて手動で指定することも可能です。

```scss
$my-list-theme: list-theme(
  $background: #57a5cd
);
```

リストのスタイル設定に使用できるパラメーターの完全なリストについては、[`list-theme`]({environment:sassApiUrl}/themes#function-list-theme) セクションを参照してください。

最後にコンポーネントのテーマを**含めます**。

```scss
@include css-vars($my-list-theme);
```

以下は上記コードの結果です。

<code-view style="height: 365px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/lists/list-sample-8" >
</code-view>

リスト コンポーネントに変更できるパラメーターの完全なリストについては、[IgxListComponent スタイル]({environment:sassApiUrl}/themes#function-list-theme)を参照してください。

## API リファレンス

この記事では Angular List コンポーネントについて説明しました。アバターおよびアイコンの Ignite UI for Angular コンポーネントを使用して連絡先項目のリストを作成し、カスタム項目レイアウトを作成してスタイル設定、更にリスト フィルタリングを追加しました。以下は、List コンポーネントのその他の API です。

* [IgxListComponent API]({environment:angularApiUrl}/classes/igxlistcomponent.html)
* [IgxListComponent スタイル]({environment:sassApiUrl}/themes#function-list-theme)
* [IgxListItemComponent API]({environment:angularApiUrl}/classes/igxlistitemcomponent.html)

使用したその他の Angular コンポーネント:

* [IgxAvatarComponent API]({environment:angularApiUrl}/classes/igxavatarcomponent.html)
* [IgxAvatarComponent スタイル]({environment:sassApiUrl}/themes#function-avatar-theme)
* [IgxIconComponent API]({environment:angularApiUrl}/classes/igxiconcomponent.html)
* [IgxIconComponent スタイル]({environment:sassApiUrl}/themes#function-icon-theme)

<div class="divider"></div>

## テーマの依存関係
* [IgxRipple テーマ]({environment:sassApiUrl}/themes#function-ripple-theme)
* [IgxAvatar テーマ]({environment:sassApiUrl}/themes#function-avatar-theme)

## その他のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
