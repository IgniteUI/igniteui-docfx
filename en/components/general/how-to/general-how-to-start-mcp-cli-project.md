---
title: Create a Project with Ignite UI CLI, then Continue with Ignite UI CLI MCP | Ignite UI for Angular | Infragistics
_description: Learn how to create a new Angular project with Ignite UI CLI, review the generated MCP configuration, and continue with MCP tools in a supported AI client.
_keywords: Angular, Ignite UI for Angular, Infragistics, Ignite UI CLI, MCP, Model Context Protocol, Ignite UI MCP, Ignite UI Theming MCP, AI
---

# Create a Project with Ignite UI CLI, then Continue with MCP

This guide shows a CLI-first flow for Angular. You create the Angular project with Ignite UI CLI first, then continue with MCP using a supported editor or AI client.

Before you begin, make sure Node.js is installed, `npm` can run, and you have internet access for package resolution.

Supported AI clients can include VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, and other MCP-compatible clients.

Editor-based clients usually open the project folder directly. Desktop or chat-first clients may use external MCP configuration and then work with the project context you provide.

## Step 1: Choose How to Run Ignite UI CLI

### Option 1: Install globally

Run:

```cmd
npm install -g igniteui-cli
```

Use this when you want the `ig` command available globally.

### Option 2: Run with `npx`

If your setup supports it, you can run Ignite UI CLI without installing it globally by using `npx`.

Guided example:

```cmd
npx --package igniteui-cli igniteui new
```

Direct command example:

```cmd
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
```

This topic uses the global `ig` command in the main examples below. If you prefer not to install the CLI globally, you can use the matching `npx` form instead when supported by your setup.

## Step 2: Create a New Empty Folder

Create a new empty folder for your Angular project.

Open a terminal in that folder.

## Step 3: Create the Project

You can create the project in either of these ways.

### Guided mode

Run:

```cmd
ig new
```

Use this when you want the CLI to guide you through the available options.

Matching `npx` form:

```cmd
npx --package igniteui-cli igniteui new
```

### Direct command

Run a full command when you already know the project settings.

Use this form:

```cmd
ig new my-app --framework=angular --type=[project-type] --template=[template]
```

Examples:

```cmd
ig new my-app --framework=angular --type=igx-ts --template=base
ig new my-app --framework=angular --type=igx-ts --template=empty
ig new my-app --framework=angular --type=igx-ts --template=side-nav
ig new my-app --framework=angular --type=igx-ts --template=side-nav-auth
```

Matching `npx` examples:

```cmd
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=base
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=empty
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=side-nav
npx --package igniteui-cli igniteui new my-app --framework=angular --type=igx-ts --template=side-nav-auth
```

Common variants include:

- `--framework=angular`
- `--template=base` for a project structure with routing
- `--template=empty` for an empty project structure with routing and home page
- `--template=side-nav` for a project with side navigation
- `--template=side-nav-auth` for a side navigation project with authentication
- `--type=igx-ts` for Angular projects that use standalone components by default
- `--type=igx-ts-legacy` for Angular projects that use module-based bootstrapping

For more project templates and CLI command details, see the [Ignite UI CLI](../cli-overview.md) topic.

## Step 4: Complete the Guided CLI Setup

This step applies only if you used the guided `ig new` flow.

Complete the prompts in the CLI.

The exact prompts depend on the platform.

Use the short flow below:

- project name
- framework
- project type when applicable
- template
- theme when offered
- add a component or view, or complete the setup
- install and run option when offered

After the last prompt, the CLI creates the project and installs everything needed to run it.

## Step 5: Review the MCP Configuration

After the project is created, review the MCP configuration for your AI client.

If you are using VS Code, open `.vscode/mcp.json`.

If you are using another AI client, add the equivalent MCP configuration in that client's location:

- **Cursor**: `.cursor/mcp.json`
- **Claude Desktop**:
  **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
  **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Claude Code**: `.mcp.json`
- **JetBrains IDEs**: configure MCP in **Tools -> AI Assistant -> Model Context Protocol (MCP)**
- **Other MCP clients**: use the same command and arguments with the client's STDIO MCP configuration

Make sure the configuration contains the required Ignite UI MCP servers.

### VS Code

```json
{
  "servers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

### Cursor, Claude Desktop, Claude Code, JetBrains, and Other MCP Clients

```json
{
  "mcpServers": {
    "igniteui": {
      "command": "npx",
      "args": ["-y", "igniteui-cli@next", "mcp"]
    },
    "igniteui-theming": {
      "command": "npx",
      "args": ["-y", "igniteui-theming", "igniteui-theming-mcp"]
    }
  }
}
```

- `igniteui` starts the Ignite UI CLI MCP server
- `igniteui-theming` starts the Ignite UI theming MCP server

What you should see next: your AI client configuration contains the required Ignite UI MCP servers.

## Step 6: Open the Project in Your Editor or AI Client

If you are using an editor-based client, open the generated Angular project folder there.

If you are using a desktop or chat-first client, make the generated Angular project available as the project context you want to work with.

The client should detect the MCP configuration from the appropriate file or settings location.

## Step 7: Confirm the MCP Servers and Tools Are Available

Open chat, agent mode, or the MCP tools view in your AI client.

Check the available tools.

You should see the MCP servers and their tools, including:

- `igniteui`
- `igniteui-theming`

What you should see next: all MCP servers are available and there are no startup errors.

Client-specific checks:

- **VS Code with GitHub Copilot**: open Copilot Chat and switch to **Agent** mode
- **Cursor**: open a new chat session and check the available MCP tools
- **Claude Desktop**: restart the app and look for the MCP indicator in the chat input area
- **Claude Code**: use the `/mcp` command to confirm the server is connected
- **JetBrains IDEs**: review the MCP connection in **Tools -> AI Assistant -> Model Context Protocol (MCP)**

## Step 8: Start Prompting

Once the tools are available, you can continue with prompts to build or refine the Angular application.

## Troubleshooting

**`ig` does not run**

Make sure Ignite UI CLI is installed globally and available in the terminal.

**The project is created but MCP tools do not appear**

Reload the workspace, reopen the project, or restart the AI client.

**One server does not start**

Check that the MCP configuration content matches the example exactly.

## Next Steps

Now that the Angular project is created and the MCP tools are available, you can use chat to continue building on top of the existing app.

Typical next actions include:

- adding or changing pages and features
- updating theme and styling
- refining generated code
- asking for help with Angular components and configuration

## Related Topics

This guide covers the CLI-first flow for Angular. If you want the assistant to start from a completely empty folder and create the Angular project from the beginning through MCP, see the [Start from an Empty Folder with MCP](general-how-to-start-mcp.md) topic.

If you already have an Angular project and want to connect MCP to the existing codebase, see [Use MCP in an Existing Project](general-how-to-use-mcp-existing-project.md).

If you want a short overview of the available MCP setup paths first, see [Ignite UI MCP Overview](general-how-to-mcp-overview.md).

For more information about AI skills and theming workflows, see [Angular Agent Skills](../../ai/skills.md) and [Ignite UI Theming MCP](../../ai/theming-mcp.md).
