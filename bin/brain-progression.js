#!/usr/bin/env node

import { gameTask, runBrainProgression } from '../src/games/brain-progression.js';
import engine from '../src/engine.js';

engine(gameTask, runBrainProgression);
