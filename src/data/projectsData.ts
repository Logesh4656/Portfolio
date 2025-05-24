import { VideoProject, Skill } from '../types';

export const projects: VideoProject[] = [
  {
    id: 1,
    title: "Cinematic Short Film",
    description: "A dramatic short film with color grading and smooth transitions",
    videoUrl: "https://www.example.com/video1.mp4",
    thumbnail: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Commercial Advertisement",
    description: "Fast-paced product showcase with dynamic effects",
    videoUrl: "https://www.example.com/video2.mp4",
    thumbnail: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Music Video Edit",
    description: "Rhythmic editing synchronized with beat drops and transitions",
    videoUrl: "https://www.example.com/video3.mp4",
    thumbnail: "https://images.pexels.com/photos/7091666/pexels-photo-7091666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const skills: Skill[] = [
  {
    name: "Adobe Premiere Pro",
    icon: "film",
    level: 65
  },
  {
    name: "Alight Motion",
    icon: "smartphone",
    level: 85
  }
];