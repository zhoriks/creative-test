import React, { useState } from 'react'; 
import ReactResizeDetector from 'react-resize-detector';
import Header from'./components/header/Header';
import Sidebar from'./components/sidebar/Sidebar';
import Checkbox from'./components/checkbox/Checkbox';
import Shift from'./components/shift/Shift';
import Footer from'./components/footer/Footer';

import './App.css';
import './components/content/content.css'

function App() {
  const [isLoadedSidebar, setIsLoadedSidebar] = useState(true);

  const handleChange = (e) => {
    setIsLoadedSidebar(!isLoadedSidebar)
  };

  const handleResize = (width) => {
    if (width < 1200) {
      setIsLoadedSidebar(false);
    } else {  
      setIsLoadedSidebar(true);
    }
  }

  return (
      <div className="App">
        <ReactResizeDetector handleWidth onResize={handleResize}>
          <Header handleChange={handleChange}/>
          {isLoadedSidebar && <Sidebar />}
        </ReactResizeDetector>
        <section className="content">
          <Shift />
          <Checkbox />
        </section>
        <Footer />
      </div>
  );
}

export default App;
