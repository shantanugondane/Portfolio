import React from 'react';
import { FloatingDock } from './ui/floating-dock';
import { 
  IconHome, 
  IconBriefcase, 
  IconUser, 
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconFileText
} from '@tabler/icons-react';

const FloatingNavbar = () => {
  const navItems = [
    {
      title: "Home",
      icon: <IconHome className="h-5 w-5" />,
      href: "#"
    },
    {
      title: "Projects", 
      icon: <IconBriefcase className="h-5 w-5" />,
      href: "#projects"
    },
    {
      title: "About",
      icon: <IconUser className="h-5 w-5" />,
      href: "#experience"
    },
    {
      title: "Resume",
      icon: <IconFileText className="h-5 w-5" />,
      href: "/resume.pdf"
    },
    {
      title: "Contact",
      icon: <IconMail className="h-5 w-5" />,
      href: "mailto:shantanugondane44@gmail.com"
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-5 w-5" />,
      href: "https://github.com/shantanugondane"
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/shantanu-gondane-46456822b/"
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-5 w-5" />,
      href: "https://www.instagram.com/shantanu.spaceship/"
    }
  ];

  return (
    <div className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50 safe-top">
      <FloatingDock 
        items={navItems}
        desktopClassName="bg-gray-900/80 backdrop-blur-md border border-gray-700/50"
        mobileClassName="fixed top-4 right-4 safe-top safe-right ml-auto"
      />
    </div>
  );
};

export default FloatingNavbar; 