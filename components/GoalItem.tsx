import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Goal } from '../App';

interface Props {
  goal: Goal;
  onGoalDelete: (id: number) => void;
}

export default function GoalItem({ goal, onGoalDelete }: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644', borderless: true }}
        style={({ pressed }) => (pressed ? styles.pressedItem : {})}
        onPress={() => onGoalDelete(goal.id)}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 7,
    backgroundColor: '#5e0acc',
  },

  goalText: {
    color: 'white',
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
