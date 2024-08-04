---
title: "Best Hover Animations in Tailwind"
excerpt: "The best and most useful hover animations in Tailwind"
coverImage: "/assets/blog/hello-world/gradient2.png"
tags: ["Undefined"]
date: "2024-05-12T05:35:07.322Z"
author:
  name: Tim Neutkens
  picture: "/assets/blog/authors/tim.jpeg"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---
You've probably seen lots of cool hover effects while surfing through the internet, in this article I'll be showing you how to replicate some of them with the help of Tailwindcss and HTML.

## Background color

Animating the background color on hover is relatively straightforward all that is needed is a statement in the class of the given element that says the following `hover:bg-black` . Black is obviously just an example color, you can use any color you want for this.

## Underline

Adding an underline animation to something in Tailwindcss is also relatively easy as you just need to type in `hover:underline` into your tailwind class and you're done. Obviously you can add other parameters to your `transition` such as how long it takes and what type of transition it is.

## Translate

Adding an animation that displaces the given element is a bit harder than the previous examples of animating on hover. In the following example I show how it is done `hover:-translate-y-2` . Of course you can add different values and animate along a different axis, the current animation pushes the element up when it is hovered.

## Conclusion

All these are great methods to get started with hover animations in Tailwindcss of course these are only a few of the very many other animations you may be in need of later, but for me they have been the most handy and I hope they will be for you as well.