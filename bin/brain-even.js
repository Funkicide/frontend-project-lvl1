#!/usr/bin/env node

import { gameTask, runBrainEven } from '../src/games/brain-even.js';
import engine from '../src/engine.js';

engine(gameTask, runBrainEven);
