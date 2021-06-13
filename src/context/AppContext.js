import { createContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppContextProvider({ children }) {}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
