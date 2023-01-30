import './globals.css'

interface IProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: IProps) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
