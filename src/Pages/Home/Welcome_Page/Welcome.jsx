import bgImage from './bg.jpg';

const Welcome = () => {
  return (
    <div
      className="my-10 w-full mx-auto px-5 py-20 bg-opacity-50"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-center w-4/5 mx-auto font-bold text-4xl font-serif animate-fadeIn">Welcome To Bite & Bliss</h1>
      <p className="w-4/5 mx-auto font-mono text-black text-center pt-8 font-bold animate-fadeIn">
        We welcome you to a delicious feast of exquisite dishes in Artichaut.
        With a wide range of world cuisines to choose from, we guarantee you a
        sumptuous feast experience in our restaurant! Here you will dive into a
        friendly and romantic atmosphere and enjoy our haute cuisine. With our
        great selection of dishes from all over the world you can feel yourself
        as a traveler and true gourmet!
      </p>
    </div>
  );
};

export default Welcome;
