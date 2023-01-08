import Image from "next/image";
import Link from "next/link";

import { eventType } from "../../@types/event";

import classes from "../../styles/eventItem.module.css";

type EventItemPropType = {
  event: eventType;
};

export default function EventItem({ event }: EventItemPropType) {
  const humanReadableDate = new Date(event.date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatteredAddress = event.location.replace(",", "\n");

  const exploreLink = `events/${event.id}`;

  return (
    <li className={classes.item}>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={300}
        height={200}
        priority={true}
      />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>

          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>

          <div className={classes.address}>
            {/* <address>{event.location}</address> */}
            <address>{formatteredAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
