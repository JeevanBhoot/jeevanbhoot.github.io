---
layout: default
title: Jeevan Bhoot — ML engineer & researcher
---

<section class="hero-banner" id="about">
  <div class="hero-content">
  </div>
</section>

<section class="section-lite" id="about-notes">
  <div class="section-heading">
    <div class="eyebrow">About</div>
    <h2>Measured ML, built to last</h2>
  </div>
  <div class="about-wrap">
    <div>
      <img src="{{ '/assets/avatar.jpeg' | relative_url }}" alt="Portrait of Jeevan Bhoot" class="about-avatar">
    </div>
  </div>
</section>

<section class="section-lite" id="projects">
  <div class="section-heading">
    <div class="eyebrow">Projects</div>
    <h2>Selected work</h2>
  </div>
  <div class="project-grid">
    <article class="project-card">
      <h3>Interpretability toolkit</h3>
      <p>Factorized embeddings and sparse explanations that make feature interactions readable to domain experts.</p>
      <div class="tags">
        <span class="tag">NLP</span>
        <span class="tag">Interpretability</span>
        <span class="tag">Python</span>
      </div>
    </article>
    <article class="project-card">
      <h3>Evaluation harness</h3>
      <p>Golden-set runner and dashboards to catch regressions before deploy, paired with slice-based reporting.</p>
      <div class="tags">
        <span class="tag">Evals</span>
        <span class="tag">Monitoring</span>
        <span class="tag">MLOps</span>
      </div>
    </article>
    <article class="project-card">
      <h3>Human-in-the-loop workflows</h3>
      <p>Decision tooling that keeps experts in control, with reversible actions and transparent model suggestions.</p>
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
    <div class="eyebrow">Blog</div>
    <h2>Recent writing</h2>
  </div>
  <ul class="post-list">
    {% for post in site.posts limit:3 %}
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
  <div class="hero-subline">Browse the full archive in <a href="{{ '/writing' | relative_url }}">writing</a>.</div>
</section>
