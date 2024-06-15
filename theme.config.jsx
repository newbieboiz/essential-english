export default {
  logo: <b>Essential English</b>,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Essential English',
    };
  },
  toc: {
    float: false,
  },
  // ... other theme options
};
