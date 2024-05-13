import { useState } from "react";
import { motion } from "framer-motion"
const Main = () => {
  const [whatis, setWhatIs] = useState<boolean>(true)
  const [ajcash, setAjcash] = useState<boolean>(false)
  const [where, setWhere] = useState<boolean>(false)
  const [access, setAccess] = useState<boolean>(false)
  const [support, setSupport] = useState<boolean>(false)
  const [benefit, setBenefit] = useState<boolean>(false)

  const handledWhatis = () => {
    setWhatIs(true)
    setAjcash(false)
    setWhere(false)
    setAccess(false)
    setSupport(false)
    setBenefit(false)
  }

  const handleSetAjcash = () => {
    setWhatIs(false)
    setAjcash(true)
    setWhere(false)
    setAccess(false)
    setSupport(false)
    setBenefit(false)
  }

  const handleBenefit = () => {
    setWhatIs(false)
    setAjcash(false)
    setWhere(false)
    setAccess(false)
    setSupport(false)
    setBenefit(true)
  }

  const handleWhere = () => {
    setWhatIs(false)
    setAjcash(false)
    setWhere(true)
    setAccess(false)
    setSupport(false)
    setBenefit(false)
  }
  const handleMobile = () => {
    setWhatIs(false)
    setAjcash(false)
    setWhere(false)
    setAccess(true)
    setSupport(false)
    setBenefit(false)
  }
  const handleSupport = () => {
    setWhatIs(false)
    setAjcash(false)
    setWhere(false)
    setAccess(false)
    setSupport(true)
    setBenefit(false)
  }


  const Support = () => {
    return (
      <div className="w-full border h-full rounded-md">
        <div className="ml-2  my-2 text-[17px]">
          At Ajcash, we prioritize customer satisfaction by providing comprehensive support channels tailored to address the diverse needs of our users. Whether you have questions about our platform's features, encounter technical issues, or seek guidance on trading strategies, our dedicated support team is here to assist you every step of the way. You can reach out to us via email, where our knowledgeable representatives are ready to provide prompt and personalized assistance, ensuring a smooth and efficient resolution to your inquiries.
          <br />
          <br />
          In addition to email support, we offer live chat functionality, enabling real-time communication with our support specialists for immediate assistance and troubleshooting. For those who prefer direct interaction, our phone support service provides a convenient avenue to speak with a member of our team directly, allowing for personalized assistance and guidance tailored to your specific needs. With our commitment to customer service excellence, Ajcash strives to ensure that your trading experience is not only successful but also supported by a reliable and responsive support network.</div>

      </div>
    )
  }
  const Where = () => {
    return (
      <div className="w-full border h-full rounded-md">
        <div className="ml-2  my-2 text-[17px]">
          Ajcash's headquarters is situated at No.80, Bale Street, Boundary Ajeromi Road, Ajegunle Apapa, Lagos, Nigeria. This central location serves as a hub for innovation and collaboration, reflecting Ajcash's commitment to serving the local and global trading community with excellence. From this strategic address, Ajcash endeavors to foster meaningful connections and partnerships, driving forward its mission to empower traders and enhance financial opportunities for individuals worldwide.</div>
      </div>
    )
  }
  const Mobile = () => {
    return (
      <div className="w-full border h-full rounded-md">
        <div className="ml-2  my-2 text-[17px]">
          Ajcash ensures seamless accessibility by optimizing its platform for mobile devices. This allows traders the flexibility to access their accounts and monitor market activity anytime, anywhere, empowering them to stay connected and responsive to market dynamics while on the move. With Ajcash's mobile optimization, traders can enjoy uninterrupted access to essential trading tools and resources, facilitating informed decision-making and maximizing opportunities for success in the fast-paced world of finance. </div>
      </div>
    )
  }

  const Whatis = () => {
    return (
      <div className="w-full border h-full rounded-md">
        <div className="ml-2  my-2 text-[17px]">
          Ajcash is a comprehensive fintech solution meticulously crafted to bolster traders in their day-to-day business endeavors. Its robust suite of features encompasses everything from market analysis to portfolio management, providing traders with the essential tools needed to navigate the complexities of the financial markets with ease and efficiency.
          <br />
          <br />
          By offering a diverse array of resources and functionalities, Ajcash empowers traders to streamline their trading operations and make informed decisions with confidence. Whether analyzing market trends, managing portfolios, or executing trades, Ajcash serves as a reliable companion, equipping traders with the necessary support to thrive in today's dynamic trading landscape. </div>
      </div>
    )
  }
  const Who = () => {
    return (
      <div className="w-full border h-full rounded-md">
        <div className="ml-2  my-2 text-[17px]">
          Ajcash is a dynamic fintech platform designed to cater to the diverse needs of traders, spanning from novices taking their initial steps in the market to seasoned professionals seeking advanced analytical tools. With a user-friendly interface and comprehensive educational resources, Ajcash provides beginners with the guidance and confidence needed to navigate the complexities of trading effectively. Simultaneously, Ajcash offers a suite of sophisticated features, including real-time market insights and customizable charting tools, to empower experienced traders in making informed decisions and capitalizing on market opportunities with precision.
          <br />
          <br />
          At the heart of Ajcash lies a commitment to fostering a supportive and inclusive trading community, where individuals of all backgrounds and experience levels can thrive. Through interactive forums, educational webinars, and social trading features, Ajcash encourages collaboration, knowledge-sharing, and mentorship, creating a conducive environment for continuous growth and success in the ever-evolving world of finance. </div>
      </div>
    )
  }
  const Ajcash = () => {
    return (
      <div className="w-full border h-full rounded-md">
        <div className="ml-2  my-2 text-[17px]">
          Ajcash stands out in the fintech landscape for its unwavering commitment to empowering traders of all backgrounds and experience levels. With a robust suite of features and resources, Ajcash goes beyond mere transaction facilitation to provide a comprehensive ecosystem that supports traders in every facet of their journey. From intuitive tools for market analysis to personalized guidance on trading strategies, Ajcash offers a holistic approach to trading, ensuring that users have the tools and support they need to succeed in today's dynamic market environment.
          <br />
          <br />
          Moreover, Ajcash's dedication to innovation and customer satisfaction sets it apart as a leader in the industry. Continuously evolving to meet the evolving needs of traders, Ajcash leverages cutting-edge technologies and user feedback to enhance its platform and services continually. Whether it's through seamless mobile optimization or responsive customer support, Ajcash remains steadfast in its mission to democratize access to financial opportunities and empower individuals worldwide to achieve their trading goals with confidence and competence.
        </div>
      </div>
    )
  }

  const motionVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
    close: {
      opacity: 0,
      y: "100px",
    },
  };

  return (
    <>
      <motion.div variants={motionVariant} initial="close" animate="open" className="w-full min-h-[50vh] flex flex-col items-center relative">
        <div className="w-[95%] border rounded-md min-h-[550px] my-2 flex items-center justify-center ">
          General Team Memberes Image would go here
        </div>
        <div className="w-[95%] min-h-[50vh] flex ">
          <div
            className={`w-[270px] border-r-4 h-[50vh] max-lg:hidden mr-4`}
          >
            <div className={`my-2 hover:cursor-pointer ${whatis ? "text-blue-500" : ""}`} onClick={handledWhatis}>What is Ajcash?</div>
            <div className={`my-2 hover:cursor-pointer ${ajcash ? "text-blue-500" : ""}`} onClick={handleSetAjcash}>Why Ajcash?</div>
            <div className={`my-2 hover:cursor-pointer ${benefit ? "text-blue-500" : ""}`} onClick={handleBenefit}>Why Who can benefit from using Ajcash?</div>
            <div className={`my-2 hover:cursor-pointer ${where ? "text-blue-500" : ""}`} onClick={handleWhere}>Why Where is Ajcash located at?</div>
            <div className={`my-2 hover:cursor-pointer ${access ? "text-blue-500" : ""}`} onClick={handleMobile}>Why Can I access Ajcash on mobile devices?</div>
            <div className={`my-2 hover:cursor-pointer ${support ? "text-blue-500" : ""}`} onClick={handleSupport}>Why  What kind of support does Ajcash provide?</div>
          </div>
          <div className="max-md:w-full w-full min-h-[50vh]">{whatis && <Whatis /> || ajcash && <Ajcash /> || benefit && <Who /> || where && <Where /> || access && <Mobile /> || support && <Support />}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Main;
