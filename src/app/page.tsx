import React from 'react';

function Page() {
  return (
    <div>
      <style>
        {`
          body {
            background-color: darkblue; /* Setting the background color to red */
            color: white;
            padding: 20px;
            display: flex; /* Flexbox for layout */
            justify-content: space-between; /* Items distributed with space between */
            align-items: center; /* Center vertically */
          }

          button {
            background-color: transparent;
            border: 1px solid white;
            color: white;
            padding: 10px 20px;
            cursor: pointer;
          }
        `}
      </style>
      <div>Next.js</div> {/* Text on the left */}
      <button>CV</button> {/* Button on the right */}
    </div>
  );
}

export default Page;
