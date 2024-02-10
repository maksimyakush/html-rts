const SECTIONS_SELECTORS = {
  SECTION_MAIN: '.section-main',
  SECTION_ABOUT: '.section-about',
  SECTION_SKILLS: '.section-skills',
  SECTION_PORTFOLIO: '.section-portfolio',
  SECTION_FEEDBACK: '.section-feedback',
}

const BREAKPOINTS = {
  0: 0,
  MD: 768
}

const bodyEl = document.querySelector("body");
const navigationLinkEls = document.querySelectorAll('[data-nav] a');
const menuButtonEl = document.querySelector('.c-menu');
const menuEl = document.querySelector('[data-menu]');

const getCssFilterBySection = (section) => {
  const filterPrimary = 'invert(51%) sepia(22%) saturate(3395%) hue-rotate(223deg) brightness(101%) contrast(101%)';
  const filterSecondary = 'invert(84%) sepia(5%) saturate(2428%) hue-rotate(177deg) brightness(97%) contrast(108%)';

  switch (section) {
    case SECTIONS_SELECTORS.SECTION_MAIN: return filterPrimary;
    case SECTIONS_SELECTORS.SECTION_ABOUT: return filterSecondary;
    case SECTIONS_SELECTORS.SECTION_SKILLS: return filterPrimary;
    case SECTIONS_SELECTORS.SECTION_PORTFOLIO: return filterPrimary;
    case SECTIONS_SELECTORS.SECTION_FEEDBACK: return filterPrimary;

    default:
      throw new Error(`You must define as property ${SECTIONS_SELECTORS.SECTION_MAIN} or ${SECTIONS_SELECTORS.SECTION_ABOUT}`);
  }
}

const images = [
  {
    src: '/images/oval14x11.svg',
    alt: 'Planet',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        right: '22%',
        top: '22%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '41%',
        top: '8%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '48%',
        top: '14%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '11%',
        top: '14%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)

      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '42%',
        bottom: '31%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '30%',
        bottom: '17%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)

      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '41%',
        bottom: '17%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        right: '18%',
        top: '14%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '31%',
        top: '10%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '17%',
        left: '14%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '27%',
        right: '30%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '13%',
        top: '40%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '17%',
        bottom: '42%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        right: '20%',
        top: '22%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_SKILLS)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '24%',
        right: '17%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_SKILLS)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '24%',
        top: '12%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_PORTFOLIO)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '30%',
        right: '22%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_FEEDBACK)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '30%',
        bottom: '17%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_FEEDBACK)
      },

    ]
  },
  {
    src: '/images/oval18x17.svg',
    alt: 'Planet',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        right: '15%',
        top: '19%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '39%',
        bottom: '23%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '25%',
        bottom: '24%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_MAIN)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['0'],
        position: 'absolute',
        right: '42%',
        top: '12%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '5%',
        top: '10%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '33%',
        left: '14%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_ABOUT)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        top: '15%',
        right: '36%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_SKILLS)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '18%',
        right: '19%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_SKILLS)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '6%',
        left: '26%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_PORTFOLIO)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '18%',
        bottom: '22%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_FEEDBACK)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '24%',
        top: '23%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_FEEDBACK)
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '21%',
        left: '10%',
        filter: getCssFilterBySection(SECTIONS_SELECTORS.SECTION_FEEDBACK)
      },
    ]
  },
  {
    src: '/images/comet.svg',
    alt: 'Comet',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['0'],
        position: 'absolute',
        right: '10%',
        bottom: '15%',
        width: '56px',
        height: '65px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '25%',
        bottom: '16%',
        width: '113px',
        height: '130px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '14px',
        top: '18%',
        width: '72px',
        height: '84px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '14px',
        top: '23%',
        width: '72px',
        height: '84px',
        transform: 'scaleX(-1)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '7%',
        bottom: '13%',
        width: '113px',
        height: '130px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        left: '7%',
        top: '13%',
        width: '50px',
        height: '58px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '12%',
        top: '18%',
        width: '66px',
        height: '78px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '13%',
        top: '29%',
        width: '42px',
        height: '50px'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '10%',
        right: '26%',
        width: '113px',
        height: '130px',
        transform: 'scaleX(-1)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        top: '10%',
        right: '26%',
        width: '64px',
        height: '71px',
        transform: 'scaleX(-1)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '13%',
        right: '4px',
        width: '42px',
        height: '50px',
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '13%',
        left: '4%',
        width: '113px',
        height: '130px',
        transform: 'scaleX(-1)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        bottom: '26%',
        left: '46%',
        width: '56px',
        height: '66px',
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '17%',
        left: '25%',
        width: '113px',
        height: '130px',
        transform: 'scaleX(-1)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        bottom: '10%',
        left: '27%',
        width: '66px',
        height: '78px',
      },
    ]
  },
  {
    src: '/images/jupiter.png',
    alt: 'Jupiter',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_MAIN,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '1%',
        top: '15%',
        width: '425px',
        height: '355px',
        'object-fit': 'contain',
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['0'],
        position: 'absolute',
        right: '0%',
        bottom: '16%',
        width: '90px',
        height: '90px',
        'object-fit': 'contain',
        transform: 'scaleX(-1)',
        filter: 'saturate(195%)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        right: '0%',
        bottom: '26%',
        width: '246px',
        height: '246px',
        'object-fit': 'contain',
        transform: 'scaleX(-1)',
        filter: 'saturate(195%)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS[0],
        position: 'absolute',
        left: '-11%',
        bottom: '10%',
        width: '130px',
        height: '130px',
        'object-fit': 'contain',
        transform: ' rotate(165deg)',
        filter: 'saturate(195%)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_PORTFOLIO,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '0%',
        bottom: '10%',
        width: '130px',
        height: '130px',
        'object-fit': 'contain',
        transform: 'rotate(165deg)',
        filter: 'saturate(195%)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_FEEDBACK,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        left: '0%',
        bottom: '0%',
        width: '246px',
        height: '246px',
        'object-fit': 'contain',
        filter: 'saturate(195%)',
        transform: 'rotate(90deg) scaleX(-1)'
      },
    ]
  },
  {
    src: '/images/planet.svg',
    alt: 'Planet',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['0'],
        position: 'absolute',
        top: '14%',
        left: '-4%',
        width: '80px',
        height: '80px',
        filter: 'saturate(195%)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        top: '12%',
        right: '-4%',
        width: '220px',
        height: '220px',
        filter: 'saturate(195%)'
      },
      {
        parent: SECTIONS_SELECTORS.SECTION_SKILLS,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        bottom: '5%',
        left: '-3%',
        width: '200px',
        height: '200px',
        filter: 'saturate(195%)',
        rotate: '150deg',
      }
    ]
  },
  {
    src: '/images/clouds.svg',
    alt: 'Clouds',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['MD'],
        position: 'absolute',
        bottom: '9%',
        left: '4%',
      },
    ]
  },
  {
    src: '/images/two_clouds.svg',
    alt: 'Two Clouds',
    data: [
      {
        parent: SECTIONS_SELECTORS.SECTION_ABOUT,
        breakpoint: BREAKPOINTS['0'],
        position: 'absolute',
        bottom: '3%',
        right: '30%',
      },
    ]
  }
]

const useState = (state = {}) => {
  const subscribers = [];
  const setState = (newState) => {
    state = { ...state, ...newState }
    subscribers.forEach(fn => fn())
  };
  const subscribe = (fn) => subscribers.push(fn);
  const getState = () => state;

  return [getState, setState, subscribe];
}

let initialState = {
  breakpoint: null,
  isMenuOpened: false,
  activeLink: null
}

const [getState, setState, subscribe] = useState(initialState);


const changeProps = (obj, props) => {
  Object.keys(props).forEach(prop => obj[prop] = props[prop] ?? obj[prop])
}

const createImage = ({ src, alt, style }) => {
  const img = document.createElement('img');
  changeProps(img, { src, alt })
  changeProps(img.style, style);

  return img;
}

const populateImages = () => {
  const PREFIX = 'data-image';
  document.querySelectorAll(`[${PREFIX}='']`).forEach(item => item.remove())
  for (let image of images) {
    const { src, alt, data } = image;
    for (let item of data) {
      const { parent, breakpoint, ...style } = item;
      if (breakpoint === getState().breakpoint) {
        const createdImage = createImage({ src, alt, style });
        createdImage.setAttribute(PREFIX, '');
        document.querySelector(parent).append(createdImage)
      }
    }
  }
}

const getNewBreakpointValue = (inlineViewSize) =>
  inlineViewSize < BREAKPOINTS.MD ? BREAKPOINTS[0] : BREAKPOINTS['MD'];

const resizeObserver = new ResizeObserver((entries) => {
  const [bodyData] = entries;
  const {
    contentBoxSize: [{ inlineSize }]
  } = bodyData;
  const currentBreakpoint = getNewBreakpointValue(inlineSize);
  if (currentBreakpoint !== getState().breakpoint) {
    setState({ breakpoint: getNewBreakpointValue(inlineSize) })
    populateImages()
  }
});

resizeObserver.observe(bodyEl);

setState({ activeLink: window.location.hash })

menuButtonEl.addEventListener('click', (e) => {
  setState(({ isMenuOpened: !getState().isMenuOpened }))
})

subscribe(() => {
  if (getState().isMenuOpened) {
    menuButtonEl.classList.add('opened')
    menuEl.style.display = 'flex'
  } else {
    menuButtonEl.classList.remove('opened')
    menuEl.style.display = 'none'
  }

  navigationLinkEls.forEach(link => {
    link.classList.remove('active')
    if (getState().activeLink === link.hash) {
      link.classList.add('active')
    }
  })

  location.hash = getState().activeLink;
})

const handleActiveLinkOnScroll = () => {
  const section = document.querySelectorAll('section')[Math.floor(scrollY / innerHeight)].id;
  setState({ activeLink: section ? `#${section}` : section })
}

document.addEventListener("wheel", handleActiveLinkOnScroll);
document.addEventListener("touchstart", handleActiveLinkOnScroll);

document.querySelectorAll('[data-nav] a').forEach(item => {
  item.addEventListener('click', (e) => {
    setState({ activeLink: e.target.hash, isMenuOpened: false })
  })
})
