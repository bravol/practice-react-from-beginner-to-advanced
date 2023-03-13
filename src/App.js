import AuthContainer from "./components/auth/AuthContainer";
// import DarkModeToggle from "./components/darkModeToggleProject/DarkModeToggle";
import ControlledInputs from "./components/form/ControlledInputs";
import MultipleControlledInput from "./components/form/MultipleControlledInput";
import UnControlledInput from "./components/form/UnControlledInput";
import GithubUsers from "./components/gitHubUsers/GithubUsers";
import UseEffect from "./components/hooks/useEffectHook/UseEffect";
import UseEffectCleanUp from "./components/hooks/useEffectHook/UseEffectCleanUp";
import Jokes from "./components/Jokes/Jokes";
import SubList from "./components/pricingSectionApp/subscription/SubList";
import ProductList from "./components/productFilterApp/product/ProductList";
import Profile from "./components/profile/Profile";
import Conditionalss from "./pages/conditionals/Conditionalss";
import Hooks from "./pages/hooks/Hooks";
import ProfileApp from "./pages/profile-app/ProfileApp";

import UseReducerBasics from "./components/hooks/useReducer/UseReducerBasics";
import TaskManager from "./components/hooks/taskManagerUsingUseState/TaskManager";
import TaskManagerReducer from "./components/hooks/useReducer/taskManagerApp/taskManager/TaskManagerReducer";
import PropsDrilling from "./components/propsDrilling/PropsDrilling";
import UseContextAPI from "./components/contextAPI/UseContextAPI";
import DarkModeToggle from "./components/contextAPI/darkModeToggleProject/DarkModeToggle";
// import GithubUsers from "./components/hooks/customHooks/gitHubUsers/GithubUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Counter from "./components/redux/Counter";
import Home from "./components/routing/Home";
import About from "./components/routing/About";
import Blogs from "./components/routing/Blogs";
import Navbar from "./components/routing/Navbar";
import BlogDetails from "./components/routing/BlogDetails";

function App() {
  return (
    <div>
      {/* <ProfileApp /> */}
      {/* <Hooks /> */}
      {/* <Conditionalss /> */}
      {/* <Profile /> */}
      {/* <AuthContainer /> */}

      {/* <UseEffect /> */}
      {/* <UseEffectCleanUp /> */}
      {/* <Jokes /> */}
      <GithubUsers />
      {/* <ControlledInputs /> */}
      {/* <MultipleControlledInput /> */}
      {/* <UnControlledInput /> */}

      {/* Product Filter App */}
      {/* <ProductList /> */}

      {/* this is dark mode toggle project */}
      {/* <DarkModeToggle /> */}
      {/* <SubList /> */}
      {/* <UseReducerBasics /> */}
      {/* <TaskManager /> */}
      {/* <TaskManagerReducer /> */}
      {/* <PropsDrilling /> */}
      {/* <UseContextAPI /> */}
      {/* <DarkModeToggle /> */}
      {/* <GithubUsers /> */}

      {/* this is routing */}
      {/* <BrowserRouter> */}
      {/* <Navbar /> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* Or if the page has /.../* */}
      {/* <Route path="/about/*" element={<About />} /> */}
      {/* <Route path="/blogs" element={<Blogs />} /> */}
      {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}

      {/* <Counter /> */}
    </div>
  );
}

export default App;
