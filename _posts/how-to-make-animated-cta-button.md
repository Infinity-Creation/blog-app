---
title: "How to make an animated CTA button"
excerpt: "In this article I will show you how to make a clean and minimalistic CTA button"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2020-04-16T05:35:07.322Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---
## Intro

In this article I'm going to show you how to create an animated CTA button for your hero section. If you can't hang on to the tutorial, I will show all the code in one piece at the end anyway, so feel free to copy that instead.

## Initial Layout

First I'll create the initial layout by nesting our button in a `<div>` element as follows:

```xml
<body>
<div class="flex justify-center items-center">
<div>
</body>
```

## Button

Inside the `div` you can then create an `<a>` element, which will be our button and be styled later on.

```xml
<a href=""class=""><a>
```

First of All we need to make our button a bit bigger than just a piece of text, so we have to add some padding to it as follows:

```xml
<a href=""class="py-3 px-12"><a>
```

As can be seen from the thumbnail of this article I also want the background of the button to be white and the background of the page to be black. We also want the edges of the button to be rounded a bit. Also add a border as we will need this for the animation later on

```xml
<a href=""class="py-3 px-12 border-[1px] 
border-white text-black bg-white"><a>
```

I recommend styling the body element's background to be black as follows, you can also apply the background to the `<div>` element though. It's just easier if the whole page is black.

```xml
<body class="bg-[black]"></body>
```

So that our button is responsive we will also make the button a bit less wide on larger screens.

```xml
<a href=""class="py-3 px-12 border-[1px] 
border-white text-black bg-white lg:px-8"><a>
```

With that out or the way we need to round the button a bit more too by using `border-radius` .

```xml
<a href=""class="py-3 px-12 border-[1px] 
border-white text-black bg-white lg:px-8 rounded-2xl"><a>
```

## Animation

Now that our button looks good, we can add our animation. The animation will happen on hover so that the button will jump up when you hover on it.

```xml
<a href=""class="py-3 px-12 border-[1px] 
border-white text-black bg-white lg:px-8 
rounded-2xl transition duration-500 hover:bg-black
 hover:text-white hover:-translate-y-2"><a>
```

Now we are done, if you didn't catch up somewhere in the tutorial here is all the code at once:

```xml
<body class="bg-[black]">
<div class="flex justify-center items-center">

<a href=""class="py-3 px-12 border-[1px] 
border-white text-black bg-white lg:px-8 
rounded-2xl transition duration-500 hover:bg-black
 hover:text-white hover:-translate-y-2"><a> 
<div>
</body>
```

I really hope this tutorial helped you improve your CTA and made you better at TailwindCSS. Consider checking out my other posts too as you may find them useful as well.