import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export interface Goal {
  id: number;
  text: string;
}

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<Array<Goal>>([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (text: string) => {
    setCourseGoals((preState) => [
      { id: new Date().getTime(), text },
      ...preState,
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: number) => {
    setTimeout(() => {
      setCourseGoals((preState) => preState.filter((x) => x.id !== id));
    }, 500);
  };

  return (
    <>
      <StatusBar style='light' />

      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(x) => `${x.id}`}
            renderItem={(x) => (
              <GoalItem goal={x.item} onGoalDelete={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    marginTop: 12,
  },
});
