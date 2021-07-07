
import React from 'react';


import * as Sentry from '@sentry/react-native';

//Initialize Sentry with your dsn id

Sentry.init({ 
  dsn: '', 
});



function App() {
  return (
    <View style={styles.container}>
      
      <Text>Olá, Sentry!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
