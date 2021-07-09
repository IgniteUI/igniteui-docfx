---
title: Ignite UI のライセンス
_description: Ignite UI npm ライセンス パッケージの使用に関する情報
_keywords: npm package license, ignite ui license feed, licensing, npm パッケージ ライセンス, ignite ui ライセンス フィード, ライセンス
_language: ja
---

# ライセンス FAQ とインストール
## 使用許諾契約
購入して使用する製品に関するすべての[使用条件](https://jp.infragistics.com/legal/license/igultimate-la)を知っておくことが重要です。
注: ライセンス条件およびサブスクリプション モデルを更新しました。

If your trial has ended or your subscription [has expired](http://jp.infragistics.com/renewal), each developer on your team using Ignite UI will need to [purchase](https://jp.infragistics.com/how-to-buy/product-pricing) a subscription. これにより、<https://packages.infragistics.com/npm/js-licensed/>  でホストされるプライベート npm フィードを開発に使用できます。ここには、Ignite UI for Angular パッケージの最新バージョンがあります。現在のサブスクリプションがある場合、Ignite UI for Angular の製品版をプライベート フィードによりアクセスできます。

For detailed explanation of the Ignite UI license agreement and terms of use、[click here](https://jp.infragistics.com/legal/license/igultimate-la).

Infragistics offers free, non-commercial, not-for-resale (NFR) licenses for the following:

  - If you are part of a developer program like the Microsoft MVP, Microsoft Regional Director, Google Developer Expert, etc.  
  - If you are a primary, secondary or university student, or an academic institution, or a professor.  

If you qualify for a free, non-commercial, NFR license or if you have any license questions, please [contact us](https://jp.infragistics.com/about-us/contact-us).

## Ignite UI for Angular npm パッケージ - プライベート npm フィードの使用
Npm は Node.js ランタイム環境で使用する一般的なデフォルト パッケージ マネージャーです。プロジェクトに依存するパッケージをすばやく簡単に処理できます。npm の使用方法の詳細については、[npm ヘルプ](https://docs.npmjs.com/)を参照してください。

Infragistics Ignite UI for Angular は npm パッケージで提供され、[`いくつかの簡単な手順`](cli/step-by-step-guide.md)でプロジェクトの依存関係として追加できます。この方法を選択する場合、npm を構成する必要はありません。このパッケージをインストールすると、製品の [Ignite UI for Angular トライアル版](https://jp.infragistics.com/products/ignite-ui-angular)の使用が開始されます。

>[!NOTE]
> トライアル版の使用を開始するとはどういう意味ですか? これは、Web ビューの**ウォーターマーク**部分を含む製品バージョンを使用することを意味し、1 か月など一定期間ライセンス パッケージを使用することを意味します。

Infragistics Ignite UI Dock Manager Web コンポーネントは、別の npm パッケージとして利用できます。インストールすると、製品の [Ignite UI Dock Manager Web コンポーネント トライアル版](https://jp.infragistics.com/products/ignite-ui-angular)の使用が開始されます。

> Ignite UI for Angular npm パッケージの使用方法の詳細については、[このトピック](getting-started.md#ignite-ui-for-angular-のインストール)を参照してください。Ignite UI Dock Manager Web コンポーネントの詳細については、[こちら](../dock-manager.md) を参照してください。

### Angular Schematics または Ignite UI CLI を使用したパッケージのアップグレード
Ignite UI for Angular が [`ng add`](./getting-started.md) を使用してプロジェクトに追加された場合、またはプロジェクトが [schematic コレクションまたは Ignite UI CLI](./cli-overview.md) を使用して作成された場合、`upgrade-packages` を使用して、ライセンス パッケージを使用するようにアプリを自動的にアップグレードできます。プロジェクト パッケージの依存関係には、`@igniteui/angular-schematics` または `igniteui-cli` が含まれ、どちらも upgrade コマンドをサポートします。

>[!NOTE]
> パッケージが変更されるため、切り替える前にプロジェクトを更新することをお勧めします。このように、IgniteUI Angular の高いバージョンを使用せず、更新の移行のトラブルを防止します。[アップデート ガイド](./update-guide.md)を参照してください。

プロジェクトのセットアップに応じて、プロジェクトで以下の schematic を実行します。
```bash
ng g @igniteui/angular-schematics:upgrade-packages
```
または `igniteui-cli` を使用する場合:

```bash
ig upgrade-packages
```
schematic またはコマンドはプロジェクトのパッケージの依存関係を切り替え、ソース参照を更新します。
まだセットアップされていない場合、NPM レジストリへのログインが要求されます。

>[!NOTE]
> プロジェクトが [`yarn`](https://yarnpkg.com/) を使用している場合は、`--skip-install` フラグを指定して `upgrade-packages` を実行します。その後、`yarn install` (現在 `upgrade` コマンドはインストールに `npm` を使用します) を実行して `yarn.lock` を適切に更新します。


### プライベート npm フィードを使用するための環境設定方法 (ステップバイステップ ガイド)

#### 最初にプライベート レジストリを構成し、レジストリを Infragistics スコープと関連付けます。 

これにより公開用の npm レジストリおよびプライベート Infragistics レジストリからのパッケージを同時に使用できます。Infragistics アカウントにログインするユーザー名およびパスワードを入力する必要があります。Infragistics プロファイルに登録されるメールも入力してください。 

>[!NOTE]
> `npm`  はユーザー名で `「@」` の使用を許可しません。ユーザー名が Infragistics アカウントのメール アドレスであるため、`「@」` 記号は既に含まれています。この制限を回避するには、`「@」` 記号の代わりに `「!!」` (2 つの感嘆符) を使用します。たとえば、ユーザー名が `username@example.com` の場合、`username!!example.com` と入力します。

#### npm を使用してプライベート フィードにログインするには、adduser コマンドを実行し、ユーザー アカウントとパスワードを指定します。

```cmd
npm adduser --registry=https://packages.infragistics.com/npm/js-licensed/ --scope=@infragistics --always-auth
```

> [!IMPORTANT]
> アカウントのライセンスがない場合 (トライアル版アカウントを使用している場合)、プライベート パッケージ フィードにアクセスできません (たとえば、404 または 403 エラーメッセージが返されます)。**ライセンスされているアカウントのみが packages.infragistics プライベート フィードにアクセスできます。**

#### 完了した後に、ログイン済みの状態で、プロジェクトで Ignite UI の最新バージョンをインストールできます。

```cmd
npm uninstall igniteui-angular
npm install @infragistics/igniteui-angular

npm uninstall igniteui-dockmanager
npm install @infragistics/igniteui-dockmanager
```

Ignite UI for Angular パッケージをスコープに設定したため、プライベート フィードおよび npmjs.org からのパッケージを同時にインストールするためにレジストリを変更する必要はありません。

#### プロジェクト ソースに追加の変更が必要になる場合があります。
トライアル版からライセンス パッケージにアップグレードする際に CLI 移行を使用していない場合:
- プロジェクトの `tsconfig.json` に `paths` マッピングを追加します。

```typescript
{
  ...
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    ...
    "paths": {
      "igniteui-angular": ["./node_modules/@infragistics/igniteui-angular"],
      "igniteui-dockmanager": ["./node_modules/@infragistics/igniteui-dockmanager"],
      "igniteui-dockmanager/*": ["./node_modules/@infragistics/igniteui-dockmanager/*"],
    }
	...
}
```
- プロジェクトの `angular.json` に `stylePreprocessorOptions` マッピングを追加します。

```typescript
{
  "projects": {
    ..
    "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
			...
            "aot": true,
            "stylePreprocessorOptions": {
                "includePaths": [
                    "node_modules/@infragistics"
                ]
            }
            ...
},
```
- `igniteui-angular/lib` ソースのプロジェクト `sass` インポートから `~` 記号を削除します。

```scss
@import "~igniteui-angular/lib/core/styles/themes/index";

// Should be changed to

@import "igniteui-angular/lib/core/styles/themes/index";
```

npm を既に使用していて、Ignite UI for Angular ライセンスがある場合、Infragistics プライベート フィードを構成してください。


## アクセス トークンの使用

アクセス トークンを使用してプライベート npm フィードの認証を受けることもできます。アクセストークンは [infragistics.com ユーザー アカウント](https://jp.account.infragistics.com/access-tokens)で取得できます。アクセス トークン認証は、CI プロセスを Ignite UI for Angular ライセンス パッケージを使用する公開アクセス可能なリポジトリに統合する場合に推奨される代替方法です。

以下は、ローカル構成でアクセス トークンを使用してプライベート npm レジストリへの認証を設定する方法、Azure Pipelines のビルド手順、および Travis CI のビルド プロセスです。 

* https://account.infragistics.com/access-tokens からトークンを生成します。

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; width: calc(100% - 250px)" 
  src="../../images/general/generate-token.jpg"
  data-src="../../images/general/generate-token.jpg"
  alt="新しく生成されたトークン"
  title="新しいトークンの生成" />

> 各トークンは Base64 エンコードです。

* 以下を [.npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html) ファイルに追加します。

```cmd
@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/
//packages.infragistics.com/npm/js-licensed/:_auth=YOUR_ACCESS_TOKEN
//packages.infragistics.com/npm/js-licensed/:username=YOUR_USERNAME
//packages.infragistics.com/npm/js-licensed/:always-auth=true
```

### Azure Pipelines の構成
以下の手順で azure-pipelines.yml を更新します。

```cmd
手順:

- script: npm config set @infragistics:registry $(npmRegistry)
  displayName: 'Npm add registry'

- script: npm config set $(igScope):always-auth=true
  displayName: 'Npm config'

- script: npm config set $(igScope):_auth=$(token)
  displayName: 'Npm config auth'
```

次に、*npm registry*、*scope* および *token* の変数を追加する必要があります。2 つの方法があります。 

 #### パイプラインのライブラリ ページで変数グループを定義する方法
 [この記事](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/variable-groups?view=azure-devops&amp;tabs=yaml) は、変数グループを使用して複数のパイプラインで制御および利用できる値を保存する方法を説明します。

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 350px)" 
  src="../../images/general/azure-ci-variable-groups.jpg"
  data-src="../../images/general/azure-ci-variable-groups.jpg" 
  alt="npm Registry および token 変数の設定"
  title="npm Registry および token 変数の設定" />

 #### パイプラインの設定 UI で変数を定義し、YAML ファイルで参照する方法

最も一般的なケースでは、[変数を設定して YAML ファイル内で使用します](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#set-variables-in-pipeline)。

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px)" 
  src="../../images/general/azure-ci-new-variable-2.jpg"
  data-src="../../images/general/azure-ci-new-variable-2.jpg" 
  alt="npm Registry および token 変数の設定"
  title="npm Registry および token 変数の設定" />

<img class="responsive-img" style="-webkit-box-shadow: 8px 9px 9px 5px #ccc; -moz-box-shadow: 8px 9px 9px 5px #ccc; box-shadow: 8px 9px 9px 5px #ccc; min-width: calc(100% - 650px)" 
  src="../../images/general/azure-ci-add-token-variable-1.jpg"
  data-src="../../images/general/azure-ci-add-token-variable-1.jpg"
  alt="npm Registry および token 変数"
  title="npm Registry および token 変数" />

### Travis CI の構成
ここではほとんど同じ方法を使用しますが、構成は [before_install](https://docs.travis-ci.com/user/job-lifecycle/#the-job-lifecycle) に設定されます。

```cmd
before_install:
- echo "@infragistics:registry=https://packages.infragistics.com/npm/js-licensed/" >> ~/.npmrc
- echo "//packages.infragistics.com/npm/js-licensed/:_auth=$TOKEN" >> ~/.npmrc
- echo "//packages.infragistics.com/npm/js-licensed/:always-auth=true" >> ~/.npmrc
```

環境変数を定義する方法は、含まれる情報のタイプによって異なるため、[2つ のオプションがあります](https://docs.travis-ci.com/user/environment-variables/)。

* 暗号化して [.travis.yml](https://docs.travis-ci.com/user/environment-variables/#defining-encrypted-variables-in-travisyml) に追加します。
* [リポジトリ設定](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings)に追加します。

### GitHub Actions の構成

`npm i(ci)` 手順の前に以下のスクリプトを [CI ワークフロー構成](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions) に追加します: 

```cmd
- run: echo "@infragistics:registry=$(npmRegistry)" >> ~/.npmrc
- run: echo "$(igScope):always-auth=true" >> ~/.npmrc
- run: echo "$(igScope):_auth=${{ secrets.NPM_TOKEN }}" >> ~/.npmrc
```

[*シークレット* (暗号化された環境変数)](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) を定義してアクセス トークンなどの機密情報に対して GitHub Actions ワークフローでそれらを使用します。
