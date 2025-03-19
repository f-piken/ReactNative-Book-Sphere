const colors = {
    primary: (opacity = 1) => `rgba(90, 103, 216, ${opacity})`, // #5A67D8
    background: (opacity = 1) => `rgba(248, 248, 248, ${opacity})`, // #F8F8F8
    banner: (opacity = 1) => `rgba(146, 215, 237, ${opacity})`, // #92D7ED
    textDark: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`, // #333333
    textLight: (opacity = 1) => `rgba(136, 136, 136, ${opacity})`, // #888888
    border: (opacity = 1) => `rgba(209, 209, 209, ${opacity})`, // #D1D1D1
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // #FFFFFF
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // #000000
    yellow: (opacity = 1) => `rgba(255, 138, 101, ${opacity})`, // #FF8A65
};


export default colors;
