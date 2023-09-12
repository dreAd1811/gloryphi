function randJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      const setup = data.setup;
      const punchline = data.punchline;
      console.log('Setup:', setup);
    console.log('Punchline:', punchline);

    const p = document.getElementById("out")
    const p1 = document.getElementById("out1")
    p.textContent = setup
    p1.textContent = punchline
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  

}


function randMeme() {
  fetch('https://meme-api.com/gimme')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const url = data.preview[3];
    console.log('url:', url);
    var oim = document.getElementById("oim");
    oim.src = url
    console.log("SEt")
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


}


// // Vanta Background 
// VANTA.HALO({
//     el: "#main",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     amplitudeFactor: 3.00,
//     xOffset: -0.11,
//     yOffset: -0.11,
//     size: 2.60
// })

const dot1 = document.querySelector('#dot-1');
const dot2 = document.querySelector('#dot-2');
const dot3 = document.querySelector('#dot-3');
const dot4 = document.querySelector('#dot-4');
const dot5 = document.querySelector('#dot-5');

// Array of dot elements
const dots = [dot1, dot2, dot3, dot4, dot5];

// Durations for dot animations (in milliseconds)
const animationDurations = [2000, 3000, 2500, 3000, 3500];

// Function to get a random dot size
const getRandomSize = () => {
    const minSize = 500;
    const maxSize = 1500;
    return {
        width: gsap.utils.random(minSize, maxSize),
        height: gsap.utils.random(minSize, maxSize),
    };
};

// Function to get a random percentage for position
const getRandomPercentage = () => {
    const minPercent = 35;
    const maxPercent = 65;
  
    return `${gsap.utils.random(minPercent, maxPercent)}% ${gsap.utils.random(minPercent, maxPercent)}% ${gsap.utils.random(minPercent, maxPercent)}% ${gsap.utils.random(minPercent, maxPercent)}%`;
};

// Function to get a random position
const getRandomPosition = () => {
    const leftValue = `${gsap.utils.random(0, 100)}%`;
    const topValue = `${gsap.utils.random(10, 90)}%`;

    return {
        left: leftValue,
        top: topValue,
    };
};

// Function to animate a dot
const animateDot = (dot) => {
    const randomPosition = getRandomPosition();
    const randomSize = getRandomSize();

    // Set initial dot properties
    gsap.set(dot, {
        left: randomPosition.left,
        top: randomPosition.top,
        borderRadius: `${getRandomPercentage()} / ${getRandomPercentage()}`,
        width: randomSize.width,
        height: randomSize.height,
    });

    const glowShapeTimeline = gsap.timeline();

    // Fade in animation
    glowShapeTimeline.to(dot, {
        duration: animationDurations[dots.indexOf(dot)] / 1000,
        ease: 'none',
        opacity: 1,
    });

    // Hold animation for a while
    glowShapeTimeline.to(dot, {
        duration: 3, // Adjust hold time as needed
        ease: 'none',
    });

    // Fade out animation
    glowShapeTimeline.to(dot, {
        duration: animationDurations[dots.indexOf(dot)] / 1000,
        ease: 'none',
        opacity: 0,
        onComplete: () => {
            // Re-animate the dot after it fades out
            animateDot(dot);
        },
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Start animations for each dot at random times
    dots.forEach((dot) => {
        const randomDelay = Math.random() * 5000; // Random delay of up to 5 seconds
        setTimeout(() => {
            animateDot(dot);
        }, randomDelay);
    });
});