import {RouteObject} from "react-router";
import {ROUTE_PATH} from "../constants";
import {
  LmsCorp, LmsStudy,
  Main, OnlineTest, Math
} from "../pages";
import {PublicLayout, RootLayout} from "../layout";

const publicRoutesArr: RouteObject[] = [
  {
    element: <PublicLayout/>,
    children: [
      {
        path: ROUTE_PATH.MAIN,
        element: <Main/>,
      },
      {
        path: ROUTE_PATH.ONLINE_TEST,
        element: <OnlineTest/>,
      },
      {
        path: ROUTE_PATH.MATH,
        element: <Math/>,
      },
      {
        path: ROUTE_PATH.LMS_CORP,
        element: <LmsCorp/>,
      },
      {
        path: ROUTE_PATH.LMS_STUDY,
        element: <LmsStudy/>,
      },
    ],
  },
]

export const ROUTES_CONFIG: RouteObject[] = [
  {
    element: <RootLayout/>,
    loader: async ({params}) => {
      // console.log('loader', {params: params})
      return null
    },
    action: async ({params, request}) => {
      // console.log('action', {params, request})
      return null
    },
    children: [
      ...publicRoutesArr,
    ]
  }
]
