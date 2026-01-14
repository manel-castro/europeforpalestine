const isTransitionFinished = (element: HTMLElement, _callback: any) => {
  function getTransitionEndEventName(): string | undefined {
    interface Transitions {
      [key: string]: string;
    }

    let t: any;
    let el = document.createElement("fakeelement");
    let transitions: Transitions = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      MSTransition: "msTransitionEnd",
      OTransition: "oTransitionEnd",
      transition: "transitionEnd",
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function callback() {
    if (transitionEndEventName)
      element.removeEventListener(transitionEndEventName, callback);
    _callback();
  }

  let transitionEndEventName = getTransitionEndEventName();

  if (transitionEndEventName)
    element.addEventListener(transitionEndEventName, callback);
};

export default isTransitionFinished;
