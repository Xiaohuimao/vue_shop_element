export function debounce(func,delay) {
  // 防抖动函数
  let timer = null
  return function(...args) {
   //  clearTimeout用来阻止延时函数的调用
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}