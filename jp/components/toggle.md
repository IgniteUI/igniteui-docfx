---
title: Toggle ディレクティブ
_description: Ignite UI for Angular Toggle ディレクティブは、ネイティブ Angular フレームワークで Toggle ディレクティブを実装する要素に含まれるコンテンツを直感的に開いたり、閉じたりできるボックスとして使用できます。
_keywords: Ignite UI for Angular, UI コントロール, Angular ウィジェット, web ウィジェット, UI ウィジェット, Angular, ネイティブ Angular コンポーネント スィート, ネイティブ Angular コントロール, ネイティブ Angular コンポーネント ライブラリ, Angular Toggle ディレクティブ, Angular Toggle コントロール
---

## Toggle

<p class="highlight">Ignite UI for Angular Toggle ディレクティブは、コードまたは操作によって開いたり、閉じたりできるボックスにコンテンツをラップします。</p>
<div class="divider"></div>

### Toggle デモ

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-iframe" src='{environment:demosBaseUrl}/toggle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

> [!WARNING]
> Ignite UI for Angular に [**HammerJS**](https://hammerjs.github.io/) の[ピア依存関係](https://nodejs.org/en/blog/npm/peer-dependencies/)があります。
> それを Angular プロジェクトに追加してください。
> <br/> <br/>`$ npm install hammerjs @types/hammerjs`

## 使用方法
The toggle allows you easilly to wrap some content into a box which easily can be opened and closed.
To get started with the IgniteUI for Angular Toggle, let's first import the **IgxToggleModule** in our **app.module.ts**. We are also planning to take advantage of **igxButton** directive so we will have to import **IgxButtonModule** into the **app.module.ts** too.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

コンポーネントのテンプレートで、トグル可能になる要素にディレクティブを適用します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" (click)="toggleContent()">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <ul>
            <li>Bananas</li>
            <li>Apples</li>
            <li>Strawberries</li>
            <li>Raspberry</li>
            <li>Cherry</li>
        </ul>
    </section>
</div>
```

このコンテンツを表示/非表示にするには、open または close メソッドを呼び出します。

```typescript
import { IgxToggleDirective } from 'igniteui-angular/main'

@Component({
    ...
})
export class Class {
    @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

    toggle() {
        if (this.toggle.collapsed) {
            this.toggle.open();
        } else {
            this.toggle.close();
        }
    }
}
```

以下は結果です:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-1-iframe" src='{environment:demosBaseUrl}/toggle-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### トグル自動操作

In order to prevent this invocation of these methods there is a directive which has `onClick` handler and changes the state to the toggle we are referred to. So let's dive in. If we would like to take advantage of this functionality we will have to use **IgxToggleActionDirective** Which is comming from the same **IgxToggleModule**.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

次にテンプレートで **IgxToggleDirective** を割り当てて **IgxToggleActionDirective** を宣言します。トリガー (トグル) として使用する要素で **IgxToggleActionDirective** を宣言します。

```html
<!--template.component.html-->
<button class="toggle-button"  igxButton="raised" [igxToggleAction]="toggleRef">Toggle</button>
<div class="toggle-content" igxToggle #toggleRef="toggle">
    <section class="toggle-section">
        <img src="link to random image"/>
    </section>
</div>
```

この変更後、トグルが以下のように動作します。

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-2-iframe" src='{environment:demosBaseUrl}/toggle-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>

### Automatic toggle actions with service provider

There is a convenient way to keep the state and command our **igxToggle** through **igxNavigationService** provider which would be convenient for us to keep tracking it everywhere in our application. We just need to set identifier for our **igxToggle** directive and the registration into the service happens for us. If we would like this state to be controlled automatically again we just need to pass this identifier to our helping **igxToggleActionDirective**.

```typescript
// app.module.ts

...
import { IgxToggleModule, IgxButtonModule } from 'igniteui-angular/main'

@NgModule({
    ...
    imports: [..., IgxToggleModule, IgxButtonModule]
    ...
})
export class AppModule {}
```

```html
<!--template.component.html-->
<button igxToggleAction="toggleId" [closeOnOutsideClick]="true" class="toggle-button"  igxButton="raised">Toggle</button>
<div igxToggle id="toggleId" class="toggle-content" [collapsed]="false">
    <section class="toggle-section">
    <h3>Click 
        <br/> Out of the Box</h3>
    </section>
</div>
```

If all went well, it will look like this:

<div class="sample-container loading" style="height: 370px">
    <iframe id="toggle-sample-3-iframe" src='{environment:demosBaseUrl}/toggle-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="toggle-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">                       view on stackblitz
    </button>
</div>


## API まとめ

In this article we covered the details of how to use Toggle directive. We created a content which would possible to be hidden or shown by invoking programmatically methods which determine this behaviour.
Furthermore we added another helping directive which controls automatically this same behaviour by giving it the appropriate toggle reference. In the end we have registered our **igxToggle** directive in the **igxNavigationService** provider by giving it an ID, which we then provided to our helping **igxToggleAction** directive.

### 入力
以下の入力は **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `collapsed` | Boolean | トグルが開くか閉じるかを決定します。 |
| `id` | Boolean | Identifier which is registered into **igxNavigationService**. |

<div class="divider"></div>

以下の入力は **igxToggleAction** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `igxToggleAction` | IgxToggleDirective | 制御するトグルを受け付けます。 |
| `closeOnOutsideClick` | IgxToggleDirective | Determines whether toggle should be closed when you click outside. |

<div class="divider"></div>

#### 出力
以下の出力は **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `onOpen` | EventEmitter | トグル コンテナーが開いたときにイベントを発生します。 |
| `onClose` | EventEmitter | トグル コンテナーが閉じたときにイベントを発生します。 |

<div class="divider"></div>

#### メソッド
以下のメソッドは **igxToggle** ディレクティブで利用できます。
| 名前 | 型 | 説明 |
| :--- | :--- | :--- |
| `open` | void | トグルを開きます。 |
| `close` | void | トグルを閉じます。 |
| `toggle` | void | Open or close the toggle depending on the state. |

<div class="divider"></div>

### 追加のリソース

<div class="divider--half"></div>
是非コミュニティに参加してください。

* [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
