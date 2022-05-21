#!/usr/bin/env node

import { brainPrimeTask, generateBrainPrime } from '../src/games/brain-prime.js';
import engine from '../src/engine.js';

engine(brainPrimeTask, generateBrainPrime);
