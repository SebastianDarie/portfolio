---
layout: ../../layouts/project.astro
title: Airbnb Clone
client: Self
published_at: 2021-08-05 00:00:00
img: /assets/airbnb-clone.png
description: |
  Next.js PWA with real time geosearch through Google Maps and payments with Stripe.
tags:
  - next.js
  - google maps
  - postgis
  - sass
live_url: https://mernlabs.team/
---

This project was built with the hypebeast stack which benefits both the client and the developer. As the name implies
the app integrates Airbnb's core functionality like browsing listings based on location or map movement, reservations with
payments and refunds, category-based ratings with reviews, messaging between hosts and guests, and other smaller features.
This time for styling I choose <span class="graphql">Sass</span> instead of UI libraries. This was also my first time using
<span class="postgres">PostGIS</span> and the Google Maps API which worked flawlessly compared to other map providers like
Bing, Mapbox, Yandex, and Leaflet that don't have nearly as much support and packages available(especially for React).
I've also learned about the Stripe API which is easy to use and has good <span class="typescript">Typescript</span> support.
