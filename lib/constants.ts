export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "MSU-IIT DevCon 2025",
    date: "November 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "MSU-IIT Gymnasium, Marawi City",
    image: "/images/conference-hall.png",
    slug: "msu-iit-devcon-2025"
  },
  {
    title: "Marawi Code Camp 2025",
    date: "December 5-7, 2025",
    time: "8:00 AM - 9:00 PM",
    location: "Marawi Resort Hotel Convention Center",
    image: "/images/hackathon.png",
    slug: "marawi-code-camp-2025"
  },
  {
    title: "Mindanao Tech Meetup",
    date: "November 25, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Mindanao State University Main Library",
    image: "/images/tech-meetup.png",
    slug: "mindanao-tech-meetup"
  },
  {
    title: "Islamic FinTech Summit 2025",
    date: "December 12, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Amai Pakpak Medical Center Auditorium",
    image: "/images/fintech-summit.png",
    slug: "islamic-fintech-summit-2025"
  },
  {
    title: "Bangsamoro Data Science Workshop",
    date: "November 30, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "MSU-IIT ICT Center",
    image: "/images/workshop.png",
    slug: "bangsamoro-data-science-workshop"
  }
];