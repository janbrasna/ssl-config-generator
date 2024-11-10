export default (...args) => {
  return Array.prototype.slice.call(args, 0, args.length - 1).some(Boolean);
};
