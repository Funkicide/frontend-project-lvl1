#!/usr/bin/env node

import { gameTask, runBrainGcd } from '../src/games/brain-gcd-logic.js';
import engine from '../src/engine.js';

engine(gameTask, runBrainGcd);
