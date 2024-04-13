---
title: "How to do Text Gradients in Tailwind"
excerpt: "The way to make your text stand out"
coverImage: "/assets/blog/hello-world/gradient2.png"
tags: ["Null"]
date: "2020-04-16T05:35:07.322Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---
## Intro
In this short tutorial I will show you how to make your text really stand out with text gradients and why it actually works. So hang on tight as we explore the realm of Tailwindcss.

## Tutorial

### Initial Layout

First we need a basic layout for our text, the `<body>` tag and so on. We also need the text itself, which I will represent as an `<h1>` tag, but feel free to use any other tag with text you like. We also have to give the `h1` a class, but leave that empty for now.

```xml
<html>
<body>
<h1 class="">Hello World</h1>
</body>
</html>

```

### Styling the text

We need the `h1` to be big so give it a class of `text-8xl`. now add `text-transparent bg-clip-text` to the already existing class. If you open it in the browser, the `h1` will no longer be visible, but that is going to change soon. Your `h1` should now look like this:
```xml
<h1 class="text-8xl text-transparent bg-clip-text">Hello World</h1>
```
After this add the tailwind classes `bg-gradient-to-r from-pink-500 to-blue-600` Your text now should have an intimidating gradient and really stand out on the page. Your `h1` should now look like this:

```xml
<h1 class="text-8xl text-transparent bg-clip-text bg-gradient-to-r 
from-pink-500 to-blue-600">Hello World</h1>
```
Lastly add `selection:text-black` to the `h1` class, as if you don't do that the text will become invisible when selected which will ruin your UX.

## Outro

I hope this helped you with your goal to make your heading really stand out using text gradients in Tailwindcss and enjoyed reading this article.


