#!/usr/bin/env node

import { brainProgressionTask, generateBrainProgression } from '../src/games/brain-progression.js';
import engine from '../src/engine.js';

engine(brainProgressionTask, generateBrainProgression);
