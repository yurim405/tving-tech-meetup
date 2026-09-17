import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TVING Tech Meetup — September 2026',
  description:
    '1,000만이 보는 그 화면을 만드는 사람들. TVING Tech Meetup, 한 달에 한 번.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
