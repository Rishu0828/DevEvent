export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit US 2025",
    slug: "react-summit-us-2025",
    location: "San Francisco, CA, USA",
    date: "2025-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Vue.js Global Conference 2025",
    slug: "vuejs-global-conference-2025",
    location: "Amsterdam, Netherlands",
    date: "2025-09-15",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "Angular Connect 2025",
    slug: "angular-connect-2025",
    location: "London, UK",
    date: "2025-10-20",
    time: "09:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Full Stack Fest 2025",
    slug: "full-stack-fest-2025",
    location: "Barcelona, Spain",
    date: "2025-08-25",
    time: "10:00 AM",
  },
  {
    image: "/images/event5.png",
    title: "JSConf EU 2025",
    slug: "jsconf-eu-2025",
    location: "Berlin, Germany",
    date: "2025-09-10",
    time: "09:00 AM",
  },
];
