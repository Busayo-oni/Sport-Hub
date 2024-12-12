// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Football from './pages/Football';
import Boxing from './pages/Boxing';
import Tennis from './pages/Tennis';
import Liverpool from './pages/liverpool';
import CarlosAlcaraz from './pages/CarlosAcaraz';
import WimbledonHistory from './pages/wimbledonHistory';
import TysonFuryHighlights from './pages/furyHighlight';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TransferNews from './pages/transferNews';
import TopKnockouts2024 from './pages/TopKnockouts2024';
import UsykTrainingRegimen from './pages/UsykTrainingRegimen';
import Cricket from './pages/cricket';
import Basketball from './pages/Basketball';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/football" element={<Football />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/liverpool" element={<Liverpool />} />
        <Route path="/CarlosAlcaraz" element={<CarlosAlcaraz />} />
        <Route path="/WimbledonHistory" element={<WimbledonHistory />} />
        <Route path="/TysonFuryHighlights" element={<TysonFuryHighlights />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/TransferNews" element={<TransferNews />} />
        <Route path="/TopKnockouts2024" element={<TopKnockouts2024 />} />
        <Route path="/UsykTrainingRegimen" element={<UsykTrainingRegimen />} />
        <Route path="/Cricket" element={<Cricket />} />
        <Route path="/Basketball" element={<Basketball />} />


      </Routes>
    </Router>
  );
}

export default App;
