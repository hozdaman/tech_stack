

//import libraries for making Component
import React from 'react';
import { Text, View } from 'react-native';


//make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#2b59e2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#e61f1f',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};


//make the Component available to other parts of the app
export { Header };
