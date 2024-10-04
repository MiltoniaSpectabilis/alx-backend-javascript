#!/usr/bin/node

import ClassRoom from './0-classroom.js';

export default () => [19, 20, 34].map(size => new ClassRoom(size));
