import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wood and Stone - Artisanal Pizza Delivery',
  description: 'Authentic wood-fired pizzas delivered to your doorstep. Handcrafted with passion, baked to perfection.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}