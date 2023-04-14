import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Divider, FAB, List, Portal} from 'react-native-paper';
import ActionBar from './components/ActionBar';

interface IMyFriendsProps {}

const MyFriends: React.FunctionComponent<IMyFriendsProps> = (props) => {
  const isScreenFocused = useIsFocused();
  const [fabIsOpen, setFabIsOpen] = useState(false);

  const [secondaryHeaderIsOpen, setSecondaryHeaderIsOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');
  const navigation = useNavigation();

  const openHeader = useCallback(
    (str: string) => {
      setSelectedItemName(str);
      setSecondaryHeaderIsOpen(!secondaryHeaderIsOpen);
    },
    [secondaryHeaderIsOpen]
  );

  const closeHeader = useCallback(() => {
    setSecondaryHeaderIsOpen(false);
    setSelectedItemName('');
  }, []);

  useEffect(() => {
    if (secondaryHeaderIsOpen) {
      navigation.setOptions({
        header: (props: any) => (
          <ActionBar {...props} title={selectedItemName} close={closeHeader} />
        ),
      });
    } else {
      navigation.setOptions({header: undefined});
    }
  }, [secondaryHeaderIsOpen, selectedItemName]);

  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
      <List.Item
        title='Friend #1'
        description='APR 2 | 3:31 PM'
        left={(props) => <List.Icon {...props} icon='account' />}
        style={{width: '100%'}}
        onPress={() => {}}
        onLongPress={() => openHeader('Friend #1')}
      />
      <Divider style={{width: '100%'}} />
      <List.Item
        title='Friend #2'
        description='APR 2 | 4:15 PM'
        left={(props) => <List.Icon {...props} icon='account' />}
        style={{width: '100%'}}
        onPress={() => {}}
        onLongPress={() => openHeader('Friend #2')}
      />
      <Divider style={{width: '100%'}} />
       <List.Item
        title='Friend #3'
        description='APR 2 | 9:55 PM'
        left={(props) => <List.Icon {...props} icon='account' />}
        style={{width: '100%'}}
        onPress={() => {}}
        onLongPress={() => openHeader('Friend #3')}
      />
      <Divider style={{width: '100%'}} />
      <List.Item
        title='Friend #4'
        description='APR 2 | 11:45 PM'
        left={(props) => <List.Icon {...props} icon='account' />}
        style={{width: '100%'}}
        onPress={() => {}}
        onLongPress={() => openHeader('Friend #4')}
      />
      <Divider style={{width: '100%'}} />
      <List.Item
        title='Friend #5'
        description='APR 3 | 7:36 PM'
        left={(props) => <List.Icon {...props} icon='account' />}
        style={{width: '100%'}}
        onPress={() => {}}
        onLongPress={() => openHeader('Friend #5')}
      />
      <Divider style={{width: '100%'}} />
      <Portal>
        <FAB.Group
          visible={isScreenFocused}
          open={fabIsOpen}
          onStateChange={({open}) => setFabIsOpen(open)}
          icon={fabIsOpen ? 'close' : 'account-multiple'}
          actions={[
            {
              icon: 'plus',
              label: 'Add new friend',
              onPress: () => {},
            },
            {
              icon: 'file-export',
              label: 'Export friend list',
              onPress: () => {},
            },
          ]}
        />
      </Portal>
    </View>
  );
};

export default MyFriends;
