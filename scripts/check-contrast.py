"""가을 팔레트 WCAG 대비 검증. 실행: python3 contrast.py"""

def lum(hex_color):
    h = hex_color.lstrip('#')
    ch = []
    for i in (0, 2, 4):
        c = int(h[i:i + 2], 16) / 255
        ch.append(c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4)
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2]


def ratio(fg, bg):
    a, b = lum(fg), lum(bg)
    hi, lo = max(a, b), min(a, b)
    return (hi + 0.05) / (lo + 0.05)


CREAM = '#fdf6e9'
MAPLE = '#e8752a'

PAIRS = [
    ('본문 fg-1 / 크림', '#3b2a1e', CREAM, 4.5),
    ('보조 fg-2 / 크림', '#56402f', CREAM, 4.5),
    ('흐림 fg-3 / 크림', '#7d6650', CREAM, 4.5),
    ('단풍 버튼 글자', '#2a1a0e', MAPLE, 4.5),
    ('단풍 텍스트 / 크림', '#a84a12', CREAM, 4.5),
    ('track MAIN', '#a84a12', CREAM, 4.5),
    ('track INFRA', '#1e6b63', CREAM, 4.5),
    ('track WEB', '#7b3f8f', CREAM, 4.5),
    ('track ML', '#3f7a3a', CREAM, 4.5),
    ('track DESIGN', '#96690f', CREAM, 4.5),
    ('track ADS', '#b03a22', CREAM, 4.5),
    ('track ALL', '#6b5240', CREAM, 4.5),
]

if __name__ == '__main__':
    failed = []
    for name, fg, bg, need in PAIRS:
        r = ratio(fg, bg)
        ok = r >= need
        if not ok:
            failed.append(name)
        print(f'{"OK " if ok else "FAIL"} {r:5.2f}:1  (>={need})  {name}  {fg} on {bg}')
    assert not failed, f'대비 미달: {failed}'
    print('\n전부 WCAG AA 통과')
