export function opInclude(str, opArr) {//this
    for (let i of opArr) {
      if (str.includes(i)) return true;
    }
    return false;
  }