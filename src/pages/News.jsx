import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const News = () => {
    
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsItems = [
    { id: 1, title: 'Apple Inc. Stock Reaches New Highs', description: 'Apple stocks surge amidst positive earnings report and product launches.', imageUrl: 'https://s.yimg.com/ny/api/res/1.2/B6MZL771RlQDRCeMEg5VlA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/gobankingrates_644/d82853064f593e8592dea57efddd60ef', category: 'Stocks' },
    { id: 2, title: 'Tesla Announces New EV Model', description: 'Tesla plans to launch a new affordable electric vehicle model aimed at the mass market.', imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/200205133314-tesla-vehicles-model-3-model-x-stock.jpg?q=x_3,y_88,h_1684,w_2993,c_crop/w_1280', category: 'Stocks' },
    { id: 3, title: 'Global Markets See Record Growth', description: 'Global stock markets experience an unprecedented surge driven by investor optimism.', imageUrl: 'https://media.istockphoto.com/id/1159602846/photo/global-trade-and-invest-concept.jpg?s=612x612&w=0&k=20&c=U4krRnfzzBPg8cxRfhdMR3NpKGhAlDyTBo6o_O4FvMo=', category: 'Market Trends' },
    { id: 4, title: 'Tech Industry Outlook: 2024', description: 'Experts predict significant growth for the tech sector, especially in AI and cloud computing.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8bqyIvmy7R6ATBW5IbErGwKGMPTjPDBkDA&s', category: 'Technology' },
    { id: 5, title: 'Bitcoin Price Analysis: What’s Next?', description: 'Bitcoin has hit new highs, but analysts warn of a potential correction.', imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*0BWkYcTy6fxrI1P2M6Hjrg.jpeg', category: 'Cryptocurrency' }
  ];

  const filteredNews = newsItems.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

  const carouselRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      if (direction === 'left') {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="space-y-6 ml-48">
      <h1 className="text-3xl font-semibold text-zinc-200 mb-8">Stock Market News</h1>
      
      <div className="mb-6">
        <select
          className="p-2 bg-zinc-800 text-white rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Stocks">Stocks</option>
          <option value="Market Trends">Market Trends</option>
          <option value="Technology">Technology</option>
          <option value="Cryptocurrency">Cryptocurrency</option>
        </select>
      </div>

      {/* Featured News Carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4" ref={carouselRef}>
          {filteredNews.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-72 bg-zinc-800 text-white rounded-lg shadow-lg h-full">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Latest News List */}
      <div className="space-y-4">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-zinc-800 text-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-4">
              <img src={item.imageUrl} alt={item.title} className="w-24 h-16 object-cover rounded-md" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-400 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
