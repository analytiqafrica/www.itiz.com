import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import PagePreloader from "@/components/layout/PagePreloader";
import ScrollUp from "@/components/layout/ScrollUp";
import HomeSections from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <PagePreloader />
      <SiteHeader />
      <HomeSections />
      <SiteFooter />
      <ScrollUp />
    </main>
  );
}
