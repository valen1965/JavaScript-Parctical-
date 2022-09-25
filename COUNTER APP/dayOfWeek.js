const date = new Date(2027, 03, 24);
// Day of week

// 👇️ Saturday
console.log(
  date.toLocaleDateString('en-US', {
    weekday: 'long',
  }),
);

// 👇️ Sat
console.log(
  date.toLocaleDateString('en-US', {
    weekday: 'short',
  }),
);

// 👇️ S
console.log(
  date.toLocaleDateString('en-US', {
    weekday: 'narrow',
  }),
);