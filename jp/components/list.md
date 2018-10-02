---
title: List View コンポーネント
_description: Ignite UI for Angular List View コンポーネントを使用すると、ネイティブ Angular フレームワークで行にデータを任意のテンプレートを使用して表示します。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular List View コンポーネント, Angular List View コントロール
_language: ja
---

## List View

<p class="highlight">Ignite UI for Angular List コンポーネントは項目の行を表示し、ヘッダー項目を 1 つ以上、さらにリスト項目の検索およびフィルタリングをサポートします。各リスト項目はすべての有効な HTML または Angular コンポーネントをサポートするテンプレートに設定できます。</p>
<div class="divider"></div>

### List デモ

<div class="sample-container loading" style="height: 477px">
<iframe id="list-sample-4-iframe" src='{environment:demosBaseUrl}/list-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

### 使用方法

List コンポーネントは項目の垂直リストを表示します。項目のデフォルト スタイル設定はマテリアル デザイン [**ガイドライン**](https://material.io/guidelines/components/lists.html)の単一行リストの仕様に基づきます。
Ignite UI for Angular List を初期化する前に、最初に **IgxListModule** を **app.module.ts** ファイルにインポートします:

```typescript
// app.module.ts

...
import { IgxListModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxListModule],
    ...
})
export class AppModule {}
```

連絡先コンポーネントのテンプレートでリストを作成できます。項目がない場合は、空のリストのデフォルト テンプレートを使用できます。`igxEmptyList` ディレクティブを使用して空のリストの外観をカスタマイズするためにカスタム テンプレートを設定できます。この場合、デフォルト テンプレートは使用されません。

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

<div class="sample-container loading" style="height: 100px">
<iframe id="list-sample-5-iframe" src='{environment:demosBaseUrl}/list-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

データの読み込みで遅延が発生した場合、リストの `isLoading` プロパティを `true` に設定し、デフォルト テンプレートで処理中のデータ読み込み処理についてユーザーに通知できます。`igxDataLoading` ディレクティブを使用してカスタムの読み込みテンプレートを提供できます。

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

<div class="sample-container loading" style="height: 300px">
<iframe id="list-sample-6-iframe" src='{environment:demosBaseUrl}/list-sample-6' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-6-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### リスト項目の追加

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

<div class="sample-container loading" style="height: 200px">
<iframe id="list-sample-2-iframe" src='{environment:demosBaseUrl}/list-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### カスタム リスト項目

リスト項目にカスタム マークアップおよびスタイルを適用します。たとえば、名前の下に電話番号が表示される連絡先のリストを作成する場合、コンポーネントの typescript ファイルで連絡先のリストを定義します。

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

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    連絡先
  </igx-list-item>
  <igx-list-item *ngFor="let contact of contacts">
    <span class="name">{{ contact.name }}</span>
    <span class="phone">{{ contact.phone }}</span>
  </igx-list-item>
</igx-list>
```

> [!NOTE]
> リスト項目の表示値は `flex` で、`flex-direction` が `column` に設定されます。リスト レイアウトの作成に注意してください。

連絡先の名前および電話番号を表示するために span 要素を使用した場合も、要素は垂直方向に表示されます。これは各リスト項目の列レイアウトのためです。カスタム スタイル設定を追加します。名前および電話番号の span 要素に _name_ および _phone_ の新しいクラスを追加し、このクラスを使用して項目にスタイルを設定します。

```css
/* contacts.component.css */

.name {
    font-weight: 600;
}

.phone {
    font-size: 0.875em;
}
```

結果は以下のようになります。

<div class="sample-container loading" style="height: 400px">
<iframe id="list-sample-3-iframe" src='{environment:demosBaseUrl}/list-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>

#### アバターおよびアイコンの追加

その他のコンポーネントを [**IgxList**](list.md) と共に使用してエクスペリエンスの向上や機能拡張が可能です。名前や電話番号の値の左に画像のアバターを表示できます。また、連絡先をお気に入りに追加するための星アイコンを右側に追加できます。要素を追加するには、[**IgxAvatar**](avatar.md) および [**IgxIcon**](icon.md) モジュールを **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule
} from 'igniteui-angular';

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

連絡先リストのテンプレートをアバターおよびアイコンを表示するために更新します。

```html
<!--contacts.component.html-->

<igx-list>
  <igx-list-item isHeader="true">
    連絡先
  </igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts;">
    <div class="item-container">
      <div class="contact">
        <igx-avatar [src]="contact.photo" roundShape="true"></igx-avatar>
        <div class="contact__info">
          <span class="name">{{ contact.name }}</span>
          <span class="phone">{{ contact.phone }}</span>
        </div>
      </div>
      <igx-icon name="star" [color]="contact.isFavorite ? 'orange' : 'lightgray'" (click)="toggleFavorite(item)"></igx-icon>
    </div>
  </igx-list-item>
</igx-list>
```

すべての要素を項目コンテナーにラップしてフローをスタイル設定できます。次に IgxAvatar コンポーネントを連絡先ラッパーに連絡先情報と共に追加し、最後に IgxIcon コンポーネントを追加します。マークアップの変更に基づいて css スタイルシートを更新します。

```css
/* contacts.component.css */

igx-icon {
    cursor: pointer;
    user-select: none;
}

.item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact {
    display: flex;
    flex: 1 0 240px;
    align-items: center;
}

.contact__info {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 24px;
}

.name {
    font-weight: 600;
}

.phone {
    font-size: 0.875em;
}
```

連絡先オブジェクトの _isFavorite_ プロパティを切り替えるために IgxIcon コンポーネントでクリック イベントをリッスンします。

```typescript
// contacts.component.ts

...
toggleFavorite(item: IgxListItem) {
    const contact = this.contacts[item.index - 1];
    contact.isFavorite = !contact.isFavorite;
}
```

結果は以下のようになります。

<div class="sample-container loading" style="height: 477px">
<iframe id="list-sample-4-final-iframe" src='{environment:demosBaseUrl}/list-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="list-sample-4-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">StackBlitz で表示</button>
</div>
<div class="divider--half"></div>

#### リスト項目パンニング

連絡先や電話番号のリストなどを作成しましたが、次に連絡先に電話を掛ける機能を追加します。
**IgxList** はリスト項目パンニングに最適です。
以下の手順に沿って作成します。
- `allowLeftPanning` と `allowRightPanning` またはそのいずれかを使用してパンニングを有効にします。
- 右と左またはそのいずれかのテンプレートを定義します。
- リスト項目のパンニング イベントを処理して必要なアクションを実行します。

以下は、右と左両方のパンニングを処理する方法の例です。右パンニングのイベント ハンドラーは、トースト メッセージを表示します。左パンニングのイベント ハンドラーは、**IgxList** から項目を削除します。

> [!NOTE]
> リスト項目の削除はアプリケーション タスクであることに注意してください。**IgxList** にデータソース参照がないため、**IgxList** は項目をデータソースから削除できません。

以下は HTML コードです。

```html
<!-- contacts.component.html -->

<igx-list [allowLeftPanning]="true" [allowRightPanning]="true"
  (onLeftPan)="leftPanPerformed($event)" (onRightPan)="rightPanPerformed($event)">
  <ng-template igxListItemLeftPanning>
    <div class="listItemLeftPanningStyle">
      <igx-icon name="delete" [color]="white" style="margin-left:10px"></igx-icon>Delete
    </div>
  </ng-template>
  <ng-template igxListItemRightPanning>
    <div class="listItemRightPanningStyle">
      <igx-icon name="call" [color]="white" style="margin-right:10px"></igx-icon>Dial
    </div>
  </ng-template>
  <igx-list-item isHeader="true">Contacts</igx-list-item>
  <igx-list-item #item *ngFor="let contact of contacts">
    <div class="item-container">
      <div class="contact">
        <igx-avatar [src]="contact.photo" roundShape="true"></igx-avatar>
        <div class="contact__info">
          <span class="name">{{ contact.name }}</span>
          <span class="phone">{{ contact.phone }}</span>
        </div>
      </div>
      <igx-icon name="star" [color]="contact.isFavorite ? 'orange' : 'lightgray'"
        (click)="toggleFavorite(item)"></igx-icon>
    </div>
  </igx-list-item>
</igx-list>

<igx-toast #toast></igx-toast>
```

上記の例は、CSS スタイルを使用しています。

```css
/* contacts.component.css */

igx-icon {
    cursor: pointer;
    user-select: none;
}

.item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contact {
    display: flex;
    flex: 1 0 240px;
    align-items: center;
}

.contact__info {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 24px;
}

.name {
    font-weight: 600;
}

.phone {
    font-size: 0.875em;
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
@ViewChild("toast")
public toast: IgxToastComponent;

public rightPanPerformed(args) {
  args.keepItem = true;
  this.toast.message = "Dialing " + this.contacts[args.item.index - 1].name;
  this.toast.show();
}

public leftPanPerformed(args) {
  args.keepItem = false;
  setTimeout((idx = args.item.index - 1) => {
    this.toast.message = "Contact " + this.contacts[idx].name + " removed.";
    this.toast.show();
    this.contacts.splice(idx, 1);
  }, 500);
}

...
```

> [!NOTE]
> リスト項目のパンニング時にパンニング イベントが発生するために達する必要のあるしきい値があります。**IgxList's** `panEndTriggeringThreshold` プロパティを使用するしきい値を変更できます。このプロパティのデフォルトは0.5 でリスト項目幅の 50% を意味します。

次にリスト項目をパンニングします。

<div class="sample-container loading" style="height: 477px">
<iframe id="list-sample-7-final-iframe" src='{environment:demosBaseUrl}/list-sample-7' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-7-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>
<div class="divider--half"></div>

### フィルタリング
リストで連絡先を名前によって検索する機能を追加します。これはフィルタリング パイプを使用して実装できます。
コンポーネント テンプレートの上側に入力フィールドを追加し、コンポーネントの _searchContact_ プロパティにバインドします:

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

**IgxFilterModule** および **IgxInputGroupModule** を **app.module.ts** ファイルにインポートし、**IgxFilterOptions** を連絡先コンポーネントにインポートします。

```typescript
    // app.module.ts
    ...
    import { IgxFilterModule, IgxInputGroupModule } from 'igniteui-angular';

    @NgModule({
        imports: [..., IgxFilterModule, IgxInputGroupModule]
    })

    // contacts.component.ts
    ...
    import { IgxFilterOptions } from 'igniteui-angular';

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

`IgxFilterOptions` をインポートした後、`searchContact` プロパティの更新でパイプによって使用されるフィルタリング オプションを返すゲッター メソッドを登録します。フィルターが機能するために連絡先オブジェクトのフィルター `key` を登録します。この場合、各連絡先の `name` です。`IgxFilterOptions` オブジェクトで登録する 2 番目のプロパティは連絡先の名前を比較する値です。連絡先リストの上の入力フィールドにバインドした `searchContact` プロパティです。

フィルタリング パイプを連絡先のデータに適用します。テンプレートで以下のコードを追加します:

```html
<!--contacts.component.html-->

<igx-list-item *ngFor="let contact of contacts | igxFilter: filterContacts; let i = index">
    ...
</igx-list-item>
```

### Chat コンポーネント
以下のサンプルは、**IgxList** を使用して作成したシンプルなチャットです。

<div class="sample-container loading" style="height: 500px">
<iframe id="list-chat-sample-iframe" src='{environment:demosBaseUrl}/list-chat-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-chat-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">stackblitz で開く</button>
</div>

<div class="divider"></div>

### API まとめ

この記事では List コンポーネントについて説明しました。アバターおよびアイコンの Ignite UI for Angular コンポーネントを使用して連絡先項目のリストを作成し、カスタム項目レイアウトを作成してスタイル設定、更にリスト フィルタリングを追加しました。以下は、List コンポーネントのその他の API です。

#### 入力

以下の入力は **igx-list** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `allowLeftPanning` | Boolean | 項目の左パンニングが許可されるかどうかを決定します。 |
| `allowRightPanning` | Boolean | 項目の右パンニングが許可されるかどうかを決定します。 |
| `isLoading` | Boolean | true の場合、読み込みテンプレートが使用されます。false の場合、空のリスト テンプレートが使用されます。 |
| `dataLoadingTemplate` | IgxDataLoadingTemplateDirective | リストが空で、isLoading が true の場合に使用するカスタム テンプレート。|
| `emptyListTemplate` | IgxEmptyListTemplateDirective | リストが空で、isLoading が false の場合に使用するカスタム テンプレート。|
| `panEndTriggeringThreshold` | Number | パンニング イベントが発生した後のしきい値を指定します。このプロパティのデフォルトは0.5 でリスト項目幅の 50% を意味します。 |

<div class="divider"></div>

以下の入力は **igx-list-item** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `isHeader` | Boolean | 現在のリスト項目をリスト ヘッダーに設定します。 |
| `hidden` | Boolean | 項目が表示されるかどうかを決定します。 |

<div class="divider"></div>

#### 出力

以下の出力は **igx-list** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onPanStateChange` | EventEmitter | パンニング ジェスチャがリスト項目に実行されたときに現在のリストを含むイベントを発生します。 |
| `onLeftPan` | EventEmitter | 左パンニング ジェスチャがリスト項目に実行されたときに現在のリストを含むイベントを発生し、型 `IListItemPanningEventArgs` の引数を提供します。 |
| `onRightPan` | EventEmitter | 右パンニング ジェスチャがリスト項目に実行されたときに現在のリストを含むイベントを発生し、型 `IListItemPanningEventArgs` の引数を提供します。 |
| `onItemClicked` | EventEmitter | リスト項目がクリックされたときに現在のリストを含むイベントを発生します。 |

<div class="divider"></div>

#### プロパティ

以下のプロパティは **igx-list** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `children` | QueryList | 項目およびヘッダーのすべての IListChild コンポーネントのコレクションを返します。 |
| `items` | IgxListItemComponent[] | 項目ヘッダーを含まないすべてのリスト項目の配列を返します。 |
| `headers` | IgxListItemComponent[] | すべてのリスト ヘッダーの配列を返します。 |

<div class="divider"></div>

以下のプロパティは **igx-list-item** コンポーネントで利用できます。

| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `index` | number | リスト項目のインデックスを取得します。 |
| `panState` | IgxListPanState | リスト項目のパンニング状態を取得します。 |
| `list` | IgxListComponent | リスト項目に関連付けられたリストを取得します。 |

<div class="divider"></div>

以下のプロパティは `IListItemPanningEventArgs` 型で使用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `item` | IgxListItemComponent | パンニングされている **igx-list-item** の参照。 |
| `direction` | IgxListPanState | **igx-list-item** がパンニングされる方向を指定します。 |
| `keepItem` | Boolean | `true` の場合、パンニングされた後もリスト項目が **IgxList** に保持されます。`false` (デフォルト) の場合、パンニングされた後にリスト項目が **IgxList** から削除されます。 |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
