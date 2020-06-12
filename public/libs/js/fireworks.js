let molinkEl = document.querySelector('body');
let moTimeline = new mojs.Timeline();
let moburst1 = new mojs.Burst({
  left: 0,
  top: 0,
  parent: molinkEl,
  duration: 1300,
  shape: 'circle',
  fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
  // x: '0%',
  // y: '-50%',
  radius: { 0: 60 },
  count: 6,
  isRunLess: true,
  isYoyo: true,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});
let moburst2 = new mojs.Burst({
  left: 0,
  top: 0,
  parent: molinkEl,
  duration: 1600,
  delay: 100,
  shape: 'circle',
  fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
  // x: '-400%',
  // y: '-420%',
  radius: { 0: 120 },
  count: 14,
  isRunLess: true,
  isYoyo: true,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});
let moburst3 = new mojs.Burst({
  left: 0,
  top: 0,
  parent: molinkEl,
  duration: 1500,
  delay: 200,
  shape: 'circle',
  fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
  // x: '130%',
  // y: '-70%',
  radius: { 0: 90 },
  count: 8,
  isRunLess: true,
  isYoyo: true,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});
let moburst4 = new mojs.Burst({
  left: 0,
  top: 0,
  parent: molinkEl,
  duration: 2000,
  delay: 300,
  shape: 'circle',
  fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
  // x: '-20%',
  // y: '-150%',
  radius: { 0: 60 },
  count: 14,
  isRunLess: true,
  isYoyo: true,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});
let moburst5 = new mojs.Burst({
  left: 0,
  top: 0,
  parent: molinkEl,
  duration: 1400,
  delay: 400,
  shape: 'circle',
  fill: ['#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE'],
  // x: '30%',
  // y: '-100%',
  radius: { 0: 60 },
  count: 12,
  isRunLess: true,
  isYoyo: true,
  easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
});

moTimeline.add(moburst1, moburst2, moburst3, moburst4, moburst5);
molinkEl.addEventListener('click', function (e) {
  let x = e.pageX,
    y = e.pageY;

  moburst1.tune({
    x,
    y
  });
  moburst2.tune({
    x,
    y
  });
  moburst3.tune({
    x,
    y
  });
  moburst4.tune({
    x,
    y
  });
  moburst5.tune({
    x,
    y
  });

  moTimeline.replay();
});