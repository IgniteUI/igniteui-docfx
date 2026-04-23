---
title: Angular Ignite UI CLI MCP | Infragistics
_description: Ignite UI CLI MCP を AI クライアントに接続して、Ignite UI for Angular のプロジェクト スキャフォールディング、既存アプリの変更、コンポーネントの作成と更新、ドキュメントの質問に対応します。VS Code、GitHub、Cursor、Claude Desktop、Claude Code、JetBrains、その他の MCP クライアントのセットアップ オプションをご覧ください。
_keywords: Angular, Ignite UI for Angular, Infragistics, Ignite UI CLI MCP, Ignite UI Theming MCP, MCP, Model Context Protocol, AI, エージェント, GitHub Copilot, Cursor, Claude, JetBrains
_language: ja
_license: MIT
_canonicalLink: "{environment:dvUrl}/components/ai/cli-mcp"
namespace: Infragistics.Controls
mentionedTypes: []
last_updated: "2026-04-21"
---

<!-- schema: Article, HowTo -->

# Ignite UI CLI MCP

<p class="highlight">Ignite UI CLI MCP は <a href="https://modelcontextprotocol.io/" target="_blank">Model Context Protocol</a> (MCP) サーバーで、AI アシスタントが Ignite UI for Angular アプリケーションのプロジェクト スキャフォールディング、既存アプリの変更、コンポーネントの作成と更新、ドキュメントへの質問に対応できるようにします。Ignite UI CLI MCP をエディター、GitHub リポジトリ、またはデスクトップ AI クライアントに接続して、行いたいことを説明すると、アシスタントが CLI ツールを代わりに操作します。</p>

<div class="divider"></div>

## 概要

Ignite UI CLI MCP は、チャットまたはエージェント モードを通じて Ignite UI CLI プロジェクト スキャフォールディング、コンポーネント生成、プロジェクト変更、ドキュメント対応ワークフローへの直接アクセスを AI アシスタントに提供します。サーバーは Ignite UI Theming MCP と連携して動作します。CLI MCP はプロジェクトとコンポーネントのワークフローを担当し、Theming MCP はパレット、テーマ、トークン、スタイリングを担当します。ほとんどのチームは、同じ AI クライアント セッションで両方のサーバーを接続します。

推奨されるセットアップ パスは、最初に Ignite UI CLI を使用することです。このパスでは、プロジェクトの作成、必要なパッケージのインストール、VS Code 用の初期 MCP 設定の書き込みが行われます。空のフォルダーから開始して、アシスタントに MCP 経由でプロジェクトを作成させることも、既存のプロジェクトに MCP を接続することもできます。

**接続後に試せるプロンプト例:**

> _「このフォルダーに新しい Ignite UI for Angular プロジェクトを作成し、推奨のデフォルト設定を使用して、サンプル データを含むスターター ダッシュボード ページを追加してください。」_

> _「このプロジェクトに新しいグリッド ページを追加し、サンプル データに接続して、現在のナビゲーション構造を維持してください。」_

> _「コンボ コンポーネントが公開するプロパティとイベント、および検索可能なドロップダウンに最も役立つものを教えてください。」_

> _「既存のプロジェクトを更新してサイド ナビゲーション レイアウトを追加し、現在のページとルートを保持してください。」_

## 前提条件

MCP サーバーを設定する前に、以下のものが揃っていることを確認してください:

- **Node.js** (v18 以降) のインストール — サーバー起動に使用する `npx` コマンドを提供します。
- **MCP をサポートする AI クライアント** — 例: VS Code with GitHub Copilot、GitHub Copilot クラウド エージェント、Cursor、Claude Desktop、Claude Code、AI Assistant プラグインを使用した JetBrains IDE。
- サーバーの初回起動時に `npx` パッケージ解決に必要なインターネット アクセス。
- 以下のいずれかの開始点:
  - 新しいプロジェクト用の空のフォルダー
  - Ignite UI CLI で作成したプロジェクト
  - 続けて作業したい既存の Ignite UI for Angular プロジェクト

同じクライアント セッションでテーマ ツールが必要で、`igniteui-theming` がプロジェクトにまだない場合は、次のコマンドを実行します:

```bash
npm install igniteui-theming
```

## AI クライアント向けの Ignite UI CLI MCP 設定

MCP サーバーは `npx` を通じて起動します。Node.js と `igniteui-cli` パッケージへのアクセス以外に、別途インストールする必要はありません。

標準の起動コマンドは次のとおりです:

```bash
npx -y igniteui-cli mcp
```

> [!NOTE]
> `-y` フラグは `npx` にパッケージのダウンロード確認を自動承認するよう指示し、手動の操作なしにサーバーを起動できます。

### セットアップ パスの選択

Ignite UI CLI MCP を開始するには 3 つの方法があります:

> **推奨 — CLI を先に使用**
> `ig new` または対応する `npx --package igniteui-cli igniteui new` コマンドを使用して、まず Ignite UI CLI でプロジェクトを作成します。Ignite UI CLI がプロジェクトをスキャフォールディングし、必要なパッケージをインストールし、VS Code 用の `.vscode/mcp.json` を自動的に書き込むため、これが最も簡単なセットアップです。その後は、生成された MCP 設定を確認して AI クライアントでプロジェクトを開くだけです。

> **空のフォルダー**
> 完全に空のフォルダーから開始し、MCP 設定を手動で追加してから、アシスタントにチャット経由でプロジェクトを作成するよう依頼します。このパスは、CLI を先に実行するのではなく MCP で最初からプロジェクト作成フローを主導したい場合に便利です。

> **既存のプロジェクト**
> すでにあるプロジェクトに MCP 設定を追加して、現在のコードベースで作業を継続します。`ig ai-config` (Angular プロジェクトの場合は `ng generate @igniteui/angular-schematics:ai-config`) を実行して、`.vscode/mcp.json` を書き込み、エージェント スキルをプロジェクトに自動的にコピーします。他の AI クライアントの場合は、以下のクライアント固有のセクションからサーバー エントリをコピーします。

3 つのパスすべてで同じ MCP サーバーを使用します。違いは、プロンプトを開始する前にプロジェクトをどのように準備するかだけです:

- **CLI 先行** パスでは、Ignite UI CLI がプロジェクトを作成し、最初の MCP 設定を用意します
- **空のフォルダー** パスでは、先に MCP 設定を作成し、その後アシスタントにプロジェクトを作成させます
- **既存のプロジェクト** パスでは、`ig ai-config` を実行して `.vscode/mcp.json` を書き込み、エージェント スキルを自動的にコピーするか、他のクライアント向けに手動で設定を追加します

どの場合も、MCP サーバーが接続されて AI クライアントに表示されれば、アシスタントは同じセッションで作業を継続できます。

最初に Ignite UI CLI でプロジェクトを作成する場合、次のいずれかの方法で CLI を実行できます:

- **グローバル インストール**

    ```bash
    npm install -g igniteui-cli
    ```

    これにより、どのターミナル セッションでも `ig` コマンドが使用できるようになります。定期的にプロジェクトを作成およびスキャフォールディングする予定であれば、最も明確な選択肢です。

- **グローバル インストールなし**

    ```bash
    npx --package igniteui-cli igniteui new
    ```

    グローバルな `ig` コマンドの代わりに `npx` 経由で CLI を実行します。

**CLI 先行** パスでは、ガイド モードまたは直接コマンドでプロジェクトを作成できます。

利用可能なオプションを CLI が案内してくれるガイド モードを使用する場合:

```bash
ig new
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new
```

プロジェクト設定がわかっている場合は直接コマンドを使用します:

```bash
ig new my-app --framework=angular --type=igx-ts --template=empty
```

対応する `npx` 形式:

```bash
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```

ガイド モードでは、Ignite UI CLI がプロジェクト名、フレームワーク、テンプレート、テーマ、コンポーネントを追加するかセットアップを完了するかを確認します。直接モードでは、フレームワークとサポートされているオプションをコマンドで指定します。

プロジェクト テンプレート、CLI コマンド オプション、`ig add` などのコンポーネント スキャフォールディング コマンドの詳細については、Angular 向けの Ignite UI CLI ドキュメントを参照してください。

### VS Code

VS Code の GitHub Copilot は、ワークスペース レベルの設定ファイルを通じて MCP サーバーをサポートします。プロジェクト ルートから `ig ai-config` (または `ng generate @igniteui/angular-schematics:ai-config`) を実行して、このファイルを自動的に生成します。手動で設定するには、プロジェクト ルートに `.vscode/mcp.json` を作成または編集します:

```json
{
  "servers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

最初に Ignite UI CLI でプロジェクトを作成した場合は、生成された `.vscode/mcp.json` を確認して両方のエントリが存在することを確認してください。

保存後、GitHub Copilot チャット パネルを開いて**エージェント** モードに切り替えると、Ignite UI CLI MCP ツールが利用可能になります。

> [!NOTE]
> VS Code での MCP サポートには GitHub Copilot と VS Code 1.99 以降が必要です。

### Cursor

Cursor はプロジェクト スコープの MCP 設定をサポートします。プロジェクト ルートに `.cursor/mcp.json` を作成または編集します:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

新しい Cursor チャット セッションを開くと、サーバーが自動的に検出されます。

> [!NOTE]
> Cursor の **Settings → MCP** からグローバルに MCP サーバーを設定することもできます。

### Claude Desktop

サーバーを Claude Desktop 設定ファイルに追加します:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

保存後、Claude Desktop を再起動します。チャット入力エリアに MCP サーバー インジケーター (スライダー アイコン) が表示され、MCP ツールがアクティブであることが確認できます。

### Claude Code

Claude Code は CLI と プロジェクト スコープの `.mcp.json` ファイルを通じて MCP サーバーをサポートします。チームと設定を共有するには、プロジェクト ルートに `.mcp.json` を作成または編集します:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

ローカル環境のみの場合は、コマンドラインでサーバーを追加することもできます:

```bash
claude mcp add igniteui-cli -- npx -y igniteui-cli mcp
claude mcp add igniteui-theming -- npx -y igniteui-theming igniteui-theming-mcp
```

Claude Code 内の `/mcp` コマンドを使用して、サーバーが接続されていることを確認します。

### JetBrains IDE

JetBrains AI Assistant は IDE の設定から MCP サーバーをサポートします:

1. **Settings** (macOS では **Preferences**) を開きます。

2. **Tools → AI Assistant → Model Context Protocol (MCP)** に移動します。

3. **+ Add** をクリックして **As JSON** を選択するか、フォーム フィールドを使用します。

4. 次の設定を入力します:

    ```json
    {
      "mcpServers": {
        "igniteui-cli": {
          "command": "npx",
          "args": ["-y", "igniteui-cli", "mcp"]
        },
        "igniteui-theming": {
          "command": "npx",
          "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
        }
      }
    }
    ```

5. **OK** をクリックして AI Assistant を再起動します。

> [!NOTE]
> MCP サポートには、JetBrains IDE に AI Assistant プラグインがインストールされ有効になっている必要があります。

### その他の MCP クライアント

他の MCP 互換クライアントでは、次の起動コマンドで STDIO トランスポートを使用します:

```bash
npx -y igniteui-cli mcp
npx -y igniteui-theming igniteui-theming-mcp
```

### GitHub

GitHub Copilot クラウド エージェントは、リポジトリ レベルの MCP 設定をサポートします。リポジトリで以下の操作を行います:

1. リポジトリのメイン ページを開きます。
2. **Settings** をクリックします。
3. サイドバーで **Copilot** → **Cloud agent** に移動します。
4. **MCP configuration** セクションに JSON を貼り付けます。
5. **Save** をクリックします。

次のようなリポジトリ設定を使用します:

```json
{
  "mcpServers": {
    "igniteui-cli": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-cli", "mcp"],
      "tools": ["*"]
    },
    "igniteui-theming": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"],
      "tools": ["*"]
    }
  }
}
```

このセットアップは、GitHub クラウド エージェントがリポジトリ コンテキストから直接 CLI MCP ツールと Theming MCP ツールを使用する場合に便利です。

## 利用可能なツール

MCP サーバーはプロンプトに基づいて AI が自動的に使用するツール セットを公開します。これらのツールを直接呼び出す必要はありません。チャットで行いたいことを説明すると、アシスタントが適切なツールを選択します。この表は、作業を開始する前に何が利用可能かを確認するためのものです。

現在のパラメーターを含むライブリストを取得するには、次のように尋ねます:

> _「Ignite UI CLI MCP が提供するツールは何ですか?」_

各ツールの概要:

| ツール                     | 説明                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `list_components`        | フレームワーク向けの利用可能な Ignite UI コンポーネント ドキュメントをリスト表示します。名前、キーワード、サマリーに対する大文字と小文字を区別しない部分文字列検索のオプション キーワード フィルターを受け付けます。 |
| `get_doc`                | kebab-case 名 (例: `grid-editing`、`combo-overview`) で特定のコンポーネント ドキュメントの完全な Markdown コンテンツを取得します。コード サンプル、テーブル、リンクを含みます。 |
| `search_docs`            | フレームワークの Ignite UI ドキュメント全体をフル テキスト検索します。抜粋付きで最大 20 件のランク付き結果を返します。                                             |
| `get_project_setup_guide` | CLI の手順とインストール指示を含む、特定のフレームワークで新しいプロジェクトを作成するためのプロジェクト セットアップ ガイドを返します。                                      |
| `search_api`             | Angular、React、Web Components 全体でキーワードまたはコンポーネント名で API エントリを検索します。                                               |
| `get_api_reference`      | プロパティ、メソッド、イベントを含む特定のコンポーネントまたはクラスの完全な API リファレンスを返します。Angular、React、Web Components をサポートします。                     |

CLI MCP ツールは、大まかに次のことに役立ちます:

- 新しいプロジェクトの作成
- 既存のプロジェクトでの作業
- コンポーネントの追加と変更
- プロジェクト構造と設定の更新
- ドキュメントと API に関する質問への回答

> [!NOTE]
> フレームワーク検出はコンポーネント プレフィックス: `for Angular`、`for React`、`for Web Components`、`for Blazor` を使用します。アシスタントは、開いているファイルまたはプロンプトのコンテキストから正しいフレームワークを自動的に検出します。

Theming サーバーは、同じクライアント セッションにスタイリング、テーマ、パレット、トークンのワークフローを追加します。

## 一般的なワークフロー

次のセットアップ シナリオは、各開始点をいつ使用するかを示しています。

### CLI 先行のセットアップ

最速のガイド付きセットアップが必要で、`.vscode/mcp.json` を自動生成したい場合は、まず Ignite UI CLI でプロジェクトを作成します。

シナリオ例:

- _「まず Ignite UI CLI で新しいプロジェクトを作成し、生成されたプロジェクトを VS Code で開いて、MCP を使って続けたいです。」_
- _「React プロジェクトが欲しいことがわかっているので、CLI で作成してから MCP を使ってページとコンポーネントを追加します。」_

### 空のフォルダーのセットアップ

MCP 設定を追加した後にアシスタントにチャットからプロジェクトを作成させたい場合は、空のフォルダーから開始します。

シナリオ例:

- _「完全に空のフォルダーがあり、MCP が接続されてからアシスタントにチャットでプロジェクト全体を作成させたいです。」_
- _「Ignite UI CLI を先に手動で実行したくないので、MCP で最初のプロジェクト作成ステップを主導させます。」_

### 既存のプロジェクトのセットアップ

現在のコードベースを維持しながら、プロジェクトの変更、コンポーネントの作業、ドキュメントの質問にアシスタントを使用したい場合は、既存のプロジェクトに MCP を接続します。

シナリオ例:

- _「すでにプロジェクトがあり、アシスタントがページとコンポーネントを更新できるように MCP を追加するだけです。」_
- _「プロジェクトはすでに存在しており、現在のコードベースで作業しながら主にドキュメントと API の質問をしたいです。」_

## トラブルシューティング

**`npx` が認識されない**

Node.js がインストールされていないか、現在のターミナル環境で使用できません。[nodejs.org](https://nodejs.org) から Node.js をインストールして、`node --version` で確認してください。

**`ig` が認識されない**

グローバルな `ig` コマンドを使用する場合は、まず `npm install -g igniteui-cli` で Ignite UI CLI をインストールしてください。グローバル インストールを行わない場合は、代わりに `npx --package igniteui-cli igniteui ...` 形式を使用します。

**設定を保存した後、MCP ツールが表示されない**

ワークスペースをリロードするか、エディターを再起動するか、AI クライアントを再起動してください。一部のクライアントでは、新しい MCP 設定ファイルを検出するために完全な再起動が必要です。

**1 つのサーバーが起動しない**

設定の内容が、キー名と引数の順序を含めてサンプルと完全に一致していることを確認してください。

**プロジェクトは作成されたが、MCP 設定が VS Code のみ対応**

Ignite UI CLI は CLI 先行パスで `.vscode/mcp.json` を書き込みます。Cursor、Claude Desktop、Claude Code、JetBrains、GitHub、または他の MCP クライアントを使用している場合は、そのクライアントの設定形式と場所に合わせて同じサーバー エントリをコピーしてください。

**アシスタントが間違ったフォルダーで作業している、またはプロジェクト ファイルが見つからない**

AI クライアントがプロジェクト ルートを指していることを確認してください。エディター ベースのクライアントを使用している場合は、プロジェクト ルート フォルダーを開きます。デスクトップまたはチャット ファーストのクライアントを使用している場合は、正しいプロジェクト フォルダーをセッション コンテキストとして利用できるようにします。

**空のフォルダーのセットアップが期待どおりに動作しない**

開始する前にフォルダーが実際に空であることを確認してください。フォルダーにすでにプロジェクト ファイルが含まれている場合は、新しい空のワークスペースとして扱うのではなく、既存のプロジェクト パスを使用します。

**GitHub MCP 設定が拒否される**

JSON が `mcpServers` 構造を使用し、各ローカル サーバー エントリに `type`、`command`、`args` が含まれていることを確認してください。`tools` フィールドを含める場合は、有効なツール名または `["*"]` を使用します。

## その他のリソース

- [Ignite UI を使用した AI 支援開発](./ai-assisted-development-overview.md)
- [Ignite UI for Angular スキル](./skills.md)
- [Ignite UI Theming MCP](./theming-mcp.md)

<div class="divider--half"></div>

コミュニティは常に活気があり、新しいアイデアを歓迎しています。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
