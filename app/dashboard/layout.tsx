import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
  </>
  )
}
