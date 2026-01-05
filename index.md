---
layout: default
title: Jeevan Bhoot — ML engineer & researcher
---

<section class="section-lite" id="about">
  <div class="about-wrap">
    <div class="about-copy">
      <div class="about-name">Jeevan Singh Bhoot</div>
      <p class="about-bio">hello world</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot current"></div>
          <div class="timeline-label">Current</div>
          <div class="timeline-meta">ML Engineer</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-label">Previous</div>
          <div class="timeline-meta">Research / ML</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-label">Early</div>
          <div class="timeline-meta">Foundations & study</div>
        </div>
      </div>
    </div>
    <div>
      <img src="{{ '/assets/avatar.jpeg' | relative_url }}" class="about-avatar" alt="Portrait of Jeevan Singh Bhoot">
    </div>
  </div>
</section>

<section class="section-lite" id="projects">
  <div class="section-heading">
    <h2>Projects</h2>
  </div>
  <div class="project-grid">
    <article class="project-card">
      <h3>Heading</h3>
      <p>Description</p>
      <div class="tags">
        <span class="tag">NLP</span>
        <span class="tag">Interpretability</span>
        <span class="tag">Python</span>
      </div>
    </article>
    <article class="project-card">
      <h3>Heading</h3>
      <p>Description</p>
      <div class="tags">
        <span class="tag">Evals</span>
        <span class="tag">Monitoring</span>
        <span class="tag">MLOps</span>
      </div>
    </article>
    <article class="project-card">
      <h3>Heading</h3>
      <p>Description</p>
      <div class="tags">
        <span class="tag">Product</span>
        <span class="tag">HITL</span>
        <span class="tag">UX</span>
      </div>
    </article>
  </div>
</section>

<section class="section-lite" id="blog">
  <div class="section-heading">
    <h2>Blog</h2>
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
    {% else %}
    <li class="post-row">
      <div class="post-date">Soon</div>
      <h3>Writing arrives shortly</h3>
      <div class="read-link">Stay tuned</div>
    </li>
    {% endfor %}
  </ul>
</section>
