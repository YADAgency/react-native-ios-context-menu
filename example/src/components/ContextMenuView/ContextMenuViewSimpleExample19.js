import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ExampleContextMenuItem } from '../ExampleContextMenuItem';


export function ContextMenuViewSimpleExample19(props) {

  return(
    <ExampleContextMenuItem
      {...props}
      title={'Simple Example #19'}
      subtitle={'Web Preview'}
      desc={`Show a SFSafariViewController for the context menu.`}
      // `ContextMenuView` Props
      previewConfig={{
        previewType: 'WEBVIEW',
        previewSize: 'STRETCH',
        previewUrl: 'https://github.com/dominicstop/react-native-ios-context-menu',
        backgroundColor: 'white'
      }}
      menuConfig={{
        menuTitle: 'ContextMenuViewSimpleExample19',
      }}
    />
  );
};

const styles = StyleSheet.create({
});