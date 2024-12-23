import {
  HomeBlog,
  HomeMenu,
  HomeOpinion,
  HomeReservation,
  HomeServices,
  HomeTheStroy,
  HomeWelcome,
} from "@/components";

export default function Home() {
  return (
    <main className="">
      <HomeWelcome />
      <HomeTheStroy />
      <HomeMenu />
      <HomeServices />
      <HomeOpinion />
      <HomeBlog />
      <HomeReservation />
    </main>
  );
}
