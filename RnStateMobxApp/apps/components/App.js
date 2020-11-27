/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import CounterList from './CounterList';
import PropTypes from 'prop-types';
import CounterListContainer from '../containers/CounterListContainer';

const App = ({counter, handleIncrement, handleDecrement, handleAddCounter, handleRemoveCounter}) => {
    return (
        <ScrollView style={styles.scroll}>
            <CounterListContainer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {flex: 1,width: '100%',backgroundColor: '#e9e9e9', paddingTop: '10%'},
    counterButton: {flexDirection: 'row',width: '100%',alignItems: 'center',justifyContent: 'center'},
});

App.propTypes = {
    counter: PropTypes.arrayOf(PropTypes.shape({
        counterNum: PropTypes.number,
    })),
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
    handleAddCounter: PropTypes.func,
    handleRemoveCounter: PropTypes.func,
};

App.defaultProps = {
    counter: [],
    handleIncrement: () => console.warn('undefined handleIncrement'),
    handleDecrement: () => console.warn('undefined handleDecrement'),
    handleAddCounter: () => console.warn('undefined handleAddCounter'),
    handleRemoveCounter: () => console.warn('undefined handleRemoveCounter'),
};

export default App;
