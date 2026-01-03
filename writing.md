---
layout: default
title: Writing
---

<section class="section">
  <div class="section__header">
    <div>
      <div class="eyebrow">Writing</div>
      <h2>Long-form notes</h2>
      <p>Markdown-first, printed ready, no build tools. Add a new post in <code>_posts/</code> to publish.</p>
    </div>
  </div>
  <ul class="post-list">
    {% for post in site.posts %}
    <li class="post-card">
      <a href="{{ post.url | relative_url }}">
        <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
