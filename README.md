# CUSEC 2023 - Build your first Mobile App
> By Sanaa Syed ([LinkedIn](https://www.linkedin.com/in/sanaasy/))


<p align="center" width="100%"><img src='assets/inaction.gif' width=250 /></p>

### FOR THIS WORKSHOP, YOU WILL NEED:
- an IDE (I recommend VS Code)
- [Node.js](https://nodejs.org/en/) installed on your computer
- [Git](https://git-scm.com/)
- A terminal

## Installing and Setting up Expo
Follow the steps [here](https://docs.expo.dev/get-started/installation/) to install Expo.
#### TL;DR
1. macOS and Linux users need to download [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall)
2. Open your terminal and create an expo account using the command `npx expo register` (if you already have an expo account use `npx expo login`)
3. Download the Expo Go App on your phone
You're good to go!

## Setting up your expo project
Once you've successfully set up your Expo CLI and have downloaded the Expo Go app, you're ready to create a project! Expo will set you up with all the base code you need to start building your To do list app.

1. Create a project named <your-name>-to-do-list by running the command `npx create-expo-app <your-name>-to-do-list` in your terminal. (Make sure to do this in a location on your computer that you can find easily later on!)
    > You should see something like this when your project has been created:
<p align="center" width="100%"><img src='assets/setupexpoproject.png' width=450 /></p> 

2. Navigate to the project directory using `cd <you-name>-to-do-list`.

## Starting your development server
1. Run `npx expo start` and wait for a QR code to pop up in your terminal.
2. For Android users, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal. For Apple users, open the default Apple "Camera" app and scan the QR code you see in the terminal.

Once you see a screen that shows up like this, you're ready to start building! 🥳
<p align="center" width="100%"><img src='assets/initialexpo.png' width=200 /></p>

> You can play around with the code in the `App.js` file if you want to get more familiar with how React Native apps are set up. Add some text, 

## Building the task component
### Creating the `Task.js` file 
1. Start by creating a folder called `components` (either by right clicking and adding a new folder in VS Code/any editor or through the terminal `mkdir components`). Since React Native is component based, this will make storing all your components/files easier for searchability later on. This is especially useful when you have multiple components but for this project, we'll only be using one.
2. Within the components folder, create another folder called `Task` and within that folder, create a file called `Task.js`.
    
You should have a folder structure that looks like this: 

    ├── components
    │   └── Task
    │       └── Task.js
    
### Key imports from `react`
Since React Native is built from React, we'll have to import React at the top of any of our `.js` files.
    
At the top of your file, import `React` from the library `react` and the `useState` hook.

```import React, { useState } from 'react';```
    
We import `useState` with curly brackets because it is a named module.
    

### Key imports from `react-native`
Next, import the `View`, `Text` and `StyleSheet` components from `react-native`.
    
`import { View, Text, StyleSheet } from 'react-native';`
    
### File template
In React/React Native, the simplest way to define a component is to write a JavaScript function. 

The main Task component will be written in a Javascript anonymous function which will return a React Native element. This function will accept a single "props" (short for properties) object argument that will hold data and can be used in this file. 
    
Copy and past this template into your `Task.js` file:
    
```
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View>
      
    </View>
  )
}

# We export the Task component so that we can later use it in the App.js file!
export default Task;
```

A call to the `Task` component would look like 
`<Task text='Attend workshop at CUSEC!' />`

### Adding text to the Task
Using the props defined at the beginning of the Task function, we can add text to our task now. We'll be passing in a `text` attribute as the props from the `App.js` file later in this workshop. To call it in this file, it would look like: `props.text`.
    
Use the `View` and `Text` components imported from `react-native` to create a Text View within the already defined `View` component. This will be helpful for styling later on as it creates a container to hold both the checkbox and the text! 


    return (
        <View>
            <View>
                <Text>{props.text}</Text>
            </View>
        </View>
    )


### Building a checkbox 
When you complete a task, you'll want a way to check it off! [We'll be using the `Checkbox` component from the `expo-checkbox` library](https://docs.expo.dev/versions/latest/sdk/checkbox/).
  
1. Installe `expo-checkbox` by running `npx expo install expo-checkbox` in your terminal.
2. Add this import to the top of your file: `import Checkbox from 'expo-checkbox';`

The `useState` hook lets you add React state to function components.
  

    const Example = (props) => {
        const [count, setCount] = useState(0)
        return <div />;
    }

    
This code basically says that the variable `count` has a default value of 0 (`count = 0`). The `setCount` is a function that will automatically set the variable `count` to any other **integer** value that we give it at any other point in the code.
> Note: this default value can be any type (string, integer, boolean...).
    

    const Example = (props) => {
        const [count, setCount] = useState(0)
        
        return (
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        );
    }

    
This would increment the `count` variable by 1 every time the button is clicked.

Similarly, We'll use the `useState` hook to check if the checkbox is selected or not. 

Add `const [isSelected, setSelection] = useState(false);` right before your return statement in the `Task` function.
    
Next, using the `Checkbox` component, we can add

`<Checkbox value={isSelected} onValueChange={setSelection} color='#3a5a40' />`

 right before the `Text` component.

The `Checkbox` component handles the use of hook for us so we don't have to worry about anything else!
    
### Stylesheet
Now it's time to add some styles to your component using the `StyleSheet` we imported and your CSS skills!

Add a variable called styles above your export like this: `const styles = StyleSheet.create({});`

An example of the styling I used:

    const styles = StyleSheet.create({
      task: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      taskTextContainer: {
        maxWidth: '80%',
      },
      taskMargin: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      checkbox: {
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
    });
    
You can call these styles in your `Task` function by using the `style` attribute: `<View style={styles.task} />`. Play around with the stylings and add them to your code.
  
### Final Task.js file
<details>
  <summary>Answer</summary>
  
   ```
    import React, { useState } from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import Checkbox from 'expo-checkbox';

    const Task = (props) => {
      const [isSelected, setSelection] = useState(false);

      return (
        <View style={styles.task}>
          <View style={styles.taskMargin}>
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                color='#3a5a40'
                style={styles.checkbox}
              />
            <Text style={{ ...styles.taskText, textDecorationLine: isSelected ? "line-through" : "none" }}>{props.text}</Text>
          </View>
        </View>
      )
    }

    const styles = StyleSheet.create({
      task: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      taskTextContainer: {
        maxWidth: '80%',
      },
      taskMargin: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      checkbox: {
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
    });

    export default Task;
    ```
  
</details>

## Building the main screen
### Adding a title

### Creating the input bar

### Putting the tasks on the screen

### Stylesheet
