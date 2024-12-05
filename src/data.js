import { FaArrowDown } from "react-icons/fa6";

  
export const links = [
  {
    name: "",
    path: "/",
  },
  {
    name: "Tag to pay",
    path: "/tagtopay",
  
  },
  {
    name: "Tap to pay",
    path: "/taptopay",
  
  },
  {
    name: "Company",
    path: "/company",
    icon: FaArrowDown,
    subLinks: [
      { name: "About", path: "/company/about" },
      { name: "Contact", path: "/company/contact" },
      { name: "FAQ", path: "/company/faq" },
    ],
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];




export const contactData = {
  address: {
    content: "1234 Fitness Ave, Healthy City, Fitland",
  },
  email: {
   
    label: "Customer Service",
    content: "support@fitnesswebsite.com",
  },
  phone: {
    contacts: [
      { label: "General Inquiries", content: "+123 456 7890" },
      { label: "Customer Support", content: "+123 456 7891" },
    ],
  },
};

export const faqData = [
  {
    question: "What is Moniemate?",
    answer: "Moniemate is a secure way to stay in touch with people you may owe money to or are owed by. It supports easy digital payments.",
  },
  {
    question: "How to download Moniemate?",
    answer: "Moniemate is available on the Apple App Store and Google Play. Download it directly to your mobile device.",
  },
  {
    question: "Where can you use Moniemate?",
    answer: "You can use Moniemate in any store that accepts the contactless symbol.",
  },
  {
    question: "Where can I make top-up payments in-store with Moniemate?",
    answer: "Top-up payments are available at any participating Moniemate location.",
  },
  {
    question: "How do I sign up to Pay with Tap?",
    answer: "Simply download the app, open an account, add funds, and complete the registration. You’re ready to go!",
  },
  {
    question: "Can I use my digital account to pay with Moniemate?",
    answer: "Yes, your digital account allows payments directly with Moniemate at any approved location.",
  },
];



export const testimonials = [
  { id: 1, text: "Everything is so easy and INSTANT! Turn on and off card? Instant! Texts after spending? Instant!",
    name: "Austin",
    image: "https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg"
  
  },
  { id: 2, text: "The Spot Me® option helps me to still get my groceries when I'm short with no overdraft fees.",
    name: "Kelly",
    image: "https://www.shutterstock.com/image-photo/studio-close-portrait-handsome-young-260nw-2134031979.jpg"
  },
  { id: 3, text: "The best financial app I've ever used. Makes budgeting a breeze!",
    name: "Jordan",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
  },
  { id: 4, text: "I love the seamless interface and real-time notifications. Highly recommended!",
    name: "Taylor",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
  },
  { id: 5, text: "Customer service is amazing! They truly care about their members.",
    name: "Morgan",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
  },
  { id: 6, text: "Instant access to my funds and easy transfers. Couldn't be happier!",
    name: "Casey",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
  },
  { id: 7, text: "Easy to use, secure, and fast. Everything I need in a financial app.",
    name: "Jamie",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
  },
  { id: 8, text: "The saving tools are incredible! Helping me reach my goals quicker.",
    name: "Drew",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
  },
];
