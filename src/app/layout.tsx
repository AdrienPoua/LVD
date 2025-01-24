import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'LDV ART - Transport et Manipulation d\'Œuvres d\'Art',
  description: 'Spécialistes du transport et de la manipulation d\'œuvres d\'art basés à Paris.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}