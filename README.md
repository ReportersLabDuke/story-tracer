# Story Tracer

Story Tracer is a Chrome extension that identifies the source information that web pages are based upon. Story Tracer uses the [ground-truth](https://github.com/ReportersLabDuke/ground-truth) node library.

## How it works

When you navigate to a webpage with Story Tracer added to Chrome, Story Tracer will try to identify the source behind the webpage by looking at the links on the page. If a likely source is identified, a popup will appear indicating that the page you are on might be based on content from another page:

![Story Tracer in action](https://pbs.twimg.com/media/DN1LB7KVoAEZy_7.jpg)

## Where can I get Story Tracer?

Story Tracer can be installed from the [Chrome webstore](https://chrome.google.com/webstore/detail/storytracer/gaghdhcnngehjkndpgbcocmdkiakagia).

## Local development

This repository can be cloned for local development. You can then add your development version of the extension to Chrome in developer mode by zipping up the repository and loading it as an unpacked extension from [chrome://extensions](chrome://extensions).

If you want to make changes to the ground-truth library and then use your version of ground-truth with Story Tracer, you can clone [ground-truth](https://github.com/ReportersLabDuke/ground-truth), install the [browserify](https://www.npmjs.com/package/browserify) npm package, and then use the following browserify command to create a browser-compatible bundle of ground-truth which can replace ground-truth-bundle.js in your copy of this repo:

```browserify -r ground-truth/index.js:ground-truth -i WNdb -i lapack -o ground-truth-bundle.js```

## License and copyright

Copyright Duke Reporters' Lab

Story Tracer is made available under the MIT licence

