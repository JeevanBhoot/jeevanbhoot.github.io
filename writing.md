---
layout: default
title: Writing
---

<section class="section-lite writing-page">
  <div class="section-heading">
    <div class="eyebrow">Writing</div>
    <h2>Long-form notes</h2>
    <p>Add new posts in <code>_posts/</code> to publish.</p>
  </div>
  <ul class="post-list">
    {% for post in site.posts %}
    <li class="post-row">
      <a href="{{ post.url | relative_url }}">
        <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
        <h3>{{ post.title }}</h3>
      </a>
      <div class="read-link">Read →</div>
    </li>
    {% endfor %}
  </ul>
</section>
