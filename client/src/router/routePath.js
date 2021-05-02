import HomeScreen from "../screens/home/HomeScreen";
import NotFoundScreen from "../screens/router/NotFoundScreen";
import UniversityScreen from "../screens/university/UniversityScreen";

export const routes = [
  {
    path: ["/","/ana-sayfa","/index.html"],
    component: HomeScreen,
    exact: true
  },
  {
    path: "/universite",
    component: UniversityScreen,
    exact: false
  },
  {
    component: NotFoundScreen,
    exact: false
  },
];