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
  
  fl1.animate(flTumbling, flTiming);
  
  const animateWithPromises = (element) => {
    return element.animate(flTumbling, flTiming).finished;
  };
  
  const animatefl2Afterfl1 = async () => {
    await animateWithPromises(fl1);
    await animateWithPromises(fl2);
    await animateWithPromises(fl3);
  };
  
  animatefl2Afterfl1();
