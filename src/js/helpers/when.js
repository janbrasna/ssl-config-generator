export default (left, operator, right) => {
  let operators = {
    '==': (l,r) => l == r,
    '!=': (l,r) => l != r,
    '>' : (l,r) => (+l) > (+r),
    '>=': (l,r) => ((+l) > (+r)) || (l == r),
    '<' : (l,r) => (+l) < (+r),
    '<=': (l,r) => ((+l) < (+r)) || (l == r),
    '||': (l,r) => l || r,
    '&&': (l,r) => l && r,
    '%' : (l,r) => (l % r) === 0
  }
  return operators[operator](left,right);
};
