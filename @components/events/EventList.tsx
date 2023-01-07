import { eventType } from "../../@types/event";
import EventItem from "./EventItem";

type EventListPropsType = {
  list: eventType[];
};

export default function EventList({ list }: EventListPropsType) {
  return (
    <ul>
      {list.map((item) => (
        <EventItem key={item.id} event={item} />
      ))}
    </ul>
  );
}
