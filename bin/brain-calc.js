#!/usr/bin/env node

import { brainCalcTask, generateBrainCalc } from '../src/games/brain-calc.js';
import engine from '../src/engine.js';

engine(brainCalcTask, generateBrainCalc);
