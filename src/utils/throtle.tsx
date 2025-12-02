let timer: any;

const _throttle = (time: number, action: any, params?: any) => {
  if (!params) params = [];
  if (timer) return;
  timer = setTimeout(() => {
    action(...params);

    clearTimeout(timer);
    timer = null;
  }, time);
};

export default _throttle;
