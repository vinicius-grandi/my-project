import reactDom from "react-dom";

const Home = ({ children }) => reactDom.createPortal(
    children, 
    document.querySelector('#another')
);

export default Home
