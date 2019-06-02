import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Biography",
    'image': {
      'desc': "headshot photo of Travis Kupp",
      'src': "images/linkedin_only-4.jpg",
      'comment': ""
    }
  },
  {
    'title': "Manifesto",
    'image': {
      'desc': "example screenshot of an undefined project",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': "Coming Soon",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
