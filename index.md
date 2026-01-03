---
layout: default
title: Jeevan Bhoot — ML engineer & researcher
---

<section class="hero" id="profile">
  <div class="hero__text">
    <div class="eyebrow">ML with clarity</div>
    <h1>Designing reliable, interpretable machine learning systems with calm confidence.</h1>
    <p class="lede">I build models, evaluations, and tooling that carry research ideas into production-grade products without losing rigor or soul.</p>
    <div class="hero__actions">
      <a class="button primary" href="mailto:hello@yourdomain.com">Start a conversation</a>
      <a class="button ghost" href="#writing">Read the notes</a>
    </div>
    <div class="hero__meta">
      <span class="badge">Model reliability</span>
      <span class="badge">Interpretability</span>
      <span class="badge">Product-led research</span>
      <span class="badge">Evaluations</span>
    </div>
  </div>
  <div class="hero__visual" aria-hidden="true">
    <div class="hero__caption">Contours, not noise.</div>
    <div class="hero__guide mono">Placeholder visual → brief the artist</div>
    <div class="hero__note">Imagine a wide landscape at dawn with a single retro monitor glowing in the foreground — a calm symbol for balanced ML systems. Swap this block with commissioned art.</div>
  </div>
</section>

<section class="section" id="work">
  <div class="section__header">
    <div>
      <div class="eyebrow">Focus areas</div>
      <h2>Systems I gravitate toward</h2>
      <p>My work spans research prototypes and shipping-grade infrastructure, always with an editorial eye on clarity and long-term maintainability.</p>
    </div>
    <div class="surface">
      <div class="eyebrow">Quick links</div>
      <p><a href="https://github.com/jeevanbhoot">GitHub</a> · <a href="https://scholar.google.com">Scholar</a></p>
      <p class="mono">Based on GitHub Pages · static, dependable, portable.</p>
    </div>
  </div>
  <div class="pill-grid">
    <div class="pill-card">
      <h3>Evals & observability</h3>
      <p>Designing evaluation harnesses, drift checks, and dashboards that keep models legible after deployment.</p>
    </div>
    <div class="pill-card">
      <h3>Human-in-the-loop systems</h3>
      <p>Building ML that keeps experts involved — from labeling loops to assisted decision tooling.</p>
    </div>
    <div class="pill-card">
      <h3>Research-to-product pipelines</h3>
      <p>Turning papers and prototypes into maintainable services with crisp interfaces and tests.</p>
    </div>
    <div class="pill-card">
      <h3>Responsible defaults</h3>
      <p>Bias checks, robust baselines, and instrumentation that make safe behavior the default path.</p>
    </div>
  </div>
</section>

<section class="section" id="selected-work">
  <div class="section__header">
    <div>
      <div class="eyebrow">Selected projects</div>
      <h2>Work, research, and experiments</h2>
      <p>A rotating set of pieces that pair strong visuals with analytical rigor.</p>
    </div>
    <div class="surface">
      <p class="mono">Prefer calm, story-driven case studies over feature lists.</p>
    </div>
  </div>
  <div class="grid">
    <article class="card">
      <small>Research</small>
      <h3>Interpretable embeddings for domain experts</h3>
      <p>Explored factorized embeddings with sparse explanations to make feature interactions easier to trust.</p>
      <div class="tags">
        <span class="tag">NLP</span>
        <span class="tag">Interpretability</span>
        <span class="tag">Python</span>
      </div>
    </article>
    <article class="card">
      <small>Product</small>
      <h3>Evaluation harness for production models</h3>
      <p>Built a metrics stack and golden-set runner to keep regressions visible before deploy.</p>
      <div class="tags">
        <span class="tag">Evals</span>
        <span class="tag">Monitoring</span>
        <span class="tag">MLOps</span>
      </div>
    </article>
    <article class="card">
      <small>Exploration</small>
      <h3>Generative UI explorations</h3>
      <p>Paired text-to-image prompts with layout constraints to sketch interfaces from narratives.</p>
      <div class="tags">
        <span class="tag">Generative</span>
        <span class="tag">Figma</span>
        <span class="tag">Prototyping</span>
      </div>
    </article>
    <article class="card">
      <small>Infra</small>
      <h3>Data quality notebook kit</h3>
      <p>Reusable notebooks to audit datasets, visualize shifts, and log decisions before training.</p>
      <div class="tags">
        <span class="tag">Data</span>
        <span class="tag">Notebooks</span>
        <span class="tag">Quality</span>
      </div>
    </article>
  </div>
</section>

<section class="section" id="writing">
  <div class="section__header">
    <div>
      <div class="eyebrow">Writing</div>
      <h2>Notes and essays</h2>
      <p>Long-form thinking on ML engineering, design process, and research craft. Built for Markdown and Jekyll — no build system required.</p>
    </div>
    <div class="surface">
      <p class="mono">Add new posts in <code>_posts/</code>. Markdown, no JS.</p>
    </div>
  </div>
  <ul class="post-list">
    {% for post in site.posts limit:3 %}
    <li class="post-card">
      <a href="{{ post.url | relative_url }}">
        <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
      </a>
    </li>
    {% else %}
    <li class="post-card">
      <div class="post-date">Soon</div>
      <h3>Writing arrives shortly</h3>
      <p>The blog is wired for GitHub Pages. Add a Markdown file in <code>_posts/</code> to publish.</p>
    </li>
    {% endfor %}
  </ul>
  <div class="writing-note">
    Prefer reading on paper? Export any post to PDF from your browser — the layout is print-safe.
  </div>
</section>

<section class="section" id="notes">
  <div class="section__header">
    <div>
      <div class="eyebrow">Operating principles</div>
      <h2>How I approach ML and product</h2>
      <p>These keep projects grounded and legible.</p>
    </div>
  </div>
  <ul class="principles">
    <li><strong>Context before code.</strong> Hold the story of the user or analyst first; the model follows.</li>
    <li><strong>Visibility beats velocity.</strong> Instrument early, keep dashboards alive, prevent silent regressions.</li>
    <li><strong>Stable baselines matter.</strong> Guardrails and non-ML fallbacks keep systems trustworthy.</li>
    <li><strong>Show the why.</strong> Pair metrics with interpretable slices and examples.</li>
    <li><strong>Ship small, often.</strong> Incremental releases make research learn faster.</li>
    <li><strong>Respect the reader.</strong> Write design docs, not just diffs.</li>
  </ul>
</section>

<section class="section">
  <div class="section__header">
    <div>
      <div class="eyebrow">Signals</div>
      <h2>What I’m tracking</h2>
      <p>Open threads, references, and materials to explore next.</p>
    </div>
  </div>
  <div class="notes">
    <div class="note">
      <strong>Reliability of large models.</strong>
      <p>Guardrails that combine eval sets, synthetic perturbations, and selective activation for safer outputs.</p>
    </div>
    <div class="note">
      <strong>Interpretability UX.</strong>
      <p>Interfaces that explain model behavior with calm copy and meaningful defaults, not fear-driven warnings.</p>
    </div>
    <div class="note">
      <strong>Tooling ergonomics.</strong>
      <p>CLIs and notebooks that let engineers debug models like they debug services — with traces, spans, and snapshots.</p>
    </div>
  </div>
  <div class="reading-list">
    <div class="reading-chip">Probabilistic programming + LLMs</div>
    <div class="reading-chip">Evaluation marketplaces</div>
    <div class="reading-chip">Dataset cartography</div>
    <div class="reading-chip">Human-computer collaboration patterns</div>
  </div>
</section>
