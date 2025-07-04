import profilePic from '../assets/foto.jpg';

const Avatar = () => (
  <div className="w-64 h-64 md:w-80 md:h-80 relative">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
      <defs>
        <clipPath id="blob-clip">
          <path
            d="M47.1,-69.4C61.8,-61.1,75.2,-47.9,80.5,-32.4C85.8,-16.9,83,0.8,76.1,16.2C69.2,31.6,58.2,44.7,45.4,56.2C32.6,67.7,18,77.6,1.9,78.8C-14.2,80,-29.9,72.5,-44.5,62.8C-59.1,53.1,-72.6,41.2,-79.2,26.3C-85.8,11.4,-85.5,-6.4,-79.3,-21.8C-73,-37.2,-60.8,-50.2,-47,-58.9C-33.2,-67.6,-17.8,-72,-1.3,-71.1C15.2,-70.2,32.4,-77.7,47.1,-69.4Z"
            transform="translate(100 100)"
          />
        </clipPath>
      </defs>
      <image
        href={profilePic}
        x="0"
        y="0"
        width="200"
        height="200"
        preserveAspectRatio="xMidYMid meet"
        clip-path="url(#blob-clip)"
      />
    </svg>
  </div>
);

export default Avatar;
