let timer: any;

const _debounce = (time: number, action: any, params?: any) => {
  if (!params) params = [];
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    action(...params);

    clearTimeout(timer);
    timer = null;
  }, time);
};

export default _debounce;
