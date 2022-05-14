#!/usr/bin/env node

import { gameTask, runGameProgression } from '../src/games/brain-progression-logic.js';
import engine from '../src/engine.js';

engine(gameTask, runGameProgression);
