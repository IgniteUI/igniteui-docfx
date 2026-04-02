---
title: Ignite UI MCP Overview | Ignite UI for Angular | Infragistics
_description: Learn what Ignite UI MCP is and choose the right Angular MCP workflow topic to start with.
_keywords: Angular, Ignite UI for Angular, Infragistics, MCP, Model Context Protocol, Ignite UI MCP, AI, Ignite UI CLI MCP, Ignite UI Theming MCP
---

# Ignite UI MCP Overview

This topic is the quick entry point for Ignite UI MCP for Angular.

Use it to understand what Ignite UI MCP is, how it fits into your editor or AI client, and which setup path to open next.

## What Ignite UI MCP Is

Ignite UI MCP is a set of MCP servers that make Ignite UI tools available to an AI assistant in a supported editor or chat experience.

The main servers used in the current setup flows are:

- `igniteui` for creating projects, modifying and editing existing projects, creating and changing components, and asking documentation questions
- `igniteui-theming` for theme and styling-related work

Together, they help the assistant create a Angular project, continue setup work, support theming tasks, and answer product questions from chat.

Supported AI clients can include VS Code with GitHub Copilot, Cursor, Claude Desktop, Claude Code, JetBrains IDEs with AI Assistant, and other MCP-compatible clients.

The exact setup flow can vary a little depending on your editor and AI client.

## Before You Start

Before you configure Ignite UI MCP, make sure you have:

- Node.js installed so `npx` is available
- a supported editor or AI client with MCP support
- internet access for package resolution when the MCP servers start

Some workflows also assume you already have a Angular project or that you want to create one in a new empty folder.

## How the MCP Setup Works

The Ignite UI MCP servers are started through `npx`.

In practice, the setup is always the same at a high level:

- add MCP configuration for your AI client
- point that configuration to the Ignite UI MCP servers
- let the client load the servers and expose their tools
- continue in chat or agent mode

The server entries use a command and arguments similar to these:

- `igniteui`: `npx -y igniteui-cli@next mcp`
- `igniteui-theming`: `npx -y igniteui-theming igniteui-theming-mcp`

The `-y` flag tells `npx` to auto-confirm the package download prompt so the servers can start without manual intervention.

## Editors and AI Clients

Ignite UI MCP is not limited to one editor or one chat provider.

You can use it with different combinations of editors and AI clients, as long as they support MCP.

Common examples include:

- **VS Code with GitHub Copilot** using a workspace-level `.vscode/mcp.json`
- **Cursor** using `.cursor/mcp.json`
- **Claude Desktop** using the desktop client MCP configuration file
- **Claude Code** using `.mcp.json` or the `claude mcp` command
- **JetBrains IDEs with AI Assistant** using the IDE MCP settings
- **Other MCP clients** using the same command and arguments through STDIO configuration

In practice, the main differences are usually:

- where the MCP configuration is stored
- how the client shows the available MCP tools
- whether you continue in chat, agent mode, or another AI panel

The Ignite UI MCP servers stay the same even when the editor or chat experience changes.

Editor-based clients usually open the project folder directly. Desktop or chat-first clients may use an external MCP configuration file and then work with the project you point them to.

This overview keeps the client explanation short. The step-by-step topics below show the exact configuration locations and the exact JSON structure to use.

## Available Starting Paths

The current section includes three setup paths:

- start from a completely empty folder and let MCP help create the Angular project
- create the Angular project with Ignite UI CLI first, then continue with MCP
- connect MCP to a Angular project that already exists and continue working in the current codebase

The existing-project path can also be used when you want to ask documentation and API questions while working in the current app.

Each topic repeats the essential setup details so it can be used on its own, even if you open it directly from search or navigation.

## Open the Right Topic

Use the short guide below to choose the best starting point:

> **Start from an Empty Folder with MCP for Angular**: use this when you want MCP to help create the Angular project from the beginning.

> **Create an Angular Project with Ignite UI CLI, then Continue with MCP**: use this when you want to create the Angular project first and use MCP after that.

> **Use MCP in an Existing Angular Project**: use this when you already have an Angular project and want to connect MCP, continue working in the current codebase, and ask documentation or API questions.

- [Start from an Empty Folder with MCP for Angular](general-how-to-start-mcp.md)
  Use this when you want to begin with an empty workspace, add the MCP configuration for your AI client, and let the assistant help create the Angular project from the beginning.
- [Create an Angular Project with Ignite UI CLI, then Continue with MCP](general-how-to-start-mcp-cli-project.md)
  Use this when you want to create the Angular project with Ignite UI CLI first and continue with the generated MCP setup after that.
- [Use MCP in an Existing Angular Project](general-how-to-use-mcp-existing-project.md)
  Use this when you want to connect MCP to an existing Angular project, continue working in the current codebase, and ask documentation or API questions in chat.
