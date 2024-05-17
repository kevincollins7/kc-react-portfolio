const outputTerminalText = async (terminalOutputs: string[]): Promise<void> => {
  let index = 0;

  while (index < terminalOutputs.length) {
    console.log('Attempt', index)
    console.log(terminalOutputs[index]);

    const textToWrite: string = terminalOutputs[index];
    const terminal = document.getElementById('terminalOutput')

    // const previousP = document.getElementById(`outputText${index - 1}`);
    // if (previousP) previousP.style.border = 'none';
    
    if (textToWrite === 'break') {
      const elements = document.querySelectorAll('output > p');
      // const previousP = document.getElementById('outputText');
      // previousP?.remove();
      for (const element of elements) {
        element.remove();
      }

      index++
      continue;
    }

    const newP: HTMLParagraphElement = document.createElement('p');
    newP.setAttribute('id', `outputText${index}}`);
    newP.innerHTML = ` ${textToWrite}`;

    const prompt = document.createElement('span');
    prompt.style.color = 'yellow';
    prompt.innerHTML = '$>';
    newP.prepend(prompt);

    terminal?.append(newP);

    await new Promise((resolve) => setTimeout(resolve, 6000));

    if (index !== terminalOutputs.length - 1) {
      console.log('Not equal - removing cursor')
      console.log(index);
      console.log(terminalOutputs.length);
      newP.style.border = 'none'
    }
    
    index++
    continue;
  }
}

export {
  outputTerminalText,
}
