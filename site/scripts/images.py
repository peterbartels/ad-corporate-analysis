#!/usr/bin/env python3
"""Convert output/pages/*/full.png screenshots into resized WebP (PNG fallback
for pages taller than WebP's 16383px limit) under docs/public/screens/."""
import os, sys, glob, json
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, '..', '..', 'output', 'pages'))
DST = os.path.normpath(os.path.join(HERE, '..', 'docs', 'public', 'screens'))
TARGET_W = 800
MAX_WEBP_H = 16000

os.makedirs(DST, exist_ok=True)
manifest = {}
converted = skipped = 0
for src in sorted(glob.glob(os.path.join(SRC, '*', 'full.png'))):
    slug = os.path.basename(os.path.dirname(src))
    with Image.open(src) as im:
        w, h = im.size
        new_h = round(h * TARGET_W / w)
        ext = 'png' if new_h > MAX_WEBP_H else 'webp'
        dst = os.path.join(DST, f'{slug}.{ext}')
        manifest[slug] = ext
        if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
            skipped += 1
            continue
        im = im.convert('RGB').resize((TARGET_W, new_h), Image.LANCZOS)
        if ext == 'webp':
            im.save(dst, 'WEBP', quality=78, method=4)
        else:
            im.save(dst, 'PNG', optimize=True)
        converted += 1

with open(os.path.join(DST, 'manifest.json'), 'w') as f:
    json.dump(manifest, f, indent=1, sort_keys=True)
print(f'screens: {converted} converted, {skipped} up-to-date, {len(manifest)} total')
