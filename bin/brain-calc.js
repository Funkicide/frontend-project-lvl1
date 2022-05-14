#!/usr/bin/env node

import { gameTask, runBrainCalc } from '../src/games/brain-calc-logic.js';
import engine from '../src/engine.js';

engine(gameTask, runBrainCalc);
