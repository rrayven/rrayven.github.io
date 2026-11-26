# Lenovo-Check
Built with React using Vite


## Accessibility

### Sections

#### Keyboard:

- Needs a keyboard escape hatch, try double escape in a certain window
- Make it only capture all keypresses after clicked on via enter
- Add some way to overwrite keys via keyboard (+mouse)

#### Camera:

- Needs to show errors better, especially access errors
    - NotAllowedError
    - NotFoundError

#### Audio:

- Initially a pop-up over the whole section prompts you to allow mic permissions
    - The user can opt to only test speakers if they'd like
- There is then a selector for Laptop/Headset Speakers/Mic
- There is then an option to automatically test the laptop speakers, mic, and the headset mic
    - Gives the option afterwards to override the results or retest
- It then prompts you to plug in your headset to each port with a diagram
    - When it detects the headset getting unplugged, it plays a tone a second after being plugged in again
    - It gives buttons to click pass/fail, but if you continue without failing it then it assumes a pass
    - Each port graphically shows its state, which can be overriden by clicking on it.
- View:

![Diagram of Logic](diagram.png)


#### Loose DOM structure:

- audio
    - pop up w/ prompt + ask for mic permissions
    - allow:
        - in/out selector
        - auto test / manual test
        - chart of results
        - option to retest
    - speakers testing at end of next section:
    - diagram of ports, svg?
        - shows which port to test, then its state (pass/fail)
            - pass/fail button at bottom
        - allows you to click on each to retest
    - start button over the whole thing w/ stop button and retest button afterwards
    - speaker selector w/ play jingle button
