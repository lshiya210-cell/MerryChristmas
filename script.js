const paragraph = "Merry Christmas and warmest holiday wishes to you and your family! May this joyful season fill your home with laughter, love, and sweet festive memories. As the year comes to a close, I hope you find peaceful moments to relax and celebrate with the people who mean the most to you. May the spirit of Christmas bring light and optimism to your heart for all the days ahead. Wishing you good health, endless happiness, and abundance as we enter a brand-new year. Have a truly wondrous holiday season filled with magic and brightness!";
let i = 0;

function typeParagraph() {
  if (i < paragraph.length) {
    document.getElementById("long-message").innerHTML += paragraph.charAt(i);
    i++;
    setTimeout(typeParagraph, 100); // Speed between letters
  }
}

// Listen for the click event on the play button
document.getElementById("play-btn").addEventListener("click", function() {
  // Clear any existing text just in case they click it again
    document.getElementById("long-message").innerHTML = "";
      i = 0;
        
          // Wait for 3 seconds (3000 milliseconds) before starting the typing effect
            setTimeout(typeParagraph, 200);
            });

// Get the button and audio elements from HTML
const playBtn = document.getElementById('play-btn');
const bgMusic = document.getElementById('bg-music');

// Reset the music to the start and play whenever the button is clicked
playBtn.addEventListener('click', () => {
    bgMusic.currentTime = 0; // Rewinds the track to the beginning
        bgMusic.play();          // Plays the audio
        });
        

                                                
