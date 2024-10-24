import { Head } from "./head";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="w-full 2xl:container mx-auto px-6 pt-16 lg:pt-20 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
