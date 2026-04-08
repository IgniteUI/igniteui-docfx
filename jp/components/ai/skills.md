---
title: エージェント スキル | AI スキル | AI 支援開発 | Ignite UI for Angular | インフラジスティックス
_description: エージェント スキルを使用して、Ignite UI for Angular コンポーネント、グリッド、データ操作、テーマ設定を使った AI 支援開発を強化する方法について説明します。
_keywords: Ignite UI for Angular, エージェント スキル, agent skills, AI 支援開発, ai assisted development, github copilot, cursor, windsurf, claude, gemini cli, junie
_license: MIT
mentionedTypes: []
_language: ja
---

# Ignite UI for Angular エージェント スキル

Ignite UI for Angular には **[エージェント スキル](https://agentskills.io/)** が付属しています。これは、AI コーディング アシスタント (GitHub Copilot、Cursor、Windsurf、Claude、Gemini CLI、JetBrains Junie など) に Ignite UI for Angular の使用方法を教える構造化されたナレッジ ファイルです。これらのスキル ファイルは、コンポーネント、グリッド、データ操作、テーマ設定に関するコンテキスト対応のガイダンスを提供し、AI アシスタントがベスト プラクティスに従った正確で慣用的なコードを生成できるようにします。

> [!NOTE]
> AI ツール環境は急速に進化しています。ツールや IDE が更新されるにつれて、スキルの検出場所や配布オプションが変更される場合があります。最新情報については、ご使用のツールまたはエージェントの公式ドキュメントを常に参照してください。

## 利用可能なスキル

スキル ファイルは、Ignite UI for Angular リポジトリの [`skills/`](https://github.com/IgniteUI/igniteui-angular/tree/master/skills) ディレクトリにあります:

| スキル | パス | 説明 |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| コンポーネントとレイアウト | [`skills/igniteui-angular-components/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-components/SKILL.md) | スタンドアロン コンポーネント、フォーム コントロール、オーバーレイ、レイアウト |
| データ グリッド | [`skills/igniteui-angular-grids/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-grids/SKILL.md) | Grid、Tree Grid、Hierarchical Grid、Pivot Grid、ソート、フィルタリング、グループ化、ページング、リモート データ |
| テーマ設定とスタイル設定 | [`skills/igniteui-angular-theming/SKILL.md`](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md) | パレット、タイポグラフィ、エレベーション、コンポーネント テーマ、MCP サーバー |

> [!NOTE]
> Ignite UI for Angular **21.1.0** 以降、これらのスキルはエージェントのスキル パス (例: `.claude/skills`、`.agents/skills`、`.cursor/rules/`) に配置すると自動的に検出されます。このリリースには、これらのスキルをプロジェクトに自動的に追加するオプションの移行が含まれています。

## スキルの場所

各 AI コーディング ツールは、特定のディレクトリからスキルを検出します。AI アシスタントがスキルを自動的に検出して使用できるよう、適切な場所にスキル ファイルを配置してください。一般的な `.agents/skills/` 規則は複数のツールでサポートされており、各ツールには固有のディレクトリもあります。

### 一般 (`.agents/skills/`)

`.agents/skills/` ディレクトリは、[VS Code と Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills)、[OpenAI Codex](https://developers.openai.com/codex/skills)、[Cursor](https://cursor.com/docs/skills)、[Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers)、[Antigravity](https://antigravity.google/docs/skills)、[Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes) など、複数のツールでサポートされているクロスエージェント規則です。スキル ディレクトリをプロジェクト ルートの `.agents/skills/` にコピーします:

```
.agents/
  skills/
    igniteui-angular-components/
      SKILL.md
    igniteui-angular-grids/
      SKILL.md
    igniteui-angular-theming/
      SKILL.md
```

すべてのプロジェクトで利用できるユーザー レベル (グローバル) のスキルには、代わりに `~/.agents/skills/` を使用します。

### GitHub Copilot

[GitHub Copilot](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) は次の場所からスキルを検出します:

| スコープ | 場所 |
| :------- | :------------------------------------------------------------------------------------------- |
| プロジェクト | `.github/skills/`、`.claude/skills/` |
| 個人 | `~/.copilot/skills/`、`~/.claude/skills/` (Copilot コーディング エージェントおよび GitHub Copilot CLI のみ) |

> **ヒント:** [VS Code](https://code.visualstudio.com/docs/copilot/customization/agent-skills) では、これらの場所に加えて一般的な `.agents/skills/` および `~/.agents/skills/` も含まれます。また、`chat.agentSkillsLocations` 設定を使用して追加のスキルの場所を構成できます。

### Claude

[Claude](https://code.claude.com/docs/en/skills#where-skills-live) は次の場所からスキルを検出します:

| スコープ | 場所 |
| :------- | :------------------ |
| プロジェクト | `.claude/skills/` |
| 個人 | `~/.claude/skills/` |

### Cursor

[Cursor](https://cursor.com/docs/skills#skill-directories) は次の場所からスキルを検出します:

| スコープ | 場所 |
| :------------ | :----------------------------------- |
| プロジェクト | `.agents/skills/`、`.cursor/skills/` |
| ユーザー (グローバル) | `~/.cursor/skills/` |

### Gemini CLI と Antigravity

[Gemini CLI](https://geminicli.com/docs/cli/skills/#skill-discovery-tiers) と [Antigravity](https://antigravity.google/docs/skills) は次の場所からスキルを検出します:

| スコープ | 場所 |
| :-------- | :--------------------------------------- |
| ワークスペース | `.gemini/skills/`、`.agents/skills/` |
| ユーザー | `~/.gemini/skills/`、`~/.agents/skills/` |

> **ヒント:** Gemini CLI の `/skills` スラッシュ コマンドを使用して、インストールされているスキルを表示および管理できます。

### Junie (JetBrains IDEs)

[Junie](https://junie.jetbrains.com/docs/agent-skills.html) は次の場所からスキルを検出します:

| スコープ | 場所 |
| :------ | :----------------- |
| プロジェクト | `.junie/skills/` |
| ユーザー | `~/.junie/skills/` |

### Windsurf

[Windsurf](https://docs.windsurf.com/windsurf/cascade/skills#skill-scopes) は次の場所からスキルを検出します:

| スコープ | 場所 |
| :-------- | :------------------------------------------------- |
| ワークスペース | `.windsurf/skills/`、`.agents/skills/` |
| グローバル | `~/.codeium/windsurf/skills/`、`~/.agents/skills/` |

---

## スキルのインストール

以下のいずれかのオプションを使用して、スキル ファイルをダウンロードし、AI アシスタントに適切な[スキルの場所](#スキルの場所)に配置します。

### **オプション A — インストールされた npm パッケージを使用する**

Ignite UI for Angular がプロジェクトに既にインストールされている場合、スキル ファイルは `node_modules` の配下にあります。それらをプロジェクトにコピーする (例: `.agents/skills/` の下) には、次のコマンドを実行します:

**macOS / Linux / Windows (PowerShell)**

```bash
cp -r node_modules/igniteui-angular/skills/. .agents/skills/
```

**Windows (コマンド プロンプト)**

```cmd
robocopy node_modules\igniteui-angular\skills .agents\skills /E
```

または、必要に応じて個別のスキル ディレクトリをコピーします:

**macOS / Linux / Windows (PowerShell)**

```bash
cp -r node_modules/igniteui-angular/skills/igniteui-angular-components .agents/skills/
cp -r node_modules/igniteui-angular/skills/igniteui-angular-grids .agents/skills/
cp -r node_modules/igniteui-angular/skills/igniteui-angular-theming .agents/skills/
```

**Windows (コマンド プロンプト)**

```cmd
robocopy node_modules\igniteui-angular\skills\igniteui-angular-components .agents\skills\igniteui-angular-components /E
robocopy node_modules\igniteui-angular\skills\igniteui-angular-grids .agents\skills\igniteui-angular-grids /E
robocopy node_modules\igniteui-angular\skills\igniteui-angular-theming .agents\skills\igniteui-angular-theming /E
```

### **オプション B — `gemini skills` CLI を使用する**

`gemini skills install` コマンドは、Git リポジトリから直接スキルをインストールします。2 つのスコープをサポートします:

- **ユーザー スコープ** (デフォルト) — ユーザー アカウントに対してスキルをグローバルにインストールし、すべてのプロジェクトで利用できるようにします。スキルは `~/.gemini/skills/` または `~/.agents/skills/` に配置されます。
- **ワークスペース スコープ** — 現在のプロジェクト ディレクトリの `.agents/skills/` にスキルをローカルにインストールし、そのプロジェクトのみにスコープします。

**ユーザー スコープにインストールする (デフォルト):**

```bash
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-components
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-grids
gemini skills install https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-theming
```

**ワークスペース スコープにインストールする:**

```bash
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-components
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-grids
gemini skills install --scope workspace https://github.com/IgniteUI/igniteui-angular.git --path skills/igniteui-angular-theming
```

インストールが完了すると、スキル ファイルはそれぞれの場所で利用できるようになり、互換性のある AI アシスタントによって自動的に検出されます。

### **オプション C — `npx skills` CLI を使用する**

`skills` CLI は、スキルをプロジェクトに直接ダウンロードしてインストールするインタラクティブなツールです。プロジェクト ルートで次のコマンドを実行します:

```shell
npx skills add IgniteUI/igniteui-angular
```

CLI は、一連のプロンプトをガイドします:

1. インストールするスキルを選択します (components、theming など)。
2. プロジェクト内のスキル ファイルのターゲット場所を選択します (例: `.agents/skills/`、`.github/skills/`)。
3. 選択したスキル ファイルを自動的にダウンロードして書き込みます。

完了すると、スキルはすぐに使用できます。手動でファイルをコピーする必要はありません。

> **注:** Node.js とインターネット接続が必要です。コマンドは、[IgniteUI/igniteui-angular](https://github.com/IgniteUI/igniteui-angular) リポジトリから最新のスキル ファイルを取得します。

---

## Theming MCP サーバー

**Theming スキル**には、`igniteui-theming` MCP サーバーのセットアップ手順が含まれています。これにより、AI アシスタントがパレット生成やコンポーネント テーマのひな形作成などのライブ テーマ ツールにアクセスできます。VS Code、Cursor、Claude Desktop、JetBrains IDE の構成手順については、[Theming スキル ファイル](https://github.com/IgniteUI/igniteui-angular/blob/master/skills/igniteui-angular-theming/SKILL.md)を参照してください。

Theming MCP の詳細については、[Ignite UI Theming MCP](./theming-mcp.md) のドキュメントを参照してください。

## その他のリソース

<div class="divider--half"></div>

<!-- TODO: Not in xplat, can't link to md directly + docfx is aggressively and annoyingly treating all forms of relative links as such.. -->

- <a href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/getting-started">Ignite UI for Angular の概要</a>
- <a href="https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli-overview">Angular Schematics & Ignite UI CLI</a>

<div class="divider--half"></div>
コミュニティに参加して新しいアイデアをご提案ください。

- [Ignite UI for Angular **フォーラム** (英語)](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub** (英語)](https://github.com/IgniteUI/igniteui-angular)
