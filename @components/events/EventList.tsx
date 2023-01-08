import { eventType } from "../../@types/event";
import EventItem from "./EventItem";

import classes from "../../styles/eventList.module.css";

type EventListPropsType = {
  list: eventType[];
};

export default function EventList({ list }: EventListPropsType) {
  return (
    <ul className={classes.list}>
      {list.map((item) => (
        <EventItem key={item.id} event={item} />
      ))}
    </ul>
  );
}
