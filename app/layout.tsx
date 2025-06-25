import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Vj.17 Portfolio',
  description: '🤝 Connecting People • 🧪 Testing Skills • 💡 Creating Solutions',
  // 👇 Add your Google verification here
  other: {
    'google-site-verification': 'google9be9d164f93ee229.html',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}