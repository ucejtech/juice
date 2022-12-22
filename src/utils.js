export const generateRandomElementId = () => {
  return `${Date.now().toString(32) + Math.random().toString(16)}`.replace(
    /\./g,
    ''
  );
};
