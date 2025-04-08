---
layout: page
title: Scotty 3D
description: A 3D graphics engine implemented modeling, animation, and rendering
img: assets/img/projects/graphics/cornell_box.png
importance: 1
category: 1D
---

Scotty3D is a full-featured educational graphics pipeline project from CMU. It includes an interactive modeling interface, skeletal animation, and a physically-based offline renderer. I worked through it in four key phases:

---

## Phase 1: Rasterizer — Implementing a Software Rendering Pipeline

In this phase, I developed a simplified rasterization pipeline from scratch to convert 3D triangles into 2D pixel images, all without using the GPU. This software renderer serves as the backbone of the preview window in Scotty3D and taught me the fundamentals of the graphics pipeline.

### Key Components Implemented:

- **Vertex Shading**  
  Transformed vertices from model space to screen space and passed interpolated attributes like color, normals, and UVs to the rasterizer.

- **Triangle Assembly and Clipping**  
  Assembled primitives from vertices and clipped triangles against the screen bounds to avoid out-of-frame artifacts.

- **Rasterization**  
  Used edge equations to determine which pixels fall inside a triangle, then computed barycentric coordinates to interpolate fragment attributes.

- **Fragment Shading**  
  Interpolated vertex attributes across the surface of each triangle and shaded each pixel using a programmable shading model.

- **Depth Testing and Blending**  
  Compared fragment depths using a z-buffer to handle occlusion, and implemented alpha blending to properly render transparency.

- **Texture Sampling & Mipmapping**  
  Built and sampled from mipmap chains to reduce aliasing and improve texture clarity at different distances and scales.

### Visual Results:

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/graphics/A1T3.png" title="Rasterized triangle" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

This phase gave me a strong foundation in how modern graphics pipelines are structured — from triangle setup to pixel output — and laid the groundwork for more advanced features like ray tracing and global illumination.

---

## Phase 2: MeshEdit — Building the Half-Edge Mesh System

In this phase, I implemented an interactive mesh editor with support for:

- Face splitting
- Edge flipping
- Edge collapsing
- Loop subdivision and simplification

This involved building the **half-edge data structure**, and writing code that correctly updates mesh topology during edits. The tricky part was maintaining consistency after each operation.

---

## Phase 3: Path Tracer — Physically-Based Offline Rendering

I implemented a Monte Carlo path tracer with:

- BSDF sampling
- Russian roulette termination
- Importance sampling (lights & hemispheres)
- Acceleration structures (BVH)

This was one of the most challenging yet rewarding parts. It taught me how light transport actually works and gave me respect for ray tracing performance.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/graphics/cornell_box.png" title="Path traced dragon model" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/graphics/render_cow.png" title="BVH debug view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: Path-traced model with global illumination. Right: Acceleration structure debug.
</div>

---

## Phase 4: Animation — TBA

---

You can find the full code and writeup here:  
👉 [Scotty3D on GitHub](https://github.com/d-dhx/MyScotty3D)
