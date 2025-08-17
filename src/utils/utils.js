import user1 from '../assets/images/nav-icon-4.svg'
import home from '../assets/images/home.svg'
import user2 from '../assets/images/nav-icon-5.svg'
import Money from '../assets/images/nav-icon-6.svg'
import Decision from '../assets/images/nav-icon-7.svg'
import Piggy from '../assets/images/nav-icon-8.svg'
import LoanReq from '../assets/images/nav-icon-9.svg'
import Whitelist from '../assets/images/nav-icon-10.svg'
import Karma from '../assets/images/nav-icon-11.svg'
import Brief from '../assets/images/nav-icon-13.svg'
import Monument from '../assets/images/nav-icon-15.svg'
import Coins from '../assets/images/nav-icon-16.svg'
import Transact from '../assets/images/nav-icon-17.svg'
import Spinner from '../assets/images/nav-icon-18.svg'
import Userserv from '../assets/images/nav-icon-19.svg'
import Scroll from '../assets/images/nav-icon-20.svg'
import Chart from '../assets/images/nav-icon-21.svg'
import Pascal from '../assets/images/nav-icon-23.svg'
import Percent from '../assets/images/nav-icon-24.svg'
import Audit from '../assets/images/nav-icon-25.svg'
import Point from '../assets/images/nav-icon-26.svg'
import User from '../assets/images/user-stat-icon-1.svg'
import Active from '../assets/images/user-stat-icon-2.svg'
import UsLoan from '../assets/images/user-stat-icon-3.svg'
import UsSave from '../assets/images/user-stat-icon-4.svg'

export const sidebarData = [
  {
    id: 1,
    title: "Switch Organization",
    img: user1,
  },
  {
    id: 2,
    title: "Dashboard",
    img: home,
  },
  {
    id: 3,
    heading: "CUSTOMERS",
    titles: [
      {
        id: 1,
        title: "Users",
        img: user1,
      },
      {
        id: 2,
        title: "Guarantors",
        img: user2,
      },
      {
        id: 3,
        title: "Loan",
        img: Money,
      },
      {
        id: 4,
        title: "Decision Models",
        img: Decision,
      },
      {
        id: 6,
        title: "Savings",
        img: Piggy,
      },
      {
        id: 7,
        title: "Loan Requests",
        img: LoanReq,
      },
      {
        id: 8,
        title: "Whitelist",
        img: Whitelist,
      },
      {
        id: 9,
        title: "Karma",
        img: Karma,
      },
    ],
  },
  {
    id:4,
    heading: "BUSINESS",
    titles:[
        {
        id: 1,
        title: "Organization",
        img:Brief,
        },
        {
        id: 2,
        title: "Loan Products",
        img:LoanReq,
        },
        {
        id: 3,
        title: "Savings Products",
        img:Monument,
        },
        {
        id: 4,
        title: "Fees and Charges",
        img:Coins,
        },
        {
        id: 5,
        title: "Transactions",
        img:Transact,
        },
        {
        id: 6,
        title: "Services",
        img:Spinner,
        },
        {
        id: 7,
        title: "Service Account",
        img:Userserv,
        },
        {
        id: 8,
        title: "Settlements",
        img:Scroll,
        },
        {
        id: 9,
        title: "Reports",
        img:Chart,
        },
    ]

  },
  {
    id: 5,
    heading: "SETTINGS",
    titles: [
        {
        id: 1,
        title: "Preferences",
        img: Pascal,
        },
        {
        id: 2,
        title: "Fees and Pricing",
        img: Percent,
        },
        {
        id: 3,
        title: "Audit Logs",
        img: Audit,
        },
        {
        id: 4,
        title: "System Messages",
        img: Point,
        },
    ]
  }
];

export const userData = [
  {
    id: 1,
    name: "USERS",
    total: "2,453", 
    img: User,
  },
  {
    id: 2,
    name: "ACTIVE USERS",
    total: "2,453", 
    img: Active,
  },
  {
    id: 3,
    name: "USERS WITH LOANS",
    total: "12,453", 
    img: UsLoan,
  },
  {
    id: 4,
    name: "USERS WITH SAVINGS",
    total: "102,453", 
    img: UsSave,
  },
]