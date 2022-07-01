import { lazy } from "react";

const PricingTable = lazy(() => import("./PricingTable"));

const SearchResults = lazy(() => import("./SearchResults"));

const UserProfile = lazy(() => import("./UserProfile"));

const OperatorLog = lazy(() => import("./OperatorLog"));

const Records = lazy(() => import("./Records"));

const FAQ = lazy(() => import("./FAQ"));

const pagesRoutes = [
  {
    path: "/pages/pricing-table",
    component: PricingTable
  },
  {
    path: "/pages/search-results",
    component: SearchResults
  },
  {
    path: "/pages/user-profile",
    component: UserProfile
  },
  {
    path: "/pages/faq",
    component: FAQ
  },
  {
    path: "/pages/operators-log",
    component: OperatorLog
  },
  {
    path: "/pages/records",
    component: Records
  }
];

export default pagesRoutes;
