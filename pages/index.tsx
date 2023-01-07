import EventList from "../@components/events/EventList";
import { getFeaturedEvents } from "../dummy_data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>홈페이지</h1>

      <EventList list={featuredEvents} />
    </div>
  );
}
