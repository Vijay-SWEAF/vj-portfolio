import './globals.css';

export const metadata = {
  title: 'SWEAF Portfolio',
  description: 'Crafting software that works and wows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
