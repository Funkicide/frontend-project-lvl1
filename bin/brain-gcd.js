#!/usr/bin/env node

import { gameTask, runBrainGcd } from '../src/games/brain-gcd.js';
import engine from '../src/engine.js';

engine(gameTask, runBrainGcd);
