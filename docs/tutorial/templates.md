---
id: templates
description: Learn the basics of templates in kiwi
---

# Templates

Understanding how kiwi templates work is very important if you want to use kiwi effectively. Let's get right into it! I highly suggest reading this page a few times until you understand it.

## Branch v.s. Root Basics

- Branch: Where you write the document you are working on. Written in Markdown or LaTeX. If Markdown is being used it gets automatically converted to LaTeX at compile time.
- Root: Configuration file for your document that gets loaded at compile time. Written in LaTeX.

So if you were writing an essay for school you would use a root file to configure the margins, font size, etc. The branch file would then store the contents of your essay.

## Roots

Assuming that you have read the [Learn LaTeX in 30 minutes by Overleaf](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) you should be familiar with the [preamble](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minute). Root files are basically just the preamble part of the document.

Here is what a very basic root template file looks like:

```latex
\documentclass{report}

{{required_preamble}}

\begin{document}
    {{branch.content}}
\end{document}
```

At compile time the line `{{branch.content}}` is replaced with the content of the branch file and the PDF is built off of that LaTeX file.

## Branches

Branch files are just where you write your document. Below is an example template that's written in markdown:

```md
<!--
created > {{time.simple_date}}
   root > {{root_filename}}
-->

# Summary of Chapter

-

# Sources

-
```

At the top of every branch is a configuration section that tells kiwi some basic information used at compile time. Every branch _must_ have this at the top. We can write the same template file in LaTeX:

```latex
\iffalse
created > {{time.simple_date}}
   root > {{root_filename}}
\fi

\section{Summary of Chapter}

\begin{itemize}
    \item
\end{itemize}

\section{Sources}

\begin{itemize}
    \item
\end{itemize}
```

## Example Workflow

Let's say you want to write a formal paper for your English class. Branches and root templates would be used in the following way:

- Root: Use a root template that provides double line spacing, Times New Roman font, and other formatting options.
- Branch: The actual content of the essay.
