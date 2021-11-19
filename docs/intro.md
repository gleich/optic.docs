---
id: intro
description: Schoolwork as code
slug: '/'
---

# What is kiwi?

⚠️ kiwi's documentation is **not** done ⚠️

Kiwi is a tool to help you write your schoolwork (e.g. worksheets, essays, lab reports, etc) as code using [LaTeX](https://en.wikipedia.org/wiki/LaTeX) or markdown. With several [automation features](#introduction-to-the-automation) and a powerful [template system](tutorial/templates.md) it removes a lot of the pain points you would encounter if you tried to do it all manually. It's primarily controlled from the command line but editor extensions and a desktop app are planned for the future. Read more to see how kiwi could benefit you! Here are some core features:

- Creating documents
- Organizing documents
- Writing markdown that is then transpiled (converted) to LaTeX
- Powerful templates

## Why schoolwork as code?

tl;dr coding is cool and school is boring (also LaTeX documents just look awesome and help make something _really_ boring a little more interesting).

## Introduction to the Automation

If you try to write LaTeX manually at a large scale you will quickly realize that it is pretty repetitive. Having a tool to automatically create, organize, and build documents for you saves a ton of time and removes a ton of pain points. Kiwi can do all of this for you with only two commands:

| **Command**  | **Description**                                         |
| ------------ | ------------------------------------------------------- |
| `kiwi new`   | Create a new document and put it in an organized folder |
| `kiwi build` | Build the last updated document into a PDF              |

## Installing kiwi

Using [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) you can install kiwi by running the following command in your terminal of choice:

```bash
cargo install kiwi-cli
```

To make sure that everything is working properly please run the following command:

```bash
kiwi --version
```

<details>
  <summary>Help, my install didn't work!</summary>
  <div>
    <div>Sorry to hear that your install didn't go smoothly! See if you have any of the problems listed below. If not, feel free to create an issue on our <a href="https://github.com/gleich/kiwi/issues/new?assignees=%40gleich&labels=bug&template=bug.md&title=" target="_blank" >CLI's GitHub Repository</a>.</div>
    <br/>
    <details>
      <summary>cargo command not found</summary>
      <div>
        This means that you don't have cargo installed. Please reference <a href="https://doc.rust-lang.org/cargo/getting-started/installation.html" target="_blank">cargo's installation documentation</a> to see how to install it.
      </div>
    </details>
    <details>
      <summary>kiwi command not found</summary>
      <div>
        This means that kiwi is not in your $PATH. Please find where cargo installs binaries on your system. By default that would be a folder called .cargo in your home directory.
      </div>
    </details>
  </div>
</details>

You then need the following programs installed:

- `pandoc` - Converts markdown to LaTeX code
- `pdflatex` - Builds a PDF from a LaTeX document
- `git` - Keep track of your changes

## How to learn kiwi

The best way to learn kiwi is by using kiwi! Follow along in the documentation with a dummy project to see how kiwi works and how it can help you.
