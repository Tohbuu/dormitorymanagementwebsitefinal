let images = [
    "https://images.summitmedia-digital.com/candy/images/2023/04/07/bulacan-state-university.jpg", // Image 1
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Bulacan_State_University_%28MacArthur_Highway%2C_Guinhawa%2C_Malolos%2C_Bulacan%3B_02-10-2024%29.jpg/800px-Bulacan_State_University_%28MacArthur_Highway%2C_Guinhawa%2C_Malolos%2C_Bulacan%3B_02-10-2024%29.jpg?20240308155550", // Image 2 (replace with actual URL)
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Student_Lounge_Bulacan_State_University2.jpg/1024px-Student_Lounge_Bulacan_State_University2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Hebsujf.JPG/1024px-Hebsujf.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Bsulawjf.JPG/1024px-Bsulawjf.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bsuhosteljf.JPG/1024px-Bsuhosteljf.JPG"
      // Image 3 (replace with actual URL)
  ];
  
  let currentIndex = 0;
  let container = document.querySelector('.container');
  
  // Function to change the background image
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    container.style.transition = 'background-image 2s ease-in-out'; // Apply transition
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${images[currentIndex]})`;
  }
  
  // Change background every 5 seconds
  setInterval(changeBackground, 5000); // Change every 5 seconds
  