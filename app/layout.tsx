import './globals.css';
import { Analytics } from '@vercel/analytics/react'; // 👈 Add this

export const metadata = {
  title: 'Vj.17 Portfolio',
  description: '🤝 Connecting People • 🧪 Testing Skills • 💡 Creating Solutions',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        {children}
        <Analytics /> {/* 👈 Add this at the end of body */}
      </body>
    </html>
  );
}