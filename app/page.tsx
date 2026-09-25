import HomeDesktop from "@/components/pages/HomeDesktop";
import HomeMobile from "@/components/pages/HomeMobile";

export default function Home() {
  return (
    <>
      <div className="only-desktop">
        <HomeDesktop />
      </div>
      <div className="only-mobile">
        <HomeMobile />
      </div>
    </>
  );
}
