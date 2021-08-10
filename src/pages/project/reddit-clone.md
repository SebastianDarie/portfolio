---
layout: ../../layouts/project.astro
title: Reddit Clone
client: Self
published_at: 2021-08-06 00:00:00
img: /assets/reddit-clone.png
description: |
  Next.js app with SSR that loads relational data from Postgres through a Graphql api.
tags:
  - next.js
  - apollo
  - postgres
  - chakra ui
live_url: https://reddit-clone.tech/
---

This site was built to include Reddit's core features. Features a new tech stack that I've never previously worked with
including Next.js instead of the traditional CRA, <span class="graphql">GraphQL</span> with Apollo, as well as a relational
database <span class="postgres">PostgreSQL</span>. It's also the first time I started using <span class="typescript">Typescript</span>
in my projects. For styling, it uses Chakra UI which provides a very convenient dark mode. It includes user profiles,
communities, filtering posts, creation of 3 types of posts, comments(nested), upvotes, random avatars on user creation just like Reddit.
