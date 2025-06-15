import axios from 'axios';
import { useEffect, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import EnvironmentCard from './EnvironmentCard';

const Environment = () => {
  
  const [enviro, setEnviro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("https://bite-and-bliss-server-side.vercel.app/environment")
      .then(res => {
        setEnviro(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Error fetching data");
        setLoading(false);
      });
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  if (loading) return <div>Loading environment data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='my-10'>
      <h1 className='text-2xl text-center font-bold'>Our Inside Environment</h1>
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-5 mx-5'>
        {
          enviro.map((envi, index) => (
            <EnvironmentCard 
              key={envi._id} 
              envi={envi} 
              onClick={() => openLightbox(index)} 
            />
          ))
        }
      </div>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        slides={enviro.map(item => ({ src: item.image }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Environment;
