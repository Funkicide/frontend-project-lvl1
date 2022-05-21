#!/usr/bin/env node

import { brainEvenTask, generateBrainEven } from '../src/games/brain-even.js';
import engine from '../src/engine.js';

engine(brainEvenTask, generateBrainEven);
