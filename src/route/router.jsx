import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import HomeOne from "../pages/home-1";
import HomeTwo from "../pages/home-2";
import LayoutTwo from "../layout/layoutTwo";
import LayoutThree from "../layout/layoutThree";
import HomeThree from "../pages/home-3";
import AboutOne from "../pages/about-1";
import BlogSingleLeft from "../pages/blog-single-left";
import AboutTwo from "../pages/about-2";
import ServiceOne from "../pages/service-1";
import ServiceTwo from "../pages/service-2";
import ServiceDetails from "../pages/service-details";
import PortfolioOne from "../pages/portfolio-1";
import Contact from "../pages/contact";
import PortfolioTwo from "../pages/portfolio-2";
import PortfolioDetails from "../pages/portfolio-details";
import BlogTwo from "../pages/blog-2";
import BlogThree from "../pages/blog-3";
import BlogLeft from "../pages/blog-left";
import BlogSingleRight from "../pages/blog-single-right";
import TeamOne from "../pages/team-1";
import TeamTwo from "../pages/team-2";
import TeamThree from "../pages/team-3";
import TeamDetails from "../pages/team-details";
import Shop from "../pages/shop";
import Error from "../pages/error";
import Faq from "../pages/faq";
import ShopDetails from "../pages/shop-details";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import BlogRight from "../pages/blog-right";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeOne />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <LayoutTwo />,
  //   children: [
  //     {
  //       path: "/home-2",
  //       element: <HomeTwo />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <LayoutThree />,
    children: [
      // {
      //   path: "/home-3",
      //   element: <HomeThree />,
      // },
      // {
      //   path: "/about-1",
      //   element: <AboutOne />,
      // },
      {
        path: "/about-us",
        element: <AboutTwo />,
      },
      {
        path: "/services",
        element: <ServiceOne />,
      },
      // {
      //   path: "/service-2",
      //   element: <ServiceTwo />,
      // },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
      // {
      //   path: "/portfolio-1",
      //   element: <PortfolioOne />,
      // },
      // {
      //   path: "/portfolio-2",
      //   element: <PortfolioTwo />,
      // },
      // {
      //   path: "/portfolio-details",
      //   element: <PortfolioDetails />,
      // },
      // {
      //   path: "/team-1",
      //   element: <TeamOne />,
      // },
      // {
      //   path: "/team-2",
      //   element: <TeamTwo />,
      // },
      // {
      //   path: "/team-3",
      //   element: <TeamThree />,
      // },
      // {
      //   path: "/team-details",
      //   element: <TeamDetails />,
      // },
      // {
      //   path: "/shop",
      //   element: <Shop />,
      // },
      // {
      //   path: "/shop-details",
      //   element: <ShopDetails />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
      // {
      //   path: "/checkout",
      //   element: <Checkout />,
      // },
      // {
      //   path: "/blog-2",
      //   element: <BlogTwo />,
      // },
      // {
      //   path: "/blog-3",
      //   element: <BlogThree />,
      // },
      // {
      //   path: "/blog-left",
      //   element: <BlogLeft />,
      // },
      // {
      //   path: "/blog-right",
      //   element: <BlogRight />,
      // },
      // {
      //   path: "/blog-single-left",
      //   element: <BlogSingleLeft />,
      // },
      // {
      //   path: "/blog-single-right",
      //   element: <BlogSingleRight />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      // {
      //   path: "/faq",
      //   element: <Faq />,
      // },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);
