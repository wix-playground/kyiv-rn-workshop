Debugging
---------


### Getting started

Install & launch react-native-debugger

```
brew update && brew cask install react-native-debugger

open rndebugger://set-debugger-loc?port=19001
```


### Debugging JS


Production:

```

+--------------------------+
|                          |
|          Mobile          |
|                          |
|                          |
| +----------------------+ |
| |                      | |
| |   Native             | |
| |                      | |
| |     ^                | |
| |     |                | |
| |     |                | |
| |     | Instructions   | |
| |     |                | |
| |     |                | |
| |     v                | |
| |                      | |
| |  JS Engine           | |
| |                      | |
| |  (bundle.js)         | |
| |                      | |
| +----------------------+ |
|                          |
+--------------------------+

```

Default development mode:

```

+--------------------------+
|                          |
|          Mobile          |
|                          |
|                          |
| +----------------------+ |
| |                      | |
| |   Native             | |
| |                      | |
| |     ^                | |
| |     |                | |
| |     |                | |
| |     | Instructions   | |         Give me JS       +-----------------------+
| |     |                | |   +----------------->    |                       |  <-------+  module1.js
| |     |                | |                          |                       |
| |     v                | |                          |       Packager        |  <-------+  module2.js
| |                      | |         bundle.js        |                       |
| |  JS Engine   <-------------------------------+    |                       |  <-------+  module3.js
| |                      | |                          +-----------------------+
| +----------------------+ |
|                          |
+--------------------------+

```


With remote debugging:

```

+--------------------------+
|                          |
|          Mobile          |           start          +-----------------------+
|                          |   ------------------->   |                       |  <-------+  module1.js
|                          |                          |                       |
| +----------------------+ |                          |       Packager        |  <-------+  module2.js
| |                      | |     Instructions (WS)    |                       |
| |        Native  <------------------------------>   |                       |  <-------+  module3.js
| |                      | |                          +-----------------------+
| +----------------------+ |                                    
|                          |                                |          ^
+--------------------------+                                |          |
                                                Execute JS  |          |  Instructions (WS)
                                                            |          |
                                                            v          v

                                                      +-----------------------+         +------------+
                                                      |                       |         |            |
                                                      |                       |         |            |
                                                      |       JS Engine       | <-----> |            |
                                                      |       (Browser)       |         |  DevTools  |
                                                      |                       |         |            |
                                                      |                       |         |            |
                                                      +-----------------------+         +------------+


```


### Debugging Native

Launch Xcode
