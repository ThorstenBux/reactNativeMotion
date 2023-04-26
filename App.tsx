/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Button} from 'react-native';

import RNPermissions, {PERMISSIONS} from 'react-native-permissions';
import {WebView} from 'react-native-webview';

function App(): JSX.Element {
  return (
    <>
      <WebView
        source={{
          uri: 'https://xrii-webar-staging.web.app/?path=https://cdn.xrii.io/experiences/easter/XRii-Easter',
        }}
        style={{width: '100%', height: '100%'}}
        geolocationEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        // onMessage={handleArMessage}
        mediaCapturePermissionGrantType={'grant'}
        allowsInlineMediaPlayback={true}
      />
      <Button
        title="Request motion"
        onPress={() => {
          console.log('Pressed button');
          RNPermissions.request(PERMISSIONS.IOS.MOTION)
            .then(status => {
              console.log('request(MOTION)', status);
            })
            .catch(error => {
              console.error(error);
            });
        }}
      />
    </>
  );
}

export default App;
