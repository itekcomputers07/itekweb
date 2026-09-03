import {
  Cpu,
  ShieldCheck,
  Star,
  Clock3,
  Phone,
  Search,
  ClipboardList,
  Wrench,
  UserCheck,
  BadgeCheck,
  TimerReset,
  Shield,
  Truck,
  Tag,
} from "lucide-react";

import acer from "@/assets/logos/acer.svg";
import amd from "@/assets/logos/amd.svg";
import apple from "@/assets/logos/apple.svg";
import asus from "@/assets/logos/asus.svg";
import dell from "@/assets/logos/dell.svg";
import gigabyte from "@/assets/logos/gigabyte.svg";
import hp from "@/assets/logos/hp.svg";
import intel from "@/assets/logos/intel.svg";
import lenovo from "@/assets/logos/lenovo.svg";
import logitech from "@/assets/logos/logitech.svg";
import msi from "@/assets/logos/msi.svg";
import samsung from "@/assets/logos/samsung.svg";

import laptopRepair from "@/assets/images/laptop-repair.webp";
import desktopRepair from "@/assets/images/desktop-repair.webp";
import dataRecovery from "@/assets/images/data-recovery.webp";
import motherboardRepair from "@/assets/images/motherboard-repair.webp";
import osInstallation from "@/assets/images/os-installation.webp";
import cctvInstallation from "@/assets/images/cctv-installation.webp";

import review1 from "@/assets/images/review1.webp";
import review2 from "@/assets/images/review2.webp";
import review3 from "@/assets/images/review3.webp";

export const SITE_NAME = "iTEK Computers";
export const PHONE = "+91 81483 00494";
export const TEL_LINK = "tel:8148300494";
export const WHATSAPP_URL = "https://wa.me/918148300494";

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  "Laptop Repair",
  "Desktop Repair",
  "Data Recovery",
  "Virus Removal",
  "Motherboard Repair",
  "OS Installation",
  "CCTV Installation",
  "Networking Solutions",
  "Printer Repair",
  "Hardware Upgrades",
];

export const SOCIAL_URLS = {
  facebook: "#",
  instagram: "https://www.instagram.com/itek.computers/reels/",
  youtube: "#",
  linkedin: "#",
  x: "#",
};

export const OG_IMAGE = "/og-image.jpg";

export const SITE_URL = "https://www.itekcomputers.in";
export const EMAIL = "admin@itekcomputers.in";

export const ADDRESS = {
  streetAddress: "10, Rajiv Gandhi Salai, OMR Service Rd",
  addressLocality: "Perungudi",
  addressRegion: "Tamil Nadu",
  postalCode: "600096",
  addressCountry: "IN",
};

export const OPENING_HOURS = "Mon-Sat 10:30 am - 07:30 pm";

export const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?q=itekcomputers&rlz=1C1OZZY_enIN1135IN1137&oq=itekcomputers&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg8IARAuGA0YrwEYxwEYgAQyCAgCEAAYDRgeMggIAxAAGA0YHjINCAQQABiGAxiABBiKBTIGCAUQRRg8MgYIBhBFGEEyBggHEEUYPNIBBzkxNmowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3a525dd745b896b5:0xd2f170f5576e113b,1,,,,";

export const brands = [
  {
    image: hp,
    name: "HP",
    className: "h-20",
  },
  {
    image: dell,
    name: "Dell",
    className: "h-20",
  },
  {
    image: lenovo,
    name: "Lenovo",
    className: "h-20",
  },
  {
    image: asus,
    name: "ASUS",
    className: "h-20",
  },
  {
    image: acer,
    name: "Acer",
    className: "h-20",
  },
  {
    image: msi,
    name: "MSI",
    className: "h-6",
  },
  {
    image: apple,
    name: "Apple",
    className: "h-14",
  },
  {
    image: samsung,
    name: "Samsung",
    className: "h-30",
  },
  {
    image: logitech,
    name: "Logitech",
    className: "h-40",
  },
  {
    image: intel,
    name: "Intel",
    className: "h-30",
  },
  {
    image: amd,
    name: "AMD",
    className: "h-30",
  },
  {
    image: gigabyte,
    name: "Gigabyte",
    className: "h-14",
  },
];

export const reviews = [
  {
    image: review1,
    name: "Naveen Kumar",
    time: "7 months ago",
    review:
      "Excellent service! Quick RAM Replacement for my dell laptop! Smooth experience throughout.",
  },
  {
    image: review2,
    name: "Nalini",
    time: "6 months ago",
    review:
      "Mr. Kaviyarasan is very professional and knows his job.. He is prompt in attending calls. He always maintains a personal touch with his clients. Wishing him all success in his future endeavours.. 👍",
  },
  {
    image: review3,
    name: "Subramanian N",
    time: "3 days ago",
    review:
      "Kalai Arasan is very good in his work related to laptops. I am utilising his services for the past 3 years and he is very prompt and reliable.",
  },
];

export const stats = [
  {
    icon: Cpu,
    value: "1000+",
    title: "Devices Repaired",
  },
  {
    icon: Star,
    value: "5",
    title: "Google Rating",
  },
  {
    icon: ShieldCheck,
    value: "10+",
    title: "Years Experience",
  },
  {
    icon: Clock3,
    value: "30 Min",
    title: "Quick Diagnosis",
  },
];

export const services = [
  {
    title: "Laptop Repair",
    description: "All types of laptop issues diagnosed and fixed.",
    image: laptopRepair,
  },
  {
    title: "Desktop Repair",
    description: "Hardware & software solutions for desktops.",
    image: desktopRepair,
  },
  {
    title: "Data Recovery",
    description: "Recover lost data from HDD, SSD & storage devices.",
    image: dataRecovery,
  },
  {
    title: "Motherboard Repair",
    description: "Expert motherboard chip level repair service.",
    image: motherboardRepair,
  },
  {
    title: "OS Installation",
    description: "Windows installation, driver setup & optimization.",
    image: osInstallation,
  },
  {
    title: "CCTV Installation",
    description: "Professional CCTV isetup for home & business with secure monitoring.",
    image: cctvInstallation,
  },
];

export const processSteps = [
  {
    icon: Phone,
    number: "01",
    title: "Contact Us",
    description: "Reach out via call or visit.",
  },
  {
    icon: Search,
    number: "02",
    title: "Diagnosis",
    description: "We diagnose the problem.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Quote Approval",
    description: "Get transparent quote.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Repair",
    description: "Expert repair with genuine parts.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Delivery",
    description: "Quality check & safe delivery.",
  },
];

export const benefits = [
  {
    icon: UserCheck,
    title: "Certified Technicians",
    description: "Experienced & skilled professionals",
  },
  {
    icon: BadgeCheck,
    title: "Genuine Parts",
    description: "We use only original parts",
  },
  {
    icon: TimerReset,
    title: "Same Day Service",
    description: "Quick turnaround & on-time delivery",
  },
  {
    icon: Shield,
    title: "Warranty Support",
    description: "Warranty on parts & service",
  },
  {
    icon: Truck,
    title: "Doorstep Service",
    description: "Free pickup & drop available",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Best service at reasonable price",
  },
];

export const MAP_URL =
  "https://www.google.com/maps/place/iTek+Computers+-+OMR+Laptop+Service/@12.9645882,80.2442375,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525dd745b896b5:0xd2f170f5576e113b!8m2!3d12.964583!4d80.2468124!16s%2Fg%2F11srbhx_xv";
