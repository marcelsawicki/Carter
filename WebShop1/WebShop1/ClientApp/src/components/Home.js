import React, { Component } from 'react';
import { Gallery } from './Gallery';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <Gallery />
      </div>
    );
  }
}
