#!/usr/bin/env node

import { brainGcdTask, generateBrainGcd } from '../src/games/brain-gcd.js';
import engine from '../src/engine.js';

engine(brainGcdTask, generateBrainGcd);
