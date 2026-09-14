import type { CSSProperties } from 'react';

/**
 * 부풀린 3D 오브젝트.
 *
 * 실제 3D 렌더 대신 SVG 라이팅 필터로 입체감을 만든다.
 * 알파를 블러해 높이맵으로 쓰고 → 확산광으로 형태 음영 → 반사광으로 광택.
 * 이미지가 아니라 코드라 색·크기를 자유롭게 바꿀 수 있고 용량이 들지 않는다.
 */

interface PuffyProps {
  size?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

/** 필터 정의. 페이지에 한 번만 렌더한다. */
export function PuffyDefs() {
  return (
    <svg width="0" height="0" aria-hidden style={{ position: 'absolute' }}>
      <defs>
        {/* 큰 덩어리용 — 깊게 부풀린다 */}
        <filter id="puffy" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="h" />
          <feDiffuseLighting in="h" surfaceScale="10" diffuseConstant="0.92" lightingColor="#fff" result="d">
            <fePointLight x="50" y="20" z="140" />
          </feDiffuseLighting>
          <feComposite in="d" in2="SourceAlpha" operator="in" result="dc" />
          <feComposite in="SourceGraphic" in2="dc" operator="arithmetic" k1="1.35" k2="0" k3="0" k4="0" result="shaded" />
          <feSpecularLighting in="h" surfaceScale="10" specularConstant="0.5" specularExponent="55" lightingColor="#fff" result="s">
            <fePointLight x="58" y="14" z="120" />
          </feSpecularLighting>
          <feComposite in="s" in2="SourceAlpha" operator="in" result="sc" />
          <feComposite in="shaded" in2="sc" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>

        {/* 작거나 굴곡이 많은 형태용 — 얕게 부풀려 윤곽을 지키다 */}
        <filter id="puffy-shallow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="h" />
          <feDiffuseLighting in="h" surfaceScale="6" diffuseConstant="0.95" lightingColor="#fff" result="d">
            <fePointLight x="50" y="20" z="90" />
          </feDiffuseLighting>
          <feComposite in="d" in2="SourceAlpha" operator="in" result="dc" />
          <feComposite in="SourceGraphic" in2="dc" operator="arithmetic" k1="1.3" k2="0" k3="0" k4="0" result="shaded" />
          <feSpecularLighting in="h" surfaceScale="6" specularConstant="0.45" specularExponent="50" lightingColor="#fff" result="s">
            <fePointLight x="55" y="16" z="80" />
          </feSpecularLighting>
          <feComposite in="s" in2="SourceAlpha" operator="in" result="sc" />
          <feComposite in="shaded" in2="sc" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
        </filter>
      </defs>
    </svg>
  );
}

function Shape({ size = 140, color, style, className = '', path, shallow = false }: PuffyProps & { path: React.ReactNode; shallow?: boolean }) {
  return (
    // 애니메이션은 래퍼 div가 받는다. SVG를 정적으로 두어야 라이팅 필터가
    // 매 프레임 다시 계산되지 않고 합성 단계에서 transform만 처리된다.
    <div className={className} style={{ ...style, willChange: 'transform' }}>
      <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden style={{ display: 'block' }}>
        {/* stroke도 같이 넘겨야 선으로 그린 형태(누들)가 같은 색을 받는다 */}
        <g fill={color} stroke={color} filter={`url(#${shallow ? 'puffy-shallow' : 'puffy'})`}>
          {path}
        </g>
      </svg>
    </div>
  );
}

export function PuffyTorus({ color = 'var(--maple)', ...rest }: PuffyProps) {
  return (
    <Shape
      {...rest}
      color={color}
      path={<path fillRule="evenodd" d="M100 18 A82 82 0 1 1 99.9 18 Z M100 62 A38 38 0 1 0 100.1 62 Z" />}
    />
  );
}

export function PuffyBlob({ color = 'var(--persimmon)', ...rest }: PuffyProps) {
  return (
    <Shape
      {...rest}
      color={color}
      path={<path d="M100 16 C142 16 178 44 182 88 C186 132 156 180 108 184 C60 188 20 156 16 108 C12 60 58 16 100 16 Z" />}
    />
  );
}

/** 쿠션을 누빈 듯한 큐브 */
export function PuffyQuilt({ color = 'var(--maple)', ...rest }: PuffyProps) {
  return (
    <Shape
      {...rest}
      color={color}
      path={
        <g>
          <rect x="26" y="26" width="70" height="70" rx="17" />
          <rect x="104" y="26" width="70" height="70" rx="17" />
          <rect x="26" y="104" width="70" height="70" rx="17" />
          <rect x="104" y="104" width="70" height="70" rx="17" />
        </g>
      }
    />
  );
}

export function PuffyPill({ color = 'var(--ginkgo)', ...rest }: PuffyProps) {
  return <Shape {...rest} color={color} path={<rect x="14" y="62" width="172" height="76" rx="38" />} />;
}

/** 구부러진 튜브 */
export function PuffyNoodle({ color = 'var(--maple)', ...rest }: PuffyProps) {
  return (
    <Shape
      {...rest}
      color={color}
      path={
        <path
          d="M44 150 C 30 96 62 52 104 52 C 140 52 164 78 158 110"
          fill="none"
          strokeWidth="46"
          strokeLinecap="round"
        />
      }
    />
  );
}
