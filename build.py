import pathlib
import re
import shutil
import time

import frontmatter
import markdown
from jinja2 import Environment, FileSystemLoader

ROOT = pathlib.Path(__file__).parent
DIST = ROOT / "dist"
CONTENT = ROOT / "content"
TEMPLATES = ROOT / "templates"
STATIC = ROOT / "static"

BUILD_VERSION = str(int(time.time()))

env = Environment(loader=FileSystemLoader(str(TEMPLATES)))
base = env.get_template("base.html")


def add_cache_bust_to_static_urls(html: str, version: str) -> str:
    """Add or refresh ?v=<version> on local /static asset URLs."""
    pattern = re.compile(
        r"(\b(?:src|href|data-src)\s*=\s*['\"])(/static/[^'\"]+)(['\"])",
        re.IGNORECASE,
    )

    def repl(match: re.Match) -> str:
        prefix, url, suffix = match.group(1), match.group(2), match.group(3)
        base_url = url.split("?", 1)[0]
        return f"{prefix}{base_url}?v={version}{suffix}"

    return pattern.sub(repl, html)


def render_page(md_path: pathlib.Path) -> None:
    post = frontmatter.load(md_path.open(encoding="utf-8", errors="replace"))
    html = markdown.markdown(post.content, extensions=["extra", "sane_lists"])
    html = add_cache_bust_to_static_urls(html, BUILD_VERSION)

    title = post.get("title") or md_path.stem.title()
    out_dir = DIST if md_path.stem == "index" else DIST / md_path.stem
    out_dir.mkdir(parents=True, exist_ok=True)

    (out_dir / "index.html").write_text(
        base.render(title=title, content=html, build_version=BUILD_VERSION),
        encoding="utf-8",
    )


def main() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir(parents=True)

    shutil.copytree(STATIC, DIST / "static")

    for md in CONTENT.glob("*.md"):
        render_page(md)

    print(f"Site built at {DIST}")


if __name__ == "__main__":
    main()
