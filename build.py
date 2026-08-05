import os
import pathlib
import shutil
from jinja2 import Environment, FileSystemLoader
import frontmatter
import markdown

ROOT = pathlib.Path(__file__).parent
DIST = ROOT / "dist"
CONTENT = ROOT / "content"
TEMPLATES = ROOT / "templates"
STATIC = ROOT / "static"

env = Environment(loader=FileSystemLoader(str(TEMPLATES)))
base = env.get_template("base.html")


def render_page(md_path):
    post = frontmatter.load(md_path.open(encoding="utf-8", errors="replace"))
    html = markdown.markdown(post.content, extensions=["extra", "sane_lists"])
    title = post.get("title") or md_path.stem.title()
    out_dir = DIST if md_path.stem == "index" else DIST / md_path.stem
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(
        base.render(title=title, content=html),
        encoding="utf-8",
    )


SRC = "content/resume.md"
OUT = "dist/resume/index.html"
CSS = "/static/styles.css?v=8"

os.makedirs(os.path.dirname(OUT), exist_ok=True)

with open(SRC, "r", encoding="utf-8", errors="replace") as f:
    post = frontmatter.load(f)

# convert markdown content (post.content) to HTML
html_body = markdown.markdown(
    post.content,
    extensions=["extra", "sane_lists"],
)

html = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>{post.get('title','Resume')}</title>
  <link rel="stylesheet" href="{CSS}"/>
</head>
<body>
  <header class="site-header">
    <nav>
      <a href="/index.html">Home</a>
      <a href="/resume/">Resume</a>
    </nav>
  </header>
  <main>
    {html_body}
  </main>
  <footer><small>© 2025 Me</small></footer>
</body>
</html>
"""

# Delete and recreate dist folder BEFORE writing files
if DIST.exists():
    shutil.rmtree(DIST)
DIST.mkdir(parents=True)

# Copy static assets
shutil.copytree(STATIC, DIST / "static")

# NOW write the resume HTML
os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)
print("WROTE", OUT)

for md in CONTENT.glob("*.md"):
    render_page(md)

print(f"Site built at {DIST}")
