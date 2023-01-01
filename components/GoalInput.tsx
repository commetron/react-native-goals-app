import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

interface Props {
  visible: boolean;
  onAddGoal: (text: string) => void;
  onCancel: () => void;
}

export default function GoalInput({ visible, onAddGoal, onCancel }: Props) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim() == '') {
      return;
    }

    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Your goal!'
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='#f31282' onPress={onCancel} />
          </View>

          <View style={styles.button}>
            <Button title='Add Goal' color='#b180f0' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#3116b6',
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 5,
    width: '100%',
    padding: 12,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
