'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';

/**
 * 히어로에 흩뿌리는 3D 오브젝트.
 *
 * 이미지는 알파가 없어 .tm-obj가 배경색을 맞추고 가장자리를 마스크로 깎는다.
 * 떠다니는 움직임은 CSS 키프레임이 <img>에, 마우스 반응은 스프링이 래퍼에 건다.
 * 둘을 다른 엘리먼트에 나눠 걸어야 transform이 서로 덮어쓰지 않는다.
 */

interface ObjectSpec {
  src: string;
  /** 화면에서의 위치. 절대배치라 Tailwind 클래스로 받는다 */
  position: string;
  /** 크기도 뷰포트에 따라 달라져 클래스로 받는다 */
  size: string;
  /** 마우스를 따라 움직이는 정도(px). 클수록 앞에 있는 느낌 */
  depth: number;
  /** 뜨는 높이와 회전 */
  amp: string;
  rot: string;
  rotTo: string;
  dur: string;
  delay: string;
  /** 가장자리까지 오브젝트가 닿아, 마스크 대신 밝기 보정으로 배경을 맞추는 이미지 */
  bleed?: boolean;
}

const OBJECTS: ObjectSpec[] = [
  {
    // 우하단 — 무지개 웨이브. 제일 크고 뒤에 깔리는 배경이라 배열 맨 앞
    src: '/objects/wave.jpg',
    position: 'right-[-12%] bottom-[-10%] md:right-[-5%] md:bottom-[-12%]',
    size: 'w-[300px] md:w-[455px] xl:w-[560px]',
    depth: 18,
    amp: '-10px',
    rot: '0deg',
    rotTo: '3deg',
    dur: '10.2s',
    delay: '-5s',
    bleed: true,
  },
  {
    // 좌상단 — 코드 브래킷. 아래 둘과 들여쓰기를 어긋나게 둔다
    src: '/objects/brackets.jpg',
    position: 'left-[-6%] top-[11%] md:left-[-2%] md:top-[12%]',
    size: 'w-[170px] md:w-[240px] xl:w-[290px]',
    depth: 34,
    amp: '-18px',
    rot: '-9deg',
    rotTo: '1deg',
    dur: '7.5s',
    delay: '0s',
  },
  {
    // 좌중단 — 알약 무리. 셋 중 가장 안쪽으로 들어온다
    src: '/objects/pills.jpg',
    position: 'hidden md:block left-[7%] top-[46%]',
    size: 'md:w-[195px] xl:w-[230px]',
    depth: 20,
    amp: '-12px',
    rot: '7deg',
    rotTo: '-2deg',
    dur: '9.1s',
    delay: '-3.6s',
  },
  {
    // 좌하단 — 클라우드 + DB
    src: '/objects/cloud-db.jpg',
    position: 'left-[-4%] bottom-[0%] md:left-[1%] md:bottom-[0%]',
    size: 'w-[125px] md:w-[205px] xl:w-[245px]',
    depth: 30,
    amp: '-16px',
    rot: '2deg',
    rotTo: '-5deg',
    dur: '7.9s',
    delay: '-0.8s',
  },
  {
    // 중앙 상단 — 구름. 타이포 오른쪽 빈자리를 메운다
    src: '/objects/cloud.jpg',
    position: 'hidden md:block left-[52%] top-[4%]',
    size: 'md:w-[160px] xl:w-[195px]',
    depth: 24,
    amp: '-15px',
    rot: '5deg',
    rotTo: '-4deg',
    dur: '8.7s',
    delay: '-4.2s',
  },
  {
    // 우상단 — 플레이 버튼
    src: '/objects/play.jpg',
    position: 'right-[4%] top-[8%] md:right-[17%] md:top-[9%]',
    size: 'w-[125px] md:w-[205px] xl:w-[240px]',
    depth: 46,
    amp: '-22px',
    rot: '8deg',
    rotTo: '-3deg',
    dur: '6.2s',
    delay: '-1.4s',
  },
  {
    // 우상단 — 필름 릴
    src: '/objects/reel.jpg',
    position: 'right-[-5%] top-[19%] md:right-[0%] md:top-[26%]',
    size: 'w-[160px] md:w-[240px] xl:w-[285px]',
    depth: 26,
    amp: '-14px',
    rot: '-10deg',
    rotTo: '0deg',
    dur: '8.4s',
    delay: '-2.8s',
  },
  {
    // 중앙 하단 — 기울어진 플레이 버튼. 가운데가 비어 보이지 않게 끌어온다
    src: '/objects/play-alt.jpg',
    position: 'hidden md:block left-[47%] bottom-[6%]',
    size: 'md:w-[210px] xl:w-[255px]',
    depth: 40,
    amp: '-20px',
    rot: '10deg',
    rotTo: '2deg',
    dur: '6.8s',
    delay: '-2.1s',
  },
];

function FloatObject({ spec, mx, my }: { spec: ObjectSpec; mx: MotionValue<number>; my: MotionValue<number> }) {
  const x = useTransform(mx, (v) => v * spec.depth);
  const y = useTransform(my, (v) => v * spec.depth);

  return (
    <motion.div className={`absolute ${spec.position} ${spec.size}`} style={{ x, y }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={spec.src}
        alt=""
        aria-hidden
        width={800}
        height={800}
        loading="eager"
        className={`tm-obj${spec.bleed ? ' tm-obj-bleed' : ''} tm-obj-float w-full h-auto`}
        style={
          {
            '--amp': spec.amp,
            '--rot': spec.rot,
            '--rot-to': spec.rotTo,
            '--dur': spec.dur,
            '--delay': spec.delay,
          } as React.CSSProperties
        }
      />
    </motion.div>
  );
}

export default function Objects() {
  // -0.5 ~ 0.5 범위의 커서 위치. 스프링을 거쳐야 따라오는 맛이 난다.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => { window.removeEventListener('pointermove', onMove); };
  }, [rawX, rawY]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {OBJECTS.map((spec) => (
        <FloatObject key={spec.src + spec.position} spec={spec} mx={mx} my={my} />
      ))}
    </div>
  );
}
