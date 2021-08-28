---
sidebar_position: 1
description: Schoolwork as code
slug: '/'
---

# Welcome to kiwi!

Kiwi is a tool to help you write your schoolwork (e.g. worksheets, essays, lab reports, etc) as code using [LaTeX](https://en.wikipedia.org/wiki/LaTeX) or markdown and with a number of [automation features](#-automation) and a powerful [template system](#-templates). It is primarily controlled from the command line but editor extensions and a desktop app are planned for the future. Read more to see how kiwi could benefit you! Here are some core features:

- Creating documents
- Writing markdown that is then transpiled to LaTeX
- Organizing documents
- Powerful templates

## Why schoolwork as code?

tl;dr coding is cool and school is boring (also LaTeX documents just look awesome).

## Installing kiwi

Using [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) you can install kiwi by running the following command in your terminal of choice:

```sh
cargo install kiwi-cli
```

Once that is done create a folder where you want to create your kiwi project and then run the following terminal command from inside that folder:

```sh
kiwi setup
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
