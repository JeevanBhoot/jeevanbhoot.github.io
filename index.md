---
layout: default
title: Jeevan Bhoot - ML Engineer & Researcher
---

<section class="section-lite" id="about">
  <div class="about-wrap">
    <div class="about-copy">
      <div class="about-name">Hi, I'm Jeevan!</div>
      <p class="about-bio">hello world</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot current"></div>
          <div class="timeline-label">ML Engineer</div>
          <div class="timeline-meta">Myrtle.ai</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-label">ML Intern</div>
          <div class="timeline-meta">Myrtle.ai</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-label">ML Intern</div>
          <div class="timeline-meta">Lucida Medical</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-label">MEng Engineering</div>
          <div class="timeline-meta">
            University of<br>Cambridge
          </div>
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
    <a class="project-card" href="https://github.com/JeevanBhoot/nanoRL" target="_blank" rel="noopener">
      <h3>NanoRL</h3>
      <p>Minimal, single-file implementations of policy-gradient reinforcement learning algorithms for finetuning LLMs.</p>
      <div class="tags">
        <span class="tag">LLMs</span>
        <span class="tag">RL</span>
      </div>
    </a>
    <a class="project-card" href="https://github.com/JeevanBhoot/LLAMBO-FT" target="_blank" rel="noopener">
      <h3>LLMs for Bayesian Optimisation</h3>
      <p>Fine-tuned Llama3-8B for Bayesian Optimisation with QLoRA, improving surrogate modelling and candidate sampling accuracy for hyperparameter search.</p>
      <div class="tags">
        <span class="tag">LLMs</span>
      </div>
    </a>
    <a class="project-card" href="https://github.com/JeevanBhoot/logsimgit" target="_blank" rel="noopener">
      <h3>Logic Simulator</h3>
      <p>Simulator for logic circuits using a bespoke hardware description language.</p>
      <div class="tags">
        <span class="tag">Python</span>
      </div>
    </a>
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
