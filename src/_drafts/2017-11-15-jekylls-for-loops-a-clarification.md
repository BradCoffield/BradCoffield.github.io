---
title: "Jekyll's For Loops with Collections: A Clarification"
layout: post
categories: jekyll 
tags: 
 - whoops 
---

Jekyll is a static site generator that's amazing (and very popular). It has the awesome benefit of being integrated into GitHub Pages so you can host Jekyll sites for free. This site, and some other's I've done, are built with Jekyll. It's a lot of fun to write things in [Markdown](https://daringfireball.net/projects/markdown/) and to be able to build my sites from scratch, with the benefits of heavier CMSes, like shared content and programmatically displaying or hiding things. It makes life simpler!
<!--excerpt-->
When I was learning Jekyll I ran into a bit of confusion and could find no posts on it anywhere. Eventually a kind soul on [Jekyll Talk](https://talk.jekyllrb.com/) helped me out but I thought I'd note it here.

A simple for loop in Jekyll looks like this:

{% highlight liquid linenos %}
    {%raw%}{% for cat in site.cats %}
    //Some content in here
    {% endfor %}{% endraw %} {% endhighlight %}

I COULDN'T FIND ANYWHERE WHAT THE RULES WERE THAT DICTATED WHAT TO NAME `CAT`. I knew `site.cats` referred in this case to a collection you've defined in your site structure. Every example I could find on using for loops with Jekyll collections explained the `site.cats` but didn't mention `cat`. Also, every one of those examples followed that singular/plural structure so I just assumed there was some magic Jekyll-sauce in the background that made it that way.

Turns out, `cat` CAN BE ANYTHING. Anything at all. It just has to be used within the meat of the for loop. It's essentially declaring a new variable to be used in the loop.

Here's a fuller example of looping through a collection's pages.

{% highlight liquid linenos %}{%raw%}
<ul>
    {% for page in site.collection_name %}
      <li>
        <a href="{{site.baseurl}}{{ page.url}}">{{page.title}}</a>
       </li>
     {% endfor %}
</ul>{%endraw%}{% endhighlight %}

Just to reiterate: what is `page` above could have been replaced with `asoisafds` if you wanted, you would have just needed to replace it three places.

If you're interested in learning more about collections in Jekyll [this page](https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/) from CloudCannon helped me out.