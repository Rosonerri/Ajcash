import {
  MdSavings,
  MdPayment,
  MdSettingsApplications,
  MdTransferWithinAStation,
  MdTrendingUp,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { iService } from "./ServiceCard";
import Francis from "../../../assets/Francis.jpeg";
import { iTeam } from "./TeamCard";

export const data: Array<iService> = [
  {
    heading: "Savings",
    text: "Stash cash. Watch it grow. Secure your dreams. Plan ahead. Act wisely. Save today. Future-proof finances.",
    icon: <MdSavings />,
  },
  {
    heading: "Bills Payment",
    text: "Ease payments. Manage bills. Stay on top. Plan ahead. Save smartly. Secure future. Financial freedom.",
    icon: <MdPayment />,
  },
  {
    heading: "Utility Payment",
    text: "Manage utilities. Control costs. Plan ahead. Save smartly. Secure future. Financial freedom.",
    icon: <MdSettingsApplications />,
  },
  {
    heading: "Local & International Transfer",
    text: "Send money securely. Simplify transactions. Plan wisely. Save for future. Financial security.",
    icon: <MdTransferWithinAStation />,
  },
  {
    heading: "Investment Services",
    text: "Grow wealth. Maximize returns. Plan for the future. Invest wisely. Financial security. Build wealth.",
    icon: <MdTrendingUp />,
  },
  {
    heading: "Budgeting Tools",
    text: "Manage finances. Track expenses. Set budgets. Achieve goals. Financial control. Plan for success.",
    icon: <MdAccountBalanceWallet />,
  },
];

export const teamData: Array<iTeam> = [
  {
    name: "Francis Uzoigwe",
    img: Francis,
    role: "Fullstack Software Engineer and Frontend Lead",
  },
  {
    name: "Francis Uzoigwe",
    img: Francis,
    role: "Fullstack Software Engineer and Frontend Lead",
  },
  {
    name: "Francis Uzoigwe",
    img: Francis,
    role: "Fullstack Software Engineer and Frontend Lead",
  },
  {
    name: "Francis Uzoigwe",
    img: Francis,
    role: "Fullstack Software Engineer and Frontend Lead",
  },
];
