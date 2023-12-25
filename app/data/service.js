// Service page icon
import { MdInsertEmoticon } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";

import { TbSeo } from "react-icons/tb";
import { FaPencilRuler } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbDeviceMobileCog } from "react-icons/tb";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

export const services = [
    {
        title: "Cutting-Edge Technology",
        description: "We stay on the cutting edge of technology trends. With us, you can be confident that your digital assets are powered by the latest advancements.",
        image: "/cut.jpg"
    },
    {
        title: "Reliability",
        description: "We understand the importance of reliability in the digital world. You can count on us to meet deadlines, provide quality service, and be available when you need us.",
        image: "/reliability.jpg"
    },
    {
        title: "Affordability",
        description: "We believe that every business, regardless of its size, should have access to high-quality digital services. Our pricing is competitive, and we offer packages that suit your budget.",
        image: "/afford.png"
    },
    {
        title: "Client-Centric Approach",
        description: "Your success is our success. We put your needs first and keep you involved at every step of the process. Your feedback and satisfaction are our primary concerns.",
        image: "/client.jpg"
    },
    
]

export const services1 = [
    {
        title: "Expertise Across Industries",
        description: "Our diverse team brings expertise across various industries, ensuring tailored solutions for your specific business.",
        image: "/cut.jpg",
        icon: <MdEngineering size={60}/>
    },
    {
        title: "Cutting-Edge Technology",
        description: "We stay ahead of technological advancements to provide you with the latest and most effective solutions.",
        image: "/reliability.jpg",
        icon: <MdBiotech  size={60}/>
    },
    {
        title: "Measurable Results",
        description: "Our commitment to delivering measurable results ensures that every service contributes directly to your business objectives.",
        image: "/afford.png",
        icon: <TbReportAnalytics  size={60}/>
    },
    {
        title: "Client-Centric Approach",
        description: "Your satisfaction is our top priority. We work closely with you, providing transparent communication and a personalized approach.",
        image: "/client.jpg",
        icon: <FaHandsHelping  size={60}/>
    },
]


export const services2 = [
    {
        title: "Digital Marketing Solutions",
        description: "Strategic Planning, Social Media Management, Search Engine Optimization (SEO), Content Marketing, etc",
        image: "/cut.jpg",
        icon: <TbSeo  size={40}/>
    },
    {
        title: "Web and Graphic Design",
        description: "Responsive Web Design, Graphic Design, UI/UX Design, Branding and Identity, etc",
        image: "/reliability.jpg",
        icon: <FaPencilRuler  size={40}/>
    },
    {
        title: "Application Management",
        description: "Regular Updates and Maintenance, Performance Monitoring, Security Enhancements, Cloud Services Integration, etc",
        image: "/afford.png",
        icon: <RiSecurePaymentFill  size={40}/>
    },
    {
        title: "App Design and Development",
        description: "Conceptualization, Design and Prototyping, Development and Testing, Cross-Platform Development, etc",
        image: "/client.jpg",
        icon: <TbDeviceMobileCog  size={40}/>
    },
    {
        title: "E-commerce Solutions",
        description: "Online Store Development, Payment Gateway Integration, Inventory Management, User Analytics and Optimization, etc",
        image: "/cut.jpg",
        icon: <RiShoppingCart2Line  size={40}/>
    },
    {
        title: "Comprehensive digital solution",
        description: "Website Updatations, Manage digital assets, Shapes social accounts, Brand visibility, etc",
        image: "/cut.jpg",
        icon: <BsGraphUpArrow  size={40}/>
    },
]