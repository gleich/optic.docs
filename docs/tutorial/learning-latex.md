---
id: learning-latex
description: Tips for learning LaTeX
---

# Learn LaTeX

LaTeX looks very scary if you've never used it before. If you know Markdown you can easily learn LaTeX! Below are some basic elements in LaTeX compared to their markdown equivalent:

## Basic Elements

### Bold Text

Markdown:

```md
**Hello World!**
```

LaTeX:

```latex
\textbf{Hello World!}
```

### Italicize Text

Markdown:

```md
_Hello World!_
```

LaTeX:

```latex
\textit{Hello World!}
```

### Headers

#### Level #1

Markdown:

```md
# Hello World!
```

LaTeX

```latex
\section{Hello World!}
```

#### Level #2

Markdown:

```md
## Hello World!
```

LaTeX

```latex
\subsection{Hello World!}
```

#### Level #3

Markdown:

```md
#### Hello World!
```

LaTeX

```latex
\subsubsection{Hello World!}
```

#### Level #4

Markdown:

```md
#### Hello World!
```

LaTeX

```latex
\subsubsubsection{Hello World!}
```

### Numbered Lists

Markdown:

```md
1. Hello!
2. World!
```

LaTeX:

```latex
\begin{enumerate}
    \item Hello!
    \item World!
\end{enumerate}
```

### Bulleted List

Markdown:

```md
- Hello!
- World!
```

```latex
\begin{itemize}
    \item Hello!
    \item World!
\end{itemize}
```

## Continued Reading

I _highly_ recommend going through the [Learn LaTeX in 30 minutes by Overleaf](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) article before continuing the tutorial if you are brand new to LaTeX. Sections such as the [preamble](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes) will become very important in the future sections.

## Tips

- Don't know something? Just google it! There are a ton of stack overflow posts to help with everything from numbered lists to complex graphs.
- Speed up writing by creating snippets. I have a [giant snippet file](https://github.com/gleich/dots/blob/main/matt/Library/Application%20Support/Code/User/snippets/latex.json) I use to write LaTeX fast.
- Use tools like the [google drive desktop app](https://www.google.com/drive/download/) to sync the PDFs to your google drive account.
