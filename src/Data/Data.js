import React from 'react'
import Imgone from '../Images/Image.png'
import FirstImg from './../Images/Image.png'

// Desktop Headers  , Mobile Header , Footer Header 
export const MainMenu = [
    {
      Name:'Home',
      Link:'/'
    },
    {
      Name:'About',
      Link:'/about'
    },
    {
      Name:'Services',
      Link:'/services'
    },
    {
      Name:'Contact',
      Link:'/contact'
    },
   
  ]


//   PressRelease Data Src >> AboutComponent >> PressRelease.js
 export  const PressReleaseData = [
    {
        Img:Imgone,
        Title:'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
        Location: 'Location: India' ,
        Date: 'Date: 12/11/2024'  ,
        Detail:'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
    } ,
    {
        Img:Imgone,
        Title:'YourBank Expands Branch Network with Opening of New Location in Chennai',
        Location: 'Location: India' ,
        Date: 'Date: 12/11/2024'  ,
        Detail:'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.'
    } ,
    {
        Img:Imgone,
        Title:'YourBank Expands Branch Network with Opening of New Location in Chennai',
        Location: 'Location: India' ,
        Date: 'Date: 12/11/2024'  ,
        Detail:'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.'
    } ,
    {
        Img:Imgone,
        Title:'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives',
        Location: 'Location: India' ,
        Date: 'Date: 12/11/2024'  ,
        Detail:'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.'
    } 
]
// PressReleaseData End 
// VisionContainer Data Src >> AboutComponent >> VisionConteiner.js
const position_change = {
    position: "relative",
    top: "-60px",
    "@media (max-width: 786px)": {
      top: "0px"
    }
  };
export  const VisionContainerData = [
    {
        Heading:"Mission",
        Paragraph:"At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.",
        Img:FirstImg,
        Class:'',
        borderSize:'border-l-[1px]',
        class:'pl-[5%]'
    },
    
    {
        Heading:"Mission",
        Paragraph:"At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.",
        Img:FirstImg,
        Style:position_change,
        Class:'md:!flex-row-reverse',
        ImgTop:'md:top-[-30px]',
        borderSize:'border-r-[1px]',
        class:'pr-[5%]'

    }        

  ]
//   VisionContainer End 


// Project Data 
export const ProjectData =[
  {
      Heading:'24/7 Account Access',
      Paragraph:'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.'
  },
  {
      Heading:'Mobile Banking App',
      Paragraph:'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.'
  },
  {
      Heading:'Secure Trasaction',
      Paragraph:'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.'
  },
  {
      Heading:'Bill Pay and Transfers',
      Paragraph:'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.'
  }
]



// Testiomnail Data src >> HomeComponent >> Testimonail
export const TestimonailData = [
  {
    Review:'  I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
  },
  {
    Review:'  I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
  },
  {
    Review:'  I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
  },
  {
    Review:'  I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
  },
  {
    Review:'  I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
  },
  {
    Review:'  I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.'
  },
]


// About Page Hero Data 
export const AboutData =[
  {
    Heading:'Where Banking Meets',
    SpanHeading:'Excellence!',
    Paragraph:'At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.'
  }
]

// Security Page Hero Data 
export const SecurityData =[
  {
    Heading:'Your Security is Our',
    SpanHeading:'Top Priority',
    Paragraph:'At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.'
  }
]



// Faqs Data 
export const FaqsData = [
  {
    Title:'How do I open an account with YourBank?',
    Detail:'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
  },
  {
    Title:'What documents do I need to provide to apply for a loan?',
    Detail:`The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.`
  },
  {
    Title:'How I access my accounts online?',
    Detail:`Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.`
  },
  {
    Title:'Are my transactions and personal information secure?',
    Detail:'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.'
  }
]



// Press Release Data 
