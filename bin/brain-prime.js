#!/usr/bin/env node

import { gameTask, runBrainPrime } from '../src/games/brain-prime.js';
import engine from '../src/engine.js';

engine(gameTask, runBrainPrime);
