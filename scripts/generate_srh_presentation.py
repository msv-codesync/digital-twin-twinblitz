#!/usr/bin/env python3
"""
SRH-format exam presentation — matches DigitalTwin_Lectures_Exercises.pdf style.
Visual-first: minimal text, full-bleed charts, SRH logo, orange section dividers.
"""

from __future__ import annotations

from pathlib import Path

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.util import Inches, Pt

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "public" / "project" / "ppt-assets"
FIG = ROOT / "public" / "project" / "outputs"
OUT = ROOT / "public" / "project"
PPT_PATH = OUT / "Exam_Presentation_Antenna_RUL_SRH.pptx"

# SRH brand (from Exercises PDF)
ORANGE = RGBColor(223, 71, 7)
NAVY = RGBColor(11, 29, 53)
WHITE = RGBColor(255, 255, 255)
TEXT = RGBColor(45, 45, 45)
MUTED = RGBColor(102, 102, 102)
CREAM = RGBColor(253, 217, 201)

FONT_HEAD = "Calibri"
FONT_BODY = "Calibri"
FOOTER = "SRH University  ·  Prof. Dr. Adele Nasti"
STUDENT = "Srivardhan Varma Mudunuri  ·  Matric. 100001259"
COURSE = "Modeling, Simulation and Digital Twin"

LOGO_WHITE = ASSETS / "srh_logo_white.png"
SLIDE_W = Inches(13.333)
SLIDE_H = Inches(7.5)


def _prs() -> Presentation:
    prs = Presentation()
    prs.slide_width = SLIDE_W
    prs.slide_height = SLIDE_H
    return prs


def _slide(prs: Presentation):
    return prs.slides.add_slide(prs.slide_layouts[6])


def _footer(slide, num: int, dark: bool = False) -> None:
    color = WHITE if dark else MUTED
    left = slide.shapes.add_textbox(Inches(0.45), Inches(7.05), Inches(8), Inches(0.35))
    left.text_frame.paragraphs[0].text = FOOTER
    left.text_frame.paragraphs[0].font.size = Pt(9)
    left.text_frame.paragraphs[0].font.name = FONT_BODY
    left.text_frame.paragraphs[0].font.color.rgb = color

    right = slide.shapes.add_textbox(Inches(12.2), Inches(7.05), Inches(0.8), Inches(0.35))
    p = right.text_frame.paragraphs[0]
    p.text = str(num)
    p.font.size = Pt(9)
    p.font.name = FONT_BODY
    p.font.color.rgb = color
    p.alignment = PP_ALIGN.RIGHT


def _logo_white_tl(slide, height=Inches(0.55)) -> None:
    if LOGO_WHITE.exists():
        slide.shapes.add_picture(str(LOGO_WHITE), Inches(0.45), Inches(0.35), height=height)


def _logo_white_tr(slide, height=Inches(0.5)) -> None:
    if LOGO_WHITE.exists():
        slide.shapes.add_picture(str(LOGO_WHITE), Inches(12.0), Inches(0.35), height=height)


def _logo_orange_tr(slide) -> None:
    orange_logo = ASSETS / "srh_logo_orange.png"
    if orange_logo.exists():
        slide.shapes.add_picture(str(orange_logo), Inches(11.7), Inches(0.28), height=Inches(0.42))


def _full_bg(slide, img: Path) -> None:
    if img.exists():
        slide.shapes.add_picture(str(img), 0, 0, width=SLIDE_W, height=SLIDE_H)


def _title_slide(prs: Presentation) -> None:
    slide = _slide(prs)
    bg = ASSETS / "bg_title_antenna.png"
    if bg.exists():
        _full_bg(slide, bg)
    else:
        rect = slide.shapes.add_shape(1, 0, 0, SLIDE_W, SLIDE_H)
        rect.fill.solid()
        rect.fill.fore_color.rgb = NAVY
        rect.line.fill.background()

    _logo_white_tl(slide, Inches(0.65))

    tb = slide.shapes.add_textbox(Inches(0.55), Inches(2.4), Inches(7.5), Inches(2.5))
    tf = tb.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = "DoE-Based Remaining Useful Life Prediction"
    p.font.name = FONT_HEAD
    p.font.size = Pt(32)
    p.font.bold = True
    p.font.color.rgb = WHITE

    p2 = tf.add_paragraph()
    p2.text = "5G/6G Telecom Tower Antenna Digital Twin"
    p2.font.name = FONT_HEAD
    p2.font.size = Pt(22)
    p2.font.color.rgb = WHITE
    p2.space_before = Pt(8)


def _section_slide(prs: Presentation, num: str, title: str) -> None:
    slide = _slide(prs)
    img = ASSETS / f"section_{num}_{title.lower().replace(' ', '_')}.png"
    if title == "V and V":
        img = ASSETS / "section_08_v_and_v.png"
    _full_bg(slide, img)
    _logo_white_tr(slide, Inches(0.55))


def _white_content(
    prs: Presentation,
    title: str,
    subtitle: str,
    img: Path,
    slide_num: int,
    caption: str = "",
) -> None:
    slide = _slide(prs)
    # white bg
    bg = slide.shapes.add_shape(1, 0, 0, SLIDE_W, SLIDE_H)
    bg.fill.solid()
    bg.fill.fore_color.rgb = WHITE
    bg.line.fill.background()

    _logo_orange_tr(slide)

    h = slide.shapes.add_textbox(Inches(0.55), Inches(0.35), Inches(10), Inches(0.55))
    hp = h.text_frame.paragraphs[0]
    hp.text = title
    hp.font.name = FONT_HEAD
    hp.font.size = Pt(26)
    hp.font.bold = True
    hp.font.color.rgb = TEXT

    if subtitle:
        st = slide.shapes.add_textbox(Inches(0.55), Inches(0.95), Inches(10), Inches(0.4))
        sp = st.text_frame.paragraphs[0]
        sp.text = subtitle
        sp.font.name = FONT_BODY
        sp.font.size = Pt(14)
        sp.font.color.rgb = MUTED

    top = Inches(1.35) if subtitle else Inches(1.1)
    if img.exists():
        # image right or full width depending on aspect
        if img.stat().st_size > 200000:  # large chart = full width
            slide.shapes.add_picture(str(img), Inches(0.5), top, width=Inches(12.3))
        else:
            slide.shapes.add_picture(str(img), Inches(0.55), top, width=Inches(12.2))

    if caption:
        cap = slide.shapes.add_textbox(Inches(0.55), Inches(6.75), Inches(12), Inches(0.3))
        cp = cap.text_frame.paragraphs[0]
        cp.text = caption
        cp.font.size = Pt(10)
        cp.font.italic = True
        cp.font.color.rgb = MUTED
        cp.font.name = FONT_BODY

    _footer(slide, slide_num)


def _visual_only(prs: Presentation, img: Path, slide_num: int, caption: str = "") -> None:
    """Chart-forward slide — title in caption only."""
    slide = _slide(prs)
    bg = slide.shapes.add_shape(1, 0, 0, SLIDE_W, SLIDE_H)
    bg.fill.solid()
    bg.fill.fore_color.rgb = WHITE
    bg.line.fill.background()
    _logo_orange_tr(slide)
    if img.exists():
        slide.shapes.add_picture(str(img), Inches(0.4), Inches(0.85), width=Inches(12.5))
    if caption:
        cap = slide.shapes.add_textbox(Inches(0.55), Inches(0.35), Inches(11), Inches(0.45))
        cap.text_frame.paragraphs[0].text = caption
        cap.text_frame.paragraphs[0].font.size = Pt(18)
        cap.text_frame.paragraphs[0].font.bold = True
        cap.text_frame.paragraphs[0].font.color.rgb = TEXT
        cap.text_frame.paragraphs[0].font.name = FONT_HEAD
    _footer(slide, slide_num)


def _references(prs: Presentation, num: int) -> None:
    slide = _slide(prs)
    bg = slide.shapes.add_shape(1, 0, 0, SLIDE_W, SLIDE_H)
    bg.fill.solid()
    bg.fill.fore_color.rgb = WHITE
    bg.line.fill.background()
    _logo_orange_tr(slide)

    h = slide.shapes.add_textbox(Inches(0.55), Inches(0.4), Inches(5), Inches(0.5))
    h.text_frame.paragraphs[0].text = "References"
    h.text_frame.paragraphs[0].font.size = Pt(26)
    h.text_frame.paragraphs[0].font.bold = True
    h.text_frame.paragraphs[0].font.color.rgb = TEXT

    refs = [
        "AIAA (2020). Digital Twin: Definition & Value",
        "Grieves & Vickers (2017). Digital Twin: Mitigating Unpredictable Behavior",
        "Tao et al. (2019). Digital Twin in Industry. IEEE TII",
        "Montgomery (2017). Design and Analysis of Experiments",
        "Jardine et al. (2006). Machinery diagnostics review",
        "Liu et al. (2021). UAV photogrammetry for telecom towers",
        "Kapteyn et al. (2021). Predictive digital twins. Nature Comp Sci",
        "ISO/IEC 30173:2023 — Digital twin terminology",
        "Siemens (2024). HEEDS Multi-Disciplinary Design Exploration",
    ]
    body = slide.shapes.add_textbox(Inches(0.55), Inches(1.1), Inches(12), Inches(5.5))
    tf = body.text_frame
    for i, r in enumerate(refs):
        para = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        para.text = f"{i + 1}. {r}"
        para.font.size = Pt(13)
        para.font.color.rgb = TEXT
        para.font.name = FONT_BODY
        para.space_after = Pt(6)
    _footer(slide, num)


def _thankyou(prs: Presentation) -> None:
    slide = _slide(prs)
    bg = ASSETS / "bg_title_antenna.png"
    if bg.exists():
        _full_bg(slide, bg)
    else:
        r = slide.shapes.add_shape(1, 0, 0, SLIDE_W, SLIDE_H)
        r.fill.solid()
        r.fill.fore_color.rgb = NAVY
        r.line.fill.background()
    _logo_white_tl(slide)
    tb = slide.shapes.add_textbox(Inches(0.55), Inches(3.0), Inches(10), Inches(1.5))
    p = tb.text_frame.paragraphs[0]
    p.text = "Thank you"
    p.font.size = Pt(44)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.font.name = FONT_HEAD
    p2 = tb.text_frame.add_paragraph()
    p2.text = "Questions welcome"
    p2.font.size = Pt(20)
    p2.font.color.rgb = WHITE
    p2.font.name = FONT_BODY


def build() -> Path:
    # Ensure assets exist
    import subprocess
    import sys

    assets_script = ROOT / "scripts" / "generate_srh_assets.py"
    run_script = ROOT / "project" / "run_project.py"
    if assets_script.exists():
        subprocess.run([sys.executable, str(assets_script)], check=True)
    if run_script.exists() and not (FIG / "01_rul_curves.png").exists():
        subprocess.run([sys.executable, str(run_script)], check=True)

    prs = _prs()
    n = 1

    _title_slide(prs)
    n += 1

    _section_slide(prs, "01", "Problem")
    n += 1
    _white_content(prs, "The Problem", "Predictive maintenance for telecom infrastructure", ASSETS / "viz_problem.png", n)
    n += 1

    _section_slide(prs, "02", "Digital Twin")
    n += 1
    _white_content(
        prs,
        "Digital Twin Definition",
        '"Digital representation throughout its lifecycle — does NOT replace testing"',
        ASSETS / "viz_lifecycle.png",
        n,
    )
    n += 1

    _section_slide(prs, "03", "Approach")
    n += 1
    _white_content(prs, "End-to-End Approach", "Drone geometry + physics-based RUL + DoE", ASSETS / "viz_workflow.png", n)
    n += 1

    _section_slide(prs, "04", "RUL Model")
    n += 1
    _white_content(prs, "Physics-Based RUL Model", "Wind fatigue × thermal aging", ASSETS / "viz_formula.png", n)
    n += 1

    _section_slide(prs, "05", "DoE Results")
    n += 1
    _visual_only(prs, FIG / "05_doe_heatmap.png", n, "Full factorial DoE — 4 wind × 10 temp = 40 runs")
    n += 1
    _visual_only(prs, FIG / "01_rul_curves.png", n, "RUL vs temperature at each wind level")
    n += 1
    _visual_only(prs, FIG / "03_pareto_sensitivity.png", n, "Sensitivity — wind dominates ~3.5× temperature")
    n += 1
    _visual_only(prs, FIG / "02_response_surface_3d.png", n, "DoE response surface across design space")
    n += 1
    _visual_only(prs, FIG / "04_operating_envelope.png", n, "Operating envelope — safe: wind ≤12 m/s, temp ≤30°C")
    n += 1

    _section_slide(prs, "06", "HEEDS")
    n += 1
    _white_content(prs, "HEEDS Workflow Mapping", "Example 4 Coil Spring DoE ≡ Antenna factorial", ASSETS / "viz_heeds_map.png", n)
    n += 1

    _section_slide(prs, "07", "Key Results")
    n += 1
    _white_content(prs, "Key Results & Business Value", "Predictive maintenance · TRL 4–5", ASSETS / "viz_key_results.png", n)
    n += 1

    _section_slide(prs, "08", "V and V")
    n += 1
    _white_content(prs, "Verification & Validation", "Sanity checks + future field correlation", ASSETS / "viz_vv.png", n)
    n += 1

    _references(prs, n)
    n += 1
    _thankyou(prs)

    OUT.mkdir(parents=True, exist_ok=True)
    prs.save(str(PPT_PATH))
    return PPT_PATH


if __name__ == "__main__":
    path = build()
    print(f"Saved: {path}")
