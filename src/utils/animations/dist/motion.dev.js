"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footerVariants = exports.zoomIn = exports.planetVariants = exports.fadeIn = exports.textVariant2 = exports.textContainer = exports.textVariant = exports.staggerContainer = exports.slideIn = exports.navVariants = void 0;
var navVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1
    }
  }
};
exports.navVariants = navVariants;

var slideIn = function slideIn(direction, type, delay, duration) {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  };
};

exports.slideIn = slideIn;

var staggerContainer = function staggerContainer(staggerChildren, delayChildren) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren
      }
    }
  };
};

exports.staggerContainer = staggerContainer;

var textVariant = function textVariant(delay) {
  return {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  };
};

exports.textVariant = textVariant;
var textContainer = {
  hidden: {
    opacity: 0
  },
  show: function show() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: i * 0.1
      }
    };
  }
};
exports.textContainer = textContainer;
var textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn'
    }
  }
};
exports.textVariant2 = textVariant2;

var fadeIn = function fadeIn(direction, type, delay, duration) {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  };
};

exports.fadeIn = fadeIn;

var planetVariants = function planetVariants(direction) {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5
      }
    }
  };
};

exports.planetVariants = planetVariants;

var zoomIn = function zoomIn(delay, duration) {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut'
      }
    }
  };
};

exports.zoomIn = zoomIn;
var footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5
    }
  }
};
exports.footerVariants = footerVariants;