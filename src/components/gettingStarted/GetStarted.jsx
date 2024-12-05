import './GetStarted.css';
import Halfscreen from "../../images/mookk.png";
import GetStartedCard from './GetStartedCard';

const getStartedData = [
  {
    id: 1,
    step: "01",
    title: "Download the app",
    description: "Get App on Google Play Store for Android or App Store for iOS.",
    image: Halfscreen,
  },
  {
    id: 2,
    step: "02",
    title: "Register within minutes",
    description: "Tell us a few details about you to help us create your account.",
    image: Halfscreen,
  },
  {
    id: 3,
    step: "03",
    title: "Start banking",
    description: "You’re ready to go. Carry out all your banking transactions within the app.",
    image: Halfscreen,
  },
  {
    id: 4,
    step: "04",
    title: "Manage your finances",
    description: "Take control of your financial goals with personalized insights and tips.",
    image: Halfscreen,
  },
  {
    id: 5,
    step: "05",
    title: "Build your credit",
    description: "Use our tools to track and improve your credit score over time.",
    image: Halfscreen,
  },
  {
    id: 6,
    step: "06",
    title: "Invest for the future",
    description: "Access investment options that match your financial goals.",
    image: Halfscreen,
  },
];

function GetStarted() {
  return (
    <div className="get-started">
      <div className="get-started__scroll">
        {getStartedData.map((item) => (
          <GetStartedCard
            key={item.id}
            step={item.step}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default GetStarted;
