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

  console.log(event.image);

  return (
    <li>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={300}
        height={200}
      />

      <div>
        <h2>TITLE</h2>

        <div>
          <time>{humanReadableDate}</time>
        </div>

        <div>
          {/* <address>{event.location}</address> */}
          <address>{formatteredAddress}</address>
        </div>
      </div>

      <div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
