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
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Ignite UI for Angular に [**HammerJS**](https://hammerjs.github.io/) の[ピア依存関係](https://nodejs.org/en/blog/npm/peer-dependencies/)があります。
> それを Angular プロジェクトに追加してください。
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

### 使用方法

List コンポーネントは項目の垂直リストを表示します。項目のデフォルト スタイル設定はマテリアル デザイン [**ガイドライン**](https://material.io/guidelines/components/lists.html)の単一行リストの仕様に基づきます。
Ignite UI for Angular List を初期化する前に、最初に **IgxListModule** を **app.module.ts** ファイルにインポートします:

```typescript
// app.module.ts

...
import { IgxListModule } from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxListModule],
    ...
})
export class AppModule {}
```

Then in the template of our contacts component we can create our list, but what if currently (or at some point in the future) we have no items in it?
In this case, the list provides us with a default template that is used when the list is empty.
We can always provide our own template for the look of our empty list by simply using the `igxEmptyList` directive. In this case, the default template will not be used:

```html
<!--contacts.component.html-->

<igx-list>
    <ng-template igxEmptyList>
        <p class="empty">No contacts! :(</p>
    </ng-template>
</igx-list>
```

And our style for the empty template:

```css
/* contacts.component.css */

.empty {
    color: rgba(0, 153, 255, 1);
    font-size: 25px;
    font-weight: 600;
    text-shadow: 2px 1px 2px rgba(150, 150, 150, 1);
}
```

If all went great, this is how our empty list should look like:

<div class="sample-container loading" style="height: 100px">
<iframe id="list-sample-5-iframe" src='{environment:demosBaseUrl}/list-sample-5' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-5-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### Add List Items

It's nice having a template for when the list is empty, but now let's add some items! We can add the following code to get a simple list of items:

```html
<!--contacts.component.html-->

<igx-list>
    <igx-list-item isHeader="true">ヘッダー</igx-list-item>
    <igx-list-item>項目 1</igx-list-item>
    <igx-list-item>項目 2</igx-list-item>
    <igx-list-item>項目 3</igx-list-item>
</igx-list>
```

以下は結果です:

<div class="sample-container loading" style="height: 200px">
<iframe id="list-sample-2-iframe" src='{environment:demosBaseUrl}/list-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### カスタム リスト項目

リスト項目にカスタム マークアップおよびスタイルを適用します。名前の下に電話番号が表示される連絡先のリストを作成します。コンポーネントの typescript ファイルで連絡先のリストを定義します:

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

データを描画するマークアップを作成します:

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

連絡先の名前および電話番号を表示するために span 要素を使用した場合も、その要素は垂直方向に表示されます。これは各リスト項目の列レイアウトのためです。カスタム スタイル設定を追加します。名前および電話番号の span 要素に _name_ および _phone_ の新しいクラスを追加しました。そのクラスを使用して項目にスタイル設定します:

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
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

#### アバターおよびアイコンの追加

エクスペリエンスを向上して機能を追加するためにその他のコンポーネントを IgxList と使用できます。名前および電話番号の値の左に画像のアバターを表示できます。また、連絡先をお気に入りに追加するために右側に星アイコンを追加できます。その要素を追加するには、[**IgxAvatar**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/avatar.html) および [**IgxIcon**](https://jp.infragistics.com/products/ignite-ui-angular/angular/components/icon.html) モジュールを **app.module.ts** ファイルにインポートします。

```typescript
// app.module.ts

...
import {
    IgxListModule,
    IgxAvatarModule,
    IgxIconModule
} from 'igniteui-angular/main';

@NgModule({
    ...
    imports: [..., IgxAvatarModule, IgxIconModule],
})
export class AppModule {}
```

連絡先オブジェクトにアバターの `photo` ソースおよび連絡先のお気に入り状態を示す `isFavorite` プロパティを追加します。

```typescript
// contacts.comoponent.ts

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

連絡先リストのテンプレートをアバターおよびアイコンを表示するために更新します:

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

すべての要素を項目コンテナーにラップしてフローをスタイル設定できます。次、IgxAvatar コンポーネントを連絡先ラッパーに連絡先情報と追加します。最後に IgxIcon コンポーネントを含みます。マークアップの変更に基づいて css スタイルシートを更新します:

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
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="list-sample-4-final-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### フィルタリング
リストで連絡先を名前によって検索する機能を追加します。これはフィルタリング パイプを使用して実装できます。
コンポーネント テンプレートの上側に入力フィールドを追加し、コンポーネントの _searchContact_ プロパティにバインドします:

```html
<!--contacts.component.html-->

<div class="igx-form-group" style="margin: 4px">
  <input class="igx-form-group__input--search" placeholder="連絡先の検索" [(ngModel)]="searchContact">
  <label class="igx-form-group__label">
    <igx-icon name="search"></igx-icon>
  </label>
</div>
```

**IgxFilterModule** を **app.module.ts** ファイルにインポートし、**IgxFilterOptions** を連絡先コンポーネントにインポートします。

```typescript
    // app.module.ts
    ...
    import { IgxFilterModule } from 'igniteui-angular/main';

    @NgModule({
        imports: [..., IgxFilterModule]
    })

    // contacts.component.ts
    ...
    import { IgxFilterOptions } from 'igniteui-angular/main';

    @Component({...})
    export class ContactListComponent {
        public searchContact: string;
        ...
        get filterContacts(): IgxFilterOptions {
            const fo = new IgxFilterOptions();
            fo.key = 'name';
            fo.inputFiels = this.searchContact;
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

<div class="divider"></div>

### API まとめ

この記事では List コンポーネントについて説明しました。アバターおよびアイコンの Ignite UI for Angular コンポーネントを使用して連絡先項目のリストを作成し、カスタム項目レイアウトを作成してスタイル設定、更にリスト フィルタリングを追加しました。以下は、List コンポーネントのその他の API です。

#### 入力

以下の入力は **igx-list** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `allowLeftPanning` | Boolean | Determines whether the left panning of an item is allowed. |
| `allowRightPanning` | Boolean | Determines whether the right panning of an item is allowed. |
| `emptyListTemplate` | IgxEmptyListTemplateDirective | The custom template to be used when the list is empty. |

<div class="divider"></div>

以下の入力は **igx-list-item** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `isHeader` | Boolean | 現在のリスト項目をリスト ヘッダーに設定します。 |
| `hidden` | Boolean | Determines whether the item should be displayed. |

<div class="divider"></div>

#### 出力

以下の出力は **igx-list** コンポーネントで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onPanStateChange` | EventEmitter | Emits an event with the current list when pan gesture is executed on list item. |
| `onLeftPan` | EventEmitter | Emits an event with the current list when left pan gesture is executed on list item. |
| `onRightPan` | EventEmitter | Emits an event with the current list when right pan gesture is executed on list item. |
| `onItemClicked` | EventEmitter | Emits an event with the current list when a list item has been clicked. |

<div class="divider"></div>

#### Properties

The following properties are available on the **igx-list** component:
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `children` | QueryList | Returns a collection of all IListChild components: items and headers. |
| `items` | IgxListItemComponent[] | Returns an array of all list items excluding item headers. |
| `headers` | IgxListItemComponent[] | Returns an array of all list headers. |

<div class="divider"></div>

The following properties are available on the **igx-list-item** component:
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `index` | number | Retrieve the index of the list item. |
| `panState` | IgxListPanState | Retrieve the pan state of the list item. |
| `list` | IgxListComponent | Retrieve the list that is associated with the list item. |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
