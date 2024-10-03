const flTumbling = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];

const flTiming = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
};

const fl1 = document.querySelector("#fl1");
const fl2 = document.querySelector("#fl2");
const fl3 = document.querySelector("#fl3");

// Function to animate each element
const animateWithPromises = (element) => {
    return element.animate(flTumbling, flTiming).finished;
};

// Function to animate fl1, fl2, and fl3 sequentially
const animatePlanets = async () => {
    await animateWithPromises(fl1); // Animate fl1
    await animateWithPromises(fl2); // Animate fl2 after fl1 is done
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before starting fl3
    await animateWithPromises(fl3); // Animate fl3 after fl2 is done
};

animatePlanets(); // Start the animation sequence
