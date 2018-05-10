export function formatDate(date) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
}

const timePartsDef = [
  { label: 'day', inMilis: 24 * 60 * 60 * 1000 },
  { label: 'hr', inMilis: 60 * 60 * 1000 },
  { label: 'min', inMilis: 60 * 1000 },
  { label: 'sec', inMilis: 1000, roundFunc: Math.round },
];

export function getTimeDiffParts(milis_) {
  let milis = milis_;

  return timePartsDef.map(({ label, inMilis, roundFunc = Math.floor }) => {
    const value = roundFunc(milis / inMilis);
    milis -= value * inMilis;

    if (value > 1) label += 's';

    return { label, value };
  });
}
