import "./globals.css";

export const metadata = {
  title: "Mahamud Hasan - Software Engineer",
  description:
    "I am a Software Engineer with 2+ years of experience with modern technologies like ReactJS, Node js, Express js, Tailwind CSS, Firebase, MongoDB,Java and so on",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
