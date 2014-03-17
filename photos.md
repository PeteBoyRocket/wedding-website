---
layout: page
permalink: /photos/
title: Photo Gallery
tagline: 
tags: []
modified: 3-16-2014
image:
  feature: website_header_with_text.jpg
hide_author: true
number_of_images: 51
---

<div class="photo-gallery">


{% for i in (1..page.number_of_images) %}

  {% capture image_name %}web_gallery{{ i | pad_zero }}.jpg{% endcapture %}
  {% capture image_url %}{{ site.url }}/images/{{ image_name }}{% endcapture %}

  <div class="image-wrapper">
  <a href="{{ image_url }}"><img src="{{ image_url }}" class="clearfix"></a>  
  </div>
{% endfor %}

</div>